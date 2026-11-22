import{r as L,j as G}from"./client-CsvIHAk3.js";let y=null;function me(_){y??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),y.clearRect(0,0,1,1),y.fillStyle="#000",y.fillStyle=_,y.fillRect(0,0,1,1);const M=y.getImageData(0,0,1,1).data;return[M[0]/255,M[1]/255,M[2]/255]}const Ae="attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }",Te=`precision highp float;
uniform vec2 uRes;
uniform float uTime, uDensity;
uniform sampler2D uDisp;
uniform vec3 uColor, uGlow;

float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i), b = hash(i + vec2(1.0, 0.0)), c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p){
  float s = 0.0, a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = m * p; a *= 0.5; }
  return s;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec4 d = texture2D(uDisp, uv);
  vec2 disp = (d.rg - 0.5) * 2.0 * 0.24;
  float hole = d.b;
  vec2 p = (uv - disp) * vec2(asp, 1.0) * 2.1;
  float t = uTime;
  p.y -= t * 0.14;
  p.x += 0.12 * sin(t * 0.11 + uv.y * 2.0);
  vec2 q = vec2(fbm(p + vec2(0.0, t * 0.04)), fbm(p + vec2(5.2, 1.3) - t * 0.03));
  vec2 r = vec2(fbm(p + 3.0 * q + vec2(1.7, 9.2) + 0.11 * t), fbm(p + 3.0 * q + vec2(8.3, 2.8) + 0.09 * t));
  vec2 pp = p + 3.0 * r;
  float f = fbm(pp);
  float e = 0.05;
  float fx = fbm(pp + vec2(e, 0.0));
  float fy = fbm(pp + vec2(0.0, e));
  vec2 g = vec2(fx - f, fy - f) / e;

  float dens = pow(smoothstep(0.24, 0.80, f), 1.05) * uDensity;
  // más espeso abajo, más ralo arriba y hacia los lados
  dens *= 0.62 + 0.8 * (1.0 - uv.y);
  dens *= smoothstep(1.35, 0.25, length((uv - vec2(0.5, 0.45)) * vec2(1.0, 1.15)));
  dens *= 1.0 - hole * 0.8;
  dens = clamp(dens, 0.0, 1.0);

  vec3 n = normalize(vec3(-g * 0.17, 1.0));
  vec3 L = normalize(vec3(-0.45, 0.75, 0.55));
  float lit = clamp(dot(n, L) * 0.5 + 0.5, 0.0, 1.0);
  vec3 shade = vec3(0.075, 0.09, 0.14);
  vec3 smoke = mix(shade, uColor, smoothstep(0.25, 0.95, lit));
  // contraluz cálido desde abajo, solo en los bordes que miran hacia abajo
  float under = clamp(-n.y * 1.2 + 0.25, 0.0, 1.0) * (1.0 - uv.y);
  smoke += uGlow * under * 0.55 * dens;
  smoke += uColor * pow(clamp(length(g) * 0.12, 0.0, 1.0), 2.0) * 0.30;

  vec3 bg = vec3(0.022, 0.026, 0.038) + uGlow * 0.05 * exp(-uv.y * 3.2) * (1.0 - abs(uv.x - 0.5));
  vec3 col = bg + smoke * dens * 1.12;
  col *= 1.0 - 0.30 * dot(uv - 0.5, uv - 0.5) * 2.0;
  col = col / (1.0 + max(col - 0.70, 0.0) * 1.2);
  col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 160.0;
  gl_FragColor = vec4(col, 1.0);
}`,o=64;function Re({color:_="#BFD0FF",glowColor:M="#FF8A4A",density:k=1,speed:N=1,interactive:V=!0,children:$,className:ue="",style:de}){const J=L.useRef(null),x=L.useRef({color:_,glowColor:M,density:k,speed:N,interactive:V});x.current={color:_,glowColor:M,density:k,speed:N,interactive:V};const j=L.useRef(()=>{});return L.useEffect(()=>{const c=J.current;if(!c)return;const Q=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=document.createElement("canvas");m.className="furin-smoke-field__canvas",m.setAttribute("aria-hidden","true"),c.insertBefore(m,c.firstChild);const e=m.getContext("webgl",{antialias:!1,alpha:!1});if(!e){m.remove();return}const Z=(a,t)=>{const n=e.createShader(a);return e.shaderSource(n,t),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)||console.error("[smoke-field] shader:",e.getShaderInfoLog(n)),n},l=e.createProgram();e.attachShader(l,Z(e.VERTEX_SHADER,Ae)),e.attachShader(l,Z(e.FRAGMENT_SHADER,Te)),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS)||console.error("[smoke-field] link:",e.getProgramInfoLog(l)),e.useProgram(l);const ee=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,ee),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const te=e.getAttribLocation(l,"a");e.enableVertexAttribArray(te),e.vertexAttribPointer(te,2,e.FLOAT,!1,0,0);const A={res:e.getUniformLocation(l,"uRes"),time:e.getUniformLocation(l,"uTime"),density:e.getUniformLocation(l,"uDensity"),color:e.getUniformLocation(l,"uColor"),glow:e.getUniformLocation(l,"uGlow"),disp:e.getUniformLocation(l,"uDisp")},B=e.createTexture();e.bindTexture(e.TEXTURE_2D,B),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.uniform1i(A.disp,0);let w=1,b=1,r=40,d=new Float32Array(o*r),g=new Float32Array(o*r),T=new Float32Array(o*r),q=new Float32Array(o*r),R=new Uint8Array(o*r*4),oe=Q?31:22+Math.random()*10,W=0,E=0,U=!0,O="",z="",D=[.75,.82,1],S=[1,.54,.29];const h={x:0,y:0,has:!1},re=()=>{const a=Math.min(window.devicePixelRatio||1,2);w=c.clientWidth||300,b=c.clientHeight||300;const t=.78;m.width=Math.max(2,Math.round(w*a*t)),m.height=Math.max(2,Math.round(b*a*t)),e.viewport(0,0,m.width,m.height),r=Math.max(16,Math.round(o*b/w)),d=new Float32Array(o*r),g=new Float32Array(o*r),T=new Float32Array(o*r),q=new Float32Array(o*r),R=new Uint8Array(o*r*4),H()},he=()=>{for(let t=0;t<o*r;t++)R[t*4]=Math.round((Math.max(-1,Math.min(1,d[t]/.24))*.5+.5)*255),R[t*4+1]=Math.round((Math.max(-1,Math.min(1,g[t]/.24))*.5+.5)*255),R[t*4+2]=Math.round(Math.min(1,T[t])*255),R[t*4+3]=255;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,B),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,r,0,e.RGBA,e.UNSIGNED_BYTE,R)},H=()=>{O!==x.current.color&&(O=x.current.color,D=me(O)),z!==x.current.glowColor&&(z=x.current.glowColor,S=me(z)),he(),e.uniform2f(A.res,m.width,m.height),e.uniform1f(A.time,oe),e.uniform1f(A.density,x.current.density),e.uniform3f(A.color,D[0],D[1],D[2]),e.uniform3f(A.glow,S[0],S[1],S[2]),e.drawArrays(e.TRIANGLE_STRIP,0,4)},ve=a=>{const t=Math.exp(-a/1.9);for(const n of[d,g,T]){for(let s=0;s<r;s++)for(let f=0;f<o;f++){const v=s*o+f,u=n[s*o+Math.max(f-1,0)],p=n[s*o+Math.min(f+1,o-1)],I=n[Math.max(s-1,0)*o+f],X=n[Math.min(s+1,r-1)*o+f];q[v]=(n[v]*.6+(u+p+I+X)*.1)*t}n.set(q)}},ne=a=>{E=0;const t=Math.min(.05,Math.max(.001,(a-W)/1e3));W=a,oe+=t*x.current.speed,ve(t),H(),U&&(E=requestAnimationFrame(ne))},P=()=>{E||!U||Q||(W=performance.now(),E=requestAnimationFrame(ne))};j.current=()=>{H(),P()};const pe=(a,t,n,s)=>{const f=Math.hypot(n,s);if(f<1e-5)return;const v=.12,u=v*(b/w)*o,p=v*r,I=Math.ceil(u*2.4),X=Math.ceil(p*2.4),ce=Math.floor(a*o),le=Math.floor(t*r);for(let i=Math.max(0,le-X);i<=Math.min(r-1,le+X);i++)for(let F=Math.max(0,ce-I);F<=Math.min(o-1,ce+I);F++){const xe=(F+.5)/o-a,ge=(i+.5)/r-t,Ee=((F+.5-a*o)/u)**2,Me=((i+.5-t*r)/p)**2,Y=Math.exp(-(Ee+Me)*.5),fe=Math.sign(n*ge-s*xe)||0,K=i*o+F;d[K]+=Y*(n*1.5+-s*fe*1.1),g[K]+=Y*(s*1.5+n*fe*1.1),T[K]+=Y*Math.min(f*18,.35)}for(let i=0;i<d.length;i++)d[i]>.24?d[i]=.24:d[i]<-.24&&(d[i]=-.24),g[i]>.24?g[i]=.24:g[i]<-.24&&(g[i]=-.24),T[i]>1&&(T[i]=1)},ae=a=>{if(!x.current.interactive)return;const t=c.getBoundingClientRect(),n=(a.clientX-t.left)/t.width,s=1-(a.clientY-t.top)/t.height;if(h.has){const f=n-h.x,v=s-h.y,u=Math.min(6,Math.max(1,Math.ceil(Math.hypot(f*w,v*b)/24)));for(let p=1;p<=u;p++)pe(h.x+f*p/u,h.y+v*p/u,f/u,v/u)}h.x=n,h.y=s,h.has=!0,P()},C=()=>{h.has=!1};c.addEventListener("pointermove",ae),c.addEventListener("pointerleave",C),c.addEventListener("pointercancel",C);const ie=new IntersectionObserver(([a])=>{U=a.isIntersecting,U?P():E&&(cancelAnimationFrame(E),E=0)});ie.observe(c);const se=new ResizeObserver(re);return se.observe(c),re(),P(),()=>{cancelAnimationFrame(E),ie.disconnect(),se.disconnect(),c.removeEventListener("pointermove",ae),c.removeEventListener("pointerleave",C),c.removeEventListener("pointercancel",C),j.current=()=>{},e.deleteTexture(B),e.deleteBuffer(ee),e.deleteProgram(l),e.getExtension("WEBGL_lose_context")?.loseContext(),m.remove()}},[]),L.useEffect(()=>{j.current()},[_,M,k,N]),G.jsx("div",{ref:J,className:`furin-smoke-field ${ue}`,style:de,children:$?G.jsx("div",{className:"furin-smoke-field__contenido",children:$}):null})}function _e(){return G.jsx("div",{className:"stage",children:G.jsx(Re,{})})}export{_e as default};
