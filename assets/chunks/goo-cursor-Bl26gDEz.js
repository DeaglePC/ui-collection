import{r as A,j as V}from"./client-CsvIHAk3.js";let C=null;function Le(y){C??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),C.clearRect(0,0,1,1),C.fillStyle="#000",C.fillStyle=y,C.fillRect(0,0,1,1);const M=C.getImageData(0,0,1,1).data;return[M[0]/255,M[1]/255,M[2]/255]}const u=10,be="attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }",_e=`precision highp float;
uniform vec2 uRes;
uniform float uDpr;
uniform vec3 uB[${u}];
uniform vec3 uColor;

vec3 ball(vec2 q, vec3 b){
  if (b.z < 0.2) return vec3(0.0);
  vec2 d = q - b.xy;
  float R = b.z * 2.45;
  float k = dot(d, d) / (R * R);
  if (k >= 1.0) return vec3(0.0);
  float m = 1.0 - k;
  return vec3(m * m * m, -6.0 * m * m * d / (R * R));
}

void main(){
  vec2 q = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;
  vec3 f = vec3(0.0);
  for (int i = 0; i < ${u}; i++) f += ball(q, uB[i]);
  float T = 0.46;
  float g = length(f.yz) + 1e-5;
  float edge = clamp((f.x - T) / (g / uDpr * 1.1), -1.0, 1.0) * 0.5 + 0.5;
  // aura suave alrededor de la gelatina
  float halo = smoothstep(0.0, T, f.x) * (1.0 - edge);
  if (edge < 0.003 && halo < 0.003) { gl_FragColor = vec4(0.0); return; }
  float depth = clamp((f.x - T) / 0.5, 0.0, 1.0);
  float nz = pow(depth, 0.5);
  vec2 nxy = normalize(-f.yz) * sqrt(max(1.0 - nz * nz, 0.0));
  vec3 n = vec3(nxy, nz);
  vec3 L = normalize(vec3(-0.45, -0.65, 0.62));
  vec3 V = vec3(0.0, 0.0, 1.0);
  float diff = max(dot(n, L), 0.0);
  // la luz atraviesa la gelatina y se junta del lado opuesto
  float trans = pow(max(dot(n.xy, -L.xy) / max(length(L.xy), 1e-3), 0.0), 2.0) * (1.0 - nz * 0.5);
  vec3 body = mix(uColor * 0.50, uColor * 1.12, pow(depth, 0.7));
  vec3 col = body * (0.55 + 0.55 * diff);
  col += uColor * 0.55 * trans * (0.5 + 0.5 * depth);
  col += mix(uColor, vec3(1.0), 0.65) * pow(1.0 - nz, 2.6) * 0.55;
  float s1 = pow(max(dot(n, normalize(L + V)), 0.0), 90.0);
  float s2 = pow(max(dot(n, normalize(L + V)), 0.0), 16.0);
  col += vec3(1.0) * (s1 * 1.25 + s2 * 0.18);
  // reflejo de la ventana: pequeño punto suave arriba a la izquierda
  col += vec3(1.0) * 0.5 * pow(max(dot(n, normalize(vec3(-0.6, -0.7, 0.55))), 0.0), 40.0);
  vec4 gel = vec4(col * edge, edge);
  vec4 aura = vec4(uColor * halo * 0.20, halo * 0.20);
  gl_FragColor = gel + aura * (1.0 - gel.a);
}`;function Ce({color:y="#4D7CFF",size:M=14,drops:H=8,hideCursor:ge=!0,global:f=!1,autoplay:Y=!1,children:xe,className:we="",style:Re}){const te=A.useRef(null),h=A.useRef({color:y,size:M,drops:H,autoplay:Y});h.current={color:y,size:M,drops:H,autoplay:Y};const $=A.useRef(()=>{});A.useEffect(()=>{const m=te.current;if(!m)return;const T=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=document.createElement("canvas");i.className=`furin-goo-cursor__canvas${f?" furin-goo-cursor__canvas--global":""}`,i.setAttribute("aria-hidden","true"),(f?document.body:m).appendChild(i);const e=i.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0});if(!e){i.remove();return}const re=(r,a)=>{const o=e.createShader(r);return e.shaderSource(o,a),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)||console.error("[goo-cursor] shader:",e.getShaderInfoLog(o)),o},l=e.createProgram();e.attachShader(l,re(e.VERTEX_SHADER,be)),e.attachShader(l,re(e.FRAGMENT_SHADER,_e)),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS)||console.error("[goo-cursor] link:",e.getProgramInfoLog(l)),e.useProgram(l);const oe=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,oe),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const ne=e.getAttribLocation(l,"a");e.enableVertexAttribArray(ne),e.vertexAttribPointer(ne,2,e.FLOAT,!1,0,0);const F={res:e.getUniformLocation(l,"uRes"),dpr:e.getUniformLocation(l,"uDpr"),b:e.getUniformLocation(l,"uB"),color:e.getUniformLocation(l,"uColor")};e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.SCISSOR_TEST);const z=[30,24,19,15.5,13,11,9.5,8.2,7,6],c=new Float32Array(u),s=new Float32Array(u),I=new Float32Array(u*3);let G=1,B=1,v=1,W=0,X=0,E=0,S=0,O=!1,P=!1,L=h.current.autoplay&&!T?1:0,U=1,D=0,N=1,ae=0,K=0,p=0,q=!0,J="",j=[.3,.5,1],ie=-1e9,k=!1;const ce=()=>{v=Math.min(window.devicePixelRatio||1,2);const r=f?{width:window.innerWidth,height:window.innerHeight}:m.getBoundingClientRect();G=Math.max(1,r.width),B=Math.max(1,r.height),i.width=Math.max(2,Math.round(G*v)),i.height=Math.max(2,Math.round(B*v)),e.viewport(0,0,i.width,i.height),k=!1},se=()=>{if(f)W=0,X=0;else{const r=m.getBoundingClientRect();W=r.left,X=r.top}},Ee=()=>{J!==h.current.color&&(J=h.current.color,j=Le(J)),e.disable(e.SCISSOR_TEST),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.SCISSOR_TEST);const r=h.current.size*L*Math.max(.2,U);if(r<.4)return;const a=Math.max(0,Math.min(u-1,Math.round(h.current.drops)));let o=1e9,d=1e9,w=-1e9,t=-1e9;for(let n=0;n<u;n++){let R=0;if(n===0)R=r;else if(n<=a){const Se=Math.hypot(c[n]-c[0],s[n]-s[0]),ee=Math.min(1,Math.max(0,(Se-r*.15)/(r*1.3)));R=r*(.92-n*.065)*ee*ee*(3-2*ee)}I[n*3]=c[n],I[n*3+1]=s[n],I[n*3+2]=R,R>.2&&(o=Math.min(o,c[n]-R*2.2),w=Math.max(w,c[n]+R*2.2),d=Math.min(d,s[n]-R*2.2),t=Math.max(t,s[n]+R*2.2))}if(w<o)return;const b=Math.max(0,Math.floor(o*v)),he=Math.max(0,Math.floor((B-t)*v)),ve=Math.min(i.width-b,Math.ceil((w-o)*v)+2),pe=Math.min(i.height-he,Math.ceil((t-d)*v)+2);ve<=0||pe<=0||(e.scissor(b,he,ve,pe),e.uniform2f(F.res,i.width,i.height),e.uniform1f(F.dpr,v),e.uniform3fv(F.b,I),e.uniform3f(F.color,j[0],j[1],j[2]),e.drawArrays(e.TRIANGLE_STRIP,0,4),k=!0)},le=r=>{p=0;const a=Math.min(.05,Math.max(.001,(r-K)/1e3));K=r,ae+=a;const o=h.current.autoplay&&!T&&(!O||r-ie>2500);if(o){const t=ae*1.15;if(E=G*(.5+.32*Math.sin(t)),S=B*(.5+.26*Math.sin(t*2+.6)),!P){for(let b=0;b<u;b++)c[b]=E,s[b]=S;P=!0}}const d=O||o;if(L+=((d?1:0)-L)*(1-Math.exp(-a*(d?14:9))),Math.abs(L-(d?1:0))<.004&&(L=d?1:0),D+=((N-U)*190-D*11)*a,U+=D*a,T)for(let t=0;t<u;t++)c[t]=E,s[t]=S;else{c[0]+=(E-c[0])*(1-Math.exp(-a*z[0])),s[0]+=(S-s[0])*(1-Math.exp(-a*z[0]));for(let t=1;t<u;t++)c[t]+=(c[t-1]-c[t])*(1-Math.exp(-a*z[t])),s[t]+=(s[t-1]-s[t])*(1-Math.exp(-a*z[t]))}Ee();let w=Math.abs(U-N)>.003||Math.abs(D)>.01||Math.abs(L-(d?1:0))>.004;for(let t=0;t<u&&!w;t++)(Math.abs(c[t]-E)>.15||Math.abs(s[t]-S)>.15)&&(w=!0);(w||o)&&q?p=requestAnimationFrame(le):!d&&k&&(e.disable(e.SCISSOR_TEST),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.SCISSOR_TEST),k=!1)},g=()=>{p||!q||(K=performance.now(),p=requestAnimationFrame(le))};$.current=g;const x=f?window:m,Q=r=>{const a=r;if(se(),E=a.clientX-W,S=a.clientY-X,ie=performance.now(),O=!0,!P||L<.05){for(let o=0;o<u;o++)c[o]=E,s[o]=S;P=!0}g()},_=()=>{O=!1,g()},ue=r=>{Q(r),N=1.38,g()},fe=()=>{N=1,g()};x.addEventListener("pointermove",Q),x.addEventListener("pointerdown",ue),x.addEventListener("pointerup",fe),x.addEventListener("pointercancel",_),f?document.documentElement.addEventListener("pointerleave",_):m.addEventListener("pointerleave",_);const de=new IntersectionObserver(([r])=>{q=r.isIntersecting,q?g():p&&(cancelAnimationFrame(p),p=0)});de.observe(m);const Z=()=>{ce(),g()},me=new ResizeObserver(Z);return f?window.addEventListener("resize",Z):me.observe(m),ce(),se(),h.current.autoplay&&!T&&g(),()=>{cancelAnimationFrame(p),de.disconnect(),me.disconnect(),window.removeEventListener("resize",Z),x.removeEventListener("pointermove",Q),x.removeEventListener("pointerdown",ue),x.removeEventListener("pointerup",fe),x.removeEventListener("pointercancel",_),f?document.documentElement.removeEventListener("pointerleave",_):m.removeEventListener("pointerleave",_),$.current=()=>{},e.deleteBuffer(oe),e.deleteProgram(l),e.getExtension("WEBGL_lose_context")?.loseContext(),i.remove()}},[f]),A.useEffect(()=>{$.current()},[y,M,H,Y]);const Me=`furin-goo-cursor${ge&&!f?" furin-goo-cursor--sin-cursor":""} ${we}`;return V.jsx("div",{ref:te,className:Me,style:Re,children:V.jsx("div",{className:"furin-goo-cursor__contenido",children:xe})})}function Ae(){return V.jsx("div",{className:"stage",children:V.jsx(Ce,{})})}export{Ae as default};
