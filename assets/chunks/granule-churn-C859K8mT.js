import{r as Y,j as O}from"./client-CsvIHAk3.js";const it=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,Qe=`
precision highp float;

uniform float u_aspect;
uniform float u_cells;
uniform float u_time;

vec3 hash32(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yzz) * p3.zyx);
}

vec4 hash42(vec2 p) {
  vec4 p4 = fract(vec4(p.xyxy) * vec4(0.1031, 0.1030, 0.0973, 0.1099));
  p4 += dot(p4, p4.wzxy + 33.33);
  return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash32(i).x;
  float b = hash32(i + vec2(1.0, 0.0)).x;
  float c = hash32(i + vec2(0.0, 1.0)).x;
  float d = hash32(i + vec2(1.0, 1.0)).x;
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec2 cellCoord(vec2 uv) {
  return vec2(uv.x * u_aspect, uv.y) * u_cells;
}
`,lt=`
uniform float u_split;

vec2 warp(vec2 q) {
  return q + 0.62 * vec2(
    vnoise(q * 0.115 + vec2(0.0, u_time * 0.012)) - 0.5,
    vnoise(q * 0.115 + vec2(9.71, -u_time * 0.009) + 4.3) - 0.5
  ) + 0.26 * vec2(
    vnoise(q * 0.31 + vec2(u_time * 0.02, 2.1)) - 0.5,
    vnoise(q * 0.31 + vec2(-1.7, u_time * 0.017) + 8.9) - 0.5
  )
  // a third octave at sub-cell scale. The two above move whole groups of
  // granules around; this one is what stops each individual cell from being a
  // circle. Real granules are ragged polygons, and the difference between
  // "photosphere" and "soap foam" is almost entirely in the boundary: a
  // perfectly round cell reads as a bubble no matter what its interior does.
  // Amplitude is held under a tenth of a cell so the warp's Jacobian stays
  // near identity and the gradient taken in warped coordinates is still the
  // true one.
  + 0.085 * vec2(
    vnoise(q * 0.95 + vec2(u_time * 0.03, 5.3)) - 0.5,
    vnoise(q * 0.95 + vec2(3.9, -u_time * 0.026) + 1.7) - 0.5
  );
}

vec4 plumes(vec2 q) {
  vec2 base = floor(q);
  vec4 acc = vec4(0.0);
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 id = base + vec2(float(i), float(j));
      vec4 h = hash42(id);
      // every site keeps its own period and phase, so births are decorrelated
      // across the field: a shared clock makes the entire surface pulse
      float per = mix(8.5, 16.5, h.x);
      float u = u_time / per + h.y * 11.0;
      float gen = floor(u);
      float life = u - gen;
      // a new draw per generation — position, size and fate all change when a
      // site's plume is replaced, which is what makes neighbours jostle
      vec3 g = hash32(id * 1.37 + vec2(gen * 19.73, gen * 7.31) + 3.1);
      vec2 c = id + 0.5 + (g.xy - 0.5) * 0.72;
      float rad = mix(0.30, 0.47, g.z) * (0.78 + 0.52 * life);
      float amp = pow(sin(3.14159265 * life), 0.7);
      vec2 d = q - c;
      float ir2 = 1.0 / (rad * rad);
      float r2 = dot(d, d) * ir2;
      float e = exp(-r2) * amp;
      acc.x += e;
      acc.yz += e * (-2.0 * d * ir2);
      acc.w += e * (4.0 * r2 * ir2 - 4.0 * ir2);

      // exploding granule: a dimple opens at the summit late in life, so a
      // lane is driven through the middle of the cell and it splits rather
      // than simply fading. Roughly a third of sites are drawn for it.
      //
      // The dimple has to be BROAD, not deep. At rad*0.44 it was narrower than
      // the sim texel scale, so instead of splitting the cell it punched a
      // single-texel negative spike that clamped T to zero — a hard black
      // pinprick sitting in the middle of a bright granule, which read as a
      // rendering defect rather than as a pore. At 0.66 of the parent radius
      // the dimple is wide enough that the flow actually reverses across a
      // band, which is what drives a lane through and cleaves the cell in two.
      float fate = step(0.66, h.z) * u_split;
      float amp2 = fate * amp * 0.46 * smoothstep(0.48, 0.92, life);
      float rad2 = rad * 0.66;
      float ir2b = 1.0 / (rad2 * rad2);
      float r2b = dot(d, d) * ir2b;
      float eb = exp(-r2b) * amp2;
      acc.x -= eb;
      acc.yz -= eb * (-2.0 * d * ir2b);
      acc.w -= eb * (4.0 * r2b * ir2b - 4.0 * ir2b);
    }
  }
  return acc;
}
`,ct=`#version 300 es
${Qe}
${lt}
in vec2 v_uv;
out vec4 fragColor;

uniform sampler2D u_field;
uniform vec2 u_texel;
uniform vec2 u_grid;
uniform float u_dt;
uniform float u_flow;
uniform float u_fleck;
uniform vec3 u_ptr;      // xy uv, z strength
uniform float u_ptrAcc;

void main() {
  vec2 q = warp(cellCoord(v_uv));
  vec4 P = plumes(q);

  // the pointer is an extra upwelling: it pushes the lanes apart and floats
  // fresh hot material up under the cursor, the same way every other plume
  // does, so the interaction is the mechanism rather than a decal on it
  if (u_ptr.z > 0.0) {
    vec2 pc = cellCoord(u_ptr.xy);
    vec2 d = q - pc;
    float rad = 1.35;
    float ir2 = 1.0 / (rad * rad);
    float r2 = dot(d, d) * ir2;
    float e = exp(-r2) * u_ptr.z * 1.5;
    P.x += e;
    P.yz += e * (-2.0 * d * ir2);
    P.w += e * (4.0 * r2 * ir2 - 4.0 * ir2);
  }

  vec2 vel = -u_flow * P.yz;      // cells/s
  float div = -u_flow * P.w;      // 1/s

  // soft walls: without them the outward half of every edge plume drags the
  // clamped border texel inward across a tenth of the frame
  vec2 edge = smoothstep(vec2(0.0), vec2(0.035, 0.035 * u_aspect), min(v_uv, 1.0 - v_uv));
  vel *= min(edge.x, edge.y) * 0.85 + 0.15;

  vec2 duv = vel * u_dt / u_cells * vec2(1.0 / u_aspect, 1.0);
  vec4 s = texture(u_field, v_uv - duv);

  float T = s.x;
  float c = s.y;
  float f = s.z;
  float a = s.w;

  // continuity. This single line is what makes a lane: converging flow
  // multiplies the density it carries, diverging flow thins it out, and the
  // result is a network whose brightness records how hard the surface has been
  // squeezing there rather than where a boundary was declared to be.
  c *= exp(-div * u_dt * 0.052);
  c += (1.0 - c) * (1.0 - exp(-u_dt / 22.0));
  c = clamp(c, 0.12, 4.0);

  // radiative cooling on the way out from the summit is what gives a granule
  // its interior falloff, and the rate has to be tuned against the crossing
  // time rather than to taste: cool too slowly and every cell is one flat
  // plateau of the same value, which is foam, not a photosphere. At ~0.7s
  // against a ~0.5s centre-to-lane crossing, material arrives at its own
  // boundary noticeably dimmer than it left the summit.
  T += max(div, 0.0) * u_dt * 0.115;
  T -= T * u_dt * 1.45;
  T = clamp(T, 0.0, 3.0);

  // faculae: sparse, seeded on a 6Hz tick so the rate is independent of frame
  // rate, gated on both a piled-up lane and a live downdraft, then advected
  // with the lane that made them
  float lane = smoothstep(1.30, 2.10, c);
  float conv = smoothstep(0.30, 1.40, max(-div, 0.0));
  vec3 hs = hash32(floor(v_uv * u_grid * 0.5) + vec2(floor(u_time * 6.0) * 31.7));
  // the threshold is the seeding rate, and it was set so far out that a
  // 640x400 field produced under one live fleck at a time — invisible in the
  // dark theme, which is exactly where a bright point on a black lane should
  // be the most rewarding thing in the frame
  float spark = step(0.9991, hs.x) * lane * conv * u_fleck;
  f = max(f - f * u_dt * 2.3, spark * (0.55 + 0.75 * hs.y));

  a = max(a - a * u_dt * 0.9, u_ptrAcc * exp(-dot(cellCoord(v_uv) - cellCoord(u_ptr.xy), cellCoord(v_uv) - cellCoord(u_ptr.xy)) / 1.4));

  fragColor = vec4(T, c, f, a);
}`,ut=`#version 300 es
${Qe}
in vec2 v_uv;
out vec4 fragColor;

uniform sampler2D u_field;
uniform vec2 u_texel;
uniform vec2 u_res;
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform float u_bias;
uniform float u_contrast;
uniform float u_mottle;

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.26, x));
  c = mix(c, u_c2, smoothstep(0.24, 0.52, x));
  c = mix(c, u_c3, smoothstep(0.50, 0.80, x));
  c = mix(c, u_c4, smoothstep(0.78, 1.0, x));
  return c;
}

void main() {
  vec4 s = texture(u_field, v_uv);
  float T = s.x;
  float c = s.y;
  float f = s.z;
  float a = s.w;

  float lane = max(c - 1.0, 0.0);
  float open = max(1.0 - c, 0.0);

  // The four neighbours, fetched once and used twice — the lane seam below
  // needs grad(c), and T needs an unsharp.
  //
  // The unsharp is not a cosmetic sharpen. Semi-Lagrangian advection is
  // unconditionally stable precisely because it interpolates, and every step
  // pays for that with a bilinear fetch that low-passes the field; run it at
  // 60Hz and the surface is being blurred sixty times a second. The sim is
  // then magnified roughly four times onto the backing store, so what reaches
  // the eye is a soft field with no edge anywhere and the whole photosphere
  // reads out of focus. Subtracting the discrete laplacian puts back the
  // frequency band that dissipation just removed, at the cost of nothing —
  // these taps were already paid for.
  vec4 sl = texture(u_field, v_uv - vec2(u_texel.x, 0.0));
  vec4 sr = texture(u_field, v_uv + vec2(u_texel.x, 0.0));
  vec4 sd = texture(u_field, v_uv - vec2(0.0, u_texel.y));
  vec4 su = texture(u_field, v_uv + vec2(0.0, u_texel.y));
  float Tlap = (sl.x + sr.x + sd.x + su.x) * 0.25 - T;
  T = max(T - Tlap * 0.85, 0.0);

  // T goes through a saturating exposure rather than straight into the ramp.
  // Linear, the summit of every cell clips to the top stop within a second of
  // spin-up and the whole frame becomes white blobs in black seams — soap
  // foam, which is the exact failure this component has to avoid.
  //
  // Saturating alone was not enough: at an exposure of 2.1 the shoulder was
  // reached by the time T was ~1, so most of a granule's area still landed on
  // the top stop and the interiors were flat plateaus with all the variation
  // crushed out of them. A star does not look like that — granule-to-lane
  // contrast on the real photosphere is a fraction of full range, and every
  // cue that makes the surface worth staring at lives INSIDE that fraction.
  // Exposure 1.15 against a gain of 0.55 puts a typical summit near 0.75 of
  // the ramp rather than pinned at 1.0, which leaves the top quarter for the
  // hottest few percent of the field and gives the mottle and the cooling
  // falloff somewhere to be seen.
  float hot = 1.0 - exp(-T * 1.15);

  float L = 0.205;
  L += hot * 0.60;
  L -= smoothstep(0.03, 1.15, lane) * 0.32;
  L += open * 0.07;

  // the lane's own gradient, added as a thin seam. A density field advected
  // semi-Lagrangian loses its highest frequencies every step; putting a little
  // of the gradient back is the difference between a lane with an edge and a
  // soft grey smear where one used to be.
  float grad = length(vec2(sr.y - sl.y, su.y - sd.y));
  // gated to the lane side. Unclamped it also fires on the granule side of
  // every boundary, which laid a dark ring just inside each cell and embossed
  // the whole field — every granule beaded up as a separate object instead of
  // packing against its neighbours.
  L -= min(grad * 3.4, 0.24) * 0.5 * smoothstep(0.85, 1.15, c);

  // micro-mottle, confined to the hot interiors — a granule is not a smooth
  // plateau. Its lookup is displaced by the field itself, which costs nothing
  // and makes the texture travel with the material instead of sitting still
  // behind a moving surface.
  //
  // It carries most of the load now that the exposure no longer clips: with a
  // flat plateau there was nothing for it to modulate, and with headroom above
  // the summit it is the only thing between a granule and a painted disc.
  // Three octaves, and gated to open early (T = 0.04) so it reaches the cooler
  // outer thirds of a cell rather than only the summit.
  //
  // The displacement is small and CENTRED, and both of those were learned the
  // hard way. At vec2(c, T) * 2.3 the offset ran to several noise periods, so
  // the lookup did not travel with the material, it sheared with it: every
  // granule grew a bright cap on its upflow side and a speckled tail opposite,
  // and forty of those in a frame read as a field of mushrooms. Subtracting
  // c's rest value of 1 also matters — uncentred, the whole field carries a
  // constant offset and the term stops being a perturbation at all.
  vec2 mp = v_uv * vec2(u_aspect, 1.0) * u_cells * 6.5 + vec2(c - 1.0, T) * 0.85;
  float m = vnoise(mp) * 0.55 + vnoise(mp * 2.3 + 7.1) * 0.28 + vnoise(mp * 4.7 + 2.9) * 0.14;
  L += (m - 0.46) * u_mottle * smoothstep(0.04, 0.42, T);

  L += f * 0.62;

  // pointer freshness lifts luminance under the cursor, same ramp as
  // everything else — brighter or dimmer depending where L already sits,
  // never a hue laid on top. Folded in before the ramp so it also picks up
  // contrast/bias like every other term, rather than being a flat overlay.
  L += clamp(a, 0.0, 1.0) * 0.22;

  // a full-bleed surface should reach the edge of the frame. The vignette is
  // here only to stop the clamped border texels from reading as a hard cut,
  // so it starts late and lands shallow — at 0.09 it put visible black bands
  // across the top and bottom of a 16:10 frame and undid the full bleed.
  vec2 vp = v_uv - 0.5;
  float vig = smoothstep(0.62, 1.18, length(vp * vec2(u_aspect / max(u_aspect, 1.0), 1.0)) * 1.3);
  L -= vig * 0.045;

  L = clamp((L - 0.5) * u_contrast + 0.5 + u_bias, 0.0, 1.0);
  vec3 col = ramp(L);

  // the low end of a full-bleed ramp is a very long flat gradient, which is
  // exactly where 8-bit banding shows
  float dith = (hash32(gl_FragCoord.xy).x - 0.5) / 255.0;
  fragColor = vec4(col + dith, 1.0);
}`;function $(h){const a=h.trim();if(!a)return null;const e=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(a);if(e){let o=e[1];o.length===3&&(o=o.split("").map(_=>_+_).join(""));const i=parseInt(o,16);return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const t=/^rgba?\(([^)]+)\)$/i.exec(a);if(t){const o=t[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat);if(o.length>=3)return[o[0]/255,o[1]/255,o[2]/255]}return null}function x(h,a,e){return[h[0]+(a[0]-h[0])*e,h[1]+(a[1]-h[1])*e,h[2]+(a[2]-h[2])*e]}function ht([h,a,e]){return .2126*h+.7152*a+.0722*e}class ft{constructor(a){this.canvas=a,this.gl=null,this.vao=null,this.buffer=null,this.programs=[],this.locs=new WeakMap,this.fbos=[],this.active=null}init(a=!1){const e=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});return e?(this.gl=e,e.getExtension("EXT_color_buffer_float")??e.getExtension("EXT_color_buffer_half_float")?(e.getExtension("OES_texture_float_linear"),this.buffer=e.createBuffer(),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.disable(e.BLEND),e.disable(e.DEPTH_TEST),!0):(a||e.getExtension("WEBGL_lose_context")?.loseContext(),!1)):!1}program(a){const e=this.gl;if(!e)return null;const t=this.compile(e.VERTEX_SHADER,it),o=this.compile(e.FRAGMENT_SHADER,a);if(!t||!o)return null;const i=e.createProgram();return i?(e.attachShader(i,t),e.attachShader(i,o),e.bindAttribLocation(i,0,"a_pos"),e.linkProgram(i),e.deleteShader(t),e.deleteShader(o),e.getProgramParameter(i,e.LINK_STATUS)?(this.programs.push(i),this.locs.set(i,new Map),i):(e.deleteProgram(i),null)):null}compile(a,e){const t=this.gl,o=t.createShader(a);return o?(t.shaderSource(o,e),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null}use(a){this.gl?.useProgram(a),this.active=a}loc(a){const e=this.active;if(!e||!this.gl)return null;const t=this.locs.get(e);return t.has(a)||t.set(a,this.gl.getUniformLocation(e,a)),t.get(a)??null}f(a,e){this.gl?.uniform1f(this.loc(a),e)}v2(a,e,t){this.gl?.uniform2f(this.loc(a),e,t)}v3(a,e){this.gl?.uniform3f(this.loc(a),e[0],e[1],e[2])}v3f(a,e,t,o){this.gl?.uniform3f(this.loc(a),e,t,o)}tex(a,e,t){const o=this.gl;o&&(o.activeTexture(o.TEXTURE0+e),o.bindTexture(o.TEXTURE_2D,t),o.uniform1i(this.loc(a),e))}makeFBO(a,e){const t=this.gl,o=t.createTexture();if(!o)return null;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,a,e,0,t.RGBA,t.HALF_FLOAT,null);const i=t.createFramebuffer();if(!i)return t.deleteTexture(o),null;if(t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)return t.deleteTexture(o),t.deleteFramebuffer(i),t.bindFramebuffer(t.FRAMEBUFFER,null),null;t.clearColor(0,1,0,0),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null);const _={tex:o,fbo:i,w:a,h:e};return this.fbos.push(_),_}makeDouble(a,e){const t=this.makeFBO(a,e),o=this.makeFBO(a,e);if(!t||!o)return null;const i={read:t,write:o,swap:()=>{const _=i.read;i.read=i.write,i.write=_}};return i}blit(a){const e=this.gl;e&&(a?(e.bindFramebuffer(e.FRAMEBUFFER,a.fbo),e.viewport(0,0,a.w,a.h)):(e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,this.canvas.width,this.canvas.height)),e.drawArrays(e.TRIANGLES,0,3))}free(a){const e=this.gl;!e||!a||(e.deleteTexture(a.tex),e.deleteFramebuffer(a.fbo),this.fbos=this.fbos.filter(t=>t!==a))}freeDouble(a){a&&(this.free(a.read),this.free(a.write))}destroy(){const a=this.gl;if(a){for(const e of this.fbos.slice())this.free(e);for(const e of this.programs)a.deleteProgram(e);this.buffer&&a.deleteBuffer(this.buffer),this.vao&&a.deleteVertexArray(this.vao),this.programs=[],this.fbos=[],this.buffer=null,this.vao=null,this.active=null,this.gl=null}}}const Ke=300,dt=1/16,mt=460,we=.012,pt=.06,Ee=26;function Ze({density:h=1,speed:a=1,faculae:e=1,paused:t=!1,children:o,className:i="",style:_}){const Te=Y.useRef(null),ye=Y.useRef(null),A=Y.useRef(t);return A.current=t,Y.useEffect(()=>{const u=Te.current,f=ye.current;if(!u||!f)return;const s=new ft(f);if(!s.init())return;const Re=s.program(ct),Ae=s.program(ut);if(!Re||!Ae){const r=s.gl?.getExtension("WEBGL_lose_context");s.destroy(),r?.loseContext();return}let J=0,X=!1,m=!1,Le=!1,p=0,v=0,K=1,M=0,F=0,g=null,Q=performance.now(),b=0;const Me=[1,.8,.62],et=[896,704,512],tt=26;let L=0,k=16.7,P=0,C=0,q=8e3,w=0,I=0,Z=0,S=0,E=!1,T=0,y=0,D=0,U=0,N=0,j=0,ee=0,te=0,ae=0,re=0,G=!0,oe=[.02,.02,.03],se=[.1,.1,.11],ne=[.42,.42,.44],ie=[.86,.86,.87],le=[1,1,1],ce=0,ue=1.18,he=.14;const Fe=()=>{const r=getComputedStyle(document.documentElement),n=$(r.getPropertyValue("--background"))??[1,1,1],l=$(r.getPropertyValue("--foreground"))??[.09,.09,.09],c=$(r.getPropertyValue("--ns-muted"))??[.55,.55,.55],d=$(r.getPropertyValue("--border"))??[.2,.2,.2],R=[0,0,0],nt=[1,1,1];ht(n)<.5?(oe=x(n,R,.6),se=x(d,n,.1),ne=x(c,l,.25),ie=l,le=x(l,nt,.9),ce=-.04,ue=1.2,he=.17):(oe=n,se=x(n,c,.42),ne=x(c,l,.3),ie=x(l,c,.34),le=x(l,R,.15),ce=.02,ue=1.14,he=.15)};Fe();const ke=()=>15*Math.max(.35,Math.min(2.5,h)),at=(r,n)=>{s.use(Re),s.f("u_aspect",p/Math.max(1,v)),s.f("u_cells",ke()),s.f("u_time",b),s.f("u_dt",r),s.f("u_flow",.55*Math.max(.05,a)),s.f("u_split",1),s.f("u_fleck",Math.max(0,e)),s.v2("u_texel",1/M,1/F),s.v2("u_grid",M,F),s.v3f("u_ptr",D/Math.max(1,p),U/Math.max(1,v),n),s.f("u_ptrAcc",n>0?Math.min(1,n*1.1):0)},fe=r=>{if(!g)return;const n=E?I*(.5+.9*Z):0;b+=r*Math.max(.05,a),at(r,n),s.tex("u_field",0,g.read.tex),s.blit(g.write),g.swap()},z=()=>{g&&(s.use(Ae),s.f("u_aspect",p/Math.max(1,v)),s.f("u_cells",ke()),s.f("u_time",b),s.v2("u_texel",1/M,1/F),s.v2("u_res",p,v),s.v3("u_c0",oe),s.v3("u_c1",se),s.v3("u_c2",ne),s.v3("u_c3",ie),s.v3("u_c4",le),s.f("u_bias",ce),s.f("u_contrast",ue),s.f("u_mottle",he),s.tex("u_field",0,g.read.tex),s.blit(null))},Pe=r=>{const n=b;b=0;for(let l=0;l<r;l++)fe(dt);b=n>0?n:b},Ce=()=>{if(!s.gl||p<2||v<2)return;const n=et[L],l=p/v,c=l>=1?n:Math.max(96,Math.round(n*l)),d=l>=1?Math.max(96,Math.round(n/l)):n;g&&M===c&&F===d||(s.freeDouble(g),M=c,F=d,g=s.makeDouble(c,d),Pe(Ke))},Se=()=>{if(p<2||v<2)return;K=Math.min(window.devicePixelRatio||1,1.7)*Me[L];const r=Math.max(1,Math.round(p*K)),n=Math.max(1,Math.round(v*K));(f.width!==r||f.height!==n)&&(f.width=r,f.height=n),f.style.width=`${p}px`,f.style.height=`${v}px`};let V=0;const de=()=>{V=0;const r=u.getBoundingClientRect();r.width<2||r.height<2||(p=r.width,v=r.height,ae=r.left,re=r.top,G=!1,L=0,P=0,C=0,q=8e3,k=16.7,Se(),Ce(),z())},rt=()=>{V||(V=requestAnimationFrame(de))},ot=r=>{if(!E||r<=0)return;const n=1-Math.exp(-r/pt);N+=((T-ee)/r-N)*n,j+=((y-te)/r-j)*n,ee=T,te=y;let l=N*we,c=j*we;const d=Math.hypot(l,c);d>Ee&&(l=l/d*Ee,c=c/d*Ee);const R=1-Math.exp(-r/we);D+=(T+l-D)*R,U+=(y+c-U)*R},De=r=>{const n=r-Q;Q=r;const l=Math.min(.05,Math.max(5e-4,n/1e3));I+=(w-I)*(1-Math.exp(-l*7)),Z+=(S-Z)*(1-Math.exp(-l*6)),ot(l),fe(l),z();const c=Math.min(50,n);k+=(c-k)*(1-Math.exp(-c/120)),k>tt?(P+=c,C=0):(C+=c,P=0);const d=P>1600&&L<Me.length-1,R=C>q&&L>0;(d||R)&&(L+=d?1:-1,d&&(q=Math.min(64e3,q*2)),P=0,C=0,k=16.7,Se(),Ce()),J=requestAnimationFrame(De)},me=()=>{X||Le||(X=!0,Q=performance.now(),J=requestAnimationFrame(De))},B=()=>{cancelAnimationFrame(J),X=!1},st=()=>{if(!G)return;const r=u.getBoundingClientRect();ae=r.left,re=r.top,G=!1},W=()=>{G=!0},pe=r=>{st();const n=typeof r.getCoalescedEvents=="function"?r.getCoalescedEvents():null,l=n&&n.length>0?n[n.length-1]:r;T=l.clientX-ae,y=l.clientY-re},ve=()=>{D=T,U=y,N=0,j=0,ee=T,te=y,E=!0},ge=()=>{I=1,fe(1/60),z()},Ue=r=>{w=1,pe(r),ve(),m&&ge()},ze=r=>{pe(r),E||(ve(),w=1),m&&(D=T,U=y,ge())},Be=()=>{w=0,S=0,E=!1},Oe=r=>{pe(r),ve(),w=1,S=1,m&&ge()},Xe=r=>{S=0,r.pointerType!=="mouse"&&(w=0,E=!1)},qe=()=>{w=0,S=0,E=!1},Ie=new ResizeObserver(rt);Ie.observe(u),de(),u.addEventListener("pointerenter",Ue),u.addEventListener("pointerleave",Be),u.addEventListener("pointermove",ze),u.addEventListener("pointerdown",Oe),u.addEventListener("pointerup",Xe),u.addEventListener("pointercancel",qe),window.addEventListener("scroll",W,{passive:!0,capture:!0}),window.addEventListener("resize",W,{passive:!0});const H=window.matchMedia("(prefers-reduced-motion: reduce)");let _e=H.matches;const xe=()=>{_e||A.current?m||(m=!0,B(),Pe(mt-Ke),z()):(m||!X)&&(m=!1,me())},Ne=()=>{_e=H.matches,xe()};H.addEventListener("change",Ne);let be=!0;const je=new IntersectionObserver(r=>{be=r.some(n=>n.isIntersecting),be?!m&&!document.hidden&&me():B()},{threshold:0});je.observe(u);const Ge=()=>{document.hidden?B():!m&&be&&me()};document.addEventListener("visibilitychange",Ge),xe();let Ve=A.current,We=0;const He=()=>{A.current!==Ve&&(Ve=A.current,!A.current&&!_e&&(m=!0),xe()),We=window.setTimeout(He,140)};He();const Ye=new MutationObserver(()=>{Fe(),m&&z()});Ye.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const $e=r=>{r.preventDefault(),B()},Je=()=>{g=null,s.init(!0)&&de()};return f.addEventListener("webglcontextlost",$e),f.addEventListener("webglcontextrestored",Je),()=>{Le=!0,B(),cancelAnimationFrame(V),Ie.disconnect(),je.disconnect(),H.removeEventListener("change",Ne),document.removeEventListener("visibilitychange",Ge),Ye.disconnect(),f.removeEventListener("webglcontextlost",$e),f.removeEventListener("webglcontextrestored",Je),u.removeEventListener("pointerenter",Ue),u.removeEventListener("pointerleave",Be),u.removeEventListener("pointermove",ze),u.removeEventListener("pointerdown",Oe),u.removeEventListener("pointerup",Xe),u.removeEventListener("pointercancel",qe),window.removeEventListener("scroll",W,{capture:!0}),window.removeEventListener("resize",W),window.clearTimeout(We);const r=s.gl?.getExtension("WEBGL_lose_context");s.destroy(),f.isConnected||r?.loseContext()}},[h,a,e]),O.jsxs("div",{ref:Te,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${i}`,style:_,children:[O.jsx("canvas",{ref:ye,"aria-hidden":"true",className:"absolute inset-0 block"}),o?O.jsx("div",{className:"relative z-[1] h-full w-full",children:o}):null]})}Ze.displayName="GranuleChurn";function gt(){return O.jsx("div",{className:"ns-stage",children:O.jsx(Ze,{children:"示例"})})}export{gt as default};
