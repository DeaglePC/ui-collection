import{r as D,j as F}from"./client-CsvIHAk3.js";const Ae=1.5,be=2.6,ge=520,he=80,H=8,De=48,we=`
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,Ee=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
`,Me=`${Ee}
#define MAX_DROPS ${H}
uniform sampler2D uState;
uniform vec2 uTexel;
uniform float uDamping;
uniform vec4 uDrops[MAX_DROPS]; // x, y (0 a 1), radio en celdas, fuerza
varying vec2 vUv;

void main() {
  vec4 here = texture2D(uState, vUv);
  float left = texture2D(uState, vUv - vec2(uTexel.x, 0.0)).r;
  float right = texture2D(uState, vUv + vec2(uTexel.x, 0.0)).r;
  float down = texture2D(uState, vUv - vec2(0.0, uTexel.y)).r;
  float up = texture2D(uState, vUv + vec2(0.0, uTexel.y)).r;

  // Ecuación de onda: el punto se acelera hacia el promedio de sus vecinos.
  float average = (left + right + up + down) * 0.25;
  float velocity = here.g + (average - here.r) * 1.8;

  // En los bordes el agua amortigua más: así las ondas no rebotan contra el marco.
  float edge = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
  velocity *= uDamping * mix(0.9, 1.0, smoothstep(0.0, 0.04, edge));
  // Un poco de difusión apaga las ondas más finas, que en una rejilla tan gruesa solo se verían como ruido.
  float height = mix(here.r + velocity, average, 0.04);

  // Gotas y toques del cursor: una joroba suave (coseno) alrededor de su centro.
  for (int i = 0; i < MAX_DROPS; i++) {
    vec4 drop = uDrops[i];
    if (drop.w != 0.0) {
      float cells = length((vUv - drop.xy) / uTexel);
      float falloff = max(0.0, 1.0 - cells / drop.z);
      height += drop.w * (0.5 - 0.5 * cos(falloff * 3.14159265));
    }
  }

  gl_FragColor = vec4(height, velocity, (right - left) * 0.5, (up - down) * 0.5);
}`,Le=`${Ee}
uniform sampler2D uState;
uniform vec2 uSimSize;
uniform vec3 uWater;
uniform vec3 uLight;
uniform float uGridCell;   // separación de la cuadrícula en píxeles del canvas; 0 = sin cuadrícula
uniform float uPixelRatio;
varying vec2 vUv;

// La simulación es de baja resolución: se interpola a mano (las texturas float no siempre filtran).
vec4 stateAt(vec2 uv) {
  vec2 point = uv * uSimSize - 0.5;
  vec2 mixAmount = fract(point);
  vec2 base = (floor(point) + 0.5) / uSimSize;
  vec2 dx = vec2(1.0 / uSimSize.x, 0.0);
  vec2 dy = vec2(0.0, 1.0 / uSimSize.y);
  return mix(
    mix(texture2D(uState, base), texture2D(uState, base + dx), mixAmount.x),
    mix(texture2D(uState, base + dy), texture2D(uState, base + dx + dy), mixAmount.x),
    mixAmount.y
  );
}

void main() {
  vec2 uv = vUv;
  vec2 slope = stateAt(uv).zw * 4.5;
  vec3 normal = normalize(vec3(-slope, 1.0));

  // Agua: algo más clara arriba (cielo) que abajo (fondo).
  vec3 color = uWater * mix(0.62, 1.14, uv.y);

  // Luz desde arriba a la izquierda: las pendientes que miran a ella se aclaran y las otras se oscurecen.
  vec3 lightDirection = normalize(vec3(-0.45, 0.6, 0.66));
  color *= 1.0 + (dot(normal, lightDirection) - lightDirection.z) * 3.6;

  // Reflejo especular (destellos en las crestas) y un brillo suave en las pendientes fuertes.
  vec3 halfway = normalize(lightDirection + vec3(0.0, 0.0, 1.0));
  float glint = pow(max(dot(normal, halfway), 0.0), 70.0);
  color += uLight * glint * 1.5;
  color += uLight * (1.0 - normal.z) * 1.4;

  // Cuadrícula en el fondo: se ve a través del agua, así que las ondas la desplazan (refracción).
  if (uGridCell > 0.0) {
    vec2 seen = gl_FragCoord.xy + slope * 90.0 * uPixelRatio;
    vec2 distanceToLine = abs(fract(seen / uGridCell - 0.5) - 0.5) * uGridCell;
    float width = 1.1 * uPixelRatio;
    float line = 1.0 - smoothstep(width - 0.7, width + 0.7, min(distanceToLine.x, distanceToLine.y));
    color = mix(color, mix(uLight, uWater, 0.35), line * 0.3);
  }

  // Viñeta suave y un ruido mínimo para que los degradados no se vean en escalones.
  vec2 centered = uv - 0.5;
  color *= 1.0 - 0.38 * dot(centered, centered);
  float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  color += (dither - 0.5) / 255.0;

  gl_FragColor = vec4(color, 1.0);
}`;let O=null;function ve(e){if(O??=document.createElement("canvas").getContext("2d"),!O)return[0,0,0];O.fillStyle="#000000",O.fillStyle=e;const o=O.fillStyle;if(o.startsWith("#")){const r=parseInt(o.slice(1),16);return[(r>>16)/255,(r>>8&255)/255,(r&255)/255]}const[t,a,n]=o.match(/[\d.]+/g).map(Number);return[t/255,a/255,n/255]}const J=(e,o,t)=>Math.min(t,Math.max(o,e)),X=(e,o)=>e+Math.random()*(o-e),Z=e=>1-(6e-4+J(e,0,1)*.02);function pe(e,o,t){const a=e.createShader(o);return a?(e.shaderSource(a,t),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS)?a:(e.deleteShader(a),null)):null}function xe(e,o,t){const a=pe(e,e.VERTEX_SHADER,we),n=pe(e,e.FRAGMENT_SHADER,o),r=e.createProgram();if(!a||!n||!r||(e.attachShader(r,a),e.attachShader(r,n),e.bindAttribLocation(r,0,"aPos"),e.linkProgram(r),e.deleteShader(a),e.deleteShader(n),!e.getProgramParameter(r,e.LINK_STATUS)))return null;const x=Object.fromEntries(t.map(d=>[d,e.getUniformLocation(r,d)]));return{handle:r,uniforms:x}}function ee(e,o,t,a){const n=e.createTexture(),r=e.createFramebuffer();return!n||!r?null:(e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,t,0,e.RGBA,a,null),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE?(e.deleteTexture(n),e.deleteFramebuffer(r),null):(e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),{texture:n,framebuffer:r}))}function te(e,o){e.deleteTexture(o.texture),e.deleteFramebuffer(o.framebuffer)}function Fe(e){const o=e.getExtension("OES_texture_half_float");e.getExtension("EXT_color_buffer_half_float");const t=e.getExtension("OES_texture_float");e.getExtension("WEBGL_color_buffer_float");const a=[o?o.HALF_FLOAT_OES:null,t?e.FLOAT:null];for(const n of a){if(n===null)continue;const r=ee(e,4,4,n);if(r)return te(e,r),n}return null}function ye(e){const o={alpha:!1,antialias:!1,depth:!1,stencil:!1},t=e.getContext("webgl",o)??e.getContext("experimental-webgl",o);if(!t)return null;const a=Fe(t);if(a===null)return null;let n=null,r=null,x=null,d=[],T=0,s={width:0,height:0,pixelRatio:1,simWidth:0,simHeight:0};const w=new Float32Array(H*4),y=()=>{d.forEach(p=>te(t,p));const c=ee(t,s.simWidth,s.simHeight,a),l=ee(t,s.simWidth,s.simHeight,a);d=c&&l?[c,l]:[],T=0},z=()=>(n=xe(t,Me,["uState","uTexel","uDamping","uDrops[0]"]),r=xe(t,Le,["uState","uSimSize","uWater","uLight","uGridCell","uPixelRatio"]),!n||!r?!1:(x=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,x),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),!0));let _=z();if(!_)return null;const h=c=>{c.preventDefault(),_=!1},M=()=>{_=z(),y()};return e.addEventListener("webglcontextlost",h),e.addEventListener("webglcontextrestored",M),{resize(c,l,p,b,R){e.width=c,e.height=l;const E=b!==s.simWidth||R!==s.simHeight;s={width:c,height:l,pixelRatio:p,simWidth:b,simHeight:R},(E||d.length===0)&&y()},step(c,l){if(!(!_||t.isContextLost()||!n||d.length===0)){w.fill(0);for(let p=0;p<Math.min(c.length,H*4);p++)w[p]=c[p];t.bindFramebuffer(t.FRAMEBUFFER,d[1-T].framebuffer),t.viewport(0,0,s.simWidth,s.simHeight),t.useProgram(n.handle),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,d[T].texture),t.uniform1i(n.uniforms.uState,0),t.uniform2f(n.uniforms.uTexel,1/s.simWidth,1/s.simHeight),t.uniform1f(n.uniforms.uDamping,l),t.uniform4fv(n.uniforms["uDrops[0]"],w),t.drawArrays(t.TRIANGLES,0,3),T=1-T}},draw(c){!_||t.isContextLost()||!r||d.length===0||(t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,s.width,s.height),t.useProgram(r.handle),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,d[T].texture),t.uniform1i(r.uniforms.uState,0),t.uniform2f(r.uniforms.uSimSize,s.simWidth,s.simHeight),t.uniform3fv(r.uniforms.uWater,c.water),t.uniform3fv(r.uniforms.uLight,c.light),t.uniform1f(r.uniforms.uGridCell,c.gridSize*s.pixelRatio),t.uniform1f(r.uniforms.uPixelRatio,s.pixelRatio),t.drawArrays(t.TRIANGLES,0,3))},dispose(){e.removeEventListener("webglcontextlost",h),e.removeEventListener("webglcontextrestored",M),d.forEach(c=>te(t,c)),n&&t.deleteProgram(n.handle),r&&t.deleteProgram(r.handle),x&&t.deleteBuffer(x),t.getExtension("WEBGL_lose_context")?.loseContext()}}}function Pe({color:e="#1B2A8C",lightColor:o="#C9DAFF",viscosity:t=.3,dropRate:a=.8,cursorForce:n=1,grid:r=!0,gridSize:x=44,className:d="",style:T,children:s}){const w=D.useRef(null),y=D.useRef(null),[z,_]=D.useState("pending"),h=D.useRef({water:[0,0,0],light:[1,1,1],damping:Z(t),dropRate:a,cursorForce:n,gridSize:r?x:0}),M=D.useRef(()=>{});D.useEffect(()=>{h.current={water:ve(e),light:ve(o),damping:Z(t),dropRate:a,cursorForce:n,gridSize:r?x:0},M.current()},[e,o,t,a,n,r,x]),D.useEffect(()=>{const l=w.current,p=y.current;if(!l||!p)return;const b=document.createElement("canvas");b.className="furin-ripple-pond__canvas";const R=ye(b);if(!R){_("static");return}p.appendChild(b),_("webgl");const E=l.parentElement??l,S=window.matchMedia("(prefers-reduced-motion: reduce)"),j=1/he;let I=0,P=0,q=0,U=0,L=0,k=!0,A=.4,N=0,re=1,ne=1;const C=[],m={x:0,y:0,time:0,active:!1},Re=()=>Math.log(.01)/Math.log(h.current.damping)/he,V=(u,i,f,v)=>{C.length>=De*4&&C.splice(0,4),C.push(u,i,f,v),N=I+Re()},Te=()=>{V(X(.1,.9),X(.12,.88),X(4,8),X(.5,.9)*(Math.random()<.25?1.4:1))},B=()=>R.draw(h.current),oe=()=>{const u=Math.min(window.devicePixelRatio||1,Ae),i=Math.max(1,l.clientWidth),f=Math.max(1,l.clientHeight),v=Math.max(be,Math.max(i,f)/ge);re=Math.max(16,Math.round(i/v)),ne=Math.max(16,Math.round(f/v)),R.resize(Math.round(i*u),Math.round(f*u),u,re,ne),S.matches?Y():B()},Y=()=>{const u=[[.3,.56,8,-.9],[.68,.4,7,-.8],[.5,.78,5,-.6]];for(let i=0;i<70;i++){const f=i===0?u.flat():i===24?[.2,.3,5,-.6]:[];R.step(f,Z(.25))}B()},ie=u=>{U=requestAnimationFrame(ie);const i=J((u-q)/1e3,0,.1);q=u,I+=i,P+=i;const{dropRate:f}=h.current;f>0&&(A-=i,A<=0&&(Te(),A=X(.5,1.5)/f));let v=0;for(;P>=j&&v<3;)R.step(C.splice(0,H*4),h.current.damping),P-=j,v++;P>j&&(P=0),v>0&&B(),I>N&&C.length===0&&(G(),f>0&&(L=window.setTimeout(_e,Math.max(0,A)*1e3)))},_e=()=>{L=0,A=0,g()},g=()=>{U||!k||S.matches||(window.clearTimeout(L),L=0,q=performance.now(),U=requestAnimationFrame(ie))},G=()=>{cancelAnimationFrame(U),U=0,window.clearTimeout(L),L=0},ae=u=>{if(S.matches)return;const i=l.getBoundingClientRect(),f=(u.clientX-i.left)/i.width,v=1-(u.clientY-i.top)/i.height,$=performance.now();if(m.active&&$-m.time<250){const K=Math.hypot((f-m.x)*i.width,(v-m.y)*i.height),Se=K/Math.max(($-m.time)/1e3,.008),fe=J(Se/1500,.08,1)*h.current.cursorForce*.2,de=Math.min(Math.ceil(K/9),6);if(K>.5&&fe>0)for(let Q=1;Q<=de;Q++){const me=Q/de;V(m.x+(f-m.x)*me,m.y+(v-m.y)*me,3.8,-fe)}}m.x=f,m.y=v,m.time=$,m.active=!0,g()},se=u=>{if(S.matches||h.current.cursorForce<=0)return;const i=l.getBoundingClientRect();V((u.clientX-i.left)/i.width,1-(u.clientY-i.top)/i.height,6,-.7*h.current.cursorForce),g()},W=()=>{m.active=!1},ce=new ResizeObserver(oe);ce.observe(l);const ue=new IntersectionObserver(([u])=>{k=u.isIntersecting,k?g():G()});ue.observe(l);const le=()=>{S.matches?(G(),Y()):g()};return S.addEventListener("change",le),E.addEventListener("pointermove",ae),E.addEventListener("pointerdown",se),E.addEventListener("pointerleave",W),E.addEventListener("pointercancel",W),M.current=()=>{if(S.matches)return Y();N=Math.max(N,I+.5),A=Math.min(A,h.current.dropRate>0?1.2/h.current.dropRate:A),B(),g()},oe(),g(),()=>{G(),ce.disconnect(),ue.disconnect(),S.removeEventListener("change",le),E.removeEventListener("pointermove",ae),E.removeEventListener("pointerdown",se),E.removeEventListener("pointerleave",W),E.removeEventListener("pointercancel",W),M.current=()=>{},R.dispose(),b.remove()}},[]);const c={"--furin-ripple-pond-water":e,"--furin-ripple-pond-light":o};return F.jsxs("div",{ref:w,className:`furin-ripple-pond ${d}`.trim(),style:{...c,...T},children:[z!=="webgl"&&F.jsx("div",{className:"furin-ripple-pond__fallback"}),F.jsx("div",{ref:y,className:"furin-ripple-pond__host"}),s!==void 0&&F.jsx("div",{className:"furin-ripple-pond__content",children:s})]})}function Ce(){return F.jsx("div",{className:"stage",children:F.jsx(Pe,{})})}export{Ce as default};
