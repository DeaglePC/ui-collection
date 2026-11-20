import{r as I,j as C}from"./client-CsvIHAk3.js";const st=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,it=`
precision highp float;

uniform vec2 u_size;      // css px
uniform float u_dpr;
uniform sampler2D u_height;
uniform vec2 u_texRes;    // erosion buffer size in texels
uniform float u_relief;
uniform float u_time;
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform float u_bias;
uniform float u_contrast;

// texture stores signed height packed 0..1 -> -1..1
float sampleH(vec2 uv) {
  return texture2D(u_height, uv).r * 2.0 - 1.0;
}

float strip(float el, float at, float width) {
  float d = (el - at) / width;
  return exp(-d * d);
}

// A three-source achromatic studio. Fewer bands than a mirror pool needs —
// a pocked, mostly-flat plate only has to cross one or two reflection bands
// per crater rim to read as machined metal rather than paper.
float env(vec3 r) {
  float el = r.y;
  float az = atan(r.x, r.z);
  float L = 0.40;
  L += 0.22 * smoothstep(0.05, 0.62, el);
  L -= 0.20 * smoothstep(0.0, -0.55, el);
  L += 0.30 * strip(el, 0.12, 0.05);
  L += 0.16 * strip(el, 0.44, 0.08);
  L += 0.10 * exp(-pow(sin(az * 1.0 + u_time * 0.045) / 0.42, 2.0));
  return L;
}

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.30, x));
  c = mix(c, u_c2, smoothstep(0.28, 0.58, x));
  c = mix(c, u_c3, smoothstep(0.55, 0.85, x));
  c = mix(c, u_c4, smoothstep(0.82, 1.0, x));
  return c;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, u_size.y * u_dpr - gl_FragCoord.y) / u_dpr;
  vec2 uv = p / u_size;

  vec2 texel = 1.0 / u_texRes;
  float h0 = sampleH(uv);
  float hx = sampleH(uv + vec2(texel.x, 0.0));
  float hy = sampleH(uv + vec2(0.0, texel.y));

  vec3 n = normalize(vec3(-(hx - h0) * u_relief, (hy - h0) * u_relief, 1.0));
  vec2 vp = (p - u_size * 0.5) / min(u_size.x, u_size.y);
  vec3 v = normalize(vec3(vp.x * 0.5, -vp.y * 0.5, 1.0));
  vec3 r = reflect(-v, n);

  float L = env(r);

  vec3 l1 = normalize(vec3(-0.30, 0.72, 0.58));
  float s1 = pow(max(dot(r, l1), 0.0), 130.0);
  L += s1 * 0.85;

  float fres = pow(1.0 - max(dot(n, v), 0.0), 5.0);
  L += fres * 0.12;

  float Lc = clamp((L - 0.5) * u_contrast + 0.5 + u_bias, 0.0, 1.0);
  vec3 col = ramp(Lc);
  gl_FragColor = vec4(col, 1.0);
}
`;function Y(o){const r=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(o.trim());if(!r)return null;let t=r[1];t.length===3&&(t=t.split("").map(u=>u+u).join(""));const s=parseInt(t,16);return[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255]}function w(o,r,t){return[o[0]+(r[0]-o[0])*t,o[1]+(r[1]-o[1])*t,o[2]+(r[2]-o[2])*t]}function at([o,r,t]){return .2126*o+.7152*r+.0722*t}function Ve(o,r,t){const s=o.createShader(r);if(o.shaderSource(s,t),o.compileShader(s),!o.getShaderParameter(s,o.COMPILE_STATUS)){const u=o.getShaderInfoLog(s);throw o.deleteShader(s),new Error(`edm-crater-field: shader compile failed: ${u??""}`)}return s}class lt{constructor(r,t){this.canvas=r,this.frag=t,this.gl=null,this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.locs=new Map}init(r=!1){const t=this.canvas.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return!1;this.gl=t;try{this.vs=Ve(t,t.VERTEX_SHADER,st),this.fs=Ve(t,t.FRAGMENT_SHADER,this.frag);const u=t.createProgram();if(!u)return this.abandon(r),!1;if(this.program=u,t.attachShader(u,this.vs),t.attachShader(u,this.fs),t.linkProgram(u),!t.getProgramParameter(u,t.LINK_STATUS))return this.abandon(r),!1}catch{return this.abandon(r),!1}t.useProgram(this.program),this.buffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const s=t.getAttribLocation(this.program,"a_pos");return t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0),this.locs.clear(),!0}abandon(r){const t=r?null:this.gl?.getExtension("WEBGL_lose_context");this.destroy(),t?.loseContext()}loc(r){return this.locs.has(r)||this.locs.set(r,this.gl.getUniformLocation(this.program,r)),this.locs.get(r)??null}f(r,t){this.gl?.uniform1f(this.loc(r),t)}i(r,t){this.gl?.uniform1i(this.loc(r),t)}v2(r,t,s){this.gl?.uniform2f(this.loc(r),t,s)}v3(r,t){this.gl?.uniform3f(this.loc(r),t[0],t[1],t[2])}draw(r,t){const s=this.gl;!s||!this.program||(s.viewport(0,0,r,t),s.drawArrays(s.TRIANGLES,0,6))}destroy(){const r=this.gl;r&&(this.buffer&&r.deleteBuffer(this.buffer),this.program&&r.deleteProgram(this.program),this.vs&&r.deleteShader(this.vs),this.fs&&r.deleteShader(this.fs),this.buffer=null,this.program=null,this.vs=null,this.fs=null,this.locs.clear(),this.gl=null)}}function je(o){let r=o>>>0;return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ct=14,ut=28,ft=5.5,ht=ft/3,q=.009,Ye=.022,$=.15,mt=1.15,qe=.34,$e=220,dt=150,pt=600,K=10,vt=.2,Ke=20260827;function Je({paused:o=!1,children:r,className:t="",style:s}){const u=I.useRef(null),ge=I.useRef(null),Qe=I.useId(),L=I.useRef(o);return L.current=o,I.useEffect(()=>{const v=u.current,c=ge.current;if(!v||!c)return;const i=new lt(c,it);let J=0,Q=!1,x=!1,d=0,p=0,U=1,Ee=!1,Z=performance.now(),_=0,M=0,T=new Float32Array(0),ee=new Uint8Array(0),g=null,Ze=je(Date.now()&4294967295),F=0,N=0,xe=0,Te=0,z=0,te=0;const we=[1,.7],et=24;let b=0,y=16.7,S=0,P=0,B=8e3,re=0,ne=[.03,.03,.03],oe=[.18,.18,.18],se=[.56,.56,.56],ie=[.93,.93,.93],ae=[1,1,1],le=0,ce=1.15;const Me=()=>{const e=getComputedStyle(document.documentElement),n=Y(e.getPropertyValue("--background"))??[1,1,1],l=Y(e.getPropertyValue("--foreground"))??[.09,.09,.09],a=Y(e.getPropertyValue("--ns-muted"))??[.55,.55,.55],f=Y(e.getPropertyValue("--border"))??[.18,.18,.18],m=[0,0,0],h=[1,1,1];at(n)<.5?(ne=w(n,m,.5),oe=w(f,n,.15),se=a,ie=l,ae=w(l,h,.82),le=-.08,ce=1.18):(ne=w(l,m,.32),oe=w(l,a,.55),se=w(a,n,.6),ie=w(n,a,.16),ae=n,le=.02,ce=1.22)};Me();const tt=()=>{const n=Math.max(1,Math.min(d,p))/$e;_=Math.max(24,Math.round(d/n)),M=Math.max(24,Math.round(p/n)),T=new Float32Array(_*M),ee=new Uint8Array(_*M)},Re=(e,n,l,a)=>{const f=l/a,m=e/a,h=n/a,E=Math.ceil(f)+1,A=Math.max(0,Math.floor(m-E)),de=Math.min(_-1,Math.ceil(m+E)),pe=Math.max(0,Math.floor(h-E)),ve=Math.min(M-1,Math.ceil(h+E));for(let k=pe;k<=ve;k++){const ot=k*_;for(let W=A;W<=de;W++){const ke=W-m,We=k-h,V=Math.sqrt(ke*ke+We*We)/f;if(V>1)continue;let _e;if(V<1-$){const j=V/(1-$);_e=-qe*(1-j*j)}else{const j=(V-(1-$))/$;_e=qe*mt*Math.sin(Math.min(1,j)*Math.PI)}T[ot+W]+=_e}}},Ae=(e,n)=>{if(e<=0||_===0)return;const l=Math.exp(-e/ht);for(let h=0;h<T.length;h++)T[h]*=l;const a=Math.max(1,Math.min(d,p)),f=a/$e;F+=ct*e;let m=Math.floor(F);for(F-=m;m-- >0;){const h=n()*d,E=n()*p,A=(q+n()*(Ye-q))*a;Re(h,E,A,f)}if(z>.01){N+=ut*z*e;let h=Math.floor(N);for(N-=h;h-- >0;){const E=n()*Math.PI*2,A=Math.sqrt(n())*dt,de=xe+Math.cos(E)*A,pe=Te+Math.sin(E)*A,ve=(q+n()*(Ye-q))*a;Re(de,pe,ve,f)}}},rt=()=>{const e=i.gl;if(!(!e||_===0)){for(let n=0;n<T.length;n++){const l=Math.max(-1,Math.min(1,T[n]));ee[n]=Math.round((l*.5+.5)*255)}g?e.bindTexture(e.TEXTURE_2D,g):(g=e.createTexture(),e.bindTexture(e.TEXTURE_2D,g),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR)),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,_,M,0,e.LUMINANCE,e.UNSIGNED_BYTE,ee),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,g)}},R=()=>{!i.gl||d<=0||p<=0||(rt(),i.v2("u_size",d,p),i.f("u_dpr",U),i.v2("u_texRes",_,M),i.f("u_relief",6.5),i.f("u_time",re),i.i("u_height",0),i.v3("u_c0",ne),i.v3("u_c1",oe),i.v3("u_c2",se),i.v3("u_c3",ie),i.v3("u_c4",ae),i.f("u_bias",le),i.f("u_contrast",ce),i.draw(c.width,c.height))},Le=e=>{const n=e-Z,l=Math.min(.05,Math.max(0,n/1e3));Z=e,re+=l,z+=(te-z)*(1-Math.exp(-l/(pt/1e3))),Ae(l,Ze),R();const a=Math.min(50,n);y+=(a-y)*(1-Math.exp(-a/120)),y>et?(S+=a,P=0):(P+=a,S=0);const f=S>900&&b<we.length-1,m=P>B&&b>0;(f||m)&&(b+=f?1:-1,f&&(B=Math.min(64e3,B*2)),S=0,P=0,y=16.7,be()),J=requestAnimationFrame(Le)},ue=()=>{Q||Ee||(Q=!0,Z=performance.now(),J=requestAnimationFrame(Le))},D=()=>{cancelAnimationFrame(J),Q=!1},be=()=>{if(d<2||p<2)return;U=Math.min(window.devicePixelRatio||1,1.5)*we[b];const e=Math.round(d*U),n=Math.round(p*U);(c.width!==e||c.height!==n)&&(c.width=e,c.height=n),c.style.width=`${d}px`,c.style.height=`${p}px`,R()},O=(e,n)=>{const l=je(e);F=0,N=0,T.fill(0);let a=n;for(;a>0;){const f=Math.min(vt,a);Ae(f,l),a-=f}},fe=()=>{const e=v.getBoundingClientRect();e.width<2||e.height<2||(d=e.width,p=e.height,b=0,S=0,P=0,B=8e3,y=16.7,tt(),O(x?Ke:Date.now()&4294967295,K),be(),R())};let ye=0,Se=0,he=!0;const nt=()=>{if(!he)return;const e=v.getBoundingClientRect();ye=e.left,Se=e.top,he=!1},X=()=>{he=!0},Pe=e=>{nt(),xe=e.clientX-ye,Te=e.clientY-Se,te=1,x&&R()},De=()=>{te=0};if(!i.init())return;const Ie=new ResizeObserver(fe);Ie.observe(v),fe(),v.addEventListener("pointermove",Pe),v.addEventListener("pointerleave",De),window.addEventListener("scroll",X,{passive:!0,capture:!0}),window.addEventListener("resize",X,{passive:!0});const G=window.matchMedia("(prefers-reduced-motion: reduce)");let Ce=G.matches;const H=()=>{Ce||L.current?(x=!0,D(),re=0,O(Ke,K),R()):(x=!1,O(Date.now()&4294967295,K),ue())},Ue=()=>{Ce=G.matches,H()};G.addEventListener("change",Ue);let me=!0;const Fe=new IntersectionObserver(e=>{me=e.some(n=>n.isIntersecting),me?!x&&!document.hidden&&ue():D()},{threshold:0});Fe.observe(v);const Ne=()=>{document.hidden?D():!x&&me&&ue()};document.addEventListener("visibilitychange",Ne),H();let ze=L.current,Be=0;const Oe=()=>{L.current!==ze&&(ze=L.current,H()),Be=window.setTimeout(Oe,140)};Oe();const Xe=new MutationObserver(()=>{Me(),x&&R()});Xe.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const Ge=e=>{e.preventDefault(),D()},He=()=>{g=null,i.init(!0)&&(fe(),H())};return c.addEventListener("webglcontextlost",Ge),c.addEventListener("webglcontextrestored",He),()=>{Ee=!0,Ie.disconnect(),Fe.disconnect(),G.removeEventListener("change",Ue),document.removeEventListener("visibilitychange",Ne),Xe.disconnect(),c.removeEventListener("webglcontextlost",Ge),c.removeEventListener("webglcontextrestored",He),v.removeEventListener("pointermove",Pe),v.removeEventListener("pointerleave",De),window.removeEventListener("scroll",X,{capture:!0}),window.removeEventListener("resize",X),window.clearTimeout(Be),D(),g&&i.gl&&i.gl.deleteTexture(g),g=null;const e=i.gl?.getExtension("WEBGL_lose_context");i.destroy(),c.isConnected||e?.loseContext()}},[]),C.jsxs("div",{ref:u,"data-edm-crater-field":Qe,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${t}`,style:s,children:[C.jsx("canvas",{ref:ge,"aria-hidden":"true",className:"absolute inset-0 block h-full w-full"}),r?C.jsx("div",{className:"relative z-[1] h-full w-full",children:r}):null]})}Je.displayName="EdmCraterField";function gt(){return C.jsx("div",{className:"ns-stage",children:C.jsx(Je,{children:"示例"})})}export{gt as default};
