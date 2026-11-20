import{r as S,j as P}from"./client-CsvIHAk3.js";const We=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,ze=`
precision highp float;

uniform vec2 u_size;       // css px
uniform float u_dpr;
uniform vec2 u_center;     // css px, target centre
uniform float u_targetR;   // css px, target radius
uniform sampler2D u_erosion; // 1D depth field, N x 1
uniform float u_erosionN;
uniform float u_ringR;         // current live sweep radius, normalized 0..1
uniform float u_ringHalfWidth; // normalized
uniform float u_pointerAngle;
uniform float u_pointerActive;
uniform float u_time;
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec3 u_c4;
uniform vec3 u_bg;
uniform float u_bias;
uniform float u_contrast;

float sampleDepth(float r) {
  return texture2D(u_erosion, vec2(clamp(r, 0.0, 1.0), 0.5)).r;
}

float strip(float el, float at, float width) {
  float d = (el - at) / width;
  return exp(-d * d);
}

// simplified achromatic studio — a machined-metal read needs fewer bands
// than a mirror pool, same family as edm-crater-field's env().
float env(vec3 r) {
  float el = r.y;
  float az = atan(r.x, r.z);
  float L = 0.42;
  L += 0.20 * smoothstep(0.05, 0.62, el);
  L -= 0.18 * smoothstep(0.0, -0.55, el);
  L += 0.28 * strip(el, 0.14, 0.06);
  L += 0.14 * strip(el, 0.46, 0.09);
  L += 0.08 * exp(-pow(sin(az * 1.0 + u_time * 0.03) / 0.42, 2.0));
  return L;
}

vec3 ramp(float x) {
  vec3 c = mix(u_c0, u_c1, smoothstep(0.0, 0.30, x));
  c = mix(c, u_c2, smoothstep(0.28, 0.58, x));
  c = mix(c, u_c3, smoothstep(0.55, 0.85, x));
  c = mix(c, u_c4, smoothstep(0.82, 1.0, x));
  return c;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, u_size.y * u_dpr - gl_FragCoord.y) / u_dpr - u_center;
  float dist = length(p);
  float r = dist / u_targetR;

  float edge = smoothstep(1.02, 0.985, r);
  if (edge <= 0.0) {
    gl_FragColor = vec4(u_bg, 1.0);
    return;
  }

  vec2 rDir = dist > 0.0005 ? p / dist : vec2(0.0, 1.0);
  float texel = 1.0 / u_erosionN;
  float d0 = sampleDepth(r);
  float dPlus = sampleDepth(r + texel);
  float dMinus = sampleDepth(r - texel);
  float slope = (dPlus - dMinus) / (2.0 * texel);
  float relief = 2.2;
  vec3 n = normalize(vec3(-slope * relief * rDir, 1.0));
  vec2 vp = p / u_targetR;
  vec3 v = normalize(vec3(vp.x * 0.5, -vp.y * 0.5, 1.0));
  vec3 refl = reflect(-v, n);

  float L = env(refl);
  vec3 l1 = normalize(vec3(-0.28, 0.7, 0.6));
  float s1 = pow(max(dot(refl, l1), 0.0), 90.0);
  L += s1 * 0.6;

  // material removed reads as LOWER relative luminance than the fresh face,
  // in both themes — direction never flips, only bias/contrast do.
  float depthVis = clamp(d0 / 1.4, 0.0, 1.0);
  L -= depthVis * 0.34;

  // live glow ring — additive luminance only, never accumulated, never hue.
  float ringMask = 1.0 - smoothstep(u_ringHalfWidth * 0.7, u_ringHalfWidth * 1.15, abs(r - u_ringR));
  L += ringMask * 0.5;

  if (u_pointerActive > 0.5) {
    float ang = atan(p.x, -p.y);
    float diff = ang - u_pointerAngle;
    diff = mod(diff + 3.14159265, 6.2831853) - 3.14159265;
    float angularBoost = exp(-pow(diff / 0.35, 2.0));
    L += ringMask * angularBoost * 0.35;
  }

  float fres = pow(1.0 - max(dot(n, v), 0.0), 5.0);
  L += fres * 0.08;

  float Lc = clamp((L - 0.5) * u_contrast + 0.5 + u_bias, 0.0, 1.0);
  vec3 col = mix(u_bg, ramp(Lc), edge);
  gl_FragColor = vec4(col, 1.0);
}
`;function C(s){const r=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(s.trim());if(!r)return null;let t=r[1];t.length===3&&(t=t.split("").map(c=>c+c).join(""));const i=parseInt(t,16);return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function _(s,r,t){return[s[0]+(r[0]-s[0])*t,s[1]+(r[1]-s[1])*t,s[2]+(r[2]-s[2])*t]}function Ge([s,r,t]){return .2126*s+.7152*r+.0722*t}function Se(s,r,t){const i=s.createShader(r);if(s.shaderSource(i,t),s.compileShader(i),!s.getShaderParameter(i,s.COMPILE_STATUS)){const c=s.getShaderInfoLog(i);throw s.deleteShader(i),new Error(`magnetron-racetrack-sweep: shader compile failed: ${c??""}`)}return i}class Oe{constructor(r,t){this.canvas=r,this.frag=t,this.gl=null,this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.locs=new Map}init(r=!1){const t=this.canvas.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return!1;this.gl=t;try{this.vs=Se(t,t.VERTEX_SHADER,We),this.fs=Se(t,t.FRAGMENT_SHADER,this.frag);const c=t.createProgram();if(!c)return this.abandon(r),!1;if(this.program=c,t.attachShader(c,this.vs),t.attachShader(c,this.fs),t.linkProgram(c),!t.getProgramParameter(c,t.LINK_STATUS))return this.abandon(r),!1}catch{return this.abandon(r),!1}t.useProgram(this.program),this.buffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const i=t.getAttribLocation(this.program,"a_pos");return t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0),this.locs.clear(),!0}abandon(r){const t=r?null:this.gl?.getExtension("WEBGL_lose_context");this.destroy(),t?.loseContext()}loc(r){return this.locs.has(r)||this.locs.set(r,this.gl.getUniformLocation(this.program,r)),this.locs.get(r)??null}f(r,t){this.gl?.uniform1f(this.loc(r),t)}i(r,t){this.gl?.uniform1i(this.loc(r),t)}v2(r,t,i){this.gl?.uniform2f(this.loc(r),t,i)}v3(r,t){this.gl?.uniform3f(this.loc(r),t[0],t[1],t[2])}draw(r,t){const i=this.gl;!i||!this.program||(i.viewport(0,0,r,t),i.drawArrays(i.TRIANGLES,0,6))}destroy(){const r=this.gl;r&&(this.buffer&&r.deleteBuffer(this.buffer),this.program&&r.deleteProgram(this.program),this.vs&&r.deleteShader(this.vs),this.fs&&r.deleteShader(this.fs),this.buffer=null,this.program=null,this.vs=null,this.fs=null,this.locs.clear(),this.gl=null)}}const Xe=.5,Ve=.2,De=22,Pe=.08,He=.002,g=256,je=.25,ye=40,$e=480,F=De*.5;function Ie(s){return Xe+Ve*Math.sin(2*Math.PI*s/De)}function Ue({paused:s=!1,children:r,className:t="",style:i}){const c=S.useRef(null),re=S.useRef(null),Ne=S.useId(),x=S.useRef(s);return x.current=s,S.useEffect(()=>{const f=c.current,l=re.current;if(!f||!l)return;const o=new Oe(l,ze);let B=0,k=!1,v=!1,d=0,h=0,y=1,ne=!1,W=performance.now();const z=new Float32Array(g),oe=new Uint8Array(g);let m=null,R=0,se=0,G=0,O=0;const ie=[1,.7],Ce=24;let w=0,T=16.7,L=0,b=0,I=8e3,X=[.03,.03,.03],V=[.18,.18,.18],H=[.56,.56,.56],j=[.93,.93,.93],$=[1,1,1],ae=[0,0,0],q=0,Y=1.15;const le=()=>{const e=getComputedStyle(document.documentElement),n=C(e.getPropertyValue("--background"))??[1,1,1],a=C(e.getPropertyValue("--foreground"))??[.09,.09,.09],u=C(e.getPropertyValue("--ns-muted"))??[.55,.55,.55],p=C(e.getPropertyValue("--border"))??[.18,.18,.18],E=[0,0,0],ee=[1,1,1];ae=n,Ge(n)<.5?(X=_(n,E,.5),V=_(p,n,.15),H=u,j=a,$=_(a,ee,.82),q=-.06,Y=1.18):(X=_(a,E,.32),V=_(a,u,.55),H=_(u,n,.6),j=_(n,u,.16),$=n,q=.03,Y=1.2)};le();const ce=(e,n)=>{const a=Ie(n),u=Pe/2,p=a-u,E=a+u,ee=Math.max(0,Math.floor(p*g)),ke=Math.min(g-1,Math.ceil(E*g));for(let te=ee;te<=ke;te++)z[te]+=He*e},ue=e=>{z.fill(0);let n=0;for(;n<e;){const a=Math.min(je,e-n);ce(a,n),n+=a}},Fe=()=>{const e=o.gl;if(e){for(let n=0;n<g;n++){const a=Math.max(0,Math.min(1.4,z[n]))/1.4;oe[n]=Math.round(a*255)}m?e.bindTexture(e.TEXTURE_2D,m):(m=e.createTexture(),e.bindTexture(e.TEXTURE_2D,m),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR)),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,g,1,0,e.LUMINANCE,e.UNSIGNED_BYTE,oe),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,m)}},A=e=>{if(!o.gl||d<=0||h<=0)return;Fe();const n=Math.min(d,h)*.42;o.v2("u_size",d,h),o.f("u_dpr",y),o.v2("u_center",d/2,h/2),o.f("u_targetR",n),o.f("u_erosionN",g),o.f("u_ringR",Ie(e)),o.f("u_ringHalfWidth",Pe/2),o.f("u_pointerAngle",se),o.f("u_pointerActive",G),o.f("u_time",e),o.v3("u_c0",X),o.v3("u_c1",V),o.v3("u_c2",H),o.v3("u_c3",j),o.v3("u_c4",$),o.v3("u_bg",ae),o.f("u_bias",q),o.f("u_contrast",Y),o.i("u_erosion",0),o.draw(l.width,l.height)},fe=e=>{const n=e-W,a=Math.min(.05,Math.max(0,n/1e3));W=e,R+=a,G+=(O-G)*(1-Math.exp(-a/.25)),ce(a,R),A(R);const u=Math.min(50,n);T+=(u-T)*(1-Math.exp(-u/120)),T>Ce?(L+=u,b=0):(b+=u,L=0);const p=L>900&&w<ie.length-1,E=b>I&&w>0;(p||E)&&(w+=p?1:-1,p&&(I=Math.min(64e3,I*2)),L=0,b=0,T=16.7,de()),B=requestAnimationFrame(fe)},K=()=>{k||ne||(k=!0,W=performance.now(),B=requestAnimationFrame(fe))},M=()=>{cancelAnimationFrame(B),k=!1},de=()=>{if(d<2||h<2)return;y=Math.min(window.devicePixelRatio||1,1.5)*ie[w];const e=Math.round(d*y),n=Math.round(h*y);(l.width!==e||l.height!==n)&&(l.width=e,l.height=n),l.style.width=`${d}px`,l.style.height=`${h}px`,A(v?F:R)},J=()=>{const e=f.getBoundingClientRect();e.width<2||e.height<2||(d=e.width,h=e.height,w=0,L=0,b=0,I=8e3,T=16.7,de())};let he=0,me=0,Q=!0;const Be=()=>{if(!Q)return;const e=f.getBoundingClientRect();he=e.left,me=e.top,Q=!1},D=()=>{Q=!0},pe=e=>{Be();const n=he+d/2,a=me+h/2,u=e.clientX-n,p=e.clientY-a;se=Math.atan2(u,-p),O=1,v&&A(F)},ge=()=>{O=0};if(!o.init())return;const ve=new ResizeObserver(J);ve.observe(f),J(),f.addEventListener("pointermove",pe),f.addEventListener("pointerleave",ge),window.addEventListener("scroll",D,{passive:!0,capture:!0}),window.addEventListener("resize",D,{passive:!0});const U=window.matchMedia("(prefers-reduced-motion: reduce)");let _e=U.matches;const N=()=>{_e||x.current?(v=!0,M(),ue($e),A(F)):(v=!1,R=ye,ue(ye),K())},Ee=()=>{_e=U.matches,N()};U.addEventListener("change",Ee);let Z=!0;const xe=new IntersectionObserver(e=>{Z=e.some(n=>n.isIntersecting),Z?!v&&!document.hidden&&K():M()},{threshold:0});xe.observe(f);const Re=()=>{document.hidden?M():!v&&Z&&K()};document.addEventListener("visibilitychange",Re),N();let we=x.current,Te=0;const Le=()=>{x.current!==we&&(we=x.current,N()),Te=window.setTimeout(Le,140)};Le();const be=new MutationObserver(()=>{le(),v&&A(F)});be.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const Ae=e=>{e.preventDefault(),M()},Me=()=>{m=null,o.init(!0)&&(J(),N())};return l.addEventListener("webglcontextlost",Ae),l.addEventListener("webglcontextrestored",Me),()=>{ne=!0,ve.disconnect(),xe.disconnect(),U.removeEventListener("change",Ee),document.removeEventListener("visibilitychange",Re),be.disconnect(),l.removeEventListener("webglcontextlost",Ae),l.removeEventListener("webglcontextrestored",Me),f.removeEventListener("pointermove",pe),f.removeEventListener("pointerleave",ge),window.removeEventListener("scroll",D,{capture:!0}),window.removeEventListener("resize",D),window.clearTimeout(Te),M(),m&&o.gl&&o.gl.deleteTexture(m),m=null;const e=o.gl?.getExtension("WEBGL_lose_context");o.destroy(),l.isConnected||e?.loseContext()}},[]),P.jsxs("div",{ref:c,"data-magnetron-racetrack-sweep":Ne,className:`relative isolate h-full w-full touch-none overflow-hidden bg-background ${t}`,style:i,children:[P.jsx("canvas",{ref:re,"aria-hidden":"true",className:"absolute inset-0 block h-full w-full"}),r?P.jsx("div",{className:"relative z-[1] h-full w-full",children:r}):null]})}Ue.displayName="MagnetronRacetrackSweep";function Ye(){return P.jsx("div",{className:"ns-stage",children:P.jsx(Ue,{children:"示例"})})}export{Ye as default};
