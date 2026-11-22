import{r as q,j as D}from"./client-CsvIHAk3.js";import{c as J}from"./utils-VNNtGTnX.js";import{l as Q}from"./palettes-CipR7Axg.js";import{u as Z}from"./color-CT5GfqS9.js";import"./style-BdtxH3Yj.js";import{A as ee}from"./shader-B_yW4pt8.js";const te={amplitude:[.08,.22],angle:[-.45,.45],count:[3,5],drift:[.05,.12],fold:[.25,.9],frequency:[.7,1.7],glow:[.35,.9],spread:[.35,.7],twist:[.9,2.6],width:[.035,.075]},se={density:[.38,.55],drift:[.025,.06],ridge:[.35,.95],scale:[2,3.4],stars:[.2,.8],swirl:[.1,.8],warp:[.6,1.3]},oe=e=>{let t=2166136261;for(const s of e)t^=s.codePointAt(0)??0,t=Math.imul(t,16777619);return t>>>0},ne=e=>{let t=oe(e);return()=>{t=t+2654435769|0;let s=t;return s=Math.imul(s^s>>>16,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}},l=(e,[t,s])=>t+(s-t)*e(),F=e=>Math.min(1,Math.max(0,e)),N=Math.PI/180,E=(e,t,s)=>{const o=t*Math.cos(s*N),n=t*Math.sin(s*N),c=(e+.3963377774*o+.2158037573*n)**3,i=(e-.1055613458*o-.0638541728*n)**3,r=(e-.0894841775*o-1.291485548*n)**3;return[4.0767416621*c-3.3077115913*i+.2309699292*r,-1.2684380046*c+2.6097574011*i-.3413193965*r,-.0041960863*c-.7034186147*i+1.707614701*r]},O=e=>e.every(t=>t>=-1e-4&&t<=1+1e-4),C=e=>{const t=F(e);return t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055},ce=(e,t,s)=>{let o=0,n=t,c=E(e,t,s);if(!O(c)){for(let i=0;i<14;i+=1){const r=(o+n)/2;O(E(e,r,s))?o=r:n=r}c=E(e,o,s)}return[C(c[0]),C(c[1]),C(c[2])]},I=[68,118],k=e=>(e%360+360)%360,H=e=>{const t=k(e);return t>=I[0]&&t<=I[1]},T=(e,t)=>{const s=Math.max(2,Math.ceil(Math.abs(t)/4));for(let o=0;o<=s;o+=1)if(H(e+t*o/s))return!0;return!1},ie={chroma:[.15,.17,.15,.1],lightness:[.56,.66,.76,.88]},re={chroma:[.13,.16,.17,.15],lightness:[.58,.52,.46,.38]},_=(e,{chroma:t,lightness:s},o)=>{const n=c=>{const i=e[0]+(e[1]-e[0])*c/3;return ce(s[c]??.5,(t[c]??.1)*o,k(i))};return[n(0),n(1),n(2),n(3)]},le=(e,t={})=>{let s=l(e,t.hue??[0,360]);for(let r=0;t.hue===void 0&&H(s);r+=1)s=l(e,[0,360]),r>8&&(s=I[1]+40);const o=l(e,[30,120]);let n=t.turn===void 0?o*(e()<.5?-1:1):l(e,t.turn);T(s,n)&&(n=-n),T(s,n)&&(n=0);const c=[s,s+n],i=Math.min(1.3,Math.max(.4,t.vividness??1));return{dark:_(c,ie,i),hues:[k(c[0]),k(c[1])],light:_(c,re,i)}},M=e=>e-Math.floor(e),S=(e,t)=>{let s=M(e*.1031),o=M(t*.1031),n=M(e*.1031);const c=s*(o+33.33)+o*(n+33.33)+n*(s+33.33);return s+=c,o+=c,n+=c,M((s+o)*n)},ae=(e,t)=>{const s=Math.floor(e),o=Math.floor(t),n=e-s,c=t-o,i=n*n*n*(n*(n*6-15)+10),r=c*c*c*(c*(c*6-15)+10),a=S(s,o),u=S(s+1,o),f=S(s,o+1),d=S(s+1,o+1),p=a+(u-a)*i,b=f+(d-f)*i;return p+(b-p)*r},y=(e,t)=>{let s=0,o=.5,n=e,c=t;for(let i=0;i<4;i+=1){s+=o*ae(n,c);const r=1.6*n-1.2*c+3.1,a=1.2*n+1.6*c+1.7;n=r,c=a,o*=.5}return s/.9375},R=(e,t,s)=>{const o=F((s-e)/(t-e));return o*o*(3-2*o)},L=`
float seedHash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float seedNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = seedHash(i);
  float b = seedHash(i + vec2(1.0, 0.0));
  float c = seedHash(i + vec2(0.0, 1.0));
  float d = seedHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float seedFbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    sum += amp * seedNoise(p);
    p = vec2(1.6 * p.x - 1.2 * p.y + 3.1, 1.2 * p.x + 1.6 * p.y + 1.7);
    amp *= 0.5;
  }
  return sum / 0.9375;
}

// The palette for this paper: dark-paper stops, or light-paper ones.
vec3 seedStop(int index) {
  vec3 dark = index == 0 ? seedDark0 : index == 1 ? seedDark1 : index == 2 ? seedDark2 : seedDark3;
  vec3 light = index == 0 ? seedLight0 : index == 1 ? seedLight1 : index == 2 ? seedLight2 : seedLight3;
  return mix(dark, light, seedOnLight);
}

// Bright glyphs on dark paper catch a little white, like light on glass.
vec3 seedSheen(vec3 color, float tone) {
  return mix(color, vec3(1.0), pow(tone, 6.0) * 0.3 * (1.0 - seedOnLight));
}

vec3 seedColor(float x) {
  float s = clamp(x, 0.0, 1.0) * 3.0;
  if (s < 1.0) return mix(seedStop(0), seedStop(1), s);
  if (s < 2.0) return mix(seedStop(1), seedStop(2), s - 1.0);
  return mix(seedStop(2), seedStop(3), s - 2.0);
}

// Faint light below a glyph's worth drops to paper, so the space between
// shapes stays clean instead of filling with the ramp's first glyph.
float seedFloor(float tone) {
  return clamp((tone - 0.05) / 0.95, 0.0, 1.0);
}

// Centred box coordinates: y from -0.5 to 0.5, x scaled to the true aspect.
vec2 seedCentred(vec2 uv, vec2 res) {
  return vec2((uv.x - 0.5) * res.x / res.y, uv.y - 0.5);
}
`,U=`
vec2 seedRibbons(vec2 uv, vec2 res, float t) {
  vec2 c = seedCentred(uv, res);
  float ca = cos(seedRibbonTilt);
  float sa = sin(seedRibbonTilt);
  vec2 p = vec2(ca * c.x - sa * c.y, sa * c.x + ca * c.y);
  float count = seedRibbonShape.x;
  float drift = seedMotion.x;
  float miss = 1.0;
  float best = 0.0;
  float which = 0.0;
  for (int n = 0; n < 5; n++) {
    float i = float(n);
    if (i < count) {
      float k = i / max(count - 1.0, 1.0);
      float phase = i * 2.399 + seedMotion.y;
      float bend = seedRibbonFold.x * (seedFbm(vec2(p.x * 0.8 + i * 3.1 + seedMotion.y, t * drift * 1.5 + i * 1.7 + seedMotion.z)) - 0.5);
      float centre = (k - 0.5) * seedRibbonShape.y
        + seedRibbonShape.z * sin(p.x * seedRibbonShape.w * 3.0 + phase + t * drift * (1.0 + 0.25 * i))
        + bend;
      float turn = cos(p.x * seedRibbonFold.z * 2.0 + phase * 1.7 - t * drift * 2.2);
      float w = seedRibbonFold.y * (0.2 + 0.8 * abs(turn));
      float d = abs(p.y - centre);
      float face = smoothstep(w, w * 0.35, d) * mix(0.35, 0.8, 0.5 + 0.5 * turn);
      float rimWidth = w * 0.22 + 0.006;
      float rim = exp(-pow((d - w) / rimWidth, 2.0)) * 0.75;
      float halo = seedRibbonFold.w * 0.22 * seedRibbonFold.y / (d + seedRibbonFold.y * 1.5);
      // Back ribbons sit a little dimmer, for depth.
      float depth = mix(1.0, 0.68, fract(i * 0.618 + seedMotion.y));
      float glow = clamp((face + rim + halo) * depth, 0.0, 1.0);
      miss *= 1.0 - glow;
      if (glow > best) {
        best = glow;
        which = k;
      }
    }
  }
  float haze = 0.06 * seedFbm(p * 2.2 + seedMotion.yz + vec2(t * drift * 0.4, 0.0));
  return vec2(seedFloor((1.0 - miss + haze) * seedMotion.w), which);
}
`,de=`${L}${U}
float field(vec2 uv, vec2 res, float t) {
  return seedRibbons(uv, res, t).x;
}
`,fe=`${L}${U}
vec3 colorField(vec2 uv, vec2 res, float t) {
  vec2 r = seedRibbons(uv, res, t);
  // Each ribbon takes its own hue along the palette, so a prism of violet
  // and teal shows both; tone only nudges it.
  return seedSheen(seedColor(r.y * 0.9 + 0.05 + (r.x - 0.5) * 0.15), r.x);
}
`,j=`
vec3 seedNebula(vec2 uv, vec2 res, float t) {
  vec2 c = seedCentred(uv, res);
  float drift = seedMotion.x;
  float r = length(c);
  float spin = seedGasShape.x * (0.6 - r) + t * drift * 0.4 * seedGasShape.x;
  float cs = cos(spin);
  float sn = sin(spin);
  vec2 q = vec2(cs * c.x - sn * c.y, sn * c.x + cs * c.y) * seedGas.x + seedMotion.yz + vec2(t * drift, t * drift * 0.3);
  float a = seedFbm(q);
  float b = seedFbm(q * 1.7 + seedGas.y * 2.0 * vec2(a - 0.5, 0.5 - a) + vec2(1.7, 9.2) + vec2(0.0, t * drift * 0.5));
  float g = seedFbm(q + seedGas.y * 3.0 * vec2(b - 0.5, a - 0.5) + vec2(8.3, 2.8));
  // The cloud: a broad soft edge, squared so the core is dense and the
  // rim runs down through the middle of the glyph ramp.
  float gas = smoothstep(seedGas.w - 0.18, seedGas.w + 0.42, g);
  gas *= gas;
  // Filaments where the middle layer crosses its midpoint, reaching a
  // little past the cloud's edge.
  float ridge = pow(1.0 - abs(2.0 * b - 1.0), 5.0) * seedGas.z;
  float reach = smoothstep(seedGas.w - 0.35, seedGas.w + 0.05, g);
  // Dark dust lanes cutting through the brightest parts.
  float dust = smoothstep(0.55, 0.75, seedFbm(q * 2.3 + vec2(b * 1.5, 4.1)));
  float tone = seedFloor((gas * (1.0 - dust * 0.6) + ridge * reach * 0.7) * seedMotion.w);
  return vec3(tone, g, ridge * reach);
}

float seedStars(vec2 uv, vec2 res, float t) {
  vec2 cell = floor(uv * res);
  float h = seedHash(cell + seedMotion.yz * 13.0);
  float lit = step(1.0 - 0.012 * seedGasShape.y, h);
  float pulse = 0.65 + 0.35 * sin(t * (0.6 + 2.0 * fract(h * 37.0)) + h * 50.0);
  return lit * pulse * mix(0.55, 1.0, fract(h * 91.0));
}
`,he=`${L}${j}
float field(vec2 uv, vec2 res, float t) {
  vec3 n = seedNebula(uv, res, t);
  // Stars only show where the gas is thin.
  return max(n.x, seedStars(uv, res, t) * (1.0 - smoothstep(0.15, 0.45, n.x)));
}
`,ue=`${L}${j}
vec3 colorField(vec2 uv, vec2 res, float t) {
  vec3 n = seedNebula(uv, res, t);
  float star = seedStars(uv, res, t) * (1.0 - smoothstep(0.15, 0.45, n.x));
  // Hue follows the gas layers, so clouds of different depth differ in
  // colour; filaments climb to the far end of the palette.
  vec3 gas = seedSheen(seedColor(clamp((n.y - 0.3) * 1.6 + n.z * 0.6, 0.0, 1.0)), n.x);
  return mix(gas, seedSheen(seedStop(3), 1.0), clamp(star * 1.4, 0.0, 1.0));
}
`,$={nebula:{colorField:ue,field:he},ribbons:{colorField:fe,field:de}},be=(e,t,s,o)=>{const n=Math.cos(e.angle),c=Math.sin(e.angle),i=n*t-c*s,r=c*t+n*s,[a,u]=e.offset;let f=1;for(let d=0;d<e.count;d+=1){const p=d/Math.max(e.count-1,1),b=d*2.399+a,g=e.fold*(y(i*.8+d*3.1+a,o*e.drift*1.5+d*1.7+u)-.5),v=(p-.5)*e.spread+e.amplitude*Math.sin(i*e.frequency*3+b+o*e.drift*(1+.25*d))+g,w=Math.cos(i*e.twist*2+b*1.7-o*e.drift*2.2),h=e.width*(.2+.8*Math.abs(w)),x=Math.abs(r-v),W=R(h,h*.35,x)*(.35+.45*(.5+.5*w)),Y=h*.22+.006,K=Math.exp(-(((x-h)/Y)**2))*.75,V=e.glow*.22*e.width/(x+e.width*1.5),X=1-.32*M(d*.618+a);f*=1-F((W+K+V)*X)}return 1-f},pe=(e,t,s,o)=>{const[n,c]=e.offset,i=Math.hypot(t,s),r=e.swirl*(.6-i)+o*e.drift*.4*e.swirl,a=Math.cos(r),u=Math.sin(r),f=(a*t-u*s)*e.scale+n+o*e.drift,d=(u*t+a*s)*e.scale+c+o*e.drift*.3,p=y(f,d),b=y(f*1.7+e.warp*2*(p-.5)+1.7,d*1.7+e.warp*2*(.5-p)+9.2+o*e.drift*.5),g=y(f+e.warp*3*(b-.5)+8.3,d+e.warp*3*(p-.5)+2.8),v=R(e.density-.18,e.density+.42,g)**2,w=(1-Math.abs(2*b-1))**5*e.ridge,h=R(e.density-.35,e.density+.05,g),x=R(.55,.75,y(f*2.3+b*1.5,d*2.3+4.1));return v*(1-x*.6)+w*h*.7},ge=(e,t,s,o)=>e.kind==="ribbons"?be(e,t,s,o):pe(e,t,s,o),A=40,B=22,ve=[0,9,23],xe=16/9,z=e=>{const t=[];for(const n of ve)for(let c=0;c<B;c+=1){const i=(c+.5)/B-.5;for(let r=0;r<A;r+=1){const a=((r+.5)/A-.5)*xe;t.push(F(ge(e,a,i,n)))}}t.sort((n,c)=>n-c);const s=t.reduce((n,c)=>n+c,0);return{coverage:t.filter(n=>n>.18).length/t.length,mean:s/t.length,peak:t[Math.floor(t.length*.96)]??0}},P=[.26,.62],G=({coverage:e,peak:t})=>Math.max(0,P[0]-e)+Math.max(0,e-P[1])+Math.max(0,.35-t),we=({peak:e})=>Math.min(2.2,Math.max(.75,.96/Math.max(e,.05))),Me=8,ye=(e,t,s={})=>{const o=n=>s[n]??te[n];return{...t,amplitude:l(e,o("amplitude")),angle:l(e,o("angle")),count:Math.round(l(e,o("count"))),drift:l(e,o("drift")),fold:l(e,o("fold")),frequency:l(e,o("frequency")),gain:1,glow:l(e,o("glow")),kind:"ribbons",spread:l(e,o("spread")),twist:l(e,o("twist")),width:l(e,o("width"))}},me=(e,t,s={})=>{const o=n=>s[n]??se[n];return{...t,density:l(e,o("density")),drift:l(e,o("drift")),gain:1,kind:"nebula",ridge:l(e,o("ridge")),scale:l(e,o("scale")),stars:l(e,o("stars")),swirl:l(e,o("swirl")),warp:l(e,o("warp"))}},Se=(e,t,s={})=>{const o=ne(`${t}:${e}`),n=le(o,s),c=()=>{const a={drift:0,offset:[l(o,[0,97]),l(o,[0,97])],palette:n,seed:e};return t==="ribbons"?ye(o,a,s.ribbons):me(o,a,s.nebula)};let i=c(),r=z(i);for(let a=1;a<Me&&G(r)>0;a+=1){const u=c(),f=z(u);G(f)<G(r)&&(i=u,r=f)}return{...i,gain:we(r)}},Re=({dark:e,light:t},s)=>({seedDark0:e[0],seedDark1:e[1],seedDark2:e[2],seedDark3:e[3],seedLight0:t[0],seedLight1:t[1],seedLight2:t[2],seedLight3:t[3],seedOnLight:s?1:0}),ke=e=>e.kind==="ribbons"?{seedRibbonFold:[e.fold,e.width,e.twist,e.glow],seedRibbonShape:[e.count,e.spread,e.amplitude,e.frequency],seedRibbonTilt:e.angle}:{seedGas:[e.scale,e.warp,e.ridge,e.density],seedGasShape:[e.swirl,e.stars,0,0]},Fe=(e,{onLight:t=!1,intensity:s=1}={})=>({...Re(e.palette,t),...ke(e),seedMotion:[e.drift,e.offset[0],e.offset[1],e.gain*Math.min(1.5,Math.max(0,s))]}),m=([e,t,s])=>`rgb(${Math.round(e*255)} ${Math.round(t*255)} ${Math.round(s*255)})`,Le=(e,t,s)=>e===void 0?{ink:t,paper:s}:{},Ee=e=>{const t=q.useMemo(()=>[e],[e]),o=Z(void 0,t)?.[0];return o===void 0?!1:Q(o[0]*255,o[1]*255,o[2]*255)>.5},Ce=({stops:e,paper:t})=>{const[s,o,n,c]=e.map(m);return D.jsx("div",{className:"absolute inset-0",style:{backgroundColor:J(t),backgroundImage:`radial-gradient(60% 45% at 30% 40%, color-mix(in oklab, ${n} 30%, transparent), transparent), radial-gradient(50% 40% at 72% 62%, color-mix(in oklab, ${o} 35%, transparent), transparent), radial-gradient(30% 20% at 55% 48%, color-mix(in oklab, ${c} 18%, transparent), transparent), linear-gradient(160deg, color-mix(in oklab, ${s} 18%, transparent), transparent 70%)`}})},Te=({seed:e="asciicn",kind:t="ribbons",options:s,intensity:o=1,palette:n,ink:c="--ascii-ink",paper:i="--ascii-paper",charset:r="standard",colorMode:a="truecolor",cell:u=12,interaction:f="none",interactive:d=!0,stillTime:p=8,...b})=>{const g=q.useMemo(()=>Se(e,t,s),[e,t,s]),v=Ee(i),w=q.useMemo(()=>Fe(g,{intensity:o,onLight:v}),[g,o,v]),h=v?g.palette.light:g.palette.dark,x=n??[i,m(h[0]),m(h[1]),m(h[2]),m(h[3])];return D.jsx(ee,{...b,cell:u,charset:r,colorMode:a,...Le(b.phosphor,c,i),interaction:d?f:"none",field:$[t].field,colorField:$[t].colorField,palette:x,stillTime:p,uniforms:w,fallback:D.jsx(Ce,{stops:h,paper:i})})};export{Te as S};
