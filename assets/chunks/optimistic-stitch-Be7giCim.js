import{j as e}from"./client-CsvIHAk3.js";const o={pending:"Saving",committed:"Saved",failed:"Failed to save. Retry available."};function i({status:s,onRetry:t,children:a,itemLabel:r="change",className:n=""}){return e.jsxs("div",{className:`relative ${n}`,"data-status":s,children:[e.jsxs("div",{className:"ns-baste-scale relative flex items-stretch",children:[e.jsx("svg",{className:"ns-baste-seam absolute inset-y-0 left-0 w-2.5","aria-hidden":"true",focusable:"false",children:e.jsx("line",{className:"ns-baste-seam-line",x1:"5",y1:"0",x2:"5",y2:"100%"})}),e.jsxs("div",{className:"flex min-w-0 flex-1 items-center gap-3 py-2.5 pr-3 pl-4",children:[e.jsx("div",{className:"ns-baste-row-content min-w-0 flex-1",children:a}),s==="failed"&&e.jsxs("button",{type:"button",onClick:t,className:"ns-baste-retry shrink-0 rounded-sm border border-border px-2.5 py-1 font-mono text-[11px] whitespace-nowrap text-foreground transition-colors duration-150 hover:border-ns-muted hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent",children:["Retry ",r]})]})]}),e.jsx("span",{className:"sr-only","aria-live":"polite","aria-atomic":"true",children:o[s]}),e.jsx("style",{children:c})]})}const c=`
.ns-baste-scale{
  transform-origin:left center;
  transform:scaleX(1);
  transition:transform 360ms cubic-bezier(.34,1.56,.64,1);
}
.ns-baste-seam{ overflow:visible; pointer-events:none; }
.ns-baste-seam-line{
  stroke:var(--border);
  stroke-width:2;
  stroke-linecap:round;
  fill:none;
  stroke-dasharray:3 2 4 2 2 3;
  stroke-dashoffset:0;
  transition:
    stroke-dasharray 300ms cubic-bezier(.16,1,.3,1),
    stroke-dashoffset 300ms cubic-bezier(.16,1,.3,1),
    stroke 300ms cubic-bezier(.16,1,.3,1);
}
.ns-baste-row-content{
  opacity:1;
  transition:opacity 220ms ease-out;
}

[data-status="pending"] .ns-baste-scale{ transform:scaleX(0.995); }

[data-status="committed"] .ns-baste-scale{ transform:scaleX(1); }
[data-status="committed"] .ns-baste-seam-line{
  stroke:var(--border);
  stroke-dasharray:1000 0 1000 0 1000 0;
  stroke-dashoffset:0;
}

[data-status="failed"] .ns-baste-scale{ transform:scaleX(1); }
[data-status="failed"] .ns-baste-seam-line{
  stroke:var(--ns-muted);
  stroke-dasharray:2 7 1 9 2 6;
  stroke-dashoffset:18;
  transition:
    stroke-dasharray 160ms cubic-bezier(.55,0,1,.45),
    stroke-dashoffset 160ms cubic-bezier(.55,0,1,.45),
    stroke 260ms ease-out;
}
[data-status="failed"] .ns-baste-row-content{ opacity:.55; }

@media (prefers-reduced-motion: reduce){
  .ns-baste-scale, .ns-baste-seam-line, .ns-baste-row-content{
    transition:none;
  }
}
`;function d(){return e.jsx("div",{className:"ns-stage",children:e.jsx(i,{status:"pending",onRetry:()=>{},children:"示例"})})}export{d as default};
