import{r as w,j as R}from"./client-CsvIHAk3.js";const z=256,ie=.12,le=.001;function F(r,f,o){const t=(r%o+o)%o,c=(f%o+o)%o,d=Math.sin(t*127.1+c*311.7+o*.917)*43758.5453123;return d-Math.floor(d)}function re(r,f,o){const t=Math.floor(r),c=Math.floor(f),d=r-t,n=f-c,s=d*d*(3-2*d),a=n*n*(3-2*n),u=F(t,c,o),g=F(t+1,c,o),E=F(t,c+1,o),T=F(t+1,c+1,o);return u+(g-u)*s+(E-u)*a+(u-g-E+T)*s*a}function ue(r,f){return .65*re(r*8,f*8,8)+.35*re(r*16,f*16,16)}function fe(){const r=z,f=new Float32Array(r*r);for(let t=0;t<r;t++)for(let c=0;c<r;c++)f[t*r+c]=ue(c/r,t/r);const o=new Uint8Array(r*r*4);for(let t=0;t<r;t++){const c=(t+r-1)%r*r,d=(t+1)%r*r,n=t*r;for(let s=0;s<r;s++){const a=f[n+(s+r-1)%r]??0,u=f[n+(s+1)%r]??0,g=f[c+s]??0,E=f[d+s]??0,T=Math.max(-1,Math.min(1,(a-u)*6)),v=Math.max(-1,Math.min(1,(g-E)*6)),m=(n+s)*4;o[m]=Math.round((T*.5+.5)*255),o[m+1]=Math.round((v*.5+.5)*255),o[m+2]=Math.round((f[n+s]??0)*255),o[m+3]=255}}return o}function de(){const o=document.createElement("canvas");o.width=900,o.height=1200;const t=o.getContext("2d");if(!t)return null;const c=t.createLinearGradient(0,0,0,1200);c.addColorStop(0,"#181818"),c.addColorStop(1,"#090909"),t.fillStyle=c,t.fillRect(0,0,900,1200);const d=t.createRadialGradient(900*.5,1200*.34,0,900*.5,1200*.34,1200*.55);d.addColorStop(0,"rgba(255,255,255,0.12)"),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.fillRect(0,0,900,1200);const n=900*.5,s=1200*.45,a=900*.3;t.save(),t.translate(n,s+a*1.32),t.scale(1,.22);const u=t.createRadialGradient(0,0,0,0,0,a*1.15);u.addColorStop(0,"rgba(0,0,0,0.55)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.beginPath(),t.arc(0,0,a*1.15,0,Math.PI*2),t.fill(),t.restore();const g=t.createRadialGradient(n-a*.38,s-a*.42,a*.08,n,s,a);g.addColorStop(0,"#f2f2f2"),g.addColorStop(.45,"#8f8f8f"),g.addColorStop(.8,"#2c2c2c"),g.addColorStop(1,"#101010"),t.fillStyle=g,t.beginPath(),t.arc(n,s,a,0,Math.PI*2),t.fill();const E=t.createRadialGradient(n-a*.42,s-a*.48,0,n-a*.42,s-a*.48,a*.22);E.addColorStop(0,"rgba(255,255,255,0.95)"),E.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=E,t.beginPath(),t.arc(n-a*.42,s-a*.48,a*.22,0,Math.PI*2),t.fill();const T=t.getImageData(0,0,900,1200),v=T.data;for(let m=0;m<v.length;m+=4){const S=(Math.random()-.5)*10;v[m]=(v[m]??0)+S,v[m+1]=(v[m+1]??0)+S,v[m+2]=(v[m+2]??0)+S}return t.putImageData(T,0,0),o}const me=`
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,he=`
precision highp float;

varying vec2 vUv;

uniform sampler2D uTex;     // image
uniform sampler2D uNoise;   // tiling ripple normal map (RG = normal, B = height)
uniform vec2 uRes;          // pane size, CSS px
uniform vec2 uImgRes;       // image size, px
uniform float uDpr;
uniform float uProgress;    // 0 = frosted, 1 = annealed
uniform float uMaxOffset;   // refraction amplitude at full frost, px
uniform float uFrostRadius; // poisson scatter radius at full frost, px
uniform float uDispersion;  // chromatic step between R/G/B offset scales
uniform float uEdgeFrost;   // 1 = reduced-motion frost vignette at pane edges

// object-fit: cover mapping
vec2 coverUv(vec2 uv) {
  float ra = uRes.x / uRes.y;
  float ia = uImgRes.x / uImgRes.y;
  vec2 s = ra > ia ? vec2(1.0, ia / ra) : vec2(ra / ia, 1.0);
  return (uv - 0.5) * s + 0.5;
}

// one refracted sample with chromatic dispersion: R/G/B at offset scales
// 1.0 / 1.0+d / 1.0+2d — fringing lives on every ripple edge
vec3 glassTap(vec2 base, vec2 off) {
  float r = texture2D(uTex, coverUv(base + off)).r;
  float g = texture2D(uTex, coverUv(base + off * (1.0 + uDispersion))).g;
  float b = texture2D(uTex, coverUv(base + off * (1.0 + 2.0 * uDispersion))).b;
  return vec3(r, g, b);
}

void main() {
  vec2 uv = vUv;
  vec2 cssPx = gl_FragCoord.xy / uDpr;
  vec3 n = texture2D(uNoise, cssPx / 256.0).rgb * 2.0 - 1.0;

  float frost = 1.0 - uProgress;
  // reduced motion: faint frost confined to the pane edges at p = 1
  vec2 fromCenter = abs(uv - 0.5);
  float edge = smoothstep(0.30, 0.5, max(fromCenter.x, fromCenter.y));
  frost = clamp(max(frost, uEdgeFrost * edge * 0.35), 0.0, 1.0);

  float amp = pow(frost, 1.6);
  vec2 off = n.xy * amp * uMaxOffset / uRes;
  vec2 scatter = vec2(frost * uFrostRadius) / uRes;

  // 5-tap poisson frost scatter around the refracted lookup
  vec3 col = glassTap(uv, off);
  col += glassTap(uv + vec2(-0.94, -0.39) * scatter, off);
  col += glassTap(uv + vec2( 0.97, -0.19) * scatter, off);
  col += glassTap(uv + vec2(-0.37,  0.86) * scatter, off);
  col += glassTap(uv + vec2( 0.45,  0.61) * scatter, off);
  col *= 0.2;

  // frost lifts the pane toward white; ripple height catches a little light
  col = mix(col, vec3(0.82), amp * 0.22);
  col += n.z * amp * 0.06;

  // specular sweep: white band crosses the pane once as p runs 0.92 -> 1.0
  float sw = clamp((uProgress - 0.92) / 0.08, 0.0, 1.0);
  float axis = (uv.x + (1.0 - uv.y) * 0.4) / 1.4;
  float band = smoothstep(0.08, 0.0, abs(axis - mix(-0.15, 1.15, sw)));
  col += vec3(band * 0.35);

  gl_FragColor = vec4(col, 1.0);
}
`;function ge(r,f,o){const t=(s,a)=>{const u=r.createShader(s);return u?(r.shaderSource(u,a),r.compileShader(u),r.getShaderParameter(u,r.COMPILE_STATUS)?u:(r.deleteShader(u),null)):null},c=t(r.VERTEX_SHADER,f),d=t(r.FRAGMENT_SHADER,o);if(!c||!d)return null;const n=r.createProgram();return n?(r.attachShader(n,c),r.attachShader(n,d),r.linkProgram(n),r.getProgramParameter(n,r.LINK_STATUS)?n:(r.deleteProgram(n),null)):null}function ve({src:r,alt:f="Image annealing from frosted glass to optical clarity",caption:o="SCROLL TO ANNEAL",maxOffset:t=42,frostRadius:c=10,dispersion:d=.012,className:n="",onProgress:s}){const a=w.useRef(null),u=w.useRef(null),g=w.useRef(null),E=w.useRef(null),T=w.useRef(null),v=w.useRef(null),m=w.useRef(s);return w.useEffect(()=>{m.current=s},[s]),w.useEffect(()=>{const S=a.current,D=u.current,h=g.current,U=E.current,H=T.current,$=v.current;if(!S||!D||!h||!U||!H||!$)return;const C=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let M=!1,_=0,P=0,x=0;const oe=i=>{$.textContent=`${String(Math.round(i*100)).padStart(3,"0")}%`,H.style.transform=`scaleY(${i.toFixed(4)})`,m.current?.(i)};let ne=null;const N=()=>ne??=de();let G=!1;const V=()=>{if(G=!0,h.classList.add("hidden"),U.classList.remove("hidden"),r)U.src=r;else{const i=N();i&&(U.src=i.toDataURL("image/png"))}};let y=null,L=null;const e=h.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1}),q=()=>{if(!e)return!1;const i=ge(e,me,he);if(!i)return!1;e.useProgram(i);const I=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,I),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const O=e.getAttribLocation(i,"aPos");if(O<0)return!1;e.enableVertexAttribArray(O),e.vertexAttribPointer(O,2,e.FLOAT,!1,0,0);const p=l=>e.getUniformLocation(i,l),ae=p("uRes"),ee=p("uImgRes"),se=p("uDpr"),ce=p("uProgress");e.uniform1f(p("uMaxOffset"),t),e.uniform1f(p("uFrostRadius"),c),e.uniform1f(p("uDispersion"),d),e.uniform1f(p("uEdgeFrost"),C?1:0),e.uniform1i(p("uTex"),0),e.uniform1i(p("uNoise"),1),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,e.createTexture()),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,z,z,0,e.RGBA,e.UNSIGNED_BYTE,fe()),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.activeTexture(e.TEXTURE0);const te=e.createTexture();e.bindTexture(e.TEXTURE_2D,te),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([23,23,23,255])),e.uniform2f(ee,1,1),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0);const k=(l,b,W)=>{e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,te),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,l),e.uniform2f(ee,b,W)};if(r){const l=new Image;l.crossOrigin="anonymous",l.onload=()=>{M||(k(l,l.naturalWidth,l.naturalHeight),y?.(x))},l.onerror=()=>{if(M)return;console.error(`FrostScrub: failed to load src "${r}", falling back to default art`);const b=N();b&&k(b,b.width,b.height),y?.(x)},l.src=r}else{const l=N();l&&k(l,l.width,l.height)}return L=()=>{const l=Math.max(1,D.clientWidth),b=Math.max(1,D.clientHeight),W=!!D.closest("[data-autoplay-root]"),Y=Math.min(W?.6:2,window.devicePixelRatio||1);h.width=Math.max(1,Math.round(l*Y)),h.height=Math.max(1,Math.round(b*Y)),e.viewport(0,0,h.width,h.height),e.uniform2f(ae,l,b),e.uniform1f(se,Y)},y=l=>{e.uniform1f(ce,l),e.drawArrays(e.TRIANGLE_STRIP,0,4)},L(),!0};q()||V();const A=i=>{G?U.style.filter=i>=.999?"none":`blur(${(12*(1-i)).toFixed(2)}px)`:y?.(i),oe(i)},X=i=>{i.preventDefault(),cancelAnimationFrame(_),_=0},B=()=>{M||(q()||V(),L?.(),A(C?1:x))};if(h.addEventListener("webglcontextlost",X),h.addEventListener("webglcontextrestored",B),C){G&&(U.style.filter="none"),A(1);const i=new ResizeObserver(()=>{L?.(),A(1)});return i.observe(D),()=>{M=!0,i.disconnect(),h.removeEventListener("webglcontextlost",X),h.removeEventListener("webglcontextrestored",B),h.isConnected||e?.getExtension("WEBGL_lose_context")?.loseContext()}}const j=()=>{const i=S.getBoundingClientRect(),I=i.height-window.innerHeight;return I<=1?1:Math.min(1,Math.max(0,-i.top/I))},K=()=>{if(x+=(P-x)*ie,Math.abs(P-x)<le){x=P,A(x),_=0;return}A(x),_=requestAnimationFrame(K)},Z=()=>{_||(_=requestAnimationFrame(K))},J=()=>{P=j(),Z()};P=j(),x=P,A(x);const Q=new ResizeObserver(()=>{L?.(),P=j(),A(x),Z()});return Q.observe(D),window.addEventListener("scroll",J,{passive:!0}),()=>{M=!0,cancelAnimationFrame(_),_=0,window.removeEventListener("scroll",J),Q.disconnect(),h.removeEventListener("webglcontextlost",X),h.removeEventListener("webglcontextrestored",B),h.isConnected||e?.getExtension("WEBGL_lose_context")?.loseContext()}},[r,t,c,d]),R.jsx("section",{ref:a,className:`relative h-[300vh] bg-background motion-reduce:h-screen ${n}`,children:R.jsxs("div",{ref:u,role:"img","aria-label":f,className:"sticky top-0 h-screen w-full overflow-hidden bg-background",children:[R.jsx("canvas",{ref:g,"aria-hidden":!0,className:"absolute inset-0 h-full w-full"}),R.jsx("img",{ref:E,alt:"","aria-hidden":!0,className:"absolute inset-0 hidden h-full w-full object-cover"}),R.jsxs("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-y-0 right-4 z-10 flex flex-col items-center justify-center gap-4 font-mono md:right-8",children:[R.jsx("span",{className:"text-[10px] uppercase tracking-[0.3em] text-ns-muted",style:{writingMode:"vertical-rl"},children:o}),R.jsx("span",{className:"relative h-24 w-px overflow-hidden bg-foreground/20",children:R.jsx("span",{ref:T,className:"absolute inset-0 origin-top bg-foreground",style:{transform:"scaleY(0)"}})}),R.jsx("span",{ref:v,className:"text-xs tabular-nums text-foreground",children:"000%"})]})]})})}function Ee(){return R.jsx("div",{className:"ns-stage",children:R.jsx(ve,{src:"#",onProgress:()=>{}})})}export{Ee as default};
