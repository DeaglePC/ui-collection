import{r as q,j as k}from"./client-CsvIHAk3.js";const le=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,ce=`#version 300 es
precision highp float;
uniform sampler2D u_campo;   // rg: pendientes del grabado, b: cavidad, a: máscara del grabado
uniform vec2 u_res;
uniform vec2 u_card;
uniform float u_rc;
uniform float u_bw;
uniform mat3 u_Rt;           // mundo -> tarjeta
uniform vec3 u_col;
uniform float u_grain;
uniform float u_gloss;
uniform float u_int;
uniform float u_dpr;
out vec4 o;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float pn(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float wrapd(float a) { return a - 6.2831853 * floor((a + 3.1415926) / 6.2831853); }
float rbox(float az, float el, float caz, float cel, float hw, float hh, float soft) {
  float a = abs(wrapd(az - caz)), e = abs(el - cel);
  return smoothstep(hw + soft, hw - soft, a) * smoothstep(hh + soft, hh - soft, e);
}

// Estudio (y hacia arriba). "soft" ensancha los bordes de las cajas: para la cara cepillada, que difumina.
vec3 studio(vec3 d, float soft) {
  float el = asin(clamp(d.y, -1.0, 1.0));
  float az = atan(d.x, d.z);
  float up = clamp(el / 1.2, 0.0, 1.0);
  vec3 sky = mix(vec3(0.62, 0.68, 0.76), vec3(0.10, 0.14, 0.24), pow(up, 0.55));
  float dn = clamp(-el / 1.1, 0.0, 1.0);
  vec3 gnd = mix(vec3(0.26, 0.25, 0.25), vec3(0.015, 0.016, 0.02), pow(dn, 0.5));
  vec3 c = el >= 0.0 ? sky : gnd;
  c += vec3(1.0, 0.98, 0.94) * 1.4 * exp(-pow(el / (0.03 * soft + 0.01), 2.0));
  c += vec3(1.00, 0.96, 0.90) * 6.0 * rbox(az, el, -0.80, 0.52, 0.34, 0.22, 0.05 * soft);
  c += vec3(0.86, 0.93, 1.00) * 5.0 * rbox(az, el, 1.05, 0.30, 0.09, 0.46, 0.04 * soft);
  c += vec3(1.00) * 3.5 * rbox(az, el, 0.20, 1.10, 0.62, 0.10, 0.05 * soft);
  c += vec3(1.00, 0.90, 0.80) * 2.5 * rbox(az, el, 2.60, 0.10, 0.10, 0.50, 0.06 * soft);
  c += vec3(0.80, 0.88, 1.00) * 1.8 * rbox(az, el, -1.90, -0.38, 0.50, 0.07, 0.05 * soft);
  return c;
}

// Reflejo anisotrópico (Kajiya-Kay): brilla donde la mitad-vector es perpendicular a la hebra.
float aniso(vec3 T, vec3 L, vec3 V, float sh) {
  vec3 H = normalize(L + V);
  float th = dot(T, H);
  return pow(sqrt(max(1.0 - th * th, 0.0)), sh) * max(L.z, 0.0);
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, u_res.y - gl_FragCoord.y);
  vec2 pc = p - 0.5 * u_res;
  vec2 q = abs(pc) - (0.5 * u_card - u_rc);
  float sdf = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - u_rc;
  float cov = clamp(0.5 - sdf, 0.0, 1.0);
  if (cov <= 0.0) { o = vec4(0.0); return; }
  float din = -sdf;

  vec4 f = texture(u_campo, p / u_res);
  vec2 g = f.rg;
  float cav = f.b;
  float eng = f.a;

  vec3 pl = vec3(pc / (0.5 * u_card.x), 0.0);
  vec3 V = normalize(u_Rt * vec3(0.0, 0.0, 5.5) - pl);

  // Hebras del cepillado, horizontales. El grabado es más liso: allí casi no hay hebras.
  float st = 0.50 * pn(vec2(p.x / (150.0 * u_dpr), p.y / 1.3))
           + 0.30 * pn(vec2(p.x / (52.0 * u_dpr), p.y / 0.9 + 17.0))
           + 0.20 * pn(vec2(p.x / (420.0 * u_dpr), p.y / 3.2 + 5.0));
  float sg = (st - 0.5) * u_grain * (1.0 - 0.8 * eng);
  vec3 T = normalize(vec3(1.0, 0.0, sg * 0.55));
  vec3 N = normalize(vec3(-g.x, -g.y + sg * 0.35, 1.0));

  // Tres luces puntuales fijas en el mundo; cada una se vuelve a expresar en el marco de la tarjeta.
  vec3 lk = normalize(u_Rt * vec3(-1.7, -1.5, 1.7) - pl);
  vec3 l2 = normalize(u_Rt * vec3(2.0, -0.5, 1.5) - pl);
  vec3 l3 = normalize(u_Rt * vec3(0.5, 1.8, 1.3) - pl);
  float core = aniso(T, lk, V, mix(30.0, 300.0, u_gloss)) * 1.9;
  float halo = aniso(T, lk, V, mix(8.0, 38.0, u_gloss)) * 0.5;
  float s2 = aniso(T, l2, V, mix(10.0, 60.0, u_gloss)) * 0.55;
  float s3 = aniso(T, l3, V, mix(10.0, 60.0, u_gloss)) * 0.38;

  vec3 white = mix(u_col, vec3(1.0), 0.4);
  vec3 Rl = reflect(-V, N);
  vec3 Rw = transpose(u_Rt) * Rl;
  vec3 envF = studio(vec3(Rw.x, -Rw.y, Rw.z), 1.6);
  float ndv = max(dot(N, V), 0.0);
  vec3 Fr = u_col + (1.0 - u_col) * pow(1.0 - ndv, 5.0);

  vec3 face = u_col * 0.13 * (1.0 + sg * 1.6);
  face += white * (core + halo + s2 + s3);
  face += envF * Fr * 0.30;
  // Grabado: el fondo es más oscuro y las paredes que miran a la luz se encienden.
  float wall = clamp(length(g) * 0.4, 0.0, 1.0);
  float lit = dot(normalize(-g + vec2(1e-4)), lk.xy);
  face *= 1.0 - 0.30 * eng - 0.40 * cav;
  face *= 1.0 + wall * lit * 1.2;
  face += white * wall * max(lit, 0.0) * 0.55;

  // Bisel pulido de 45 grados: espejo que refleja el estudio con bordes nítidos.
  vec2 g2 = (q.x > 0.0 && q.y > 0.0) ? normalize(q) : (q.x > q.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0));
  vec3 Nc = normalize(vec3(g2 * sign(pc) * 0.85, 0.55));
  vec3 Rc = transpose(u_Rt) * reflect(-V, Nc);
  vec3 envC = studio(vec3(Rc.x, -Rc.y, Rc.z), 0.4);
  float ndc = max(dot(Nc, V), 0.0);
  vec3 Fc = u_col + (1.0 - u_col) * pow(1.0 - ndc, 5.0);
  vec3 chamfer = envC * Fc * 1.15;
  chamfer += white * pow(max(dot(Nc, normalize(lk + V)), 0.0), 110.0) * 1.6;
  float cm = smoothstep(u_bw + 0.75, u_bw - 0.75, din);

  vec3 col = mix(face, chamfer, cm);
  col *= 1.0 - 0.42 * exp(-pow((din - u_bw) / 0.9, 2.0));   // surco fino entre bisel y cara
  col += white * 0.22 * exp(-din * din / 1.4);             // brillo del canto exterior
  col *= u_int;
  col = 1.0 - exp(-col * 1.7);
  col = pow(col, vec3(0.94));
  col += (hash(gl_FragCoord.xy + 3.7) - 0.5) / 255.0;
  o = vec4(col * cov, cov);
}`,W=1e20;function se(a,c,s){const e=new Float32Array(c*s);for(let l=0;l<e.length;l++)e[l]=a[l]?W:0;const m=Math.max(c,s),i=new Float32Array(m),d=new Float32Array(m),x=new Float32Array(m+1),r=new Int32Array(m),f=l=>{let o=0;r[0]=0,x[0]=-W,x[1]=W;for(let v=1;v<l;v++){let w=(i[v]+v*v-(i[r[o]]+r[o]*r[o]))/(2*v-2*r[o]);for(;w<=x[o];)o--,w=(i[v]+v*v-(i[r[o]]+r[o]*r[o]))/(2*v-2*r[o]);o++,r[o]=v,x[o]=w,x[o+1]=W}o=0;for(let v=0;v<l;v++){for(;x[o+1]<v;)o++;d[v]=(v-r[o])*(v-r[o])+i[r[o]]}};for(let l=0;l<c;l++){for(let o=0;o<s;o++)i[o]=e[o*c+l];f(s);for(let o=0;o<s;o++)e[o*c+l]=d[o]}for(let l=0;l<s;l++){for(let o=0;o<c;o++)i[o]=e[l*c+o];f(c);for(let o=0;o<c;o++)e[l*c+o]=d[o]}return e}function ie(a,c,s,e,m=3){e=Math.max(1,Math.round(e));const i=new Float32Array(Math.max(c,s)),d=1/(2*e+1);for(let x=0;x<m;x++){for(let r=0;r<s;r++){const f=r*c;let l=0;for(let o=-e;o<=e;o++)l+=a[f+Math.min(c-1,Math.max(0,o))];for(let o=0;o<c;o++)i[o]=l*d,l+=a[f+Math.min(c-1,o+e+1)]-a[f+Math.max(0,o-e)];for(let o=0;o<c;o++)a[f+o]=i[o]}for(let r=0;r<c;r++){let f=0;for(let l=-e;l<=e;l++)f+=a[Math.min(s-1,Math.max(0,l))*c+r];for(let l=0;l<s;l++)i[l]=f*d,f+=a[Math.min(s-1,l+e+1)*c+r]-a[Math.max(0,l-e)*c+r];for(let l=0;l<s;l++)a[l*c+r]=i[l]}}return a}function fe(a,c,s,e){a.beginPath(),a.moveTo(c-.95*e,s+.55*e),a.bezierCurveTo(c-.95*e,s-.25*e,c-.55*e,s-.85*e,c,s-.85*e),a.bezierCurveTo(c+.55*e,s-.85*e,c+.95*e,s-.25*e,c+.95*e,s+.55*e),a.lineTo(c+1.15*e,s+.74*e),a.lineTo(c-1.15*e,s+.74*e),a.closePath(),a.fill(),a.beginPath(),a.arc(c,s+1.14*e,.21*e,0,Math.PI*2),a.fill(),a.beginPath(),a.arc(c,s-1.02*e,.14*e,0,Math.PI*2),a.fill()}function ue(a,c,s,e,m){const i=Math.max(8,Math.ceil((a+s*2)*e)),d=Math.max(8,Math.ceil((c+s*2)*e)),x=document.createElement("canvas");x.width=i,x.height=d;const r=x.getContext("2d",{willReadFrequently:!0}),f=a*e,l=s*e,o=s*e,v=.075*f;r.fillStyle="#fff";const w=(u,_)=>{"letterSpacing"in r&&(r.letterSpacing=`${u*_}px`)},P=.05*f,S=o+v+.045*f;m.emblem&&fe(r,l+v+P,S-.1*P,P),r.textBaseline="middle",r.textAlign="left";let y=.06*f;r.font=`600 ${y}px ${m.family}`,w(.22,y),r.fillText(m.title,l+v+(m.emblem?2.9*P:0),S),r.save(),r.strokeStyle="#fff",r.lineWidth=.0068*f,r.lineCap="round";const K=l+f-v-.052*f;for(let u=0;u<4;u++){const _=(.012+u*.0155)*f;r.beginPath(),r.arc(K-.014*f,S,_,-.62,.62),r.stroke()}r.restore();const M=o+c*e-v*.95;r.textBaseline="alphabetic",y=.05*f,r.font=`500 ${y}px ${m.family}`,w(.16,y),r.fillText(m.holder,l+v,M),y=.03*f,r.font=`500 ${y}px ${m.family}`,w(.34,y),r.textAlign="right",r.fillText(m.subtitle,l+f-v+.34*y,M);const D=r.getImageData(0,0,i,d).data,R=i*d,g=new Float32Array(R),t=new Uint8Array(R);for(let u=0;u<R;u++)g[u]=D[u*4+3]/255,t[u]=g[u]>.5?1:0;const I=Math.max(2,.0075*f),A=se(t,i,d),F=new Float32Array(R),b=new Float32Array(R);for(let u=0;u<R;u++){if(!t[u])continue;const _=Math.max(0,Math.sqrt(A[u])-.5),T=Math.min(1,_/I);F[u]=-I*Math.sqrt(1-(1-T)*(1-T)),b[u]=Math.exp(-_/(I*1.6))}ie(F,i,d,Math.max(1,I*.28),2);const E=new Float32Array(R*4);for(let u=0;u<d;u++)for(let _=0;_<i;_++){const T=u*i+_,L=F[u*i+Math.max(0,_-1)],z=F[u*i+Math.min(i-1,_+1)],C=F[Math.max(0,u-1)*i+_],X=F[Math.min(d-1,u+1)*i+_],n=T*4;E[n]=Math.max(-5,Math.min(5,(z-L)*.5)),E[n+1]=Math.max(-5,Math.min(5,(X-C)*.5)),E[n+2]=b[T],E[n+3]=g[T]}return{w:i,h:d,datos:E}}function me(a){try{const c=document.createElement("canvas");c.width=c.height=1;const s=c.getContext("2d",{willReadFrequently:!0});s.fillStyle="#80838a",s.fillStyle=a,s.fillRect(0,0,1,1);const e=s.getImageData(0,0,1,1).data;return[e[0]/255,e[1]/255,e[2]/255]}catch{return[.56,.57,.6]}}function de(a,c,s){const e=(x,r)=>{const f=a.createShader(x);return a.shaderSource(f,r),a.compileShader(f),a.getShaderParameter(f,a.COMPILE_STATUS)?f:(console.error(a.getShaderInfoLog(f)),null)},m=e(a.VERTEX_SHADER,c),i=e(a.FRAGMENT_SHADER,s);if(!m||!i)return null;const d=a.createProgram();return a.attachShader(d,m),a.attachShader(d,i),a.linkProgram(d),a.deleteShader(m),a.deleteShader(i),a.getProgramParameter(d,a.LINK_STATUS)?d:(console.error(a.getProgramInfoLog(d)),null)}const ve=(a,c)=>{const s=new Array(9).fill(0);for(let e=0;e<3;e++)for(let m=0;m<3;m++)for(let i=0;i<3;i++)s[e*3+m]+=a[e*3+i]*c[i*3+m];return s};function he(a,c){const s=a*Math.PI/180,e=c*Math.PI/180,m=Math.cos(s),i=Math.sin(s),d=Math.cos(e),x=Math.sin(e),r=[1,0,0,0,m,-i,0,i,m],f=[d,0,x,0,1,0,-x,0,d],l=ve(r,f);return new Float32Array([l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8]])}const j=8;function pe({children:a="MARIANA RIVERA",title:c="FURIN",subtitle:s="TITANIUM",emblem:e=!0,width:m=400,tilt:i=16,color:d="#80838a",gloss:x=.6,intensity:r=1,sweep:f=!0,className:l="",style:o}){const v=q.useRef(null),w=q.useRef(null),P=q.useRef(null),S=q.useRef(null),y=q.useRef({children:a,title:c,subtitle:s,emblem:e,tilt:i,color:d,gloss:x,intensity:r,sweep:f});y.current={children:a,title:c,subtitle:s,emblem:e,tilt:i,color:d,gloss:x,intensity:r,sweep:f},q.useEffect(()=>{const M=v.current,D=w.current,R=P.current;if(!M||!D||!R)return;const g=document.createElement("canvas");g.className="furin-metal-card__lienzo",g.setAttribute("aria-hidden","true");const t=g.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!t)return;D.appendChild(g);const I=matchMedia("(prefers-reduced-motion: reduce)").matches;let A=null,F=null,b={},E=!1,u=!0,_=0,T=!1,L=1,z=0,C=0;const X=()=>{if(A=de(t,le,ce),!!A){for(const h of["u_campo","u_res","u_card","u_rc","u_bw","u_Rt","u_col","u_grain","u_gloss","u_int","u_dpr"])b[h]=t.getUniformLocation(A,h);F=t.createTexture(),t.useProgram(A),t.uniform1i(b.u_campo,0),t.disable(t.DEPTH_TEST),t.disable(t.BLEND)}},n={rx:-3,ry:6,vx:0,vy:0,tx:-3,ty:6,sc:1,vs:0,tsc:1,auto:!0,t0:performance.now(),ult:0},Q=()=>{D.style.transform=`rotateX(${n.rx.toFixed(3)}deg) rotateY(${n.ry.toFixed(3)}deg) scale(${n.sc.toFixed(4)})`,R.style.transform=`translate(${(5-n.ry*.9).toFixed(2)}px, ${(12+n.rx*.9).toFixed(2)}px) scale(${(1+(n.sc-1)*2).toFixed(4)})`,R.style.opacity=String((.5+Math.min(.2,(Math.abs(n.rx)+Math.abs(n.ry))*.008)).toFixed(3))},Z=()=>{if(!A||!E||t.isContextLost())return;const h=y.current;t.viewport(0,0,g.width,g.height),t.useProgram(A),t.uniform2f(b.u_res,g.width,g.height),t.uniform2f(b.u_card,z*L,C*L),t.uniform1f(b.u_rc,z*L*.037),t.uniform1f(b.u_bw,Math.max(2,z*L*.0075)),t.uniformMatrix3fv(b.u_Rt,!1,he(n.rx,n.ry));const[p,N,U]=me(h.color);t.uniform3f(b.u_col,p,N,U),t.uniform1f(b.u_grain,.65),t.uniform1f(b.u_gloss,h.gloss),t.uniform1f(b.u_int,h.intensity),t.uniform1f(b.u_dpr,L),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,3)},G=()=>{if(T||t.isContextLost()||!A)return;const h=y.current;if(L=Math.min(window.devicePixelRatio||1,2),z=M.offsetWidth,C=M.offsetHeight,!z||!C)return;const p=ue(z,C,j,L,{title:h.title,subtitle:h.subtitle,holder:h.children,emblem:h.emblem,family:getComputedStyle(M).fontFamily});g.width=p.w,g.height=p.h,g.style.width=`${z+j*2}px`,g.style.height=`${C+j*2}px`,g.style.left=`${-j}px`,g.style.top=`${-j}px`,t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,F),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,p.w,p.h,0,t.RGBA,t.FLOAT,p.datos),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),E=!0,Q(),Z(),M.setAttribute("data-gl","1"),$()},ee=()=>!!y.current.sweep&&n.auto&&!I,re=()=>!ee()&&Math.abs(n.vx)+Math.abs(n.vy)+Math.abs(n.vs)<.01&&Math.abs(n.tx-n.rx)+Math.abs(n.ty-n.ry)+Math.abs(n.tsc-n.sc)*100<.02,te=h=>{if(_=0,T||!u||!E)return;const p=Math.min(.05,(h-(n.ult||h))/1e3||.016);n.ult=h;const N=y.current.tilt;if(ee()){const O=(h-n.t0)/1e3;n.tx=-Math.cos(O*.45)*.42*N-.1*N,n.ty=Math.sin(O*.62)*.6*N}const U=150,V=17;n.vx+=((n.tx-n.rx)*U-n.vx*V)*p,n.vy+=((n.ty-n.ry)*U-n.vy*V)*p,n.vs+=((n.tsc-n.sc)*260-n.vs*22)*p,n.rx+=n.vx*p,n.ry+=n.vy*p,n.sc+=n.vs*p,Q(),Z(),re()?n.ult=0:_=requestAnimationFrame(te)},$=()=>{!_&&u&&E&&!T&&!I&&(n.ult=0,_=requestAnimationFrame(te))},B=h=>{const p=M.getBoundingClientRect();if(!p.width)return;const N=Math.max(-1,Math.min(1,(h.clientX-(p.left+p.width/2))/(p.width*.9))),U=Math.max(-1,Math.min(1,(h.clientY-(p.top+p.height/2))/(p.height*1.3))),V=y.current.tilt;n.ty=N*V,n.tx=-U*V;const O=h.clientX>=p.left&&h.clientX<=p.right&&h.clientY>=p.top&&h.clientY<=p.bottom;n.tsc=O?1.025:1,n.auto=!1,$()},Y=()=>{n.auto=!0,n.tsc=1,n.t0=performance.now(),$()},oe=h=>{h.pointerType!=="mouse"&&Y()};I||(window.addEventListener("pointermove",B,{passive:!0}),window.addEventListener("pointerdown",B,{passive:!0}),window.addEventListener("pointerup",oe,{passive:!0}),document.documentElement.addEventListener("pointerleave",Y));const ae=new IntersectionObserver(([h])=>{u=h.isIntersecting,u&&$()},{rootMargin:"80px"});ae.observe(M);let J=0;const H=()=>{cancelAnimationFrame(J),J=requestAnimationFrame(G)},ne=new ResizeObserver(H);return ne.observe(M),document.fonts?.ready.then(H),document.fonts?.addEventListener?.("loadingdone",H),g.addEventListener("webglcontextlost",h=>{h.preventDefault(),E=!1,cancelAnimationFrame(_),_=0}),g.addEventListener("webglcontextrestored",()=>{b={},X(),G()}),X(),S.current={rebuild:G,wake:$},G(),()=>{T=!0,S.current=null,cancelAnimationFrame(_),cancelAnimationFrame(J),ae.disconnect(),ne.disconnect(),document.fonts?.removeEventListener?.("loadingdone",H),window.removeEventListener("pointermove",B),window.removeEventListener("pointerdown",B),window.removeEventListener("pointerup",oe),document.documentElement.removeEventListener("pointerleave",Y),M.removeAttribute("data-gl"),t.getExtension("WEBGL_lose_context")?.loseContext(),g.remove()}},[]),q.useEffect(()=>{S.current?.rebuild()},[a,c,s,e,m,i,d,x,r,f]);const K=[c,a,s].filter(Boolean).join(" · ");return k.jsxs("div",{ref:v,className:`furin-metal-card ${l}`,style:{"--furin-mc-w":`${m}px`,...o},role:"img","aria-label":K,children:[k.jsx("div",{ref:P,className:"furin-metal-card__sombra","aria-hidden":"true"}),k.jsx("div",{ref:w,className:"furin-metal-card__inclinar"})]})}function _e(){return k.jsx("div",{className:"stage",children:k.jsx(pe,{})})}export{_e as default};
