import{r as t,j as e}from"./client-CsvIHAk3.js";const fn=[{value:"a",label:"Plan A"},{value:"b",label:"Plan B"},{value:"c",label:"Plan C"}],un={a:19,b:42,c:128},mn={a:[0,1,9],b:[0,4,2],c:[1,2,8]},pn=[0,0,0],xn={monthly:0,annual:1},hn=["M","A","2","3","4","5","6","7","8","9"],gn=["HUND","TENS","UNITS","TERM"],v=10,bn=30,vn=3,wn=.19,yn=44,kn=96,T=0,L=40,q=210,Nn=90,I=L+q+Nn,En=4,Tn=0,W=178,jn=70,K=W+jn,_n=2,Sn=25,Rn=350;function G(l,i,c){return l<i?i:l>c?c:l}function An(){const[l,i]=t.useState(!1);return t.useEffect(()=>{const c=window.matchMedia("(prefers-reduced-motion: reduce)");i(c.matches);const p=()=>i(c.matches);return c.addEventListener("change",p),()=>c.removeEventListener("change",p)},[]),l}function V(l){const i=getComputedStyle(l).transform;if(!i||i==="none")return 0;const c=i.match(/matrix\(([^)]+)\)/);return c?c[1].split(",").map(w=>parseFloat(w.trim()))[5]??0:0}function b(l,i){return i+l*vn}function In(l){return{tablets:new Array(v).fill(null),anims:new Array(v).fill(null),digit:l}}function Ln({label:l="Plan",plans:i=fn,value:c,defaultValue:p,onValueChange:w,term:M,defaultTerm:J="monthly",onTermChange:C,name:Q,className:Z=""}){const nn=t.useId(),P=Q??nn,j=c!==void 0,[en,rn]=t.useState(()=>p??i[0]?.value??""),y=j?c:en,x=i.find(n=>n.value===y)??i[0],_=M!==void 0,[an,tn]=t.useState(J),u=_?M:an,k=An(),$=t.useCallback(n=>{j||rn(n),n!==y&&w?.(n)},[j,y,w]),O=t.useCallback(n=>{_||tn(n),n!==u&&C?.(n)},[_,u,C]),Y=t.useRef(null),[f,sn]=t.useState(62);t.useEffect(()=>{const n=Y.current;if(!n||typeof ResizeObserver>"u")return;const s=new ResizeObserver(r=>{const o=r[0]?.contentRect;if(!o)return;const a=G(wn*Math.min(o.width,o.height),yn,kn);sn(a)});return s.observe(n),()=>s.disconnect()},[]);const on=G(f*.62,28,64),[z,D,U]=mn[x?.value??""]??pn,S=un[x?.value??""]??0,B=xn[u],h=t.useMemo(()=>[z,D,U,B],[z,D,U,B]),N=t.useRef(h.map(n=>In(n)));t.useLayoutEffect(()=>{if(k){N.current.forEach((n,s)=>{n.anims.forEach(r=>r?.cancel()),n.anims.fill(null),n.digit=h[s]});return}h.forEach((n,s)=>{const r=N.current[s];if(!r||r.digit===n)return;const o=r.digit,a=n,d=r.tablets[o],g=r.tablets[a];if(r.digit=n,d){const E=r.anims[o]?V(d):T;r.anims[o]?.cancel();const m=b(o,f),A=d.animate([{transform:`translateY(${E}px)`,offset:0},{transform:`translateY(${m+_n}px)`,offset:W/K,easing:"cubic-bezier(0.55,0,1,0.45)"},{transform:`translateY(${m}px)`,offset:1,easing:"ease-out"}],{duration:K,delay:Sn,fill:"forwards",easing:"linear"});r.anims[o]=A,A.onfinish=()=>{r.anims[o]===A&&(r.anims[o]=null)}}if(g){const E=r.anims[a]?V(g):b(a,f);r.anims[a]?.cancel();const m=g.animate([{transform:`translateY(${E}px)`,offset:0},{transform:`translateY(${E}px)`,offset:L/I},{transform:`translateY(${T-En}px)`,offset:(L+q)/I,easing:"cubic-bezier(0.34,1.56,0.64,1)"},{transform:`translateY(${T}px)`,offset:1,easing:"ease-out"}],{duration:I,delay:Tn,fill:"forwards",easing:"linear"});r.anims[a]=m,m.onfinish=()=>{r.anims[a]===m&&(r.anims[a]=null)}}})},[h,f,k]),t.useEffect(()=>()=>{N.current.forEach(n=>n.anims.forEach(s=>s?.cancel()))},[]);const[ln,cn]=t.useState(""),R=t.useRef(void 0);t.useEffect(()=>(window.clearTimeout(R.current),R.current=window.setTimeout(()=>{const n=u==="annual"?"annually":"monthly";cn(`${x?.label}, ${S} dollars per month, billed ${n}.`)},Rn),()=>window.clearTimeout(R.current)),[x,u,S]);const X=t.useRef([]),F=t.useRef([]),H=t.useCallback((n,s,r,o)=>{if(n.key!=="Home"&&n.key!=="End")return;n.preventDefault();const a=n.key==="Home"?0:s.current.length-1,d=s.current[a];d&&(d.focus(),d.checked=!0,r(o[a]))},[]),dn=u==="annual"?"billed annually":"billed monthly";return e.jsxs("div",{ref:Y,className:`ns-ir-root ${Z}`,style:{"--fr-lift":`${f}px`,"--fr-col-w":`${on}px`},children:[e.jsx("style",{children:Mn}),e.jsxs("div",{className:"ns-ir-rack","aria-hidden":"true","data-reduced":k||void 0,children:[e.jsxs("div",{className:"ns-ir-window",children:[e.jsx("div",{className:"ns-ir-cur",children:"$"}),h.map((n,s)=>{const r=(n+v-1)%v;return e.jsx("div",{className:"ns-ir-column",children:e.jsx("div",{className:"ns-ir-stack",children:Array.from({length:v},(o,a)=>{let d;return k&&(a===n?d=`translateY(${21/62*f}px)`:a===r?d=`translateY(${b(a,f)-22/62*f}px)`:d=`translateY(${b(a,f)}px)`),e.jsx("div",{ref:g=>{N.current[s].tablets[a]=g},className:"ns-ir-tablet",style:{transform:d??`translateY(${a===n?T:b(a,f)}px)`},children:e.jsx("span",{children:s===3?hn[a]:a})},a)})})},s)}),e.jsx("div",{className:"ns-ir-reflection"})]}),e.jsx("div",{className:"ns-ir-flag"}),e.jsxs("div",{className:"ns-ir-labels",children:[e.jsx("span",{className:"ns-ir-labels-cur"}),gn.map(n=>e.jsx("span",{children:n},n))]})]}),e.jsxs("div",{className:"ns-ir-controls",children:[e.jsx("div",{role:"radiogroup","aria-label":l,className:"ns-ir-radiogroup",children:i.map((n,s)=>e.jsxs("label",{className:"ns-ir-option",children:[e.jsx("input",{ref:r=>{X.current[s]=r},type:"radio",className:"ns-ir-input",name:P,value:n.value,checked:n.value===y,onChange:()=>$(n.value),onKeyDown:r=>H(r,X,$,i.map(o=>o.value))}),e.jsx("span",{className:"ns-ir-option-face",children:n.label})]},n.value))}),e.jsx("div",{role:"radiogroup","aria-label":"Billing term",className:"ns-ir-radiogroup ns-ir-radiogroup-term",children:["monthly","annual"].map((n,s)=>e.jsxs("label",{className:"ns-ir-option ns-ir-option-term",children:[e.jsx("input",{ref:r=>{F.current[s]=r},type:"radio",className:"ns-ir-input",name:`${P}-term`,value:n,checked:n===u,onChange:()=>O(n),onKeyDown:r=>H(r,F,o=>O(o),["monthly","annual"])}),e.jsx("span",{className:"ns-ir-option-face",children:n==="monthly"?"Monthly":"Annual"})]},n))}),e.jsxs("p",{className:"ns-ir-price",children:[e.jsx("span",{className:"ns-ir-price-plan",children:x?.label}),e.jsxs("span",{className:"ns-ir-price-word",children:[e.jsx("span",{className:"ns-ir-price-cur",children:"$"}),S]}),e.jsxs("span",{className:"ns-ir-price-meta",children:["per month, ",dn]})]}),e.jsxs("div",{className:"ns-ir-actions",children:[e.jsx("button",{type:"button",className:"ns-ir-cta",children:"Primary action"}),e.jsx("button",{type:"button",className:"ns-ir-link",children:"Secondary link"})]})]}),e.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:"ns-ir-sr-only",children:ln})]})}const Mn=`
.ns-ir-root{
  display:flex;
  flex-direction:column;
  gap:16px;
  container-type:inline-size;
}
.ns-ir-sr-only{
  position:absolute;
  width:1px;height:1px;
  padding:0;margin:-1px;
  overflow:hidden;
  clip:rect(0,0,0,0);
  white-space:nowrap;
  border:0;
}
.ns-ir-rack{
  position:relative;
  align-self:flex-start;
  padding:10px 10px 4px;
  border:1px solid var(--border);
  border-radius:8px;
  background:var(--background);
}
.ns-ir-window{
  position:relative;
  display:flex;
  gap:calc(var(--fr-col-w) * 0.14);
  height:calc(var(--fr-lift) + ${bn}px);
  overflow:hidden;
  border-radius:4px;
}
.ns-ir-column{
  position:relative;
  width:var(--fr-col-w);
  height:100%;
  overflow:hidden;
  border-left:1px solid color-mix(in oklab, var(--ns-muted) 30%, transparent);
}
.ns-ir-column:first-child{ border-left:none; }
.ns-ir-stack{
  position:relative;
  width:100%;
  height:100%;
}
.ns-ir-tablet{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:var(--fr-lift);
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  /* a printed plate, not a hole in the rack: one step off the rack's own
     background so the down-stacked edges read as a stack of plates rather
     than as pinstriping, and the raised plate reads as a face. */
  background:color-mix(in oklab, var(--background) 90%, var(--foreground) 10%);
  color:var(--foreground);
  border-top:1px solid color-mix(in oklab, var(--ns-muted) 75%, transparent);
  border-bottom:1px solid color-mix(in oklab, var(--background) 55%, var(--foreground) 45%);
  font-family:var(--font-geist-mono, ui-monospace, monospace);
  font-size:calc(var(--fr-col-w) * 0.72);
  font-weight:500;
  line-height:1;
  font-variant-numeric:tabular-nums;
  will-change:transform;
}
.ns-ir-cur{
  display:flex;
  align-items:center;
  justify-content:center;
  width:calc(var(--fr-col-w) * 0.6);
  height:var(--fr-lift);
  flex:none;
  font-family:var(--font-geist-mono, ui-monospace, monospace);
  font-size:calc(var(--fr-col-w) * 0.5);
  color:var(--ns-muted);
}
.ns-ir-labels-cur{
  width:calc(var(--fr-col-w) * 0.6) !important;
  flex:none;
}
.ns-ir-reflection{
  position:absolute;
  top:0;
  left:-40px;
  width:40px;
  height:100%;
  background:linear-gradient(
    90deg,
    transparent,
    color-mix(in oklab, var(--background) 90%, var(--foreground) 10%),
    transparent
  );
  mix-blend-mode:overlay;
  opacity:0.14;
  pointer-events:none;
  animation:ns-ir-reflect 6s linear infinite;
}
.dark .ns-ir-reflection{
  background:linear-gradient(
    90deg,
    transparent,
    color-mix(in oklab, var(--foreground) 55%, var(--background) 45%),
    transparent
  );
}
@keyframes ns-ir-reflect{
  from{ transform:translateX(0); }
  to{ transform:translateX(196px); }
}
.ns-ir-flag{
  position:absolute;
  top:2px;
  right:14px;
  width:2px;
  height:7px;
  background:var(--ns-muted);
  transform-origin:top center;
  animation:ns-ir-flag 3.4s ease-in-out infinite;
}
@keyframes ns-ir-flag{
  0%,100%{ transform:rotate(1.2deg); }
  50%{ transform:rotate(-1.2deg); }
}
.ns-ir-rack:not([data-reduced]) .ns-ir-window{
  animation:ns-ir-tick 3.2s ease-in-out infinite;
}
@keyframes ns-ir-tick{
  0%,7%{ transform:translateX(0); }
  50%{ transform:translateX(0.5px); }
  57%,100%{ transform:translateX(0.5px); }
}
.ns-ir-rack[data-reduced] .ns-ir-reflection{
  animation:none;
  transform:translateX(9px);
  opacity:0.14;
}
.ns-ir-rack[data-reduced] .ns-ir-flag{
  animation:none;
  transform:rotate(1.2deg);
}
.ns-ir-rack[data-reduced] .ns-ir-window{
  animation:none;
}
.ns-ir-labels{
  display:flex;
  gap:calc(var(--fr-col-w) * 0.14);
  margin-top:4px;
}
.ns-ir-labels span{
  width:var(--fr-col-w);
  font-family:var(--font-geist-mono, ui-monospace, monospace);
  font-size:8px;
  letter-spacing:0.1em;
  text-align:center;
  color:var(--ns-muted);
}

.ns-ir-controls{
  display:flex;
  flex-direction:column;
  gap:12px;
}
.ns-ir-radiogroup{
  display:flex;
  gap:6px;
  flex-wrap:wrap;
}
.ns-ir-option{
  position:relative;
  cursor:pointer;
  -webkit-tap-highlight-color:transparent;
}
.ns-ir-input{
  position:absolute;
  width:1px;height:1px;
  padding:0;margin:-1px;
  overflow:hidden;
  clip:rect(0,0,0,0);
  white-space:nowrap;
  border:0;
}
.ns-ir-option-face{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:36px;
  padding:6px 14px;
  border:1px solid var(--border);
  border-radius:6px;
  font-size:0.8125rem;
  color:var(--ns-muted);
  transition:color 140ms ease, border-color 140ms ease, background-color 140ms ease;
}
.ns-ir-input:checked + .ns-ir-option-face{
  color:var(--foreground);
  border-color:var(--foreground);
  background:color-mix(in oklab, var(--foreground) 5%, transparent);
}
.ns-ir-input:focus-visible + .ns-ir-option-face{
  outline:2px solid var(--ns-accent);
  outline-offset:2px;
}
.ns-ir-option-term .ns-ir-option-face{ min-height:32px; padding:5px 12px; font-size:0.75rem; }

.ns-ir-price{
  display:flex;
  align-items:baseline;
  gap:8px;
  margin:0;
}
.ns-ir-price-plan{
  font-size:0.75rem;
  color:var(--ns-muted);
}
.ns-ir-price-word{
  font-family:var(--font-geist-mono, ui-monospace, monospace);
  font-size:1.05rem;
  font-weight:500;
  color:var(--foreground);
  letter-spacing:0.04em;
}
.ns-ir-price-meta{
  font-size:0.75rem;
  color:var(--ns-muted);
}

.ns-ir-actions{
  display:flex;
  align-items:center;
  gap:14px;
}
.ns-ir-cta{
  min-height:40px;
  padding:0 18px;
  border:1px solid var(--ns-accent);
  border-radius:6px;
  background:var(--ns-accent);
  color:var(--background);
  font-size:0.8125rem;
  font-weight:500;
  cursor:pointer;
}
.ns-ir-cta:focus-visible{
  outline:2px solid var(--ns-accent);
  outline-offset:2px;
}
.ns-ir-link{
  border:none;
  background:none;
  padding:0;
  font-size:0.8125rem;
  color:var(--ns-muted);
  text-decoration:underline;
  text-underline-offset:3px;
  cursor:pointer;
}
.ns-ir-link:focus-visible{
  outline:2px solid var(--ns-accent);
  outline-offset:2px;
}

@media (prefers-reduced-motion: reduce){
  .ns-ir-tablet{ transition:none !important; }
}
`;function Pn(){return e.jsx("div",{className:"ns-stage",children:e.jsx(Ln,{value:"a",defaultValue:"示例",onValueChange:()=>{},term:"monthly",onTermChange:()=>{},name:"示例"})})}export{Pn as default};
