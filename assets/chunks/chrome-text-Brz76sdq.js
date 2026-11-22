import{r as B,j as H}from"./client-CsvIHAk3.js";const J=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Q=`#version 300 es
precision highp float;
uniform sampler2D u_campo;
uniform vec2 u_res;
uniform vec2 u_ptr;
uniform vec3 u_tint;
uniform float u_int;
uniform float u_bevel;
out vec4 o;

vec3 rotY(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z); }
vec3 rotX(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x, c * v.y - s * v.z, s * v.y + c * v.z); }
float wrapd(float a) { return a - 6.2831853 * floor((a + 3.1415926) / 6.2831853); }
float rbox(float az, float el, float caz, float cel, float hw, float hh, float soft) {
  float a = abs(wrapd(az - caz)), e = abs(el - cel);
  return smoothstep(hw + soft, hw - soft, a) * smoothstep(hh + soft, hh - soft, e);
}

// Estudio procedural: cielo azulado, horizonte brillante, suelo oscuro y cuatro cajas de luz.
vec3 studio(vec3 d) {
  float el = asin(clamp(d.y, -1.0, 1.0));
  float az = atan(d.x, d.z);
  float up = clamp(el / 1.2, 0.0, 1.0);
  vec3 sky = mix(vec3(0.86, 0.92, 1.00), vec3(0.07, 0.12, 0.26), pow(up, 0.55));
  float dn = clamp(-el / 1.1, 0.0, 1.0);
  vec3 gnd = mix(vec3(0.30, 0.29, 0.29), vec3(0.010, 0.011, 0.016), pow(dn, 0.45));
  vec3 c = el >= 0.0 ? sky : gnd;
  c += vec3(1.0, 0.98, 0.94) * 2.2 * exp(-pow(el / 0.022, 2.0));
  c += vec3(1.00, 0.96, 0.90) * 7.0 * rbox(az, el, -0.80, 0.52, 0.32, 0.20, 0.05);
  c += vec3(0.86, 0.93, 1.00) * 6.0 * rbox(az, el, 1.05, 0.30, 0.07, 0.44, 0.04);
  c += vec3(1.00) * 4.0 * rbox(az, el, 0.20, 1.10, 0.60, 0.09, 0.05);
  c += vec3(1.00, 0.90, 0.80) * 3.0 * rbox(az, el, 2.60, 0.10, 0.10, 0.50, 0.06);
  c += vec3(0.80, 0.88, 1.00) * 2.0 * rbox(az, el, -1.90, -0.38, 0.50, 0.07, 0.05);
  return c;
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  vec2 px = vec2(gl_FragCoord.x, u_res.y - gl_FragCoord.y);
  vec2 uv = px / u_res;
  vec4 f = texture(u_campo, uv);
  float a = f.a;
  float sh = f.b;
  vec3 col = vec3(0.0);
  if (a > 0.002) {
    vec2 g = f.rg * u_bevel;
    // Un poco de curvatura global: así la cara plana también degrada de cielo a suelo.
    vec2 cv = vec2((uv.x - 0.5) * 0.30, (0.5 - uv.y) * 0.62);
    vec3 N = normalize(vec3(-g.x + cv.x, g.y + cv.y, 1.0));
    vec3 V = vec3(0.0, 0.0, 1.0);
    float ndv = max(dot(N, V), 0.0);
    vec3 R = reflect(-V, N);
    float yaw = u_ptr.x * 0.95;
    float pitch = u_ptr.y * 0.30;
    float dsp = 0.045 * (1.0 - ndv);
    vec3 rf;
    rf.r = studio(rotX(rotY(R, yaw - dsp), pitch)).r;
    rf.g = studio(rotX(rotY(R, yaw), pitch)).g;
    rf.b = studio(rotX(rotY(R, yaw + dsp), pitch)).b;
    vec3 F0 = u_tint * 0.92;
    vec3 F = F0 + (1.0 - F0) * pow(1.0 - ndv, 5.0);
    col = rf * F * u_int;
    // Destello puntual que acompaña al cursor.
    vec3 L = normalize(vec3(u_ptr.x * 0.85, u_ptr.y * 0.85 + 0.1, 0.55));
    float nh = max(dot(N, normalize(L + V)), 0.0);
    col += vec3(1.0, 0.98, 0.95) * (pow(nh, 320.0) * 2.4 + pow(nh, 36.0) * 0.12);
    col = 1.0 - exp(-col * 1.7);
    col = pow(col, vec3(0.92));
    col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  }
  float oa = a + sh * (1.0 - a);
  o = vec4(col * a, oa);
}`,k=1e20;function Z(r,c,s){const n=new Float32Array(c*s);for(let e=0;e<n.length;e++)n[e]=r[e]?k:0;const y=Math.max(c,s),d=new Float32Array(y),m=new Float32Array(y),x=new Float32Array(y+1),i=new Int32Array(y),v=e=>{let t=0;i[0]=0,x[0]=-k,x[1]=k;for(let u=1;u<e;u++){let h=(d[u]+u*u-(d[i[t]]+i[t]*i[t]))/(2*u-2*i[t]);for(;h<=x[t];)t--,h=(d[u]+u*u-(d[i[t]]+i[t]*i[t]))/(2*u-2*i[t]);t++,i[t]=u,x[t]=h,x[t+1]=k}t=0;for(let u=0;u<e;u++){for(;x[t+1]<u;)t++;m[u]=(u-i[t])*(u-i[t])+d[i[t]]}};for(let e=0;e<c;e++){for(let t=0;t<s;t++)d[t]=n[t*c+e];v(s);for(let t=0;t<s;t++)n[t*c+e]=m[t]}for(let e=0;e<s;e++){for(let t=0;t<c;t++)d[t]=n[e*c+t];v(c);for(let t=0;t<c;t++)n[e*c+t]=m[t]}return n}function K(r,c,s,n,y=3){n=Math.max(1,Math.round(n));const d=new Float32Array(Math.max(c,s)),m=1/(2*n+1);for(let x=0;x<y;x++){for(let i=0;i<s;i++){const v=i*c;let e=0;for(let t=-n;t<=n;t++)e+=r[v+Math.min(c-1,Math.max(0,t))];for(let t=0;t<c;t++)d[t]=e*m,e+=r[v+Math.min(c-1,t+n+1)]-r[v+Math.max(0,t-n)];for(let t=0;t<c;t++)r[v+t]=d[t]}for(let i=0;i<c;i++){let v=0;for(let e=-n;e<=n;e++)v+=r[Math.min(s-1,Math.max(0,e))*c+i];for(let e=0;e<s;e++)d[e]=v*m,v+=r[Math.min(s-1,e+n+1)*c+i]-r[Math.max(0,e-n)*c+i];for(let e=0;e<s;e++)r[e*c+i]=d[e]}}return r}function tt(r,c,s,n,y,d){const m=getComputedStyle(r),x=parseFloat(m.fontSize)||96,i=r.offsetWidth,v=r.offsetHeight,e=Math.max(8,Math.ceil((i+s*2)*n)),t=Math.max(8,Math.ceil((v+s*2)*n)),u=document.createElement("canvas");u.width=e,u.height=t;const h=u.getContext("2d",{willReadFrequently:!0});h.font=`${m.fontStyle} ${m.fontWeight} ${x*n}px ${m.fontFamily}`;const S=parseFloat(m.letterSpacing);"letterSpacing"in h&&(h.letterSpacing=`${(Number.isFinite(S)?S:0)*n}px`),h.textBaseline="alphabetic",h.fillStyle="#fff",h.strokeStyle="#fff",h.lineJoin="round",h.lineWidth=x*n*.1*d;const z=h.measureText("Hg"),p=z.fontBoundingBoxAscent??x*.95,o=z.fontBoundingBoxDescent??x*.25,U=c.split(`
`),R=v/U.length*n,P=m.textAlign;U.forEach((l,g)=>{const w=h.measureText(l).width,F=s*n+(P==="left"||P==="start"?0:P==="right"||P==="end"?i*n-w:(i*n-w)/2),D=s*n+g*R+(R-(p+o))/2+p;h.fillText(l,F,D),d>0&&h.strokeText(l,F,D)});const b=h.getImageData(0,0,e,t).data,_=e*t,A=new Float32Array(_),T=new Uint8Array(_);for(let l=0;l<_;l++)A[l]=b[l*4+3]/255,T[l]=A[l]>.5?1:0;const C=Math.max(2,x*n*(.04+.2*y)),$=Z(T,e,t),a=new Float32Array(_);for(let l=0;l<_;l++){if(!T[l])continue;const g=Math.min(1,Math.max(0,Math.sqrt($[l])-.5)/C);a[l]=C*Math.sqrt(1-(1-g)*(1-g))}K(a,e,t,Math.max(1.5,C*.24),3);const O=K(Float32Array.from(A),e,t,x*n*.035,3),X=Math.round(x*n*.045),N=new Float32Array(_*4);for(let l=0;l<t;l++)for(let g=0;g<e;g++){const w=l*e+g,F=a[l*e+Math.max(0,g-1)],D=a[l*e+Math.min(e-1,g+1)],V=a[Math.max(0,l-1)*e+g],W=a[Math.min(t-1,l+1)*e+g],I=w*4;N[I]=Math.max(-6,Math.min(6,(D-F)*.5)),N[I+1]=Math.max(-6,Math.min(6,(W-V)*.5)),N[I+2]=O[Math.max(0,l-X)*e+g]*.62,N[I+3]=A[w]}return{w:e,h:t,datos:N}}function et(r){try{const c=document.createElement("canvas");c.width=c.height=1;const s=c.getContext("2d",{willReadFrequently:!0});s.fillStyle="#e4e9f0",s.fillStyle=r,s.fillRect(0,0,1,1);const n=s.getImageData(0,0,1,1).data;return[n[0]/255,n[1]/255,n[2]/255]}catch{return[.89,.91,.94]}}function ot(r,c,s){const n=(x,i)=>{const v=r.createShader(x);return r.shaderSource(v,i),r.compileShader(v),r.getShaderParameter(v,r.COMPILE_STATUS)?v:(console.error(r.getShaderInfoLog(v)),null)},y=n(r.VERTEX_SHADER,c),d=n(r.FRAGMENT_SHADER,s);if(!y||!d)return null;const m=r.createProgram();return r.attachShader(m,y),r.attachShader(m,d),r.linkProgram(m),r.deleteShader(y),r.deleteShader(d),r.getProgramParameter(m,r.LINK_STATUS)?m:(console.error(r.getProgramInfoLog(m)),null)}function nt({children:r="Chrome",size:c=96,bevel:s=.5,thickness:n=.5,intensity:y=1,tint:d="#e4e9f0",sweep:m=!0,className:x="",style:i}){const v=B.useRef(null),e=B.useRef(null),t=B.useRef(null),u=String(r??""),h=B.useRef({texto:u,size:c,bevel:s,thickness:n,intensity:y,tint:d,sweep:m});return h.current={texto:u,size:c,bevel:s,thickness:n,intensity:y,tint:d,sweep:m},B.useEffect(()=>{const S=v.current,z=e.current;if(!S||!z)return;const p=document.createElement("canvas");p.className="furin-chrome-text__lienzo",p.setAttribute("aria-hidden","true");const o=p.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!o)return;S.appendChild(p);const U=matchMedia("(prefers-reduced-motion: reduce)").matches;let R=null,P=null,b={},_=!1,A=!0,T=0,C=!1;const $=()=>{if(R=ot(o,J,Q),!!R){for(const f of["u_campo","u_res","u_ptr","u_tint","u_int","u_bevel"])b[f]=o.getUniformLocation(R,f);P=o.createTexture(),o.useProgram(R),o.uniform1i(b.u_campo,0),o.disable(o.DEPTH_TEST),o.disable(o.BLEND)}},a={x:.35,y:-.05,vx:0,vy:0,tx:.35,ty:-.05,auto:!0,t0:performance.now(),ultimo:0},O=()=>{if(!R||!_||o.isContextLost())return;const f=h.current;o.viewport(0,0,p.width,p.height),o.useProgram(R),o.uniform2f(b.u_res,p.width,p.height),o.uniform2f(b.u_ptr,a.x,a.y);const[E,M,L]=et(f.tint);o.uniform3f(b.u_tint,E,M,L),o.uniform1f(b.u_int,f.intensity),o.uniform1f(b.u_bevel,.85+f.bevel*.6),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)},X=()=>{if(C||o.isContextLost()||!R)return;const f=h.current,E=Math.min(window.devicePixelRatio||1,2),M=Math.round(f.size*.3),L=z.offsetWidth,q=z.offsetHeight;if(!L||!q)return;const G=tt(z,f.texto,M,E,f.bevel,f.thickness);p.width=G.w,p.height=G.h,p.style.width=`${L+M*2}px`,p.style.height=`${q+M*2}px`,p.style.left=`${-M}px`,p.style.top=`${-M}px`,o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,P),o.pixelStorei(o.UNPACK_ALIGNMENT,1),o.texImage2D(o.TEXTURE_2D,0,o.RGBA16F,G.w,G.h,0,o.RGBA,o.FLOAT,G.datos),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),_=!0,O(),S.setAttribute("data-gl","1"),w()},N=()=>!l()&&Math.abs(a.vx)+Math.abs(a.vy)<.001&&Math.abs(a.tx-a.x)+Math.abs(a.ty-a.y)<.001,l=()=>a.auto&&h.current.sweep&&!U,g=f=>{if(T=0,C||!A||!_)return;const E=Math.min(.05,(f-(a.ultimo||f))/1e3||.016);if(a.ultimo=f,l()){const q=(f-a.t0)/1e3;a.tx=Math.sin(q*.55)*.9,a.ty=Math.cos(q*.37)*.32}const M=120,L=15;a.vx+=((a.tx-a.x)*M-a.vx*L)*E,a.vy+=((a.ty-a.y)*M-a.vy*L)*E,a.x+=a.vx*E,a.y+=a.vy*E,O(),N()?a.ultimo=0:T=requestAnimationFrame(g)},w=()=>{!T&&A&&_&&!C&&!U&&(a.ultimo=0,T=requestAnimationFrame(g))},F=f=>{const E=p.getBoundingClientRect();if(!E.width)return;const M=E.left+E.width/2,L=E.top+E.height/2;a.tx=Math.max(-1.4,Math.min(1.4,(f.clientX-M)/Math.max(E.width*.5,160))),a.ty=Math.max(-1,Math.min(1,-(f.clientY-L)/Math.max(E.height*.5,120))),a.auto=!1,w()},D=()=>{a.auto=!0,a.t0=performance.now()-Math.asin(Math.max(-1,Math.min(1,a.x/.9)))/.55*1e3,w()},V=f=>{f.pointerType!=="mouse"&&D()};U?(a.x=a.tx=.35,a.y=a.ty=-.05):(window.addEventListener("pointermove",F,{passive:!0}),window.addEventListener("pointerdown",F,{passive:!0}),document.documentElement.addEventListener("pointerleave",D),window.addEventListener("pointerup",V,{passive:!0}));const W=new IntersectionObserver(([f])=>{A=f.isIntersecting,A&&w()},{rootMargin:"80px"});W.observe(S);let I=0;const j=()=>{cancelAnimationFrame(I),I=requestAnimationFrame(X)},Y=new ResizeObserver(j);return Y.observe(z),document.fonts?.ready.then(j),document.fonts?.addEventListener?.("loadingdone",j),p.addEventListener("webglcontextlost",f=>{f.preventDefault(),_=!1,cancelAnimationFrame(T),T=0}),p.addEventListener("webglcontextrestored",()=>{b={},$(),X()}),$(),t.current={rebuild:X,wake:w},X(),()=>{C=!0,t.current=null,cancelAnimationFrame(T),cancelAnimationFrame(I),W.disconnect(),Y.disconnect(),document.fonts?.removeEventListener?.("loadingdone",j),window.removeEventListener("pointermove",F),window.removeEventListener("pointerdown",F),window.removeEventListener("pointerup",V),document.documentElement.removeEventListener("pointerleave",D),S.removeAttribute("data-gl"),o.getExtension("WEBGL_lose_context")?.loseContext(),p.remove()}},[]),B.useEffect(()=>{t.current?.rebuild()},[u,c,s,n,y,d,m]),H.jsx("span",{ref:v,className:`furin-chrome-text ${x}`,style:{fontSize:c,letterSpacing:`${(n*.1-.01).toFixed(3)}em`,...i},children:H.jsx("span",{ref:e,className:"furin-chrome-text__texto",children:u})})}function rt(){return H.jsx("div",{className:"stage",children:H.jsx(nt,{})})}export{rt as default};
