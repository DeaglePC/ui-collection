import{r as G,j as le}from"./client-CsvIHAk3.js";const $e=.012,qt=.06,Je=26,kt=11,Yt=.016,Ht=6,$=12,$t=5,Lt=5,Pt=6,Jt=1.5,Kt=1.7,Ct=[.12,.66,.34,.22,.53,.82,.74,.34,.92,.7],Qt=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,Ut=`
uniform vec4 u_sp[${$}];  // xy = uv centre, z = radius (uv-x units), w = dye amount
uniform vec4 u_sf[${$}];  // xy = force (cells/s), z = accent amount, w = unused
uniform float u_aspect;

float splatFall(vec2 uv, vec2 c, float r) {
  vec2 d = (uv - c) * vec2(u_aspect, 1.0);
  return exp(-dot(d, d) / max(1e-5, r * r));
}`,Zt=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;
uniform sampler2D u_vel;
uniform vec2 u_texel;
uniform float u_dt;
uniform float u_diss;
void main() {
  vec2 v = texture(u_vel, v_uv).xy;
  vec2 src = v_uv - u_dt * v * u_texel;
  fragColor = vec4(texture(u_vel, src).xy * u_diss, 0.0, 1.0);
}`,er=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;
uniform sampler2D u_vel;
uniform sampler2D u_dye;
uniform vec2 u_texel;
uniform float u_dt;
uniform float u_time;
uniform float u_curlAmt;
uniform float u_buoy;
uniform float u_ambient;
${Ut}

float curlAt(vec2 uv) {
  float r = texture(u_vel, uv + vec2(u_texel.x, 0.0)).y;
  float l = texture(u_vel, uv - vec2(u_texel.x, 0.0)).y;
  float t = texture(u_vel, uv + vec2(0.0, u_texel.y)).x;
  float b = texture(u_vel, uv - vec2(0.0, u_texel.y)).x;
  return 0.5 * ((r - l) - (t - b));
}

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

float fbm(vec2 p) {
  return vnoise(p) * 0.62 + vnoise(p * 2.13 + 7.3) * 0.28;
}

void main() {
  vec2 v = texture(u_vel, v_uv).xy;

  // --- vorticity confinement: push energy back into the whorls the advection
  // step numerically bled away, which is what keeps tendrils curling instead
  // of straightening out into sheets
  float c = curlAt(v_uv);
  float cr = abs(curlAt(v_uv + vec2(u_texel.x, 0.0)));
  float cl = abs(curlAt(v_uv - vec2(u_texel.x, 0.0)));
  float ct = abs(curlAt(v_uv + vec2(0.0, u_texel.y)));
  float cb = abs(curlAt(v_uv - vec2(0.0, u_texel.y)));
  vec2 g = vec2(cr - cl, ct - cb) * 0.5;
  float gl = length(g);
  if (gl > 1e-5) {
    vec2 n = g / gl;
    v += vec2(n.y, -n.x) * c * u_curlAmt * u_dt;
  }

  // --- buoyancy against a LOCAL mean. Ink is denser than the fluid, so the
  // excess sinks; taken against a wide neighbourhood average the force is zero
  // inside a uniform patch and non-zero only across an interface, which grows
  // fingers off the underside of a plume rather than dragging the whole field
  // to the floor. Against a fixed zero the tank sediments in ~30s.
  float wide = 6.0;
  float d0 = texture(u_dye, v_uv).x;
  float dAvg = 0.25 * (
    texture(u_dye, v_uv + vec2(u_texel.x * wide, 0.0)).x +
    texture(u_dye, v_uv - vec2(u_texel.x * wide, 0.0)).x +
    texture(u_dye, v_uv + vec2(0.0, u_texel.y * wide)).x +
    texture(u_dye, v_uv - vec2(0.0, u_texel.y * wide)).x
  );
  float excess = d0 - dAvg;
  // the lateral term is the symmetry break: a perfectly horizontal interface
  // is a stable equilibrium under a purely vertical force and would never
  // finger at all
  v.y -= excess * u_buoy * u_dt;
  v.x += excess * u_buoy * 0.22 * u_dt * (vnoise(v_uv * 9.0 + u_time * 0.15) - 0.5);

  // --- divergence-free curl-noise stirring, from the analytic perpendicular
  // gradient of a scalar potential, so it cannot fight the projection step
  vec2 q = v_uv * vec2(u_aspect, 1.0) * 1.7 + vec2(u_time * 0.031, -u_time * 0.024);
  float e = 0.035;
  float px = fbm(q + vec2(e, 0.0)) - fbm(q - vec2(e, 0.0));
  float py = fbm(q + vec2(0.0, e)) - fbm(q - vec2(0.0, e));
  v += vec2(py, -px) / (2.0 * e) * u_ambient * u_dt;

  // --- injectors, drop, pointer
  for (int i = 0; i < ${$}; i++) {
    if (u_sp[i].z <= 0.0) continue;
    v += u_sf[i].xy * splatFall(v_uv, u_sp[i].xy, u_sp[i].z) * u_dt;
  }

  // --- soft walls. Full-bleed means the frame edge is a crop, not a boundary,
  // but without this the tank empties itself into the margins and the ambient
  // stirring has nothing left to stir.
  vec2 e2 = min(v_uv, 1.0 - v_uv);
  float wall = smoothstep(0.0, 0.045, min(e2.x, e2.y));
  v *= mix(0.86, 1.0, wall);

  fragColor = vec4(v, 0.0, 1.0);
}`,tr=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;
uniform sampler2D u_vel;
uniform vec2 u_texel;
void main() {
  float r = texture(u_vel, v_uv + vec2(u_texel.x, 0.0)).x;
  float l = texture(u_vel, v_uv - vec2(u_texel.x, 0.0)).x;
  float t = texture(u_vel, v_uv + vec2(0.0, u_texel.y)).y;
  float b = texture(u_vel, v_uv - vec2(0.0, u_texel.y)).y;
  fragColor = vec4(0.5 * ((r - l) + (t - b)), 0.0, 0.0, 1.0);
}`,rr=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;
uniform sampler2D u_pressure;
uniform sampler2D u_div;
uniform vec2 u_texel;
void main() {
  float r = texture(u_pressure, v_uv + vec2(u_texel.x, 0.0)).x;
  float l = texture(u_pressure, v_uv - vec2(u_texel.x, 0.0)).x;
  float t = texture(u_pressure, v_uv + vec2(0.0, u_texel.y)).x;
  float b = texture(u_pressure, v_uv - vec2(0.0, u_texel.y)).x;
  float d = texture(u_div, v_uv).x;
  fragColor = vec4((l + r + b + t - d) * 0.25, 0.0, 0.0, 1.0);
}`,or=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;
uniform sampler2D u_pressure;
uniform sampler2D u_vel;
uniform vec2 u_texel;
void main() {
  float r = texture(u_pressure, v_uv + vec2(u_texel.x, 0.0)).x;
  float l = texture(u_pressure, v_uv - vec2(u_texel.x, 0.0)).x;
  float t = texture(u_pressure, v_uv + vec2(0.0, u_texel.y)).x;
  float b = texture(u_pressure, v_uv - vec2(0.0, u_texel.y)).x;
  vec2 v = texture(u_vel, v_uv).xy - 0.5 * vec2(r - l, t - b);
  fragColor = vec4(v, 0.0, 1.0);
}`,nr=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;
uniform sampler2D u_src;
uniform sampler2D u_vel;
uniform vec2 u_simTexel;
uniform float u_dt;
uniform float u_dir;
void main() {
  vec2 v = texture(u_vel, v_uv).xy;
  vec2 src = v_uv - u_dir * u_dt * v * u_simTexel;
  fragColor = vec4(texture(u_src, src).xy, 0.0, 1.0);
}`,sr=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;
uniform sampler2D u_src;    // phi at t
uniform sampler2D u_fwd;    // advect(phi, +dt)
uniform sampler2D u_back;   // advect(fwd, -dt)
uniform sampler2D u_vel;
uniform vec2 u_texel;
uniform vec2 u_simTexel;
uniform float u_dt;
uniform float u_diss;
uniform float u_accentDiss;
uniform float u_correct;
${Ut}

