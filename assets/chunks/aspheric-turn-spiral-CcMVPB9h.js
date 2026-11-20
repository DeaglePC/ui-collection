import{r as V,j as C}from"./client-CsvIHAk3.js";const ke=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,Oe=`
precision highp float;

uniform vec2 u_size;   // css px
uniform float u_dpr;
uniform float u_time;
uniform float u_scale;
uniform float u_relief;
uniform vec2 u_ptr;    // -1..1 eased pointer offset
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform float u_bias;
uniform float u_contrast;

const float TWO_PI = 6.28318530718;
const float FEED_PERIOD = 90.0;
const float SPINDLE_RATE = 0.08; // rev/s, decoupled from a real ~600-3000rpm SPDT spindle
const float N_BASE = 14.0;
const float N_ASPH = 26.0;
const float BOWL_AMP = 0.55;
const float GROOVE_AMP = 0.11;

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

// pitch tightens toward the rim: the r^2 term is the aspheric read
float turns(float r) {
  return N_BASE * r + N_ASPH * r * r;
}

// the tool's radial position: a triangle wave, never a reset. Direction
// reversal at each end is a real process event, not fabricated motion.
float cutRadius(float t) {
  float ph = fract(t / FEED_PERIOD);
  float tri = ph < 0.5 ? ph * 2.0 : 2.0 - ph * 2.0;
  return mix(0.05, 1.04, tri);
}

float height(vec2 p, out float cutMask, out float edgeGlow, out float r) {
  vec2 c = u_size * 0.5;
  float ref = min(u_size.x, u_size.y);
  float discR = ref * 0.46 * u_scale;
  vec2 d = (p - c) / discR;
  r = length(d);
  float theta = atan(d.y, d.x);

  float rc = cutRadius(u_time);
  cutMask = smoothstep(rc + 0.018, rc - 0.018, r);
  edgeGlow = exp(-pow((r - rc) / 0.022, 2.0));

  float idx = theta / TWO_PI + turns(r);
  float groove = cos(idx * TWO_PI);

  float bowl = -BOWL_AMP * r * r;
  // pre-cut blank texture, only where the tool has not yet passed
  float blank = (vnoise(d * 9.0 + 4.1) - 0.5) * 0.05 * (1.0 - cutMask);

  return bowl + GROOVE_AMP * groove * cutMask + blank;
}

float heightOnly(vec2 p) {
  float m; float e; float rr;
  return height(p, m, e, rr);
}

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.27, x));
  c = mix(c, u_c2, smoothstep(0.25, 0.55, x));
  c = mix(c, u_c3, smoothstep(0.52, 0.83, x));
  c = mix(c, u_c4, smoothstep(0.81, 1.0, x));
  return c;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, u_size.y * u_dpr - gl_FragCoord.y) / u_dpr;

  float cutMask; float edgeGlow; float r;
  float h0 = height(p, cutMask, edgeGlow, r);
  float eps = 1.2;
  float hx = heightOnly(p + vec2(eps, 0.0));
  float hy = heightOnly(p + vec2(0.0, eps));

  float k = u_relief / eps;
  vec3 n = normalize(vec3(-(hx - h0) * k, (hy - h0) * k, 1.0));

  vec2 c = u_size * 0.5;
  float ref = min(u_size.x, u_size.y);
  vec2 vp = (p - c) / ref;
  vec3 v = normalize(vec3(vp.x * 0.5 + u_ptr.x * 0.18, -vp.y * 0.5 - u_ptr.y * 0.18, 1.0));
  vec3 rf = reflect(-v, n);

  float el = rf.y;
  float az = atan(rf.x, rf.z) + u_time * SPINDLE_RATE * TWO_PI;

  // an analytic achromatic studio: several narrow sources at different
  // elevations plus two azimuthal panels, one at the spindle rate and one 4x
  // faster, so a nearly-flat patch of the bowl still crosses several
  // reflection bands and the frame does not read as pure horizon banding
  float L = 0.40;
  L += 0.22 * smoothstep(0.05, 0.62, el);
  L -= 0.20 * smoothstep(0.0, -0.55, el);
  L += 0.26 * exp(-pow((el - 0.16) / 0.075, 2.0));
  L += 0.16 * exp(-pow((el + 0.28) / 0.10, 2.0));
  L += 0.15 * exp(-pow(sin(az * 1.0) / 0.42, 2.0));
  L += 0.09 * exp(-pow(sin(az * 4.0 + 1.3) / 0.24, 2.0));

  float fres = pow(1.0 - max(dot(n, v), 0.0), 5.0);
  L += fres * 0.10;

  // freshly-turned surface catches light hardest right at the tool's edge
  L += edgeGlow * 0.35;

  vec3 l1 = normalize(vec3(-0.3, 0.65, 0.6));
  float s1 = pow(max(dot(rf, l1), 0.0), 70.0);
  L += s1 * 0.5;

  // flat backdrop beyond the disc rim
  float discEdge = smoothstep(1.0, 1.06, r);
  L = mix(L, 0.30, discEdge);

  float Lc = clamp((L - 0.5) * u_contrast + 0.5 + u_bias, 0.0, 1.0);
  vec3 col = ramp(Lc);

  float vig = smoothstep(0.9, 1.9, length(vp * vec2(1.0, 1.3)));
  col = mix(col, u_c0, vig * 0.28);

  gl_FragColor = vec4(col, 1.0);
}
`;function W(r){const i=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(r.trim());if(!i)return null;let n=i[1];n.length===3&&(n=n.split("").map(p=>p+p).join(""));const c=parseInt(n,16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]}function m(r,i,n){return[r[0]+(i[0]-r[0])*n,r[1]+(i[1]-r[1])*n,r[2]+(i[2]-r[2])*n]}function ze([r,i,n]){return .2126*r+.7152*i+.0722*n}function Re(r,i,n){const c=r.createShader(i);if(r.shaderSource(c,n),r.compileShader(c),!r.getShaderParameter(c,r.COMPILE_STATUS)){const p=r.getShaderInfoLog(c);throw r.deleteShader(c),new Error(`aspheric-turn-spiral: shader compile failed: ${p??""}`)}return c}const Ie=27,Ce="spiral-60pct";function ye({speed:r=1,scale:i=1,relief:n=1,paused:c=!1,children:p,className:Me="",style:Pe}){const re=V.useRef(null),ne=V.useRef(null),E=V.useRef(c);return E.current=c,V.useEffect(()=>{const f=re.current,a=ne.current;if(!f||!a)return;let e=null,u=null,b=null,L=null,A=null;const B=new Map;let j=0,H=!1,d=!1,ae=!1,v=0,_=0,F=1,U=performance.now(),se=0;const ie=[1,.75,.55],Se=24;let R=0,y=16.7,M=0,P=0,D=8e3,Y=0,$=0,q=0,X=0,S=[.03,.03,.03],T=[.18,.18,.18],k=[.56,.56,.56],O=[.93,.93,.93],z=[1,1,1],K=0,J=1.15;const ce=()=>{const t=getComputedStyle(document.documentElement),o=W(t.getPropertyValue("--background"))??[1,1,1],s=W(t.getPropertyValue("--foreground"))??[.09,.09,.09],h=W(t.getPropertyValue("--ns-muted"))??[.55,.55,.55],x=W(t.getPropertyValue("--border"))??[.18,.18,.18],w=[0,0,0],oe=[1,1,1];ze(o)<.5?(S=m(o,w,.55),T=m(x,o,.15),k=h,O=s,z=m(s,oe,.85),K=-.08,J=1.15):(S=m(s,w,.35),T=m(s,h,.55),k=m(h,o,.6),O=m(o,h,.16),z=o,K=.02,J=1.2)};ce();const l=t=>(B.has(t)||B.set(t,e.getUniformLocation(u,t)),B.get(t)??null),Q=t=>(t||e?.getExtension("WEBGL_lose_context")?.loseContext(),!1),le=(t=!1)=>{if(e=a.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,powerPreference:"high-performance"}),!e)return!1;try{b=Re(e,e.VERTEX_SHADER,ke),L=Re(e,e.FRAGMENT_SHADER,Oe);const s=e.createProgram();if(!s||(u=s,e.attachShader(s,b),e.attachShader(s,L),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS)))return Q(t)}catch{return Q(t)}e.useProgram(u),A=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,A),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const o=e.getAttribLocation(u,"a_pos");return e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0),B.clear(),!0},Te=()=>{e&&(A&&e.deleteBuffer(A),u&&e.deleteProgram(u),b&&e.deleteShader(b),L&&e.deleteShader(L),A=u=b=L=null,e=null)},g=()=>{if(!e||!u||v<=0||_<=0)return;const t=d?Ie:se;e.uniform2f(l("u_size"),v,_),e.uniform1f(l("u_dpr"),F),e.uniform1f(l("u_time"),t),e.uniform1f(l("u_scale"),Math.max(.2,i)),e.uniform1f(l("u_relief"),10*Math.max(0,n)),e.uniform2f(l("u_ptr"),q,X),e.uniform3f(l("u_c0"),S[0],S[1],S[2]),e.uniform3f(l("u_c1"),T[0],T[1],T[2]),e.uniform3f(l("u_c2"),k[0],k[1],k[2]),e.uniform3f(l("u_c3"),O[0],O[1],O[2]),e.uniform3f(l("u_c4"),z[0],z[1],z[2]),e.uniform1f(l("u_bias"),K),e.uniform1f(l("u_contrast"),J),e.viewport(0,0,a.width,a.height),e.drawArrays(e.TRIANGLES,0,6)},fe=t=>{const o=t-U,s=Math.min(.05,Math.max(0,o/1e3));U=t,se+=s*r;const h=1-Math.exp(-s/.15);q+=(Y-q)*h,X+=($-X)*h,g();const x=Math.min(50,o);y+=(x-y)*(1-Math.exp(-x/120)),y>Se?(M+=x,P=0):(P+=x,M=0);const w=M>900&&R<ie.length-1,oe=P>D&&R>0;(w||oe)&&(R+=w?1:-1,w&&(D=Math.min(64e3,D*2)),M=0,P=0,y=16.7,ue()),j=requestAnimationFrame(fe)},Z=()=>{H||ae||(H=!0,U=performance.now(),j=requestAnimationFrame(fe))},I=()=>{cancelAnimationFrame(j),H=!1},ue=()=>{if(v<2||_<2)return;F=Math.min(window.devicePixelRatio||1,1.5)*ie[R];const t=Math.round(v*F),o=Math.round(_*F);(a.width!==t||a.height!==o)&&(a.width=t,a.height=o),a.style.width=`${v}px`,a.style.height=`${_}px`,g()},ee=()=>{const t=f.getBoundingClientRect();t.width<2||t.height<2||(v=t.width,_=t.height,R=0,M=0,P=0,D=8e3,y=16.7,ue())},de=t=>{const o=f.getBoundingClientRect();Y=((t.clientX-o.left)/Math.max(1,o.width)-.5)*2,$=((t.clientY-o.top)/Math.max(1,o.height)-.5)*2,d&&g()},pe=()=>{Y=0,$=0,d&&g()};if(!le())return;const he=new ResizeObserver(ee);he.observe(f),ee(),f.addEventListener("pointermove",de),f.addEventListener("pointerleave",pe);const G=window.matchMedia("(prefers-reduced-motion: reduce)");let me=G.matches;const N=()=>{me||E.current?(d=!0,I(),g()):(d=!1,Z())},ve=()=>{me=G.matches,N()};G.addEventListener("change",ve);let te=!0;const _e=new IntersectionObserver(t=>{te=t.some(o=>o.isIntersecting),te?!d&&!document.hidden&&Z():I()},{threshold:0});_e.observe(f);const ge=()=>{document.hidden?I():!d&&te&&Z()};document.addEventListener("visibilitychange",ge),N();let xe=E.current,we=0;const Ee=()=>{E.current!==xe&&(xe=E.current,N()),we=window.setTimeout(Ee,140)};Ee();const be=new MutationObserver(()=>{ce(),d&&g()});be.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const Le=t=>{t.preventDefault(),I()},Ae=()=>{le(!0)&&(ee(),N())};return a.addEventListener("webglcontextlost",Le),a.addEventListener("webglcontextrestored",Ae),()=>{ae=!0,he.disconnect(),_e.disconnect(),G.removeEventListener("change",ve),document.removeEventListener("visibilitychange",ge),be.disconnect(),a.removeEventListener("webglcontextlost",Le),a.removeEventListener("webglcontextrestored",Ae),f.removeEventListener("pointermove",de),f.removeEventListener("pointerleave",pe),window.clearTimeout(we),I();const t=e?.getExtension("WEBGL_lose_context");Te(),a.isConnected||t?.loseContext()}},[i,n]),C.jsxs("div",{ref:re,className:`relative isolate h-full w-full overflow-hidden bg-background ${Me}`,style:Pe,"data-static-frame":Ce,children:[C.jsx("canvas",{ref:ne,"aria-hidden":"true",className:"absolute inset-0 block h-full w-full"}),p?C.jsx("div",{className:"relative z-[1] h-full w-full",children:p}):null]})}ye.displayName="AsphericTurnSpiral";function Fe(){return C.jsx("div",{className:"ns-stage",children:C.jsx(ye,{children:"示例"})})}export{Fe as default};
