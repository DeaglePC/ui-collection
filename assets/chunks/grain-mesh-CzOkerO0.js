import{r as x,j as M}from"./client-CsvIHAk3.js";const I=5,B=["#0e1a33","#d9b98f","#3b5b8f","#b86f55","#1c2b52"],$=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,K=`#version 300 es
precision highp float;
#define N ${I}
uniform vec2 u_res;
uniform float u_t;
uniform float u_scale;
uniform float u_grain;
uniform float u_frame;      // cuadro de grano (24 por segundo)
uniform float u_dpr;
uniform int u_n;
uniform vec3 u_col[N];
uniform vec2 u_ptr;         // cursor suavizado (-1..1) y su fuerza en z
uniform float u_ptrk;
out vec4 o;

float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y);
}
vec3 toLin(vec3 c) { return pow(c, vec3(2.2)); }
vec3 toSrgb(vec3 c) { return pow(max(c, 0.0), vec3(1.0 / 2.2)); }

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float asp = u_res.x / u_res.y;
  vec2 p = (uv - 0.5) * vec2(asp, 1.0) / u_scale;
  float t = u_t;

  // Doble deformación del dominio: las manchas se estiran como tinta en agua.
  vec2 q = p;
  q += 0.16 * vec2(sin(p.y * 2.3 + t * 0.31), cos(p.x * 2.0 - t * 0.27));
  q += 0.09 * vec2(sin(q.y * 4.1 - t * 0.43 + 1.3), cos(q.x * 3.6 + t * 0.37));

  // Cada color tiene un ancla que orbita con su propio ritmo; el cursor arrastra la última.
  vec3 acc = vec3(0.0);
  float wsum = 0.0;
  for (int i = 0; i < N; i++) {
    if (i >= u_n) break;
    float fi = float(i);
    vec2 base = vec2(cos(fi * 2.399 + 0.6), sin(fi * 2.399 + 0.6)) * vec2(0.62 * asp * 0.7 + 0.18, 0.42);
    vec2 a = base + 0.22 * vec2(sin(t * (0.19 + fi * 0.047) + fi * 1.7), cos(t * (0.23 + fi * 0.031) + fi * 2.3));
    if (i == u_n - 1) a = mix(a, u_ptr * vec2(asp * 0.5, 0.5) / u_scale, u_ptrk);
    vec2 d = q - a;
    float w = 1.0 / (pow(dot(d, d), 1.35) + 0.012);
    acc += toLin(u_col[i]) * w;
    wsum += w;
  }
  vec3 col = acc / wsum;

  // Veladura sedosa: luz suave que ondula sobre la malla.
  float sheen = vnoise(q * 1.6 + vec2(t * 0.08, -t * 0.05));
  col *= 0.86 + 0.28 * sheen;

  col = toSrgb(col);

  // Viñeta de lente.
  vec2 vv = uv - 0.5;
  col *= 1.0 - 0.55 * dot(vv, vv) * 1.5;

  // Grano de película: tamaño constante en píxeles reales, cambia 24 veces por segundo,
  // más visible en medios tonos que en negros y blancos.
  vec2 gp = floor(gl_FragCoord.xy / max(1.0, u_dpr * 0.85)) + vec2(u_frame * 17.0, u_frame * 31.0);
  float g = (hash12(gp) + hash12(gp + 19.7) + hash12(gp * 1.37 + 3.1)) / 3.0 - 0.5;
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  float mid = 0.55 + 1.2 * lum * (1.0 - lum) * 2.0;
  col += g * u_grain * 0.15 * mid;
  col += (hash12(gl_FragCoord.xy + 91.7) - 0.5) / 255.0;
  o = vec4(col, 1.0);
}`;let _=null;const k=new Map;function W(e){const f=k.get(e);if(f)return f;try{_??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),_.clearRect(0,0,1,1),_.fillStyle="#101820",_.fillStyle=e,_.fillRect(0,0,1,1);const s=_.getImageData(0,0,1,1).data,u=[s[0]/255,s[1]/255,s[2]/255];return k.size>64&&k.clear(),k.set(e,u),u}catch{return[.06,.09,.13]}}function Y(e,f,s){const u=(C,w)=>{const l=e.createShader(C);return e.shaderSource(l,w),e.compileShader(l),e.getShaderParameter(l,e.COMPILE_STATUS)?l:(console.error(e.getShaderInfoLog(l)),null)},d=u(e.VERTEX_SHADER,f),v=u(e.FRAGMENT_SHADER,s);if(!d||!v)return null;const m=e.createProgram();return e.attachShader(m,d),e.attachShader(m,v),e.linkProgram(m),e.deleteShader(d),e.deleteShader(v),e.getProgramParameter(m,e.LINK_STATUS)?m:(console.error(e.getProgramInfoLog(m)),null)}function J({children:e,colors:f=B,grain:s=1,speed:u=1,scale:d=1,reactivity:v=1,className:m="",style:C}){const w=x.useRef(null),l=x.useRef({colors:f,grain:s,speed:u,scale:d,reactivity:v});l.current={colors:f,grain:s,speed:u,scale:d,reactivity:v};const A=x.useRef(null),U=f.join("|");return x.useEffect(()=>{const a=w.current;if(!a)return;const n=document.createElement("canvas");n.className="furin-grain-mesh__lienzo",n.setAttribute("aria-hidden","true");const r=n.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!r)return;a.insertBefore(n,a.firstChild);const b=matchMedia("(prefers-reduced-motion: reduce)").matches;let h=null,i={},E=!0,q=!1,p=0,y=0,P=0,R=1,N=b?5.5:1.2,S=0;const o={x:0,y:0,tx:0,ty:0,k:0,kObj:0},z=()=>{if(h=Y(r,$,K),!!h){for(const t of["u_res","u_t","u_scale","u_grain","u_frame","u_dpr","u_n","u_col","u_ptr","u_ptrk"])i[t]=r.getUniformLocation(h,t);r.useProgram(h)}},F=()=>{if(!h||r.isContextLost()||!y)return;const t=l.current,c=(t.colors.length>=2?t.colors:B).slice(0,I),g=new Float32Array(I*3);c.forEach((H,X)=>g.set(W(H),X*3)),r.viewport(0,0,n.width,n.height),r.useProgram(h),r.uniform2f(i.u_res,n.width,n.height),r.uniform1f(i.u_t,N),r.uniform1f(i.u_scale,t.scale),r.uniform1f(i.u_grain,t.grain),r.uniform1f(i.u_frame,Math.floor(performance.now()/41.7)%997),r.uniform1f(i.u_dpr,R),r.uniform1i(i.u_n,c.length),r.uniform3fv(i.u_col,g),r.uniform2f(i.u_ptr,o.x,o.y),r.uniform1f(i.u_ptrk,o.k*.8*Math.min(t.reactivity,1.25)),r.drawArrays(r.TRIANGLES,0,3)},T=t=>{if(p=0,q||!E)return;const c=Math.min(.05,S?(t-S)/1e3:.016);S=t,N+=c*.5*l.current.speed;const g=1-Math.exp(-c*2.4);o.x+=(o.tx-o.x)*g,o.y+=(o.ty-o.y)*g,o.k+=(o.kObj-o.k)*(1-Math.exp(-c*2)),F(),p=requestAnimationFrame(T)},j=()=>{b||!p&&E&&!q&&(S=0,p=requestAnimationFrame(T))};A.current=()=>{b?F():j()};const O=()=>{R=Math.min(window.devicePixelRatio||1,1.5);const t=a.getBoundingClientRect();y=Math.max(1,Math.round(t.width*R)),P=Math.max(1,Math.round(t.height*R)),(n.width!==y||n.height!==P)&&(n.width=y,n.height=P),F(),j()},D=new ResizeObserver(O);D.observe(a);const G=new IntersectionObserver(([t])=>{E=t.isIntersecting,E&&j()},{rootMargin:"80px"});G.observe(a);const L=t=>{const c=a.getBoundingClientRect();o.tx=(t.clientX-c.left)/c.width*2-1,o.ty=-((t.clientY-c.top)/c.height*2-1),o.kObj=1},V=()=>{o.kObj=0};return b||(a.addEventListener("pointermove",L,{passive:!0}),a.addEventListener("pointerdown",L,{passive:!0}),a.addEventListener("pointerleave",V)),n.addEventListener("webglcontextlost",t=>{t.preventDefault(),cancelAnimationFrame(p),p=0}),n.addEventListener("webglcontextrestored",()=>{i={},z(),O()}),z(),O(),()=>{q=!0,A.current=null,cancelAnimationFrame(p),D.disconnect(),G.disconnect(),a.removeEventListener("pointermove",L),a.removeEventListener("pointerdown",L),a.removeEventListener("pointerleave",V),r.getExtension("WEBGL_lose_context")?.loseContext(),n.remove()}},[]),x.useEffect(()=>{A.current?.()},[U,s,u,d,v]),M.jsx("div",{ref:w,className:`furin-grain-mesh ${m}`,style:C,children:e!=null?M.jsx("div",{className:"furin-grain-mesh__contenido",children:e}):null})}function Z(){return M.jsx("div",{className:"stage",children:M.jsx(J,{})})}export{Z as default};
