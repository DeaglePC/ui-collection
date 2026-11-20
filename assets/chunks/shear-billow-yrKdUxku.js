import{r as I,j as O}from"./client-CsvIHAk3.js";const ct=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,ut=18,J=4,be=.012,ft=.06,ye=26,ht=46,dt=.016,ke=2.6,pt=`
precision highp float;

#define STEPS ${ut}
#define VORT ${J}

uniform vec2 u_size;       // css px
uniform float u_dpr;
uniform float u_time;
uniform float u_k;         // wavenumber, rad/px
uniform float u_om;        // pattern angular frequency, rad/s
uniform float u_yc;        // interface height, css px
uniform float u_um;        // mean drift, px/s
uniform float u_u0;        // shear half-velocity, px/s
uniform float u_trace;     // seconds integrated backwards
uniform float u_turb;
uniform float u_strata;
uniform vec4 u_vort[VORT]; // x, y css px, z = birth time (negative = unused), w = signed strength
uniform float u_vrad;
uniform float u_stir;      // 0 when every pointer vortex has decayed
uniform float u_vminborn;  // earliest birth time among live vortices
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform float u_dark;

float hash21(vec2 p) {
  p = fract(p * vec2(291.37, 417.13));
  p += dot(p, p + 23.91);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm2(vec2 p) {
  float s = vnoise(p) * 0.63;
  s += vnoise(p * 2.11 + 17.3) * 0.31;
  return s;
}

float fbm3(vec2 p) {
  float s = vnoise(p) * 0.55;
  s += vnoise(p * 2.07 + 11.7) * 0.27;
  s += vnoise(p * 4.13 + 29.1) * 0.14;
  return s;
}

// smoothstep and its derivative in one call: the derivative of the roll-up
// amplitude is not decoration, it is the drho/dx term of v = -dpsi/dx, and
// dropping it is what makes an x-modulated Stuart field stop being
// divergence-free and start looking like it is being squeezed.
vec2 sstepD(float a, float b, float x) {
  float t = clamp((x - a) / (b - a), 0.0, 1.0);
  float on = step(0.0, (x - a) * (b - x));
  return vec2(t * t * (3.0 - 2.0 * t), 6.0 * t * (1.0 - t) / (b - a) * on);
}

// Roll-up amplitude: exponential-looking growth out of the upstream edge,
// saturation where the cat's eye closes, then a slow decay once the roll has
// broken up and the mixing region has taken over. rho + rho2 must stay under
// 1 or D goes non-positive and the log singularity punches a hole in the field.
vec2 rhoOf(float xn) {
  vec2 g = sstepD(0.015, 0.60, xn);
  vec2 d = sstepD(0.68, 1.10, xn);
  float v = 0.735 * g.x * (1.0 - 0.34 * d.x);
  float dv = 0.735 * (g.y * (1.0 - 0.34 * d.x) - g.x * 0.34 * d.y);
  return vec2(v, dv);
}

// The subharmonic. It grows in only downstream, so alternate billows start
// pulling on each other exactly where a real layer pairs.
vec2 rho2Of(float xn) {
  vec2 g = sstepD(0.26, 0.98, xn);
  return vec2(0.185 * g.x, 0.185 * g.y);
}

// Velocity at (p, t): u = dpsi/dy, v = -dpsi/dx of Stuart's streamfunction,
// plus whatever pointer vortices were alive at time t.
vec2 flow(vec2 p, float t) {
  float xn = p.x / u_size.x;
  vec2 R = rhoOf(xn);
  vec2 R2 = rho2Of(xn);

  float Y = clamp(u_k * (p.y - u_yc), -7.0, 7.0);
  float e = exp(Y);
  float ie = 1.0 / e;
  float ch = 0.5 * (e + ie);
  float sh = 0.5 * (e - ie);

  float ph = u_k * p.x - u_om * t;
  float c1 = cos(ph);
  float s1 = sin(ph);
  float hp = 0.5 * ph + 1.37;
  float c2 = cos(hp);
  float s2 = sin(hp);

  float D = max(ch + R.x * c1 + R2.x * c2, 0.06);
  float invD = 1.0 / D;

  float u = sh * invD;
  // dD/dx, with the two amplitude derivatives carried in css-px units
  float dDdx = (R.y * c1 + R2.y * c2) / u_size.x - u_k * (R.x * s1 + 0.5 * R2.x * s2);
  float v = -dDdx * invD / u_k;

  vec2 vel = vec2(u_um + u_u0 * u, u_u0 * v);

  // uniform branch, coherent across the draw: at rest — where the page spends
  // most of its life — the stir costs nothing at all. The second half of the
  // test is the same skip one step earlier: the trace reaches back further than
  // a vortex has existed, so for every step before the earliest live birth the
  // loop below can only ever hit age < 0 and continue. Hoisting that to a
  // uniform comparison drops the loop entirely on those steps — same output,
  // and the branch is coherent because tt is identical across the draw.
  if (u_stir > 0.0 && t >= u_vminborn) {
    for (int i = 0; i < VORT; i++) {
      float born = u_vort[i].z;
      float age = t - born;
      // a vortex that had not been laid down yet at trace time t must not act
      // on the parcel, or the pointer's wake reaches backwards through it
      if (born < 0.0 || age < 0.0 || age > ${ke.toFixed(2)}) continue;
      vec2 d = p - u_vort[i].xy;
      float r2 = dot(d, d) / (u_vrad * u_vrad);
      if (r2 > 8.0) continue;
      float amp = u_vort[i].w * smoothstep(0.0, 0.10, age) * exp(-age * 1.15);
      vel += amp * exp(-r2) * vec2(-d.y, d.x) / u_vrad;
    }
  }
  return vel;
}

// Divergence-free stir for the downstream breakdown: the curl of one scalar
// noise, so the shredding transports the layers rather than inflating them.
vec2 curl(vec2 p) {
  float e = 0.55;
  float a = fbm2(p + vec2(0.0, e));
  float b = fbm2(p - vec2(0.0, e));
  float c = fbm2(p + vec2(e, 0.0));
  float d = fbm2(p - vec2(e, 0.0));
  return vec2(a - b, d - c) / (2.0 * e);
}

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.28, x));
  c = mix(c, u_c2, smoothstep(0.26, 0.56, x));
  c = mix(c, u_c3, smoothstep(0.54, 0.82, x));
  c = mix(c, u_c4, smoothstep(0.80, 1.0, x));
  return c;
}

void main() {
  // DOM-space px, y down, so pointer coordinates and the field share one
  // coordinate system
  vec2 p = vec2(gl_FragCoord.x, u_size.y * u_dpr - gl_FragCoord.y) / u_dpr;
  float xn = p.x / u_size.x;

  // ---- backward trace ---------------------------------------------------
  vec2 q = p;
  float tt = u_time;
  float dt = -u_trace / float(STEPS);
  for (int i = 0; i < STEPS; i++) {
    vec2 k1 = flow(q, tt);
    vec2 k2 = flow(q + k1 * dt, tt + dt);
    q += 0.5 * (k1 + k2) * dt;
    tt += dt;
  }

  // ---- downstream breakdown ---------------------------------------------
  // The mixing region thickens with distance, so the shredding is gated both
  // by how far downstream the pixel is and by how close its parcel came from
  // to the interface. Applied to the SAMPLE point, not integrated: a curl
  // field inside the trace loop costs eight noise taps per step for detail the
  // eye reads identically at one tap per pixel.
  float Yq = u_k * (q.y - u_yc);
  float mix0 = exp(-Yq * Yq * 0.055);
  float turbAmt = u_turb * smoothstep(0.34, 1.02, xn) * (0.30 + 0.70 * mix0);
  float ref = min(u_size.x, u_size.y);
  // upstream of xn = 0.34 turbAmt is exactly zero, so both curl fields are
  // multiplied out — 32 hash taps per pixel producing a displacement of 0.
  // Skipping them there is not an approximation, and the branch is coherent
  // because it depends only on the column.
  if (turbAmt > 0.0) {
    q += curl(q * 0.0075 + vec2(u_time * 0.021, 3.1)) * turbAmt * ref * 0.30;
    q += curl(q * 0.026 + vec2(-u_time * 0.05, 8.4)) * turbAmt * ref * 0.055;
  }

  float Y0 = u_k * (q.y - u_yc);
  // the source stratification drifts with the mean flow, so its texture is a
  // property of the fluid rather than a pattern pinned to the viewport
  vec2 src = q - vec2(u_um * tt, 0.0);

  // ---- stratification ---------------------------------------------------
  // Two slabs of different density with a thin sheet between them. Everything
  // the image shows is this profile, dragged around by the trace.
  float tn = Y0 / (1.0 + abs(Y0));
  float sigma = 0.45 + 0.20 * tn;

  // density banding inside each slab, tilted by a very low-frequency swim so
  // the layers are not drafting-board parallel
  float swim = fbm2(src * 0.0011 + vec2(0.0, 4.7));
  float bands = sin(Y0 * 2.7 + swim * 5.5);
  sigma += bands * 0.085 * u_strata;

  // laminar wind streaks: one noise sample stretched ~40:1 along the flow, so
  // the undisturbed layers read as moving air and the interface reads as the
  // only place anything is happening
  float streak = vnoise(vec2(src.x * 0.0022, src.y * 0.085) + vec2(0.0, 1.7));
  sigma += (streak - 0.5) * 0.085;

  // the interface sheet — the thing that actually gets wound into a spiral
  float sheet = exp(-Y0 * Y0 * 1.25);
  sigma += sheet * 0.52;

  // filament grain, advected with the parcel: fine structure inside the rolls
  float grain = fbm3(src * 0.019 + vec2(0.0, 0.0));
  sigma += (grain - 0.5) * (0.10 + 0.16 * mix0);
  sigma += (fbm2(src * 0.075) - 0.5) * 0.07 * (0.2 + turbAmt);

  sigma = clamp(sigma, 0.0, 1.0);

  vec3 col = ramp(sigma);

  // ---- pointer ----------------------------------------------------------
  // a live pointer vortex lifts the sheet toward the brightest stop, and it
  // reaches zero when the last one decays, so a resting frame carries no
  // highlight at all — luminance only, never hue: --ns-accent is reserved
  // for real interactive chrome, not a resting fluid layer
  if (u_stir > 0.0) {
    float near = 0.0;
    for (int i = 0; i < VORT; i++) {
      float born = u_vort[i].z;
      float age = u_time - born;
      if (born < 0.0 || age < 0.0 || age > ${ke.toFixed(2)}) continue;
      vec2 d = p - u_vort[i].xy;
      float r2 = dot(d, d) / (u_vrad * u_vrad);
      near += exp(-r2 * 0.85) * exp(-age * 1.4);
    }
    near = clamp(near, 0.0, 1.0);
    col = clamp(col + vec3(near * 0.34 * (0.30 + 0.70 * sheet)), 0.0, 1.0);
  }

  // mild elliptical vignette toward the deepest stop so the frame edges stop
  // competing with whatever is overlaid
  vec2 vp = (p - u_size * 0.5) / ref;
  float vig = smoothstep(0.62, 1.24, length(vp * vec2(1.0, 1.35)));
  col = mix(col, mix(u_c4, u_c0, u_dark), vig * 0.26);

  gl_FragColor = vec4(col, 1.0);
}
`;function K(i){const o=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i.trim());if(!o)return null;let e=o[1];e.length===3&&(e=e.split("").map(f=>f+f).join(""));const a=parseInt(e,16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}function _(i,o,e){return[i[0]+(o[0]-i[0])*e,i[1]+(o[1]-i[1])*e,i[2]+(o[2]-i[2])*e]}function mt([i,o,e]){return .2126*i+.7152*o+.0722*e}function Ke(i,o,e){const a=i.createShader(o);if(i.shaderSource(a,e),i.compileShader(a),!i.getShaderParameter(a,i.COMPILE_STATUS)){const f=i.getShaderInfoLog(a);throw i.deleteShader(a),new Error(`shear-billow: shader compile failed: ${f??""}`)}return a}class vt{constructor(o,e){this.canvas=o,this.frag=e,this.gl=null,this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.locs=new Map}init(o=!1){const e=this.canvas.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!e)return!1;this.gl=e;try{this.vs=Ke(e,e.VERTEX_SHADER,ct),this.fs=Ke(e,e.FRAGMENT_SHADER,this.frag);const f=e.createProgram();if(!f)return this.abandon(o),!1;if(this.program=f,e.attachShader(f,this.vs),e.attachShader(f,this.fs),e.linkProgram(f),!e.getProgramParameter(f,e.LINK_STATUS))return this.abandon(o),!1}catch{return this.abandon(o),!1}e.useProgram(this.program),this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const a=e.getAttribLocation(this.program,"a_pos");return e.enableVertexAttribArray(a),e.vertexAttribPointer(a,2,e.FLOAT,!1,0,0),this.locs.clear(),!0}abandon(o){const e=o?null:this.gl?.getExtension("WEBGL_lose_context");this.destroy(),e?.loseContext()}loc(o){return this.locs.has(o)||this.locs.set(o,this.gl.getUniformLocation(this.program,o)),this.locs.get(o)??null}f(o,e){this.gl?.uniform1f(this.loc(o),e)}v2(o,e,a){this.gl?.uniform2f(this.loc(o),e,a)}v3(o,e){this.gl?.uniform3f(this.loc(o),e[0],e[1],e[2])}v4a(o,e){this.gl?.uniform4fv(this.loc(o),e)}draw(o,e){const a=this.gl;!a||!this.program||(a.viewport(0,0,o,e),a.drawArrays(a.TRIANGLES,0,6))}destroy(){const o=this.gl;o&&(this.buffer&&o.deleteBuffer(this.buffer),this.program&&o.deleteProgram(this.program),this.vs&&o.deleteShader(this.vs),this.fs&&o.deleteShader(this.fs),this.buffer=null,this.program=null,this.vs=null,this.fs=null,this.locs.clear(),this.gl=null)}}const Ee=34,gt=1.5;function Je({billows:i=6,speed:o=1,turbulence:e=1,strata:a=1,stir:f=1,paused:Ae=!1,children:Me,className:Qe="",style:Ze}){const Re=I.useRef(null),Se=I.useRef(null),et=I.useId(),T=I.useRef(Ae);return T.current=Ae,I.useEffect(()=>{const c=Re.current,h=Se.current;if(!c||!h)return;const r=new vt(h,pt);let V=0,Q=!1,v=!1,d=0,p=0,B=1,Le=!1,Z=performance.now();const Pe=[1,.75,.55],tt=24,ot=1500;let G=0,D=0,M=16.7,R=0,S=0,N=8e3,y=Ee*.34;const E=new Float32Array(J*4).fill(-1);let X=0,U=1,L=!1,g=0,x=0,w=0,b=0,q=0,C=0,ee=0,te=0,oe=0,ne=0,re=0,ae=0,ie=0,$=!0,se=[.03,.03,.03],le=[.12,.12,.12],ce=[.34,.34,.34],ue=[.7,.7,.7],fe=[1,1,1],he=1;const Te=()=>{const t=getComputedStyle(document.documentElement),n=K(t.getPropertyValue("--background"))??[1,1,1],l=K(t.getPropertyValue("--foreground"))??[.09,.09,.09],s=K(t.getPropertyValue("--ns-muted"))??[.55,.55,.55],u=K(t.getPropertyValue("--border"))??[.18,.18,.18],m=[0,0,0],k=[1,1,1];mt(n)<.5?(he=1,se=_(n,m,.45),le=_(u,n,.1),ce=_(s,u,.34),ue=_(l,s,.22),fe=_(l,k,.6)):(he=0,se=n,le=_(n,s,.3),ce=_(s,n,.22),ue=_(l,s,.52),fe=_(l,m,.25))};Te();const P=()=>{if(!r.gl||d<=0||p<=0)return;const t=v?Ee:y,n=2*Math.PI*Math.max(2,i)/d,l=d*.042,s=d*.062,u=1.65*2*Math.PI/(n*s);let m=!1,k=1/0;for(let Y=0;Y<J;Y++){const A=E[Y*4+2];A>=0&&t-A<=ke&&(m=!0,A<k&&(k=A))}r.v2("u_size",d,p),r.f("u_dpr",B),r.f("u_time",t),r.f("u_k",n),r.f("u_om",l*n),r.f("u_yc",p*.5),r.f("u_um",l),r.f("u_u0",s),r.f("u_trace",u),r.f("u_turb",Math.max(0,e)),r.f("u_strata",Math.max(0,a)),r.v4a("u_vort",E),r.f("u_vrad",Math.min(d,p)*.17),r.f("u_stir",m?1:0),r.f("u_vminborn",m?k:0),r.v3("u_c0",se),r.v3("u_c1",le),r.v3("u_c2",ce),r.v3("u_c3",ue),r.v3("u_c4",fe),r.f("u_dark",he),r.draw(h.width,h.height)},de=t=>{const n=t-Z,l=Math.min(.05,Math.max(0,n/1e3));Z=t,y+=l*o,rt(l),P();const s=Math.min(50,n);if(G<ot){G+=s,M=16.7,R=0,S=0,V=requestAnimationFrame(de);return}M+=(s-M)*(1-Math.exp(-s/120)),M>tt?(R+=s,S=0):(S+=s,R=0);const u=R>900&&D<Pe.length-1,m=S>N&&D>0;(u||m)&&(D+=u?1:-1,u&&(N=Math.min(64e3,N*2)),R=0,S=0,M=16.7,De()),V=requestAnimationFrame(de)},pe=()=>{Q||Le||(Q=!0,Z=performance.now(),G=0,V=requestAnimationFrame(de))},F=()=>{cancelAnimationFrame(V),Q=!1},De=()=>{if(d<2||p<2)return;B=Math.min(window.devicePixelRatio||1,gt)*Pe[D];const t=Math.round(d*B),n=Math.round(p*B);(h.width!==t||h.height!==n)&&(h.width=t,h.height=n),h.style.width=`${d}px`,h.style.height=`${p}px`,P()},me=()=>{const t=c.getBoundingClientRect();t.width<2||t.height<2||(d=t.width,p=t.height,ae=t.left,ie=t.top,$=!1,D=0,R=0,S=0,G=0,N=8e3,M=16.7,De(),P())},nt=()=>{if(!$)return;const t=c.getBoundingClientRect();ae=t.left,ie=t.top,$=!1},j=()=>{$=!0},ve=(t,n,l,s)=>{const u=X*4;E[u]=t,E[u+1]=n,E[u+2]=l,E[u+3]=s*U,X=(X+1)%J,U=-U},rt=t=>{if(!L||t<=0)return;const n=1-Math.exp(-t/ft);q+=((g-ee)/t-q)*n,C+=((x-te)/t-C)*n,ee=g,te=x;let l=q*be,s=C*be;const u=Math.hypot(l,s);u>ye&&(l=l/u*ye,s=s/u*ye);const m=1-Math.exp(-t/be);w+=(g+l-w)*m,b+=(x+s-b)*m;const k=w-oe,Y=b-ne,A=Math.hypot(k,Y),it=y-re;if(A<ht&&!(it>=dt&&A>1.5))return;const st=Math.min(1400,Math.hypot(q,C)),lt=Math.min(1,.22+st/900)*Math.max(0,f)*Math.min(d,p)*.32;ve(w,b,y,lt),oe=w,ne=b,re=y},ge=()=>{E.fill(-1),X=0,U=1,ve(w,b,Ee-.5,Math.max(0,f)*Math.min(d,p)*.32),P()};let z=0;const at=()=>{z||(z=requestAnimationFrame(()=>{z=0,ge()}))},xe=t=>{nt();const n=typeof t.getCoalescedEvents=="function"?t.getCoalescedEvents():null,l=n&&n.length>0?n[n.length-1]:t;g=l.clientX-ae,x=l.clientY-ie},_e=()=>{w=g,b=x,q=0,C=0,ee=g,te=x,oe=g,ne=x,re=y,L=!0},qe=t=>{xe(t),_e(),v&&ge()},Ce=()=>{L=!1},Fe=t=>{xe(t),L||_e(),v&&(w=g,b=x,at())},ze=t=>{if(xe(t),_e(),v){ge();return}ve(g,x,y,Math.max(0,f)*Math.min(d,p)*.4)},Ye=t=>{t.pointerType!=="mouse"&&(L=!1)},Ie=()=>{L=!1};if(!r.init())return;const Oe=new ResizeObserver(me);Oe.observe(c),me(),c.addEventListener("pointerenter",qe),c.addEventListener("pointerleave",Ce),c.addEventListener("pointermove",Fe),c.addEventListener("pointerdown",ze),c.addEventListener("pointerup",Ye),c.addEventListener("pointercancel",Ie),window.addEventListener("scroll",j,{passive:!0,capture:!0}),window.addEventListener("resize",j,{passive:!0});const H=window.matchMedia("(prefers-reduced-motion: reduce)");let Ve=H.matches;const W=()=>{Ve||T.current?(v=!0,F(),P()):(v=!1,pe())},Be=()=>{Ve=H.matches,W()};H.addEventListener("change",Be);let we=!0;const Ge=new IntersectionObserver(t=>{we=t.some(n=>n.isIntersecting),we?!v&&!document.hidden&&pe():F()},{threshold:0});Ge.observe(c);const Ne=()=>{document.hidden?F():!v&&we&&pe()};document.addEventListener("visibilitychange",Ne),W();let Xe=T.current,Ue=0;const $e=()=>{T.current!==Xe&&(Xe=T.current,W()),Ue=window.setTimeout($e,140)};$e();const je=new MutationObserver(()=>{Te(),v&&P()});je.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const He=t=>{t.preventDefault(),F()},We=()=>{r.init(!0)&&(me(),W())};return h.addEventListener("webglcontextlost",He),h.addEventListener("webglcontextrestored",We),()=>{Le=!0,Oe.disconnect(),Ge.disconnect(),H.removeEventListener("change",Be),document.removeEventListener("visibilitychange",Ne),je.disconnect(),h.removeEventListener("webglcontextlost",He),h.removeEventListener("webglcontextrestored",We),c.removeEventListener("pointerenter",qe),c.removeEventListener("pointerleave",Ce),c.removeEventListener("pointermove",Fe),c.removeEventListener("pointerdown",ze),c.removeEventListener("pointerup",Ye),c.removeEventListener("pointercancel",Ie),window.removeEventListener("scroll",j,{capture:!0}),window.removeEventListener("resize",j),window.clearTimeout(Ue),z&&cancelAnimationFrame(z),F();const t=r.gl?.getExtension("WEBGL_lose_context");r.destroy(),h.isConnected||t?.loseContext()}},[i,o,e,a,f]),O.jsxs("div",{ref:Re,"data-shear-billow":et,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${Qe}`,style:Ze,children:[O.jsx("canvas",{ref:Se,"aria-hidden":"true",className:"absolute inset-0 block"}),Me?O.jsx("div",{className:"relative z-[1] h-full w-full",children:Me}):null]})}Je.displayName="ShearBillow";function _t(){return O.jsx("div",{className:"ns-stage",children:O.jsx(Je,{children:"示例"})})}export{_t as default};
