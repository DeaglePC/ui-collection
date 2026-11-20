import{r as G,j as M}from"./client-CsvIHAk3.js";const we=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,Le=`
precision highp float;

#define MAX_TRAYS 6

uniform vec2 u_res;
uniform float u_time;
uniform float u_trayCount;
uniform float u_capSpacing;   // normalized (fraction of width) cap-to-cap spacing
uniform vec3 u_base;
uniform vec3 u_frothLo;
uniform vec3 u_frothHi;
uniform vec3 u_hover;         // x, yTop (both normalized 0..1), strength 0..1
uniform float u_hoverRadius;  // normalized fraction of width

float hash21(vec2 p) {
  p = fract(p * vec2(419.2, 371.9));
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float y = 1.0 - uv.y; // top-down: 0 = ceiling, 1 = base of the stack

  float trayGap = 1.0 / u_trayCount;
  vec3 col = u_base;

  // screen-space circular hover boost, evaluated once (shared by every band)
  vec2 hoverPx = vec2((uv.x - u_hover.x) * u_res.x, (y - u_hover.y) * u_res.y);
  float hoverDistPx = length(hoverPx);
  float hoverRadiusPx = max(1.0, u_hoverRadius * u_res.x);
  float hoverT = u_hover.z * smoothstep(hoverRadiusPx, 0.0, hoverDistPx);

  float capIdxF = floor(uv.x / u_capSpacing);
  float capLocalX = (fract(uv.x / u_capSpacing) - 0.5) * u_capSpacing;

  for (int i = 0; i < MAX_TRAYS; i++) {
    if (float(i) >= u_trayCount) break;

    float floorY = (float(i) + 1.0) * trayGap;
    float tLocal = u_time - float(i) * 0.18;

    // froth height: 30-55% of tray gap, 1.8s period, boosted locally by hover
    float frothBase = 0.30 + 0.25 * (0.5 + 0.5 * sin(tLocal * (6.28318 / 1.8)));
    float frothFrac = clamp(frothBase * (1.0 + 0.3 * hoverT), 0.0, 0.9);
    float frothTopY = floorY - frothFrac * trayGap;

    // liquid lateral creep: inlet (x=0) to weir (x=1), compressed to a ~2.2s
    // traverse so a full flow/spill cycle reads inside the 2.5s alive-at-rest
    // checkpoint (see doc comment above the shader source).
    float raw = tLocal * (1.0 / 2.2);
    float xLiquid = fract(raw);
    float spillFrac = 0.25 / 2.2;
    float spillT = xLiquid > (1.0 - spillFrac) ? (xLiquid - (1.0 - spillFrac)) / spillFrac : 0.0;

    if (y <= floorY && y >= frothTopY) {
      float densityT = clamp((y - frothTopY) / max(frothFrac * trayGap, 0.0001), 0.0, 1.0);
      float n = hash21(vec2(floor(uv.x * 180.0), floor(y * 400.0) + tLocal * 6.0));
      float tex = mix(0.85, 1.15, n);
      float ink = clamp(densityT * tex, 0.0, 1.0);
      // liquid flow ripple: a brighter band tracks xLiquid across the froth
      float flowBand = smoothstep(0.05, 0.0, abs(uv.x - xLiquid));
      ink = clamp(ink + flowBand * 0.25 + hoverT * 0.15, 0.0, 1.0);
      col = mix(u_frothLo, u_frothHi, ink);
    }

    // weir spill: a brief streak at the weir edge bridging into the band below
    float spillDepth = 0.14 * trayGap;
    if (spillT > 0.0 && y > floorY && y < floorY + spillDepth) {
      float edgeT = smoothstep(0.06, 0.0, abs(uv.x - 1.0));
      float streak = edgeT * spillT * (1.0 - (y - floorY) / spillDepth);
      col = mix(col, u_frothHi, streak * 0.8);
    }

    // per-cap pseudo-Poisson weep schedule, pure function of (cap, tray, time)
    float capSeed = hash21(vec2(capIdxF, float(i)));
    float cycleLen = 3.5;
    float phaseOff = capSeed * cycleLen;
    float raw2 = (tLocal + phaseOff) / cycleLen;
    float cycleIdx = floor(raw2);
    float withinT = fract(raw2) * cycleLen;
    float seedA = hash21(vec2(capIdxF + cycleIdx * 13.7, float(i) * 3.1 + 1.0));
    float seedB = hash21(vec2(capIdxF + cycleIdx * 13.7, float(i) * 3.1 + 7.0));
    float eventDur = mix(0.4, 0.7, seedB);
    float eventStart = 0.1 + seedA * max(cycleLen - eventDur - 0.2, 0.1);
    bool weeping = withinT >= eventStart && withinT < eventStart + eventDur;

    float capRadiusPx = u_capSpacing * u_res.x * 0.17;

    if (weeping) {
      float wT = (withinT - eventStart) / eventDur;
      float alpha = smoothstep(0.0, 0.15, wT) * (1.0 - smoothstep(0.7, 1.0, wT));
      float depth = wT * 0.4 * trayGap; // DOWNWARD, past the tray floor
      float centerY = floorY + depth;
      vec2 dPx = vec2(capLocalX * u_res.x, (y - centerY) * u_res.y * 1.7);
      float d = length(dPx);
      float glow = smoothstep(capRadiusPx, 0.0, d) * alpha;
      col = mix(col, u_frothHi, glow);
    } else {
      float bubbleFreq = 18.0 * (1.0 + hoverT);
      float bPhase = fract(tLocal * bubbleFreq + capSeed * 7.0);
      float riseFrac = bPhase;
      float alpha = (1.0 - riseFrac) * 0.9;
      float centerY = floorY - riseFrac * frothFrac * trayGap; // UPWARD, into the froth
      vec2 dPx = vec2(capLocalX * u_res.x, (y - centerY) * u_res.y);
      float d = length(dPx);
      float glow = smoothstep(capRadiusPx * (1.0 - 0.4 * riseFrac), 0.0, d) * alpha;
      col = mix(col, u_frothHi, glow * 0.75);
    }
  }

  gl_FragColor = vec4(col, 1.0);
}
`;function N(t){const l=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t.trim());if(!l)return null;let i=l[1];i.length===3&&(i=i.split("").map(n=>n+n).join(""));const a=parseInt(i,16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}function de(t,l,i){return[t[0]+(l[0]-t[0])*i,t[1]+(l[1]-t[1])*i,t[2]+(l[2]-t[2])*i]}function be([t,l,i]){return .2126*t+.7152*l+.0722*i}function A(t){return t-Math.floor(t)}function O(t,l){let i=A(t*419.2),a=A(l*371.9);const n=i*(i+19.19)+a*(a+19.19);return i+=n,a+=n,A(i*a)}function Se(t){return .3+.25*(.5+.5*Math.sin(t*(2*Math.PI/1.8)))}function Te(t){const l=t*.45454545454545453,i=A(l),a=.25/2.2;return i>1-a?(i-(1-a))/a:0}function Ae(t,l,i){const a=O(t,l),n=3.5,c=a*n,e=(i+c)/n,r=Math.floor(e),f=A(e)*n,p=O(t+r*13.7,l*3.1+1),d=.4+.3*O(t+r*13.7,l*3.1+7),v=.1+p*Math.max(n-d-.2,.1);return f<v||f>=v+d?-1:(f-v)/d}function Re(t,l){const i=Math.min(40,Math.max(1,l));for(let a=0;a<3e3;a++){const n=a*.02,c=Se(n),e=Te(n);if(c<.45||e<.25||e>.85)continue;let r=!1;for(let f=0;f<t&&!r;f++){const p=n-f*.18;for(let h=0;h<i;h++){const d=Ae(h,f,p);if(d>.1&&d<.7){r=!0;break}}}if(r)return n}return .45}function pe(t,l,i){const a=t.createShader(l);if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(a);throw t.deleteShader(a),new Error(`tray-weep: shader compile failed: ${n??""}`)}return a}const Ee=90,me=2,Pe=6,Fe=14,Me=.15,Ce=500,Ye="mid-cascade-with-weep";function ve({className:t="",style:l}){const i=G.useRef(null),a=G.useRef(null);return G.useEffect(()=>{const n=i.current,c=a.current;if(!n||!c)return;let e=null,r=null,f=null,p=null,h=null,d=0,v=!1;const C=performance.now();let g=0,x=0,_=0,Y=me,D=1/14,V=null,X=null,z=null,W=null,j=null,$=null,J=null,K=null,Z=null,y=[.04,.04,.04],w=[.3,.3,.3],L=[.93,.93,.93];const Q=()=>{const o=getComputedStyle(document.documentElement),s=N(o.getPropertyValue("--background").trim())??y,u=N(o.getPropertyValue("--ns-muted").trim())??w,F=N(o.getPropertyValue("--foreground").trim())??L;be(s)<.5?(y=s,w=u,L=F):(y=s,w=de(s,u,.55),L=de(u,F,.55))};Q();const ee=o=>(o||e?.getExtension("WEBGL_lose_context")?.loseContext(),!1),te=(o=!1)=>{if(e=c.getContext("webgl",{alpha:!1,antialias:!0}),!e)return!1;if(f=pe(e,e.VERTEX_SHADER,we),p=pe(e,e.FRAGMENT_SHADER,Le),r=e.createProgram(),!r||(e.attachShader(r,f),e.attachShader(r,p),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)))return ee(o);e.useProgram(r),h=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const s=e.getAttribLocation(r,"a_pos");return e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0),V=e.getUniformLocation(r,"u_res"),X=e.getUniformLocation(r,"u_time"),z=e.getUniformLocation(r,"u_trayCount"),W=e.getUniformLocation(r,"u_capSpacing"),j=e.getUniformLocation(r,"u_base"),$=e.getUniformLocation(r,"u_frothLo"),J=e.getUniformLocation(r,"u_frothHi"),K=e.getUniformLocation(r,"u_hover"),Z=e.getUniformLocation(r,"u_hoverRadius"),!0},ge=()=>{e&&(h&&e.deleteBuffer(h),r&&e.deleteProgram(r),f&&e.deleteShader(f),p&&e.deleteShader(p),h=r=f=p=null,e=null)},U=()=>{!e||!r||(e.uniform3f(j,y[0],y[1],y[2]),e.uniform3f($,w[0],w[1],w[2]),e.uniform3f(J,L[0],L[1],L[2]))},xe=()=>{!e||!r||(e.viewport(0,0,c.width,c.height),e.uniform2f(V,c.width,c.height),e.uniform1f(z,Y),e.uniform1f(W,D),e.uniform1f(Z,Me))};let I=!1,oe=.5,re=.5,R=0;const _e=o=>{if(I)return 1;if(R===0)return 0;const s=1-(o-R)/Ce;return s>0?s:0},b=o=>{if(!e||!r||x<=0||_<=0)return;const s=(o-C)/1e3;e.uniform1f(X,s),e.uniform3f(K,oe,re,_e(o)),e.drawArrays(e.TRIANGLES,0,6)},ne=o=>{b(o),d=requestAnimationFrame(ne)},B=()=>{v||(v=!0,d=requestAnimationFrame(ne))},S=()=>{cancelAnimationFrame(d),v=!1},k=()=>{const o=n.getBoundingClientRect();if(o.width<2||o.height<2)return;x=o.width,_=o.height;const s=Math.min(window.devicePixelRatio||1,2);c.width=Math.round(x*s),c.height=Math.round(_*s),c.style.width=`${x}px`,c.style.height=`${_}px`,Y=Math.min(Pe,Math.max(me,Math.round(_/Ee))),D=Math.max(1,Math.min(x,_)/Fe)/x;const F=Math.max(1,Math.ceil(1/D)+1);H=Re(Y,F),xe(),m?(g=C+H*1e3,b(g)):b(g||performance.now())};let H=.45,m=!1;if(!te())return;U();const ae=new ResizeObserver(k);ae.observe(n),k();const E=window.matchMedia("(prefers-reduced-motion: reduce)");m=E.matches;let T=!0;const q=()=>{m?(g=C+H*1e3,S(),b(g)):T&&B()},ie=()=>{m=E.matches,q()};E.addEventListener("change",ie),q();const le=new IntersectionObserver(o=>{T=o[0]?.isIntersecting??!0,T&&!m&&document.visibilityState==="visible"?B():T||S()});le.observe(n);const ce=()=>{document.hidden?S():!m&&T&&B()};document.addEventListener("visibilitychange",ce);const se=new MutationObserver(()=>{Q(),U(),m&&b(g||performance.now())});se.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const ye=(o,s)=>{const u=n.getBoundingClientRect();return{x:(o-u.left)/u.width,yTop:(s-u.top)/u.height}},fe=o=>{if(m)return;const{x:s,yTop:u}=ye(o.clientX,o.clientY);I=!0,oe=s,re=u,R=0},P=()=>{I=!1,R=performance.now()};n.addEventListener("pointermove",fe),n.addEventListener("pointerleave",P),n.addEventListener("pointercancel",P);const ue=o=>{o.preventDefault(),S()},he=()=>{te(!0)&&(U(),k(),q())};return c.addEventListener("webglcontextlost",ue),c.addEventListener("webglcontextrestored",he),()=>{ae.disconnect(),le.disconnect(),E.removeEventListener("change",ie),document.removeEventListener("visibilitychange",ce),se.disconnect(),n.removeEventListener("pointermove",fe),n.removeEventListener("pointerleave",P),n.removeEventListener("pointercancel",P),c.removeEventListener("webglcontextlost",ue),c.removeEventListener("webglcontextrestored",he),S();const o=e?.getExtension("WEBGL_lose_context");ge(),c.isConnected||o?.loseContext()}},[]),M.jsx("div",{ref:i,"aria-hidden":"true","data-reduced-motion-freeze":Ye,className:`relative h-full w-full overflow-hidden ${t}`,style:l,children:M.jsx("canvas",{ref:a,className:"absolute inset-0"})})}ve.displayName="TrayWeep";function Ie(){return M.jsx("div",{className:"ns-stage",children:M.jsx(ve,{})})}export{Ie as default};
