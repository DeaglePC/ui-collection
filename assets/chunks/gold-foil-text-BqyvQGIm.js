import{r as U,j}from"./client-CsvIHAk3.js";const J=`#version 300 es
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
uniform float u_relief;
uniform float u_grain;
uniform float u_em;
out vec4 o;

vec3 rotY(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z); }
vec3 rotX(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x, c * v.y - s * v.z, s * v.y + c * v.z); }
float wrapd(float a) { return a - 6.2831853 * floor((a + 3.1415926) / 6.2831853); }
float rbox(float az, float el, float caz, float cel, float hw, float hh, float soft) {
  float a = abs(wrapd(az - caz)), e = abs(el - cel);
  return smoothstep(hw + soft, hw - soft, a) * smoothstep(hh + soft, hh - soft, e);
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

// Estudio cálido de luces grandes y suaves: el oro las convierte en bandas de brillo.
vec3 studio(vec3 d) {
  float el = asin(clamp(d.y, -1.0, 1.0));
  float az = atan(d.x, d.z);
  vec3 c = mix(vec3(0.10, 0.08, 0.07), vec3(0.62, 0.58, 0.54), smoothstep(-0.35, 0.95, el));
  c += vec3(1.0, 0.96, 0.9) * 1.1 * exp(-pow(el / 0.05, 2.0));
  c += vec3(1.00, 0.97, 0.92) * 5.5 * rbox(az, el, -0.75, 0.40, 0.46, 0.34, 0.30);
  c += vec3(1.00, 0.95, 0.88) * 4.4 * rbox(az, el, 1.05, 0.15, 0.20, 0.60, 0.18);
  c += vec3(1.00) * 3.2 * rbox(az, el, 0.15, 1.15, 0.80, 0.16, 0.22);
  c += vec3(1.00, 0.92, 0.80) * 1.6 * rbox(az, el, 2.55, 0.05, 0.28, 0.55, 0.20);
  c += vec3(0.9, 0.85, 0.8) * 1.0 * rbox(az, el, -2.0, -0.45, 0.55, 0.12, 0.10);
  return c;
}

void main() {
  vec2 px = vec2(gl_FragCoord.x, u_res.y - gl_FragCoord.y);
  vec2 uv = px / u_res;
  vec4 f = texture(u_campo, uv);
  float a = f.a;
  float sh = f.b;
  vec3 col = vec3(0.0);
  if (a > 0.002) {
    vec2 g = f.rg * u_relief;
    // Arrugas de la lámina: ondulación suave de baja frecuencia + micro-grano casi a nivel de píxel.
    float s = u_em * 0.30;
    vec2 q = px / s;
    vec2 wr = vec2(vnoise(q + vec2(3.1, 1.7)) - vnoise(q + vec2(11.4, 8.2)), vnoise(q + vec2(5.5, 9.1)) - vnoise(q + vec2(2.2, 14.6)));
    wr += 0.5 * vec2(vnoise(q * 2.7 + 4.0) - 0.5, vnoise(q * 2.7 + 9.0) - 0.5);
    vec2 gr = vec2(vnoise(px * 0.9) - 0.5, vnoise(px * 0.9 + 31.0) - 0.5) + 0.6 * vec2(hash(px) - 0.5, hash(px + 7.0) - 0.5);
    vec2 cv = vec2((uv.x - 0.5) * 0.34, (0.5 - uv.y) * 0.62);
    vec3 N = normalize(vec3(-g.x + cv.x + wr.x * 0.11 * u_relief + gr.x * 0.075 * u_grain, g.y + cv.y + wr.y * 0.11 * u_relief + gr.y * 0.075 * u_grain, 1.0));
    vec3 V = vec3(0.0, 0.0, 1.0);
    float ndv = max(dot(N, V), 0.0);
    vec3 R = reflect(-V, N);
    float yaw = u_ptr.x * 1.05;
    float pitch = u_ptr.y * 0.32;
    vec3 rf = studio(rotX(rotY(R, yaw), pitch));
    vec3 F0 = u_tint;
    vec3 F = F0 + (1.0 - F0) * pow(1.0 - ndv, 5.0);
    col = rf * F * u_int;
    // Brillo de la luz que sigue al cursor: amplio sobre la lámina y puntual en el grano.
    vec3 L = normalize(vec3(u_ptr.x * 0.9, u_ptr.y * 0.9 + 0.1, 0.5));
    float nh = max(dot(N, normalize(L + V)), 0.0);
    col += vec3(1.0, 0.9, 0.65) * (pow(nh, 500.0) * 3.2 + pow(nh, 45.0) * 0.28) * mix(0.7, 1.0, u_grain);
    // Filo de la lámina: el borde que mira a la luz se aviva y el opuesto se hunde.
    float rim = clamp(length(g) * 0.5, 0.0, 1.0);
    float lit = dot(normalize(g + vec2(1e-4)), -normalize(vec2(u_ptr.x, -u_ptr.y) + vec2(1e-4)));
    col *= 1.0 + rim * 0.5 * lit;
    col = 1.0 - exp(-col * 2.0);
    col = pow(col, vec3(0.95));
    col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  }
  float oa = a + sh * (1.0 - a);
  o = vec4(col * a, oa);
}
`,W=1e20;function Z(r,s,u){const n=new Float32Array(s*u);for(let o=0;o<n.length;o++)n[o]=r[o]?W:0;const g=Math.max(s,u),f=new Float32Array(g),h=new Float32Array(g),d=new Float32Array(g+1),l=new Int32Array(g),c=o=>{let e=0;l[0]=0,d[0]=-W,d[1]=W;for(let i=1;i<o;i++){let w=(f[i]+i*i-(f[l[e]]+l[e]*l[e]))/(2*i-2*l[e]);for(;w<=d[e];)e--,w=(f[i]+i*i-(f[l[e]]+l[e]*l[e]))/(2*i-2*l[e]);e++,l[e]=i,d[e]=w,d[e+1]=W}e=0;for(let i=0;i<o;i++){for(;d[e+1]<i;)e++;h[i]=(i-l[e])*(i-l[e])+f[l[e]]}};for(let o=0;o<s;o++){for(let e=0;e<u;e++)f[e]=n[e*s+o];c(u);for(let e=0;e<u;e++)n[e*s+o]=h[e]}for(let o=0;o<u;o++){for(let e=0;e<s;e++)f[e]=n[o*s+e];c(s);for(let e=0;e<s;e++)n[o*s+e]=h[e]}return n}function K(r,s,u,n,g=3){n=Math.max(1,Math.round(n));const f=new Float32Array(Math.max(s,u)),h=1/(2*n+1);for(let d=0;d<g;d++){for(let l=0;l<u;l++){const c=l*s;let o=0;for(let e=-n;e<=n;e++)o+=r[c+Math.min(s-1,Math.max(0,e))];for(let e=0;e<s;e++)f[e]=o*h,o+=r[c+Math.min(s-1,e+n+1)]-r[c+Math.max(0,e-n)];for(let e=0;e<s;e++)r[c+e]=f[e]}for(let l=0;l<s;l++){let c=0;for(let o=-n;o<=n;o++)c+=r[Math.min(u-1,Math.max(0,o))*s+l];for(let o=0;o<u;o++)f[o]=c*h,c+=r[Math.min(u-1,o+n+1)*s+l]-r[Math.max(0,o-n)*s+l];for(let o=0;o<u;o++)r[o*s+l]=f[o]}}return r}function ee(r,s,u,n,g){const f=getComputedStyle(r),h=parseFloat(f.fontSize)||96,d=r.offsetWidth,l=r.offsetHeight,c=Math.max(8,Math.ceil((d+u*2)*n)),o=Math.max(8,Math.ceil((l+u*2)*n)),e=document.createElement("canvas");e.width=c,e.height=o;const i=e.getContext("2d",{willReadFrequently:!0});i.font=`${f.fontStyle} ${f.fontWeight} ${h*n}px ${f.fontFamily}`;const w=parseFloat(f.letterSpacing);"letterSpacing"in i&&(i.letterSpacing=`${(Number.isFinite(w)?w:0)*n}px`),i.textBaseline="alphabetic",i.fillStyle="#fff",i.strokeStyle="#fff",i.lineJoin="round",i.lineWidth=h*n*.012;const z=i.measureText("Hg"),P=z.fontBoundingBoxAscent??h*.95,x=z.fontBoundingBoxDescent??h*.25,t=s.split(`
`),q=l/t.length*n,E=f.textAlign;t.forEach((m,_)=>{const I=i.measureText(m).width,b=u*n+(E==="left"||E==="start"?0:E==="right"||E==="end"?d*n-I:(d*n-I)/2),L=u*n+_*q+(q-(P+x))/2+P;i.fillText(m,b,L),i.strokeText(m,b,L)});const $=i.getImageData(0,0,c,o).data,p=c*o,R=new Float32Array(p),D=new Uint8Array(p);for(let m=0;m<p;m++)R[m]=$[m*4+3]/255,D[m]=R[m]>.5?1:0;const T=Math.max(2,h*n*(.012+.05*g)),C=Z(D,c,o),F=new Float32Array(p);for(let m=0;m<p;m++){if(!D[m])continue;const _=Math.min(1,Math.max(0,Math.sqrt(C[m])-.5)/T);F[m]=T*Math.sqrt(1-(1-_)*(1-_))}K(F,c,o,Math.max(1,T*.22),2);const a=K(Float32Array.from(R),c,o,h*n*.022,3),O=Math.round(h*n*.03),A=new Float32Array(p*4);for(let m=0;m<o;m++)for(let _=0;_<c;_++){const I=m*c+_,b=F[m*c+Math.max(0,_-1)],L=F[m*c+Math.min(c-1,_+1)],X=F[Math.max(0,m-1)*c+_],k=F[Math.min(o-1,m+1)*c+_],N=I*4;A[N]=Math.max(-6,Math.min(6,(L-b)*.5)),A[N+1]=Math.max(-6,Math.min(6,(k-X)*.5)),A[N+2]=a[Math.max(0,m-O)*c+_]*.7,A[N+3]=R[I]}return{w:c,h:o,datos:A}}function te(r){try{const s=document.createElement("canvas");s.width=s.height=1;const u=s.getContext("2d",{willReadFrequently:!0});u.fillStyle="#e4e9f0",u.fillStyle=r,u.fillRect(0,0,1,1);const n=u.getImageData(0,0,1,1).data;return[n[0]/255,n[1]/255,n[2]/255]}catch{return[.89,.91,.94]}}function oe(r,s,u){const n=(d,l)=>{const c=r.createShader(d);return r.shaderSource(c,l),r.compileShader(c),r.getShaderParameter(c,r.COMPILE_STATUS)?c:(console.error(r.getShaderInfoLog(c)),null)},g=n(r.VERTEX_SHADER,s),f=n(r.FRAGMENT_SHADER,u);if(!g||!f)return null;const h=r.createProgram();return r.attachShader(h,g),r.attachShader(h,f),r.linkProgram(h),r.deleteShader(g),r.deleteShader(f),r.getProgramParameter(h,r.LINK_STATUS)?h:(console.error(r.getProgramInfoLog(h)),null)}function ne({children:r="GOLD",size:s=112,relief:u=.6,grain:n=.6,intensity:g=1,tint:f="#f6c453",sweep:h=!0,className:d="",style:l}){const c=U.useRef(null),o=U.useRef(null),e=U.useRef(null),i=String(r??""),w=U.useRef({texto:i,size:s,relief:u,grain:n,intensity:g,tint:f,sweep:h});return w.current={texto:i,size:s,relief:u,grain:n,intensity:g,tint:f,sweep:h},U.useEffect(()=>{const z=c.current,P=o.current;if(!z||!P)return;const x=document.createElement("canvas");x.className="furin-gold-foil-text__lienzo",x.setAttribute("aria-hidden","true");const t=x.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!t)return;z.appendChild(x);const q=matchMedia("(prefers-reduced-motion: reduce)").matches;let E=null,$=null,p={},R=!1,D=!0,T=0,C=!1;const F=()=>{if(E=oe(t,J,Q),!!E){for(const v of["u_campo","u_res","u_ptr","u_tint","u_int","u_relief","u_grain","u_em"])p[v]=t.getUniformLocation(E,v);$=t.createTexture(),t.useProgram(E),t.uniform1i(p.u_campo,0),t.disable(t.DEPTH_TEST),t.disable(t.BLEND)}},a={x:.35,y:-.05,vx:0,vy:0,tx:.35,ty:-.05,auto:!0,t0:performance.now(),ultimo:0},O=()=>{if(!E||!R||t.isContextLost())return;const v=w.current;t.viewport(0,0,x.width,x.height),t.useProgram(E),t.uniform2f(p.u_res,x.width,x.height),t.uniform2f(p.u_ptr,a.x,a.y);const[y,M,S]=te(v.tint);t.uniform3f(p.u_tint,y,M,S),t.uniform1f(p.u_int,v.intensity),t.uniform1f(p.u_relief,.6+v.relief*.8),t.uniform1f(p.u_grain,v.grain),t.uniform1f(p.u_em,v.size*Math.min(window.devicePixelRatio||1,2)),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,3)},A=()=>{if(C||t.isContextLost()||!E)return;const v=w.current,y=Math.min(window.devicePixelRatio||1,2),M=Math.round(v.size*.3),S=P.offsetWidth,B=P.offsetHeight;if(!S||!B)return;const G=ee(P,v.texto,M,y,v.relief);x.width=G.w,x.height=G.h,x.style.width=`${S+M*2}px`,x.style.height=`${B+M*2}px`,x.style.left=`${-M}px`,x.style.top=`${-M}px`,t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,$),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,G.w,G.h,0,t.RGBA,t.FLOAT,G.datos),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),R=!0,O(),z.setAttribute("data-gl","1"),b()},m=()=>!_()&&Math.abs(a.vx)+Math.abs(a.vy)<.001&&Math.abs(a.tx-a.x)+Math.abs(a.ty-a.y)<.001,_=()=>a.auto&&w.current.sweep&&!q,I=v=>{if(T=0,C||!D||!R)return;const y=Math.min(.05,(v-(a.ultimo||v))/1e3||.016);if(a.ultimo=v,_()){const B=(v-a.t0)/1e3;a.tx=Math.sin(B*.5)*.9,a.ty=Math.cos(B*.37)*.32}const M=120,S=15;a.vx+=((a.tx-a.x)*M-a.vx*S)*y,a.vy+=((a.ty-a.y)*M-a.vy*S)*y,a.x+=a.vx*y,a.y+=a.vy*y,O(),m()?a.ultimo=0:T=requestAnimationFrame(I)},b=()=>{!T&&D&&R&&!C&&!q&&(a.ultimo=0,T=requestAnimationFrame(I))},L=v=>{const y=x.getBoundingClientRect();if(!y.width)return;const M=y.left+y.width/2,S=y.top+y.height/2;a.tx=Math.max(-1.4,Math.min(1.4,(v.clientX-M)/Math.max(y.width*.5,160))),a.ty=Math.max(-1,Math.min(1,-(v.clientY-S)/Math.max(y.height*.5,120))),a.auto=!1,b()},X=()=>{a.auto=!0,a.t0=performance.now()-Math.asin(Math.max(-1,Math.min(1,a.x/.9)))/.55*1e3,b()},k=v=>{v.pointerType!=="mouse"&&X()};q?(a.x=a.tx=.35,a.y=a.ty=-.05):(window.addEventListener("pointermove",L,{passive:!0}),window.addEventListener("pointerdown",L,{passive:!0}),document.documentElement.addEventListener("pointerleave",X),window.addEventListener("pointerup",k,{passive:!0}));const N=new IntersectionObserver(([v])=>{D=v.isIntersecting,D&&b()},{rootMargin:"80px"});N.observe(z);let H=0;const V=()=>{cancelAnimationFrame(H),H=requestAnimationFrame(A)},Y=new ResizeObserver(V);return Y.observe(P),document.fonts?.ready.then(V),document.fonts?.addEventListener?.("loadingdone",V),x.addEventListener("webglcontextlost",v=>{v.preventDefault(),R=!1,cancelAnimationFrame(T),T=0}),x.addEventListener("webglcontextrestored",()=>{p={},F(),A()}),F(),e.current={rebuild:A,wake:b},A(),()=>{C=!0,e.current=null,cancelAnimationFrame(T),cancelAnimationFrame(H),N.disconnect(),Y.disconnect(),document.fonts?.removeEventListener?.("loadingdone",V),window.removeEventListener("pointermove",L),window.removeEventListener("pointerdown",L),window.removeEventListener("pointerup",k),document.documentElement.removeEventListener("pointerleave",X),z.removeAttribute("data-gl"),t.getExtension("WEBGL_lose_context")?.loseContext(),x.remove()}},[]),U.useEffect(()=>{e.current?.rebuild()},[i,s,u,n,g,f,h]),j.jsx("span",{ref:c,className:`furin-gold-foil-text ${d}`,style:{fontSize:s,...l},children:j.jsx("span",{ref:o,className:"furin-gold-foil-text__texto",children:i})})}function re(){return j.jsx("div",{className:"stage",children:j.jsx(ne,{})})}export{re as default};
