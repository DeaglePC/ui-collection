import{r as u,j as m}from"./client-CsvIHAk3.js";const H=21,q=1.5,U=`
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,V=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 uRes;
uniform float uTime;
uniform float uIntensity;
uniform float uAmplitude;
uniform vec3 uBg;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;

// Dirección pseudoaleatoria para cada vértice de la rejilla simplex.
vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
}

// Ruido simplex 2D: devuelve valores suaves entre -1 y 1.
float simplex(vec2 p) {
  const float F2 = 0.3660254;  // (sqrt(3) - 1) / 2
  const float G2 = 0.2113249;  // (3 - sqrt(3)) / 6
  vec2 cell = floor(p + (p.x + p.y) * F2);
  vec2 a = p - cell + (cell.x + cell.y) * G2;
  vec2 step1 = a.x > a.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec2 b = a - step1 + G2;
  vec2 c = a - 1.0 + 2.0 * G2;
  vec3 w = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
  w = w * w * w * w;
  vec3 g = vec3(
    dot(a, hash2(cell)),
    dot(b, hash2(cell + step1)),
    dot(c, hash2(cell + 1.0))
  );
  return 70.0 * dot(w, g);
}

// Ruido fractal: suma capas de simplex, cada una más fina y más débil.
float fbm(vec2 p) {
  float sum = 0.0;
  float gain = 0.5;
  for (int i = 0; i < 4; i++) {
    sum += gain * simplex(p);
    p = p * 2.03 + vec2(11.7, 5.3);
    gain *= 0.5;
  }
  return sum;
}

// Una cortina: borde ondulante abajo, luz que se desvanece hacia arriba y rayos verticales.
float curtain(vec2 uv, float aspect, float t, float seed, float base, float reach) {
  float x = uv.x * aspect;
  float wave = fbm(vec2(x * 0.75 + seed * 7.0, t * 0.16 + seed));
  float edge = base + wave * 0.34 * uAmplitude;
  float d = uv.y - edge;

  // Debajo del borde la luz muere rápido; arriba se apaga despacio.
  float fall = d < 0.0 ? exp(d * 17.0) : exp(-d / reach);

  // Rayos: ruido muy estirado en vertical, más marcado mientras más arriba.
  float rays = simplex(vec2(x * 4.5 + wave * 1.6 + seed * 13.0, t * 0.22 + d * 0.9)) * 0.5 + 0.5;
  rays = mix(0.8, 0.12 + 1.7 * rays * rays, smoothstep(-0.02, 0.3, d));

  // Respiración lenta de toda la cortina.
  float pulse = 0.78 + 0.22 * sin(t * 0.5 + seed * 6.0);
  return fall * rays * pulse;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;

  float a0 = curtain(uv, aspect, uTime, 0.0, 0.30, 0.20);
  float a1 = curtain(uv, aspect, uTime * 1.15, 1.7, 0.47, 0.19);
  float a2 = curtain(uv, aspect, uTime * 0.85, 3.4, 0.63, 0.17);

  vec3 light = (uColor0 * a0 + uColor1 * a1 + uColor2 * a2) * uIntensity;

  // Mezcla tipo "screen": la luz suma sin pasarse de blanco y conserva el tono.
  vec3 col = 1.0 - (1.0 - uBg) * exp(-light * 1.4);

  // Ruido mínimo para que los degradados oscuros no se vean en escalones.
  float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col += (dither - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}`;let b=null;function y(t){if(b??=document.createElement("canvas").getContext("2d"),!b)return[0,0,0];b.fillStyle="#000000",b.fillStyle=t;const s=b.fillStyle;if(s.startsWith("#")){const o=parseInt(s.slice(1),16);return[(o>>16)/255,(o>>8&255)/255,(o&255)/255]}const[e,a,r]=s.match(/[\d.]+/g).map(Number);return[e/255,a/255,r/255]}function G(t,s,e){const a=t.createShader(s);return a?(t.shaderSource(a,e),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(t.deleteShader(a),null)):null}function W(t){const s={alpha:!1,antialias:!1,depth:!1,stencil:!1},e=t.getContext("webgl",s)??t.getContext("experimental-webgl",s);if(!e)return null;const a=["uRes","uTime","uIntensity","uAmplitude","uBg","uColor0","uColor1","uColor2"];let r=null,o={},l=null;const R=()=>{const i=G(e,e.VERTEX_SHADER,U),n=G(e,e.FRAGMENT_SHADER,V);if(r=e.createProgram(),!i||!n||!r||(e.attachShader(r,i),e.attachShader(r,n),e.linkProgram(r),e.deleteShader(i),e.deleteShader(n),!e.getProgramParameter(r,e.LINK_STATUS)))return!1;e.useProgram(r),o=Object.fromEntries(a.map(d=>[d,e.getUniformLocation(r,d)])),l=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const h=e.getAttribLocation(r,"aPos");return e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0),!0};let f=R();if(!f)return null;const p=i=>{i.preventDefault(),f=!1},v=()=>{f=R()};return t.addEventListener("webglcontextlost",p),t.addEventListener("webglcontextrestored",v),{resize(i,n){t.width=i,t.height=n},draw(i,n){!f||e.isContextLost()||(e.viewport(0,0,t.width,t.height),e.uniform2f(o.uRes,t.width,t.height),e.uniform1f(o.uTime,i),e.uniform1f(o.uIntensity,n.intensity),e.uniform1f(o.uAmplitude,n.amplitude),e.uniform3fv(o.uBg,n.background),e.uniform3fv(o.uColor0,n.colors[0]),e.uniform3fv(o.uColor1,n.colors[1]),e.uniform3fv(o.uColor2,n.colors[2]),e.drawArrays(e.TRIANGLES,0,3))},dispose(){t.removeEventListener("webglcontextlost",p),t.removeEventListener("webglcontextrestored",v),r&&e.deleteProgram(r),l&&e.deleteBuffer(l),e.getExtension("WEBGL_lose_context")?.loseContext()}}}function k({color1:t="#2BFFB0",color2:s="#2D7BFF",color3:e="#A45CFF",background:a="#0B0B0F",speed:r=1,intensity:o=1,amplitude:l=1,className:R="",style:f,children:p}){const v=u.useRef(null),i=u.useRef(null),[n,h]=u.useState("pending"),d=u.useRef({colors:[[0,0,0],[0,0,0],[0,0,0]],background:[0,0,0],speed:r,intensity:o,amplitude:l}),_=u.useRef(()=>{});u.useEffect(()=>{d.current={colors:[y(t),y(s),y(e)],background:y(a),speed:r,intensity:o,amplitude:l},_.current()},[t,s,e,a,r,o,l]),u.useEffect(()=>{const g=v.current,M=i.current;if(!g||!M)return;const w=document.createElement("canvas");w.className="furin-aurora__canvas";const A=W(w);if(!A){h("static");return}M.appendChild(w),h("webgl");const E=window.matchMedia("(prefers-reduced-motion: reduce)");let I=H,C=0,x=0,S=!0;const F=()=>A.draw(I,d.current);_.current=F;const P=c=>{x=requestAnimationFrame(P);const O=Math.min((c-C)/1e3,.1);C=c,I+=O*d.current.speed,F()},T=()=>{x||!S||E.matches||(C=performance.now(),x=requestAnimationFrame(P))},L=()=>{cancelAnimationFrame(x),x=0},B=()=>{const c=Math.min(window.devicePixelRatio||1,q);A.resize(Math.max(1,Math.round(g.clientWidth*c)),Math.max(1,Math.round(g.clientHeight*c))),F()},N=new ResizeObserver(B);N.observe(g);const j=new IntersectionObserver(([c])=>{S=c.isIntersecting,S?T():L()});j.observe(g);const D=()=>{E.matches?L():T()};return E.addEventListener("change",D),B(),T(),()=>{L(),N.disconnect(),j.disconnect(),E.removeEventListener("change",D),_.current=()=>{},A.dispose(),w.remove()}},[]);const z={"--furin-aurora-c1":t,"--furin-aurora-c2":s,"--furin-aurora-c3":e,"--furin-aurora-bg":a};return m.jsxs("div",{ref:v,className:`furin-aurora ${R}`.trim(),style:{...z,...f},children:[n!=="webgl"&&m.jsx("div",{className:"furin-aurora__fallback"}),m.jsx("div",{ref:i,className:"furin-aurora__host"}),p!==void 0&&m.jsx("div",{className:"furin-aurora__content",children:p})]})}function Y(){return m.jsx("div",{className:"stage",children:m.jsx(k,{})})}export{Y as default};
