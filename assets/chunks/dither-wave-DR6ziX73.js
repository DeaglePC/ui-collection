import{r as w,j as A}from"./client-CsvIHAk3.js";const $=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,J=`#version 300 es
precision highp float;
uniform vec2 u_res;
uniform float u_t;
uniform float u_cell;       // tamaño del píxel de tramado, en píxeles reales
uniform float u_amp;
uniform vec3 u_dark;
uniform vec3 u_light;
uniform vec3 u_ptr;         // x, y (espacio de la superficie) y fuerza
uniform vec4 u_ond[6];      // ondas del cursor: x, y, nacimiento, fuerza
uniform float u_now;
out vec4 o;

// Matriz de Bayer 8x8 como umbral de tramado ordenado.
float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }

// Relieve: marejada de varias capas con el dominio doblado, para que no repita.
float H(vec2 p) {
  float t = u_t;
  vec2 q = p;
  q += 0.30 * vec2(sin(p.y * 1.5 + t * 0.40), cos(p.x * 1.3 - t * 0.33));
  float a = 0.50 * sin(q.x * 3.4 + q.y * 1.5 + t * 0.7 + sin(q.y * 1.9 + t * 0.3) * 1.8);
  a += 0.34 * sin(q.y * 3.1 - q.x * 1.9 - t * 0.55);
  a += 0.22 * sin(length(q - vec2(0.55, -0.25)) * 6.0 - t * 0.9);
  // Oleaje fino montado sobre la marejada grande.
  a += 0.16 * sin((q.x * 0.8 + q.y * 1.5) * 9.0 - t * 1.3 + a * 2.0);
  float h = a * u_amp;
  vec2 d = p - u_ptr.xy;
  h += u_ptr.z * 0.55 * exp(-dot(d, d) * 6.0);
  for (int i = 0; i < 6; i++) {
    vec4 g = u_ond[i];
    if (g.w <= 0.0) continue;
    float age = u_now - g.z;
    float x = length(p - g.xy) - age * 0.55;
    h += g.w * 0.3 * cos(x * 16.0) * exp(-x * x * 30.0) * exp(-age * 1.1);
  }
  return h;
}

void main() {
  vec2 pc = floor(gl_FragCoord.xy / u_cell);
  vec2 c = (pc + 0.5) * u_cell;
  vec2 p = (c - 0.5 * u_res) / u_res.y * 2.0;
  float e = u_cell / u_res.y * 2.0;
  float h0 = H(p), hx = H(p + vec2(e, 0.0)), hy = H(p + vec2(0.0, e));
  vec3 n = normalize(vec3(-(hx - h0) / e * 0.30, -(hy - h0) / e * 0.30, 1.0));
  vec3 l = normalize(vec3(-0.5, 0.55, 0.67));
  float dif = dot(n, l);
  // Tono: altura (valles oscuros, crestas claras) + luz difusa que modela cada ola; el tramado convierte ese gradiente en puntos.
  float L = 0.5 + 0.30 * h0 + 0.5 * (dif - 0.67);
  L = smoothstep(0.08, 0.92, L);
  // Hacia las esquinas la onda se apaga: el centro queda como escenario.
  vec2 vv = gl_FragCoord.xy / u_res - 0.5;
  L *= 1.0 - 0.9 * smoothstep(0.18, 0.62, dot(vv, vv) * 1.6);
  float th = bayer8(pc);
  vec3 col = L > th ? u_light : u_dark;
  o = vec4(col, 1.0);
}`;let g=null;const q=new Map;function W(t,m){const h=q.get(t);if(h)return h;try{g??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),g.clearRect(0,0,1,1),g.fillStyle="#010203",g.fillStyle=t,g.fillRect(0,0,1,1);const u=g.getImageData(0,0,1,1).data,l=[u[0]/255,u[1]/255,u[2]/255];return q.size>64&&q.clear(),q.set(t,l),l}catch{return m}}function Q(t,m,h){const u=(j,C)=>{const v=t.createShader(j);return t.shaderSource(v,C),t.compileShader(v),t.getShaderParameter(v,t.COMPILE_STATUS)?v:(console.error(t.getShaderInfoLog(v)),null)},l=u(t.VERTEX_SHADER,m),x=u(t.FRAGMENT_SHADER,h);if(!l||!x)return null;const f=t.createProgram();return t.attachShader(f,l),t.attachShader(f,x),t.linkProgram(f),t.deleteShader(l),t.deleteShader(x),t.getProgramParameter(f,t.LINK_STATUS)?f:(console.error(t.getProgramInfoLog(f)),null)}function Z({children:t,dark:m="#0a0b0f",light:h="#d9d3c3",cell:u=3,speed:l=1,amplitude:x=1,reactivity:f=1,className:j="",style:C}){const v=w.useRef(null),P=w.useRef({dark:m,light:h,cell:u,speed:l,amplitude:x,reactivity:f});P.current={dark:m,light:h,cell:u,speed:l,amplitude:x,reactivity:f};const z=w.useRef(null);w.useEffect(()=>{const i=v.current;if(!i)return;const a=document.createElement("canvas");a.className="furin-dither-wave__lienzo",a.setAttribute("aria-hidden","true");const o=a.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!o)return;i.insertBefore(a,i.firstChild);const b=matchMedia("(prefers-reduced-motion: reduce)").matches;let y=null,c={},E=!0,F=!1,_=0,L=0,I=0,R=1,D=b?6.2:1.5,M=0,S=0;const e={x:0,y:0,tx:0,ty:0,k:0,kObj:0,lx:0,ly:0,hay:!1},p=new Float32Array(24);let K=0;const N=()=>{if(y=Q(o,$,J),!!y){for(const r of["u_res","u_t","u_cell","u_amp","u_dark","u_light","u_ptr","u_ond","u_now"])c[r]=o.getUniformLocation(y,r);o.useProgram(y)}},T=()=>{if(!y||o.isContextLost()||!L)return;const r=P.current;o.viewport(0,0,a.width,a.height),o.useProgram(y),o.uniform2f(c.u_res,a.width,a.height),o.uniform1f(c.u_t,D),o.uniform1f(c.u_cell,Math.max(1,Math.round(r.cell*R))),o.uniform1f(c.u_amp,r.amplitude),o.uniform3f(c.u_dark,...W(r.dark,[.04,.04,.06])),o.uniform3f(c.u_light,...W(r.light,[.85,.83,.76])),o.uniform3f(c.u_ptr,e.x,e.y,e.k*r.reactivity),o.uniform4fv(c.u_ond,p),o.uniform1f(c.u_now,S),o.drawArrays(o.TRIANGLES,0,3)},B=r=>{if(_=0,F||!E)return;const n=Math.min(.05,M?(r-M)/1e3:.016);M=r,S+=n,D+=n*.6*P.current.speed;const s=1-Math.exp(-n*8);e.x+=(e.tx-e.x)*s,e.y+=(e.ty-e.y)*s,e.k+=(e.kObj-e.k)*(1-Math.exp(-n*4));for(let d=0;d<6;d++)p[d*4+3]>0&&S-p[d*4+2]>4&&(p[d*4+3]=0);T(),_=requestAnimationFrame(B)},H=()=>{b||!_&&E&&!F&&(M=0,_=requestAnimationFrame(B))};z.current=()=>{b?T():H()};const O=()=>{R=Math.min(window.devicePixelRatio||1,2);const r=i.getBoundingClientRect();L=Math.max(1,Math.round(r.width*R)),I=Math.max(1,Math.round(r.height*R)),(a.width!==L||a.height!==I)&&(a.width=L,a.height=I),T(),H()},G=new ResizeObserver(O);G.observe(i);const U=new IntersectionObserver(([r])=>{E=r.isIntersecting,E&&H()},{rootMargin:"80px"});U.observe(i);const Y=r=>{const n=i.getBoundingClientRect(),s=2/Math.max(n.height,1);return[(r.clientX-n.left-n.width/2)*s,-(r.clientY-n.top-n.height/2)*s]},k=r=>{const[n,s]=Y(r);if(e.hay||(e.x=n,e.y=s,e.hay=!0),e.tx=n,e.ty=s,e.kObj=1,Math.hypot(n-e.lx,s-e.ly)>.3){const d=K++%6;p[d*4]=n,p[d*4+1]=s,p[d*4+2]=S,p[d*4+3]=.7,e.lx=n,e.ly=s}},V=()=>{e.kObj=0,e.hay=!1};return b||(i.addEventListener("pointermove",k,{passive:!0}),i.addEventListener("pointerdown",k,{passive:!0}),i.addEventListener("pointerleave",V)),a.addEventListener("webglcontextlost",r=>{r.preventDefault(),cancelAnimationFrame(_),_=0}),a.addEventListener("webglcontextrestored",()=>{c={},N(),O()}),N(),O(),()=>{F=!0,z.current=null,cancelAnimationFrame(_),G.disconnect(),U.disconnect(),i.removeEventListener("pointermove",k),i.removeEventListener("pointerdown",k),i.removeEventListener("pointerleave",V),o.getExtension("WEBGL_lose_context")?.loseContext(),a.remove()}},[]),w.useEffect(()=>{z.current?.()},[m,h,u,l,x,f]);const X={"--furin-dither-wave-dark":m};return A.jsx("div",{ref:v,className:`furin-dither-wave ${j}`,style:{...X,...C},children:t!=null?A.jsx("div",{className:"furin-dither-wave__contenido",children:t}):null})}function te(){return A.jsx("div",{className:"stage",children:A.jsx(Z,{})})}export{te as default};
