import{r as y,j as R}from"./client-CsvIHAk3.js";const K=`#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`,$=`#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPtr;
uniform vec3 uMid;
uniform vec3 uHi;
uniform float uFolds;
uniform float uSheen;
out vec4 outColor;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
// Altura de la tela: pliegues largos que se deforman unos a otros.
float H(vec2 p) {
  float t = uTime;
  vec2 q = p + 0.34 * vec2(sin(p.y * 1.4 + t * 0.30), cos(p.x * 1.1 - t * 0.24));
  float h = 0.0;
  h += 0.62 * sin(dot(q, vec2(0.84, 0.54)) * uFolds * 2.0 + t * 0.40 + 1.3 * sin(q.y * 1.2 + t * 0.17));
  h += 0.32 * sin(dot(q, vec2(-0.30, 0.95)) * uFolds * 3.3 - t * 0.31 + 1.0 * sin(q.x * 2.1 - t * 0.2));
  h += 0.14 * sin(dot(q, vec2(0.96, -0.28)) * uFolds * 5.7 + t * 0.52);
  return h;
}
void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2 p = (uv - 0.5) * vec2(asp, 1.0) * 2.0;
  float e = 0.004;
  float h0 = H(p);
  float hx = (H(p + vec2(e, 0.0)) - H(p - vec2(e, 0.0))) / (2.0 * e);
  float hy = (H(p + vec2(0.0, e)) - H(p - vec2(0.0, e))) / (2.0 * e);
  vec3 N = normalize(vec3(-hx * 0.2, -hy * 0.2, 1.0));
  vec3 V = vec3(0.0, 0.0, 1.0);
  vec3 L = normalize(vec3(-0.5 + uPtr.x * 0.8, 0.55 + uPtr.y * 0.6, 0.7));
  vec3 Hh = normalize(L + V);
  // Dirección del hilo: sigue los pliegues y varía despacio.
  float ta = 0.6 + 0.5 * sin(p.x * 0.9 + uTime * 0.07) + h0 * 0.28;
  vec3 T = normalize(vec3(cos(ta), sin(ta), 0.0));
  T = normalize(T - N * dot(T, N));
  float th = dot(T, Hh);
  float sinTH = sqrt(max(0.0, 1.0 - th * th));
  float nl = dot(N, L);
  float diff = pow(clamp(nl * 1.15 - 0.12, 0.0, 1.0), 2.2);
  vec3 col = mix(uMid * 0.07, uMid * 1.15, diff);
  // Fibras: ruido muy estirado a lo largo del hilo.
  vec2 tp = vec2(dot(p, T.xy), dot(p, vec2(-T.y, T.x)));
  float fib = 0.55 * vn(vec2(tp.x * 4.0, tp.y * 260.0)) + 0.45 * vn(vec2(tp.x * 9.0, tp.y * 520.0));
  float fm = 0.86 + 0.28 * fib;
  float lit = smoothstep(-0.15, 0.5, nl);
  float nh = max(dot(N, Hh), 0.0);
  vec3 hi2 = mix(uHi, uMid * 2.4, 0.6);
  vec3 spec = uHi * (0.5 * pow(sinTH, 70.0) * lit * fm + 0.5 * pow(nh, 55.0))
            + hi2 * (0.32 * pow(sinTH, 10.0) * lit * fm + 0.3 * pow(nh, 9.0));
  col += spec * uSheen * 0.85;
  col += uMid * pow(1.0 - N.z, 2.2) * 0.22;
  col *= 1.0 - 0.34 * dot(uv - 0.5, uv - 0.5) * 2.0;
  col = col / (1.0 + col * 0.45) * 1.3;
  col = pow(max(col, 0.0), vec3(0.92));
  col += (hash(gl_FragCoord.xy + uTime) - 0.5) * 0.012;
  outColor = vec4(col, 1.0);
}`;let s=null;const I=new Map;function B(l){const d=I.get(l);if(d)return d;if(s??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),!s)return[1,1,1];s.clearRect(0,0,1,1),s.fillStyle="#000",s.fillStyle=l,s.fillRect(0,0,1,1);const u=s.getImageData(0,0,1,1).data,v=[u[0]/255,u[1]/255,u[2]/255];return I.set(l,v),v}function J({color:l="#2b1c78",highlight:d="#ffe3f7",folds:u=1.5,sheen:v=1,speed:T=1,interactive:A=!0,className:k="",style:D}){const F=y.useRef(null),m=y.useRef({color:l,highlight:d,folds:u,sheen:v,speed:T,interactive:A});return m.current={color:l,highlight:d,folds:u,sheen:v,speed:T,interactive:A},y.useEffect(()=>{const f=F.current;if(!f)return;const o=document.createElement("canvas");o.className="furin-silk-flow-canvas",f.appendChild(o);const e=o.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"low-power"});if(!e){o.remove();return}const S=(t,r)=>{const i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i},c=e.createProgram(),E=S(e.VERTEX_SHADER,K),x=S(e.FRAGMENT_SHADER,$);if(e.attachShader(c,E),e.attachShader(c,x),e.linkProgram(c),!e.getProgramParameter(c,e.LINK_STATUS)){console.error(e.getShaderInfoLog(x)||e.getProgramInfoLog(c)),o.remove();return}e.useProgram(c);const H=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,H),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const M=e.getAttribLocation(c,"p");e.enableVertexAttribArray(M),e.vertexAttribPointer(M,2,e.FLOAT,!1,0,0);const a=t=>e.getUniformLocation(c,t),j=a("uRes"),U=a("uTime"),V=a("uPtr"),G=a("uMid"),O=a("uHi"),W=a("uFolds"),Y=a("uSheen"),X=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n={x:0,y:0,tx:0,ty:0};let b=12,g=0,h=0,p=!0;const L=()=>{const t=Math.min(window.devicePixelRatio||1,1.5),r=Math.max(2,Math.round(o.clientWidth*t)),i=Math.max(2,Math.round(o.clientHeight*t));(o.width!==r||o.height!==i)&&(o.width=r,o.height=i),e.viewport(0,0,r,i)},w=()=>{const t=m.current;e.uniform2f(j,o.width,o.height),e.uniform1f(U,b),e.uniform2f(V,n.x,n.y),e.uniform3f(G,...B(t.color)),e.uniform3f(O,...B(t.highlight)),e.uniform1f(W,t.folds),e.uniform1f(Y,t.sheen),e.drawArrays(e.TRIANGLES,0,3)},P=t=>{h=0;const r=Math.min(.05,(t-(g||t))/1e3);g=t,b+=r*m.current.speed;const i=1-Math.exp(-r*4);n.x+=(n.tx-n.x)*i,n.y+=(n.ty-n.y)*i,w(),p?h=requestAnimationFrame(P):g=0},N=()=>{!h&&p&&!X&&(h=requestAnimationFrame(P))},q=t=>{if(!m.current.interactive)return;const r=o.getBoundingClientRect();n.tx=(t.clientX-r.left)/r.width*2-1,n.ty=1-(t.clientY-r.top)/r.height*2},_=()=>{n.tx=0,n.ty=0};f.addEventListener("pointermove",q),f.addEventListener("pointerleave",_);const C=new ResizeObserver(()=>{L(),w()});C.observe(o);const z=new IntersectionObserver(([t])=>{p=t.isIntersecting,p&&N()},{threshold:.01});return z.observe(o),L(),w(),N(),()=>{cancelAnimationFrame(h),C.disconnect(),z.disconnect(),f.removeEventListener("pointermove",q),f.removeEventListener("pointerleave",_),e.deleteBuffer(H),e.deleteProgram(c),e.deleteShader(E),e.deleteShader(x),e.getExtension("WEBGL_lose_context")?.loseContext(),o.remove()}},[]),R.jsx("div",{ref:F,className:`furin-silk-flow ${k}`,style:D,"aria-hidden":!0})}function Z(){return R.jsx("div",{className:"stage",children:R.jsx(J,{})})}export{Z as default};
