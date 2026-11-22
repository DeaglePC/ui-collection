import{r as n,j as e}from"./client-CsvIHAk3.js";const te=6,se=.3,U=280,re=.95,ne=2*re*Math.sqrt(U),oe=.002,ie=.01,ae=900,B=60,P="ns-pr-strike",ce='button, [href], input, [tabindex]:not([tabindex="-1"])';function X(r,s,i){return r<s?s:r>i?i:r}function q(r){const s=r.trim();return s===""?[]:s.split(/\s+/)}function le(r,s){const i=r.length,d=s.length,o=new Array(d+1);for(let l=0;l<=d;l++)o[l]=l;for(let l=1;l<=i;l++){let h=o[0];o[0]=l;for(let a=1;a<=d;a++){const m=o[a];o[a]=r[l-1]===s[a-1]?h:1+Math.min(h,o[a],o[a-1]),h=m}}return o[d]}function de(r,s){return r==="kept"?`Resolved — kept your version, out of register with ${s} no longer.`:r==="theirs"?`Resolved — took ${s}'s version, plates back in register.`:`Resolved — merged with ${s}'s version, plates back in register.`}function z({ghost:r,dx:s,dy:i}){const d=r?10+s:10,o=r?10+i:10;return e.jsxs("g",{children:[e.jsx("line",{x1:d,y1:o-4,x2:d,y2:o+4,stroke:r?"var(--ns-muted)":"var(--foreground)",strokeWidth:1.1,strokeLinecap:"round"}),e.jsx("line",{x1:d-4,y1:o,x2:d+4,y2:o,stroke:r?"var(--ns-muted)":"var(--foreground)",strokeWidth:1.1,strokeLinecap:"round"})]})}function E({corner:r,dx:s,dy:i}){return e.jsxs("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",className:`ns-pr-mark ns-pr-mark-${r}`,children:[e.jsx(z,{ghost:!0,dx:s,dy:i}),e.jsx(z,{ghost:!1,dx:0,dy:0})]})}function ue({text:r,theirText:s,collaboratorName:i,onResolve:d,className:o=""}){const[l,h]=n.useState(r),{dist:a,dRaw:m}=n.useMemo(()=>{const t=q(l),f=q(s),u=le(t,f),p=Math.max(t.length,1);return{dist:u,dRaw:X(u/p,0,1)}},[l,s]),[b,M]=n.useState(()=>m>0?"conflict":"clear"),[V,j]=n.useState(0),[C,I]=n.useState(!1),[Z,Y]=n.useState(""),L=n.useRef(!1),_=n.useRef(0),F=n.useRef(null),R=n.useRef(null),A=n.useRef(null),T=n.useRef(null),$=n.useId(),K=n.useId(),G=b==="resolving"?V:b==="conflict"?m:0,S=b!=="clear",O=G*te,v=O,k=O*.4,H=G*se,J=`translate(${v.toFixed(2)}px, ${k.toFixed(2)}px) skewX(${H.toFixed(3)}deg)`,Q=n.useCallback(()=>{const t=R.current;!t||t.open||(I(!0),t.showModal())},[]),y=n.useCallback(t=>{I(!1),R.current?.close(),t&&A.current?.focus()},[]),N=n.useCallback(()=>{const t=F.current;t&&(t.classList.remove(P),t.offsetWidth,t.classList.add(P),window.setTimeout(()=>t.classList.remove(P),B)),document.activeElement===A.current&&t?.focus(),M("clear")},[]),D=n.useCallback(t=>{if(L.current)return;if(L.current=!0,h(t==="theirs"?s:r),Y(de(t,i)),d?.(t,{mine:r,theirs:s}),y(!1),window.matchMedia("(prefers-reduced-motion: reduce)").matches){j(0),M("resolving"),requestAnimationFrame(()=>N());return}_.current=m,j(m),M("resolving")},[r,s,i,d,y,m,N]);return n.useEffect(()=>{if(b!=="resolving"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let f=0,u=performance.now(),p=_.current,c=0;const g=u+ae,w=x=>{const W=Math.min((x-u)/1e3,.03333333333333333);u=x;const ee=-U*p-ne*c;if(c+=ee*W,p+=c*W,Math.abs(p)<oe&&Math.abs(c)<ie||x>=g){j(0),N();return}j(X(p,0,1)),f=requestAnimationFrame(w)};return f=requestAnimationFrame(w),()=>cancelAnimationFrame(f)},[b,N]),n.useEffect(()=>{if(!C)return;const t=R.current,f=c=>{if(c.key!=="Tab"||!t)return;const g=Array.from(t.querySelectorAll(ce));if(g.length===0)return;const w=g[0],x=g[g.length-1];c.shiftKey&&document.activeElement===w?(c.preventDefault(),x.focus()):!c.shiftKey&&document.activeElement===x&&(c.preventDefault(),w.focus())},u=c=>{c.preventDefault(),y(!0)},p=c=>{c.target===t&&y(!1)};return document.addEventListener("keydown",f),t?.addEventListener("cancel",u),t?.addEventListener("pointerdown",p),T.current?.focus(),()=>{document.removeEventListener("keydown",f),t?.removeEventListener("cancel",u),t?.removeEventListener("pointerdown",p)}},[C,y]),e.jsxs("div",{className:`relative ${o}`,children:[e.jsx("style",{children:fe}),e.jsxs("div",{ref:F,tabIndex:-1,className:"ns-pr-block relative rounded-md border border-border bg-background p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent","aria-describedby":S?$:void 0,children:[e.jsxs("div",{className:"ns-pr-stack",children:[e.jsx("p",{className:"ns-pr-mine m-0 text-sm leading-relaxed text-foreground",children:l}),S&&e.jsx("p",{"aria-hidden":"true",className:"ns-pr-ghost m-0 text-sm leading-relaxed",style:{transform:J,opacity:.35,color:"var(--ns-muted)"},children:s})]}),S&&e.jsxs(e.Fragment,{children:[e.jsx(E,{corner:"tl",dx:v,dy:k}),e.jsx(E,{corner:"tr",dx:v,dy:k}),e.jsx(E,{corner:"bl",dx:v,dy:k}),e.jsx(E,{corner:"br",dx:v,dy:k})]})]}),S&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{id:$,className:"sr-only",children:[i," has unsynced changes to this paragraph, ",a," word",a===1?"":"s"," differ."]}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("button",{ref:A,type:"button","data-pr-review":!0,onClick:Q,className:"ns-pr-review inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-ns-accent hover:text-ns-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent",children:"Review changes"}),e.jsxs("span",{"aria-hidden":"true",className:"font-mono text-[11px] text-ns-muted",children:[i," · ",a," word",a===1?"":"s"]})]})]}),e.jsx("p",{role:"status","aria-live":"polite",className:"sr-only",children:Z}),e.jsxs("dialog",{ref:R,role:"dialog","aria-modal":"true","aria-labelledby":K,className:"ns-pr-dialog",children:[e.jsxs("h2",{id:K,className:"m-0 text-sm font-medium text-foreground",children:["Unsynced changes from ",i]}),e.jsxs("p",{className:"mb-0 mt-1.5 text-xs leading-relaxed text-ns-muted",children:[a," word",a===1?"":"s"," differ from your version of this paragraph."]}),e.jsx("div",{className:"mt-4 rounded-sm border border-border bg-background p-2.5 font-mono text-xs leading-relaxed text-ns-muted",children:s}),e.jsxs("div",{className:"mt-4 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>D("merged"),className:"ns-pr-btn rounded-sm border border-border bg-background px-3 py-1.5 text-xs text-foreground transition-colors hover:border-ns-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent",children:"Merge"}),e.jsx("button",{type:"button",onClick:()=>D("theirs"),className:"ns-pr-btn rounded-sm border border-border bg-background px-3 py-1.5 text-xs text-foreground transition-colors hover:border-ns-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent",children:"Take theirs"}),e.jsx("button",{ref:T,type:"button",onClick:()=>D("kept"),className:"ns-pr-btn rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-ns-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent",children:"Keep mine"})]})]})]})}const fe=`
.ns-pr-stack{display:grid;}
.ns-pr-stack > *{grid-area:1/1;}
/* the reader's own text stays the top plate; the ghost is unpositioned
   (static) and painted first in DOM order, so without this it would
   composite OVER the real text instead of behind it. */
.ns-pr-mine{position:relative;z-index:1;}
.ns-pr-ghost{pointer-events:none;will-change:transform;}
.ns-pr-mark{position:absolute;pointer-events:none;overflow:visible;}
.ns-pr-mark-tl{top:-10px;left:-10px;}
.ns-pr-mark-tr{top:-10px;right:-10px;}
.ns-pr-mark-bl{bottom:-10px;left:-10px;}
.ns-pr-mark-br{bottom:-10px;right:-10px;}

@keyframes ns-pr-strike{
  0%{filter:contrast(1) brightness(1);}
  40%{filter:contrast(1.2) brightness(1.06);}
  100%{filter:contrast(1) brightness(1);}
}
/* Deliberately NOT gated behind prefers-reduced-motion: this is the single
   60ms acknowledgement frame the spec calls out as the reduced-motion
   resolution itself ("resolves with the strike frame alone") — a filter
   flash on existing pixels, not a translate/scale motion. */
.ns-pr-strike{animation:ns-pr-strike ${B}ms ease-out;}

dialog.ns-pr-dialog{
  /* A host that resets margin to 0 on every element (Tailwind preflight,
     most CSS resets) kills the UA stylesheet's own <dialog> centering,
     which depends on margin:auto with an implicit inset. Pin position and
     centering explicitly instead of relying on that default. */
  position:fixed;
  top:50%;
  left:50%;
  margin:0;
  transform:translate(-50%, -50%) scale(0.96);
  border:1px solid var(--border);
  border-radius:12px;
  background:var(--background);
  color:var(--foreground);
  padding:16px;
  width:min(26rem, calc(100vw - 2rem));
  opacity:0;
  transition:opacity 180ms cubic-bezier(0.16,1,0.3,1), transform 180ms cubic-bezier(0.16,1,0.3,1), overlay 180ms allow-discrete, display 180ms allow-discrete;
}
dialog.ns-pr-dialog[open]{
  opacity:1;
  transform:translate(-50%, -50%) scale(1);
}
@starting-style{
  dialog.ns-pr-dialog[open]{
    opacity:0;
    transform:translate(-50%, -50%) scale(0.96);
  }
}
/* Never a hardcoded grey: the scrim is a translucent wash of --background
   itself (not --foreground), so it reads as a soft dim of the page in
   whichever theme is active rather than a flat mid-grey overlay, with a
   blur for the "more smooth" ask instead of a harder darkening trick. */
dialog.ns-pr-dialog::backdrop{
  background:color-mix(in srgb, var(--background) 55%, transparent);
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
  opacity:0;
  transition:opacity 180ms cubic-bezier(0.16,1,0.3,1), display 180ms allow-discrete, overlay 180ms allow-discrete;
}
dialog.ns-pr-dialog[open]::backdrop{
  opacity:1;
}
@starting-style{
  dialog.ns-pr-dialog[open]::backdrop{
    opacity:0;
  }
}
@media (prefers-reduced-motion: reduce){
  dialog.ns-pr-dialog{
    transition:opacity 120ms linear;
    transform:translate(-50%, -50%);
  }
  dialog.ns-pr-dialog[open]{
    transform:translate(-50%, -50%);
  }
  @starting-style{
    dialog.ns-pr-dialog[open]{
      transform:translate(-50%, -50%);
    }
  }
  dialog.ns-pr-dialog::backdrop{
    transition:opacity 120ms linear;
  }
}
`;function ge(){return e.jsx("div",{className:"ns-stage",children:e.jsx(ue,{text:"这是一段用来预览排版的示例文字。",theirText:"示例",collaboratorName:"2026-11-15T09:00:00.000Z",onResolve:()=>{}})})}export{ge as default};
