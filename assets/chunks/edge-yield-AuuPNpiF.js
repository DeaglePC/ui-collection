import{r as C,j as F}from"./client-CsvIHAk3.js";const ht=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,ye=.014,ft=.06,_e=30,tt=1.15,Ee=9.6,dt=`
precision highp float;

uniform vec2 u_size;      // css px
uniform float u_dpr;
uniform float u_time;
uniform float u_px;       // world units per css px
uniform vec2 u_stage;     // stage position, world units
uniform vec2 u_lagVel;    // stage velocity, world units/sec (drives the sweep tear)
uniform float u_rot;      // stage rotation, radians
uniform float u_density;
uniform float u_relief;
uniform float u_noise;
uniform vec2 u_beam;      // pointer, css px
uniform float u_hover;    // 0..1 eased
uniform float u_sweep;    // 0..1 down the frame
uniform float u_pass;     // acquisition pass counter
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform float u_bias;
uniform float u_contrast;

// The detector. Upper-left, ~34 degrees of elevation, and it is the ONLY
// directional term in the shader — there is no light.
const vec3 DET = vec3(-0.593, -0.526, 0.610);
// height the march must clear per unit of its own step parameter: since a step
// of t moves length(DET.xy) horizontally, this is DET.z, not tan(elevation)
const float DET_RISE = 0.610;

// Ceiling, in css px, on how far the stage's motion may shear the picture
// across the sweep line. See the note at the shear itself in main().
const float SHEAR_MAX = 0.8;

float hash21(vec2 p) {
  p = fract(p * vec2(287.13, 419.71));
  p += dot(p, p + 27.31);
  return fract(p.x * p.y);
}

vec2 hash22(vec2 p) {
  return vec2(hash21(p), hash21(p + 19.19));
}

// Value noise with its analytic derivative. Everything in the field returns
// vec3(value, d/dx, d/dy) so one evaluation yields the normal.
vec3 noised(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  vec2 du = 6.0 * f * (1.0 - f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  float k1 = b - a;
  float k2 = c - a;
  float k3 = a - b - c + d;
  return vec3(
    a + k1 * u.x + k2 * u.y + k3 * u.x * u.y,
    du.x * (k1 + k3 * u.y),
    du.y * (k2 + k3 * u.x)
  );
}

float noiseOnly(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Rotation between octaves, with its transpose carried alongside so the
// derivative chains correctly instead of being subtly wrong in a way that only
// shows up as normals that do not match the silhouette.
const mat2 OCT = mat2(1.624, 1.218, -1.218, 1.624);   // 2.03 * rot(36.9deg)
const mat2 OCT_T = mat2(1.624, -1.218, 1.218, 1.624);

// sc is applied inside rather than by the caller so the chain rule back to u
// cannot be forgotten at a call site — a gradient that is right in magnitude
// but wrong by a constant factor is the kind of bug that shows up only as
// normals that do not agree with the silhouette.
vec3 fbmd(vec2 p, float sc, float amp) {
  vec3 s = vec3(0.0);
  float a = amp;
  vec2 q = p * sc;
  mat2 t = mat2(1.0, 0.0, 0.0, 1.0);
  for (int i = 0; i < 3; i++) {
    vec3 n = noised(q);
    s.x += a * (n.x - 0.5);
    s.yz += a * (t * n.yz);
    a *= 0.5;
    q = OCT * q;
    t = OCT_T * t;
  }
  s.yz *= sc;
  return s;
}

float fbmOnly(vec2 p, float sc, float amp) {
  float s = 0.0;
  float a = amp;
  vec2 q = p * sc;
  for (int i = 0; i < 3; i++) {
    s += a * (noiseOnly(q) - 0.5);
    a *= 0.5;
    q = OCT * q;
  }
  return s;
}

// Smooth union that keeps the crease narrow. k is fed in CSS pixels converted
// to world units, so the seam where two grains meet is the same couple of
// pixels wide at any magnification and any device pixel ratio — the crevice is
// a line, not a soft valley, but it is never a one-pixel normal discontinuity
// that sparkles under the sec(theta) response.
vec3 smaxG(vec3 a, vec3 b, float k) {
  float w = clamp(0.5 + 0.5 * (b.x - a.x) / k, 0.0, 1.0);
  return vec3(mix(a.x, b.x, w) + k * w * (1.0 - w), mix(a.yz, b.yz, w));
}

float smaxH(float a, float b, float k) {
  float w = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(a, b, w) + k * w * (1.0 - w);
}

// ---------------------------------------------------------------------------
// Grains. A jittered lattice of ellipsoid caps, h = A*sqrt(1 - |d|^2/r^2) — the
// exact spheroid, and deliberately sqrt rather than a tunable pow(t, prof): a
// general exponent costs TWO pow() per cell (the height and the derivative's
// t^(prof-1)) and there are up to 45 cells per fragment across the five layers
// plus the horizon march. The silhouette's last pixel is kept off the aliasing
// edge by the tc floor and the smax crease instead.
//
// Because q = u*S, the S in the height and the S in dq/du cancel: the gradient
// is scale-free, which is correct — a sphere has the same slopes however small
// it is drawn — and it means every layer shares one closed form.
// ---------------------------------------------------------------------------
vec3 grains(vec2 u, float S, mat2 warp, mat2 warpT, float seed, float rmin,
            float rspan, float elong, float jit, out float matId) {
  vec2 q = warp * u * S;
  vec2 ip = floor(q);
  vec2 f = fract(q);
  // The loop carries a SCORE, not a height. h = elong*r*sqrt(tc)/S is monotonic
  // in r*r*tc, so the winner is found without a sqrt per cell, and the
  // gradient's reciprocal and the warp transpose are paid once instead of nine
  // times. What that buys is not the arithmetic — it is that the nine live
  // vec3s collapse to four floats. This shader was register-spilling, and the
  // measured cost of the specimen was a cliff rather than a slope.
  float bs = 0.0;
  vec2 bd = vec2(0.0);
  matId = 0.5;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = hash22(ip + g + seed);
      float r = rmin + rspan * fract(o.x * 7.13 + o.y * 3.71);
      vec2 d = f - (g + 0.5 + (o - 0.5) * jit);
      float t = 1.0 - dot(d, d) / (r * r);
      if (t > 0.0) {
        float sc = r * r * max(t, 0.0008);
        if (sc > bs) {
          bs = sc;
          bd = d;
          matId = o.y;
        }
      }
    }
  }
  if (bs <= 0.0) return vec3(0.0);
  // s = r*sqrt(tc), so the height is elong*s/S and inversesqrt(tc)/r is 1/s:
  // dh/dq = -elong*d/s, and dq/du = S*warp, so the two S cancel and what is
  // left is the warp's TRANSPOSE — a sphere has the same slopes however small
  // it is drawn
  float s = sqrt(bs);
  return vec3(elong * s / S, warpT * ((-elong / s) * bd));
}

float grainsH(vec2 u, float S, mat2 warp, float seed, float rmin, float rspan,
              float elong, float jit) {
  vec2 q = warp * u * S;
  vec2 ip = floor(q);
  vec2 f = fract(q);
  float bs = 0.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = hash22(ip + g + seed);
      float r = rmin + rspan * fract(o.x * 7.13 + o.y * 3.71);
      vec2 d = f - (g + 0.5 + (o - 0.5) * jit);
      float t = 1.0 - dot(d, d) / (r * r);
      if (t > 0.0) bs = max(bs, r * r * max(t, 0.0008));
    }
  }
  return elong * sqrt(bs) / S;
}

// Filaments draped across the specimen: a warped ridge train. The warp comes
// from the same noise the substrate uses, so the fibres wander with the
// fracture surface instead of lying on it like printed stripes.
vec3 fibre(vec2 u, vec2 dir, float F, float amp, float warpAmt, float seed) {
  vec3 w = noised(u * 2.7 + seed);
  float s = dot(u, dir) * F + w.x * warpAmt;
  vec2 ds = dir * F + w.yz * (warpAmt * 2.7);
  float strand = hash21(vec2(floor(s), seed));
  float a = amp * (0.35 + 0.65 * strand);
  float k = fract(s) - 0.5;
  float e = exp(-k * k * 30.0);
  return vec3(a * e, a * e * (-60.0 * k) * ds);
}

float fibreH(vec2 u, vec2 dir, float F, float amp, float warpAmt, float seed) {
  float s = dot(u, dir) * F + noiseOnly(u * 2.7 + seed) * warpAmt;
  float strand = hash21(vec2(floor(s), seed));
  float k = fract(s) - 0.5;
  return amp * (0.35 + 0.65 * strand) * exp(-k * k * 30.0);
}

const vec2 FIB_A = vec2(0.9272, 0.3746);
const vec2 FIB_B = vec2(-0.3624, 0.9320);

// The specimen. Returns the height field and its gradient; 'coarse' is the
// same surface without the additive debris and micro-relief, which is what the
// horizon march compares against so shadows are not biased by detail the march
// cannot see.
const mat2 IDENT = mat2(1.0, 0.0, 0.0, 1.0);
// squashed and turned, so the medium layer reads as rods and prisms wedged
// between the round grains rather than as a second, smaller copy of the same
// population
const mat2 ROD = mat2(0.918, 0.397, -0.834, 1.928);
const mat2 ROD_T = mat2(0.918, -0.834, 0.397, 1.928);

void specimen(vec2 u, float dens, out vec2 grad, out float matId, out float marchH) {
  float k = u_px * 2.6;
  float m1;
  float m2;

  vec3 h = fbmd(u, 2.9, 0.026);
  // a sparse population of much larger bodies. Without it every grain is the
  // same size and the field reads as a manufactured lattice — packed roe rather
  // than a specimen. r stays well under half a cell, so most cells are empty and
  // the big ones arrive at an irregular spacing the eye cannot pre-empt.
  float m0;
  h = smaxG(h, grains(u, 4.2 * dens, IDENT, IDENT, 137.0,
                      0.15, 0.19, 0.86, 0.95, m0), k);
  h = smaxG(h, fibre(u, FIB_A, 5.6 * dens, 0.0125, 0.55, 3.1), k);
  h = smaxG(h, fibre(u, FIB_B, 8.3 * dens, 0.0085, 0.42, 17.7), k);
  vec3 g1 = grains(u, 10.5 * dens, IDENT, IDENT, 5.0,
                   0.30, 0.20, 0.80, 0.72, m1);
  // the march's reference height, captured here for free: it must be THIS
  // layer's raw height, because this layer is the only thing the march samples
  marchH = g1.x;
  h = smaxG(h, g1, k);
  h = smaxG(h, grains(u, 24.0 * dens, ROD, ROD_T, 41.0,
                      0.26, 0.26, 0.90, 0.80, m2), k);
  // the big bodies get their own atomic number too, so a boulder is not forced
  // to the same brightness as the small grains it is sitting among
  matId = mix(mix(m1, m2, 0.4), m0, 0.35);

  // debris and micro-relief sit ON whatever surface won, so they are summed
  // rather than unioned — a fleck of dust on top of a grain is above it, and a
  // union would hide every small thing behind every large one
  float m3;
  h += grains(u, 58.0 * dens, IDENT, IDENT, 91.0,
              0.20, 0.22, 0.85, 0.88, m3) * 0.85;
  h += fbmd(u, 21.0, 0.0042);
  h += fbmd(u, 96.0, 0.0016);

  grad = h.yz;
}

// What the march samples: the round-grain population and NOTHING else.
//
// Cost here is a cliff, not a slope — this shader lives near the edge of its
// register budget, and adding a second lattice layer plus the substrate fbm to
// the march once took it from ~15ms to 50-75ms, a 2.3x increase in work for a
// 3.5x increase in time. So the march gets exactly one layer, and h0 is
// that SAME layer's raw height at u (captured in specimen() for free) rather
// than the full surface: comparing a full-surface h0 against a one-layer sample
// biases every comparison and the frame loses its shadows altogether.
float specimenH(vec2 u, float dens) {
  return grainsH(u, 10.5 * dens, IDENT, 5.0, 0.30, 0.20, 0.80, 0.72);
}

// Horizon march toward the detector. The reach matters more than the step
// count: it has to clear the largest grain radius comfortably, or the result is
// a tight contact halo around every bump — which is ambient occlusion on a
// heightfield, the exact generic read this is trying not to be.
float collect(vec2 u, float h0, float dens) {
  float s = 1.0;
  float t = u_px * 4.0;
  for (int i = 0; i < 3; i++) {
    float hs = specimenH(u + DET.xy * t, dens);
    float over = hs - (h0 + t * DET_RISE);
    s = min(s, 1.0 - clamp(over / (u_px * 5.0 + t * 0.30), 0.0, 1.0));
    t *= 4.2;
  }
  return s;
}

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.26, x));
  c = mix(c, u_c2, smoothstep(0.24, 0.54, x));
  c = mix(c, u_c3, smoothstep(0.51, 0.82, x));
  c = mix(c, u_c4, smoothstep(0.80, 1.0, x));
  return c;
}

void main() {
  // DOM-space css px, y down, so the pointer, the scan lines and the field all
  // share one coordinate system
  vec2 p = vec2(gl_FragCoord.x, u_size.y * u_dpr - gl_FragCoord.y) / u_dpr;
  float ref = min(u_size.x, u_size.y);

  // ---- acquisition geometry (screen space, never drifts with the stage) ----
  float line = floor(p.y);
  float yf = p.y / u_size.y;
  // lines above the sweep were written this pass, lines below on the last one
  float below = step(u_sweep, yf);
  float pass = u_pass - below;
  // how long ago this line was acquired: the stage kept moving in between, so
  // the picture shears very slightly across the sweep line
  float lag = (below > 0.5 ? (1.0 + u_sweep - yf) : (u_sweep - yf)) * ${tt.toFixed(3)};
  // sub-pixel line-to-line misregistration, applied to the sample position so
  // the shadows move with the rims instead of sliding under them
  float jx = (hash21(vec2(line, pass * 5.7)) - 0.5) * 0.55;

  float dens = clamp(u_density, 0.35, 3.0);
  vec2 sp = vec2(p.x + jx, p.y);
  vec2 cu = (sp - u_size * 0.5) * u_px;
  float cs = cos(u_rot);
  float sn = sin(u_rot);
  // The shear this lag buys has to stay SUB-PIXEL. Left unbounded it is
  // |u_lagVel| * SWEEP_PERIOD / u_px css px: about 6px on the drift alone, and
  // up to ~75px while the hand is panning, since the pan velocity is folded
  // into u_lagVel. At that size the sweep line stops reading as a scan and
  // reads as a tear — the specimen above it is a different picture from the
  // one below, which is the one thing a continuous surface must never do.
  // Saturating instead of clamping keeps it exactly linear in the slow regime
  // that is honest, and asymptotic to SHEAR_MAX css px at any speed.
  vec2 sh = u_lagVel * lag;
  float shm = SHEAR_MAX * u_px;
  sh *= shm / (length(sh) + shm);
  vec2 u = mat2(cs, sn, -sn, cs) * cu + u_stage - sh;

  vec2 grad;
  float matId;
  float marchH;
  specimen(u, dens, grad, matId, marchH);

  float gm = length(grad);
  if (gm > 12.0) grad *= 12.0 / gm;
  vec3 n = normalize(vec3(-grad.x * u_relief, -grad.y * u_relief, 1.0));

  // ---- detector model ------------------------------------------------------
  // secondary yield: sec(theta), floored so the silhouette saturates instead of
  // going singular in whichever pixel happens to land on it
  float nz = max(n.z, 0.13);
  float delta = pow(1.0 / nz, 0.95);
  // atomic-number contrast: different grains are different stuff
  delta *= 0.86 + 0.30 * matId;

  float shadow = collect(u, marchH, dens);
  float facing = max(dot(n, DET), 0.0);
  float eta = 0.30 + 0.70 * facing * shadow;
  // a small isotropic pedestal: electrons that scatter off the chamber wall and
  // come back, which is why a real crevice is dark but never black
  eta += 0.055 * shadow;

  float sig = delta * eta * 0.42;
  // the far side of the specimen subtends less of the detector — a broad
  // brightness gradient toward the detector, which is what an SEM has instead
  // of a vignette
  sig *= 1.0 + 0.13 * dot(normalize(vec2(-0.6, -0.55)), (p - u_size * 0.5) / ref);
  sig = sig / (1.0 + sig * 0.50);

  // ---- beam spot -----------------------------------------------------------
  // where the pointer is, the beam dwells: more electrons per pixel, so more
  // signal and less shot noise. That is the whole interaction — no glow sprite.
  vec2 bd = (p - u_beam) / (ref * 0.155);
  float spot = exp(-dot(bd, bd)) * u_hover;
  sig = mix(sig, sig * 1.30 + 0.045, spot * 0.85);

  // ---- acquisition ---------------------------------------------------------
  float comb = 1.0 - 0.042 * (0.5 + 0.5 * cos(6.2831853 * p.y / 2.7));
  sig *= comb;
  // per-line DC: a fast component that changes every pass, and a slow drift
  // that reads as the amplifier wandering
  sig += (hash21(vec2(line, pass * 3.1)) - 0.5) * 0.026;
  sig += (noiseOnly(vec2(line * 0.07, u_time * 0.6)) - 0.5) * 0.045;
  // charge streaking, pulled along the fast (horizontal) axis and gated on
  // signal, since it is bright features that charge
  float streak = noiseOnly(vec2(p.x * 0.010, p.y * 0.62) + vec2(u_time * 0.05, 0.0));
  sig += (streak - 0.5) * 0.085 * smoothstep(0.35, 0.9, sig);

  // shot noise: Poisson, so the amplitude tracks sqrt of the signal, and
  // correlated with the pixel to its left because the beam has not finished
  // moving. The lattice is css px and phase-locked to the display, so the
  // adaptive render scale cannot change the grain size.
  vec2 pix = floor(p);
  vec2 ns = vec2(pass * 17.3, pass * 7.7);
  float nA = hash21(pix + ns);
  float nB = hash21(pix + vec2(-1.0, 0.0) + ns);
  float shot = mix(nA, nB, 0.42) - 0.5;
  sig += shot * 0.115 * u_noise * (0.35 + 0.65 * sqrt(max(sig, 0.0))) * mix(1.0, 0.28, spot);

  // the sweep line itself: the beam is on it right now
  // its amplitude is the whole question. At 0.22 it was a saturated rule right
  // across the frame — measured at +76/255 over the surrounding rows, five
  // times the brightest ordinary grain row, which is not what a beam passing
  // over a line looks like. Kept just clear of the shot noise so it reads as
  // the pass going by, and rolled off where the signal is already high so it
  // cannot blow a rim out.
  float sweepD = abs(yf - u_sweep);
  float onLine = 0.040 * exp(-sweepD * sweepD * 26000.0)
               + 0.016 * exp(-sweepD * sweepD * 700.0);
  sig += onLine * (1.0 - 0.55 * clamp(sig, 0.0, 1.0));

  float L = clamp((sig - 0.5) * u_contrast + 0.5 + u_bias, 0.0, 1.0);
  gl_FragColor = vec4(ramp(L), 1.0);
}
`;function Z(n){const a=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(n.trim());if(!a)return null;let t=a[1];t.length===3&&(t=t.split("").map(c=>c+c).join(""));const i=parseInt(t,16);return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function b(n,a,t){return[n[0]+(a[0]-n[0])*t,n[1]+(a[1]-n[1])*t,n[2]+(a[2]-n[2])*t]}function ut([n,a,t]){return .2126*n+.7152*a+.0722*t}function et(n,a,t){const i=n.createShader(a);if(n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS)){const c=n.getShaderInfoLog(i);throw n.deleteShader(i),new Error(`edge-yield: shader compile failed: ${c??""}`)}return i}class mt{constructor(a,t){this.canvas=a,this.frag=t,this.gl=null,this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.locs=new Map}init(a=!1){const t=this.canvas.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return!1;this.gl=t;try{this.vs=et(t,t.VERTEX_SHADER,ht),this.fs=et(t,t.FRAGMENT_SHADER,this.frag);const c=t.createProgram();if(!c)return this.abandon(a),!1;if(this.program=c,t.attachShader(c,this.vs),t.attachShader(c,this.fs),t.linkProgram(c),!t.getProgramParameter(c,t.LINK_STATUS))return this.abandon(a),!1}catch{return this.abandon(a),!1}t.useProgram(this.program),this.buffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const i=t.getAttribLocation(this.program,"a_pos");return t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0),this.locs.clear(),!0}abandon(a){const t=a?null:this.gl?.getExtension("WEBGL_lose_context");this.destroy(),t?.loseContext()}loc(a){return this.locs.has(a)||this.locs.set(a,this.gl.getUniformLocation(this.program,a)),this.locs.get(a)??null}f(a,t){this.gl?.uniform1f(this.loc(a),t)}v2(a,t,i){this.gl?.uniform2f(this.loc(a),t,i)}v3(a,t){this.gl?.uniform3f(this.loc(a),t[0],t[1],t[2])}draw(a,t){const i=this.gl;!i||!this.program||(i.viewport(0,0,a,t),i.drawArrays(i.TRIANGLES,0,6))}destroy(){const a=this.gl;a&&(this.buffer&&a.deleteBuffer(this.buffer),this.program&&a.deleteProgram(this.program),this.vs&&a.deleteShader(this.vs),this.fs&&a.deleteShader(this.fs),this.buffer=null,this.program=null,this.vs=null,this.fs=null,this.locs.clear(),this.gl=null)}}function at({magnification:n=1,density:a=1,relief:t=1,noise:i=1,speed:c=1,paused:Te=!1,children:ke,className:st="",style:ot}){const Se=C.useRef(null),Ae=C.useRef(null),nt=C.useId(),A=C.useRef(Te);return A.current=Te,C.useEffect(()=>{const r=Se.current,h=Ae.current;if(!r||!h)return;const s=new mt(h,dt);let ee=0,te=!1,d=!1,m=0,p=0,B=1,Me=!1,ae=performance.now(),M=0;const Le=[1,.78,.58],it=24;let L=0,R=16.7,I=0,q=0,N=8e3,Re=0,Ie=0,y=0,_=0,qe=0,De=0,H=0,V=0,X=0,Pe=0,D=0,P=0,k=!1,E=0,T=0,v=0,w=0,Y=0,j=0,se=0,oe=0,ne=0,ie=0,G=!0,re=[.03,.03,.03],le=[.18,.18,.18],ce=[.56,.56,.56],he=[.93,.93,.93],fe=[1,1,1],de=0,ue=1;const ze=()=>{const e=getComputedStyle(document.documentElement),o=Z(e.getPropertyValue("--background"))??[1,1,1],l=Z(e.getPropertyValue("--foreground"))??[.09,.09,.09],f=Z(e.getPropertyValue("--ns-muted"))??[.55,.55,.55],u=Z(e.getPropertyValue("--border"))??[.18,.18,.18],g=[0,0,0],S=[1,1,1];ut(o)<.5?(re=b(o,g,.62),le=b(u,o,.1),ce=b(f,l,.15),he=l,fe=b(l,S,.92),de=.035,ue=1.24):(re=b(l,g,.35),le=b(l,f,.72),ce=b(f,o,.6),he=b(o,f,.08),fe=o,de=.17,ue=1.26)};ze();const x=()=>{if(!s.gl||m<=0||p<=0)return;const e=d?Ee:M,f=1/(Math.min(m,p)*(.82/Math.max(.25,n))*(1+.045*Math.sin(e*.043)));let u=Re,g=Ie,S=H,K=V;d&&(u=Ee*.0062,g=Ee*.0031,S=.0062,K=.0031),u+=y*f,g+=_*f,s.v2("u_size",m,p),s.f("u_dpr",B),s.f("u_time",e),s.f("u_px",f),s.v2("u_stage",u,g),s.v2("u_lagVel",S,K),s.f("u_rot",e*.0075),s.f("u_density",Math.max(.35,a)),s.f("u_relief",Math.max(0,t)),s.f("u_noise",Math.max(0,i)),s.v2("u_beam",v,w),s.f("u_hover",P),s.f("u_sweep",d?.63:X),s.f("u_pass",d?7:Pe),s.v3("u_c0",re),s.v3("u_c1",le),s.v3("u_c2",ce),s.v3("u_c3",he),s.v3("u_c4",fe),s.f("u_bias",de),s.f("u_contrast",ue),s.draw(h.width,h.height)},rt=e=>{const o=M*.085;H=.0072*Math.cos(o)+.0016*Math.sin(M*.31),V=.0072*Math.sin(o*.83+1.2)-.0013*Math.cos(M*.24),Re+=H*e,Ie+=V*e},lt=e=>{if(e<=0)return;if(k){const Qe=1-Math.exp(-e/ft);Y+=((E-se)/e-Y)*Qe,j+=((T-oe)/e-j)*Qe,se=E,oe=T;let J=Y*ye,Q=j*ye;const be=Math.hypot(J,Q);be>_e&&(J=J/be*_e,Q=Q/be*_e);const Ze=1-Math.exp(-e/ye);v+=(E+J-v)*Ze,w+=(T+Q-w)*Ze}const o=k?.11:0,l=-(v-m*.5)*o,f=-(w-p*.5)*o,u=1-Math.exp(-e/.16);qe=y,De=_,y+=(l-y)*u,_+=(f-_)*u;const g=Math.min(m,p)*(.82/Math.max(.25,n)),S=(y-qe)/e/g,K=(_-De)/e/g;H+=Math.max(-.09,Math.min(.09,S)),V+=Math.max(-.09,Math.min(.09,K))},Oe=e=>{const o=e-ae,l=Math.min(.05,Math.max(0,o/1e3));for(ae=e,M+=l*Math.max(0,c),P+=(D-P)*(1-Math.exp(-l*6)),rt(l*Math.max(0,c)),lt(l),X+=l/tt;X>=1;)X-=1,Pe+=1;x();const f=Math.min(50,o);R+=(f-R)*(1-Math.exp(-f/120)),R>it?(I+=f,q=0):(q+=f,I=0);const u=I>900&&L<Le.length-1,g=q>N&&L>0;(u||g)&&(L+=u?1:-1,u&&(N=Math.min(64e3,N*2)),I=0,q=0,R=16.7,Ce()),ee=requestAnimationFrame(Oe)},me=()=>{te||Me||(te=!0,ae=performance.now(),ee=requestAnimationFrame(Oe))},z=()=>{cancelAnimationFrame(ee),te=!1},Ce=()=>{if(m<2||p<2)return;B=Math.min(window.devicePixelRatio||1,2)*Le[L];const e=Math.round(m*B),o=Math.round(p*B);(h.width!==e||h.height!==o)&&(h.width=e,h.height=o),h.style.width=`${m}px`,h.style.height=`${p}px`,x()},pe=()=>{const e=r.getBoundingClientRect();e.width<2||e.height<2||(m=e.width,p=e.height,ne=e.left,ie=e.top,G=!1,k||(v=m*.5,w=p*.5),L=0,I=0,q=0,N=8e3,R=16.7,Ce(),x())},ct=()=>{if(!G)return;const e=r.getBoundingClientRect();ne=e.left,ie=e.top,G=!1},U=()=>{G=!0},ge=e=>{ct();const o=typeof e.getCoalescedEvents=="function"?e.getCoalescedEvents():null,l=o&&o.length>0?o[o.length-1]:e;E=l.clientX-ne,T=l.clientY-ie},ve=()=>{v=E,w=T,Y=0,j=0,se=E,oe=T,k=!0},Fe=e=>{D=1,ge(e),ve(),d&&x()},we=e=>{ge(e),k||(ve(),D=1),d&&(v=E,w=T,P=1,y=-(v-m*.5)*.11,_=-(w-p*.5)*.11,x())},O=()=>{D=0,k=!1,d&&(P=0,y=0,_=0,x())},Be=e=>{ge(e),ve(),D=1,d&&we(e)},Ne=e=>{e.pointerType!=="mouse"&&O()};if(!s.init())return;const He=new ResizeObserver(pe);He.observe(r),pe(),r.addEventListener("pointerenter",Fe),r.addEventListener("pointerleave",O),r.addEventListener("pointermove",we),r.addEventListener("pointerdown",Be),r.addEventListener("pointerup",Ne),r.addEventListener("pointercancel",O),window.addEventListener("scroll",U,{passive:!0,capture:!0}),window.addEventListener("resize",U,{passive:!0});const W=window.matchMedia("(prefers-reduced-motion: reduce)");let Ve=W.matches;const $=()=>{Ve||A.current?(d=!0,z(),x()):(d=!1,me())},Xe=()=>{Ve=W.matches,$()};W.addEventListener("change",Xe);let xe=!0;const Ye=new IntersectionObserver(e=>{xe=e.some(o=>o.isIntersecting),xe?!d&&!document.hidden&&me():z()},{threshold:0});Ye.observe(r);const je=()=>{document.hidden?z():!d&&xe&&me()};document.addEventListener("visibilitychange",je),$();let Ge=A.current,Ue=0;const We=()=>{A.current!==Ge&&(Ge=A.current,$()),Ue=window.setTimeout(We,140)};We();const $e=new MutationObserver(()=>{ze(),d&&x()});$e.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const Ke=e=>{e.preventDefault(),z()},Je=()=>{s.init(!0)&&(pe(),$())};return h.addEventListener("webglcontextlost",Ke),h.addEventListener("webglcontextrestored",Je),()=>{Me=!0,He.disconnect(),Ye.disconnect(),W.removeEventListener("change",Xe),document.removeEventListener("visibilitychange",je),$e.disconnect(),h.removeEventListener("webglcontextlost",Ke),h.removeEventListener("webglcontextrestored",Je),r.removeEventListener("pointerenter",Fe),r.removeEventListener("pointerleave",O),r.removeEventListener("pointermove",we),r.removeEventListener("pointerdown",Be),r.removeEventListener("pointerup",Ne),r.removeEventListener("pointercancel",O),window.removeEventListener("scroll",U,{capture:!0}),window.removeEventListener("resize",U),window.clearTimeout(Ue),z();const e=s.gl?.getExtension("WEBGL_lose_context");s.destroy(),h.isConnected||e?.loseContext()}},[n,a,t,i,c]),F.jsxs("div",{ref:Se,"data-edge-yield":nt,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${st}`,style:ot,children:[F.jsx("canvas",{ref:Ae,"aria-hidden":"true",className:"absolute inset-0 block"}),ke?F.jsx("div",{className:"relative z-[1] h-full w-full",children:ke}):null]})}at.displayName="EdgeYield";function gt(){return F.jsx("div",{className:"ns-stage",children:F.jsx(at,{children:"示例"})})}export{gt as default};
