import{r as L,j as y}from"./client-CsvIHAk3.js";const ft=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,ut=`
precision highp float;

uniform vec2 u_size;
uniform float u_dpr;
uniform float u_time;
uniform sampler2D u_mask;

// from-generation (outgoing) params
uniform float u_threshFrom;
uniform float u_edgeFrom;
uniform float u_toneFrom;   // 0 = positive (fg on bg), 1 = negative (bg on fg)
// to-generation (incoming) params
uniform float u_threshTo;
uniform float u_edgeTo;
uniform float u_toneTo;
uniform float u_transition; // 0..1, eased, 0 = fully "from", 1 = fully "to"

uniform vec2 u_ptr;         // css px, y down
uniform float u_ptrActive;
uniform float u_ptrRadius;

uniform vec3 u_bg;
uniform vec3 u_fg;

float hash21(vec2 p) {
  p = fract(p * vec2(287.13, 419.71));
  p += dot(p, p + 27.31);
  return fract(p.x * p.y);
}

// effective in-letter fraction for one generation's params, given the same
// raw soft-alpha sample: thresholding a blurred mask below 0.5 dilates it,
// above erodes it, which is the whole "stroke width" knob.
float genMask(float soft, float thresh, float edge, float tone) {
  float m = smoothstep(thresh - edge, thresh + edge, soft);
  // tone flip swaps which side of the mask is "ink": a negative generation
  // reads the FIELD as ink and the letterform as the gap in it.
  return mix(m, 1.0 - m, tone);
}

void main() {
  vec2 fc = gl_FragCoord.xy / u_dpr;
  vec2 uv = vec2(fc.x / u_size.x, fc.y / u_size.y);

  vec2 mc = texture2D(u_mask, uv).rg;
  float sharp = mc.r;
  float softSample = mc.g;

  // local "fresh exposure": pointer proximity pulls BOTH the from- and the
  // to-generation params toward generation-1 crispness (edge -> its floor,
  // threshold -> 0.5) without touching the tone flip or the global cadence,
  // so hovering never desyncs the flip elsewhere in the frame.
  float d = distance(fc, u_ptr);
  float crisp = u_ptrActive * smoothstep(u_ptrRadius, 0.0, d);
  float tf = mix(u_threshFrom, 0.5, crisp);
  float ef = mix(u_edgeFrom, 0.012, crisp);
  float tt = mix(u_threshTo, 0.5, crisp);
  float et = mix(u_edgeTo, 0.012, crisp);

  // Softness itself also relaxes toward the sharp channel under the pointer
  // (a fresh exposure has no accumulated blur to draw from).
  float soft = mix(softSample, sharp, crisp);
  soft = mix(soft, sharp, 0.0); // keep sharp channel reachable below

  float mFrom = genMask(mix(soft, sharp, crisp), tf, ef, u_toneFrom);
  float mTo = genMask(mix(soft, sharp, crisp), tt, et, u_toneTo);

  // THE FLIP: both generations are evaluated against the SAME mask sample and
  // blended by the eased transition, so the 260ms window genuinely shows
  // departure (mFrom fading out) and arrival (mTo fading in) rather than a
  // hard cut between two textures.
  float m = mix(mFrom, mTo, u_transition);

  vec3 col = mix(u_bg, u_fg, m);

  // paper grain: photostat stock is never perfectly flat. A slow per-texel
  // hash keeps the field alive at rest even in a stretch between flips, at an
  // amplitude far below the flip itself so it never competes with it.
  float grain = hash21(floor(fc * 0.6) + floor(u_time * 3.0));
  col += (grain - 0.5) * 0.025;

  // a soft vignette toward the deepest stop keeps the frame edges from
  // competing with the headline
  vec2 cc = uv * 2.0 - 1.0;
  float vig = smoothstep(0.55, 1.35, length(cc));
  col = mix(col, mix(u_bg, u_fg, m * 0.6), vig * 0.12);

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;function Ye(l){const r=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(l.trim());if(!r)return null;let n=r[1];n.length===3&&(n=n.split("").map(x=>x+x).join(""));const s=parseInt(n,16);return[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255]}function Ke(l,r,n){const s=l.createShader(r);if(l.shaderSource(s,n),l.compileShader(s),!l.getShaderParameter(s,l.COMPILE_STATUS)){const x=l.getShaderInfoLog(s);throw l.deleteShader(s),new Error(`photostat-reverse: shader compile failed: ${x??""}`)}return s}class ht{constructor(r,n){this.gl=r,this.prog=null,this.vs=null,this.fs=null,this.locs=new Map,this.vs=Ke(r,r.VERTEX_SHADER,ft),this.fs=Ke(r,r.FRAGMENT_SHADER,n);const s=r.createProgram();if(!s)throw new Error("photostat-reverse: createProgram failed");if(this.prog=s,r.attachShader(s,this.vs),r.attachShader(s,this.fs),r.bindAttribLocation(s,0,"a_pos"),r.linkProgram(s),!r.getProgramParameter(s,r.LINK_STATUS))throw new Error("photostat-reverse: link failed")}use(){this.gl.useProgram(this.prog)}loc(r){return this.locs.has(r)||this.locs.set(r,this.gl.getUniformLocation(this.prog,r)),this.locs.get(r)??null}f(r,n){this.gl.uniform1f(this.loc(r),n)}i(r,n){this.gl.uniform1i(this.loc(r),n)}v2(r,n,s){this.gl.uniform2f(this.loc(r),n,s)}v3(r,n){this.gl.uniform3f(this.loc(r),n[0],n[1],n[2])}destroy(){const r=this.gl;this.prog&&r.deleteProgram(this.prog),this.vs&&r.deleteShader(this.vs),this.fs&&r.deleteShader(this.fs),this.prog=null,this.vs=null,this.fs=null,this.locs.clear()}}const Je=1.3,mt=.26,dt=1.04,pt=1.06,gt=.024,ve=.014;function Qe(l){const r=Math.pow(dt,l)-1,n=Math.pow(pt,l);return{thresh:.5-gt*r*4,edge:ve*n}}const vt=2,O=0;function Ze({headline:l=`GENERATION
LOSS`,headlineWeight:r=800,headlineFit:n=.62,headlineY:s=.5,speed:x=1,paused:Ee=!1,children:_e,className:et="",style:tt}){const xe=L.useRef(null),we=L.useRef(null),rt=L.useId(),S=L.useRef(Ee);S.current=Ee;const P=L.useRef(l);return P.current=l,L.useEffect(()=>{const h=xe.current,f=we.current;if(!h||!f)return;const t=f.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return;let a=null,T=null,p=null,X=!1,re=0,oe=!1,u=!1,ne=!1,d=0,g=0,F=1,se=performance.now(),$=0;const Te=[1,.8,.65],ot=24;let k=0,D=16.7,I=0,C=0,j=8e3;const nt=2;let ie=0,R=O,ae=O,le=.5,ce=ve,z=.5,H=ve,fe=Je,Re=0;const be=(e,o)=>{const i=Qe(e);le=z,ce=H,ae=R,z=i.thresh,H=i.edge,R=o},st=e=>{if(e<fe)return;Re=fe,fe=e+Je;const o=ie>=4,i=o?0:ie+1,c=o?R:R===0?1:0;ie=i,be(i,c)};be(0,O),le=z,ce=H,ae=R;let V=!1,q=0,W=0,U=0,G=0,b=0,ue=0,he=0,Y=!0;const it=e=>{const o=1-Math.exp(-e/.05);U+=(q-U)*o,G+=(W-G)*o,b+=((V?1:0)-b)*(1-Math.exp(-e/.12))};let Ae=[1,1,1],Me=[.09,.09,.09];const Le=()=>{const e=getComputedStyle(document.documentElement);Ae=Ye(e.getPropertyValue("--background"))??[1,1,1],Me=Ye(e.getPropertyValue("--foreground"))??[.09,.09,.09]};Le();const K=document.createElement("canvas"),me=document.createElement("canvas"),J=()=>{if(d<2||g<2)return;const e=Math.max(256,Math.min(1024,Math.round(d))),o=Math.max(128,Math.round(e*(g/d)));K.width=e,K.height=o,me.width=e,me.height=o;const i=K.getContext("2d",{willReadFrequently:!0}),c=me.getContext("2d",{willReadFrequently:!0});if(!i||!c)return;const _=getComputedStyle(h).fontFamily||"system-ui, sans-serif",m=P.current.split(`
`).filter(B=>B.length>0);if(i.clearRect(0,0,e,o),m.length>0){i.font=`${r} 100px ${_}`;let v=1;for(const M of m)v=Math.max(v,i.measureText(M).width);const qe=Math.min(e*n*100/v,o*.42/m.length);i.font=`${r} ${qe}px ${_}`,i.textAlign="center",i.textBaseline="middle",i.fillStyle="#fff";const We=qe*1.06,ct=o*s-(m.length-1)*We/2;for(let M=0;M<m.length;M++)i.fillText(m[M],e/2,ct+M*We)}c.clearRect(0,0,e,o);const w=Math.max(2,e*.02);c.filter=`blur(${w}px)`,c.drawImage(K,0,0),c.filter="none";const A=i.getImageData(0,0,e,o).data,lt=c.getImageData(0,0,e,o).data,te=new Uint8Array(e*o*4);for(let B=0,v=0;B<e*o;B++,v+=4)te[v]=A[v+3],te[v+1]=lt[v+3],te[v+3]=255;p?t.bindTexture(t.TEXTURE_2D,p):(p=t.createTexture(),t.bindTexture(t.TEXTURE_2D,p),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR)),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e,o,0,t.RGBA,t.UNSIGNED_BYTE,te),X=m.length>0},E=()=>{if(!a||!p)return;a.use(),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,f.width,f.height),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,p),a.i("u_mask",0),a.v2("u_size",d,g),a.f("u_dpr",F),a.f("u_time",$);let e=le,o=ce,i=z,c=H,_=ae,m=R,w=u?1:Math.min(1,Math.max(0,($-Re)/mt));if(w=w*w*(3-2*w),u){const A=Qe(vt);e=A.thresh,o=A.edge,i=A.thresh,c=A.edge,_=O,m=O}a.f("u_threshFrom",e),a.f("u_edgeFrom",o),a.f("u_toneFrom",_),a.f("u_threshTo",i),a.f("u_edgeTo",c),a.f("u_toneTo",m),a.f("u_transition",w),a.v2("u_ptr",U,f.height/F-G),a.f("u_ptrActive",b),a.f("u_ptrRadius",Math.min(d,g)*.22),a.v3("u_bg",Ae),a.v3("u_fg",Me),t.drawArrays(t.TRIANGLES,0,6)},ye=e=>{const o=e-se,i=Math.min(.05,Math.max(5e-4,o/1e3));se=e,$+=i*Math.max(.05,x),st($),it(i),E();const c=Math.min(50,o);D+=(c-D)*(1-Math.exp(-c/120)),D>ot?(I+=c,C=0):(C+=c,I=0);const _=I>900&&k<Te.length-1,m=C>j&&k>0;(_||m)&&(k+=_?1:-1,_&&(j=Math.min(64e3,j*2)),I=0,C=0,D=16.7,Se()),re=requestAnimationFrame(ye)},de=()=>{oe||ne||(oe=!0,se=performance.now(),re=requestAnimationFrame(ye))},N=()=>{cancelAnimationFrame(re),oe=!1},Se=()=>{if(d<2||g<2)return;F=Math.min(window.devicePixelRatio||1,nt)*Te[k];const e=Math.max(2,Math.round(d*F)),o=Math.max(2,Math.round(g*F));f.width=e,f.height=o,f.style.width=`${d}px`,f.style.height=`${g}px`,X&&E()},pe=()=>{const e=h.getBoundingClientRect();if(e.width<2||e.height<2)return;const o=Math.abs(e.width-d)>.5||Math.abs(e.height-g)>.5;d=e.width,g=e.height,ue=e.left,he=e.top,Y=!1,k=0,I=0,C=0,j=8e3,D=16.7,o&&J(),Se()},at=()=>{if(!Y)return;const e=h.getBoundingClientRect();ue=e.left,he=e.top,Y=!1},Q=()=>{Y=!0},Pe=e=>{at(),q=e.clientX-ue,W=e.clientY-he},Fe=e=>{Pe(e),U=q,G=W,V=!0,u&&E()},ke=e=>{Pe(e),V=!0,u&&(U=q,G=W,b=1,E())},De=()=>{V=!1,u&&(b=0,E())},Ie=(e=!1)=>{try{a=new ht(t,ut)}catch{return e||t.getExtension("WEBGL_lose_context")?.loseContext(),!1}return T=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,T),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),!0};if(!Ie())return;const Ce=new ResizeObserver(pe);Ce.observe(h),pe(),document.fonts?.ready&&document.fonts.ready.then(()=>{ne||(J(),u&&E())}),h.addEventListener("pointerenter",Fe),h.addEventListener("pointermove",ke),h.addEventListener("pointerleave",De),window.addEventListener("scroll",Q,{passive:!0,capture:!0}),window.addEventListener("resize",Q,{passive:!0});const Z=window.matchMedia("(prefers-reduced-motion: reduce)");let Ue=Z.matches;const ee=()=>{Ue||S.current?(u=!0,N(),X&&E()):(u=!1,de())},Ge=()=>{Ue=Z.matches,ee()};Z.addEventListener("change",Ge);let ge=!0;const Ne=new IntersectionObserver(e=>{ge=e.some(o=>o.isIntersecting),ge?!u&&!document.hidden&&de():N()},{threshold:0});Ne.observe(h);const Be=()=>{document.hidden?N():!u&&ge&&de()};document.addEventListener("visibilitychange",Be),ee();let Oe=S.current,Xe=P.current,$e=0;const je=()=>{S.current!==Oe&&(Oe=S.current,ee()),P.current!==Xe&&(Xe=P.current,J(),u&&E()),$e=window.setTimeout(je,140)};je();const ze=new MutationObserver(()=>{Le(),u&&E()});ze.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const He=e=>{e.preventDefault(),N()},Ve=()=>{a=null,p=null,T=null,X=!1,Ie(!0)&&(d=0,g=0,pe(),J(),ee())};return f.addEventListener("webglcontextlost",He),f.addEventListener("webglcontextrestored",Ve),()=>{ne=!0,Ce.disconnect(),Ne.disconnect(),Z.removeEventListener("change",Ge),document.removeEventListener("visibilitychange",Be),ze.disconnect(),f.removeEventListener("webglcontextlost",He),f.removeEventListener("webglcontextrestored",Ve),h.removeEventListener("pointerenter",Fe),h.removeEventListener("pointermove",ke),h.removeEventListener("pointerleave",De),window.removeEventListener("scroll",Q,{capture:!0}),window.removeEventListener("resize",Q),window.clearTimeout($e),N(),p&&t.deleteTexture(p),p=null,T&&t.deleteBuffer(T),T=null,a?.destroy(),a=null,f.isConnected||t.getExtension("WEBGL_lose_context")?.loseContext()}},[r,n,s,x]),y.jsxs("div",{ref:xe,"data-photostat-reverse":rt,className:`relative isolate h-full w-full overflow-hidden bg-background ${et}`,style:tt,children:[y.jsx("canvas",{ref:we,"aria-hidden":"true",className:"absolute inset-0 block"}),y.jsx("h1",{className:"sr-only",children:l.split(`
`).join(" ")}),_e?y.jsx("div",{className:"relative z-[1] h-full w-full",children:_e}):null]})}Ze.displayName="PhotostatReverse";function _t(){return y.jsx("div",{className:"ns-stage",children:y.jsx(Ze,{children:"示例"})})}export{_t as default};
