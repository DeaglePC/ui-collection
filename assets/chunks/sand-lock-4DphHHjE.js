import{r as de,j as Fe}from"./client-CsvIHAk3.js";function et(a){const h=a.trim();if(!h)return null;if(h.startsWith("#")){const c=h.slice(1);if(c.length===3){const R=parseInt(c[0]+c[0],16),E=parseInt(c[1]+c[1],16),z=parseInt(c[2]+c[2],16);return Number.isNaN(R+E+z)?null:[R/255,E/255,z/255]}if(c.length>=6){const R=parseInt(c.slice(0,2),16),E=parseInt(c.slice(2,4),16),z=parseInt(c.slice(4,6),16);return Number.isNaN(R+E+z)?null:[R/255,E/255,z/255]}return null}const _=h.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);return _?[Number(_[1])/255,Number(_[2])/255,Number(_[3])/255]:null}function jn(a){return .2126*a[0]+.7152*a[1]+.0722*a[2]}function B(a,h,_){return[a[0]+(h[0]-a[0])*_,a[1]+(h[1]-a[1])*_,a[2]+(h[2]-a[2])*_]}const I=[{n:2,m:3},{n:2,m:4},{n:2,m:5},{n:4,m:5},{n:3,m:7},{n:6,m:7}].map(a=>({...a,w:a.n*a.n+a.m*a.m})),Le=Array.from(new Set(I.flatMap(a=>[a.n,a.m]))).sort((a,h)=>a-h),tt=new Map(Le.map((a,h)=>[a,h])),wn=.022,Wn=3,N=[{k:3,theta:0},{k:1,theta:.62},{k:4,theta:0},{k:2,theta:0},{k:5,theta:.5},{k:0,theta:.42},{k:3,theta:.9},{k:4,theta:1.15},{k:1,theta:0},{k:5,theta:0},{k:2,theta:.75},{k:0,theta:0}],qn=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,Hn=`
precision highp float;
uniform vec2 u_size;
uniform vec2 u_grid;
uniform sampler2D u_field;
uniform float u_time;
uniform float u_amp;
uniform float u_coh;
uniform vec3 u_plate;
uniform vec3 u_hi;
uniform vec3 u_lo;
uniform float u_dir;

float fieldAt(vec2 p) {
  vec2 uv = mix(0.5 / u_grid, 1.0 - 0.5 / u_grid, p);
  return texture2D(u_field, uv).r * 2.0 - 1.0;
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 p = gl_FragCoord.xy / u_size;
  vec2 e = 1.0 / u_grid;
  float f = fieldAt(p);
  float fx = fieldAt(p + vec2(e.x, 0.0)) - fieldAt(p - vec2(e.x, 0.0));
  float fy = fieldAt(p + vec2(0.0, e.y)) - fieldAt(p - vec2(0.0, e.y));

  // The plate flexes far faster than any display can show it. Lighting the
  // steel from the INSTANTANEOUS deflection means sampling that oscillation at
  // the refresh rate, and the sign flip aliases straight down into a full-bleed
  // strobe: measured at 6.5 Hz, a 3.3% mean-luminance sawtooth with 0.024
  // between consecutive frames — a photosensitivity hazard on a surface this
  // size, and the flicker the plate was reported for. What an eye (or a camera)
  // integrates over any interval it can resolve is the ENVELOPE of the motion,
  // so the sheen rides on that instead, strictly positive and with only a slow
  // continuous breath left in it so the steel is not dead.
  float phase = 0.88 + 0.12 * sin(u_time * 0.55);
  vec3 n = normalize(vec3(-fx * 5.4 * u_amp * phase, -fy * 5.4 * u_amp * phase, 1.0));
  vec3 l = normalize(vec3(0.42, 0.66, 0.62));
  float diff = max(dot(n, l), 0.0);
  vec3 v = vec3(0.0, 0.0, 1.0);
  vec3 h = normalize(l + v);
  float spec = pow(max(dot(n, h), 0.0), 46.0);

  // rolled steel: a stretched grain that runs across the plate, at two scales
  // so the surface has something to say where the field is flat
  float grain = hash(floor(gl_FragCoord.xy * vec2(0.5, 2.9))) - 0.5;
  grain += (hash(floor(gl_FragCoord.xy * vec2(0.07, 0.31))) - 0.5) * 0.8;
  float env = abs(f);

  float shade = 0.5 + (diff - 0.62) * 0.85 + spec * 0.5;
  shade += grain * 0.075;
  // the antinodes are lobes of moving metal: under raking light they read as
  // broad panels flipping either side of the seams, so the figure is already
  // legible in the steel before a single grain lands on it
  shade += f * phase * 0.1 * u_amp;
  shade += (env * env - 0.3) * 0.22 * u_amp;
  shade -= (1.0 - u_coh) * 0.03;

  vec3 col = u_plate;
  col = mix(col, u_lo, clamp(-shade + 0.5, 0.0, 1.0) * 0.95);
  col = mix(col, u_hi, clamp(shade - 0.5, 0.0, 1.0) * 0.95);

  // a mild elliptical vignette so the frame edges stop competing with the figure
  vec2 q = (p - 0.5) * vec2(1.0, u_size.y / u_size.x);
  float vig = smoothstep(0.62, 0.16, length(q));
  col = mix(mix(col, u_lo, 0.55 * u_dir + 0.16), col, vig);

  gl_FragColor = vec4(col, 1.0);
}
`,$n=`
attribute vec3 a_grain;
attribute float a_seed;
uniform vec2 u_size;
uniform float u_dpr;
uniform float u_psize;
varying float v_ink;
void main() {
  vec2 p = a_grain.xy / u_size;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
  // a settled grain (low local amplitude) prints solid; one being thrown
  // around on an antinode is a blur, so it prints faint and slightly larger
  float agit = clamp(a_grain.z, 0.0, 1.0);
  gl_PointSize = u_psize * u_dpr * (0.82 + a_seed * 0.5 + agit * 0.55);
  v_ink = mix(1.0, 0.34, agit) * (0.62 + a_seed * 0.55);
}
`,Kn=`
precision mediump float;
uniform vec3 u_ink;
uniform float u_gain;
varying float v_ink;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = dot(d, d) * 4.0;
  float a = 1.0 - smoothstep(0.35, 1.0, r);
  if (a <= 0.0) discard;
  gl_FragColor = vec4(u_ink * (a * v_ink * u_gain), 1.0);
}
`;function bn(a,h,_){const c=a.createShader(h);return c?(a.shaderSource(c,_),a.compileShader(c),a.getShaderParameter(c,a.COMPILE_STATUS)?c:(a.deleteShader(c),null)):null}function xn(a,h,_){const c=bn(a,a.VERTEX_SHADER,h),R=bn(a,a.FRAGMENT_SHADER,_);if(!c||!R)return null;const E=a.createProgram();return E?(a.attachShader(E,c),a.attachShader(E,R),a.linkProgram(E),a.deleteShader(c),a.deleteShader(R),a.getProgramParameter(E,a.LINK_STATUS)?E:(a.deleteProgram(E),null)):null}const Ut=.055,Zn=.09,Ct=220;function Qn({grains:a=4e4,speed:h=1,plateScale:_=.5,paused:c=!1,children:R,className:E="",style:z}){const Dt=de.useRef(null),Bt=de.useRef(null),yn=de.useId(),he=de.useRef(c);he.current=c;const[Ot,Mn]=de.useState(0);return de.useEffect(()=>{const u=Dt.current,A=Bt.current;if(!u||!A)return;const e=A.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!e)return;const x=xn(e,qn,Hn),k=xn(e,$n,Kn);if(!x||!k){Ot===0&&e.getExtension("WEBGL_lose_context")?.loseContext();return}const nt=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,nt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const ot=new Map,w=(t,n,r)=>{const i=n+r;return ot.has(i)||ot.set(i,e.getUniformLocation(t,r)),ot.get(i)??null},S=Math.max(2e3,Math.min(12e4,Math.floor(a))),ke=new Float32Array(S),Pe=new Float32Array(S),me=new Float32Array(S*3),Xt=new Float32Array(S);let G=2654435769;const T=()=>(G^=G<<13,G^=G>>>17,G^=G<<5,(G>>>0)%16777216/16777216);for(let t=0;t<S;t++)Xt[t]=T();const rt=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,rt),e.bufferData(e.ARRAY_BUFFER,me.byteLength,e.DYNAMIC_DRAW);const at=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,at),e.bufferData(e.ARRAY_BUFFER,Xt,e.STATIC_DRAW);let d=0,m=0,Ne=1,f=2,p=2,U=new Float32Array(4),P=new Float32Array(4),J=new Float32Array(4),ee=new Float32Array(4),st=new Uint8Array(4),Ie=new Float32Array(4),Se=new Float32Array(4),it=new Float32Array(4),lt=new Float32Array(4),y=1;const Ue=e.createTexture();e.bindTexture(e.TEXTURE_2D,Ue),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const Yt=()=>{const t=Le.length;Ie=new Float32Array(t*f),Se=new Float32Array(t*p),it=new Float32Array(f),lt=new Float32Array(p);const n=(r,i,o,s,l)=>{const v=(r-(i-y)*.5-l)/y,b=Math.floor(v),C=v-b;return o[s]=b&1?-1:1,b&1?1-C:C};for(let r=0;r<f;r++){const i=n(r/(f-1)*d,d,it,r,V);for(let o=0;o<t;o++)Ie[o*f+r]=Math.sin(Le[o]*Math.PI*i)}for(let r=0;r<p;r++){const i=n(r/(p-1)*m,m,lt,r,j);for(let o=0;o<t;o++)Se[o*p+r]=Math.sin(Le[o]*Math.PI*i)}};let V=0,j=0,W=0,q=0;const Rn=.75,Tn=()=>{W+=y*.381966,q+=y*.236068},Ln=t=>{if(V===W&&j===q)return;const n=1-Math.exp(-t/Rn);V+=(W-V)*n,j+=(q-j)*n,Math.abs(W-V)<.02&&Math.abs(q-j)<.02&&(W%=y*2,q%=y*2,V=W,j=q),Yt()},Fn=()=>{f=Math.max(24,Math.min(360,Math.round(d/5.2))),p=Math.max(24,Math.min(360,Math.round(m/5.2)));const n=f*p;U=new Float32Array(n),P=new Float32Array(n),J=new Float32Array(n),ee=new Float32Array(n),st=new Uint8Array(n),Yt()},te=new Float32Array(I.length),zt=new Float32Array(I.length),Ce=[];let ne=1,Gt=1;const ct=t=>{let n=0,r=0;for(let s=0;s<I.length;s++){const l=t/I[s].w,v=(1-l*l)*(1-l*l)+2*wn*l*(2*wn*l),b=1/Math.sqrt(Math.max(1e-9,v));te[s]=b,n+=b,b>r&&(r=b)}ne=n>0?r/n:1,Ce.length=0;const i=Array.from(te.keys()).sort((s,l)=>te[l]-te[s]);let o=0;for(let s=0;s<Wn&&s<i.length;s++)Ce.push(i[s]),o+=te[i[s]];for(const s of Ce)zt[s]=te[s]/Math.max(1e-9,o);Gt=Math.min(1,r/6)},ft=()=>{Le.length,U.fill(0);for(const o of Ce){const s=I[o],l=zt[o];if(l<.02)continue;const v=(tt.get(s.n)??0)*f,b=(tt.get(s.m)??0)*f,C=(tt.get(s.n)??0)*p,le=(tt.get(s.m)??0)*p,D=Math.cos(we[o])*l,M=Math.sin(we[o])*l;for(let g=0;g<p;g++){const Ke=g*f,Ze=Se[C+g],O=Se[le+g],X=lt[g];for(let F=0;F<f;F++){const ce=it[F]*X,Y=Ie[v+F]*O,fe=Ie[b+F]*Ze;U[Ke+F]+=ce*(D*(Y-fe)+M*(Y+fe))}}}let t=1e-6;for(let o=0;o<U.length;o++){const s=Math.abs(U[o]);s>t&&(t=s)}const n=1/t;for(let o=0;o<U.length;o++)U[o]*=n,P[o]=Math.abs(U[o]),st[o]=Math.round((U[o]*.5+.5)*255);const r=(f-1)/d,i=(p-1)/m;for(let o=0;o<p;o++){const s=o*f;for(let l=0;l<f;l++){const v=l>0?l-1:l,b=l<f-1?l+1:l,C=o>0?s-f:s,le=o<p-1?s+f:s;J[s+l]=(P[s+b]-P[s+v])*r*y/2,ee[s+l]=(P[le+l]-P[C+l])*i*y/2}}e.bindTexture(e.TEXTURE_2D,Ue),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,f,p,0,e.LUMINANCE,e.UNSIGNED_BYTE,st)},kn=3.4,Pn=.34,Nn=.085,Vt=.5,In=t=>{const n=(f-1)/d,r=(p-1)/m,i=kn*y*t*(.35+.85*ne),o=.5+2.1*(1-ne)+$*2.2,s=Pn*y*Math.sqrt(t)*o,l=y*.09,v=Math.max(90,Math.min(d,m)*.34),b=v*v,C=ae*(.3+$*1.25),le=y*.7*t;for(let D=0;D<S;D++){let M=ke[D],g=Pe[D];const Ke=M*n,Ze=g*r;let O=Ke|0,X=Ze|0;O<0?O=0:O>f-2&&(O=f-2),X<0?X=0:X>p-2&&(X=p-2);const F=Ke-O,ce=Ze-X,Y=X*f+O,fe=Y+1,Qe=Y+f,Rt=Qe+1,Tt=(1-F)*(1-ce),Lt=F*(1-ce),Ft=(1-F)*ce,kt=F*ce;let Pt=P[Y]*Tt+P[fe]*Lt+P[Qe]*Ft+P[Rt]*kt;const zn=J[Y]*Tt+J[fe]*Lt+J[Qe]*Ft+J[Rt]*kt,Gn=ee[Y]*Tt+ee[fe]*Lt+ee[Qe]*Ft+ee[Rt]*kt;let vn=0,_n=0;if(C>0){const Q=M-_e,ue=g-Be,It=Q*Q+ue*ue;if(It<b){const En=1-It/b,St=En*En*C;Pt+=St*.7;const An=1/Math.sqrt(Math.max(1,It));vn=Q*An*St*le,_n=ue*An*St*le}}const Vn=Nn*(1-.8*$)*(.35+.65*ne),Je=Pt-Vn;let K,Z;if(Je<=0)K=(T()+T()-1)*Vt,Z=(T()+T()-1)*Vt;else{K=-zn*i*Je,Z=-Gn*i*Je;const Q=Math.hypot(K,Z);Q>l&&(K=K/Q*l,Z=Z/Q*l);const ue=s*Je;K+=(T()+T()-1)*ue,Z+=(T()+T()-1)*ue}M+=K+vn,g+=Z+_n,M<0?M=-M:M>d&&(M=2*d-M),g<0?g=-g:g>m&&(g=2*m-g),ke[D]=M,Pe[D]=g;const Nt=D*3;me[Nt]=M,me[Nt+1]=g,me[Nt+2]=Pt*(.45+1.5*(1-ne))}},Sn=()=>{for(let t=0;t<S;t++)ke[t]=T()*d,Pe[t]=T()*m};let L=[0,0,0],pe=[1,1,1],ge=[0,0,0],ve=[1,1,1],ut=1,De=!1;const jt=()=>{const t=getComputedStyle(document.documentElement),n=et(t.getPropertyValue("--background"))??[0,0,0],r=et(t.getPropertyValue("--foreground"))??[1,1,1],i=et(t.getPropertyValue("--ns-muted"))??B(n,r,.5),o=et(t.getPropertyValue("--border"))??B(n,r,.2);De=jn(n)>.5,De?(L=B(n,o,.95),L=B(L,i,.16),pe=n,ge=B(i,r,.45),ve=[Math.max(0,Math.min(1,1-r[0]/Math.max(.02,L[0]))),Math.max(0,Math.min(1,1-r[1]/Math.max(.02,L[1]))),Math.max(0,Math.min(1,1-r[2]/Math.max(.02,L[2])))],ut=.62):(L=B(n,o,.62),pe=B(o,i,.75),ge=B(n,L,.15),ve=B(r,n,.02),ut=.5)};jt();let _e=0,Be=0,oe=0,re=0,dt=0,ht=0,Oe=0,Xe=0,H=!1,ae=0,Ye=0,$=0,mt=0,pt=0,ze=!0;const Un=()=>{if(!ze)return;const t=u.getBoundingClientRect();mt=t.left,pt=t.top,ze=!1},Ge=()=>{ze=!0},Cn=t=>{if($+=(Ye-$)*(1-Math.exp(-t*6)),ae+=((H?1:0)-ae)*(1-Math.exp(-t*4.5)),!H&&ae<.002&&(ae=0),!H||t<=0)return;const n=1-Math.exp(-t/Zn);Oe+=((oe-dt)/t-Oe)*n,Xe+=((re-ht)/t-Xe)*n,dt=oe,ht=re;let r=Oe*Ut,i=Xe*Ut;const o=Math.hypot(r,i);o>Ct&&(r=r/o*Ct,i=i/o*Ct);const s=1-Math.exp(-t/Ut);_e+=(oe+r-_e)*s,Be+=(re+i-Be)*s},Dn=3.6,Wt=2.3;let Ee=0,se=0,Ae=!0,Ve=I[N[0].k].w,ie=0;const we=new Float32Array(I.length);for(const t of N)we[t.k]=t.theta;we[N[0].k]=N[0].theta;const Bn=t=>{const n=I[N[Ee].k].w,r=I[N[(Ee+1)%N.length].k].w;if(Ae)return n*(1+.0016*Math.sin(t*1.7));const i=Math.min(1,se/Wt),o=i*i*(3-2*i);return n+(r-n)*o},On=(t,n)=>{if(se+=t,Ae&&se>=Dn){Ae=!1,se=0;const o=N[(Ee+1)%N.length];we[o.k]=o.theta,Tn()}else!Ae&&se>=Wt&&(Ae=!0,se=0,Ee=(Ee+1)%N.length);let r=Bn(n);const i=ae*(_e/Math.max(1,d)-.5)*2;r*=1+(i*.2+ie*.2)*(1+.5*$)+$*.13,Ve=r};let gt=0,vt=0,_t=!1,Et=0,be=!1,At=!1,je=!0;const qt=[1,.78,.62];let xe=0,ye=16.7,Me=0,Re=0,We=8e3;const Xn=()=>{e.useProgram(x),e.bindBuffer(e.ARRAY_BUFFER,nt);const t=e.getAttribLocation(x,"a_pos");e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ue),e.uniform1i(w(x,"p","u_field"),0),e.uniform2f(w(x,"p","u_size"),A.width,A.height),e.uniform2f(w(x,"p","u_grid"),f,p),e.uniform1f(w(x,"p","u_time"),gt),e.uniform1f(w(x,"p","u_amp"),Gt),e.uniform1f(w(x,"p","u_coh"),ne),e.uniform1f(w(x,"p","u_dir"),De?0:1),e.uniform3f(w(x,"p","u_plate"),L[0],L[1],L[2]),e.uniform3f(w(x,"p","u_hi"),pe[0],pe[1],pe[2]),e.uniform3f(w(x,"p","u_lo"),ge[0],ge[1],ge[2]),e.disable(e.BLEND),e.drawArrays(e.TRIANGLES,0,6),e.disableVertexAttribArray(t)},Yn=()=>{e.useProgram(k),e.bindBuffer(e.ARRAY_BUFFER,rt),e.bufferSubData(e.ARRAY_BUFFER,0,me);const t=e.getAttribLocation(k,"a_grain");e.enableVertexAttribArray(t),e.vertexAttribPointer(t,3,e.FLOAT,!1,12,0),e.bindBuffer(e.ARRAY_BUFFER,at);const n=e.getAttribLocation(k,"a_seed");e.enableVertexAttribArray(n),e.vertexAttribPointer(n,1,e.FLOAT,!1,4,0),e.uniform2f(w(k,"g","u_size"),d,m),e.uniform1f(w(k,"g","u_dpr"),Ne),e.uniform1f(w(k,"g","u_psize"),2.1),e.uniform1f(w(k,"g","u_gain"),ut),e.uniform3f(w(k,"g","u_ink"),ve[0],ve[1],ve[2]),e.enable(e.BLEND),De?e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR):e.blendFunc(e.ONE,e.ONE),e.drawArrays(e.POINTS,0,S),e.disable(e.BLEND),e.disableVertexAttribArray(t),e.disableVertexAttribArray(n)},qe=()=>{d<2||m<2||(Xn(),Yn())},Ht=t=>{gt+=t,On(t,gt),Ln(t),ct(Ve),ft(),In(t)},$t=t=>{for(let n=0;n<t;n++)Ht(1/60)},Kt=t=>{const n=t-vt;vt=t;const r=Math.min(.05,Math.max(.001,n/1e3))*Math.max(.05,h);Cn(r),Ht(r),qe();const i=Math.min(50,n);ye+=(i-ye)*(1-Math.exp(-i/140)),ye>22?(Me+=i,Re=0):(Re+=i,Me=0);const o=Me>900&&xe<qt.length-1,s=Re>We&&xe>0;(o||s)&&(xe+=o?1:-1,o&&(We=Math.min(64e3,We*2)),Me=0,Re=0,ye=16.7,Zt()),Et=requestAnimationFrame(Kt)},wt=()=>{_t||At||(_t=!0,vt=performance.now(),Et=requestAnimationFrame(Kt))},Te=()=>{cancelAnimationFrame(Et),_t=!1},Zt=()=>{if(d<2||m<2)return;Ne=Math.min(window.devicePixelRatio||1,2)*qt[xe];const t=Math.round(d*Ne),n=Math.round(m*Ne);(A.width!==t||A.height!==n)&&(A.width=t,A.height=n),A.style.width=`${d}px`,A.style.height=`${m}px`,e.viewport(0,0,t,n),qe()};let bt=!1;const Qt=()=>{const t=u.getBoundingClientRect();if(t.width<2||t.height<2)return;const n=!bt;if(!(Math.abs(t.width-d)>.5||Math.abs(t.height-m)>.5)&&bt)return;const i=d,o=m;if(d=t.width,m=t.height,mt=t.left,pt=t.top,ze=!1,y=Math.min(d,m)*Math.max(.25,_),V=W,j=q,Fn(),xe=0,Me=0,Re=0,We=8e3,ye=16.7,n)Sn(),bt=!0,ct(Ve),ft(),$t(150);else if(i>0&&o>0){const s=d/i,l=m/o;for(let v=0;v<S;v++)ke[v]*=s,Pe[v]*=l;ct(Ve),ft()}Zt()},xt=t=>{Un();const n=typeof t.getCoalescedEvents=="function"?t.getCoalescedEvents():null,r=n&&n.length>0?n[n.length-1]:t;oe=r.clientX-mt,re=r.clientY-pt},yt=()=>{_e=oe,Be=re,Oe=0,Xe=0,dt=oe,ht=re,H=!0},Jt=t=>{xt(t),yt()},en=t=>{xt(t),H||yt()},He=()=>{H=!1,Ye=0},tn=t=>{xt(t),yt(),Ye=1},nn=t=>{Ye=0,t.pointerType!=="mouse"&&(H=!1)},on=t=>{if(t.key==="ArrowLeft"||t.key==="ArrowDown")ie=Math.max(-1,ie-.25);else if(t.key==="ArrowRight"||t.key==="ArrowUp")ie=Math.min(1,ie+.25);else return;t.preventDefault()},rn=()=>{ie=0};u.addEventListener("pointerenter",Jt),u.addEventListener("pointermove",en),u.addEventListener("pointerleave",He),u.addEventListener("pointerdown",tn),u.addEventListener("pointerup",nn),u.addEventListener("pointercancel",He),u.addEventListener("keydown",on),u.addEventListener("blur",rn),window.addEventListener("scroll",Ge,{passive:!0,capture:!0}),window.addEventListener("resize",Ge,{passive:!0});const an=new ResizeObserver(Qt);an.observe(u),Qt();const $e=window.matchMedia("(prefers-reduced-motion: reduce)");let sn=$e.matches;const Mt=()=>{sn||he.current?(be=!0,Te(),$t(180),qe()):(be=!1,je&&!document.hidden&&wt())},ln=()=>{sn=$e.matches,Mt()};$e.addEventListener("change",ln);const cn=new IntersectionObserver(t=>{je=t.some(n=>n.isIntersecting),je?!be&&!document.hidden&&wt():Te()},{threshold:0});cn.observe(u);const fn=()=>{document.hidden?Te():!be&&je&&wt()};document.addEventListener("visibilitychange",fn),Mt();let un=he.current,dn=0;const hn=()=>{he.current!==un&&(un=he.current,Mt()),dn=window.setTimeout(hn,160)};hn();const mn=new MutationObserver(()=>{jt(),be&&qe()});mn.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const pn=t=>{t.preventDefault(),Te()},gn=()=>{At||Mn(t=>t+1)};return A.addEventListener("webglcontextlost",pn),A.addEventListener("webglcontextrestored",gn),()=>{At=!0,Te(),an.disconnect(),cn.disconnect(),mn.disconnect(),$e.removeEventListener("change",ln),document.removeEventListener("visibilitychange",fn),A.removeEventListener("webglcontextlost",pn),A.removeEventListener("webglcontextrestored",gn),u.removeEventListener("pointerenter",Jt),u.removeEventListener("pointermove",en),u.removeEventListener("pointerleave",He),u.removeEventListener("pointerdown",tn),u.removeEventListener("pointerup",nn),u.removeEventListener("pointercancel",He),u.removeEventListener("keydown",on),u.removeEventListener("blur",rn),window.removeEventListener("scroll",Ge,{capture:!0}),window.removeEventListener("resize",Ge),window.clearTimeout(dn),e.deleteBuffer(nt),e.deleteBuffer(rt),e.deleteBuffer(at),e.deleteTexture(Ue),e.deleteProgram(x),e.deleteProgram(k),A.isConnected||e.getExtension("WEBGL_lose_context")?.loseContext()}},[a,h,_,Ot]),Fe.jsxs("div",{ref:Dt,"data-sand-lock":yn,tabIndex:0,role:"img","aria-label":"A vibrating plate scattered with sand; the grains gather along the nodal lines of the plate's resonant modes as the driving frequency sweeps.",className:`relative isolate h-full w-full touch-none overflow-hidden bg-background outline-none focus-visible:ring-2 focus-visible:ring-ns-accent focus-visible:ring-inset ${E}`,style:z,children:[Fe.jsx("canvas",{ref:Bt,"aria-hidden":"true",className:"absolute inset-0 block"}),R?Fe.jsx("div",{className:"relative z-[1] h-full w-full",children:R}):null]})}function eo(){return Fe.jsx("div",{className:"ns-stage",children:Fe.jsx(Qn,{children:"示例"})})}export{eo as default};
