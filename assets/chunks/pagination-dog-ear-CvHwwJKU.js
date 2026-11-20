import{r as s,j as n}from"./client-CsvIHAk3.js";const g=280;function I({page:t,count:c,onChange:R,className:E=""}){const[S,y]=s.useState(null),[w,u]=s.useState(0),[z,k]=s.useState(null),[D,T]=s.useState(()=>new Set([t])),b=s.useRef(!1),j=s.useRef(t),m=s.useRef(void 0),d=c+2,f=s.useRef([]),C=e=>e===0&&t<=1||e===d-1&&t>=c,o=Array.from({length:d},(e,r)=>r).filter(e=>!C(e));s.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");b.current=e.matches;const r=()=>{b.current=e.matches};return e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[]),s.useEffect(()=>{const e=j.current;if(j.current=t,T(r=>r.has(t)?r:new Set(r).add(t)),e!==t&&(window.clearTimeout(m.current),!b.current))return k({from:e}),m.current=window.setTimeout(()=>k(null),g),()=>window.clearTimeout(m.current)},[t]);const x=(e,r)=>{const a=o.indexOf(r);let i=-1;e.key==="ArrowLeft"?i=a<=0?o.length-1:a-1:e.key==="ArrowRight"?i=(a+1)%o.length:e.key==="Home"?i=0:e.key==="End"&&(i=o.length-1),i>=0&&(e.preventDefault(),f.current[o[i]]?.focus())},v=e=>{e<1||e>c||e===t||R(e)};return n.jsxs("nav",{"aria-label":"Pagination",className:`ns-ft-nav ${E}`,children:[n.jsx("style",{children:A}),n.jsxs("ul",{className:"ns-ft-list",children:[n.jsx("li",{children:n.jsx("button",{ref:e=>{f.current[0]=e},type:"button","aria-label":"Previous page",disabled:t<=1,tabIndex:o[0]===0?0:-1,className:"ns-ft-nav-btn",onClick:()=>v(t-1),onKeyDown:e=>x(e,0),onPointerEnter:()=>u(-1),onPointerLeave:()=>u(0),children:"‹"})}),Array.from({length:c},(e,r)=>r+1).map(e=>{const r=e,a=e===t,i=S===e,N=D.has(e)&&!a,P=z?.from===e,h=a&&w!==0,p=h?t+w:null,L=P?1:i?.55:h?.7:0;return n.jsx("li",{className:"ns-ft-item",children:n.jsxs("button",{ref:l=>{f.current[r]=l},type:"button","aria-label":`Page ${e}`,"aria-current":a?"page":void 0,tabIndex:o[0]===r?0:-1,className:"ns-ft-page","data-current":a||void 0,"data-turning":P||void 0,"data-visited":N||void 0,"data-peek":h||void 0,style:{"--curl":L},onClick:()=>v(e),onKeyDown:l=>x(l,r),onPointerEnter:()=>y(e),onPointerLeave:()=>y(l=>l===e?null:l),children:[n.jsx("span",{className:"ns-ft-num",children:e}),p&&p>=1&&p<=c&&n.jsx("span",{className:"ns-ft-peek","aria-hidden":"true",children:p}),n.jsx("span",{className:"ns-ft-curl","aria-hidden":"true"}),N&&n.jsx("span",{className:"ns-ft-crease","aria-hidden":"true"})]})},e)}),n.jsx("li",{children:n.jsx("button",{ref:e=>{f.current[d-1]=e},type:"button","aria-label":"Next page",disabled:t>=c,tabIndex:o[0]===d-1?0:-1,className:"ns-ft-nav-btn",onClick:()=>v(t+1),onKeyDown:e=>x(e,d-1),onPointerEnter:()=>u(1),onPointerLeave:()=>u(0),children:"›"})})]})]})}const A=`
.ns-ft-nav{display:inline-block;}
.ns-ft-list{display:flex;align-items:flex-end;gap:6px;list-style:none;margin:0;padding:0;}
.ns-ft-nav-btn{
  display:flex;align-items:center;justify-content:center;
  width:32px;height:38px;
  border:1px solid var(--border);border-radius:4px;
  background:var(--background);color:var(--ns-muted);
  font-size:16px;line-height:1;cursor:pointer;
  transition:color 150ms ease, border-color 150ms ease;
}
.ns-ft-nav-btn:not(:disabled):hover{color:var(--foreground);border-color:var(--ns-muted);}
.ns-ft-nav-btn:disabled{opacity:0.35;cursor:default;}
.ns-ft-nav-btn:focus-visible{outline:2px solid var(--ns-accent);outline-offset:1px;}

.ns-ft-item{position:relative;}
.ns-ft-page{
  --curl:0;
  position:relative;
  overflow:hidden;
  width:34px;height:40px;
  border:1px solid var(--border);border-radius:4px;
  background:var(--background);
  color:var(--ns-muted);
  font-family:var(--font-geist-mono, ui-monospace, monospace);
  font-size:13px;
  cursor:pointer;
  transform:translateY(0);
  box-shadow:none;
  transition:color 150ms ease, transform 200ms cubic-bezier(0.16,1,0.3,1), box-shadow 200ms ease, border-color 150ms ease;
}
.ns-ft-page:hover{color:var(--foreground);border-color:var(--ns-muted);}
.ns-ft-page:focus-visible{outline:2px solid var(--ns-accent);outline-offset:1px;}
.ns-ft-page[data-current]{
  color:var(--foreground);
  transform:translateY(-1px);
  box-shadow:0 2px 4px -1px rgba(0,0,0,0.35);
  border-color:var(--foreground);
}
.ns-ft-page[data-turning]{
  transition:transform ${g}ms cubic-bezier(0.55,0,0.85,0.35), opacity ${g}ms ease;
  transform:translateY(-1px) rotateZ(-3deg) translateX(-2px);
  opacity:0.75;
}

.ns-ft-num{position:relative;z-index:1;}
.ns-ft-peek{
  position:absolute;
  top:3px;right:3px;
  font-size:9px;
  color:var(--ns-muted);
  opacity:0;
  transition:opacity 200ms ease;
  z-index:1;
}
.ns-ft-page[data-peek] .ns-ft-peek{opacity:1;}

.ns-ft-curl{
  position:absolute;
  top:0;right:0;
  width:0;height:0;
  border-style:solid;
  border-color:transparent var(--border) transparent transparent;
  border-width:0 calc(var(--curl) * 16px) calc(var(--curl) * 16px) 0;
  transition:border-width 220ms cubic-bezier(0.22,1,0.36,1);
}

.ns-ft-crease{
  position:absolute;
  bottom:0;right:0;
  width:0;height:0;
  border-style:solid;
  border-width:0 0 7px 7px;
  border-color:transparent transparent var(--border) transparent;
}

@media (prefers-reduced-motion: reduce){
  .ns-ft-page,.ns-ft-curl,.ns-ft-peek{transition:none !important;}
}
`;function M(){return n.jsx("div",{className:"ns-stage",children:n.jsx(I,{page:0,count:42,onChange:()=>{}})})}export{M as default};
