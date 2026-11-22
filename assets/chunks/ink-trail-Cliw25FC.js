import{r as b,j as O}from"./client-CsvIHAk3.js";let E=null;function X(h){E??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),E.clearRect(0,0,1,1),E.fillStyle="#000",E.fillStyle=h,E.fillRect(0,0,1,1);const f=E.getImageData(0,0,1,1).data;return[f[0]/255,f[1]/255,f[2]/255]}const ve="attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }",pe=`precision highp float;
uniform sampler2D uD;
uniform vec2 uRes, uTexel;
uniform vec3 uInk, uSheen;
uniform float uAsp;

float h2(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h2(i), h2(i + vec2(1.0, 0.0)), f.x), mix(h2(i + vec2(0.0, 1.0)), h2(i + vec2(1.0, 1.0)), f.x), f.y);
}
float D(vec2 p){ return texture2D(uD, p).r; }

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 t = vec2(uv.x, 1.0 - uv.y);
  float d = D(t);
  vec2 q5 = uTexel * 5.0;
  float fresh = max(max(D(t + vec2(q5.x, 0.0)), D(t - vec2(q5.x, 0.0))), max(D(t + vec2(0.0, q5.y)), D(t - vec2(0.0, q5.y))));
  fresh = max(fresh, d);
  float old = 1.0 - smoothstep(0.5, 0.95, fresh);
  // al secarse, el borde se come con ruido y la tinta se vuelve agua: hebras translúcidas
  float n = noise(uv * vec2(uAsp, 1.0) * 26.0) * 0.6 + noise(uv * vec2(uAsp, 1.0) * 70.0) * 0.4 - 0.5;
  float thr = 0.42 + n * (0.07 + 0.12 * old);
  float sw = 0.035 + 0.09 * old;
  float cov = smoothstep(thr - sw, thr + sw, d);
  float body = mix(0.97, 0.30, old);
  // sombra de contacto sobre el papel
  vec2 off = vec2(1.5, 2.5) * uTexel;
  float sh = smoothstep(0.25, 0.7, D(t - off) ) * 0.14;
  if (cov < 0.004 && sh < 0.004) { gl_FragColor = vec4(0.0); return; }
  vec2 e = uTexel * 1.6;
  float gx = D(t + vec2(e.x, 0.0)) - D(t - vec2(e.x, 0.0));
  float gy = D(t + vec2(0.0, e.y)) - D(t - vec2(0.0, e.y));
  vec3 nrm = normalize(vec3(-gx * 2.4, gy * 2.4, 1.0));
  vec3 L = normalize(vec3(-0.5, 0.6, 0.65));
  float wet = smoothstep(0.55, 1.0, d);
  float spec = pow(max(dot(nrm, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 38.0) * (0.35 + 0.65 * wet);
  float rim = 1.0 - smoothstep(0.0, 0.16, d - thr);
  vec3 col = uInk * (0.92 + 0.25 * (1.0 - wet));
  col += uSheen * (spec * 0.75 + rim * 0.08 * wet);
  col += vec3(1.0) * pow(spec, 2.0) * 0.28;
  float al = cov * body;
  gl_FragColor = vec4(col * al, max(al, sh));
}`;function xe({color:h="#12162B",sheen:f="#9DB4FF",size:G=1,lifetime:q=1.9,autoplay:j=!1,children:Q,className:fe="",style:ue}){const Z=b.useRef(null),i=b.useRef({color:h,sheen:f,size:G,lifetime:q,autoplay:j});i.current={color:h,sheen:f,size:G,lifetime:q,autoplay:j};const W=b.useRef(()=>{});return b.useEffect(()=>{const a=Z.current;if(!a)return;const w=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=document.createElement("canvas");c.className="furin-ink-trail__canvas",c.setAttribute("aria-hidden","true"),a.appendChild(c);const e=c.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0});if(!e){c.remove();return}const ee=(t,r)=>{const o=e.createShader(t);return e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)||console.error("[ink-trail] shader:",e.getShaderInfoLog(o)),o},u=e.createProgram();e.attachShader(u,ee(e.VERTEX_SHADER,ve)),e.attachShader(u,ee(e.FRAGMENT_SHADER,pe)),e.linkProgram(u),e.getProgramParameter(u,e.LINK_STATUS)||console.error("[ink-trail] link:",e.getProgramInfoLog(u)),e.useProgram(u);const te=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,te),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const re=e.getAttribLocation(u,"a");e.enableVertexAttribArray(re),e.vertexAttribPointer(re,2,e.FLOAT,!1,0,0);const v=t=>e.getUniformLocation(u,t),p={d:v("uD"),res:v("uRes"),texel:v("uTexel"),ink:v("uInk"),sheen:v("uSheen"),asp:v("uAsp")},z=e.createTexture();e.bindTexture(e.TEXTURE_2D,z),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.uniform1i(p.d,0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);const D=document.createElement("canvas");D.width=D.height=64;{const t=D.getContext("2d"),r=t.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.45,"rgba(255,255,255,0.9)"),r.addColorStop(.8,"rgba(255,255,255,0.25)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,64,64)}const S=document.createElement("canvas"),m=S.getContext("2d"),l=[];let y=1,L=1,R=1,T=1,x=0,H=0,d=0,I=!0,C=X(h),F=X(f),Y=h,K=f;const n={x:0,y:0,t:0,has:!1,r:7,lastReal:-1e9};let ne=0,_=null;const oe=()=>{const t=Math.min(window.devicePixelRatio||1,2);y=a.clientWidth||300,L=a.clientHeight||300,c.width=Math.max(2,Math.round(y*t)),c.height=Math.max(2,Math.round(L*t)),e.viewport(0,0,c.width,c.height),R=Math.max(2,Math.ceil(y/2)),T=Math.max(2,Math.ceil(L/2)),S.width=R,S.height=T,V()},V=()=>{Y!==i.current.color&&(Y=i.current.color,C=X(Y)),K!==i.current.sheen&&(K=i.current.sheen,F=X(K)),m.setTransform(1,0,0,1,0,0),m.globalCompositeOperation="source-over",m.clearRect(0,0,R,T),m.fillStyle="#000",m.fillRect(0,0,R,T),m.globalCompositeOperation="lighter";for(const t of l){const r=(x-t.born)/t.life;if(r>=1)continue;const o=Math.pow(1-r,.9),s=t.r*(1+.5*r)*2.3;m.globalAlpha=Math.min(1,o*.46),m.drawImage(D,(t.x-s)/2,(t.y-s)/2,s,s)}m.globalAlpha=1,e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,z),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,S),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.uniform2f(p.res,c.width,c.height),e.uniform2f(p.texel,1/R,1/T),e.uniform3f(p.ink,C[0],C[1],C[2]),e.uniform3f(p.sheen,F[0],F[1],F[2]),e.uniform1f(p.asp,c.width/c.height),e.drawArrays(e.TRIANGLE_STRIP,0,4)},$=()=>w?Math.min(i.current.lifetime,.6):i.current.lifetime,J=(t,r,o)=>{if(!n.has){n.x=t,n.y=r,n.t=o,n.has=!0,l.push({x:t,y:r,r:Math.max(2.2,n.r)*i.current.size,born:x,life:$()});return}const s=t-n.x,g=r-n.y,A=Math.hypot(s,g);if(A<.5)return;const de=Math.max(1,o-n.t),se=A/de,he=9.5-Math.min(se*3,6),le=Math.max(1,Math.ceil(A/2.2));for(let M=1;M<=le;M++){const B=M/le;n.r+=(he-n.r)*.12;const N=1+(Math.random()-.5)*.08;l.push({x:n.x+s*B,y:n.y+g*B,r:Math.max(2,n.r)*i.current.size*N,born:x,life:$()})}if(se>1.1&&Math.random()<.55){const M=-g/A,B=s/A,N=(Math.random()-.5)*34;l.push({x:t+M*N,y:r+B*N,r:(1.2+Math.random()*2.2)*i.current.size,born:x,life:$()*.7})}n.x=t,n.y=r,n.t=o,l.length>900&&l.splice(0,l.length-900)},me=t=>{ne+=t;const r=ne*1.25,o=y*(.5+.36*Math.sin(r*.9+.6*Math.sin(r*.37))),s=L*(.5+.3*Math.sin(r*1.35+1.1)),g=performance.now();_||(n.has=!1),J(o,s,g),_={x:o,y:s}},ae=t=>{d=0;const r=Math.min(.05,Math.max(.001,(t-H)/1e3));H=t,x+=r;const o=performance.now()-n.lastReal>1800;for(i.current.autoplay&&!w&&o?me(r):_=null;l.length&&x-l[0].born>=l[0].life;)l.shift();V(),(l.length>0||i.current.autoplay&&!w)&&I&&(d=requestAnimationFrame(ae))},P=()=>{d||!I||(H=performance.now(),d=requestAnimationFrame(ae))};W.current=()=>{V(),P()};const U=t=>{const r=a.getBoundingClientRect();n.lastReal=performance.now(),_&&(_=null,n.has=!1),J(t.clientX-r.left,t.clientY-r.top,t.timeStamp),P()},k=()=>{n.has=!1,n.r=7};a.addEventListener("pointermove",U),a.addEventListener("pointerdown",U),a.addEventListener("pointerleave",k),a.addEventListener("pointercancel",k);const ce=new IntersectionObserver(([t])=>{I=t.isIntersecting,I?P():d&&(cancelAnimationFrame(d),d=0)});ce.observe(a);const ie=new ResizeObserver(oe);return ie.observe(a),oe(),i.current.autoplay&&!w&&P(),()=>{cancelAnimationFrame(d),ce.disconnect(),ie.disconnect(),a.removeEventListener("pointermove",U),a.removeEventListener("pointerdown",U),a.removeEventListener("pointerleave",k),a.removeEventListener("pointercancel",k),W.current=()=>{},e.deleteTexture(z),e.deleteBuffer(te),e.deleteProgram(u),e.getExtension("WEBGL_lose_context")?.loseContext(),c.remove()}},[]),b.useEffect(()=>{W.current()},[h,f,G,q,j]),O.jsx("div",{ref:Z,className:`furin-ink-trail ${fe}`,style:ue,children:Q?O.jsx("div",{className:"furin-ink-trail__contenido",children:Q}):null})}function Ee(){return O.jsx("div",{className:"stage",children:O.jsx(xe,{})})}export{Ee as default};
