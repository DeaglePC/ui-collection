import{r as I,j as F}from"./client-CsvIHAk3.js";const tt=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,X=11,de=.05,at=.06,fe=140,ot=`
precision highp float;

#define OBJECTS ${X}

uniform vec2 u_size;      // css px
uniform float u_dpr;
uniform float u_time;
uniform float u_period;   // seconds, full there-and-back
uniform float u_tau;      // persistence time constant, seconds
uniform float u_scale;
uniform vec2 u_apex;      // transducer, css px (above the top edge)
uniform float u_sector;   // half-angle, radians
uniform float u_refR;     // apex -> bottom-centre range, the display's full scale
uniform float u_aim;      // -1..1, pointer bearing bias
uniform float u_focus;    // 0..1, focal range as a fraction of u_refR
uniform float u_hover;    // 0..1 eased
uniform vec4 u_obj[OBJECTS]; // x,y css px, z radius px, w height 0..1
uniform float u_gamma;    // per-theme display curve
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;

const float PI = 3.14159265;

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
  float s = vnoise(p) * 0.63;
  s += vnoise(p * 2.11 + 17.3) * 0.31;
  return s;
}

float fbm3(vec2 p) {
  float s = vnoise(p) * 0.54;
  s += vnoise(p * 2.03 + 13.7) * 0.27;
  s += vnoise(p * 4.09 + 31.1) * 0.14;
  return s;
}

// Time since the beam last crossed this bearing. The scanner is harmonic, so
// sin(phase) = x has two roots per period — asin(x) and PI - asin(x) — and the
// age is the smaller of the two backward phase distances. This one function is
// why the display needs no history buffer and why frame zero is already painted.
float ageAt(float x, float phase, float omega) {
  float a = asin(clamp(x, -1.0, 1.0));
  float d1 = mod(phase - a, 2.0 * PI);
  float d2 = mod(phase - (PI - a), 2.0 * PI);
  return min(d1, d2) / omega;
}

void main() {
  // DOM-space px (y down) so pointer coords, object positions and the polar
  // frame all share one coordinate system
  vec2 p = vec2(gl_FragCoord.x, u_size.y * u_dpr - gl_FragCoord.y) / u_dpr;

  vec2 d = p - u_apex;
  float r = max(length(d), 1.0);
  float th = atan(d.x, d.y);          // 0 = straight down the boresight
  vec2 u = d / r;                     // unit vector along the outgoing ray
  vec2 perp = vec2(-u.y, u.x);
  float rn = r / u_refR;

  // ---- sweep ------------------------------------------------------------
  float omega = 2.0 * PI / u_period;
  float phase = mod(u_time * omega, 2.0 * PI);
  float centre = u_aim * u_sector * 0.34;
  // The swing is set to EXACTLY the widest bearing the frame contains — the
  // sector is that angle plus a 5% margin, so 0.952 of it lands on the top
  // corners. Both neighbouring values are wrong in a way that shows: swung
  // wider, the wedge spends a beat past the corners at each turnaround and the
  // display has no beam in it, which is the frame a screenshot is most likely
  // to catch; swung narrower, the frame grows two permanently unswept wedges at
  // its edges that read as vignette rather than as an image.
  float amp = u_sector * (0.952 - 0.28 * abs(u_aim));
  float thb = centre + amp * sin(phase);
  float x = (th - centre) / amp;
  float age = ageAt(x, phase, omega);
  // bearings outside the swung sector are only ever grazed at a turnaround
  // only bearings the swing genuinely never reaches are penalised, and gently:
  // aiming the beam to one side should leave the other side DECAYING, not
  // blacked out
  float inSector = 1.0 - smoothstep(1.0, 1.3, abs(x));

  // The live wedge, in ANGLE rather than in time: its width is the two-way beam
  // pattern, which is an angle, so on screen it fans out with range instead of
  // staying a constant-width stripe. Focus narrows it around the focal range,
  // the way a focused aperture does.
  float focR = mix(0.55, u_focus, u_hover) * u_refR;
  float defocus = 0.55 + 1.5 * abs(r - focR) / u_refR;
  float bw = (0.0055 + 0.0175 * rn) * defocus;
  float dth = th - thb;
  float edge = exp(-pow(dth / bw, 2.0));
  // the trailing skirt of the main lobe, an order of magnitude wider and much
  // fainter — without it the wedge has a hard edge no transducer ever had
  float skirt = exp(-pow(dth / (bw * 5.5), 2.0));

  // ---- the bottom -------------------------------------------------------
  // the vehicle creeps forward, so the bottom drifts past and every shadow
  // lengthens and swings while it does
  vec2 wp = (p + vec2(0.0, u_time * 7.0)) / u_scale;

  float bed = fbm3(wp * 0.0034) * 0.72 + fbm2(wp * 0.0011) * 0.5;

  // Sand ripples, lit at grazing incidence. The facet tilted toward the
  // transducer returns; the one tilted away does not. dot(u, rd) is the
  // obliquity of the ray to the ripple crests, so ripples broadside to the beam
  // band hard and ripples end-on almost vanish — the strongest single cue that
  // the frame is lit from one moving point.
  vec2 rd = normalize(vec2(0.86, 0.51));
  float warp = fbm2(wp * 0.0016);
  float ph2 = dot(wp, rd) * 0.062 + warp * 6.5;
  float rippleFreq = 0.062;
  // azimuth resolution is an ANGLE, so the along-arc footprint grows with range
  // and the ripple term is low-passed by it: fine structure survives near, and
  // genuinely does not survive far
  // the along-arc footprint is bw*r px and the ripple wavelength is
  // 2PI/rippleFreq px, so the attenuation is set by the ratio of the two. The
  // first pass at this used a constant an order of magnitude too large and the
  // ripples vanished everywhere except within a few hundred px of the
  // transducer, which read as "no ripples" and cost the frame its texture.
  float smear = exp(-pow(bw * r * rippleFreq * 0.55, 2.0));
  float rip = -sin(ph2) * dot(u, rd) * 0.52 * smear;
  // a second, finer ripple train at an angle to the first — real bottoms carry
  // an older set under the current one, and the interference is what stops the
  // banding reading as a single sine
  rip += -sin(dot(wp, vec2(-0.42, 0.91)) * 0.11 + warp * 4.0) * dot(u, vec2(-0.42, 0.91)) * 0.2 * smear;

  float E = 0.42 + bed * 0.9 + rip;

  // sparse point scatterers — shell hash, a chain, one bright cell in a hundred
  float sc = hash21(floor(wp / 6.0) + 31.7);
  E += smoothstep(0.988, 1.0, sc) * 1.3;

  // ---- targets and their shadows ---------------------------------------
  float shadow = 0.0;
  for (int i = 0; i < OBJECTS; i++) {
    vec2 od = u_obj[i].xy - u_apex;
    float orr = length(od);
    float oth = atan(od.x, od.y);
    float orad = u_obj[i].z;
    float oh = u_obj[i].w;
    float hw = orad / orr;
    float dt2 = th - oth;

    // near-face specular: the side of the boulder square to the beam
    float dr = r - (orr - orad * 0.45);
    E += exp(-pow(dt2 / (hw * 0.85), 2.0)) * exp(-pow(dr / (orad * 0.6), 2.0)) * (1.5 + 1.1 * oh);

    // the shadow: everything at this bearing beyond the target, its penumbra
    // widening with distance behind because the source is not a point
    float behind = r - orr;
    float len = orad * (3.0 + 11.0 * oh) * (0.7 + rn);
    float lat = 1.0 - smoothstep(hw * 0.7, hw * 1.25 + behind * 0.00055, abs(dt2));
    float s = smoothstep(0.0, orad * 0.55, behind) * (1.0 - smoothstep(len * 0.45, len, behind)) * lat;
    shadow = max(shadow, s * (0.6 + 0.4 * oh));
  }
  E *= 1.0 - 0.94 * shadow;

  // ---- speckle ----------------------------------------------------------
  // Multiplicative, with the correlation cell growing with range (a resolution
  // cell is an angle times a pulse length). Seeded by the pass that PAINTED
  // this pixel rather than by now, so grain decorrelates one wedge at a time as
  // the beam goes over it instead of the whole frame boiling together.
  float cell = 1.2 + 3.0 * rn;
  float pass = floor((u_time - age) * 2.0 / u_period);
  vec2 seed = vec2(pass * 19.7, pass * 7.3);
  vec2 sp = floor(wp / cell) + seed;
  // one hard cell plus one interpolated octave: a pure cell hash reads as square
  // pixels, and pure smooth noise reads as cloud — a resolution cell is neither
  float spk = hash21(sp) * 0.55 + hash21(sp * 1.7 + 5.1) * 0.2 + vnoise(wp / cell * 0.55 + seed) * 0.25;
  E *= 0.5 + 1.05 * spk;

  // time-varying gain leaves a residual: near range still hotter than far
  E *= mix(1.25, 0.5, clamp(rn, 0.0, 1.0));
  // and the focal zone is where the aperture actually concentrates energy
  E *= 1.0 + 0.55 * u_hover * exp(-pow((r - focR) / (u_refR * 0.16), 2.0));
  // one overall level, set so the bottom lands in the middle stops after
  // compression: the log curve fits the dynamic range but does not choose where
  // the image sits, and without this the seabed clips to white and takes the
  // persistence gradient with it
  E = max(E, 0.0) * 0.34;

  // log compression — the mapping every acoustic display uses to fit a decade
  // of return into a screen's worth of luminance
  float sig = log(1.0 + 7.5 * E) / log(8.5);

  // ---- persistence ------------------------------------------------------
  // The floor is the argument here. Decaying to near-zero is what a phosphor
  // does and it looked right in the equations, but on a full-bleed frame it
  // means two thirds of the page is black and the component is a stripe on
  // nothing. A real scan converter holds the last complete sweep and dims it,
  // so the floor is high enough that the WHOLE seabed stays readable and the
  // decay is a gradient of freshness across it rather than an erasure.
  float fresh = exp(-age / u_tau);
  float gain = (0.38 + 0.62 * fresh) * mix(0.62, 1.0, inSector);
  gain += edge * 0.7 + skirt * 0.18;

  float L = sig * gain;
  // the transmitted wedge is visible even where nothing returns
  L += (edge * 0.11 + skirt * 0.02) * inSector;

  // ---- instrument furniture --------------------------------------------
  // range rings and bearing ticks, at the threshold of legibility: enough to
  // read as a calibrated display, not enough to compete with the image
  float ring = abs(fract(rn * 5.0) - 0.5) * 2.0;
  L += (1.0 - smoothstep(0.86, 1.0, ring)) * 0.042 * (0.35 + 0.65 * fresh);
  float bearing = abs(fract(th * 9.55) - 0.5) * 2.0;
  L += (1.0 - smoothstep(0.9, 1.0, bearing)) * 0.03 * step(0.12, rn) * (0.3 + 0.7 * fresh);

  // receiver noise: present everywhere, including in the shadows and in the
  // dark behind the beam, and re-drawn every frame — a real display is never
  // still, and this is what keeps the far side of the sweep alive
  float grain = hash21(p * 1.7 + fract(u_time) * vec2(91.3, 57.1));
  L += (grain - 0.5) * (0.055 + 0.05 * fresh);
  // a slow swell in the noise floor, so the dark is textured rather than flat
  L += (fbm2(p * 0.006 + vec2(0.0, u_time * 0.09)) - 0.5) * 0.05;

  // slight vignette toward the deepest stop: full bleed, but the corners stop
  // pulling against the wedge
  vec2 vp = (p - u_size * 0.5) / max(u_size.x, u_size.y);
  L -= smoothstep(0.34, 0.78, length(vp * vec2(1.0, 1.25))) * 0.1;

  // Display gamma: the log compression above fits the dynamic range, this
  // chooses where the image SITS in it, and it is the one place the two themes
  // genuinely differ. On the dark instrument, lifting the mid-returns (0.86)
  // puts the bottom in the middle stops instead of leaving a dark field with a
  // bright wedge on it. On the paper record, ink is subtractive and a page is
  // mostly paper, so the same signal is pushed the other way (1.28) and only
  // strong returns print — otherwise the light theme is a black page with white
  // holes in it, which is an inversion rather than a print.
  L = pow(clamp(L, 0.0, 1.0), u_gamma);

  vec3 col = mix(u_c0, u_c1, smoothstep(0.0, 0.3, L));
  col = mix(col, u_c2, smoothstep(0.26, 0.62, L));
  col = mix(col, u_c3, smoothstep(0.58, 1.0, L));

  gl_FragColor = vec4(col, 1.0);
}
`;function V(i){const a=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i.trim());if(!a)return null;let e=a[1];e.length===3&&(e=e.split("").map(d=>d+d).join(""));const s=parseInt(e,16);return[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255]}function b(i,a,e){return[i[0]+(a[0]-i[0])*e,i[1]+(a[1]-i[1])*e,i[2]+(a[2]-i[2])*e]}function st([i,a,e]){return .2126*i+.7152*a+.0722*e}function Ye(i,a,e){const s=i.createShader(a);if(i.shaderSource(s,e),i.compileShader(s),!i.getShaderParameter(s,i.COMPILE_STATUS)){const d=i.getShaderInfoLog(s);throw i.deleteShader(s),new Error(`ping-shadow: shader compile failed: ${d??""}`)}return s}class nt{constructor(a,e){this.canvas=a,this.frag=e,this.gl=null,this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.locs=new Map}init(a=!1){const e=this.canvas.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!e)return!1;this.gl=e;try{this.vs=Ye(e,e.VERTEX_SHADER,tt),this.fs=Ye(e,e.FRAGMENT_SHADER,this.frag);const d=e.createProgram();if(!d)return this.abandon(a),!1;if(this.program=d,e.attachShader(d,this.vs),e.attachShader(d,this.fs),e.linkProgram(d),!e.getProgramParameter(d,e.LINK_STATUS))return this.abandon(a),!1}catch{return this.abandon(a),!1}e.useProgram(this.program),this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const s=e.getAttribLocation(this.program,"a_pos");return e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0),this.locs.clear(),!0}abandon(a){const e=a?null:this.gl?.getExtension("WEBGL_lose_context");this.destroy(),e?.loseContext()}loc(a){return this.locs.has(a)||this.locs.set(a,this.gl.getUniformLocation(this.program,a)),this.locs.get(a)??null}f(a,e){this.gl?.uniform1f(this.loc(a),e)}v2(a,e,s){this.gl?.uniform2f(this.loc(a),e,s)}v3(a,e){this.gl?.uniform3f(this.loc(a),e[0],e[1],e[2])}v4a(a,e){this.gl?.uniform4fv(this.loc(a),e)}draw(a,e){const s=this.gl;!s||!this.program||(s.viewport(0,0,a,e),s.drawArrays(s.TRIANGLES,0,6))}destroy(){const a=this.gl;a&&(this.buffer&&a.deleteBuffer(this.buffer),this.program&&a.deleteProgram(this.program),this.vs&&a.deleteShader(this.vs),this.fs&&a.deleteShader(this.fs),this.buffer=null,this.program=null,this.vs=null,this.fs=null,this.locs.clear(),this.gl=null)}}const Ue=3.02;function Ve({speed:i=1,sweepPeriod:a=5.4,persistence:e=1,scale:s=1,paused:d=!1,children:ue,className:Xe="",style:We}){const pe=I.useRef(null),me=I.useRef(null),He=I.useId(),L=I.useRef(d);return L.current=d,I.useEffect(()=>{const h=pe.current,c=me.current;if(!h||!c)return;const n=new nt(c,ot);let z=0,W=!1,m=!1,p=0,u=0,B=1,ge=!1,H=performance.now();const ve=[1,.78,.58],$e=24,Je=1500;let $=0,M=0,R=16.7,A=0,T=0,O=8e3,we=Ue,x=0,E=0,w=!1,_=0,y=0,S=0,P=0,j=0,D=0,J=0,K=0,Q=0,Z=0,N=!0;const k=new Float32Array(X*4),be=[];{let t=49734321;const o=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let r=0;r<X;r++)be.push({x:o(),y:o(),rad:o(),h:o()})}let ee=[.02,.02,.02],te=[.16,.16,.16],ae=[.55,.55,.55],oe=[.97,.97,.97],se=.86;const xe=()=>{const t=getComputedStyle(document.documentElement),o=V(t.getPropertyValue("--background"))??[1,1,1],r=V(t.getPropertyValue("--foreground"))??[.09,.09,.09],l=V(t.getPropertyValue("--ns-muted"))??[.55,.55,.55],f=V(t.getPropertyValue("--border"))??[.18,.18,.18],v=[0,0,0],Ge=[1,1,1];st(o)<.5?(ee=b(o,v,.72),te=b(f,o,.1),ae=b(l,r,.25),oe=b(r,Ge,.7),se=.86):(ee=b(o,Ge,.6),te=b(o,l,.42),ae=b(l,r,.5),oe=b(r,v,.3),se=1.28)};xe();let _e=0,q=0,ye=.7,Ee=1;const Ke=()=>{_e=p*.5,q=-u*1.18,Ee=Math.hypot(0,u-q),ye=Math.atan(p*.5/-q)*1.05},Qe=t=>{const o=u*1.7,r=Math.min(p,u);for(let l=0;l<X;l++){const f=be[l],v=((f.y*o-t*7*s)%o+o)%o;k[l*4]=(.04+f.x*.92)*p,k[l*4+1]=v-u*.25,k[l*4+2]=r*(.012+f.rad*.032)*s,k[l*4+3]=.25+f.h*.75}},g=()=>{if(!n.gl||p<=0||u<=0)return;const t=m?Ue:we;Qe(t);const o=w?Math.max(-1,Math.min(1,(S/p-.5)*2)):0,r=w?Math.max(.08,Math.min(1,P/u)):.55;n.v2("u_size",p,u),n.f("u_dpr",B),n.f("u_time",t),n.f("u_period",Math.max(1.2,a)),n.f("u_tau",Math.max(.12,a*.32*Math.max(.15,e))),n.f("u_scale",Math.max(.3,s)),n.v2("u_apex",_e,q),n.f("u_sector",ye),n.f("u_refR",Ee),n.f("u_aim",o*E),n.f("u_focus",r),n.f("u_hover",E),n.v4a("u_obj",k),n.f("u_gamma",se),n.v3("u_c0",ee),n.v3("u_c1",te),n.v3("u_c2",ae),n.v3("u_c3",oe),n.draw(c.width,c.height)},Ze=t=>{if(!w||t<=0)return;const o=1-Math.exp(-t/at);j+=((_-J)/t-j)*o,D+=((y-K)/t-D)*o,J=_,K=y;let r=j*de,l=D*de;const f=Math.hypot(r,l);f>fe&&(r=r/f*fe,l=l/f*fe);const v=1-Math.exp(-t/de);S+=(_+r-S)*v,P+=(y+l-P)*v},ne=t=>{const o=t-H,r=Math.min(.05,Math.max(0,o/1e3));H=t,we+=r*i,E+=(x-E)*(1-Math.exp(-r*4)),Ze(r),g();const l=Math.min(50,o);if($<Je){$+=l,z=requestAnimationFrame(ne);return}R+=(l-R)*(1-Math.exp(-l/120)),R>$e?(A+=l,T=0):(T+=l,A=0);const f=A>1500&&M<ve.length-1,v=T>O&&M>0;(f||v)&&(M+=f?1:-1,f&&(O=Math.min(64e3,O*2)),A=0,T=0,R=16.7,Le()),z=requestAnimationFrame(ne)},re=()=>{W||ge||(W=!0,H=performance.now(),z=requestAnimationFrame(ne))},C=()=>{cancelAnimationFrame(z),W=!1},Le=()=>{if(p<2||u<2)return;B=Math.min(window.devicePixelRatio||1,1.5)*ve[M];const t=Math.round(p*B),o=Math.round(u*B);(c.width!==t||c.height!==o)&&(c.width=t,c.height=o),c.style.width=`${p}px`,c.style.height=`${u}px`,g()},ie=()=>{const t=h.getBoundingClientRect();t.width<2||t.height<2||(p=t.width,u=t.height,Q=t.left,Z=t.top,N=!1,Ke(),M=0,A=0,T=0,$=0,O=8e3,R=16.7,Le(),g())},et=()=>{if(!N)return;const t=h.getBoundingClientRect();Q=t.left,Z=t.top,N=!1},G=()=>{N=!0},le=t=>{et();const o=typeof t.getCoalescedEvents=="function"?t.getCoalescedEvents():null,r=o&&o.length>0?o[o.length-1]:t;_=r.clientX-Q,y=r.clientY-Z},he=()=>{S=_,P=y,j=0,D=0,J=_,K=y,w=!0},Me=t=>{x=1,le(t),he(),m&&g()},Re=()=>{x=0,w=!1,m&&g()},Ae=t=>{le(t),w||(he(),x=1),m&&(S=_,P=y,E=1,g())},Te=t=>{le(t),he(),x=1,m&&(E=1,g())},Se=t=>{t.pointerType!=="mouse"&&(x=0,w=!1)},Pe=()=>{x=0,w=!1};if(!n.init())return;const ke=new ResizeObserver(ie);ke.observe(h),ie(),h.addEventListener("pointerenter",Me),h.addEventListener("pointerleave",Re),h.addEventListener("pointermove",Ae),h.addEventListener("pointerdown",Te),h.addEventListener("pointerup",Se),h.addEventListener("pointercancel",Pe),window.addEventListener("scroll",G,{passive:!0,capture:!0}),window.addEventListener("resize",G,{passive:!0});const Y=window.matchMedia("(prefers-reduced-motion: reduce)");let Ce=Y.matches;const U=()=>{Ce||L.current?(m=!0,C(),g()):(m=!1,re())},Ie=()=>{Ce=Y.matches,U()};Y.addEventListener("change",Ie);let ce=!0;const Fe=new IntersectionObserver(t=>{ce=t.some(o=>o.isIntersecting),ce?!m&&!document.hidden&&re():C()},{threshold:0});Fe.observe(h);const ze=()=>{document.hidden?C():!m&&ce&&re()};document.addEventListener("visibilitychange",ze),U();let Be=L.current,Oe=0;const je=()=>{L.current!==Be&&(Be=L.current,U()),Oe=window.setTimeout(je,140)};je();const De=new MutationObserver(()=>{xe(),m&&g()});De.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const Ne=t=>{t.preventDefault(),C()},qe=()=>{n.init(!0)&&(ie(),U())};return c.addEventListener("webglcontextlost",Ne),c.addEventListener("webglcontextrestored",qe),()=>{ge=!0,ke.disconnect(),Fe.disconnect(),Y.removeEventListener("change",Ie),document.removeEventListener("visibilitychange",ze),De.disconnect(),c.removeEventListener("webglcontextlost",Ne),c.removeEventListener("webglcontextrestored",qe),h.removeEventListener("pointerenter",Me),h.removeEventListener("pointerleave",Re),h.removeEventListener("pointermove",Ae),h.removeEventListener("pointerdown",Te),h.removeEventListener("pointerup",Se),h.removeEventListener("pointercancel",Pe),window.removeEventListener("scroll",G,{capture:!0}),window.removeEventListener("resize",G),window.clearTimeout(Oe),C();const t=n.gl?.getExtension("WEBGL_lose_context");n.destroy(),c.isConnected||t?.loseContext()}},[i,a,e,s]),F.jsxs("div",{ref:pe,"data-ping-shadow":He,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${Xe}`,style:We,children:[F.jsx("canvas",{ref:me,"aria-hidden":"true",className:"absolute inset-0 block"}),ue?F.jsx("div",{className:"relative z-[1] h-full w-full",children:ue}):null]})}Ve.displayName="PingShadow";function it(){return F.jsx("div",{className:"ns-stage",children:F.jsx(Ve,{children:"示例"})})}export{it as default};
