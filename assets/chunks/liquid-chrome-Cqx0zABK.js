import{r as z,j as F}from"./client-CsvIHAk3.js";const E=12,$=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,K=`#version 300 es
precision highp float;
#define MAX_GOTAS ${E}
uniform vec2 u_res;
uniform float u_t;          // tiempo de flujo del metal
uniform float u_now;        // reloj para la edad de las gotas
uniform float u_scale;
uniform float u_int;
uniform vec3 u_tint;
uniform vec2 u_ptr;         // cursor suavizado, en el espacio de la superficie
uniform float u_dent;       // cuánto empuja el cursor la superficie
uniform vec4 u_gotas[MAX_GOTAS]; // x, y, nacimiento, amplitud
out vec4 o;

vec3 rotY(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z); }
vec3 rotX(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x, c * v.y - s * v.z, s * v.y + c * v.z); }
float wrapd(float a) { return a - 6.2831853 * floor((a + 3.1415926) / 6.2831853); }
float rbox(float az, float el, float caz, float cel, float hw, float hh, float soft) {
  float a = abs(wrapd(az - caz)), e = abs(el - cel);
  return smoothstep(hw + soft, hw - soft, a) * smoothstep(hh + soft, hh - soft, e);
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

// Estudio: cielo azul profundo arriba, horizonte blanco, suelo oscuro y cajas de luz de varios tamaños.
vec3 studio(vec3 d) {
  float el = asin(clamp(d.y, -1.0, 1.0));
  float az = atan(d.x, d.z);
  float up = clamp(el / 1.25, 0.0, 1.0);
  vec3 sky = mix(vec3(0.92, 0.96, 1.00), vec3(0.14, 0.22, 0.42), pow(up, 0.6));
  float dn = clamp(-el / 1.1, 0.0, 1.0);
  vec3 gnd = mix(vec3(0.50, 0.49, 0.50), vec3(0.02, 0.022, 0.03), pow(dn, 0.55));
  vec3 c = el >= 0.0 ? sky : gnd;
  c += vec3(1.0, 0.98, 0.95) * 2.6 * exp(-pow(el / 0.03, 2.0));
  c += vec3(1.00, 0.96, 0.90) * 8.0 * rbox(az, el, -0.85, 0.50, 0.30, 0.20, 0.04);
  c += vec3(0.86, 0.93, 1.00) * 7.0 * rbox(az, el, 1.00, 0.28, 0.06, 0.46, 0.035);
  c += vec3(1.00) * 5.0 * rbox(az, el, 0.10, 1.05, 0.55, 0.08, 0.04);
  c += vec3(1.00, 0.88, 0.76) * 5.0 * rbox(az, el, 0.45, -0.34, 0.40, 0.045, 0.03);
  c += vec3(0.80, 0.90, 1.00) * 4.0 * rbox(az, el, -1.55, -0.2, 0.05, 0.30, 0.03);
  c += vec3(1.00) * 4.0 * rbox(az, el, 1.65, 0.80, 0.16, 0.10, 0.03);
  return c;
}

// Campo de alturas: metal que fluye (dominio deformado) + abolladura bajo el cursor + ondas de las gotas.
float H(vec2 p) {
  float t = u_t;
  vec2 q = p;
  q += 0.50 * vec2(sin(p.y * 1.25 + t * 0.55), cos(p.x * 1.05 - t * 0.47));
  q += 0.28 * vec2(sin(q.y * 2.30 - t * 0.71 + 1.7), cos(q.x * 2.00 + t * 0.62));
  float h = 0.55 * sin(q.x * 1.65 + q.y * 1.05 + t * 0.35);
  h += 0.28 * sin(q.x * 3.05 - q.y * 2.35 - t * 0.48);
  h += 0.30 * sin(length(q - vec2(0.3, -0.2)) * 3.3 - t * 0.55);
  // Abolladura que sigue al cursor.
  vec2 d = p - u_ptr;
  h -= u_dent * 0.45 * exp(-dot(d, d) * 4.0);
  // Ondas circulares: cada gota viaja hacia afuera y se apaga.
  for (int i = 0; i < MAX_GOTAS; i++) {
    vec4 g = u_gotas[i];
    if (g.w <= 0.0) continue;
    float age = u_now - g.z;
    float r = length(p - g.xy);
    float x = r - age * 1.05;
    h += g.w * 0.085 * cos(x * 9.5) * exp(-x * x * 5.0) * exp(-age * 1.1) / (1.0 + r * 1.5);
  }
  return h;
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y * 3.4 * u_scale;
  float e = 2.0 / u_res.y * 3.4 * u_scale;
  float h0 = H(p);
  float hx = H(p + vec2(e, 0.0));
  float hy = H(p + vec2(0.0, e));
  vec2 gr = vec2(hx - h0, hy - h0) / e;
  vec3 N = normalize(vec3(-gr * 0.23, 1.0));
  vec3 V = normalize(vec3((gl_FragCoord.xy - 0.5 * u_res) / u_res.y * 0.45, 1.0));
  float ndv = max(dot(N, V), 0.0);
  vec3 R = reflect(-V, N);
  float yaw = u_t * 0.045 + u_ptr.x * 0.10;
  float pitch = 0.10 + u_ptr.y * 0.06;
  float dsp = 0.03 * (1.0 - ndv) + 0.006;
  vec3 rf;
  rf.r = studio(rotX(rotY(R, yaw - dsp), pitch)).r;
  rf.g = studio(rotX(rotY(R, yaw), pitch)).g;
  rf.b = studio(rotX(rotY(R, yaw + dsp), pitch)).b;
  vec3 F0 = u_tint * 0.93;
  vec3 F = F0 + (1.0 - F0) * pow(1.0 - ndv, 5.0);
  vec3 col = rf * F * u_int;
  col = 1.0 - exp(-col * 1.5);
  col = pow(col, vec3(0.9));
  vec2 vv = gl_FragCoord.xy / u_res - 0.5;
  col *= 1.0 - 0.45 * dot(vv, vv);
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  o = vec4(col, 1.0);
}`;function W(r){try{const h=document.createElement("canvas");h.width=h.height=1;const f=h.getContext("2d",{willReadFrequently:!0});f.fillStyle="#e3eaf5",f.fillStyle=r,f.fillRect(0,0,1,1);const d=f.getImageData(0,0,1,1).data;return[d[0]/255,d[1]/255,d[2]/255]}catch{return[.89,.92,.96]}}function J(r,h,f){const d=(P,M)=>{const s=r.createShader(P);return r.shaderSource(s,M),r.compileShader(s),r.getShaderParameter(s,r.COMPILE_STATUS)?s:(console.error(r.getShaderInfoLog(s)),null)},m=d(r.VERTEX_SHADER,h),x=d(r.FRAGMENT_SHADER,f);if(!m||!x)return null;const p=r.createProgram();return r.attachShader(p,m),r.attachShader(p,x),r.linkProgram(p),r.deleteShader(m),r.deleteShader(x),r.getProgramParameter(p,r.LINK_STATUS)?p:(console.error(r.getProgramInfoLog(p)),null)}function Q({children:r,speed:h=.6,scale:f=1,reactivity:d=1,intensity:m=1,tint:x="#e3eaf5",className:p="",style:P}){const M=z.useRef(null),s=z.useRef({speed:h,scale:f,reactivity:d,intensity:m,tint:x});s.current={speed:h,scale:f,reactivity:d,intensity:m,tint:x};const C=z.useRef(null);return z.useEffect(()=>{const c=M.current;if(!c)return;const n=document.createElement("canvas");n.className="furin-liquid-chrome__lienzo",n.setAttribute("aria-hidden","true");const a=n.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!a)return;c.insertBefore(n,c.firstChild);const y=matchMedia("(prefers-reduced-motion: reduce)").matches;let g=null,l={},A=!0,_=0,O=!1,R=0,T=0;const I=()=>{if(g=J(a,$,K),!!g){for(const o of["u_res","u_t","u_now","u_scale","u_int","u_tint","u_ptr","u_dent","u_gotas"])l[o]=a.getUniformLocation(g,o);a.useProgram(g)}},v=new Float32Array(E*4);let H=0;const e={t:y?7.3:2,ult:0,px:0,py:0,tx:0,ty:0,dent:0,dentObj:0,lx:0,ly:0,lt:0,hayPtr:!1},w=()=>performance.now()/1e3;let S=w();const N=o=>{if(!g||a.isContextLost()||!R)return;const t=s.current;a.viewport(0,0,n.width,n.height),a.useProgram(g),a.uniform2f(l.u_res,n.width,n.height),a.uniform1f(l.u_t,e.t),a.uniform1f(l.u_now,o),a.uniform1f(l.u_scale,t.scale),a.uniform1f(l.u_int,t.intensity);const[i,u,L]=W(t.tint);a.uniform3f(l.u_tint,i,u,L),a.uniform2f(l.u_ptr,e.px,e.py),a.uniform1f(l.u_dent,e.dent*t.reactivity),a.uniform4fv(l.u_gotas,v),a.drawArrays(a.TRIANGLES,0,3)},Y=o=>{for(let t=0;t<E;t++)if(v[t*4+3]>0&&o-v[t*4+2]<4.5)return!0;return!1},X=()=>{if(_=0,O||!A)return;const o=w()-S,t=Math.min(.05,o-e.ult||.016);e.ult=o,y||(e.t+=t*s.current.speed);const i=1-Math.exp(-t*9);e.px+=(e.tx-e.px)*i,e.py+=(e.ty-e.py)*i,e.dent+=(e.dentObj-e.dent)*(1-Math.exp(-t*4));for(let u=0;u<E;u++)v[u*4+3]>0&&o-v[u*4+2]>4.5&&(v[u*4+3]=0);N(o),(!y&&s.current.speed>0||Y(o)||Math.abs(e.dent-e.dentObj)>.01||Math.hypot(e.tx-e.px,e.ty-e.py)>.002)&&(_=requestAnimationFrame(X))},b=()=>{!_&&A&&!O&&(e.ult=w()-S,_=requestAnimationFrame(X))};C.current=b;const B=o=>{const t=c.getBoundingClientRect(),i=3.4*s.current.scale/Math.max(t.height,1);return[(o.clientX-t.left-t.width/2)*i,-(o.clientY-t.top-t.height/2)*i]},q=o=>{if(y)return;const[t,i]=B(o);e.hayPtr||(e.px=t,e.py=i,e.hayPtr=!0),e.tx=t,e.ty=i,e.dentObj=1;const u=w()-S,L=Math.hypot(t-e.lx,i-e.ly);if(L>.38||!e.lt){const U=Math.min(1.6,L/Math.max(u-e.lt,.016)*.35),j=H++%E;v[j*4]=t,v[j*4+1]=i,v[j*4+2]=u,v[j*4+3]=.3+Math.min(U,.9),e.lx=t,e.ly=i,e.lt=u}b()},k=()=>{e.dentObj=0,e.hayPtr=!1,e.lt=0,b()};y||(c.addEventListener("pointermove",q,{passive:!0}),c.addEventListener("pointerdown",q,{passive:!0}),c.addEventListener("pointerleave",k));const G=()=>{const o=Math.min(window.devicePixelRatio||1,1.5),t=c.getBoundingClientRect();R=Math.max(1,Math.round(t.width*o)),T=Math.max(1,Math.round(t.height*o)),(n.width!==R||n.height!==T)&&(n.width=R,n.height=T),N(w()-S),b()},V=new ResizeObserver(G);V.observe(c);const D=new IntersectionObserver(([o])=>{A=o.isIntersecting,A&&b()},{rootMargin:"80px"});return D.observe(c),n.addEventListener("webglcontextlost",o=>{o.preventDefault(),cancelAnimationFrame(_),_=0}),n.addEventListener("webglcontextrestored",()=>{l={},I(),G()}),I(),G(),()=>{O=!0,C.current=null,cancelAnimationFrame(_),D.disconnect(),V.disconnect(),c.removeEventListener("pointermove",q),c.removeEventListener("pointerdown",q),c.removeEventListener("pointerleave",k),a.getExtension("WEBGL_lose_context")?.loseContext(),n.remove()}},[]),z.useEffect(()=>{C.current?.()},[h,f,d,m,x]),F.jsx("div",{ref:M,className:`furin-liquid-chrome ${p}`,style:P,children:r!=null?F.jsx("div",{className:"furin-liquid-chrome__contenido",children:r}):null})}function ee(){return F.jsx("div",{className:"stage",children:F.jsx(Q,{})})}export{ee as default};
