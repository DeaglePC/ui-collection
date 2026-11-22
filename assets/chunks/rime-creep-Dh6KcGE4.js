import{r as we,j as be}from"./client-CsvIHAk3.js";const ut=96,wa=11,Ea=31,O=.075,ba=3.6,b=5,xa=4,Yt=2400,Ra=5,ya=47,Aa=.63,Ma=.66,Ta=2.7,Fa=21,La=.78,Vt=[430,145,66,31,15,8],ht=.014,Pa=.06,dt=26,Ht=18,jt=26,qt=1/40,Se=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,$t=`
attribute vec2 a_pos;
attribute vec2 a_local;
attribute vec4 a_meta;
attribute float a_birth;
uniform vec2 u_size;
varying vec2 v_local;
varying vec4 v_meta;
varying float v_birth;
void main() {
  v_local = a_local;
  v_meta = a_meta;
  v_birth = a_birth;
  vec2 c = vec2(a_pos.x / u_size.x * 2.0 - 1.0, 1.0 - a_pos.y / u_size.y * 2.0);
  gl_Position = vec4(c, 0.0, 1.0);
}
`,Kt=`
precision highp float;
varying vec2 v_local;   // x = along the arm, y = across it, both css px
varying vec4 v_meta;    // half-width, barb length, segment length, orientation
varying float v_birth;
uniform float u_pass;   // 0 = density, 1 = birth + orientation tags

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float hash21(vec2 p) {
  p = fract(p * vec2(287.13, 419.71));
  p += dot(p, p + 27.31);
  return fract(p.x * p.y);
}

void main() {
  float hw = max(v_meta.x, 0.5);
  float len = v_meta.z;
  float u = v_local.x;
  float av = abs(v_local.y);
  float side = v_local.y < 0.0 ? 0.0 : 1.0;

  // The arm itself: a tight ridge plus a broad low reservoir.
  // The skirt is wide and low on purpose. It is the reservoir the render pass's
  // falling age threshold eats into, and because two nearby arms' skirts SUM,
  // the glass between them crosses the threshold before either arm's own skirt
  // would — which is the mechanism by which the clear gaps close over instead
  // of every arm merely getting fatter in place.
  float ends = smoothstep(-0.6, 0.6, u) * smoothstep(-0.6, 0.6, len - u);
  float core = exp(-(av * av) / (hw * hw) * 1.55);
  float skirt = exp(-(av * av) / (hw * hw * 26.0));
  float body = (core * 0.22 + skirt * 0.038) * ends;

  // barbs on a lattice along the arm, at the same +/-60 the branches use, with
  // hashed lengths so the feather is irregular at pixel scale rather than at
  // simulation scale
  float sp = hw * 3.0 + 1.7;
  float idx = floor(u / sp);
  float hair = 0.0;
  for (int k = 0; k < 2; k++) {
    float i = idx + float(k);
    float u0 = (i + 0.5) * sp;
    float inSeg = step(0.0, u0) * step(u0, len);
    float du = u - u0;
    float a = du * 0.5 + av * 0.8660254;
    float b = -du * 0.8660254 + av * 0.5;
    float L = v_meta.y * (0.5 + 0.8 * hash11(i * 1.37 + v_meta.w * 13.0 + side * 5.1));
    float w = hw * 0.52;
    hair = max(hair, exp(-(b * b) / (w * w) * 1.7) * smoothstep(L, 0.0, a) * step(-0.6, a) * inSeg);
  }

  float dens = body + hair * 0.13;
  dens *= 0.76 + 0.36 * hash21(v_local * 0.75 + v_meta.wz * 57.0);

  if (u_pass < 0.5) {
    gl_FragColor = vec4(dens, 0.0, 0.0, 1.0);
  } else {
    // near-binary alpha, so a segment's faint skirt cannot drag the birth phase
    // of the glass it passes over toward "half as old"
    gl_FragColor = vec4(0.0, v_birth, v_meta.w, smoothstep(0.010, 0.055, dens));
  }
}
`,Qt=`
precision highp float;
uniform vec2 u_buf;    // accumulation buffer size, texels
uniform vec2 u_size;   // css px
uniform float u_dt;
uniform vec4 u_thaw;   // xy unit direction, z front position, w band width
uniform float u_thawRate;
uniform vec3 u_warm;   // xy css px (y up), z strength
uniform float u_warmR;

void main() {
  vec2 uv = gl_FragCoord.xy / u_buf;
  // the thaw front: a band crossing the pane, strong enough that a texel it
  // passes over is cleared, and zero once it has gone by, so crystals nucleate
  // and regrow in its wake instead of being held down forever
  float proj = dot(uv, u_thaw.xy);
  float k = (proj - u_thaw.z) / max(0.02, u_thaw.w);
  float rate = u_thawRate * exp(-k * k);
  // the warm fingertip, in css px
  vec2 p = uv * u_size;
  float d = length(p - u_warm.xy) / max(1.0, u_warmR);
  rate += u_warm.z * 9.0 * exp(-d * d * 1.9);
  gl_FragColor = vec4(exp(-rate * u_dt), 1.0, 1.0, 1.0);
}
`,Zt=`
precision highp float;

uniform sampler2D u_acc;
uniform vec2 u_res;      // drawing buffer px
uniform vec2 u_size;     // css px
uniform vec2 u_texel;    // 1 / accumulation buffer size
uniform float u_time;
uniform float u_phase;   // birth clock phase, 0..1
uniform float u_mature;  // MATURE / BIRTH_CLOCK
uniform float u_relief;
uniform float u_sparkle;
uniform vec3 u_warm;     // xy css px (y up), z strength
uniform float u_warmR;
uniform float u_glass;
uniform float u_iceGain;
uniform float u_haloGain;
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
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

float fbm(vec2 p) {
  float s = vnoise(p) * 0.58;
  s += vnoise(p * 2.13 + 9.1) * 0.28;
  s += vnoise(p * 4.31 + 21.7) * 0.14;
  return s;
}

// coverage at one texel: the density that has crossed the age-dependent
// threshold. Young frost only shows its core; old frost shows its whole skirt,
// which is how an arm fattens behind its own tip.
float coverOf(vec3 a) {
  float age = u_phase - a.g;
  age += age < 0.0 ? 1.0 : 0.0;
  float thr = mix(0.145, 0.038, smoothstep(0.0, u_mature, age));
  return smoothstep(thr, thr + 0.055, a.r);
}

float coverAt(vec2 uv) {
  return coverOf(texture2D(u_acc, uv).rgb);
}

vec3 ramp(float t) {
  t = clamp(t, 0.0, 1.0);
  if (t < 0.25) return mix(u_c0, u_c1, t / 0.25);
  if (t < 0.5) return mix(u_c1, u_c2, (t - 0.25) / 0.25);
  if (t < 0.75) return mix(u_c2, u_c3, (t - 0.5) / 0.25);
  return mix(u_c3, u_c4, (t - 0.75) / 0.25);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = vec2(uv.x * u_size.x, uv.y * u_size.y); // css px, y up

  vec3 a0 = texture2D(u_acc, uv).rgb;
  float cov = coverOf(a0);
  float dens = a0.r;
  float grain = a0.b; // the crystal's lattice orientation, 0..1 over 60 degrees

  // the warm fingertip. Expressed only in coverage and luminance — the frost
  // under the pointer has already been eaten out of the accumulation buffer,
  // this is the part that responds within the frame.
  float wd = length(p - u_warm.xy) / max(1.0, u_warmR);
  float warm = u_warm.z * exp(-wd * wd * 1.6);
  cov *= 1.0 - 0.88 * warm;

  vec2 e = u_texel;
  float cx = coverAt(uv + vec2(e.x, 0.0)) - coverAt(uv - vec2(e.x, 0.0));
  float cy = coverAt(uv + vec2(0.0, e.y)) - coverAt(uv - vec2(0.0, e.y));
  float edge = clamp(length(vec2(cx, cy)) * 1.35, 0.0, 1.0);
  vec3 n = normalize(vec3(-cx * 5.5 * u_relief, -cy * 5.5 * u_relief, 1.0));
  vec3 lightDir = normalize(vec3(-0.52, 0.60, 0.61));
  float diff = max(dot(n, lightDir), 0.0);

  // thickness: how much ice is stacked here, independent of whether it has
  // crossed the coverage threshold yet
  float thick = clamp(dens * 2.1, 0.0, 1.0) * cov;

  // micro-facets. Each cell keeps a fixed seed and beats at its own rate, so
  // the whole frosted area scintillates continuously and the frame differs
  // everywhere between any two moments, not only at the advancing tips.
  vec2 fc = floor(p / 2.6);
  float fs = hash21(fc + 5.7);
  float fs2 = hash21(fc + 91.3);
  float tw = 0.5 + 0.5 * sin(u_time * (1.4 + 3.4 * fs) + fs2 * 40.0);
  float sparkle = pow(tw, 9.0) * step(0.66, fs2) * u_sparkle;

  // A very slow band of grazing light crossing the pane, phase-shifted by the
  // crystal's own lattice orientation — neighbouring grains catch it at
  // different moments, which is what makes a grain boundary legible even where
  // two ferns have grown into each other and closed the seam.
  float sweep = 0.5 + 0.5 * sin((p.x * 0.0016 + p.y * 0.0011) - u_time * 0.11 + grain * 4.4);
  float graze = pow(sweep, 3.0);

  // Scatter first, shading second: frost is bright because it is a mess of
  // air-ice interfaces, not because a lamp is pointed at it. The compression at
  // the end is what keeps a dense crystal from clipping to a flat white plate —
  // uncompressed, the arm cores, their rims and the sparkle all land above 1.0
  // together and the whole fern reads as cut paper.
  float ice = 0.0;
  ice += thick * 0.40;
  ice += edge * 0.32;
  ice += diff * cov * 0.16;
  ice += cov * graze * 0.09;
  ice += sparkle * cov * (0.10 + 0.22 * graze);
  ice = ice / (1.0 + ice * 0.55);

  // The dark contact line: the outermost fringe of an arm's skirt, the ice too
  // thin to scatter, which on a real pane reads as a shadow around the crystal.
  // It has to be a BAND and not simply "everything below the coverage
  // threshold" — the open version speckles the interior of a dense crystal
  // black wherever the deposits happened to leave a mid-density pixel, which in
  // the light theme turns the busiest part of the pane into soot.
  float halo = smoothstep(0.010, 0.055, dens) * (1.0 - smoothstep(0.075, 0.20, dens)) * (1.0 - cov);

  // the glass itself, hazing and breathing slowly so the bare parts of the pane
  // are never a flat plate
  float haze = fbm(p * 0.0045 + vec2(u_time * 0.011, -u_time * 0.008));
  float bloom = fbm(p * 0.017 + vec2(-u_time * 0.02, u_time * 0.014));
  float glass = u_glass + (haze - 0.5) * 0.075 + (bloom - 0.5) * 0.022;

  vec2 q = uv - 0.5;
  float vign = 1.0 - 0.32 * dot(q, q) * 2.2;

  float L = glass * vign + ice * u_iceGain - halo * u_haloGain;
  L += warm * 0.045;
  L += (hash21(floor(gl_FragCoord.xy) + u_time) - 0.5) * 0.012;

  L = clamp((L - 0.5) * u_contrast + 0.5 + u_bias, 0.0, 1.0);
  gl_FragColor = vec4(ramp(L), 1.0);
}
`;function De(d){const n=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(d.trim());if(!n)return null;let f=n[1];f.length===3&&(f=f.split("").map(_=>_+_).join(""));const p=parseInt(f,16);return[(p>>16&255)/255,(p>>8&255)/255,(p&255)/255]}function k(d,n,f){return[d[0]+(n[0]-d[0])*f,d[1]+(n[1]-d[1])*f,d[2]+(n[2]-d[2])*f]}function Sa([d,n,f]){return .2126*d+.7152*n+.0722*f}function Jt(d,n,f){const p=d.createShader(n);if(d.shaderSource(p,f),d.compileShader(p),!d.getShaderParameter(p,d.COMPILE_STATUS)){const _=d.getShaderInfoLog(p);throw d.deleteShader(p),new Error(`rime-creep: shader compile failed: ${_??""}`)}return p}class se{constructor(n,f,p){this.gl=n,this.program=null,this.vs=null,this.fs=null,this.uniforms=new Map,this.attribs=new Map,this.vs=Jt(n,n.VERTEX_SHADER,f),this.fs=Jt(n,n.FRAGMENT_SHADER,p);const _=n.createProgram();if(!_)throw new Error("rime-creep: could not create program");if(this.program=_,n.attachShader(_,this.vs),n.attachShader(_,this.fs),n.linkProgram(_),!n.getProgramParameter(_,n.LINK_STATUS)){const Z=n.getProgramInfoLog(_);throw new Error(`rime-creep: link failed: ${Z??""}`)}}use(){this.gl.useProgram(this.program)}attrib(n){return this.attribs.has(n)||this.attribs.set(n,this.gl.getAttribLocation(this.program,n)),this.attribs.get(n)}loc(n){return this.uniforms.has(n)||this.uniforms.set(n,this.gl.getUniformLocation(this.program,n)),this.uniforms.get(n)??null}f(n,f){this.gl.uniform1f(this.loc(n),f)}i(n,f){this.gl.uniform1i(this.loc(n),f)}v2(n,f,p){this.gl.uniform2f(this.loc(n),f,p)}v3(n,f,p,_){this.gl.uniform3f(this.loc(n),f,p,_)}v3c(n,f){this.gl.uniform3f(this.loc(n),f[0],f[1],f[2])}v4(n,f,p,_,Z){this.gl.uniform4f(this.loc(n),f,p,_,Z)}destroy(){const n=this.gl;this.program&&n.deleteProgram(this.program),this.vs&&n.deleteShader(this.vs),this.fs&&n.deleteShader(this.fs),this.program=null,this.vs=null,this.fs=null,this.uniforms.clear(),this.attribs.clear()}}const Da=Math.PI*2,ke=Math.PI/3,Ee=9,ie=6;function ea({density:d=1,growth:n=1,relief:f=1,sparkle:p=1,speed:_=1,paused:Z=!1,children:mt,className:ta="",style:aa}){const pt=we.useRef(null),vt=we.useRef(null),ra=we.useId(),J=we.useRef(Z);return J.current=Z,we.useEffect(()=>{const g=pt.current,w=vt.current;if(!g||!w)return;const e=w.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!e)return;let ee=null,te=null,ae=null,X=null,ce=null,B=null,T=null,Be=0,Ue=!1,x=!1,Ce=!1,le=!1,v=0,m=0,Ie=1,U=0,W=0,Ge=performance.now(),Ne=0;const _t=[1,.8,.62],oa=24;let fe=0,ue=16.7,he=0,de=0,xe=8e3,Y=[],V=new Uint16Array(0),Re=new Int32Array(0),R=0,H=0,me=0,gt=1,ye=0,C=2654435769;const y=()=>(C^=C<<13,C^=C>>>17,C^=C<<5,(C>>>0)%1e5/1e5);let E=new Float32Array(4096*Ee*ie),P=0;const na=(t,a,o,s,c,i,u)=>{const l=o-t,r=s-a,h=Math.hypot(l,r);if(h<.001)return;if((P+1)*Ee*ie>E.length){const Q=new Float32Array(E.length*2);Q.set(E),E=Q}const F=l/h,A=r/h,M=-A,z=F,L=c*2.6+2.2,S=L+c*3.2,ne=L+c*3.6,_a=[-S,h+S,h+S,-S,h+S,-S],ga=[-ne,-ne,ne,-ne,ne,ne];let D=P*Ee*ie;for(let Q=0;Q<6;Q++){const lt=_a[Q],ft=ga[Q];E[D++]=t+F*lt+M*ft,E[D++]=a+A*lt+z*ft,E[D++]=lt,E[D++]=ft,E[D++]=c,E[D++]=L,E[D++]=h,E[D++]=i,E[D++]=u}P++},ze=(t,a)=>{const o=Math.floor(t/b),s=Math.floor(a/b);return o<0||s<0||o>=R||s>=H?-1:s*R+o},sa=(t,a,o,s,c)=>{const i=Math.max(1,Math.ceil(Math.hypot(o-t,s-a)/(b*.6)));for(let u=0;u<=i;u++){const l=u/i,r=ze(t+(o-t)*l,a+(s-a)*l);r>=0&&(V[r]=c,Re[r]=me)}},wt=(t,a,o,s,c,i,u,l)=>{Y.length>=Yt||Y.push({x:t,y:a,ang:o,speed:ya*Math.pow(Aa,s)*(.82+.36*y()),width:u,gap:l*(.7+.6*y()),sinceGap:0,sinceEmit:0,ex:t,ey:a,range:Vt[Math.min(s,Vt.length-1)]*(.7+.6*y()),gen:s,grain:c,orient:i,alive:!0})},ia=(t,a)=>{const o=ze(t,a);if(o<0)return;const s=gt++%6e4||1,c=y()*ke,i=c/ke,u=6;for(let l=0;l<u;l++)wt(t,a,c+l*ke,0,s,i,Ta,Fa);V[o]=s,Re[o]=me},ca=(t,a,o)=>{const s=Math.floor(t/b),c=Math.floor(a/b),i=Math.ceil(o/b);for(let u=-i;u<=i;u++)for(let l=-i;l<=i;l++){const r=s+l,h=c+u;if(!(r<0||h<0||r>=R||h>=H)&&V[h*R+r]!==0)return!1}return!0},la=(t,a,o)=>{const s=Math.floor(t/b),c=Math.floor(a/b),i=Math.ceil(o/b);for(let u=-i;u<=i;u++)for(let l=-i;l<=i;l++){const r=s+l,h=c+u;r<0||h<0||r>=R||h>=H||l*l+u*u>i*i||(V[h*R+r]=0)}};let pe=.944,re=.33,j=-O;const fa=()=>{Y=[],R=Math.max(1,Math.ceil(v/b)+1),H=Math.max(1,Math.ceil(m/b)+1),V=new Uint16Array(R*H),Re=new Int32Array(R*H),me=0,gt=1,ye=0,C=2654435769,pe=.944,re=.33,j=-O;const t=v*m/(1440*900),a=Math.max(4,Math.round(9*t*Math.max(.3,d)));for(let o=0;o<a;o++)Et(!0)},Et=t=>{for(let a=0;a<12;a++){let o,s;if(t&&y()<.42){const c=Math.floor(y()*4),i=y();c===0?(o=i*v,s=2):c===1?(o=i*v,s=m-2):c===2?(o=2,s=i*m):(o=v-2,s=i*m)}else o=y()*v,s=y()*m;if(ca(o,s,t?30:17))return ia(o,s),!0}return!1},bt=()=>Ne%ut/ut,ua=t=>{me++;const a=bt(),o=[];for(let l=0;l<Y.length;l++){const r=Y[l],h=r.speed*Math.max(.05,n)*t,F=r.x+Math.cos(r.ang)*h,A=r.y+Math.sin(r.ang)*h;if(F<-8||A<-8||F>v+8||A>m+8)r.alive=!1;else{const M=ze(F,A);if(M>=0){const z=V[M];z!==0&&(z!==r.grain||me-Re[M]>4)&&(r.alive=!1)}}if(r.alive){if(r.x=F,r.y=A,r.range-=h,r.sinceEmit+=h,r.sinceGap+=h,r.sinceEmit>=xa&&(na(r.ex,r.ey,r.x,r.y,r.width,r.orient,a),sa(r.ex,r.ey,r.x,r.y,r.grain),r.ex=r.x,r.ey=r.y,r.sinceEmit=0),r.sinceGap>=r.gap&&r.gen<Ra&&Y.length<Yt){r.sinceGap=0;const M=y()<.72?[1,-1]:[y()<.5?1:-1];for(const z of M)wt(r.x,r.y,r.ang+z*ke,r.gen+1,r.grain,r.orient,r.width*Ma,r.gap*La)}r.range<=0&&(r.alive=!1),r.alive&&o.push(r)}}Y=o,ye+=t;const s=.26/Math.max(.3,d);for(;ye>=s;)ye-=s,Et(!1);const c=xt();if(j+=t*(c.hi-c.lo+2*O)/Ea,j>c.hi+O){const l=y()*Da;pe=Math.cos(l),re=Math.sin(l),j=xt().lo-O}const i=b/Math.max(1,v)*pe,u=b/Math.max(1,m)*re;for(let l=0;l<H;l++){const r=re-l*u,h=j-O-r,F=j+O-r;let A,M;if(Math.abs(i)<1e-6){if(h>0||F<0)continue;A=0,M=R-1}else{const L=h/i,S=F/i;A=Math.max(0,Math.ceil(Math.min(L,S))),M=Math.min(R-1,Math.floor(Math.max(L,S)))}const z=l*R;for(let L=A;L<=M;L++)V[z+L]=0}},xt=()=>{const t=pe,a=re,o=Math.min(0,t)+Math.min(0,a),s=Math.max(0,t)+Math.max(0,a);return{lo:o,hi:s}},ha=()=>{B&&e.deleteTexture(B),T&&e.deleteFramebuffer(T),B=e.createTexture(),e.bindTexture(e.TEXTURE_2D,B),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,U,W,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),T=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,T),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,B,0),e.viewport(0,0,U,W),e.colorMask(!0,!0,!0,!0),e.disable(e.BLEND),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null)},Rt=t=>{e.bindBuffer(e.ARRAY_BUFFER,X);const a=t.attrib("a_pos");e.enableVertexAttribArray(a),e.vertexAttribPointer(a,2,e.FLOAT,!1,0,0)},da=()=>{if(P===0||!ee||!T)return;const t=ee;t.use(),e.bindFramebuffer(e.FRAMEBUFFER,T),e.viewport(0,0,U,W),e.bindBuffer(e.ARRAY_BUFFER,ce);const a=P*ie*Ee;e.bufferData(e.ARRAY_BUFFER,E.subarray(0,a),e.DYNAMIC_DRAW);const o=Ee*4,s=(c,i,u)=>{const l=t.attrib(c);l<0||(e.enableVertexAttribArray(l),e.vertexAttribPointer(l,i,e.FLOAT,!1,o,u))};s("a_pos",2,0),s("a_local",2,8),s("a_meta",4,16),s("a_birth",1,32),t.v2("u_size",v,m),e.enable(e.BLEND),e.colorMask(!0,!1,!1,!1),e.blendFunc(e.ONE,e.ONE),t.f("u_pass",0),e.drawArrays(e.TRIANGLES,0,P*ie),e.colorMask(!1,!0,!0,!1),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),t.f("u_pass",1),e.drawArrays(e.TRIANGLES,0,P*ie),e.colorMask(!0,!0,!0,!0),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,null);for(const c of["a_local","a_meta","a_birth"]){const i=t.attrib(c);i>=0&&e.disableVertexAttribArray(i)}P=0};let I=0,G=0,q=0,ve=0;const Oe=118,ma=t=>{if(!te||!T)return;const a=te;a.use(),e.bindFramebuffer(e.FRAMEBUFFER,T),e.viewport(0,0,U,W),Rt(a),a.v2("u_buf",U,W),a.v2("u_size",v,m),a.f("u_dt",t),a.v4("u_thaw",pe,re,j,O),a.f("u_thawRate",ba),a.v3("u_warm",I,m-G,q),a.f("u_warmR",Oe),e.enable(e.BLEND),e.colorMask(!0,!1,!1,!1),e.blendFunc(e.ZERO,e.SRC_COLOR),e.drawArrays(e.TRIANGLES,0,6),e.colorMask(!0,!0,!0,!0),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,null)};let Xe=[.03,.03,.03],We=[.18,.18,.18],Ye=[.56,.56,.56],Ve=[.93,.93,.93],He=[1,1,1],je=.16,qe=1,$e=.12,Ke=0,Qe=1;const yt=()=>{const t=getComputedStyle(document.documentElement),a=De(t.getPropertyValue("--background"))??[1,1,1],o=De(t.getPropertyValue("--foreground"))??[.09,.09,.09],s=De(t.getPropertyValue("--ns-muted"))??[.55,.55,.55],c=De(t.getPropertyValue("--border"))??[.18,.18,.18],i=[0,0,0],u=[1,1,1];Sa(a)<.5?(Xe=k(a,i,.55),We=k(c,a,.15),Ye=k(s,o,.1),Ve=k(o,u,.35),He=k(o,u,.95),je=.19,qe=1.12,$e=.11,Ke=0,Qe=1.07):(Xe=k(o,i,.2),We=k(o,s,.62),Ye=k(s,a,.35),Ve=k(a,s,.22),He=a,je=.5,qe=1,$e=.12,Ke=.02,Qe=1.12)};yt();const N=()=>{if(!ae||!le||v<=0)return;const t=ae;t.use(),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,w.width,w.height),Rt(t),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,B),t.i("u_acc",0),t.v2("u_res",w.width,w.height),t.v2("u_size",v,m),t.v2("u_texel",1/U,1/W),t.f("u_time",Ne),t.f("u_phase",bt()),t.f("u_mature",wa/ut),t.f("u_relief",Math.max(0,f)),t.f("u_sparkle",Math.max(0,p)),t.v3("u_warm",I,m-G,q),t.f("u_warmR",Oe),t.f("u_glass",je),t.f("u_iceGain",qe),t.f("u_haloGain",$e),t.v3c("u_c0",Xe),t.v3c("u_c1",We),t.v3c("u_c2",Ye),t.v3c("u_c3",Ve),t.v3c("u_c4",He),t.f("u_bias",Ke),t.f("u_contrast",Qe),e.drawArrays(e.TRIANGLES,0,6)};let oe=!1,$=0,K=0,Ae=0,Me=0,Ze=0,Je=0,et=0,tt=0,Te=!0;const pa=t=>{if(!(t<=0)){if(oe){const a=1-Math.exp(-t/Pa);Ae+=(($-Ze)/t-Ae)*a,Me+=((K-Je)/t-Me)*a,Ze=$,Je=K;let o=Ae*ht,s=Me*ht;const c=Math.hypot(o,s);c>dt&&(o=o/c*dt,s=s/c*dt);const i=1-Math.exp(-t/ht);I+=($+o-I)*i,G+=(K+s-G)*i}q+=(ve-q)*(1-Math.exp(-t*5.5))}},At=t=>{Ne+=t,ua(t),da(),ma(t),oe&&q>.05&&la(I,G,Oe*.72)},Mt=t=>{const a=Math.round(t/qt);for(let o=0;o<a;o++)At(qt)},Tt=t=>{const a=t-Ge,o=Math.min(.05,Math.max(0,a/1e3));Ge=t,pa(o),At(o*Math.max(0,_)),N();const s=Math.min(50,a);ue+=(s-ue)*(1-Math.exp(-s/120)),ue>oa?(he+=s,de=0):(de+=s,he=0);const c=he>900&&fe<_t.length-1,i=de>xe&&fe>0;(c||i)&&(fe+=c?1:-1,c&&(xe=Math.min(64e3,xe*2)),he=0,de=0,ue=16.7,Ft()),Be=requestAnimationFrame(Tt)},at=()=>{Ue||Ce||!le||(Ue=!0,Ge=performance.now(),Be=requestAnimationFrame(Tt))},_e=()=>{cancelAnimationFrame(Be),Ue=!1},Ft=()=>{if(v<2||m<2)return;Ie=Math.min(window.devicePixelRatio||1,2)*_t[fe];const t=Math.round(v*Ie),a=Math.round(m*Ie);(w.width!==t||w.height!==a)&&(w.width=t,w.height=a),w.style.width=`${v}px`,w.style.height=`${m}px`},rt=()=>{const t=g.getBoundingClientRect();if(t.width<2||t.height<2)return;const a=Math.abs(t.width-v)>.5||Math.abs(t.height-m)>.5;v=t.width,m=t.height,et=t.left,tt=t.top,Te=!1,oe||(I=v*.5,G=m*.5),fe=0,he=0,de=0,xe=8e3,ue=16.7,Ft(),a&&(U===0?Pt():(window.clearTimeout(Lt),Lt=window.setTimeout(Pt,260))),N()};let Lt=0;const Pt=()=>{if(Ce||v<2||m<2)return;const t=Math.min(window.devicePixelRatio||1,1.75);U=Math.max(2,Math.round(v*t)),W=Math.max(2,Math.round(m*t)),ha(),fa(),P=0,Mt(x?jt:Ht),N()},va=()=>{if(!Te)return;const t=g.getBoundingClientRect();et=t.left,tt=t.top,Te=!1},Fe=()=>{Te=!0},ot=t=>{va();const a=typeof t.getCoalescedEvents=="function"?t.getCoalescedEvents():null,o=a&&a.length>0?a[a.length-1]:t;$=o.clientX-et,K=o.clientY-tt},nt=()=>{I=$,G=K,Ae=0,Me=0,Ze=$,Je=K,oe=!0},St=t=>{ot(t),nt(),ve=1,x&&N()},st=t=>{ot(t),oe||(nt(),ve=1),x&&(I=$,G=K,q=1,N())},ge=()=>{ve=0,oe=!1,x&&(q=0,N())},Dt=t=>{ot(t),nt(),ve=1,x&&st(t)},kt=t=>{t.pointerType!=="mouse"&&ge()};try{ee=new se(e,$t,Kt),te=new se(e,Se,Qt),ae=new se(e,Se,Zt)}catch{ee?.destroy(),te?.destroy(),ae?.destroy(),e.getExtension("WEBGL_lose_context")?.loseContext();return}X=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,X),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ce=e.createBuffer(),le=!0;const Le=window.matchMedia("(prefers-reduced-motion: reduce)");let it=Le.matches;x=it||J.current;const Bt=new ResizeObserver(rt);Bt.observe(g),rt(),g.addEventListener("pointerenter",St),g.addEventListener("pointerleave",ge),g.addEventListener("pointermove",st),g.addEventListener("pointerdown",Dt),g.addEventListener("pointerup",kt),g.addEventListener("pointercancel",ge),window.addEventListener("scroll",Fe,{passive:!0,capture:!0}),window.addEventListener("resize",Fe,{passive:!0});const Pe=()=>{if(it||J.current){const t=!x;x=!0,_e(),t&&Mt(jt-Ht),N()}else x=!1,at()},Ut=()=>{it=Le.matches,Pe()};Le.addEventListener("change",Ut);let ct=!0;const Ct=new IntersectionObserver(t=>{ct=t.some(a=>a.isIntersecting),ct?!x&&!document.hidden&&at():_e()},{threshold:0});Ct.observe(g);const It=()=>{document.hidden?_e():!x&&ct&&at()};document.addEventListener("visibilitychange",It),Pe();let Gt=J.current,Nt=0;const zt=()=>{J.current!==Gt&&(Gt=J.current,Pe()),Nt=window.setTimeout(zt,140)};zt();const Ot=new MutationObserver(()=>{yt(),x&&N()});Ot.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const Xt=t=>{t.preventDefault(),le=!1,_e()},Wt=()=>{try{ee=new se(e,$t,Kt),te=new se(e,Se,Qt),ae=new se(e,Se,Zt)}catch{return}X=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,X),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ce=e.createBuffer(),le=!0,v=0,m=0,rt(),Pe()};return w.addEventListener("webglcontextlost",Xt),w.addEventListener("webglcontextrestored",Wt),()=>{Ce=!0,Bt.disconnect(),Ct.disconnect(),Le.removeEventListener("change",Ut),document.removeEventListener("visibilitychange",It),Ot.disconnect(),w.removeEventListener("webglcontextlost",Xt),w.removeEventListener("webglcontextrestored",Wt),g.removeEventListener("pointerenter",St),g.removeEventListener("pointerleave",ge),g.removeEventListener("pointermove",st),g.removeEventListener("pointerdown",Dt),g.removeEventListener("pointerup",kt),g.removeEventListener("pointercancel",ge),window.removeEventListener("scroll",Fe,{capture:!0}),window.removeEventListener("resize",Fe),window.clearTimeout(Nt),_e(),ee?.destroy(),te?.destroy(),ae?.destroy(),X&&e.deleteBuffer(X),ce&&e.deleteBuffer(ce),B&&e.deleteTexture(B),T&&e.deleteFramebuffer(T),w.isConnected||e.getExtension("WEBGL_lose_context")?.loseContext()}},[d,n,f,p,_]),be.jsxs("div",{ref:pt,"data-rime-creep":ra,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${ta}`,style:aa,children:[be.jsx("canvas",{ref:vt,"aria-hidden":"true",className:"absolute inset-0 block"}),mt?be.jsx("div",{className:"relative z-[1] h-full w-full",children:mt}):null]})}ea.displayName="RimeCreep";function Ba(){return be.jsx("div",{className:"ns-stage",children:be.jsx(ea,{children:"示例"})})}export{Ba as default};
