import{r as x,j as g}from"./client-CsvIHAk3.js";let u=null;function D(p){u??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),u.clearRect(0,0,1,1),u.fillStyle="#000",u.fillStyle=p,u.fillRect(0,0,1,1);const f=u.getImageData(0,0,1,1).data;return[f[0]/255,f[1]/255,f[2]/255]}const $="attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }",J=`precision highp float;
uniform vec2 uRes;
uniform float uTime, uGlow;
uniform vec3 uWax, uLiquid;
uniform vec3 uMouse;

float hash(float n){ return fract(sin(n * 12.9898 + 1.7) * 43758.5453); }
float hwV(float y){
  float t = clamp((y + 0.30) / 0.64, 0.0, 1.0);
  return mix(0.205, 0.07, pow(t, 0.9)) + 0.014 * sin(t * 3.14159);
}

// campo de metaballs (Wyvill): x = campo, yz = gradiente
vec3 ball(vec2 q, vec2 c, float r){
  vec2 d = q - c;
  d.y *= 0.84;
  float R = r * 2.1;
  float k = dot(d, d) / (R * R);
  if (k >= 1.0) return vec3(0.0);
  float m = 1.0 - k;
  return vec3(m * m * m, -6.0 * m * m * vec2(d.x, d.y * 0.84) / (R * R));
}

vec3 field(vec2 q, float t){
  vec3 f = vec3(0.0);
  // charco de cera en el fondo, calentado por el foco
  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    vec2 c = vec2(-0.115 + fi * 0.077, -0.268 + 0.010 * sin(t * 0.5 + fi * 1.9));
    f += ball(q, c, 0.062 + 0.007 * sin(t * 0.37 + fi));
  }
  // burbujas que suben, se enfrían y bajan
  for (int i = 0; i < 8; i++) {
    float fi = float(i);
    float h1 = hash(fi), h2 = hash(fi + 11.0), h3 = hash(fi + 23.0), h4 = hash(fi + 37.0);
    float ph = fract(t * (0.055 + 0.04 * h1) + h2);
    float w = 0.5 - 0.5 * cos(6.2832 * ph);
    w = smoothstep(0.0, 1.0, w);
    float y = mix(-0.255, 0.305, w);
    float x = hwV(y) * 0.6 * sin(6.2832 * (t * (0.02 + 0.02 * h3) + h4));
    float r = (0.036 + 0.026 * h3) * (1.12 - 0.42 * w);
    f += ball(q, vec2(x, y), r);
  }
  if (uMouse.z > 0.001) f += ball(q, uMouse.xy, 0.05 * uMouse.z);
  return f;
}

vec3 metal(float u, float v, vec3 tint){
  float c = sqrt(max(1.0 - u * u, 0.0));
  vec3 n = vec3(u, 0.0, c);
  vec3 L = normalize(vec3(-0.55, 0.35, 0.8));
  float l = 0.22 + 0.78 * max(dot(n, L), 0.0);
  float spec = pow(max(dot(n, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 26.0);
  vec3 col = tint * l;
  col += tint * vec3(1.0, 0.5, 0.2) * 0.55 * smoothstep(0.7, 0.0, v) * c;
  col += vec3(1.0, 0.84, 0.6) * spec * 0.85;
  col *= 0.8 + 0.2 * smoothstep(0.0, 0.25, 1.0 - abs(u));
  return col;
}

void main(){
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float px = 1.0 / uRes.y;
  vec3 warm = mix(uLiquid, uWax, 0.45);

  // ---------- fondo: penumbra con la luz de la lámpara ----------
  vec3 col = vec3(0.030, 0.022, 0.026);
  float halo = exp(-length(vec2(p.x * 1.15, (p.y + 0.02) * 0.62)) * 4.4);
  col += warm * halo * 0.20 * uGlow;
  col += uWax * exp(-length(vec2(p.x * 0.9, (p.y + 0.12) * 0.55)) * 3.2) * 0.05 * uGlow;
  // piso: un brillo suave bajo la base
  float floorY = -0.462;
  float onFloor = smoothstep(floorY + px, floorY - px, p.y);
  col = mix(col, vec3(0.018, 0.013, 0.016) + warm * 0.10 * uGlow * exp(-abs(p.x) * 4.5) * exp(-(floorY - p.y) * 9.0), onFloor);
  col += uWax * 0.12 * uGlow * exp(-pow(p.x / 0.22, 2.0)) * exp(-pow((p.y - floorY + 0.012) / 0.02, 2.0)) * onFloor;

  // ---------- base y tapa de metal ----------
  float tb = clamp((p.y + 0.462) / 0.162, 0.0, 1.0);
  float hwB = mix(0.262, 0.214, smoothstep(0.0, 1.0, tb));
  float mB = (1.0 - smoothstep(-px, px, abs(p.x) - hwB)) * smoothstep(-0.462 - px, -0.462 + px, p.y) * (1.0 - smoothstep(-0.30 - px, -0.30 + px, p.y));
  vec3 bronze = vec3(0.58, 0.36, 0.19);
  vec3 baseCol = metal(clamp(p.x / hwB, -1.0, 1.0), tb, bronze * 0.62);
  baseCol += vec3(1.0, 0.8, 0.5) * 0.5 * exp(-pow((p.y + 0.318) / 0.006, 2.0));
  baseCol *= 1.0 - 0.45 * smoothstep(0.06, 0.0, tb);
  col = mix(col, baseCol, mB);

  float tc = clamp((p.y - 0.335) / 0.115, 0.0, 1.0);
  float hwC = 0.098 * sqrt(max(1.0 - tc * tc, 0.0)) + 0.0001;
  float mC = (1.0 - smoothstep(-px, px, abs(p.x) - hwC)) * smoothstep(0.335 - px, 0.335 + px, p.y) * (1.0 - smoothstep(0.45, 0.452, p.y));
  vec3 capCol = metal(clamp(p.x / max(hwC, 0.001), -1.0, 1.0), 1.0 - tc, bronze * 0.55);
  col = mix(col, capCol, mC);

  // ---------- vidrio con líquido y cera ----------
  float hv = hwV(p.y);
  float mV = (1.0 - smoothstep(-px, px, abs(p.x) - hv)) * smoothstep(-0.30 - px, -0.30 + px, p.y) * (1.0 - smoothstep(0.34 - px, 0.34 + px, p.y));
  if (mV > 0.001) {
    float u = p.x / hv;
    float t = clamp((p.y + 0.30) / 0.64, 0.0, 1.0);
    // luz del foco: sube desde abajo y se pierde arriba
    float bulb = exp(-t * 3.1) * (1.0 - 0.55 * u * u);
    vec3 liquid = mix(uLiquid * uLiquid * 0.55, uLiquid * 1.25, bulb);
    liquid += uWax * uWax * 0.45 * exp(-t * 7.5);

    vec3 f = field(p, uTime);
    float T = 0.5;
    float g = length(f.yz) + 1e-4;
    float edge = clamp((f.x - T) / (g * px * 1.3), -1.0, 1.0) * 0.5 + 0.5;
    float depth = clamp((f.x - T) / 0.55, 0.0, 1.0);
    // brillo de cera que se filtra al líquido
    liquid += uWax * 0.22 * smoothstep(0.0, T, f.x) * (0.4 + bulb);

    float nz = pow(depth, 0.55);
    vec2 nxy = normalize(-f.yz) * sqrt(max(1.0 - nz * nz, 0.0));
    vec3 n = vec3(nxy, nz);
    vec3 bulbPos = vec3(0.0, -0.37, 0.28);
    vec3 Ld = normalize(bulbPos - vec3(p, 0.0));
    float diff = max(dot(n, Ld), 0.0);
    float glowY = exp(-t * 2.4);
    vec3 hot = mix(uWax, vec3(1.0, 0.72, 0.30), 0.42);
    vec3 wax = mix(uWax * uWax * 0.62, hot, pow(depth, 1.0)) * (0.40 + 0.70 * diff + 0.75 * glowY) * mix(1.1, 0.72, t);
    wax += hot * 0.30 * pow(depth, 2.0) * (0.35 + glowY);
    vec3 V = vec3(0.0, 0.0, 1.0);
    float s1 = pow(max(dot(n, normalize(Ld + V)), 0.0), 36.0);
    float s2 = pow(max(dot(n, normalize(normalize(vec3(-0.45, 0.65, 0.75)) + V)), 0.0), 70.0);
    wax += vec3(1.0, 0.92, 0.75) * (s1 * 0.40 + s2 * 0.70);
    wax += hot * pow(1.0 - nz, 3.0) * 0.35;

    vec3 inner = mix(liquid, wax, edge);

    // vidrio: borde grueso y oscuro, reflejos de ventana
    float au = abs(u);
    inner *= 1.0 - 0.58 * pow(au, 3.4);
    float fadeY = smoothstep(0.04, 0.2, t) * (1.0 - smoothstep(0.72, 0.97, t));
    float st1 = exp(-pow((u + 0.70) / 0.075, 2.0));
    float st2 = exp(-pow((u + 0.52) / 0.03, 2.0));
    float st3 = exp(-pow((u - 0.80) / 0.04, 2.0));
    inner += vec3(1.0, 0.95, 0.9) * (st1 * 0.20 + st2 * 0.11 + st3 * 0.12) * fadeY;
    inner += vec3(1.0, 0.8, 0.6) * smoothstep(0.90, 0.985, au) * (1.0 - smoothstep(0.985, 1.0, au)) * 0.22;
    // reflejo curvo arriba
    inner += vec3(1.0, 0.95, 0.9) * 0.07 * smoothstep(0.9, 0.99, t) * (1.0 - au);
    col = mix(col, inner, mV);
  }
  // pequeño destello donde la base abraza el vidrio
  col += vec3(1.0, 0.7, 0.4) * 0.10 * exp(-pow((p.y + 0.30) / 0.012, 2.0)) * (1.0 - smoothstep(0.0, 1.0, abs(p.x) / 0.22)) * mV;

  col = col / (1.0 + max(col - 0.8, 0.0));
  col = pow(col, vec3(0.95));
  // viñeta suave
  col *= 1.0 - 0.35 * dot(p * vec2(0.9, 1.1), p * vec2(0.9, 1.1));
  col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 160.0;
  gl_FragColor = vec4(col, 1.0);
}`;function Q({waxColor:p="#FF6A1F",liquidColor:f="#8A1240",speed:y=1,glow:L=1,interactive:C=!0,children:F,className:H="",style:O}){const S=x.useRef(null),c=x.useRef({waxColor:p,liquidColor:f,speed:y,glow:L,interactive:C});c.current={waxColor:p,liquidColor:f,speed:y,glow:L,interactive:C};const R=x.useRef(()=>{});return x.useEffect(()=>{const o=S.current;if(!o)return;const T=window.matchMedia("(prefers-reduced-motion: reduce)").matches,l=document.createElement("canvas");l.className="furin-lava-lamp__canvas",l.setAttribute("aria-hidden","true"),o.insertBefore(l,o.firstChild);const e=l.getContext("webgl",{antialias:!1,alpha:!1});if(!e){l.remove();return}const _=(n,a)=>{const i=e.createShader(n);return e.shaderSource(i,a),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)||console.error("[lava-lamp] shader:",e.getShaderInfoLog(i)),i},r=e.createProgram();e.attachShader(r,_(e.VERTEX_SHADER,$)),e.attachShader(r,_(e.FRAGMENT_SHADER,J)),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)||console.error("[lava-lamp] link:",e.getProgramInfoLog(r)),e.useProgram(r);const P=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,P),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const W=e.getAttribLocation(r,"a");e.enableVertexAttribArray(W),e.vertexAttribPointer(W,2,e.FLOAT,!1,0,0);const m={res:e.getUniformLocation(r,"uRes"),time:e.getUniformLocation(r,"uTime"),glow:e.getUniformLocation(r,"uGlow"),wax:e.getUniformLocation(r,"uWax"),liquid:e.getUniformLocation(r,"uLiquid"),mouse:e.getUniformLocation(r,"uMouse")};let B=1,V=1,Y=T?14:3+Math.random()*4,q=0,s=0,d=!0,M="",A="",h=[1,.5,.2],v=[.5,.07,.25];const t={tx:0,ty:0,x:0,y:0,s:0,ts:0},j=()=>{const n=Math.min(window.devicePixelRatio||1,2);B=o.clientWidth||300,V=o.clientHeight||300,l.width=Math.max(2,Math.round(B*n)),l.height=Math.max(2,Math.round(V*n)),e.viewport(0,0,l.width,l.height),z()},z=()=>{M!==c.current.waxColor&&(M=c.current.waxColor,h=D(M)),A!==c.current.liquidColor&&(A=c.current.liquidColor,v=D(A)),e.uniform2f(m.res,l.width,l.height),e.uniform1f(m.time,Y),e.uniform1f(m.glow,c.current.glow),e.uniform3f(m.wax,h[0],h[1],h[2]),e.uniform3f(m.liquid,v[0],v[1],v[2]),e.uniform3f(m.mouse,t.x,t.y,t.s),e.drawArrays(e.TRIANGLE_STRIP,0,4)},I=n=>{s=0;const a=Math.min(.05,Math.max(.001,(n-q)/1e3));q=n,Y+=a*c.current.speed;const i=1-Math.exp(-a*7);t.x+=(t.tx-t.x)*i,t.y+=(t.ty-t.y)*i,t.s+=(t.ts-t.s)*(1-Math.exp(-a*4)),z(),d&&(s=requestAnimationFrame(I))},E=()=>{s||!d||T||(q=performance.now(),s=requestAnimationFrame(I))};R.current=()=>{z(),E()};const K=n=>{const a=Math.min(1,Math.max(0,(n+.3)/.64));return .205+(.07-.205)*Math.pow(a,.9)+.014*Math.sin(a*Math.PI)},w=n=>{if(!c.current.interactive)return;const a=o.getBoundingClientRect(),i=(n.clientX-a.left-a.width/2)/a.height,X=(a.height/2-(n.clientY-a.top))/a.height,k=Math.min(.29,Math.max(-.24,X)),N=K(k)-.05;t.tx=Math.min(N,Math.max(-N,i)),t.ty=k,t.ts===0&&(t.x=t.tx,t.y=t.ty),t.ts=1},b=()=>{t.ts=0};o.addEventListener("pointermove",w),o.addEventListener("pointerdown",w),o.addEventListener("pointerleave",b),o.addEventListener("pointercancel",b);const U=new IntersectionObserver(([n])=>{d=n.isIntersecting,d?E():s&&(cancelAnimationFrame(s),s=0)});U.observe(o);const G=new ResizeObserver(j);return G.observe(o),j(),E(),()=>{cancelAnimationFrame(s),U.disconnect(),G.disconnect(),o.removeEventListener("pointermove",w),o.removeEventListener("pointerdown",w),o.removeEventListener("pointerleave",b),o.removeEventListener("pointercancel",b),R.current=()=>{},e.deleteBuffer(P),e.deleteProgram(r),e.getExtension("WEBGL_lose_context")?.loseContext(),l.remove()}},[]),x.useEffect(()=>{R.current()},[p,f,y,L]),g.jsx("div",{ref:S,className:`furin-lava-lamp ${H}`,style:O,children:F?g.jsx("div",{className:"furin-lava-lamp__contenido",children:F}):null})}function ee(){return g.jsx("div",{className:"stage",children:g.jsx(Q,{})})}export{ee as default};
