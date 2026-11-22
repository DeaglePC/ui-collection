import{r as _,j as y}from"./client-CsvIHAk3.js";const $e=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,Ge=`
precision highp float;
uniform vec2 u_size;      // css px
uniform float u_dpr;
uniform float u_time;
uniform float u_radius;   // css px, outer corner radius
uniform float u_band;     // css px
uniform float u_strength;
uniform vec3 u_dark;
uniform vec3 u_mid;
uniform vec3 u_light;
uniform vec3 u_hot;
uniform vec3 u_accent;
uniform float u_pressAngle;
uniform float u_press;      // 0..1 eased
uniform float u_rippleAngle;
uniform float u_rippleT;    // seconds since release, huge sentinel if none
uniform float u_hoverAngle;
uniform float u_hoverAmt;   // 0..1 eased

float sdRoundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float hash21(vec2 p) {
  p = fract(p * vec2(233.34, 851.73));
  p += dot(p, p + 23.45);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.55;
  for (int i = 0; i < 4; i++) {
    sum += amp * vnoise(p);
    p = p * 2.03 + 17.1;
    amp *= 0.55;
  }
  return sum;
}

// arc-length-normalized angle so the sweep and falloffs don't accelerate
// on the long flanks of a wide pill
float ringAngle(vec2 p) {
  return atan(p.y / (u_size.y * 0.5), p.x / (u_size.x * 0.5));
}

float wrapAngle(float da) { return atan(sin(da), cos(da)); }

float pressFalloffAt(vec2 p) {
  if (u_press <= 0.001) return 0.0;
  float da = wrapAngle(ringAngle(p) - u_pressAngle);
  return exp(-da * da * 5.0) * u_press;
}

float rippleWaveAt(vec2 p) {
  if (u_rippleT < 0.0 || u_rippleT > 2.2) return 0.0;
  float da = abs(wrapAngle(ringAngle(p) - u_rippleAngle));
  float wavefront = u_rippleT * 5.0;
  float env = exp(-u_rippleT * 2.0);
  return exp(-pow((da - wavefront) * 3.2, 2.0)) * env;
}

// the distorted boundary: base rounded-rect SDF plus molten edge wobble,
// a press bulge toward the cursor, and a traveling release ripple. Central-
// differencing this (not the clean SDF) is what makes the shading move
// with the liquid instead of just the mask.
float field(vec2 p) {
  float d = sdRoundBox(p, u_size * 0.5, u_radius);
  vec2 warpUV = p * 0.018;
  float edgeWarp = fbm(warpUV + vec2(u_time * 0.12, -u_time * 0.09)) - 0.5;
  d += edgeWarp * 2.2;
  d -= pressFalloffAt(p) * 6.0;
  d -= rippleWaveAt(p) * 3.0;
  return d;
}

void main() {
  vec2 fragPx = gl_FragCoord.xy / u_dpr;
  vec2 p = fragPx - u_size * 0.5;
  float ang = ringAngle(p);

  float pf = pressFalloffAt(p);
  float bandLocal = u_band + pf * u_band * 0.6;

  float d = field(p);
  // two independent feathered step functions, multiplied — not subtracted.
  // subtracting two smoothsteps that both saturate to 1 across most of the
  // band cancels to ~0 everywhere except a sliver near one edge, which is
  // exactly the "1-2px pale outline" bug this rebuild exists to fix.
  float outer = 1.0 - smoothstep(-1.4, 1.4, d);
  float inner = smoothstep(-bandLocal - 1.4, -bandLocal + 1.4, d);
  float mask = outer * inner;
  if (mask < 0.003) discard;

  // fake torus cross-section: t=0 outer edge, t=1 inner edge, cs in [-1,1]
  float t = clamp(-d / bandLocal, 0.0, 1.0);
  float cs = t * 2.0 - 1.0;
  float streak = fbm(vec2(ang * 3.2, t * 2.4) + vec2(u_time * 0.35, -u_time * 0.22));
  cs = clamp(cs + (streak - 0.5) * 0.4, -1.0, 1.0);
  float z = sqrt(max(0.0, 1.0 - cs * cs));

  float eps = 1.5;
  vec2 n2 = normalize(vec2(
    field(p + vec2(eps, 0.0)) - field(p - vec2(eps, 0.0)),
    field(p + vec2(0.0, eps)) - field(p - vec2(0.0, eps))
  ));
  vec3 normal = normalize(vec3(n2 * cs, z));

  // banded environment reflection, rotating so the bands sweep around
  float rot = u_time * 0.5;
  float envCoord = normal.x * cos(rot) - normal.y * sin(rot);
  envCoord = envCoord * 0.55 + normal.z * 0.45;
  float bands = pow(sin(envCoord * 8.0 + streak * 2.4) * 0.5 + 0.5, 1.8);

  vec3 col = mix(u_dark, u_mid, smoothstep(0.0, 0.45, bands));
  col = mix(col, u_light, smoothstep(0.45, 0.8, bands));
  col = mix(col, u_hot, smoothstep(0.82, 1.0, bands));

  // primary orbiting specular streak — light catching a rotating tube
  float sweep = pow(max(0.0, cos(ang - u_time * 0.7)), 36.0);
  float sweep2 = pow(max(0.0, cos(ang + 2.3 + u_time * 0.5)), 55.0);
  vec3 specCol = mix(u_hot, u_accent, 0.14);
  col += specCol * (sweep * 0.85 + sweep2 * 0.55) * (0.6 + 0.4 * u_hoverAmt);

  // cursor-locked glint while hovering, independent of the ambient sweep
  if (u_hoverAmt > 0.001) {
    float hda = wrapAngle(ang - u_hoverAngle);
    float hoverSpec = pow(max(0.0, cos(hda)), 24.0) * u_hoverAmt;
    col += mix(u_hot, u_accent, 0.2) * hoverSpec * 0.6;
  }

  // dark occlusion crease at the cross-section extremes — the depth cue
  // that keeps the tube legible even against a near-white background
  float occ = smoothstep(0.0, 0.3, z);
  col *= mix(0.28, 1.0, occ);

  // release ripple glint
  col += u_hot * rippleWaveAt(p) * 0.5;

  gl_FragColor = vec4(col, mask * u_strength);
}
`;function P(r){const a=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(r.trim());if(!a)return null;let i=a[1];i.length===3&&(i=i.split("").map(u=>u+u).join(""));const l=parseInt(i,16);return[(l>>16&255)/255,(l>>8&255)/255,(l&255)/255]}function q(r,a,i){return[r[0]+(a[0]-r[0])*i,r[1]+(a[1]-r[1])*i,r[2]+(a[2]-r[2])*i]}function qe(r,a){return q(r,[1,1,1],a)}function We([r,a,i]){return .2126*r+.7152*a+.0722*i}function Ve(r,a,i){const l=r.createShader(a);if(r.shaderSource(l,i),r.compileShader(l),!r.getShaderParameter(l,r.COMPILE_STATUS)){const u=r.getShaderInfoLog(l);throw r.deleteShader(l),new Error(`border-chrome-ring: shader compile failed: ${u??""}`)}return l}const J=1.35;function De({children:r,variant:a="pill",radius:i=16,strength:l=1,paused:u=!1,ringWidth:w=14,className:Ie="",style:Ne}){const Q=_.useRef(null),Z=_.useRef(null),je=_.useId(),ee=_.useRef(l);ee.current=l;const p=_.useRef(u);return p.current=u,_.useEffect(()=>{const c=Q.current,s=Z.current;if(!c||!s)return;let e=null,n=null,b=null,x=null,A=null,V=0,D=!1,f=!1,m=0,h=0,C=1;const T=performance.now();let I=T,d=0,N=0,k=0,j=0,H=0,te=0,O=0,$=-1e6,ne=null,oe=null,re=null,ae=null,ie=null,le=null,se=null,ce=null,ue=null,fe=null,de=null,pe=null,me=null,he=null,ge=null,ve=null,_e=null,L=[.09,.09,.09],E=[.55,.55,.55],g=[.9,.9,.9],R=[1,1,1],U=[0,.42,1];const we=()=>{const t=getComputedStyle(document.documentElement),o=P(t.getPropertyValue("--background").trim())??[1,1,1],v=P(t.getPropertyValue("--foreground").trim())??[.09,.09,.09],B=P(t.getPropertyValue("--ns-muted").trim())??[.55,.55,.55],Oe=P(t.getPropertyValue("--border").trim())??[.18,.18,.18];U=P(t.getPropertyValue("--ns-accent").trim())??[0,.42,1],We(o)<.5?(L=q(Oe,o,.3),E=B,g=v,R=qe(v,.9)):(L=q(v,[0,0,0],.25),E=B,g=q(v,o,.62),R=qe(g,.9))};we();const G=t=>{const o=t?null:e?.getExtension("WEBGL_lose_context");return xe(),o?.loseContext(),!1},be=(t=!1)=>{if(e=s.getContext("webgl",{alpha:!0,premultipliedAlpha:!0}),!e)return!1;try{if(b=Ve(e,e.VERTEX_SHADER,$e),x=Ve(e,e.FRAGMENT_SHADER,Ge),n=e.createProgram(),!n||(e.attachShader(n,b),e.attachShader(n,x),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)))return G(t)}catch{return G(t)}e.useProgram(n),A=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,A),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const o=e.getAttribLocation(n,"a_pos");return e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0),ne=e.getUniformLocation(n,"u_size"),oe=e.getUniformLocation(n,"u_dpr"),re=e.getUniformLocation(n,"u_time"),ae=e.getUniformLocation(n,"u_radius"),ie=e.getUniformLocation(n,"u_band"),le=e.getUniformLocation(n,"u_strength"),se=e.getUniformLocation(n,"u_dark"),ce=e.getUniformLocation(n,"u_mid"),ue=e.getUniformLocation(n,"u_light"),fe=e.getUniformLocation(n,"u_hot"),de=e.getUniformLocation(n,"u_accent"),pe=e.getUniformLocation(n,"u_pressAngle"),me=e.getUniformLocation(n,"u_press"),he=e.getUniformLocation(n,"u_rippleAngle"),ge=e.getUniformLocation(n,"u_rippleT"),ve=e.getUniformLocation(n,"u_hoverAngle"),_e=e.getUniformLocation(n,"u_hoverAmt"),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),!0},xe=()=>{e&&(A&&e.deleteBuffer(A),n&&e.deleteProgram(n),b&&e.deleteShader(b),x&&e.deleteShader(x),A=n=b=x=null,e=null)},He=()=>a==="circle"?Math.min(m,h)/2:i+w,S=t=>{if(!e||!n||m<=0||h<=0)return;const o=f?J:(t-T)/1e3;e.viewport(0,0,s.width,s.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.uniform2f(ne,m,h),e.uniform1f(oe,C),e.uniform1f(re,o),e.uniform1f(ae,He()),e.uniform1f(ie,w),e.uniform1f(le,Math.max(0,Math.min(1,ee.current))),e.uniform3f(se,L[0],L[1],L[2]),e.uniform3f(ce,E[0],E[1],E[2]),e.uniform3f(ue,g[0],g[1],g[2]),e.uniform3f(fe,R[0],R[1],R[2]),e.uniform3f(de,U[0],U[1],U[2]),e.uniform1f(pe,k),e.uniform1f(me,N),e.uniform1f(he,O),e.uniform1f(ge,o-$),e.uniform1f(ve,te),e.uniform1f(_e,H),e.drawArrays(e.TRIANGLES,0,6)},Ae=t=>{const o=Math.min(.05,Math.max(0,(t-I)/1e3));I=t,N+=(d-N)*(1-Math.exp(-o*16)),H+=(j-H)*(1-Math.exp(-o*10)),S(t),V=requestAnimationFrame(Ae)},W=()=>{D||(D=!0,I=performance.now(),V=requestAnimationFrame(Ae))},F=()=>{cancelAnimationFrame(V),D=!1},Y=()=>{const t=c.getBoundingClientRect();t.width<2||t.height<2||(m=t.width,h=t.height,C=Math.min(window.devicePixelRatio||1,2),s.width=Math.round(m*C),s.height=Math.round(h*C),s.style.width=`${m}px`,s.style.height=`${h}px`,S(performance.now()))},X=t=>{const o=c.getBoundingClientRect(),v=t.clientX-(o.left+o.width/2),B=t.clientY-(o.top+o.height/2);return Math.atan2(B/(o.height/2||1),v/(o.width/2||1))},Le=()=>{j=1},Ee=()=>{j=0,d&&(O=k,$=f?J:(performance.now()-T)/1e3),d=0},Re=t=>{const o=X(t);te=o,d&&(k=o)},Se=t=>{d=1,k=X(t),f?S(performance.now()):W()},Pe=t=>{d&&(O=X(t),$=f?J:(performance.now()-T)/1e3),d=0};if(!be())return;const ye=new ResizeObserver(Y);ye.observe(c),Y(),c.addEventListener("pointerenter",Le),c.addEventListener("pointerleave",Ee),c.addEventListener("pointermove",Re),c.addEventListener("pointerdown",Se),window.addEventListener("pointerup",Pe);const M=window.matchMedia("(prefers-reduced-motion: reduce)");let K=M.matches;const z=()=>{K||p.current?(f=!0,F(),S(performance.now())):(f=!1,W())},Ce=()=>{K=M.matches,z()};M.addEventListener("change",Ce),z();let Te=0,ke=p.current;const Ue=()=>{p.current!==ke&&(ke=p.current,z()),Te=window.setTimeout(Ue,120)};Ue();const Fe=()=>{document.hidden?F():!K&&!p.current&&W()};document.addEventListener("visibilitychange",Fe);const Me=new MutationObserver(()=>{we(),f&&S(performance.now())});Me.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const ze=t=>{t.preventDefault(),F()},Be=()=>{be(!0)&&(Y(),z())};return s.addEventListener("webglcontextlost",ze),s.addEventListener("webglcontextrestored",Be),()=>{ye.disconnect(),M.removeEventListener("change",Ce),document.removeEventListener("visibilitychange",Fe),Me.disconnect(),s.removeEventListener("webglcontextlost",ze),s.removeEventListener("webglcontextrestored",Be),c.removeEventListener("pointerenter",Le),c.removeEventListener("pointerleave",Ee),c.removeEventListener("pointermove",Re),c.removeEventListener("pointerdown",Se),window.removeEventListener("pointerup",Pe),window.clearTimeout(Te),F();const t=e?.getExtension("WEBGL_lose_context");xe(),s.isConnected||t?.loseContext()}},[a,w,i]),y.jsxs("div",{ref:Q,"data-border-chrome-ring":je,className:`relative inline-block touch-none ${a==="circle"?"rounded-full":""} ${Ie}`,style:{padding:w,borderRadius:a==="circle"?void 0:i+w,...Ne},children:[y.jsx("canvas",{ref:Z,"aria-hidden":"true",className:`pointer-events-none absolute inset-0 ${a==="circle"?"rounded-full":""}`}),y.jsx("div",{className:"relative z-[1]",children:r})]})}De.displayName="LiquidCollar";function Ke(){return y.jsx("div",{className:"ns-stage",children:y.jsx(De,{children:"示例"})})}export{Ke as default};
