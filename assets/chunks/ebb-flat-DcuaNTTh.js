import{r as p,j as n}from"./client-CsvIHAk3.js";const Le=[{level:1.42,label:"Slack high water",title:"For twenty minutes the sea does nothing at all",body:"The flat is under a metre and a half of it. Nothing here suggests there is a floor."},{level:1.05,label:"First bar",title:"The outer bar breaks the surface",body:"A back of wet sand, then a second one behind it. The swell starts to trip on them."},{level:.68,label:"Draining",title:"The channel finds the course it always takes",body:"Water leaves the flat the way it arrived, along one meander and its feeder."},{level:.3,label:"Ripple marks",title:"The floor turns out to have been corrugated the whole time",body:"Ripples set by the last flood, held under water for six hours, now catching a low sun."},{level:-.05,label:"Cut off",title:"Some of the sea does not get away",body:"The hollows keep what they were holding. Each pool is now its own small tide, going nowhere."},{level:-.42,label:"Low water",title:"Everything the tide had is showing",body:"In six hours it comes back over this in the same order, bar last, channel first."}],Ge=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,De=`
precision highp float;

uniform vec2 u_size;      // css px
uniform float u_dpr;
uniform float u_time;
uniform float u_level;    // water level in metres
uniform float u_rate;     // metres/second of level change, signed, smoothed
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform float u_bias;
uniform float u_contrast;

// Ground plane mapping. The frame is not a plan view: distance from the near
// edge grows exponentially up the frame, so the flat recedes and compresses
// into a horizon the way a real one does, and lateral scale grows with it. An
// exponential rather than a true 1/y projection because its derivative is
// linear in z — the pixel footprint stays finite at the horizon instead of
// running away, which is what makes the far half sampleable at all.
const float SKY = 0.115;   // fraction of the frame above the horizon
const float Z0 = 2.6;      // metres to the near edge
const float ZK = 3.45;     // ln(zFar / Z0)
const float XS = 0.92;     // lateral metres per unit of z, per frame height

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
  return vnoise(p) * 0.65 + vnoise(p * 2.13 + 9.7) * 0.35;
}

// screen px -> (x, z) metres on the flat, plus the pixel footprint in metres
vec3 mapW(vec2 p) {
  float yy = clamp((1.0 - p.y / u_size.y - 0.0) / (1.0 - SKY), 0.0, 1.0);
  float z = Z0 * exp(yy * ZK);
  float x = (p.x - u_size.x * 0.5) / u_size.y * z * XS;
  float foot = max(z * ZK / (u_size.y * (1.0 - SKY)), z * XS / u_size.y);
  return vec3(x, z, foot);
}

// A shore-parallel bar, wandering slowly along its own length so it is not a
// ruled line across the frame.
float bar(vec2 w, float zc, float amp, float wid, float wob) {
  float dz = (w.y - zc + wob * sin(w.x * 0.085 + zc)) / wid;
  return amp * exp(-dz * dz);
}

// The flat itself. No time term anywhere in here: this is the entire reason the
// ebb runs backwards coherently, because the frame is then a function of the
// water level alone.
float flat_(vec2 w, float foot) {
  float h = 1.62 - 0.058 * w.y;              // the gentlest of seaward slopes

  // five bars, crests set so each one breaks at one of the stage levels. The
  // first is near enough to fill the bottom of the frame and stands 0.2 m proud
  // at slack high water, so the resting frame has one back of sand already out
  // with the swell tripping over it rather than an undifferentiated sea.
  h += bar(w, 3.5, 0.34, 2.1, 0.7);
  h += bar(w, 7.0, 0.46, 4.6, 1.5);
  h += bar(w, 19.0, 0.60, 6.4, 2.3);
  h += bar(w, 36.0, 0.62, 8.6, 3.1);
  h += bar(w, 58.0, 0.50, 11.0, 3.8);

  // the main channel: one meander, widening seaward, and its feeder
  float cx = 9.5 * sin(w.y * 0.045 + 0.7) + 4.5 * sin(w.y * 0.017 + 2.4);
  float cd = (w.x - cx) / (2.6 + 0.045 * w.y);
  h -= 0.92 * exp(-cd * cd);
  float fx2 = -13.0 + 7.0 * sin(w.y * 0.058 + 2.1);
  float fd = (w.x - fx2) / (1.5 + 0.02 * w.y);
  h -= 0.42 * exp(-fd * fd);

  // broad relief: the hollows that strand pools when the level drops past them
  h += (fbm2(w * 0.055) - 0.5) * 0.46;
  h += (fbm2(w * 0.17 + 4.1) - 0.5) * 0.14;
  // and a metre-scale octave: without it the only hollows are 18 m across, so
  // the flat drains to one clean sheet and never strands the scatter of small
  // pools that is the whole point of the "cut off" stage
  h += (fbm2(w * 0.62 + 11.3) - 0.5) * 0.085 * smoothstep(0.30, 0.06, foot);

  // ripple marks, ~0.6 m crest to crest, faded out where a pixel is wider than
  // they are rather than left to alias into a moire
  float rf = smoothstep(0.16, 0.05, foot);
  if (rf > 0.0) {
    // the crest line itself wanders, and the amplitude is modulated along the
    // ripple rather than constant: a ruled corrugation across the whole flat
    // reads as a scanline artefact, a broken one reads as sand
    float ph = w.y * 10.5 + 2.4 * sin(w.x * 0.42 + w.y * 0.09);
    float am = 0.55 + 0.45 * fbm2(vec2(w.x * 0.30, w.y * 0.13));
    h += (sin(ph) * 0.034 + sin(ph * 2.4 + 1.1) * 0.013) * rf * am;
    // a second, finer set at an angle to the first — the cross-hatch is the
    // only thing in the near field that is not a horizontal band
    float ph2 = (w.y * 0.55 + w.x * 0.83) * 9.0;
    h += sin(ph2) * 0.011 * rf;
  }
  // sand grain, on the same footprint rule, in two octaves: the coarse one
  // carries the mottle, the fine one keeps the near field from going to mush
  h += (vnoise(w * 2.6) - 0.5) * 0.026 * smoothstep(0.45, 0.12, foot);
  h += (vnoise(w * 14.0) - 0.5) * 0.010 * smoothstep(0.05, 0.012, foot);
  return h;
}

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.27, x));
  c = mix(c, u_c2, smoothstep(0.25, 0.55, x));
  c = mix(c, u_c3, smoothstep(0.52, 0.83, x));
  c = mix(c, u_c4, smoothstep(0.81, 1.0, x));
  return c;
}

void main() {
  // DOM-space px, y down
  vec2 p = vec2(gl_FragCoord.x, u_size.y * u_dpr - gl_FragCoord.y) / u_dpr;
  float horizon = u_size.y * SKY;
  float nx = (p.x - u_size.x * 0.5) / (u_size.x * 0.5);
  float ebb = min(abs(u_rate) * 2.2, 1.0);   // how hard the tide is running

  // ---- sky ---------------------------------------------------------------
  // Held down to a band: the flat is the subject. Brightest at the horizon,
  // with one slow cloud shelf drifting across it.
  float skyGrad = smoothstep(0.0, 1.0, p.y / max(1.0, horizon));
  float cloud = fbm2(vec2(nx * 1.6 + u_time * 0.012, p.y / max(1.0, horizon) * 1.4));
  float L = 0.60 + 0.30 * skyGrad + (cloud - 0.5) * 0.16 * (1.0 - skyGrad * 0.4);

  if (p.y > horizon) {
    // ---- the flat --------------------------------------------------------
    vec3 m = mapW(p);
    vec2 w = m.xy;
    float z = m.y;
    float foot = m.z;

    // three taps, one pixel apart: one surface normal AND the local gradient
    // that sets how wide the waterline may blend
    float h = flat_(w, foot);
    vec3 mx = mapW(p + vec2(1.0, 0.0));
    vec3 my = mapW(p + vec2(0.0, 1.0));
    float hx = flat_(mx.xy, mx.z);
    float hy = flat_(my.xy, my.z);
    float dhx = (hx - h) / max(mx.z, 0.0002);
    float dhz = (h - hy) / max(my.z, 0.0002);
    vec3 n = normalize(vec3(-dhx * 0.5, -dhz * 0.5, 1.0));

    // a low sun off to the right, so the glare path lands away from the copy
    vec3 sun = normalize(vec3(0.62, -0.30, 0.72));
    float diff = clamp(dot(n, sun), 0.0, 1.0);

    float above = h - u_level;

    // SAND. Wetness is a function of height above the CURRENT waterline, never
    // of how long anything has been out of the water — the moment that becomes
    // a history the tide stops being reversible.
    float wet = exp(-max(above, 0.0) / 0.115);
    float sand = mix(0.66, 0.20, wet);
    sand *= 0.60 + 0.54 * diff;
    // sheen: wet sand holds a mirror of the sky until it drains
    sand += wet * pow(diff, 22.0) * 0.55;
    // the last of the water draining off the flat in threads, on the clock
    float rill = smoothstep(0.55, 0.95, vnoise(vec2(w.x * 1.6, w.y * 0.5 - u_time * 0.5)));
    sand -= rill * wet * 0.09 * (0.35 + 0.65 * ebb);

    // WATER. Depth attenuates the floor toward the surface tone, swell runs
    // shoreward on the clock, and glitter rides the glare path.
    float dep = max(0.0, -above);
    float swell = sin(z * 0.42 - u_time * 1.15 + 2.4 * fbm2(vec2(w.x * 0.05, z * 0.035)));
    float chop = vnoise(vec2(w.x * 0.9, z * 0.55 - u_time * 0.9));
    float surface = 0.44 + 0.10 * swell + (chop - 0.5) * 0.10;
    // the glare path: a corridor of sky under the sun, widening with distance
    float glare = exp(-pow((w.x / max(z, 0.6) - 0.42) / 0.34, 2.0));
    float sparkle = pow(smoothstep(0.55, 1.0, vnoise(vec2(w.x * 3.4, z * 2.2 - u_time * 1.4))), 3.0);
    surface += glare * (0.16 + 0.34 * sparkle);
    float clarity = exp(-dep / 0.42);
    float water = mix(surface, sand * 0.72 + 0.10, clarity * 0.85);
    // deep water goes dark: without it the sea sits at one tone and the whole
    // resting frame reads as a single grey wash with glitter on it
    water *= 1.0 - smoothstep(0.25, 1.8, dep) * 0.34;
    // shadow the water immediately in the lee of an emerging bar
    water -= smoothstep(0.5, 0.0, dep) * 0.05;

    // FOAM. Where the swell runs out of depth it breaks, so the white line sits
    // wherever the water is shallow — which is the shoreline at any level, and
    // over every bar the moment it starts to trip the swell.
    float breakK = smoothstep(0.34, 0.0, dep);
    float foam = breakK * smoothstep(0.15, 0.85, swell * 0.5 + 0.5);
    float lace = vnoise(vec2(w.x * 2.2, z * 1.4 - u_time * 1.9));
    water += foam * (0.30 + 0.22 * lace) * (0.55 + 0.45 * ebb);
    // and a wet fringe on the sand side, where the last wash is still running
    sand += smoothstep(0.10, 0.0, above) * foam * 0.22;

    // the waterline is a contour of a 2D field: the blend width comes from the
    // local gradient, so it is a clean wet edge on a steep bar and a soft one
    // on a near-flat pan, and neither crawls while the level moves
    float aa = abs(hx - h) + abs(hy - h) + 0.0025;
    float land = smoothstep(-aa, aa, above);
    L = mix(water, sand, land);

    // THE SURF LINE. A shoreline you can find at a glance is a bright line, not
    // a change of tone: this is a gaussian on the height above the level alone,
    // so it lies exactly
    // on the contour at every level and on both faces of every bar the moment
    // one breaks, and it is a function of the level with no history in it. Its
    // texture runs on the clock, which is what keeps the resting frame alive.
    // squared by multiplication, not pow(): the height difference is negative everywhere
    // there is water over the flat, and pow() of a negative base is undefined
    // in GLSL — on this stack it returns NaN and takes the whole frame black
    float sr = above / (0.05 + 6.0 * aa);
    float surf = exp(-sr * sr);
    float lather = 0.42 + 0.58 * vnoise(vec2(w.x * 1.3, z * 0.8 - u_time * 1.25));
    L += surf * lather * 0.32 * (0.62 + 0.38 * ebb);

    // distance haze into the horizon, and a hard bright line on it
    float far = smoothstep(0.45, 1.0, (log(z / Z0) / ZK));
    L = mix(L, 0.72, far * 0.55);
    L += exp(-pow((p.y - horizon) / 3.5, 2.0)) * 0.18;
  }

  float Lc = clamp((L - 0.5) * u_contrast + 0.5 + u_bias, 0.0, 1.0);
  vec3 col = ramp(Lc);

  // a mild vignette toward the deepest stop, so the copy column has somewhere
  // to sit in both themes
  float vig = smoothstep(0.62, 1.30, length(vec2(nx, (p.y / u_size.y - 0.5) * 1.5)));
  col = mix(col, u_c0, vig * 0.16);

  gl_FragColor = vec4(col, 1.0);
}
`;function O(h){const a=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(h.trim());if(!a)return null;let e=a[1];e.length===3&&(e=e.split("").map(u=>u+u).join(""));const l=parseInt(e,16);return[(l>>16&255)/255,(l>>8&255)/255,(l&255)/255]}function b(h,a,e){return[h[0]+(a[0]-h[0])*e,h[1]+(a[1]-h[1])*e,h[2]+(a[2]-h[2])*e]}function Be([h,a,e]){return .2126*h+.7152*a+.0722*e}function Ne(h,a,e){const l=h.createShader(a);if(h.shaderSource(l,e),h.compileShader(l),!h.getShaderParameter(l,h.COMPILE_STATUS)){const u=h.getShaderInfoLog(l);throw h.deleteShader(l),new Error(`ebb-flat: shader compile failed: ${u??""}`)}return l}class Ke{constructor(a,e){this.canvas=a,this.frag=e,this.gl=null,this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.locs=new Map}init(a=!1){const e=this.canvas.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!e)return!1;this.gl=e;try{this.vs=Ne(e,e.VERTEX_SHADER,Ge),this.fs=Ne(e,e.FRAGMENT_SHADER,this.frag);const u=e.createProgram();if(!u)return this.abandon(a),!1;if(this.program=u,e.attachShader(u,this.vs),e.attachShader(u,this.fs),e.linkProgram(u),!e.getProgramParameter(u,e.LINK_STATUS))return this.abandon(a),!1}catch{return this.abandon(a),!1}e.useProgram(this.program),this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const l=e.getAttribLocation(this.program,"a_pos");return e.enableVertexAttribArray(l),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0),this.locs.clear(),!0}abandon(a){const e=a?null:this.gl?.getExtension("WEBGL_lose_context");this.destroy(),e?.loseContext()}loc(a){return this.locs.has(a)||this.locs.set(a,this.gl.getUniformLocation(this.program,a)),this.locs.get(a)??null}f(a,e){this.gl?.uniform1f(this.loc(a),e)}v2(a,e,l){this.gl?.uniform2f(this.loc(a),e,l)}v3(a,e){this.gl?.uniform3f(this.loc(a),e[0],e[1],e[2])}draw(a,e){const l=this.gl;!l||!this.program||(l.viewport(0,0,a,e),l.drawArrays(l.TRIANGLES,0,6))}destroy(){const a=this.gl;a&&(this.buffer&&a.deleteBuffer(this.buffer),this.program&&a.deleteProgram(this.program),this.vs&&a.deleteShader(this.vs),this.fs&&a.deleteShader(this.fs),this.buffer=null,this.program=null,this.vs=null,this.fs=null,this.locs.clear(),this.gl=null)}}const Oe=6.1;function Te({stages:h=Le,pinLength:a=12,highWater:e=1.5,lowWater:l=-.62,speed:u=1,children:re,className:je="",style:Fe}){const le=p.useRef(null),ie=p.useRef(null),he=p.useRef(null),ce=p.useRef([]),fe=p.useRef([]),U=p.useRef(null),V=p.useRef(null),Ce=p.useId(),R=p.useMemo(()=>h.length>0?h:Le,[h]),F=p.useRef(R);F.current=R,p.useEffect(()=>{const i=le.current,y=ie.current,f=he.current;if(!i||!y||!f)return;const d=new Ke(f,De),de=d.init();let Y=0,S=!1,_=window.matchMedia("(prefers-reduced-motion: reduce)").matches,z=0,k=0,C=1,ue=!1,Z=performance.now(),me=0,m=F.current;const H=Math.max(.2,e-l);let P=0,M=0,I=0,v=e,w=!0,q=-1;const pe=[1,.72,.52],Ie=24;let A=0,L=16.7,N=0,T=0,$=8e3,W=[.03,.03,.03],X=[.18,.18,.18],J=[.56,.56,.56],Q=[.93,.93,.93],ee=[1,1,1],te=0,ae=1.2;const we=()=>{const t=getComputedStyle(document.documentElement),r=O(t.getPropertyValue("--background"))??[1,1,1],s=O(t.getPropertyValue("--foreground"))??[.09,.09,.09],o=O(t.getPropertyValue("--ns-muted"))??[.55,.55,.55],c=O(t.getPropertyValue("--border"))??[.18,.18,.18],x=[0,0,0],E=[1,1,1];Be(r)<.5?(W=b(r,x,.62),X=b(c,r,.1),J=b(o,c,.3),Q=s,ee=b(s,E,.75),te=-.1,ae=1.26):(W=b(s,x,.4),X=b(s,o,.45),J=b(o,r,.5),Q=b(r,o,.18),ee=r,te=.12,ae=1.3)};we();const se=t=>e-t*H,ve=()=>{const t=i.getBoundingClientRect(),r=window.innerHeight||1,s=t.height-r;return s<=0?0:Math.min(1,Math.max(0,-t.top/s))},xe=()=>{if(z<2||k<2)return;C=Math.min(window.devicePixelRatio||1,2)*pe[A];const t=Math.round(z*C),r=Math.round(k*C);(f.width!==t||f.height!==r)&&(f.width=t,f.height=r),f.style.width=`${z}px`,f.style.height=`${k}px`,w=!0},oe=()=>{const t=y.getBoundingClientRect();t.width<2||t.height<2||(z=t.width,k=t.height,A=0,N=0,T=0,$=8e3,L=16.7,xe())},ge=t=>{let r=0,s=1/0;for(let o=0;o<m.length;o++){const c=Math.abs(t-m[o].level);c<s&&(s=c,r=o)}return r},$e=t=>{const r=t>0?Math.abs(m[t].level-m[t-1].level):0,s=t<m.length-1?Math.abs(m[t+1].level-m[t].level):0,o=r&&s?(r+s)/2:r||s||.4;return Math.max(.08,o*.66)},G=t=>{const r=_?ge(t):-1;for(let s=0;s<m.length;s++){const o=ce.current[s];if(!o)continue;let c,x=0;if(_)c=s===r?1:0;else{const g=(t-m[s].level)/$e(s);c=Math.max(0,1-Math.abs(g)),c=c*c*(3-2*c),x=Math.max(-44,Math.min(44,g*32))}o.style.opacity=c.toFixed(3),o.style.transform=`translate3d(0, ${x.toFixed(1)}px, 0)`,o.style.visibility=c<.004?"hidden":"visible";const E=fe.current[s];E&&(E.style.opacity=(.28+.72*c).toFixed(3))}if(U.current&&(U.current.textContent=`${t>=0?"+":"−"}${Math.abs(t).toFixed(2)} m`),V.current){const s=Math.min(1,Math.max(0,(e-t)/H));V.current.style.transform=`scaleY(${s.toFixed(4)})`}},j=t=>{!d.gl||z<=0||k<=0||(d.v2("u_size",z,k),d.f("u_dpr",C),d.f("u_time",_?Oe:me),d.f("u_level",t),d.f("u_rate",_?0:I),d.v3("u_c0",W),d.v3("u_c1",X),d.v3("u_c2",J),d.v3("u_c3",Q),d.v3("u_c4",ee),d.f("u_bias",te),d.f("u_contrast",ae),d.draw(f.width,f.height))},be=t=>{const r=t-Z,s=Math.min(.05,Math.max(5e-4,r/1e3));Z=t,P=ve();let o;if(_){const g=ge(se(P));o=m[g].level,M=(e-o)/H,I=0,v=o,(g!==q||w)&&(q=g,w=!1,G(o),j(o))}else{me+=s*u,M+=(P-M)*(1-Math.exp(-s/.09)),o=se(M);const g=(o-v)/s;v=o,I+=(g-I)*(1-Math.exp(-s/.12)),w=!1,G(o),j(o)}const c=Math.min(50,r);L+=(c-L)*(1-Math.exp(-c/120)),L>Ie?(N+=c,T=0):(T+=c,N=0);const x=N>900&&A<pe.length-1,E=T>$&&A>0;(x||E)&&(A+=x?1:-1,x&&($=Math.min(64e3,$*2)),N=0,T=0,L=16.7,xe()),Y=requestAnimationFrame(be)},D=()=>{S||ue||(S=!0,Z=performance.now(),Y=requestAnimationFrame(be))},B=()=>{cancelAnimationFrame(Y),S=!1},ye=new ResizeObserver(oe);ye.observe(y),oe(),M=P=ve(),v=se(M),G(v),de&&j(v);const ne=window.matchMedia("(prefers-reduced-motion: reduce)"),_e=()=>{_=ne.matches,w=!0};ne.addEventListener("change",_e);let K=!0;const ze=new IntersectionObserver(t=>{K=t.some(r=>r.isIntersecting),K?document.hidden||(w=!0,D()):B()},{threshold:0});ze.observe(i);const ke=()=>{document.hidden?B():K&&(w=!0,D())};document.addEventListener("visibilitychange",ke);const Me=new MutationObserver(()=>{we(),w=!0,S||j(v)});Me.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});let Ee=0;const Re=()=>{F.current!==m&&(m=F.current,w=!0,q=-1,S||(G(v),j(v))),Ee=window.setTimeout(Re,200)};Re();const Se=t=>{t.preventDefault(),B()},Ae=()=>{d.init(!0)&&(oe(),w=!0,K&&!document.hidden&&D())};return f.addEventListener("webglcontextlost",Se),f.addEventListener("webglcontextrestored",Ae),de&&D(),()=>{ue=!0,B(),window.clearTimeout(Ee),ye.disconnect(),ze.disconnect(),ne.removeEventListener("change",_e),document.removeEventListener("visibilitychange",ke),Me.disconnect(),f.removeEventListener("webglcontextlost",Se),f.removeEventListener("webglcontextrestored",Ae);const t=d.gl?.getExtension("WEBGL_lose_context");d.destroy(),f.isConnected||t?.loseContext()}},[e,l,u]);const Pe=Math.max(.2,e-l);return n.jsxs("section",{ref:le,"data-ebb-flat":Ce,"aria-label":"Tide log",className:`relative w-full bg-background ${je}`,style:{height:`${Math.max(2,a)*100}vh`,...Fe},children:[n.jsx("ol",{className:"sr-only",children:R.map(i=>n.jsxs("li",{children:[n.jsxs("h3",{children:[i.level>=0?"+":"−",Math.abs(i.level).toFixed(2)," m, ",i.label,": ",i.title]}),n.jsx("p",{children:i.body})]},`sr-${i.level}-${i.label}`))}),n.jsxs("div",{ref:ie,className:"sticky top-0 h-screen w-full overflow-hidden",children:[n.jsx("canvas",{ref:he,"aria-hidden":"true",className:"absolute inset-0 block"}),n.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 flex items-center",children:n.jsx("div",{className:"relative mx-auto w-full max-w-6xl px-6 sm:px-10",children:n.jsx("div",{className:"relative h-[19rem] w-full max-w-md sm:h-[17rem]",children:R.map((i,y)=>n.jsx("div",{ref:f=>{ce.current[y]=f},className:"absolute inset-x-0 top-0 will-change-[opacity,transform]",style:{opacity:0,visibility:"hidden"},children:n.jsxs("div",{className:"rounded-lg bg-background/80 p-6 backdrop-blur-md sm:p-7",children:[n.jsxs("p",{className:"font-mono text-[11px] uppercase tracking-[0.28em] text-ns-muted",children:[i.level>=0?"+":"−",Math.abs(i.level).toFixed(2)," m · ",i.label]}),n.jsx("p",{className:"mt-3 text-balance text-2xl font-medium leading-tight text-foreground sm:text-3xl",children:i.title}),n.jsx("p",{className:"mt-3 text-sm leading-relaxed text-ns-muted sm:text-base",children:i.body})]})},`${i.level}-${i.label}`))})})}),n.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-y-0 right-4 hidden w-24 flex-col justify-center sm:right-8 sm:flex",children:n.jsxs("div",{className:"relative flex h-[62vh] items-stretch",children:[n.jsx("div",{className:"relative w-px bg-border",children:n.jsx("div",{ref:V,className:"absolute inset-x-0 top-0 h-full origin-top bg-foreground",style:{transform:"scaleY(0)"}})}),n.jsx("div",{className:"relative ml-3 flex-1",children:R.map((i,y)=>n.jsxs("span",{ref:f=>{fe.current[y]=f},className:"absolute left-0 -translate-y-1/2 font-mono text-[10px] tabular-nums tracking-[0.12em] text-ns-muted",style:{top:`${Math.min(100,Math.max(0,(e-i.level)/Pe*100))}%`,opacity:.28},children:[i.level>=0?"+":"−",Math.abs(i.level).toFixed(1)]},`tick-${i.level}`))})]})}),n.jsxs("div",{className:"pointer-events-none absolute left-6 top-6 flex items-baseline gap-3 rounded-sm bg-background/80 px-3 py-2 backdrop-blur-md sm:left-10 sm:top-10",children:[n.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.28em] text-ns-muted",children:"Tide"}),n.jsx("span",{ref:U,"aria-hidden":"true",className:"font-mono text-sm tabular-nums text-foreground",children:"+1.50 m"})]}),re?n.jsx("div",{className:"relative z-[1] h-full w-full",children:re}):null]})]})}Te.displayName="EbbFlat";function Ve(){return n.jsx("div",{className:"ns-stage",children:n.jsx(Te,{children:"示例"})})}export{Ve as default};
