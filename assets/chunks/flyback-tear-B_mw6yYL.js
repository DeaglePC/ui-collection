import{r as S,j as I}from"./client-CsvIHAk3.js";const Nt=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,Mt=240,At=`
precision highp float;

uniform vec2 u_size;   // css px
uniform float u_dpr;

float hash21(vec2 p) {
  p = fract(p * vec2(287.13, 419.71));
  p += dot(p, p + 27.31);
  return fract(p.x * p.y);
}

// 1 on the integer lattice, falling to 0 over w (in fract units)
float ridge(float x, float w) {
  float d = abs(fract(x + 0.5) - 0.5);
  return smoothstep(w, 0.0, d);
}
`,zt=`
${At}

#define LINES ${Mt}.0

uniform float u_time;
uniform float u_ar;
uniform sampler2D u_prev;
uniform sampler2D u_text;
uniform float u_textAmt;
uniform vec3 u_decay;      // per-frame multipliers for R, G, B
uniform float u_roll;      // vertical hold offset, 0..1
uniform float u_tear;
uniform float u_tearBoost;
uniform float u_noise;
uniform float u_dropout;
uniform float u_field;     // 0 or 1 — which interlaced field is being written
uniform vec2 u_p0;         // pointer, previous frame, css px, y down
uniform vec2 u_p1;         // pointer, this frame
uniform float u_beam;

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

// The monoscope. Everything here is analytic and everything here moves, so the
// signal is alive with nothing wrong with it — the failures below are what
// happens TO a picture, and a still picture underneath them would read as a
// filter over a JPEG rather than as a transmission.
float card(vec2 s) {
  vec2 c = (s - 0.5) * vec2(u_ar, 1.0);
  float px = 1.0 / max(u_size.y, 1.0);
  float t = u_time;
  float L = 0.0;

  // graticule: square cells, with every fifth line drawn heavier. Line widths
  // are derived from the viewport so the grid holds one pixel of weight at any
  // size instead of thickening on a large display.
  float cell = 26.0;
  float gw = 1.1 * cell * px;
  L += max(ridge(c.x * cell, gw), ridge(c.y * cell, gw)) * 0.26;
  float g5w = 1.7 * cell * 0.2 * px;
  L += max(ridge(c.x * cell * 0.2, g5w), ridge(c.y * cell * 0.2, g5w)) * 0.24;

  float rr = length(c);

  // convergence rings, drifting outward: the one element that guarantees the
  // frame is never twice the same even with a perfectly locked timebase
  L += ridge(rr * 13.0 - t * 0.22, 13.0 * px * 1.4) * 0.42;

  // radial wedges, turning slowly. Angular width has to be converted back to
  // fract units through the radius or the spokes fatten into a solid disc at
  // the centre.
  float an = atan(c.y, c.x) * 0.1591549;
  float spokeW = clamp(1.3 * px * 24.0 / (6.2832 * max(rr, 0.02)), 0.004, 0.42);
  L += ridge(an * 24.0 + t * 0.018, spokeW) * 0.3 * smoothstep(0.05, 0.24, rr);

  // centre reticle
  L += smoothstep(0.006, 0.0, abs(rr - 0.085)) * 0.55;
  L += smoothstep(0.014, 0.0, rr) * 0.7;

  // resolution chirps, two strips: the frequency ramps past the raster's own
  // pitch, so the top of the sweep aliases against the scanline comb and
  // crawls. Free motion, and the most television thing on the card — but kept
  // narrow and dim, because a displacement band that lands on a bright chirp
  // throws a solid white block across a third of the tube.
  float xn = c.x / max(u_ar, 0.001) + 0.5;
  float band = smoothstep(0.030, 0.020, abs(abs(c.y) - 0.255));
  float chirp = sin(c.x * 60.0 + xn * xn * 340.0 + t * 0.6);
  L += band * smoothstep(0.05, 0.55, chirp) * 0.34;

  // greyscale staircase, low in the frame
  float stair = smoothstep(0.034, 0.024, abs(c.y - 0.385));
  L += stair * (floor(clamp(xn, 0.0, 0.999) * 9.0) / 8.0) * 0.34;

  // caption, burned into the signal so it rolls and tears with everything else
  float tx = texture2D(u_text, clamp(s, 0.0, 1.0)).r * u_textAmt;
  L = max(L, tx * 0.78);

  return L;
}

float segDist(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-4), 0.0, 1.0);
  return length(pa - ba * h);
}

void main() {
  vec2 fc = gl_FragCoord.xy / u_dpr;
  vec2 uv = vec2(fc.x / u_size.x, 1.0 - fc.y / u_size.y);  // tube space, y down

  // ---- signal space: where on the transmitted frame this tube texel is
  // currently being painted from -------------------------------------------
  vec2 s = uv;
  s.y = fract(s.y + u_roll);
  float ly = floor(s.y * LINES);
  float chunk = floor(u_time * 18.0);

  // displacement bands: contiguous groups of lines thrown sideways for a few
  // frames at a time. Quantising the trigger to 18Hz is what makes them read
  // as discrete failures instead of as a shimmer.
  float bandId = floor(ly / 9.0);
  float pick = hash21(vec2(bandId, chunk));
  float armed = step(0.91 - 0.38 * u_tearBoost, pick);
  float shove = (hash21(vec2(bandId * 3.1, chunk + 7.0)) - 0.5)
              * (0.03 + 0.15 * u_tearBoost) * u_tear;
  s.x += armed * shove;

  // Per-line timebase error, and a smooth horizontal wobble from the supply.
  // The jitter is kept to a few pixels: past that it stops reading as a line
  // store that cannot keep time and starts shredding the graticule into
  // scratches, and the card loses the one element that fills the whole face.
  s.x += (hash21(vec2(ly, chunk * 1.7)) - 0.5) * 0.0035 * u_tear;
  s.x += (sin(s.y * 13.0 + u_time * 1.3) * 0.004
        + sin(s.y * 47.0 - u_time * 0.7) * 0.0016) * u_tear;
  s.x = fract(s.x);  // a displaced line wraps, it does not clip

  // ---- the picture, plus the video amplifier's faults ---------------------
  // Ringing and a multipath ghost, expressed as luminance taken from offset
  // samples of the same signal. This is where a colour build would reach for a
  // channel split; the same overshoot-then-echo read comes out of weighting
  // three horizontal taps of one monochrome signal, and it survives the
  // palette constraint intact.
  float d = (0.0028 + 0.011 * u_tearBoost) * u_tear;
  float sig = card(s) * 1.2;
  sig -= card(s - vec2(d, 0.0)) * 0.30;                           // overshoot
  sig += card(s + vec2(0.031 + 0.02 * u_tearBoost, 0.0)) * 0.17;  // ghost

  // The transmitter's own low-frequency swim, an adjacent carrier bleeding in.
  // Evaluated ONCE, outside the taps: it is two octaves of value noise, eight
  // hash() calls, and it was the single most expensive thing in this shader
  // when every tap carried a copy — while being far too low-frequency for a
  // 3px horizontal offset to change it by anything the eye can find.
  sig += (fbm2((s - 0.5) * vec2(u_ar, 1.0) * 2.3
               + vec2(u_time * 0.05, -u_time * 0.033)) - 0.42) * 0.36;

  // vertical blanking: the bar the picture is torn at, riding wherever the
  // roll has left the top of the transmitted frame
  float vb = smoothstep(0.052, 0.030, s.y);
  sig *= 1.0 - vb * 0.95;
  sig += smoothstep(0.0075, 0.0, abs(s.y - 0.030)) * 0.85;
  sig += vb * hash21(vec2(floor(fc.x * 0.7), ly + chunk * 31.0)) * 0.30;

  // head-switching noise on the last lines of the frame
  float hs = smoothstep(0.982, 0.995, s.y);
  sig = mix(sig, hash21(vec2(floor(fc.x * 0.5), ly + chunk * 91.0)), hs * 0.85);

  // ---- snow. Analogue noise is correlated along the scan, so it is sampled
  // per source line and at half horizontal resolution, then smeared once more
  // into its neighbour: per-pixel white noise reads as digital sensor grain.
  float nx = floor(fc.x * 0.5);
  float nseed = ly + floor(u_time * 60.0) * 13.0;
  float snow = hash21(vec2(nx, nseed)) * 0.6 + hash21(vec2(nx - 1.0, nseed)) * 0.4;
  float streak = smoothstep(0.86, 1.0, hash21(vec2(ly, floor(u_time * 30.0))));

  // A black-level pedestal, so the raster is being written across the WHOLE
  // face and not only where the card has an element. It costs nothing and it is
  // what puts the scanline comb everywhere instead of only inside the picture.
  float amp = 1.0 - u_dropout;
  float L = (sig + 0.06) * amp;
  L += snow * (0.05 * u_noise + 0.80 * u_dropout + 0.13 * streak * u_noise);

  // interlace, in TUBE space — the beam writes alternate lines of the face, and
  // because the persistence below is also in tube space the unwritten line is
  // last frame's decaying, which is the whole reason interline flicker looks
  // like an interlaced source rather than like a strobe
  float tubeLine = floor(uv.y * LINES);
  L *= mix(1.0, 0.86, abs(mod(tubeLine, 2.0) - u_field));

  L = clamp(L, 0.0, 1.3);

  // ---- pointer beam overdrive --------------------------------------------
  // Distance to the SEGMENT the pointer swept this frame, not to a point: the
  // stroke is continuous at any speed with no ring buffer and no beading, and
  // the persistence below turns it into the comet a real over-driven beam
  // leaves behind.
  float beam = 0.0;
  if (u_beam > 0.0) {
    float dd = segDist(vec2(fc.x, u_size.y - fc.y), u_p0, u_p1);
    beam = u_beam * (exp(-dd * dd / 300.0) + 0.28 * exp(-dd * dd / 2600.0));
  }

  // ---- phosphor -----------------------------------------------------------
  // max(), not mix(): a phosphor is excited to a level and then decays from it.
  // The subtracted floor is not cosmetic — the buffer is 8-bit, and pure
  // multiplicative decay stalls at whatever value rounds to itself, leaving a
  // permanent ghost of every bright thing that ever crossed the tube.
  // in TEXTURE space, not tube space: this pass is drawing into a framebuffer
  // whose row 0 is the bottom, so reading the history at the tube's y-down
  // coordinate flips it every frame and the phosphor accumulates a mirror of
  // itself — which looks uncannily like a second station bleeding through
  vec4 prev = texture2D(u_prev, fc / u_size);
  float r = max(L, prev.r * u_decay.x - 0.006);
  float g = max(L * 0.62, prev.g * u_decay.y - 0.004);
  float b = max(beam, prev.b * u_decay.z - 0.010);
  gl_FragColor = vec4(clamp(vec3(r, g, b), 0.0, 1.0), 1.0);
}
`,Gt=`
${At}

#define LINES ${Mt}.0

uniform sampler2D u_acc;
uniform float u_time;
uniform float u_curve;
uniform float u_bloomR;
uniform float u_bias;
uniform float u_contrast;
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform vec3 u_accent;

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.24, x));
  c = mix(c, u_c2, smoothstep(0.22, 0.52, x));
  c = mix(c, u_c3, smoothstep(0.50, 0.80, x));
  c = mix(c, u_c4, smoothstep(0.78, 1.0, x));
  return c;
}

void main() {
  vec2 fc = gl_FragCoord.xy / u_dpr;
  // The accumulation was written to a framebuffer, whose row 0 is the BOTTOM of
  // the tube, so this pass works in TEXTURE space (y up) rather than in the
  // signal pass's y-down space. Sampling it with a y-down coordinate composites
  // the whole picture upside down, and a test card is symmetric enough to hide
  // it — the caption is the only thing that gives it away.
  vec2 uv = fc / u_size;

  // tube curvature, with the picture overscanned by exactly the amount the
  // distortion pulls in so a full-bleed frame never shows an empty corner
  vec2 cc = uv * 2.0 - 1.0;
  float r2 = dot(cc, cc);
  vec2 wc = cc * (1.0 + r2 * u_curve) / (1.0 + 2.0 * u_curve);
  vec2 uvw = wc * 0.5 + 0.5;

  vec4 acc = texture2D(u_acc, uvw);

  // bloom: a golden-angle spiral, weighted toward the centre. One loop covers
  // both the tight halation and the wide veil because the radius rides the
  // sample index.
  float bl = 0.0;
  float wsum = 0.0;
  for (int i = 0; i < 12; i++) {
    float fi = float(i);
    float a = fi * 2.39996;
    float rad = (fi + 0.7) / 12.0;
    vec2 o = vec2(cos(a), sin(a)) * rad * rad * u_bloomR;
    o.x /= max(u_size.x / u_size.y, 0.001);
    float w = 1.0 - rad * 0.72;
    bl += texture2D(u_acc, uvw + o).r * w;
    wsum += w;
  }
  bl /= max(wsum, 0.001);

  float e = acc.r + acc.g * 0.26 + bl * 0.62;

  // the raster comb, in tube space so it is fixed to the glass
  float sl = 0.5 + 0.5 * cos(uvw.y * 6.2832 * LINES);
  e *= 1.0 - 0.34 * sl;

  // aperture grille: a 3-css-px vertical pitch, phase-locked to the display and
  // not to the picture, so it survives the adaptive render scale unmoved
  float grille = 0.5 + 0.5 * cos(fc.x * 2.0944);
  e *= 1.0 - 0.13 * grille;

  // mains hum bar, drifting up the face at the beat frequency between the
  // supply and the field rate
  float hum = fract(uvw.y - u_time * 0.055) - 0.5;
  e *= 1.0 + 0.13 * exp(-hum * hum * 26.0);

  // the glass itself: a broad off-axis sheen and the shadow of the bezel
  e += (1.0 - smoothstep(0.0, 1.5, length(wc - vec2(-0.55, 0.62)))) * 0.045;
  float vig = smoothstep(0.55, 1.42, length(wc * vec2(1.0, 1.12)));
  e *= 1.0 - vig * 0.42;
  e -= smoothstep(0.86, 1.0, max(abs(wc.x), abs(wc.y))) * 0.10;

  float L = clamp((e - 0.5) * u_contrast + 0.5 + u_bias, 0.0, 1.0);
  vec3 col = ramp(L);

  // accent is the pointer's beam and nothing else: acc.b is written only while
  // a pointer is on the tube and decays to exactly zero, so a resting frame
  // contains none of it
  float lock = clamp(acc.b * 1.35, 0.0, 1.0);
  col = mix(col, mix(col, u_accent, 0.62), lock);

  gl_FragColor = vec4(col, 1.0);
}
`;function Y(i){const r=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i.trim());if(!r)return null;let s=r[1];s.length===3&&(s=s.split("").map(T=>T+T).join(""));const l=parseInt(s,16);return[(l>>16&255)/255,(l>>8&255)/255,(l&255)/255]}function U(i,r,s){return[i[0]+(r[0]-i[0])*s,i[1]+(r[1]-i[1])*s,i[2]+(r[2]-i[2])*s]}function Ot([i,r,s]){return .2126*i+.7152*r+.0722*s}function yt(i,r,s){const l=i.createShader(r);if(i.shaderSource(l,s),i.compileShader(l),!i.getShaderParameter(l,i.COMPILE_STATUS)){const T=i.getShaderInfoLog(l);throw i.deleteShader(l),new Error(`flyback-tear: shader compile failed: ${T??""}`)}return l}class Rt{constructor(r,s){this.gl=r,this.prog=null,this.vs=null,this.fs=null,this.locs=new Map,this.vs=yt(r,r.VERTEX_SHADER,Nt),this.fs=yt(r,r.FRAGMENT_SHADER,s);const l=r.createProgram();if(!l)throw new Error("flyback-tear: createProgram failed");if(this.prog=l,r.attachShader(l,this.vs),r.attachShader(l,this.fs),r.bindAttribLocation(l,0,"a_pos"),r.linkProgram(l),!r.getProgramParameter(l,r.LINK_STATUS))throw new Error("flyback-tear: link failed")}use(){this.gl.useProgram(this.prog)}loc(r){return this.locs.has(r)||this.locs.set(r,this.gl.getUniformLocation(this.prog,r)),this.locs.get(r)??null}f(r,s){this.gl.uniform1f(this.loc(r),s)}i(r,s){this.gl.uniform1i(this.loc(r),s)}v2(r,s,l){this.gl.uniform2f(this.loc(r),s,l)}v3(r,s){this.gl.uniform3f(this.loc(r),s[0],s[1],s[2])}destroy(){const r=this.gl;this.prog&&r.deleteProgram(this.prog),this.vs&&r.deleteShader(this.vs),this.fs&&r.deleteShader(this.fs),this.prog=null,this.vs=null,this.fs=null,this.locs.clear()}}const Lt=7.3,$t=.9,jt=.55,Vt=22;function kt({caption:i="NO SIGNAL",captionWeight:r=700,captionFit:s=.52,captionY:l=.5,tear:T=1,noise:Xe=1,persistence:Be=1,curvature:Ce=1,speed:le=1,paused:Ne=!1,children:ze,className:Pt="",style:Ut}){const Ge=S.useRef(null),Oe=S.useRef(null),Ft=S.useId(),X=S.useRef(Ne);X.current=Ne;const B=S.useRef(i);return B.current=i,S.useEffect(()=>{const f=Ge.current,d=Oe.current;if(!f||!d)return;const e=d.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!e)return;let c=null,u=null,F=null,v=null,y=0,x=null,$e=0,ce=0,ue=!1,m=!1,he=!1,p=0,g=0,C=1,fe=performance.now(),N=0,de=0;const je=[1,.78,.6],Dt=24;let z=0,G=16.7,O=0,$=0,H=8e3,R=0,J=0,Ve=2.6,me=0,qe=0,We=1.1,j=0,Ye=0,He=11;const Je=t=>{const a=N;if(a>=Ve&&(J+=(Math.random()<.5?-1:1)*(.07+Math.random()*.28),Ve=a+5+Math.random()*8),J*=Math.exp(-t/.8),R+=J*t+t*.0035,Math.abs(J)<.03){let h=R-Math.round(R);h*=1-Math.exp(-t/.32),R-=h}R-=Math.floor(R),a>=We&&(qe=a+.07+Math.random()*.4,We=a+.9+Math.random()*3.4);const o=a<qe?1:0;me+=(o-me)*(1-Math.exp(-t/(o?.018:.11))),a>=He&&(Ye=a+.06+Math.random()*.16,He=a+7+Math.random()*11);const n=a<Ye?1:0;j+=(n-j)*(1-Math.exp(-t/.02)),n===0&&j<.004&&(j=0)},pe=.012,St=.06,ve=26;let L=!1,b=0,w=0,M=0,A=0,K=0,Q=0,Z=0,ee=0,ge=0,xe=0,k=0,P=0,_e=0,be=0,te=!0;const It=t=>{if(K=M,Q=A,P+=(k-P)*(1-Math.exp(-t/.09)),!L||t<=0)return;const a=1-Math.exp(-t/St);Z+=((b-ge)/t-Z)*a,ee+=((w-xe)/t-ee)*a,ge=b,xe=w;let o=Z*pe,n=ee*pe;const h=Math.hypot(o,n);h>ve&&(o=o/h*ve,n=n/h*ve);const _=1-Math.exp(-t/pe);M+=(b+o-M)*_,A+=(w+n-A)*_};let we=[.02,.02,.02],Ee=[.16,.16,.16],Te=[.5,.5,.5],ye=[.9,.9,.9],Re=[1,1,1],Ke=[0,.42,1],Le=0,Me=1.2;const Qe=()=>{const t=getComputedStyle(document.documentElement),a=Y(t.getPropertyValue("--background"))??[1,1,1],o=Y(t.getPropertyValue("--foreground"))??[.09,.09,.09],n=Y(t.getPropertyValue("--ns-muted"))??[.55,.55,.55],h=Y(t.getPropertyValue("--border"))??[.18,.18,.18];Ke=Y(t.getPropertyValue("--ns-accent"))??[0,.42,1];const _=[0,0,0],q=[1,1,1];Ot(a)<.5?(we=U(a,_,.6),Ee=U(h,o,.2),Te=U(n,o,.2),ye=o,Re=U(o,q,.9),Le=0,Me=1.2):(we=a,Ee=U(a,n,.34),Te=U(n,a,.08),ye=o,Re=U(o,_,.55),Le=-.04,Me=1.36)};Qe();const Ae=document.createElement("canvas"),ae=()=>{if(p<2||g<2)return;const t=Math.max(256,Math.min(1024,Math.round(p))),a=Math.max(128,Math.round(t*(g/p)));Ae.width=t,Ae.height=a;const o=Ae.getContext("2d",{willReadFrequently:!0});if(!o)return;const n=getComputedStyle(f).fontFamily||"system-ui, sans-serif",h=B.current.split(`
`).filter(W=>W.length>0);if(o.clearRect(0,0,t,a),h.length>0){o.font=`${r} 100px ${n}`;let E=1;for(const D of h)E=Math.max(E,o.measureText(D).width);const Et=Math.min(t*s*100/E,a*.4/h.length);o.font=`${r} ${Et}px ${n}`,o.textAlign="center",o.textBaseline="middle",o.fillStyle="#fff";const Tt=Et*1.06,Ct=a*l-(h.length-1)*Tt/2;for(let D=0;D<h.length;D++)o.fillText(h[D],t/2,Ct+D*Tt)}const _=o.getImageData(0,0,t,a).data,q=new Uint8Array(t*a*4);for(let W=0,E=0;W<t*a;W++,E+=4)q[E]=_[E+3],q[E+3]=255;x?e.bindTexture(e.TEXTURE_2D,x):(x=e.createTexture(),e.bindTexture(e.TEXTURE_2D,x),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR)),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,a,0,e.RGBA,e.UNSIGNED_BYTE,q),$e=h.length>0?1:0},Ze=(t,a)=>{const o=e.createTexture(),n=e.createFramebuffer();return!o||!n?null:(e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,a,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{fb:n,tex:o})},et=()=>{if(v){for(const t of v)e.deleteFramebuffer(t.fb),e.deleteTexture(t.tex);v=null}},Xt=(t,a)=>{et();const o=Ze(t,a),n=Ze(t,a);!o||!n||(v=[o,n],y=0)},ke=t=>{if(!c||!v)return;const a=v[y],o=v[1-y];c.use(),e.bindFramebuffer(e.FRAMEBUFFER,o.fb),e.viewport(0,0,d.width,d.height),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,x),c.i("u_prev",0),c.i("u_text",1),c.v2("u_size",p,g),c.f("u_dpr",C),c.f("u_ar",p/Math.max(g,1)),c.f("u_time",m?Lt:N),c.f("u_textAmt",$e),c.f("u_roll",m?$t:R),c.f("u_tear",Math.max(0,T)),c.f("u_tearBoost",m?jt:me),c.f("u_noise",Math.max(0,Xe)),c.f("u_dropout",m?0:j),c.f("u_field",de);const n=Math.max(.05,Be);c.v3("u_decay",[Math.exp(-t/(.045*n)),Math.exp(-t/(.2*n)),Math.exp(-t/(.52*n))]),c.v2("u_p0",K,Q),c.v2("u_p1",M,A),c.f("u_beam",L||P>.002?P:0),e.drawArrays(e.TRIANGLES,0,6),e.bindFramebuffer(e.FRAMEBUFFER,null),y=1-y,de=de===0?1:0},oe=()=>{!u||!v||(u.use(),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,d.width,d.height),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,v[y].tex),u.i("u_acc",0),u.v2("u_size",p,g),u.f("u_dpr",C),u.f("u_time",m?Lt:N),u.f("u_curve",.055*Math.max(0,Ce)),u.f("u_bloomR",.055),u.f("u_bias",Le),u.f("u_contrast",Me),u.v3("u_c0",we),u.v3("u_c1",Ee),u.v3("u_c2",Te),u.v3("u_c3",ye),u.v3("u_c4",Re),u.v3("u_accent",Ke),e.drawArrays(e.TRIANGLES,0,6))},re=()=>{const t=.016666666666666666;for(let a=0;a<Vt;a++)m||(N+=t*Math.max(.05,le),Je(t)),ke(t);oe()},tt=t=>{const a=t-fe,o=Math.min(.05,Math.max(5e-4,a/1e3));fe=t,N+=o*Math.max(.05,le),Je(o),It(o),ke(o),oe();const n=Math.min(50,a);G+=(n-G)*(1-Math.exp(-n/120)),G>Dt?(O+=n,$=0):($+=n,O=0);const h=O>900&&z<je.length-1,_=$>H&&z>0;(h||_)&&(z+=h?1:-1,h&&(H=Math.min(64e3,H*2)),O=0,$=0,G=16.7,at()),ce=requestAnimationFrame(tt)},Pe=()=>{ue||he||(ue=!0,fe=performance.now(),ce=requestAnimationFrame(tt))},V=()=>{cancelAnimationFrame(ce),ue=!1},at=()=>{if(p<2||g<2)return;C=Math.min(window.devicePixelRatio||1,2)*je[z];const t=Math.max(2,Math.round(p*C)),a=Math.max(2,Math.round(g*C)),o=d.width!==t||d.height!==a;o&&(d.width=t,d.height=a),d.style.width=`${p}px`,d.style.height=`${g}px`,(o||!v)&&Xt(t,a),re()},Ue=()=>{const t=f.getBoundingClientRect();if(t.width<2||t.height<2)return;const a=Math.abs(t.width-p)>.5||Math.abs(t.height-g)>.5;p=t.width,g=t.height,_e=t.left,be=t.top,te=!1,z=0,O=0,$=0,H=8e3,G=16.7,a&&ae(),at()},Bt=()=>{if(!te)return;const t=f.getBoundingClientRect();_e=t.left,be=t.top,te=!1},ne=()=>{te=!0},Fe=t=>{Bt();const a=typeof t.getCoalescedEvents=="function"?t.getCoalescedEvents():null,o=a&&a.length>0?a[a.length-1]:t;b=o.clientX-_e,w=o.clientY-be},De=()=>{M=b,A=w,K=b,Q=w,Z=0,ee=0,ge=b,xe=w,L=!0},Se=()=>{ke(1/60),oe()},ot=t=>{Fe(t),De(),k=1,m&&(P=1,Se())},rt=t=>{Fe(t),L||De(),k=1,m&&(K=M,Q=A,M=b,A=w,P=1,Se())},nt=()=>{k=0,L=!1},st=t=>{Fe(t),De(),k=1,m&&(P=1,Se())},it=t=>{t.pointerType!=="mouse"&&(k=0,L=!1)},lt=()=>{k=0,L=!1},ct=(t=!1)=>{try{c=new Rt(e,zt),u=new Rt(e,Gt)}catch{return t||e.getExtension("WEBGL_lose_context")?.loseContext(),!1}return F=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,F),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),!0};if(!ct())return;const ut=new ResizeObserver(Ue);ut.observe(f),Ue(),document.fonts?.ready&&document.fonts.ready.then(()=>{he||(ae(),m&&re())}),f.addEventListener("pointerenter",ot),f.addEventListener("pointerleave",nt),f.addEventListener("pointermove",rt),f.addEventListener("pointerdown",st),f.addEventListener("pointerup",it),f.addEventListener("pointercancel",lt),window.addEventListener("scroll",ne,{passive:!0,capture:!0}),window.addEventListener("resize",ne,{passive:!0});const se=window.matchMedia("(prefers-reduced-motion: reduce)");let ht=se.matches;const ie=()=>{ht||X.current?(m=!0,V(),re()):(m=!1,Pe())},ft=()=>{ht=se.matches,ie()};se.addEventListener("change",ft);let Ie=!0;const dt=new IntersectionObserver(t=>{Ie=t.some(a=>a.isIntersecting),Ie?!m&&!document.hidden&&Pe():V()},{threshold:0});dt.observe(f);const mt=()=>{document.hidden?V():!m&&Ie&&Pe()};document.addEventListener("visibilitychange",mt),ie();let pt=X.current,vt=B.current,gt=0;const xt=()=>{X.current!==pt&&(pt=X.current,ie()),B.current!==vt&&(vt=B.current,ae(),m&&re()),gt=window.setTimeout(xt,140)};xt();const _t=new MutationObserver(()=>{Qe(),m&&oe()});_t.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const bt=t=>{t.preventDefault(),V()},wt=()=>{c=null,u=null,v=null,x=null,F=null,y=0,ct(!0)&&(p=0,g=0,Ue(),ae(),ie())};return d.addEventListener("webglcontextlost",bt),d.addEventListener("webglcontextrestored",wt),()=>{he=!0,ut.disconnect(),dt.disconnect(),se.removeEventListener("change",ft),document.removeEventListener("visibilitychange",mt),_t.disconnect(),d.removeEventListener("webglcontextlost",bt),d.removeEventListener("webglcontextrestored",wt),f.removeEventListener("pointerenter",ot),f.removeEventListener("pointerleave",nt),f.removeEventListener("pointermove",rt),f.removeEventListener("pointerdown",st),f.removeEventListener("pointerup",it),f.removeEventListener("pointercancel",lt),window.removeEventListener("scroll",ne,{capture:!0}),window.removeEventListener("resize",ne),window.clearTimeout(gt),V(),et(),x&&e.deleteTexture(x),x=null,F&&e.deleteBuffer(F),F=null,c?.destroy(),u?.destroy(),c=null,u=null,d.isConnected||e.getExtension("WEBGL_lose_context")?.loseContext()}},[r,s,l,T,Xe,Be,Ce,le]),I.jsxs("div",{ref:Ge,"data-flyback-tear":Ft,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${Pt}`,style:Ut,children:[I.jsx("canvas",{ref:Oe,"aria-hidden":"true",className:"absolute inset-0 block"}),I.jsx("h1",{className:"sr-only",children:i.split(`
`).join(" ")}),ze?I.jsx("div",{className:"relative z-[1] h-full w-full",children:ze}):null]})}kt.displayName="FlybackTear";function Wt(){return I.jsx("div",{className:"ns-stage",children:I.jsx(kt,{children:"示例"})})}export{Wt as default};
