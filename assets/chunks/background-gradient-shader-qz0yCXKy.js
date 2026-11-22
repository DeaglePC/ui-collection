import{r as A,j as L}from"./client-CsvIHAk3.js";const le=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,fe=`
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_scale;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;

float hash21(vec2 p) {
  p = fract(p * vec2(419.2, 371.9));
  p += dot(p, p + 19.19);
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
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    sum += amp * vnoise(p);
    p = p * 2.15 + 5.7;
    amp *= 0.52;
  }
  return sum;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / u_res.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * (2.4 * u_scale);
  p += vec2(u_time * 0.045, u_time * -0.028);

  vec2 warp = vec2(fbm(p + u_time * 0.06), fbm(p - u_time * 0.05 + 8.3));
  float t = fbm(p * 1.3 + warp * 1.5);
  // fbm output clusters near its mean — stretch contrast around 0.5 so the
  // ramp's outer stops actually get reached instead of the field reading as
  // one dominant midtone with faint smudges.
  t = clamp(0.5 + (t - 0.5) * 2.1, 0.0, 1.0);

  vec3 col = t < 0.5
    ? mix(u_c1, u_c2, smoothstep(0.0, 0.5, t))
    : mix(u_c2, u_c3, smoothstep(0.5, 1.0, t));

  gl_FragColor = vec4(col, 1.0);
}
`;function S(r){const s=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(r.trim());if(!s)return null;let a=s[1];a.length===3&&(a=a.split("").map(l=>l+l).join(""));const i=parseInt(a,16);return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function re(r,s,a){return[r[0]+(s[0]-r[0])*a,r[1]+(s[1]-r[1])*a,r[2]+(s[2]-r[2])*a]}function ne(r,s,a){const i=r.createShader(s);if(r.shaderSource(i,a),r.compileShader(i),!r.getShaderParameter(i,r.COMPILE_STATUS)){const l=r.getShaderInfoLog(i);throw r.deleteShader(i),new Error(`background-gradient-shader: shader compile failed: ${l??""}`)}return i}function oe({colors:r,speed:s=1,scale:a=1,className:i="",style:l}){const V=A.useRef(null),B=A.useRef(null),N=A.useRef(s);return N.current=s,A.useEffect(()=>{const y=V.current,o=B.current;if(!y||!o)return;let e=null,n=null,m=null,d=null,p=null,C=0,F=!1,ae=performance.now(),g=0,_=0,w=0,j=null,I=null,D=null,G=null,O=null,$=null,c=[0,.42,1],h=[.3,.3,.3],v=[0,0,0];const k=()=>{if(r&&r.length>=2){const f=r.map(U=>S(U)).filter(U=>!!U);c=f[0]??c,h=f[1]??f[0]??c,v=f[2]??f[1]??f[0]??c;return}const t=getComputedStyle(document.documentElement),u=S(t.getPropertyValue("--ns-accent").trim())??[0,.42,1],te=S(t.getPropertyValue("--background").trim())??[0,0,0],ue=S(t.getPropertyValue("--foreground").trim())??[1,1,1];c=re(te,ue,.12),h=u,v=re(te,[0,0,0],0)};k();const q=t=>(t||e?.getExtension("WEBGL_lose_context")?.loseContext(),!1),H=(t=!1)=>{if(e=o.getContext("webgl",{alpha:!1,antialias:!0}),!e)return!1;if(m=ne(e,e.VERTEX_SHADER,le),d=ne(e,e.FRAGMENT_SHADER,fe),n=e.createProgram(),!n||(e.attachShader(n,m),e.attachShader(n,d),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)))return q(t);e.useProgram(n),p=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const u=e.getAttribLocation(n,"a_pos");return e.enableVertexAttribArray(u),e.vertexAttribPointer(u,2,e.FLOAT,!1,0,0),j=e.getUniformLocation(n,"u_res"),I=e.getUniformLocation(n,"u_time"),D=e.getUniformLocation(n,"u_scale"),G=e.getUniformLocation(n,"u_c1"),O=e.getUniformLocation(n,"u_c2"),$=e.getUniformLocation(n,"u_c3"),!0},ie=()=>{e&&(p&&e.deleteBuffer(p),n&&e.deleteProgram(n),m&&e.deleteShader(m),d&&e.deleteShader(d),p=n=m=d=null,e=null)},se=()=>{!e||!n||(e.viewport(0,0,o.width,o.height),e.uniform2f(j,o.width,o.height),e.uniform1f(D,a))},T=()=>{!e||!n||(e.uniform3f(G,c[0],c[1],c[2]),e.uniform3f(O,h[0],h[1],h[2]),e.uniform3f($,v[0],v[1],v[2]))},x=t=>{!e||!n||_<=0||w<=0||(e.uniform1f(I,(t-ae)/1e3*N.current),e.drawArrays(e.TRIANGLES,0,6))},ce=1e3/30;let W=0;const z=t=>{t-W>=ce&&(W=t,x(t)),C=requestAnimationFrame(z)},Y=()=>{F||(F=!0,C=requestAnimationFrame(z))},b=()=>{cancelAnimationFrame(C),F=!1},P=()=>{const t=y.getBoundingClientRect();if(t.width<2||t.height<2)return;_=t.width,w=t.height;const u=Math.min(window.devicePixelRatio||1,2);o.width=Math.round(_*u),o.height=Math.round(w*u),o.style.width=`${_}px`,o.style.height=`${w}px`,se(),x(g||performance.now())};if(!H())return;T();const K=new ResizeObserver(P);K.observe(y),P();const E=window.matchMedia("(prefers-reduced-motion: reduce)");let R=E.matches;const M=()=>{R?(g=performance.now(),b(),x(g)):Y()},X=()=>{R=E.matches,M()};E.addEventListener("change",X),M();const J=()=>{document.hidden?b():R||Y()};document.addEventListener("visibilitychange",J);const Q=new MutationObserver(()=>{k(),T(),R&&x(g||performance.now())});Q.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const Z=t=>{t.preventDefault(),b()},ee=()=>{H(!0)&&(T(),P(),M())};return o.addEventListener("webglcontextlost",Z),o.addEventListener("webglcontextrestored",ee),()=>{K.disconnect(),E.removeEventListener("change",X),document.removeEventListener("visibilitychange",J),Q.disconnect(),o.removeEventListener("webglcontextlost",Z),o.removeEventListener("webglcontextrestored",ee),b();const t=e?.getExtension("WEBGL_lose_context");ie(),o.isConnected||t?.loseContext()}},[r,a]),L.jsx("div",{ref:V,"aria-hidden":"true",className:`relative h-full w-full overflow-hidden ${i}`,style:l,children:L.jsx("canvas",{ref:B,className:"absolute inset-0"})})}oe.displayName="ChromaTide";function de(){return L.jsx("div",{className:"ns-stage",children:L.jsx(oe,{colors:["示例","第二项"]})})}export{de as default};
