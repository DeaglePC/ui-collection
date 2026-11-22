import{r as z,j as G}from"./client-CsvIHAk3.js";const he=`#version 300 es
in vec4 a_p;   // radio, ángulo inicial, altura, tamaño
in vec4 a_c;   // mezcla de color, fase de parpadeo, tipo (0 galaxia, 1 estrella de fondo), brillo
uniform float u_t;
uniform float u_spin;
uniform float u_radius;     // radio de la galaxia en píxeles reales
uniform float u_dpr;
uniform vec2 u_res;
uniform vec2 u_rot;         // cabeceo y giro
uniform vec3 u_core;
uniform vec3 u_arm;
out vec3 v_col;
out float v_a;
void main() {
  if (a_c.z > 0.5) {
    vec2 pos = a_p.xy + vec2(-u_rot.y, u_rot.x - 0.9) * 0.012 * a_p.w;
    gl_Position = vec4(pos, 0.0, 1.0);
    gl_PointSize = max(1.0, a_p.w * u_dpr);
    v_col = vec3(0.78, 0.84, 1.0);
    v_a = a_c.w * (0.65 + 0.35 * sin(u_t * 1.1 + a_c.y * 6.2831));
    return;
  }
  float r = a_p.x;
  float th = a_p.y + u_spin;
  vec3 P = vec3(r * cos(th), a_p.z, r * sin(th));
  float cy = cos(u_rot.y), sy = sin(u_rot.y);
  P = vec3(cy * P.x + sy * P.z, P.y, -sy * P.x + cy * P.z);
  float cp = cos(u_rot.x), sp = sin(u_rot.x);
  P = vec3(P.x, cp * P.y - sp * P.z, sp * P.y + cp * P.z);
  float D = 3.2;
  float k = D / (D - P.z);
  vec2 px = P.xy * k * u_radius;
  gl_Position = vec4(px / (0.5 * u_res), 0.0, 1.0);
  gl_PointSize = max(1.0, a_p.w * k * u_dpr * 1.2);
  float mixc = smoothstep(0.0, 0.62, r + (a_c.x - 0.5) * 0.4);
  v_col = mix(u_core, u_arm, mixc);
  // Unas pocas estrellas rosadas dan polvo y calor a los brazos.
  v_col = mix(v_col, vec3(1.0, 0.62, 0.72), step(0.93, a_c.x) * 0.45 * mixc);
  float tw = 0.82 + 0.18 * sin(u_t * 1.7 + a_c.y * 6.2831);
  v_a = a_c.w * tw * clamp(k, 0.6, 1.5) * (1.0 - 0.5 * smoothstep(0.7, 1.0, r));
}`,pe=`#version 300 es
precision highp float;
in vec3 v_col;
in float v_a;
out vec4 o;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = exp(-d * d * 3.6) * (1.0 - smoothstep(0.82, 1.0, d));
  o = vec4(v_col * a * v_a, 1.0);
}`,xe=`#version 300 es
precision highp float;
uniform vec2 u_res;
uniform float u_radius;
uniform float u_sinp;
uniform vec3 u_core;
uniform vec3 u_arm;
uniform float u_t;
out vec4 o;
void main() {
  vec2 q = (gl_FragCoord.xy - 0.5 * u_res) / u_radius;
  float tight = exp(-dot(q, q) * 55.0);
  float bulge = exp(-dot(q, q) * 9.0);
  vec2 qd = vec2(q.x, q.y / max(u_sinp, 0.3));
  float disc = exp(-dot(qd, qd) * 2.4);
  vec3 c = u_core * (0.6 * tight + 0.26 * bulge) + mix(u_core, u_arm, 0.7) * 0.07 * disc;
  c *= 0.94 + 0.06 * sin(u_t * 0.6);
  o = vec4(c, 1.0);
}`;let P=null;const j=new Map;function le(t,l){const m=j.get(t);if(m)return m;try{P??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),P.clearRect(0,0,1,1),P.fillStyle="#010203",P.fillStyle=t,P.fillRect(0,0,1,1);const v=P.getImageData(0,0,1,1).data,f=[v[0]/255,v[1]/255,v[2]/255];return j.size>64&&j.clear(),j.set(t,f),f}catch{return l}}function fe(t,l,m){const v=(w,E)=>{const x=t.createShader(w);return t.shaderSource(x,E),t.compileShader(x),t.getShaderParameter(x,t.COMPILE_STATUS)?x:(console.error(t.getShaderInfoLog(x)),null)},f=v(t.VERTEX_SHADER,l),p=v(t.FRAGMENT_SHADER,m);if(!f||!p)return null;const d=t.createProgram();return t.attachShader(d,f),t.attachShader(d,p),t.linkProgram(d),t.deleteShader(f),t.deleteShader(p),t.getProgramParameter(d,t.LINK_STATUS)?d:(console.error(t.getProgramInfoLog(d)),null)}const J=()=>{let t=0;for(let l=0;l<4;l++)t+=Math.random();return(t-2)*1.7},ge=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function ye({children:t,coreColor:l="#ffd9a6",armColor:m="#7f9eea",background:v="#04050a",density:f=1,arms:p=3,speed:d=1,tilt:w=50,reactivity:E=1,className:x="",style:de}){const Q=z.useRef(null),A=z.useRef({coreColor:l,armColor:m,density:f,arms:p,speed:d,tilt:w,reactivity:E});A.current={coreColor:l,armColor:m,density:f,arms:p,speed:d,tilt:w,reactivity:E};const Y=z.useRef(null),_e=`${f}|${p}`;z.useEffect(()=>{const i=Q.current;if(!i)return;const a=document.createElement("canvas");a.className="furin-galaxy__lienzo",a.setAttribute("aria-hidden","true");const e=a.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!e)return;i.insertBefore(a,i.firstChild);const I=matchMedia("(prefers-reduced-motion: reduce)").matches;let g=null,F=null,_={},h={},L=null,B=null,S=null,Z=null,ee=0,q=!0,$=!1,y=0,C=0,D=0,U=1,V=0,k=0,te=I?1.3:.4;const s={x:0,y:0,tx:0,ty:0};let re="";const oe=()=>{const r=A.current,o=Math.round(34e3*Math.max(.2,Math.min(2.5,r.density))),n=650,b=new Float32Array((o+n)*4),R=new Float32Array((o+n)*4),T=Math.max(2,Math.min(6,Math.round(r.arms)));for(let c=0;c<o;c++){const u=Math.pow(Math.random(),1.7),O=Math.exp(-u*7);let M,K;Math.random()<O*.9?(M=Math.random()*6.2832,K=J()*.075*(.4+O)):(M=Math.floor(Math.random()*T)*6.2832/T+u*4.6+J()*(.1+.34*u),K=J()*.035*(1-.6*u));const ue=Math.random(),ve=ue<.025?3+Math.random()*2.2:.9+Math.random()*1.6;b.set([u,M,K,ve],c*4),R.set([Math.random(),Math.random(),0,(ue<.025?.5:.22)*(.55+.7*Math.random())],c*4)}for(let c=0;c<n;c++){const u=o+c;b.set([Math.random()*2-1,Math.random()*2-1,0,.8+Math.random()*1.1],u*4),R.set([0,Math.random(),1,.12+Math.random()*.55],u*4)}ee=o+n,e.bindVertexArray(L),e.bindBuffer(e.ARRAY_BUFFER,B),e.bufferData(e.ARRAY_BUFFER,b,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,S),e.bufferData(e.ARRAY_BUFFER,R,e.STATIC_DRAW),re=`${r.density}|${r.arms}`},ae=()=>{if(g=fe(e,he,pe),F=fe(e,ge,xe),!g||!F)return;for(const n of["u_t","u_spin","u_radius","u_dpr","u_res","u_rot","u_core","u_arm"])_[n]=e.getUniformLocation(g,n);for(const n of["u_res","u_radius","u_sinp","u_core","u_arm","u_t"])h[n]=e.getUniformLocation(F,n);L=e.createVertexArray(),B=e.createBuffer(),S=e.createBuffer(),Z=e.createVertexArray(),e.bindVertexArray(L);const r=e.getAttribLocation(g,"a_p"),o=e.getAttribLocation(g,"a_c");e.bindBuffer(e.ARRAY_BUFFER,B),e.enableVertexAttribArray(r),e.vertexAttribPointer(r,4,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,S),e.enableVertexAttribArray(o),e.vertexAttribPointer(o,4,e.FLOAT,!1,0,0),oe()},W=()=>{if(!g||!F||e.isContextLost()||!C)return;const r=A.current,[o,n,b]=le(r.coreColor,[1,.85,.65]),[R,T,c]=le(r.armColor,[.5,.62,.92]),u=r.tilt*Math.PI/180+s.y*.45*r.reactivity,O=s.x*.55*r.reactivity+Math.sin(V*.13)*.05,M=.5*(D*.78+C*.22)*1.08;e.viewport(0,0,a.width,a.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE),e.useProgram(F),e.uniform2f(h.u_res,a.width,a.height),e.uniform1f(h.u_radius,M),e.uniform1f(h.u_sinp,Math.abs(Math.sin(u))),e.uniform3f(h.u_core,o,n,b),e.uniform3f(h.u_arm,R,T,c),e.uniform1f(h.u_t,V),e.bindVertexArray(Z),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(g),e.uniform1f(_.u_t,V),e.uniform1f(_.u_spin,te),e.uniform1f(_.u_radius,M),e.uniform1f(_.u_dpr,U),e.uniform2f(_.u_res,a.width,a.height),e.uniform2f(_.u_rot,u,O),e.uniform3f(_.u_core,o,n,b),e.uniform3f(_.u_arm,R,T,c),e.bindVertexArray(L),e.drawArrays(e.POINTS,0,ee)},ne=r=>{if(y=0,$||!q)return;const o=Math.min(.05,k?(r-k)/1e3:.016);k=r,V+=o,te+=o*.07*A.current.speed;const n=1-Math.exp(-o*3);s.x+=(s.tx-s.x)*n,s.y+=(s.ty-s.y)*n,W(),y=requestAnimationFrame(ne)},H=()=>{I||!y&&q&&!$&&(k=0,y=requestAnimationFrame(ne))};Y.current=()=>{re!==`${A.current.density}|${A.current.arms}`&&L&&oe(),I?W():H()};const X=()=>{U=Math.min(window.devicePixelRatio||1,1.75);const r=i.getBoundingClientRect();C=Math.max(1,Math.round(r.width*U)),D=Math.max(1,Math.round(r.height*U)),(a.width!==C||a.height!==D)&&(a.width=C,a.height=D),W(),H()},ie=new ResizeObserver(X);ie.observe(i);const se=new IntersectionObserver(([r])=>{q=r.isIntersecting,q&&H()},{rootMargin:"80px"});se.observe(i);const N=r=>{const o=i.getBoundingClientRect();s.tx=(r.clientX-o.left)/o.width*2-1,s.ty=(r.clientY-o.top)/o.height*2-1},ce=()=>{s.tx=0,s.ty=0};return I||(i.addEventListener("pointermove",N,{passive:!0}),i.addEventListener("pointerdown",N,{passive:!0}),i.addEventListener("pointerleave",ce)),a.addEventListener("webglcontextlost",r=>{r.preventDefault(),cancelAnimationFrame(y),y=0}),a.addEventListener("webglcontextrestored",()=>{_={},h={},ae(),X()}),ae(),X(),()=>{$=!0,Y.current=null,cancelAnimationFrame(y),ie.disconnect(),se.disconnect(),i.removeEventListener("pointermove",N),i.removeEventListener("pointerdown",N),i.removeEventListener("pointerleave",ce),B&&e.deleteBuffer(B),S&&e.deleteBuffer(S),e.getExtension("WEBGL_lose_context")?.loseContext(),a.remove()}},[]),z.useEffect(()=>{Y.current?.()},[_e,l,m,d,w,E]);const me={"--furin-galaxy-bg":v};return G.jsxs("div",{ref:Q,className:`furin-galaxy ${x}`,style:{...me,...de},children:[G.jsx("span",{className:"furin-galaxy__vineta","aria-hidden":"true"}),t!=null?G.jsx("div",{className:"furin-galaxy__contenido",children:t}):null]})}function Re(){return G.jsx("div",{className:"stage",children:G.jsx(ye,{})})}export{Re as default};
