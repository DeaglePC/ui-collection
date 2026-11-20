import{r as i,j as o}from"./client-CsvIHAk3.js";const Qe=[{id:"starter",name:"Starter",tagline:"A low crest. Holds a trickle, spills early.",base:19,included:5e4,overagePer1k:.9,features:["1 project","7-day retention","Email alerts","Community support"],cta:"Start on Starter"},{id:"growth",name:"Growth",tagline:"The working crest. Most teams sit under it.",base:79,included:4e5,overagePer1k:.45,features:["10 projects","90-day retention","Alert routing","Priority support"],cta:"Choose Growth"},{id:"scale",name:"Scale",tagline:"A high crest. Dry until the reservoir is full.",base:249,included:2e6,overagePer1k:.22,features:["Unlimited projects","2-year retention","Custom routing","Named engineer"],cta:"Talk to sales"}],Ze=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,Ae=7.3,Ee=.4,Ue=[0,1,0],et="row-start-1",tt="row-start-3",st="clamp(3.5rem,10vh,7rem)",Pe="hidden sm:[@media(min-height:760px)]:block",ot=`
precision highp float;

uniform vec2 u_res;
uniform float u_dpr;
uniform float u_time;
uniform float u_level;
uniform float u_bodyTop;
uniform float u_bodyBot;
uniform float u_slosh;
uniform float u_tick0;
uniform float u_tickStep;
uniform vec4 u_cols[3];
uniform vec4 u_notch[3];
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return s;
}

// One surface for the whole reservoir: three harmonics plus a drifting fbm
// term, all scaled by the slosh the level spring is carrying — plus, over any
// dam whose crest is already drowned, the standing boil a submerged weir
// actually throws. That boil is the surface-level tell that this plan is
// spilling, and unlike the pour down the face it sits in open water where
// nothing can hide it.
float surfH(float x) {
  float t = u_time;
  float amp = 2.4 + u_slosh * 11.0;
  float h = sin(x * 0.0113 + t * 0.85) * amp
          + sin(x * 0.0271 - t * 1.35) * amp * 0.48
          + sin(x * 0.0605 + t * 2.05) * amp * 0.2
          + (fbm(vec2(x * 0.011, t * 0.33)) - 0.5) * amp * 1.5;
  for (int i = 0; i < 3; i++) {
    vec4 c = u_cols[i];
    vec4 n = u_notch[i];
    float inX = smoothstep(-26.0, 14.0, x - n.x) * smoothstep(-26.0, 14.0, n.x + n.y - x);
    h -= inX * c.w * (3.5
       + sin(x * 0.085 - t * 4.2) * 2.6
       + (fbm(vec2(x * 0.05, t * 1.7)) - 0.5) * 9.0);
  }
  return u_level + h;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x / u_dpr, u_res.y - gl_FragCoord.y / u_dpr);
  float bodyH = max(1.0, u_bodyBot - u_bodyTop);

  // --- dry field ---------------------------------------------------------
  float gy = clamp((p.y - u_bodyTop) / bodyH, 0.0, 1.0);
  vec3 col = mix(u_c0, mix(u_c0, u_c1, 0.42), gy * 0.55);

  // decade rules: the gauge the rail is labelled against, run full width so
  // the whole frame reads as one instrument rather than a picture with a
  // slider beside it
  float rules = 0.0;
  for (int k = 0; k < 8; k++) {
    float f = u_tick0 + float(k) * u_tickStep;
    float ty = u_bodyBot - f * bodyH;
    float major = mod(float(k), 3.0) < 0.5 ? 1.0 : 0.45;
    rules = max(rules, (1.0 - smoothstep(0.0, 1.1, abs(p.y - ty))) * major * step(f, 1.001));
  }
  col = mix(col, mix(u_c1, u_c2, 0.5), rules * 0.55);

  // --- piers -------------------------------------------------------------
  float pier = 0.0;
  float edge = 0.0;
  float crest = 0.0;
  float nappe = 0.0;
  float foam = 0.0;
  float lip = 0.0;
  float crestShadow = 0.0;

  for (int i = 0; i < 3; i++) {
    vec4 c = u_cols[i];
    vec4 n = u_notch[i];
    float x0 = c.x;
    float x1 = c.x + c.y;
    float cy = c.z;
    float sp = c.w;

    float inX = smoothstep(-1.0, 1.0, p.x - x0) * smoothstep(-1.0, 1.0, x1 - p.x);
    // The spillway bay: the crest number a plan advertises is the elevation of
    // this notch, and the non-overflow shoulders either side stand a parapet
    // above it — so the pour has one lane, permanently clear of the type that
    // sits on the shoulder.
    float inN = smoothstep(-1.0, 1.0, p.x - n.x) * smoothstep(-1.0, 1.0, n.x + n.y - p.x);
    float topY = mix(cy - 22.0, cy, inN);
    float below = smoothstep(-1.0, 1.5, p.y - topY) * smoothstep(2.0, -1.0, p.y - u_bodyBot);
    float body = inX * below;
    pier = max(pier, body);

    float e = max(1.0 - smoothstep(0.4, 1.6, abs(p.x - x0)),
                  1.0 - smoothstep(0.4, 1.6, abs(p.x - x1)));
    e = max(e, max(1.0 - smoothstep(0.4, 1.6, abs(p.x - n.x)),
                   1.0 - smoothstep(0.4, 1.6, abs(p.x - n.x - n.y)))
              * smoothstep(0.0, 3.0, p.y - cy + 22.0) * (1.0 - smoothstep(18.0, 26.0, p.y - cy + 22.0)));
    edge = max(edge, e * below);

    crest = max(crest, inX * (1.0 - smoothstep(1.2, 3.2, abs(p.y - topY))));
    crestShadow = max(crestShadow, inX * (1.0 - smoothstep(2.0, 16.0, p.y - topY)) * step(topY, p.y));

    if (sp > 0.002) {
      body *= inN;
      float fall = clamp((p.y - cy) / max(60.0, u_bodyBot - cy), 0.0, 1.0);
      // vertical striations scrolling down the face, faster the harder it pours
      float streak = fbm(vec2(p.x * 0.055, p.y * 0.004 - u_time * (1.1 + 2.2 * sp)));
      float ribs = 0.5 + 0.5 * sin(p.x * 0.075 + fbm(vec2(p.x * 0.012, u_time * 0.35)) * 5.0);
      float sheet = body * sp * (0.22 + 1.15 * streak) * (0.45 + 0.55 * ribs) * (0.55 + 0.5 * fall);
      nappe = max(nappe, sheet);

      // the lip: a thick bright roll of water right at the crest, and the
      // clear glassy tongue just under it before the sheet breaks up
      lip = max(lip, inN * sp * (1.0 - smoothstep(0.0, 6.0 + 11.0 * sp, abs(p.y - cy - 4.0))));

      // the apron: a boiling hydraulic jump where the sheet lands
      float boil = fbm(vec2(p.x * 0.045, (u_bodyBot - p.y) * 0.05 - u_time * 1.5))
                 + 0.6 * fbm(vec2(p.x * 0.12 + 11.0, u_time * 2.1));
      float apron = body * sp * exp(-abs(p.y - u_bodyBot + 6.0) * 0.028) * (0.25 + 0.95 * boil);
      foam = max(foam, apron);
    }
  }

  // masonry courses, so a submerged pier still reads as built structure
  float course = 1.0 - smoothstep(0.0, 1.4, abs(mod(p.y, 19.0) - 9.5));
  float joint = 1.0 - smoothstep(0.0, 1.4, abs(mod(p.x + floor(p.y / 19.0) * 26.0, 52.0) - 26.0));
  vec3 pierCol = mix(u_c1, u_c2, 0.26);
  pierCol = mix(pierCol, mix(u_c1, u_c0, 0.6), max(course, joint * (1.0 - course)) * 0.5);
  pierCol = mix(pierCol, u_c0, clamp((p.y - u_bodyTop) / bodyH, 0.0, 1.0) * 0.3);
  col = mix(col, pierCol, pier);
  col = mix(col, mix(u_c2, u_c3, 0.3), edge * 0.5);

  // --- water -------------------------------------------------------------
  float hs = surfH(p.x);
  float sub = smoothstep(-1.0, 1.0, p.y - hs);
  float d = max(0.0, p.y - hs);
  float caust = sin(d * 0.048 - u_time * 0.8 + p.x * 0.0072
                    + fbm(vec2(p.x * 0.0055, d * 0.0055 - u_time * 0.11)) * 3.6);
  float caust2 = sin(d * 0.017 + u_time * 0.45 - p.x * 0.0033
                    + fbm(vec2(p.x * 0.0032 + 4.0, d * 0.003)) * 2.4);
  vec3 water = mix(u_c1, u_c2, 0.24 + 0.42 * (caust * 0.5 + 0.5) * exp(-d * 0.0016));
  water = mix(water, u_c2, (caust2 * 0.5 + 0.5) * 0.16);
  water = mix(water, u_c0, clamp(d * 0.0008, 0.0, 0.38));
  col = mix(col, water, sub * 0.86);

  // Rising bubbles, biased toward whichever dam is pouring: the aeration a
  // drowned crest drags under is the second surface-level tell, and unlike the
  // face pour it happens in open water.
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    float pick = hash(vec2(fi, 3.0));
    float bx = fract(pick + fi * 0.19) * u_res.x;
    for (int k = 0; k < 3; k++) {
      vec4 c = u_cols[k];
      bx = mix(bx, c.x + c.y * (0.15 + 0.7 * pick), step(0.55, c.w) * step(hash(vec2(fi, 5.0 + float(k))), 0.42));
    }
    float ph = fract(u_time * (0.05 + 0.03 * fi) + hash(vec2(fi, 7.0)));
    float by = mix(u_bodyBot, hs, ph);
    float r = 1.6 + 2.4 * hash(vec2(fi, 11.0));
    vec2 dv = p - vec2(bx + sin(u_time * 0.9 + fi) * 7.0, by);
    float g = exp(-dot(dv, dv) / (r * r * 2.0));
    col = mix(col, u_c3, g * 0.26 * sub * (1.0 - ph * 0.3));
  }

  // --- surface line ------------------------------------------------------
  float men = 1.0 - smoothstep(0.0, 2.4, abs(p.y - hs));
  col = mix(col, u_c3, men * 0.6);
  float glow = exp(-max(0.0, hs - p.y) * 0.05) * (1.0 - sub);
  col = mix(col, mix(u_c2, u_c3, 0.45), glow * 0.12);

  // --- pour --------------------------------------------------------------
  col = mix(col, mix(u_c2, u_c3, 0.55), clamp(nappe, 0.0, 1.0) * 0.95);
  col = mix(col, mix(u_c2, u_c3, 0.85), clamp(lip, 0.0, 1.0) * 0.8);
  col = mix(col, u_c3, clamp(foam, 0.0, 1.0) * 0.6);
  // the crest reads as an edge: a bright sill with its own shadow under it
  col = mix(col, u_c0, crestShadow * 0.5);
  col = mix(col, mix(u_c2, u_c3, 0.85), crest * 0.9);

  // grain + a mild vignette so the frame edges never out-value the type
  col += (hash(p * 1.7 + fract(u_time)) - 0.5) * 0.013;
  vec2 q = (p / u_res - 0.5) * vec2(1.25, 1.0);
  col = mix(col, u_c0, clamp(dot(q, q) * 0.55, 0.0, 0.3));

  gl_FragColor = vec4(col, 1.0);
}
`;function J(n){const s=n.trim(),t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(s);if(t){let d=t[1];d.length===3&&(d=d.split("").map(I=>I+I).join(""));const w=parseInt(d,16);return[(w>>16&255)/255,(w>>8&255)/255,(w&255)/255]}const u=/^rgba?\(([^)]+)\)$/i.exec(s);if(u){const d=u[1].split(/[\s,/]+/).filter(Boolean).map(Number);if(d.length>=3&&d.every(w=>Number.isFinite(w)))return[d[0]/255,d[1]/255,d[2]/255]}return null}function E(n,s,t){return[n[0]+(s[0]-n[0])*t,n[1]+(s[1]-n[1])*t,n[2]+(s[2]-n[2])*t]}function rt([n,s,t]){return .2126*n+.7152*s+.0722*t}function Te(n,s,t){const u=n.createShader(s);if(n.shaderSource(u,t),n.compileShader(u),!n.getShaderParameter(u,n.COMPILE_STATUS)){const d=n.getShaderInfoLog(u);throw n.deleteShader(u),new Error(`weir-crest: shader compile failed: ${d??""}`)}return u}class at{constructor(s,t){this.canvas=s,this.frag=t,this.gl=null,this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.locs=new Map}init(s=!1){const t=this.canvas.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return!1;this.gl=t;try{this.vs=Te(t,t.VERTEX_SHADER,Ze),this.fs=Te(t,t.FRAGMENT_SHADER,this.frag);const d=t.createProgram();if(!d)return this.abandon(s),!1;if(this.program=d,t.attachShader(d,this.vs),t.attachShader(d,this.fs),t.linkProgram(d),!t.getProgramParameter(d,t.LINK_STATUS))return this.abandon(s),!1}catch{return this.abandon(s),!1}t.useProgram(this.program),this.buffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const u=t.getAttribLocation(this.program,"a_pos");return t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0),this.locs.clear(),!0}abandon(s){const t=s?null:this.gl?.getExtension("WEBGL_lose_context");this.destroy(),t?.loseContext()}loc(s){return this.locs.has(s)||this.locs.set(s,this.gl.getUniformLocation(this.program,s)),this.locs.get(s)??null}f(s,t){this.gl?.uniform1f(this.loc(s),t)}v2(s,t,u){this.gl?.uniform2f(this.loc(s),t,u)}v3(s,t){this.gl?.uniform3f(this.loc(s),t[0],t[1],t[2])}v4a(s,t){this.gl?.uniform4fv(this.loc(s),t)}draw(s,t){const u=this.gl;!u||!this.program||(u.viewport(0,0,s,t),u.drawArrays(u.TRIANGLES,0,6))}destroy(){const s=this.gl;s&&(this.buffer&&s.deleteBuffer(this.buffer),this.program&&s.deleteProgram(this.program),this.vs&&s.deleteShader(this.vs),this.fs&&s.deleteShader(this.fs),this.buffer=null,this.program=null,this.vs=null,this.fs=null,this.locs.clear(),this.gl=null)}}function F(n){if(n>=1e6){const s=n/1e6;return`${s>=10?Math.round(s):Math.round(s*10)/10}M`}if(n>=1e3){const s=n/1e3;return`${s>=10?Math.round(s):Math.round(s*10)/10}k`}return`${Math.round(n)}`}function B(n){return`$${Math.round(n).toLocaleString("en-US")}`}function Le(n){return Math.round(n).toLocaleString("en-US")}function nt({plans:n=Qe,minUsage:s=1e4,maxUsage:t=5e6,defaultUsage:u=3e5,eyebrow:d="ns-ui / weir-crest",headline:w=`Raise the level.
See which dam holds.`,footnote:I="Every plan is a dam. Its crest is the volume it holds without overage — past the crest it pours, and you pay for the spill.",annualDiscount:O=.2,onChange:Q,className:$e=""}){const Fe=i.useId(),Z=i.useRef(null),me=i.useRef(null),D=i.useRef(null),he=i.useRef([]),fe=i.useRef([]),[h,Be]=i.useState(u),[v,Ie]=i.useState(!1),[Oe,De]=i.useState(""),N=Math.log(s),He=Math.log(t),j=Math.max(1e-6,He-N),_=i.useCallback(e=>(Math.log(Math.min(t,Math.max(s,e)))-N)/j,[N,j,s,t]),H=i.useCallback(e=>Math.exp(N+Math.min(1,Math.max(0,e))*j),[N,j]),k=i.useMemo(()=>n.map(e=>{const a=e.base*(v?1-O:1),r=Math.max(0,h-e.included)/1e3*e.overagePer1k;return{plan:e,base:a,over:r,total:a+r,frac:_(e.included)}}),[n,h,v,O,_]),Ve=i.useMemo(()=>{let e=0;for(let a=1;a<k.length;a++)k[a].total<k[e].total&&(e=a);return e},[k]),U=_(h),pe=i.useRef(U);pe.current=U;const xe=i.useRef(k.map(e=>e.frac));xe.current=k.map(e=>e.frac);const ee=i.useRef([0,1]);ee.current=[(Math.ceil(Math.log10(s))*Math.LN10-N)/j,Math.LN10/j];const P=i.useCallback((e,a=v)=>{const r=n.reduce((p,f)=>{const g=f.base*(a?1-O:1)+Math.max(0,e-f.included)/1e3*f.overagePer1k;return g<p.t?{p:f,t:g}:p},{p:n[0],t:Number.POSITIVE_INFINITY});De(`${Le(e)} events per month. Cheapest plan ${r.p.name}, ${B(r.t)} per month${a?", billed annually":""}.`)},[n,v,O]),C=i.useCallback((e,a)=>{const r=Math.min(t,Math.max(s,e));Be(r),Q?.(r,v),a&&P(r)},[t,s,Q,v,P]),V=i.useRef(!1),Y=i.useCallback(e=>{const a=D.current;if(!a)return h;const r=a.getBoundingClientRect(),p=1-(e-r.top)/Math.max(1,r.height);return H(p)},[h,H]),Ye=i.useCallback(e=>{const a=D.current;if(a){V.current=!0;try{a.setPointerCapture(e.pointerId)}catch{}a.focus(),C(Y(e.clientY),!1)}},[C,Y]),Ge=i.useCallback(e=>{V.current&&C(Y(e.clientY),!1)},[C,Y]),be=i.useCallback(e=>{if(V.current){V.current=!1;try{D.current?.releasePointerCapture(e.pointerId)}catch{}P(h)}},[P,h]),We=i.useCallback(e=>{let r=_(h);switch(e.key){case"ArrowUp":case"ArrowRight":r+=.02;break;case"ArrowDown":case"ArrowLeft":r-=.02;break;case"PageUp":r+=.02*5;break;case"PageDown":r-=.02*5;break;case"Home":r=0;break;case"End":r=1;break;default:return}e.preventDefault();const p=H(Math.min(1,Math.max(0,r)));C(p,!0)},[C,_,h,H]);i.useEffect(()=>{const e=Z.current,a=me.current;if(!e||!a)return;const r=new at(a,ot);if(!r.init())return;let p=0,f=!1,G=!1,g=!1,te=!0,ge=0,ve=0,W=1,se=performance.now(),oe=Ae,R=0,y=0;const T=new Float32Array(12),re=new Float32Array(12),ae=[];let M=-1,L=0,q=0,ne=[.04,.04,.04],le=[.14,.14,.14],ie=[.5,.5,.5],ce=[.93,.93,.93];const X=()=>{const l=getComputedStyle(document.documentElement),c=J(l.getPropertyValue("--background"))??[1,1,1],x=J(l.getPropertyValue("--foreground"))??[.09,.09,.09],m=J(l.getPropertyValue("--ns-muted"))??[.55,.55,.55],b=J(l.getPropertyValue("--border"))??[.2,.2,.2];rt(c)<.5?(ne=E(c,[0,0,0],.45),le=E(c,b,.9),ie=E(m,x,.15),ce=x):(ne=E(c,x,.035),le=E(c,x,.34),ie=E(c,x,.62),ce=x),r.v3("u_c0",ne),r.v3("u_c1",le),r.v3("u_c2",ie),r.v3("u_c3",ce)},ye=()=>{const l=e.getBoundingClientRect();let c=-1/0,x=1/0;ae.length=0;for(let m=0;m<3;m++){const b=he.current[m]?.getBoundingClientRect();ae.push(b?{x:b.left-l.left,w:b.width}:{x:0,w:0});const A=fe.current[m]?.getBoundingClientRect();A&&(c=Math.max(c,A.top-l.top),x=Math.min(x,A.bottom-l.top))}R=Number.isFinite(c)?c:l.height*.35,y=Number.isFinite(x)?x:l.height*.9,y-R<40&&(y=R+40)},ue=()=>{const l=Math.max(1,Math.round(e.clientWidth)),c=Math.max(1,Math.round(e.clientHeight));W=Math.min(window.devicePixelRatio||1,1.5),ge=l,ve=c,a.style.width=`${l}px`,a.style.height=`${c}px`,a.width=Math.round(l*W),a.height=Math.round(c*W),ye(),M=-1,S(0)},Xe=()=>{const l=Math.max(1,y-R);return y-pe.current*l},S=l=>{const c=Math.max(1,y-R),x=Xe();if(M<0||g)M=x,L=0,q=0;else{const m=-60*(M-x)-11*L;L+=m*l,M+=L*l,q+=(Math.min(1,Math.abs(L)/900)-q)*Math.min(1,l*6)}for(let m=0;m<3;m++){const b=ae[m]??{x:0,w:0},A=y-(xe.current[m]??0)*c,Ke=Math.min(1,Math.max(0,(A-M)/70));T[m*4]=b.x,T[m*4+1]=b.w,T[m*4+2]=A,T[m*4+3]=Ke;const Je=b.w*Ee;re[m*4]=Ue[m]===0?b.x+b.w*.05:b.x+b.w*(.95-Ee),re[m*4+1]=Je}r.v2("u_res",ge,ve),r.f("u_dpr",W),r.f("u_time",oe),r.f("u_level",M),r.f("u_bodyTop",R),r.f("u_bodyBot",y),r.f("u_slosh",q),r.f("u_tick0",ee.current[0]),r.f("u_tickStep",ee.current[1]),r.v4a("u_cols",T),r.v4a("u_notch",re),r.draw(a.width,a.height)},we=l=>{if(G)return;const c=Math.min(.05,Math.max(0,(l-se)/1e3));se=l,oe+=c,S(c),p=requestAnimationFrame(we)},z=()=>{f||G||g||!te||document.hidden||(f=!0,se=performance.now(),p=requestAnimationFrame(we))},$=()=>{f=!1,p&&cancelAnimationFrame(p),p=0};X(),ue();const K=window.matchMedia("(prefers-reduced-motion: reduce)"),de=()=>{g=K.matches,g?($(),oe=Ae,S(0)):z()};g=K.matches,de();const _e=new ResizeObserver(ue);_e.observe(e);const ke=new IntersectionObserver(l=>{te=l.some(c=>c.isIntersecting),te?z():$()},{threshold:0});ke.observe(e);const Me=()=>{document.hidden?$():z()};document.addEventListener("visibilitychange",Me),K.addEventListener("change",de);const Ne=new MutationObserver(()=>{X(),(g||!f)&&S(0)});Ne.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style"]});const je=()=>{X(),(g||!f)&&S(0)},Ce=window.matchMedia("(prefers-color-scheme: dark)");Ce.addEventListener("change",je);const Re=l=>{l.preventDefault(),$()},Se=()=>{r.init(!0)&&(X(),ue(),z())};a.addEventListener("webglcontextlost",Re),a.addEventListener("webglcontextrestored",Se);const ze=()=>{ye(),(g||!f)&&S(0)};return e.__weirPoke=ze,()=>{G=!0,$(),_e.disconnect(),ke.disconnect(),Ne.disconnect(),K.removeEventListener("change",de),Ce.removeEventListener("change",je),document.removeEventListener("visibilitychange",Me),a.removeEventListener("webglcontextlost",Re),a.removeEventListener("webglcontextrestored",Se),delete e.__weirPoke;const l=r.gl?.getExtension("WEBGL_lose_context");r.destroy(),a.isConnected||l?.loseContext()}},[]),i.useEffect(()=>{Z.current?.__weirPoke?.()},[h,v,n]);const qe=i.useMemo(()=>{const e=[];for(let a=Math.ceil(Math.log10(s));Math.pow(10,a)<=t;a++){const r=Math.pow(10,a);e.push({v:r,f:_(r)})}return e},[s,t,_]);return o.jsxs("div",{ref:Z,className:`relative isolate h-full min-h-screen w-full overflow-hidden bg-background text-foreground ${$e}`,children:[o.jsx("canvas",{ref:me,"aria-hidden":"true",className:"absolute inset-0 block h-full w-full"}),o.jsxs("div",{className:"relative z-10 flex h-full min-h-screen flex-col gap-4 px-4 py-5 sm:px-8 sm:py-7",children:[o.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4",children:[o.jsxs("div",{className:"max-w-2xl rounded-md bg-background/78 px-4 py-3 backdrop-blur-md",children:[o.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.28em] text-ns-muted sm:text-[11px]",children:d}),o.jsx("h2",{className:"mt-2 whitespace-pre-line text-[clamp(1.6rem,4.2vw,3.1rem)] font-medium leading-[0.98] tracking-tight text-foreground",children:w})]}),o.jsxs("div",{className:"flex items-end gap-4 rounded-md bg-background/78 px-4 py-3 backdrop-blur-md",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.24em] text-ns-muted",children:"Volume / month"}),o.jsx("p",{className:"mt-1 font-mono text-2xl leading-none tracking-tight text-foreground tabular-nums sm:text-3xl",children:F(h)})]}),o.jsxs("fieldset",{className:"border-0 p-0",children:[o.jsx("legend",{className:"sr-only",children:"Billing term"}),o.jsx("div",{className:"flex overflow-hidden rounded-sm border border-border",children:[{label:"Monthly",value:!1},{label:"Annual",value:!0}].map(e=>o.jsxs("label",{className:`cursor-pointer px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-150 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ns-accent ${v===e.value?"bg-foreground text-background":"bg-background/60 text-ns-muted hover:text-foreground"}`,children:[o.jsx("input",{type:"radio",name:`${Fe}-term`,className:"sr-only",checked:v===e.value,onChange:()=>{Ie(e.value),Q?.(h,e.value),P(h,e.value)}}),e.label]},e.label))})]})]})]}),o.jsxs("div",{className:"relative flex flex-1 gap-3 sm:gap-5",children:[o.jsx("div",{className:"flex w-16 shrink-0 flex-col sm:w-24",children:o.jsxs("div",{ref:D,"data-weir-track":"",role:"slider",tabIndex:0,"aria-label":"Monthly event volume","aria-orientation":"vertical","aria-valuemin":s,"aria-valuemax":t,"aria-valuenow":Math.round(h),"aria-valuetext":`${Le(h)} events per month`,onPointerDown:Ye,onPointerMove:Ge,onPointerUp:be,onPointerCancel:be,onKeyDown:We,className:"relative min-h-0 flex-1 cursor-ns-resize touch-none rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent",children:[o.jsx("span",{"aria-hidden":"true",className:"absolute inset-y-0 right-2 w-px bg-border"}),qe.map(e=>o.jsxs("span",{"aria-hidden":"true",className:"absolute right-2 flex -translate-y-1/2 items-center gap-1",style:{top:`${(1-e.f)*100}%`},children:[o.jsx("span",{className:"font-mono text-[10px] tabular-nums text-ns-muted",children:F(e.v)}),o.jsx("span",{className:"block h-px w-1.5 bg-border"})]},e.v)),o.jsx("span",{"aria-hidden":"true",className:"absolute inset-x-0 -translate-y-1/2",style:{top:`${(1-U)*100}%`},children:o.jsxs("span",{className:"flex items-center justify-end",children:[o.jsx("span",{className:"mr-1 bg-background/78 px-1 font-mono text-[10px] leading-tight tabular-nums text-foreground backdrop-blur-sm",children:F(h)}),o.jsx("span",{className:"block h-2.5 w-2.5 shrink-0 -translate-x-[3px] rotate-45 border border-foreground bg-background"})]})})]})}),o.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-3 gap-3 sm:gap-5",style:{gridTemplateRows:`auto minmax(${st},1fr) auto`},children:k.map((e,a)=>{const r=a===Ve,p=h>e.plan.included;return o.jsxs("article",{ref:f=>{he.current[a]=f},"aria-label":`${e.plan.name} plan`,className:"relative row-span-3 grid min-h-0 grid-rows-subgrid gap-3 sm:gap-5",children:[o.jsxs("div",{className:`overflow-hidden rounded-md bg-background/78 p-3 backdrop-blur-md sm:p-4 ${et}`,children:[o.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[o.jsx("h3",{className:"text-base font-medium tracking-tight text-foreground sm:text-lg",children:e.plan.name}),r?o.jsx("span",{className:"shrink-0 rounded-sm border border-foreground px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground",children:"Cheapest here"}):null]}),o.jsx("p",{className:`mt-1 text-xs leading-snug text-ns-muted ${Pe}`,children:e.plan.tagline}),o.jsxs("p",{className:"mt-3 font-mono text-[clamp(1.5rem,3.4vw,2.6rem)] leading-none tracking-tight text-foreground tabular-nums",children:[B(e.total),o.jsx("span",{className:"ml-1 font-sans text-xs text-ns-muted",children:"/mo"})]}),o.jsxs("p",{className:"mt-2 font-mono text-[10px] leading-relaxed text-ns-muted tabular-nums sm:text-[11px]",children:[B(e.base)," base",p?` + ${B(e.total-Math.round(e.base))} spill · ${F(h-e.plan.included)} over the crest`:" · holds, no spill"]})]}),o.jsx("div",{ref:f=>{fe.current[a]=f},className:"relative min-h-0 flex-1",children:o.jsx("span",{className:"pointer-events-none absolute inset-x-0 -translate-y-full pb-1 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-ns-muted",style:{top:`${(1-e.frac)*100}%`},children:o.jsxs("span",{className:"bg-background/78 px-1.5 py-0.5 backdrop-blur-sm",children:["Crest · ",F(e.plan.included)," included"]})})}),o.jsxs("div",{className:`overflow-hidden rounded-md bg-background/78 p-3 backdrop-blur-md sm:p-4 ${tt}`,children:[o.jsx("ul",{className:`space-y-1 text-xs text-ns-muted ${Pe}`,children:e.plan.features.map(f=>o.jsxs("li",{className:"flex gap-2",children:[o.jsx("span",{"aria-hidden":"true",className:"mt-[7px] h-px w-2.5 shrink-0 bg-border"}),o.jsx("span",{children:f})]},f))}),o.jsxs("p",{className:"font-mono text-[10px] uppercase tracking-[0.18em] text-ns-muted sm:mt-3",children:[B(e.plan.overagePer1k*1e3)," per million over"]}),o.jsx("button",{type:"button",className:`mt-2 w-full rounded-sm px-3 py-2 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent sm:text-sm ${r?"bg-ns-accent text-white hover:bg-ns-accent-hover":"border border-border bg-background/70 text-foreground hover:bg-background"}`,children:e.plan.cta})]})]},e.plan.id)})})]}),o.jsx("p",{className:"max-w-3xl rounded-md bg-background/78 px-3 py-2 font-mono text-[10px] leading-relaxed text-ns-muted backdrop-blur-md sm:text-[11px]",children:I})]}),o.jsx("p",{"aria-live":"polite",className:"sr-only",children:Oe})]})}function it(){return o.jsx("div",{className:"ns-stage",children:o.jsx(nt,{onChange:()=>{}})})}export{it as default};
