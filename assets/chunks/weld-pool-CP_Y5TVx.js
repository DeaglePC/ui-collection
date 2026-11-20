import{r as j,j as V}from"./client-CsvIHAk3.js";const Tt=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,oe=20,$e=4,qe=.012,Mt=.06,Ge=24,vt=13,At=.016,Rt=.055,St=5,Pt=`
precision highp float;

#define TRAIL ${oe}
#define LOBES ${$e}

uniform vec2 u_size;        // css px
uniform float u_dpr;
uniform float u_time;
uniform float u_scale;
uniform float u_relief;
uniform sampler2D u_text;   // R = blurred bevel, G = sharp glyph mask
uniform float u_textAmt;
uniform vec4 u_trail[TRAIL]; // x,y css px, z = age in seconds (negative = slot unused), w = amplitude
uniform vec3 u_lobes[LOBES]; // x,y css px, z = radius css px
uniform float u_hover;       // 0..1 eased
uniform float u_wake;        // 0 when every trail slot has decayed
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform vec3 u_accent;
uniform float u_bias;
uniform float u_contrast;

float hash21(vec2 p) {
  p = fract(p * vec2(287.13, 419.71));
  p += dot(p, p + 27.31);
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
  float s = vnoise(p) * 0.62;
  s += vnoise(p * 2.07 + 11.3) * 0.31;
  return s;
}

float fbm3(vec2 p) {
  float s = vnoise(p) * 0.54;
  s += vnoise(p * 2.03 + 13.7) * 0.27;
  s += vnoise(p * 4.11 + 31.1) * 0.135;
  return s;
}

// Buoyant volumes rolling under the skin. Analytic, positions animated on the
// CPU, so this costs LOBES exp() calls and no noise.
float lobeField(vec2 p) {
  float s = 0.0;
  for (int i = 0; i < LOBES; i++) {
    vec2 d = (p - u_lobes[i].xy) / u_lobes[i].z;
    s += exp(-dot(d, d) * 1.1);
  }
  return s;
}

// Pointer wake: each sampled pointer position leaves a mexican-hat dent whose
// radius grows and whose amplitude decays, so a sweep drags a train of
// expanding rings through the pool instead of a single sticky blob.
//
// .w carries the interval of pointer travel the sample stands for, normalised
// to SAMPLE_REF_DT on the CPU. Summing amplitude-weighted rings makes the
// wake's depth track how the pointer moved rather than how often it was
// sampled, which is what lets the sampler run dense enough to look continuous.
float trailField(vec2 p) {
  // uniform-branch, so it is coherent across the whole draw: at rest — which is
  // the state the page spends most of its life in — the wake costs nothing
  if (u_wake <= 0.0) return 0.0;
  float s = 0.0;
  for (int i = 0; i < TRAIL; i++) {
    float age = u_trail[i].z;
    if (age < 0.0 || age > 1.9) continue;
    float rad = 30.0 + age * 165.0;
    vec2 d = (p - u_trail[i].xy) / rad;
    float r2 = dot(d, d);
    s += u_trail[i].w * (1.0 - r2 * 1.75) * exp(-r2 * 1.6) * exp(-age * 2.0);
  }
  return s;
}

vec2 flowWarp(vec2 q) {
  return vec2(
    fbm2(q + vec2(0.0, u_time * 0.055)),
    fbm2(q + vec2(3.71, -u_time * 0.043) + 2.13)
  );
}

// The single height field everything is differenced from.
float height(vec2 p, out float glyphSharp, out float glyphBlur) {
  float ref = min(u_size.x, u_size.y);
  vec2 q = p / (ref * 0.62) * u_scale;
  vec2 w = flowWarp(q);

  // headline first: its bevel gates everything else. Its lookup is displaced by
  // the same warp that drives the flow, so the letterforms shimmer like a
  // reflection on the pool rather than a decal pinned to it.
  vec2 uv = p / u_size + (w - 0.5) * 0.014;
  vec4 tex = texture2D(u_text, uv);
  glyphSharp = tex.g;
  glyphBlur = tex.r;
  // a glyph is a solid plate floating in a churning liquid, so the liquid's
  // own turbulence is damped to near-nothing across it. Without this gate the
  // pool's detail runs straight through the letters and the headline loses to
  // its own background at exactly the density that makes the pool worth having.
  float calm = 1.0 - 0.88 * tex.r;

  float base = fbm3(q * 1.18 + w * 1.05 + vec2(-u_time * 0.038, u_time * 0.021));
  float h = (base - 0.5) * 3.4 * mix(1.0, 0.35, tex.r);
  h += lobeField(p) * 2.2 * mix(1.0, 0.4, tex.r);

  // advected polish grain, deliberately ANISOTROPIC: sampled ~4x tighter across
  // the flow than along it, so the micro-structure reads as striations being
  // drawn out by a pour rather than as isotropic crumpled foil
  vec2 gq = (q + w * 0.55) * vec2(4.5, 17.0);
  h += (vnoise(gq + vec2(u_time * 0.22, -u_time * 0.6)) - 0.5) * 0.20 * calm;
  h += (vnoise(gq * 2.6 + vec2(-u_time * 0.4, u_time * 0.9)) - 0.5) * 0.07 * calm;

  h += tex.r * u_textAmt;

  h += trailField(p) * 1.9 * (0.4 + 0.6 * u_hover);
  return h;
}

float heightOnly(vec2 p) {
  float a; float b;
  return height(p, a, b);
}

// Analytic achromatic studio. sharp = 1 inside a glyph, where the surface is
// polished tighter: the strip light narrows and the banding gets finer, which
// is the entire reason inlaid type separates from the pool without a hue.
float strip(float el, float at, float width) {
  float d = (el - at) / width;
  return exp(-d * d);
}

float env(vec3 r, float sharp) {
  float el = r.y;
  float az = atan(r.x, r.z);
  // a five-source room. Density comes from the ENVIRONMENT having structure,
  // not from the height field having more noise: several narrow sources at
  // different elevations mean an almost-flat patch of surface still crosses
  // three or four reflection bands, which is what a real chrome sheet does.
  float L = 0.40;
  L += 0.26 * smoothstep(0.06, 0.68, el);
  L -= 0.24 * smoothstep(0.0, -0.58, el);
  L += 0.30 * strip(el, 0.13, mix(0.085, 0.038, sharp));
  L += 0.20 * strip(el, 0.42, mix(0.055, 0.026, sharp));
  L += 0.14 * strip(el, -0.28, 0.075);
  L += 0.10 * strip(el, -0.62, 0.05);
  // two vertical panels, slowly turning: the only source of horizontal
  // structure, and what keeps the frame from reading as pure horizon banding
  L += 0.11 * exp(-pow(sin(az * 1.0 + u_time * 0.09) / 0.42, 2.0));
  L += 0.07 * exp(-pow(sin(az * 2.0 - u_time * 0.06 + 1.1) / 0.30, 2.0));
  L += mix(0.028, 0.055, sharp) * sin(el * mix(14.0, 30.0, sharp) + az * 1.7);
  return L;
}

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.27, x));
  c = mix(c, u_c2, smoothstep(0.25, 0.55, x));
  c = mix(c, u_c3, smoothstep(0.52, 0.83, x));
  c = mix(c, u_c4, smoothstep(0.81, 1.0, x));
  return c;
}

void main() {
  // work in DOM-space px (y down) so pointer coords and the glyph texture
  // share one coordinate system with the field
  vec2 p = vec2(gl_FragCoord.x, u_size.y * u_dpr - gl_FragCoord.y) / u_dpr;
  float ref = min(u_size.x, u_size.y);

  float glyphSharp = 0.0;
  float glyphBlur = 0.0;
  float h0 = height(p, glyphSharp, glyphBlur);
  float eps = 1.35;
  float hx = heightOnly(p + vec2(eps, 0.0));
  float hy = heightOnly(p + vec2(0.0, eps));

  float k = u_relief / eps;
  vec3 n = normalize(vec3(-(hx - h0) * k, (hy - h0) * k, 1.0));

  vec2 vp = (p - u_size * 0.5) / ref;
  vec3 v = normalize(vec3(vp.x * 0.55, -vp.y * 0.55, 1.0));
  vec3 r = reflect(-v, n);

  float L = env(r, glyphSharp);

  // two drifting studio lights; the drift is slow enough to read as the room
  // turning rather than as a strobe
  vec3 l1 = normalize(vec3(-0.42 + 0.16 * sin(u_time * 0.17), 0.70, 0.56));
  vec3 l2 = normalize(vec3(0.62, 0.28 + 0.14 * sin(u_time * 0.13 + 1.9), 0.70));
  float s1 = pow(max(dot(r, l1), 0.0), mix(80.0, 240.0, glyphSharp));
  float s2 = pow(max(dot(r, l2), 0.0), mix(34.0, 110.0, glyphSharp));

  // brushed streaks: anisotropic micro-scratches stretched along x, sampled
  // once, modulating the environment rather than the albedo
  float brush = vnoise(vec2(p.x * 0.035, p.y * 1.85) + vec2(u_time * 0.05, 0.0));
  L += (brush - 0.5) * 0.055;

  float fres = pow(1.0 - max(dot(n, v), 0.0), 5.0);
  L += fres * 0.13;

  // contact shadow: the blurred bevel minus the sharp mask is exactly the
  // annulus of surface pulled up around each letter, and darkening it is what
  // makes the type sit IN the pool instead of hovering over it
  float skirt = max(glyphBlur - glyphSharp, 0.0);
  L -= skirt * 0.24;

  float Lc = clamp((L - 0.5) * u_contrast + 0.5 + u_bias, 0.0, 1.0);
  vec3 col = ramp(Lc);

  vec3 hot = mix(u_c4, u_accent, 0.13);
  col += hot * (s1 * (0.85 + 0.5 * glyphSharp) + s2 * 0.45);

  // mild vignette toward the deepest stop — full bleed, but the frame edges
  // stop competing with the headline
  float vig = smoothstep(0.58, 1.18, length(vp * vec2(1.0, 1.35)));
  col = mix(col, u_c0, vig * 0.32);

  gl_FragColor = vec4(col, 1.0);
}
`;function te(l){const o=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(l.trim());if(!o)return null;let t=o[1];t.length===3&&(t=t.split("").map(u=>u+u).join(""));const c=parseInt(t,16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]}function O(l,o,t){return[l[0]+(o[0]-l[0])*t,l[1]+(o[1]-l[1])*t,l[2]+(o[2]-l[2])*t]}function kt([l,o,t]){return .2126*l+.7152*o+.0722*t}function gt(l,o,t){const c=l.createShader(o);if(l.shaderSource(c,t),l.compileShader(c),!l.getShaderParameter(c,l.COMPILE_STATUS)){const u=l.getShaderInfoLog(c);throw l.deleteShader(c),new Error(`weld-pool: shader compile failed: ${u??""}`)}return c}class zt{constructor(o,t){this.canvas=o,this.frag=t,this.gl=null,this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.locs=new Map}init(o=!1){const t=this.canvas.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return!1;this.gl=t;try{this.vs=gt(t,t.VERTEX_SHADER,Tt),this.fs=gt(t,t.FRAGMENT_SHADER,this.frag);const u=t.createProgram();if(!u)return this.abandon(o),!1;if(this.program=u,t.attachShader(u,this.vs),t.attachShader(u,this.fs),t.linkProgram(u),!t.getProgramParameter(u,t.LINK_STATUS))return this.abandon(o),!1}catch{return this.abandon(o),!1}t.useProgram(this.program),this.buffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const c=t.getAttribLocation(this.program,"a_pos");return t.enableVertexAttribArray(c),t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0),this.locs.clear(),!0}abandon(o){const t=o?null:this.gl?.getExtension("WEBGL_lose_context");this.destroy(),t?.loseContext()}loc(o){return this.locs.has(o)||this.locs.set(o,this.gl.getUniformLocation(this.program,o)),this.locs.get(o)??null}f(o,t){this.gl?.uniform1f(this.loc(o),t)}i(o,t){this.gl?.uniform1i(this.loc(o),t)}v2(o,t,c){this.gl?.uniform2f(this.loc(o),t,c)}v3(o,t){this.gl?.uniform3f(this.loc(o),t[0],t[1],t[2])}v3a(o,t){this.gl?.uniform3fv(this.loc(o),t)}v4a(o,t){this.gl?.uniform4fv(this.loc(o),t)}draw(o,t){const c=this.gl;!c||!this.program||(c.viewport(0,0,o,t),c.drawArrays(c.TRIANGLES,0,6))}destroy(){const o=this.gl;o&&(this.buffer&&o.deleteBuffer(this.buffer),this.program&&o.deleteProgram(this.program),this.vs&&o.deleteShader(this.vs),this.fs&&o.deleteShader(this.fs),this.buffer=null,this.program=null,this.vs=null,this.fs=null,this.locs.clear(),this.gl=null)}}function It(l,o,t,c,u){let p=l,S=new Uint8Array(o*t);const g=Math.max(1,Math.round(c));for(let W=0;W<u;W++){for(let _=0;_<t;_++){const L=_*o;let I=0;for(let x=-g;x<=g;x++)I+=p[L+Math.min(o-1,Math.max(0,x))];const m=2*g+1;for(let x=0;x<o;x++){S[L+x]=I/m;const P=L+Math.min(o-1,Math.max(0,x-g)),B=L+Math.min(o-1,Math.max(0,x+g+1));I+=p[B]-p[P]}}[p,S]=[S,p];for(let _=0;_<o;_++){let L=0;for(let m=-g;m<=g;m++)L+=p[Math.min(t-1,Math.max(0,m))*o+_];const I=2*g+1;for(let m=0;m<t;m++){S[m*o+_]=L/I;const x=Math.min(t-1,Math.max(0,m-g))*o+_,P=Math.min(t-1,Math.max(0,m+g+1))*o+_;L+=p[P]-p[x]}}[p,S]=[S,p]}return p}const xt=6.4;function _t({headline:l="Molten",headlineWeight:o=600,headlineFit:t=.82,headlineY:c=.44,relief:u=1,speed:p=1,scale:S=1,paused:g=!1,children:W,className:_="",style:L}){const I=j.useRef(null),m=j.useRef(null),x=j.useId(),P=j.useRef(g);P.current=g;const B=j.useRef(l);return B.current=l,j.useEffect(()=>{const h=I.current,d=m.current;if(!h||!d)return;const a=new zt(d,Pt);let xe=0,_e=!1,y=!1,w=0,b=0,re=1,we=!1,Ee=performance.now();const je=[1,.75,.55],wt=24;let Y=0,H=16.7,K=0,J=0,ne=8e3,C=0,D=0,ye=0;const F=new Float32Array(oe*4).fill(-1),be=new Float32Array(oe*4);let se=0;const ie=new Float32Array($e*3);let q=!1,T=0,M=0,X=0,N=0,ae=0,le=0,Le=0,Te=0,ce=0,he=0,ue=0,Me=0,Ae=0,fe=!0,Re=[.03,.03,.03],Se=[.18,.18,.18],Pe=[.56,.56,.56],ke=[.93,.93,.93],ze=[1,1,1],Ve=[0,.42,1],Ie=0,Ue=1.15;const We=()=>{const e=getComputedStyle(document.documentElement),s=te(e.getPropertyValue("--background"))??[1,1,1],r=te(e.getPropertyValue("--foreground"))??[.09,.09,.09],n=te(e.getPropertyValue("--ns-muted"))??[.55,.55,.55],i=te(e.getPropertyValue("--border"))??[.18,.18,.18];Ve=te(e.getPropertyValue("--ns-accent"))??[0,.42,1];const A=[0,0,0],E=[1,1,1];kt(s)<.5?(Re=O(s,A,.55),Se=O(i,s,.15),Pe=n,ke=r,ze=O(r,E,.85),Ie=-.09,Ue=1.15):(Re=O(r,A,.35),Se=O(r,n,.55),Pe=O(n,s,.6),ke=O(s,n,.16),ze=s,Ie=.02,Ue=1.2)};We();const Be=document.createElement("canvas");let k=null,Ye=0;const Q=()=>{const e=a.gl;if(!e||w<2||b<2)return;const s=b/w,r=Math.max(256,Math.min(1024,Math.round(w))),n=Math.max(128,Math.round(r*s));Be.width=r,Be.height=n;const i=Be.getContext("2d",{willReadFrequently:!0});if(!i)return;const A=getComputedStyle(h).fontFamily||"system-ui, sans-serif",E=B.current.split(`
`).filter(v=>v.length>0);if(i.clearRect(0,0,r,n),E.length>0){i.font=`${o} 100px ${A}`;let f=1;for(const $ of E)f=Math.max(f,i.measureText($).width);const G=Math.min(r*t*100/f,n*.72/E.length);i.font=`${o} ${G}px ${A}`,i.textAlign="center",i.textBaseline="middle",i.fillStyle="#fff";const mt=G*.98,Lt=n*c-(E.length-1)*mt/2;for(let $=0;$<E.length;$++)i.fillText(E[$],r/2,Lt+$*mt)}const ge=i.getImageData(0,0,r,n).data,R=new Uint8Array(r*n);for(let v=0,f=3;v<R.length;v++,f+=4)R[v]=ge[f];const ee=It(Uint8Array.from(R),r,n,Math.max(2,r*.0045),3),z=new Uint8Array(r*n*4);for(let v=0,f=0;v<R.length;v++,f+=4)z[f]=Math.max(ee[v],R[v]),z[f+1]=R[v],z[f+2]=0,z[f+3]=255;k?e.bindTexture(e.TEXTURE_2D,k):(k=e.createTexture(),e.bindTexture(e.TEXTURE_2D,k),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR)),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r,n,0,e.RGBA,e.UNSIGNED_BYTE,z),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,k),Ye=E.length>0?1:0},Et=e=>{const s=Math.min(w,b);for(let r=0;r<$e;r++){const n=r*1.7,i=.09+r*.031;ie[r*3]=w*(.5+.34*Math.sin(e*i+n)*Math.cos(e*i*.61+n*1.3)),ie[r*3+1]=b*(.5+.36*Math.sin(e*i*.83+n*2.1)),ie[r*3+2]=s*(.22+.09*Math.sin(e*.21+n))}},U=()=>{if(!a.gl||w<=0||b<=0)return;const e=y?xt:C;Et(e),be.set(F);let s=!1;for(let r=0;r<oe;r++){const n=F[r*4+2],i=n<0?-1:e-n;be[r*4+2]=i,i>=0&&i<=1.9&&(s=!0)}a.v2("u_size",w,b),a.f("u_dpr",re),a.f("u_time",e),a.f("u_scale",Math.max(.2,S)),a.f("u_relief",15*Math.max(0,u)),a.f("u_textAmt",Ye*.5),a.i("u_text",0),a.v4a("u_trail",be),a.v3a("u_lobes",ie),a.f("u_hover",ye),a.f("u_wake",s?1:0),a.v3("u_c0",Re),a.v3("u_c1",Se),a.v3("u_c2",Pe),a.v3("u_c3",ke),a.v3("u_c4",ze),a.v3("u_accent",Ve),a.f("u_bias",Ie),a.f("u_contrast",Ue),a.draw(d.width,d.height)},He=e=>{const s=e-Ee,r=Math.min(.05,Math.max(0,s/1e3));Ee=e,C+=r*p,ye+=(D-ye)*(1-Math.exp(-r*8)),bt(r),U();const n=Math.min(50,s);H+=(n-H)*(1-Math.exp(-n/120)),H>wt?(K+=n,J=0):(J+=n,K=0);const i=K>900&&Y<je.length-1,A=J>ne&&Y>0;(i||A)&&(Y+=i?1:-1,i&&(ne=Math.min(64e3,ne*2)),K=0,J=0,H=16.7,Ke()),xe=requestAnimationFrame(He)},Ce=()=>{_e||we||(_e=!0,Ee=performance.now(),xe=requestAnimationFrame(He))},Z=()=>{cancelAnimationFrame(xe),_e=!1},Ke=()=>{if(w<2||b<2)return;re=Math.min(window.devicePixelRatio||1,1.5)*je[Y];const e=Math.round(w*re),s=Math.round(b*re);(d.width!==e||d.height!==s)&&(d.width=e,d.height=s),d.style.width=`${w}px`,d.style.height=`${b}px`,U()},De=()=>{const e=h.getBoundingClientRect();if(e.width<2||e.height<2)return;const s=Math.abs(e.width-w)>.5||Math.abs(e.height-b)>.5;w=e.width,b=e.height,Me=e.left,Ae=e.top,fe=!1,Y=0,K=0,J=0,ne=8e3,H=16.7,Ke(),s&&Q(),U()},yt=()=>{if(!fe)return;const e=h.getBoundingClientRect();Me=e.left,Ae=e.top,fe=!1},de=()=>{fe=!0},pe=(e,s,r,n)=>{const i=se*4;F[i]=e,F[i+1]=s,F[i+2]=r,F[i+3]=n,se=(se+1)%oe},bt=e=>{if(!q||e<=0)return;const s=1-Math.exp(-e/Mt);ae+=((T-Le)/e-ae)*s,le+=((M-Te)/e-le)*s,Le=T,Te=M;let r=ae*qe,n=le*qe;const i=Math.hypot(r,n);i>Ge&&(r=r/i*Ge,n=n/i*Ge);const A=1-Math.exp(-e/qe);X+=(T+r-X)*A,N+=(M+n-N)*A;const E=X-ce,ge=N-he,R=Math.hypot(E,ge),ee=C-ue;if(R<vt&&!(ee>=At&&R>1.5))return;const z=Math.min(St,Math.max(1,Math.round(R/vt))),v=Math.min(1.6,ee/Rt)/z;for(let f=1;f<=z;f++){const G=f/z;pe(ce+E*G,he+ge*G,ue+ee*G,v)}ce=X,he=N,ue=C},Fe=()=>{F.fill(-1),se=0,pe(X,N,xt,1),U()},Xe=e=>{yt();const s=typeof e.getCoalescedEvents=="function"?e.getCoalescedEvents():null,r=s&&s.length>0?s[s.length-1]:e;T=r.clientX-Me,M=r.clientY-Ae},Ne=()=>{X=T,N=M,ae=0,le=0,Le=T,Te=M,ce=T,he=M,ue=C,q=!0},Je=e=>{if(D=1,Xe(e),Ne(),y){Fe();return}pe(T,M,C,1)},Qe=()=>{D=0,q=!1},Ze=e=>{Xe(e),q||(Ne(),D=1),y&&(X=T,N=M,Fe())},et=e=>{if(Xe(e),Ne(),D=1,y){Fe();return}pe(T,M,C,1)},tt=e=>{e.pointerType!=="mouse"&&(D=0,q=!1)},ot=()=>{D=0,q=!1};if(!a.init())return;const rt=new ResizeObserver(De);rt.observe(h),De(),Q(),document.fonts?.ready&&document.fonts.ready.then(()=>{we||(Q(),y&&U())}),h.addEventListener("pointerenter",Je),h.addEventListener("pointerleave",Qe),h.addEventListener("pointermove",Ze),h.addEventListener("pointerdown",et),h.addEventListener("pointerup",tt),h.addEventListener("pointercancel",ot),window.addEventListener("scroll",de,{passive:!0,capture:!0}),window.addEventListener("resize",de,{passive:!0});const me=window.matchMedia("(prefers-reduced-motion: reduce)");let nt=me.matches;const ve=()=>{nt||P.current?(y=!0,Z(),U()):(y=!1,Ce())},st=()=>{nt=me.matches,ve()};me.addEventListener("change",st);let Oe=!0;const it=new IntersectionObserver(e=>{Oe=e.some(s=>s.isIntersecting),Oe?!y&&!document.hidden&&Ce():Z()},{threshold:0});it.observe(h);const at=()=>{document.hidden?Z():!y&&Oe&&Ce()};document.addEventListener("visibilitychange",at),ve();let lt=P.current,ct=B.current,ht=0;const ut=()=>{P.current!==lt&&(lt=P.current,ve()),B.current!==ct&&(ct=B.current,Q(),y&&U()),ht=window.setTimeout(ut,140)};ut();const ft=new MutationObserver(()=>{We(),y&&U()});ft.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const dt=e=>{e.preventDefault(),Z()},pt=()=>{k=null,a.init(!0)&&(De(),Q(),ve())};return d.addEventListener("webglcontextlost",dt),d.addEventListener("webglcontextrestored",pt),()=>{we=!0,rt.disconnect(),it.disconnect(),me.removeEventListener("change",st),document.removeEventListener("visibilitychange",at),ft.disconnect(),d.removeEventListener("webglcontextlost",dt),d.removeEventListener("webglcontextrestored",pt),h.removeEventListener("pointerenter",Je),h.removeEventListener("pointerleave",Qe),h.removeEventListener("pointermove",Ze),h.removeEventListener("pointerdown",et),h.removeEventListener("pointerup",tt),h.removeEventListener("pointercancel",ot),window.removeEventListener("scroll",de,{capture:!0}),window.removeEventListener("resize",de),window.clearTimeout(ht),Z(),k&&a.gl&&a.gl.deleteTexture(k),k=null;const e=a.gl?.getExtension("WEBGL_lose_context");a.destroy(),d.isConnected||e?.loseContext()}},[o,t,c,u,p,S]),V.jsxs("div",{ref:I,"data-weld-pool":x,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${_}`,style:L,children:[V.jsx("canvas",{ref:m,"aria-hidden":"true",className:"absolute inset-0 block"}),V.jsx("h1",{className:"sr-only",children:l.split(`
`).join(" ")}),W?V.jsx("div",{className:"relative z-[1] h-full w-full",children:W}):null]})}_t.displayName="WeldPool";function Bt(){return V.jsx("div",{className:"ns-stage",children:V.jsx(_t,{children:"示例"})})}export{Bt as default};
