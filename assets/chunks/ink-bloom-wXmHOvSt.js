import{r as I,j as X}from"./client-CsvIHAk3.js";const ue=["#2E5BFF","#18E0C2","#FF7A3C"];let C=null;function Te(_){C??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),C.clearRect(0,0,1,1),C.fillStyle="#000",C.fillStyle=_,C.fillRect(0,0,1,1);const M=C.getImageData(0,0,1,1).data;return[M[0]/255,M[1]/255,M[2]/255]}const Me="attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }",Ae=`precision highp float;
uniform vec2 uRes;
uniform float uTime, uInt;
uniform vec3 uC0, uC1, uC2, uClickCol;
uniform vec4 uClick;
uniform sampler2D uDisp;

float hash(float n){ return fract(sin(n * 127.1 + 3.7) * 43758.5453); }
float h2(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h2(i), h2(i + vec2(1.0, 0.0)), f.x), mix(h2(i + vec2(0.0, 1.0)), h2(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p){
  float s = 0.0, a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 4; i++) { s += a * noise(p); p = m * p; a *= 0.5; }
  return s;
}

// x = densidad de tinta, y = nervadura (hebras finas)
vec2 drop(vec2 p, vec2 c, float age, float seed, float life){
  vec2 d = p - c;
  float a = age;
  float grow = 1.0 - exp(-a * 0.42);
  float R = 0.05 + 0.31 * grow;
  float rr = length(d);
  if (rr > R * 2.7) return vec2(0.0);
  // remolino: la tinta se enrolla más con el tiempo y el radio
  float ang = (0.7 + 0.9 * hash(seed)) * sin(rr * 8.0 - a * 0.7 + seed * 6.0) * (1.0 - exp(-a * 0.6)) * exp(-rr * 1.5);
  float cs = cos(ang), sn = sin(ang);
  vec2 q = mat2(cs, -sn, sn, cs) * d;
  float wa = 0.10 + 0.60 * grow;
  vec2 w = vec2(fbm(q * 3.0 + seed * 13.0 + a * 0.10), fbm(q * 3.0 + seed * 7.0 + 4.7 - a * 0.08)) - 0.5;
  q += w * wa * R * 2.4;
  float r = length(q) / R;
  float rag = (fbm(q * 5.5 + seed * 3.0) - 0.5) * (0.25 + 0.55 * grow);
  float body = 1.0 - smoothstep(0.50, 1.05, r + rag);
  float ridge = 1.0 - abs(2.0 * fbm(q * 10.0 + seed * 5.0 + a * 0.05) - 1.0);
  ridge = pow(ridge, 2.2);
  // al principio la gota es un núcleo denso; luego se abre en velos
  float core = (1.0 - smoothstep(0.0, 0.9, r)) * (1.0 - smoothstep(0.0, 2.2, a));
  float dens = body * (0.22 + 0.85 * ridge) * (1.0 - 0.45 * grow) + core * 0.50;
  float fade = smoothstep(0.0, 0.25, a) * (1.0 - smoothstep(0.52 * life, life, a));
  return vec2(dens * fade, ridge * body * fade);
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec4 dp = texture2D(uDisp, uv);
  vec2 disp = (dp.rg - 0.5) * 2.0 * 0.24;
  vec2 p = (uv - disp - 0.5) * vec2(asp, 1.0);

  // agua: fondo profundo con un poco de luz desde arriba
  vec3 col = vec3(0.012, 0.020, 0.034) + vec3(0.015, 0.035, 0.065) * (1.0 - length((uv - vec2(0.5, 0.62)) * vec2(1.0, 1.1)) * 1.25);
  float caustic = fbm(p * 2.2 + vec2(uTime * 0.03, -uTime * 0.02));
  col += vec3(0.01, 0.025, 0.04) * smoothstep(0.45, 0.8, caustic);

  float P = 3.3;
  float LIFE = P * 3.0;
  vec3 ink = vec3(0.0);
  float shine = 0.0;
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    float tt = uTime - fk * P;
    float cyc = floor(tt / LIFE);
    float age = tt - cyc * LIFE;
    float id = cyc * 3.0 + fk;
    float seed = hash(id + 1.0);
    vec2 c = vec2((hash(id * 3.1 + 5.0) - 0.5) * 0.70 * asp, (hash(id * 7.7 + 2.0) - 0.5) * 0.62);
    float ci = mod(floor(id), 3.0);
    vec3 cc = ci < 0.5 ? uC0 : (ci < 1.5 ? uC1 : uC2);
    vec2 r = drop(p, c, age, seed, LIFE);
    ink += cc * r.x;
    shine += r.y * r.x;
  }
  if (uClick.w > 0.5) {
    float age = uTime - uClick.z;
    if (age > 0.0 && age < LIFE) {
      vec2 r = drop(p, uClick.xy * vec2(asp, 1.0), age, hash(uClick.z * 9.0), LIFE);
      ink += uClickCol * r.x;
      shine += r.y * r.x;
    }
  }
  col += ink * 1.0 * uInt;
  col += vec3(0.75, 0.9, 1.0) * pow(clamp(shine, 0.0, 1.0), 2.0) * 0.16 * uInt;
  col = col / (1.0 + max(col - 0.75, 0.0) * 1.1);
  col *= 1.0 - 0.45 * dot(uv - 0.5, uv - 0.5) * 2.0;
  col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 160.0;
  gl_FragColor = vec4(col, 1.0);
}`,r=64;function we({colors:_=ue,speed:M=1,intensity:N=1,interactive:Y=!0,children:z,className:me="",style:de}){const H=I.useRef(null),K=_.join("|"),h=I.useRef({colors:_,speed:M,intensity:N,interactive:Y});h.current={colors:_,speed:M,intensity:N,interactive:Y};const B=I.useRef(()=>{});return I.useEffect(()=>{const c=H.current;if(!c)return;const V=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=document.createElement("canvas");s.className="furin-ink-bloom__canvas",s.setAttribute("aria-hidden","true"),c.insertBefore(s,c.firstChild);const e=s.getContext("webgl",{antialias:!1,alpha:!1});if(!e){s.remove();return}const $=(o,t)=>{const n=e.createShader(o);return e.shaderSource(n,t),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)||console.error("[ink-bloom] shader:",e.getShaderInfoLog(n)),n},v=e.createProgram();e.attachShader(v,$(e.VERTEX_SHADER,Me)),e.attachShader(v,$(e.FRAGMENT_SHADER,Ae)),e.linkProgram(v),e.getProgramParameter(v,e.LINK_STATUS)||console.error("[ink-bloom] link:",e.getProgramInfoLog(v)),e.useProgram(v);const J=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,J),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const Q=e.getAttribLocation(v,"a");e.enableVertexAttribArray(Q),e.vertexAttribPointer(Q,2,e.FLOAT,!1,0,0);const p=o=>e.getUniformLocation(v,o),g={res:p("uRes"),time:p("uTime"),int:p("uInt"),c0:p("uC0"),c1:p("uC1"),c2:p("uC2"),clickCol:p("uClickCol"),click:p("uClick"),disp:p("uDisp")},j=e.createTexture();e.bindTexture(e.TEXTURE_2D,j),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.uniform1i(g.disp,0);const Z=()=>{const o=h.current.colors.length?h.current.colors:ue;return[0,1,2].map(t=>Te(o[t%o.length]))};let m=Z(),ee=K,k=1,b=1,a=40,A=new Float32Array(r*a),w=new Float32Array(r*a),G=new Float32Array(r*a),y=new Uint8Array(r*a*4),q=V?9:5+Math.random()*3,O=0,T=0,P=!0,he=0;const l={x:.5,y:.5,t:0,on:0,col:[1,1,1]},x={x:0,y:0,has:!1},te=()=>{const o=Math.min(window.devicePixelRatio||1,2);k=c.clientWidth||300,b=c.clientHeight||300;const t=.8;s.width=Math.max(2,Math.round(k*o*t)),s.height=Math.max(2,Math.round(b*o*t)),e.viewport(0,0,s.width,s.height),a=Math.max(16,Math.round(r*b/k)),A=new Float32Array(r*a),w=new Float32Array(r*a),G=new Float32Array(r*a),y=new Uint8Array(r*a*4),W()},W=()=>{ee!==h.current.colors.join("|")&&(ee=h.current.colors.join("|"),m=Z());const o=.24;for(let t=0;t<r*a;t++)y[t*4]=Math.round((Math.max(-1,Math.min(1,A[t]/o))*.5+.5)*255),y[t*4+1]=Math.round((Math.max(-1,Math.min(1,w[t]/o))*.5+.5)*255),y[t*4+2]=0,y[t*4+3]=255;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,j),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r,a,0,e.RGBA,e.UNSIGNED_BYTE,y),e.uniform2f(g.res,s.width,s.height),e.uniform1f(g.time,q),e.uniform1f(g.int,h.current.intensity),e.uniform3f(g.c0,m[0][0],m[0][1],m[0][2]),e.uniform3f(g.c1,m[1][0],m[1][1],m[1][2]),e.uniform3f(g.c2,m[2][0],m[2][1],m[2][2]),e.uniform3f(g.clickCol,l.col[0],l.col[1],l.col[2]),e.uniform4f(g.click,l.x-.5,l.y-.5,l.t,l.on),e.drawArrays(e.TRIANGLE_STRIP,0,4)},ve=o=>{const t=Math.exp(-o/2.2);for(const n of[A,w]){for(let i=0;i<a;i++)for(let f=0;f<r;f++){const E=i*r+f,d=n[i*r+Math.max(f-1,0)],R=n[i*r+Math.min(f+1,r-1)],S=n[Math.max(i-1,0)*r+f],U=n[Math.min(i+1,a-1)*r+f];G[E]=(n[E]*.6+(d+R+S+U)*.1)*t}n.set(G)}},oe=o=>{T=0;const t=Math.min(.05,Math.max(.001,(o-O)/1e3));O=o,q+=t*h.current.speed,ve(t),W(),P&&(T=requestAnimationFrame(oe))},F=()=>{T||!P||V||(O=performance.now(),T=requestAnimationFrame(oe))};B.current=()=>{W(),F()};const pe=(o,t,n,i)=>{const E=.13*(b/k)*r,d=.13*a,R=Math.ceil(E*2.4),S=Math.ceil(d*2.4),U=Math.floor(o*r),ie=Math.floor(t*a);for(let u=Math.max(0,ie-S);u<=Math.min(a-1,ie+S);u++)for(let L=Math.max(0,U-R);L<=Math.min(r-1,U+R);L++){const ge=((L+.5-o*r)/E)**2,xe=((u+.5-t*a)/d)**2,se=Math.exp(-(ge+xe)*.5),Ee=(L+.5)/r-o,Re=(u+.5)/a-t,le=Math.sign(n*Re-i*Ee)||0,fe=u*r+L;A[fe]+=se*(n*1.2+-i*le*1.15),w[fe]+=se*(i*1.2+n*le*1.15)}for(let u=0;u<A.length;u++)A[u]=Math.max(-.24,Math.min(.24,A[u])),w[u]=Math.max(-.24,Math.min(.24,w[u]))},re=o=>{if(!h.current.interactive)return;const t=c.getBoundingClientRect(),n=(o.clientX-t.left)/t.width,i=1-(o.clientY-t.top)/t.height;if(x.has){const f=n-x.x,E=i-x.y,d=Math.min(6,Math.max(1,Math.ceil(Math.hypot(f*k,E*b)/24)));for(let R=1;R<=d;R++)pe(x.x+f*R/d,x.y+E*R/d,f/d,E/d)}x.x=n,x.y=i,x.has=!0,F()},ne=o=>{if(!h.current.interactive)return;const t=c.getBoundingClientRect();l.x=(o.clientX-t.left)/t.width,l.y=1-(o.clientY-t.top)/t.height,l.t=q,l.on=1,l.col=m[he++%3],F()},D=()=>{x.has=!1};c.addEventListener("pointermove",re),c.addEventListener("pointerdown",ne),c.addEventListener("pointerleave",D),c.addEventListener("pointercancel",D);const ae=new IntersectionObserver(([o])=>{P=o.isIntersecting,P?F():T&&(cancelAnimationFrame(T),T=0)});ae.observe(c);const ce=new ResizeObserver(te);return ce.observe(c),te(),F(),()=>{cancelAnimationFrame(T),ae.disconnect(),ce.disconnect(),c.removeEventListener("pointermove",re),c.removeEventListener("pointerdown",ne),c.removeEventListener("pointerleave",D),c.removeEventListener("pointercancel",D),B.current=()=>{},e.deleteTexture(j),e.deleteBuffer(J),e.deleteProgram(v),e.getExtension("WEBGL_lose_context")?.loseContext(),s.remove()}},[]),I.useEffect(()=>{B.current()},[K,M,N]),X.jsx("div",{ref:H,className:`furin-ink-bloom ${me}`,style:de,children:z?X.jsx("div",{className:"furin-ink-bloom__contenido",children:z}):null})}function Ce(){return X.jsx("div",{className:"stage",children:X.jsx(we,{})})}export{Ce as default};
