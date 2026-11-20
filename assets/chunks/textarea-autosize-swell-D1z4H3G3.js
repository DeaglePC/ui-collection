import{r as t,j as a}from"./client-CsvIHAk3.js";const A=180,te=320,re=400,ne=40,se="cubic-bezier(0.16, 1, 0.3, 1)";function oe(o,p,f){return Math.min(Math.max(o,p),f)}function D(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br/>")}let q=!1;function ie(){if(q||typeof window>"u")return;q=!0;const o=window.CSS;try{o.registerProperty?.({name:"--proof-h",syntax:"<length>",inherits:!1,initialValue:"0px"})}catch{}}function ae({label:o,minRows:p=1,maxRows:f,id:O,className:B="",onChange:G,defaultValue:K,value:g,...V}){const W=t.useId(),M=O??`textarea-autosize-swell-${W}`,x=t.useRef(null),h=t.useRef(null),H=t.useRef(null),v=t.useRef(!1),y=t.useRef(void 0),X=t.useRef({oneLine:24,lineHeight:20}),Y=t.useRef({min:24,max:1/0}),[$,P]=t.useState(!1);t.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)");P(r.matches);const n=()=>P(r.matches);return r.addEventListener("change",n),()=>r.removeEventListener("change",n)},[]),t.useEffect(()=>{ie()},[]),t.useEffect(()=>{const r=(w,Q)=>{const l=h.current,u=H.current,e=x.current;if(!l||!u||!e)return;const F=getComputedStyle(l);let i=parseFloat(F.lineHeight);Number.isNaN(i)&&(i=parseFloat(F.fontSize)*1.5),u.textContent=" ";const b=u.scrollHeight||i;X.current={oneLine:b,lineHeight:i};const I=b+Math.max(0,p-1)*i,E=f?b+Math.max(0,f-1)*i:1/0;Y.current={min:I,max:E};const R=l.value;let S=R.length;try{const d=l.selectionStart;d!=null&&(S=d)}catch{}const U=R.slice(0,S),Z=R.slice(S);u.innerHTML=`${D(U)}<span data-caret>​</span>${D(Z)||"​"}`;const k=u.scrollHeight,s=oe(k,I,E),L=u.querySelector("[data-caret]"),z=L?L.offsetTop+L.offsetHeight:s;if(l.style.overflowY=k>E?"auto":"hidden",l.style.height=`${s}px`,w||$){e.style.transitionDuration="0ms",e.style.setProperty("--proof-h",`${s}px`),e.offsetHeight;return}let c=parseFloat(getComputedStyle(e).height);if(Number.isFinite(c)||(c=s),z-c>i+2){const d=Math.min(s,z-i);e.style.transitionDuration="0ms",e.style.setProperty("--proof-h",`${d}px`),e.offsetHeight,c=d}const _=s>c+.5,ee=s<c-.5;let m=A;ee?m=te:_&&Q&&s-c>ne&&(m=re),e.style.transitionDuration=`${m}ms`,e.style.setProperty("--proof-h",`${s}px`),window.clearTimeout(y.current),_?(e.classList.add("ns-proof-rising"),y.current=window.setTimeout(()=>{e.classList.remove("ns-proof-rising")},m)):e.classList.remove("ns-proof-rising")};r(!0,!1);const n=h.current,J=x.current;if(!n||!J)return;const N=()=>{const w=v.current;v.current=!1,r(!1,w)},T=()=>{v.current=!0};n.addEventListener("input",N),n.addEventListener("paste",T);const C=new ResizeObserver(()=>r(!0,!1));return C.observe(n),()=>{n.removeEventListener("input",N),n.removeEventListener("paste",T),C.disconnect(),window.clearTimeout(y.current)}},[$,p,f]),t.useEffect(()=>{if(g===void 0)return;const r=h.current;if(!r)return;const n=new Event("input",{bubbles:!0});r.dispatchEvent(n)},[g]);const j="w-full resize-none bg-transparent px-3.5 py-2.5 font-sans text-sm leading-relaxed text-foreground";return a.jsxs("div",{className:B,children:[a.jsx("style",{children:`
@property --proof-h {
  syntax: '<length>';
  inherits: false;
  initial-value: 0px;
}
.ns-proof-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--border);
  border-bottom-width: 1px;
  height: var(--proof-h);
  transition-property: --proof-h, border-color;
  transition-timing-function: ${se};
  transition-duration: ${A}ms;
}
.ns-proof-wrap.ns-proof-rising {
  border-color: var(--ns-muted);
}
.ns-proof-wrap:focus-within {
  border-color: var(--ns-accent);
}
.ns-proof-textarea {
  display: block;
  outline: none;
  overflow: hidden;
}
@media (prefers-reduced-motion: reduce) {
  .ns-proof-wrap {
    transition-duration: 0ms;
  }
}
`}),o?a.jsx("label",{htmlFor:M,className:"mb-1.5 block text-xs text-ns-muted",children:o}):null,a.jsxs("div",{ref:x,className:"ns-proof-wrap bg-background",style:{"--proof-h":"2.75rem"},children:[a.jsx("textarea",{ref:h,id:M,rows:1,className:`ns-proof-textarea ${j} placeholder:text-ns-muted/70`,defaultValue:K,value:g,onChange:G,...V}),a.jsx("div",{ref:H,"aria-hidden":!0,className:`ns-proof-textarea pointer-events-none absolute inset-x-0 top-0 select-none whitespace-pre-wrap break-words ${j}`,style:{visibility:"hidden",height:"auto"}})]})]})}function le(){return a.jsx("div",{className:"ns-stage",children:a.jsx(ae,{onChange:()=>{}})})}export{le as default};