void main() {
  vec2 fwd = texture(u_fwd, v_uv).xy;
  vec2 phi = texture(u_src, v_uv).xy;
  vec2 back = texture(u_back, v_uv).xy;
  vec2 outv = fwd + 0.5 * (phi - back) * u_correct;

  // clamp against the neighbourhood the backtrace sampled
  vec2 v = texture(u_vel, v_uv).xy;
  vec2 src = v_uv - u_dt * v * u_simTexel;
  vec2 a = texture(u_src, src + vec2(u_texel.x, u_texel.y)).xy;
  vec2 b = texture(u_src, src + vec2(-u_texel.x, u_texel.y)).xy;
  vec2 c = texture(u_src, src + vec2(u_texel.x, -u_texel.y)).xy;
  vec2 d = texture(u_src, src + vec2(-u_texel.x, -u_texel.y)).xy;
  vec2 lo = min(min(a, b), min(c, d));
  vec2 hi = max(max(a, b), max(c, d));
  outv = clamp(outv, lo, hi);

  outv.x *= u_diss;
  outv.y *= u_accentDiss;

  for (int i = 0; i < ${$}; i++) {
    if (u_sp[i].z <= 0.0) continue;
    float f = splatFall(v_uv, u_sp[i].xy, u_sp[i].z);
    outv.x += u_sp[i].w * f;
    outv.y += u_sf[i].z * f;
  }

  // A ceiling on density, which is a compositional constraint and not a
  // physical one. Without it a source sitting in slow water piles up an
  // unbounded pool that renders as a flat black hole with no internal
  // structure — the opposite of ink, which is legible precisely because even
  // its dense core stays modulated. Capping just above the top ramp stop lets
  // the core saturate while the structure around it keeps reading.
  fragColor = vec4(clamp(outv, vec2(0.0), vec2(1.05, 1.0)), 0.0, 1.0);
}`,ir=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;
uniform sampler2D u_dye;
uniform vec2 u_dyeTexel;
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform vec3 u_accent;
uniform float u_gamma;
uniform float u_rim;
uniform float u_ink;

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.22, x));
  c = mix(c, u_c2, smoothstep(0.18, 0.48, x));
  c = mix(c, u_c3, smoothstep(0.45, 0.78, x));
  c = mix(c, u_c4, smoothstep(0.76, 1.0, x));
  return c;
}

void main() {
  vec2 s = texture(u_dye, v_uv).xy;
  float d = s.x;

  // Edge term, deliberately SUBORDINATE. Density carries the image; the
  // gradient only puts a thin lift on the shoulder of a plume so a sheet
  // seen edge-on separates from the one behind it. Pushed any harder this
  // stops being ink and becomes a web of bright lines, which is a different
  // component that already exists twice in this registry.
  float dr = texture(u_dye, v_uv + vec2(u_dyeTexel.x, 0.0)).x;
  float dl = texture(u_dye, v_uv - vec2(u_dyeTexel.x, 0.0)).x;
  float dt = texture(u_dye, v_uv + vec2(0.0, u_dyeTexel.y)).x;
  float db = texture(u_dye, v_uv - vec2(0.0, u_dyeTexel.y)).x;
  float grad = length(vec2(dr - dl, dt - db)) * 0.5;

  float cov = 1.0 - exp(-d * u_ink);
  cov = pow(clamp(cov, 0.0, 1.0), u_gamma);
  cov = clamp(cov + grad * u_rim, 0.0, 1.0);

  vec3 col = ramp(cov);

  // Freshness: written by the pointer and nothing else, advected by the same
  // velocity field as the density so the tint travels with the ink it marks
  // rather than detaching from it.
  //
  // Deliberately weak. At 0.55 mix and a 2.4 gain this saturated whole plumes
  // into flat blue, which stops reading as tinted ink and starts reading as
  // coloured dye — a different, worse component, and the one the palette rule
  // exists to prevent. The accent has to say "you just touched this" without
  // becoming the subject, so it is a tint on already-bright ink, capped well
  // short of the pure token.
  // The tint has to survive an inverted ramp, and the fix is the target
  // colour, not the coverage window. Fresh ink is the DENSEST ink, which in
  // light means near-black — and mixing the raw token into near-black is a
  // muddy navy that reads as a dirty patch, while windowing the tint away from
  // the dense core (tried) simply deletes it in both themes. So the accent is
  // pre-adapted per theme on the CPU: lifted toward white for dark ink on a
  // dark ground, let down toward --background for dark ink on a pale one. Same
  // token, same cue, legible either way.
  float fresh = clamp(s.y * 1.05, 0.0, 1.0) * smoothstep(0.05, 0.28, cov);
  col = mix(col, mix(col, u_accent, 0.42), fresh);

  // a mild vignette toward the empty-fluid stop keeps the crop from competing
  // with whatever the caller overlays
  vec2 vp = v_uv - 0.5;
  float vig = smoothstep(0.42, 0.95, length(vp * vec2(1.0, 1.25)) * 1.6);
  col = mix(col, u_c0, vig * 0.30);

  // the ramp's low end is a very long, very flat gradient across a full-bleed
  // field, which is exactly where 8-bit banding is visible; one hash of
  // sub-LSB noise costs nothing and removes it
  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col += (n - 0.5) * 0.0055;

  fragColor = vec4(col, 1.0);
}`;function ae(m){const o=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(m.trim());if(!o)return null;let t=o[1];t.length===3&&(t=t.split("").map(u=>u+u).join(""));const a=parseInt(t,16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}function R(m,o,t){return[m[0]+(o[0]-m[0])*t,m[1]+(o[1]-m[1])*t,m[2]+(o[2]-m[2])*t]}function ar([m,o,t]){return .2126*m+.7152*o+.0722*t}class lr{constructor(o){this.canvas=o,this.gl=null,this.vao=null,this.buffer=null,this.programs=[],this.locs=new WeakMap,this.fbos=[],this.active=null}init(o=!1){const t=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});return t?(this.gl=t,t.getExtension("EXT_color_buffer_float")??t.getExtension("EXT_color_buffer_half_float")?(t.getExtension("OES_texture_float_linear"),this.buffer=t.createBuffer(),this.vao=t.createVertexArray(),t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.disable(t.BLEND),t.disable(t.DEPTH_TEST),!0):(o||t.getExtension("WEBGL_lose_context")?.loseContext(),!1)):!1}program(o){const t=this.gl;if(!t)return null;const a=this.compile(t.VERTEX_SHADER,Qt),u=this.compile(t.FRAGMENT_SHADER,o);if(!a||!u)return null;const n=t.createProgram();return t.attachShader(n,a),t.attachShader(n,u),t.bindAttribLocation(n,0,"a_pos"),t.linkProgram(n),t.deleteShader(a),t.deleteShader(u),t.getProgramParameter(n,t.LINK_STATUS)?(this.programs.push(n),this.locs.set(n,new Map),n):(t.deleteProgram(n),null)}compile(o,t){const a=this.gl,u=a.createShader(o);return a.shaderSource(u,t),a.compileShader(u),a.getShaderParameter(u,a.COMPILE_STATUS)?u:(a.deleteShader(u),null)}use(o){this.gl?.useProgram(o),this.active=o}loc(o){const t=this.active;if(!t||!this.gl)return null;const a=this.locs.get(t);return a.has(o)||a.set(o,this.gl.getUniformLocation(t,o)),a.get(o)??null}f(o,t){this.gl?.uniform1f(this.loc(o),t)}v2(o,t,a){this.gl?.uniform2f(this.loc(o),t,a)}v3(o,t){this.gl?.uniform3f(this.loc(o),t[0],t[1],t[2])}v4a(o,t){this.gl?.uniform4fv(this.loc(o),t)}tex(o,t,a){const u=this.gl;u&&(u.activeTexture(u.TEXTURE0+t),u.bindTexture(u.TEXTURE_2D,a),u.uniform1i(this.loc(o),t))}makeFBO(o,t,a,u){const n=this.gl,S=n.createTexture();n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,S),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,a,o,t,0,u,n.HALF_FLOAT,null);const g=n.createFramebuffer();if(n.bindFramebuffer(n.FRAMEBUFFER,g),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,S,0),n.checkFramebufferStatus(n.FRAMEBUFFER)!==n.FRAMEBUFFER_COMPLETE)return n.deleteTexture(S),n.deleteFramebuffer(g),n.bindFramebuffer(n.FRAMEBUFFER,null),null;n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.bindFramebuffer(n.FRAMEBUFFER,null);const L={tex:S,fbo:g,w:o,h:t,texel:[1/o,1/t]};return this.fbos.push(L),L}makeDouble(o,t,a,u){const n=this.makeFBO(o,t,a,u),S=this.makeFBO(o,t,a,u);if(!n||!S)return null;const g={read:n,write:S,swap:()=>{const L=g.read;g.read=g.write,g.write=L}};return g}blit(o){const t=this.gl;t&&(o?(t.bindFramebuffer(t.FRAMEBUFFER,o.fbo),t.viewport(0,0,o.w,o.h)):(t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.canvas.width,this.canvas.height)),t.drawArrays(t.TRIANGLES,0,3))}free(o){const t=this.gl;!t||!o||(t.deleteTexture(o.tex),t.deleteFramebuffer(o.fbo),this.fbos=this.fbos.filter(a=>a!==o))}freeDouble(o){o&&(this.free(o.read),this.free(o.write))}dropTargets(){const o=this.gl;if(o){for(const t of this.fbos)o.deleteTexture(t.tex),o.deleteFramebuffer(t.fbo);this.fbos=[]}}destroy(){const o=this.gl;if(o){this.dropTargets();for(const t of this.programs)o.deleteProgram(t);this.programs=[],this.buffer&&o.deleteBuffer(this.buffer),this.vao&&o.deleteVertexArray(this.vao),this.buffer=null,this.vao=null,this.gl=null}}}const ur=260,cr=380,Bt=1/60;function Ot({speed:m=1,density:o=1,stir:t=1,paused:a=!1,children:u,className:n="",style:S}){const g=G.useRef(null),L=G.useRef(null),It=G.useId(),N=G.useRef(a);N.current=a;const J=G.useRef(o);J.current=o;const Ke=G.useRef(t);return Ke.current=t,G.useEffect(()=>{const f=g.current,x=L.current;if(!f||!x)return;const e=new lr(x);if(!e.init())return;const y=e.gl,Qe=e.program(Zt),Ze=e.program(er),et=e.program(tr),tt=e.program(rr),rt=e.program(or),we=e.program(nr),ot=e.program(sr),nt=e.program(ir);if(!Qe||!Ze||!et||!tt||!rt||!we||!ot||!nt){const r=e.gl?.getExtension("WEBGL_lose_context");e.destroy(),r?.loseContext();return}let Te=0,K=!1,E=!1,st=!1,_=0,w=0,Re=1,V=0,Q=0,T=0,Ae=performance.now();const ue=[{sim:208,dye:768,jacobi:18,correct:1,scale:1},{sim:208,dye:640,jacobi:12,correct:1,scale:1},{sim:176,dye:512,jacobi:10,correct:0,scale:.8},{sim:144,dye:384,jacobi:8,correct:0,scale:.65}],Xt=26;let P=0,Z=16.7,ee=0,te=0,ce=8e3,d=null,b=null,C=null,re=null,B=null,oe=null;const U=new Float32Array($*4),j=new Float32Array($*4);let Me=[.04,.04,.04],De=[.14,.14,.14],Fe=[.4,.4,.4],Se=[.78,.78,.78],ke=[1,1,1],z=[0,.42,1],Le=1,Pe=1,Ce=1;const it=()=>{const r=getComputedStyle(document.documentElement),s=ae(r.getPropertyValue("--background"))??[1,1,1],i=ae(r.getPropertyValue("--foreground"))??[.09,.09,.09],l=ae(r.getPropertyValue("--ns-muted"))??[.55,.55,.55],c=ae(r.getPropertyValue("--border"))??[.18,.18,.18];z=ae(r.getPropertyValue("--ns-accent"))??[0,.42,1];const v=[0,0,0],h=[1,1,1];ar(s)<.5?(Me=R(s,v,.35),De=R(s,c,.9),Fe=R(c,l,.75),Se=R(l,i,.72),ke=R(i,h,.55),z=R(z,h,.2),Le=1.08,Pe=2.6,Ce=2.5):(Me=s,De=R(s,l,.3),Fe=R(l,s,.22),Se=R(i,l,.24),ke=R(i,v,.55),z=R(z,s,.5),Le=1.18,Pe=2.2,Ce=2.9)};it();let Be=.7,k=3;const W=()=>{U.fill(0),j.fill(0)},ne=(r,s,i,l,c,v,h,p)=>{U[r*4]=s,U[r*4+1]=i,U[r*4+2]=l,U[r*4+3]=c,j[r*4]=v,j[r*4+1]=h,j[r*4+2]=p},Gt=r=>{const s=Math.max(0,J.current);for(let i=0;i<$t;i++){const l=i*2.399963,c=.048+i*.014,v=Ct[i*2]+.12*Math.sin(T*c+l),h=Ct[i*2+1]+.15*Math.sin(T*c*.78+l*1.7),p=T*(.19+i*.05)+l,D=58+24*Math.sin(T*.31+l);ne(i,v,h,.05+.016*Math.sin(T*.23+l),.46*s*r,Math.cos(p)*D*r*60,Math.sin(p)*D*r*60,0)}if(Be-=r,Be<=0){k=k*1103515245+12345&2147483647;const i=(k>>7&1023)/1023;k=k*1103515245+12345&2147483647;const l=(k>>7&1023)/1023;k=k*1103515245+12345&2147483647;const c=(k>>7&1023)/1023,v=c*Math.PI*2;ne(Lt,.12+i*.76,.18+l*.68,.07+c*.045,1.35*s,Math.cos(v)*300,Math.sin(v)*300-120,0),Be=Jt+i*Kt}};let q=!1,A=0,M=0,Y=0,H=0,ve=0,fe=0,Ue=0,Oe=0,de=0,_e=0,Ie=0,Xe=0,Ge=0,he=!0;const Nt=r=>{if(!q||r<=0||_<2)return;const s=1-Math.exp(-r/qt);ve+=((A-Ue)/r-ve)*s,fe+=((M-Oe)/r-fe)*s,Ue=A,Oe=M;let i=ve*$e,l=fe*$e;const c=Math.hypot(i,l);c>Je&&(i=i/c*Je,l=l/c*Je);const v=1-Math.exp(-r/$e);Y+=(A+i-Y)*v,H+=(M+l-H)*v;const h=Y-de,p=H-_e,D=Math.hypot(h,p),I=T-Ie;if(D<kt&&!(I>=Yt&&D>.5))return;const F=Math.min(Ht,Math.max(1,Math.round(D/kt))),X=Ke.current,ie=V/Math.max(1,_),be=h/Math.max(1e-4,I)*ie*.55*X,Dt=-(p/Math.max(1e-4,I))*ie*.55*X,Ft=Math.min(1,Math.hypot(be,Dt)/120);for(let Ee=1;Ee<=F;Ee++){const St=Ee/F,zt=(de+h*St)/_,Wt=1-(_e+p*St)/w;ne(Pt+(Ee-1),zt,Wt,.035,(.36+.72*Ft)*X*Math.max(.25,J.current)/F,be/F,Dt/F,(.1+.2*Ft)/F)}de=Y,_e=H,Ie=T},at=r=>{if(!d||!b||!C||!re||!B||!oe)return;const s=ue[P],i=d.read.texel,l=_/Math.max(1,w);e.use(Qe),e.tex("u_vel",0,d.read.tex),e.v2("u_texel",i[0],i[1]),e.f("u_dt",r),e.f("u_diss",Math.exp(-r*.16)),e.blit(d.write),d.swap(),e.use(Ze),e.tex("u_vel",0,d.read.tex),e.tex("u_dye",1,b.read.tex),e.v2("u_texel",i[0],i[1]),e.f("u_dt",r),e.f("u_time",T),e.f("u_curlAmt",24),e.f("u_buoy",46),e.f("u_ambient",8.5),e.f("u_aspect",l),e.v4a("u_sp",U),e.v4a("u_sf",j),e.blit(d.write),d.swap(),e.use(et),e.tex("u_vel",0,d.read.tex),e.v2("u_texel",i[0],i[1]),e.blit(re),e.use(tt),e.v2("u_texel",i[0],i[1]),e.tex("u_div",1,re.tex);for(let v=0;v<s.jacobi;v++)e.tex("u_pressure",0,C.read.tex),e.blit(C.write),C.swap();e.use(rt),e.tex("u_pressure",0,C.read.tex),e.tex("u_vel",1,d.read.tex),e.v2("u_texel",i[0],i[1]),e.blit(d.write),d.swap();const c=b.read.texel;e.use(we),e.tex("u_vel",1,d.read.tex),e.v2("u_simTexel",i[0],i[1]),e.f("u_dt",r),e.f("u_dir",1),e.tex("u_src",0,b.read.tex),e.blit(B),s.correct>0&&(e.f("u_dir",-1),e.tex("u_src",0,B.tex),e.blit(oe)),e.use(ot),e.tex("u_src",0,b.read.tex),e.tex("u_fwd",1,B.tex),e.tex("u_back",2,s.correct>0?oe.tex:B.tex),e.tex("u_vel",3,d.read.tex),e.v2("u_texel",c[0],c[1]),e.v2("u_simTexel",i[0],i[1]),e.f("u_dt",r),e.f("u_diss",Math.exp(-r*.1)),e.f("u_accentDiss",Math.exp(-r*2)),e.f("u_correct",s.correct),e.f("u_aspect",l),e.v4a("u_sp",U),e.v4a("u_sf",j),e.blit(b.write),b.swap()},O=()=>{if(!b)return;const r=b.read.texel;e.use(nt),e.tex("u_dye",0,b.read.tex),e.v2("u_dyeTexel",r[0],r[1]),e.v3("u_c0",Me),e.v3("u_c1",De),e.v3("u_c2",Fe),e.v3("u_c3",Se),e.v3("u_c4",ke),e.v3("u_accent",z),e.f("u_gamma",Le),e.f("u_rim",Pe),e.f("u_ink",Ce),e.blit(null)},lt=r=>{W(),T+=r,Gt(r),Nt(r),at(r)},ut=r=>{for(let s=0;s<r;s++)lt(Bt)};let ct=!1;const me=()=>{if(_<2||w<2||!e.gl)return;const r=ue[P],s=_/w;s>=1?(V=r.sim,Q=Math.max(48,Math.round(r.sim/s))):(Q=r.sim,V=Math.max(48,Math.round(r.sim*s)));const i=s>=1?r.dye:Math.max(96,Math.round(r.dye*s)),l=s>=1?Math.max(96,Math.round(r.dye/s)):r.dye,c=d,v=b,h=e.makeDouble(V,Q,y.RG16F,y.RG),p=e.makeDouble(i,l,y.RG16F,y.RG),D=e.makeDouble(V,Q,y.R16F,y.RED),I=e.makeFBO(V,Q,y.R16F,y.RED),F=e.makeFBO(i,l,y.RG16F,y.RG),X=e.makeFBO(i,l,y.RG16F,y.RG);if(!h||!p||!D||!I||!F||!X){e.freeDouble(h),e.freeDouble(p),e.freeDouble(D),e.free(I),e.free(F),e.free(X);return}const ie=ct&&c&&v;ie&&(e.use(we),e.v2("u_simTexel",1,1),e.f("u_dt",0),e.f("u_dir",1),e.tex("u_vel",1,c.read.tex),e.tex("u_src",0,c.read.tex),e.blit(h.read),e.tex("u_src",0,v.read.tex),e.blit(p.read)),e.freeDouble(c),e.freeDouble(v),e.freeDouble(C),e.free(re),e.free(B),e.free(oe),d=h,b=p,C=D,re=I,B=F,oe=X;const be=ie?8:E?cr:ur;ct=!0,ut(be),W(),O()},Ne=()=>{if(_<2||w<2)return;Re=Math.min(window.devicePixelRatio||1,2)*ue[P].scale;const r=Math.round(_*Re),s=Math.round(w*Re);(x.width!==r||x.height!==s)&&(x.width=r,x.height=s),x.style.width=`${_}px`,x.style.height=`${w}px`},Ve=()=>{const r=f.getBoundingClientRect();if(r.width<2||r.height<2)return;const s=Math.abs(r.width-_)>.5||Math.abs(r.height-w)>.5;_=r.width,w=r.height,Xe=r.left,Ge=r.top,he=!1,Ne(),s&&(P=0,ee=0,te=0,ce=8e3,Z=16.7,Ne(),me()),O()},Vt=()=>{Ne(),me()},vt=r=>{const s=r-Ae;Ae=r;const i=Math.min(.033,Math.max(.001,s/1e3))*Math.max(.05,m);lt(i),O();const l=Math.min(50,s);Z+=(l-Z)*(1-Math.exp(-l/120)),Z>Xt?(ee+=l,te=0):(te+=l,ee=0);const c=ee>1800&&P<ue.length-1,v=te>ce&&P>0;(c||v)&&(P+=c?1:-1,c&&(ce=Math.min(64e3,ce*2)),ee=0,te=0,Z=16.7,Vt()),Te=requestAnimationFrame(vt)},xe=()=>{K||st||(K=!0,Ae=performance.now(),Te=requestAnimationFrame(vt))},se=()=>{cancelAnimationFrame(Te),K=!1},jt=()=>{if(!he)return;const r=f.getBoundingClientRect();Xe=r.left,Ge=r.top,he=!1},pe=()=>{he=!0},je=r=>{jt();const s=typeof r.getCoalescedEvents=="function"?r.getCoalescedEvents():null,i=s&&s.length>0?s[s.length-1]:r;A=i.clientX-Xe,M=i.clientY-Ge},ze=()=>{Y=A,H=M,ve=0,fe=0,Ue=A,Oe=M,de=A,_e=M,Ie=T,q=!0},We=()=>{_<2||(W(),ne(Pt,A/_,1-M/w,.05,.9*Math.max(.25,J.current),0,0,.2),at(Bt),W(),O())},ft=r=>{je(r),ze(),E&&We()},dt=()=>{q=!1},_t=r=>{je(r),q||ze(),E&&(Y=A,H=M,We())},ht=r=>{if(je(r),ze(),E){We();return}const s=T*2.7;ne(Lt,A/_,1-M/w,.085,2.2*Math.max(.25,J.current),Math.cos(s)*210,Math.sin(s)*210,.3)},mt=r=>{r.pointerType!=="mouse"&&(q=!1)},xt=()=>{q=!1};f.addEventListener("pointerenter",ft),f.addEventListener("pointerleave",dt),f.addEventListener("pointermove",_t),f.addEventListener("pointerdown",ht),f.addEventListener("pointerup",mt),f.addEventListener("pointercancel",xt),window.addEventListener("scroll",pe,{passive:!0,capture:!0}),window.addEventListener("resize",pe,{passive:!0});const ge=window.matchMedia("(prefers-reduced-motion: reduce)");let qe=ge.matches;E=qe||N.current;let ye=0;const pt=new ResizeObserver(()=>{ye||(ye=requestAnimationFrame(()=>{ye=0,Ve()}))});pt.observe(f),Ve(),_>=2&&!d&&me();const Ye=()=>{const r=qe||N.current;r===E&&(r||K)||(E=r,E?(se(),ut(60),W(),O()):xe())},gt=()=>{qe=ge.matches,Ye()};ge.addEventListener("change",gt);let He=!0;const yt=new IntersectionObserver(r=>{He=r.some(s=>s.isIntersecting),He?!E&&!document.hidden&&xe():se()},{threshold:0});yt.observe(f);const bt=()=>{document.hidden?se():!E&&He&&xe()};document.addEventListener("visibilitychange",bt),E?(W(),O()):xe();let Et=N.current,wt=0;const Tt=()=>{N.current!==Et&&(Et=N.current,Ye()),wt=window.setTimeout(Tt,140)};Tt();const Rt=new MutationObserver(()=>{it(),K||O()});Rt.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const At=r=>{r.preventDefault(),se()},Mt=()=>{e.init(!0)&&(Ve(),me(),Ye())};return x.addEventListener("webglcontextlost",At),x.addEventListener("webglcontextrestored",Mt),()=>{st=!0,pt.disconnect(),cancelAnimationFrame(ye),yt.disconnect(),ge.removeEventListener("change",gt),document.removeEventListener("visibilitychange",bt),Rt.disconnect(),x.removeEventListener("webglcontextlost",At),x.removeEventListener("webglcontextrestored",Mt),f.removeEventListener("pointerenter",ft),f.removeEventListener("pointerleave",dt),f.removeEventListener("pointermove",_t),f.removeEventListener("pointerdown",ht),f.removeEventListener("pointerup",mt),f.removeEventListener("pointercancel",xt),window.removeEventListener("scroll",pe,{capture:!0}),window.removeEventListener("resize",pe),window.clearTimeout(wt),se();const r=e.gl?.getExtension("WEBGL_lose_context");e.destroy(),x.isConnected||r?.loseContext()}},[m]),le.jsxs("div",{ref:g,"data-dye-whorl":It,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${n}`,style:S,children:[le.jsx("canvas",{ref:L,"aria-hidden":"true",className:"absolute inset-0 block"}),u?le.jsx("div",{className:"relative z-[1] h-full w-full",children:u}):null]})}Ot.displayName="DyeWhorl";function fr(){return le.jsx("div",{className:"ns-stage",children:le.jsx(Ot,{children:"示例"})})}export{fr as default};
