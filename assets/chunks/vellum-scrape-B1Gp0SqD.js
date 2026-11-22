import{r as o,j as r}from"./client-CsvIHAk3.js";const x="cubic-bezier(0.16, 1, 0.3, 1)";function F(a){const i=new Map;for(const n of a){const l=i.get(n.paragraph)??[];l.push(n),i.set(n.paragraph,l)}return Array.from(i.keys()).sort((n,l)=>n-l).map(n=>i.get(n))}function E({versions:a=O,runs:i=U,depth:n,defaultDepth:l=0,onDepthChange:b,onRestore:w,label:y="Scrape depth",className:k=""}){const[j,A]=o.useState(l),c=n??j,[f,m]=o.useState(null),[N,$]=o.useState(new Set),[S,M]=o.useState(""),R=o.useRef(null),D=o.useMemo(()=>F(i),[i]),p=Math.max(0,a.length-1),v=a[c]??a[a.length-1],h=a.length-c,P=v?`Version ${h} of ${a.length}, saved by ${v.author}, ${v.savedAt}`:`Version ${h} of ${a.length}`,z=o.useCallback(t=>{const s=Math.min(p,Math.max(0,t));b?.(s),n===void 0&&A(s);const e=new Set;for(const g of i)g.revealedAt!==void 0&&s>=g.revealedAt&&e.add(g.paragraph);const d=e.size,u=a[s]??a[a.length-1];M(`Showing version ${a.length-s} of ${a.length}`+(u?`, saved by ${u.author}`:"")+`: ${d} paragraph${d===1?"":"s"} differ.`)},[p,b,n,i,a]),C=t=>{z(t.target.valueAsNumber)},B=t=>m(t),I=()=>m(null),T=t=>{$(s=>{const e=new Set(s);return e.add(t),e}),m(null),w?.(t)};return r.jsxs("div",{className:`flex items-stretch gap-5 ${k}`,children:[r.jsx("style",{children:V}),r.jsxs("div",{className:"ns-vellum-rail relative w-8 shrink-0","data-vellum-rail":"",children:[r.jsx("div",{className:"ns-vellum-ticks pointer-events-none absolute inset-y-1 left-1/2 flex -translate-x-1/2 flex-col justify-between",children:a.map((t,s)=>r.jsx("span",{className:"ns-vellum-tick","data-crossed":s<=c||void 0},t.id))}),r.jsx("input",{ref:R,type:"range",min:0,max:p,step:1,value:c,onChange:C,"aria-label":y,"aria-valuetext":P,className:"ns-vellum-range"})]}),r.jsxs("div",{className:"min-w-0 flex-1",children:[r.jsx("p",{"aria-live":"polite",className:"mb-3 font-mono text-[11px] tabular-nums text-ns-muted",children:S||`Showing version ${h} of ${a.length}.`}),r.jsx("div",{className:"ns-vellum-doc space-y-4 text-sm leading-relaxed text-foreground",style:{"--scrape-depth":c},children:D.map((t,s)=>r.jsx("p",{children:t.map(e=>{if(!e.ghost||e.revealedAt===void 0)return r.jsx("span",{children:e.current},e.id);const d=N.has(e.id),u=d||c>=e.revealedAt;return r.jsxs("span",{className:"ns-vellum-run","data-restored":d||void 0,style:{"--rd":e.revealedAt},children:[r.jsx("span",{className:"ns-vellum-run-current",children:e.current}),u&&r.jsxs("span",{className:"ns-vellum-ghost-wrap",children:[r.jsxs("span",{className:"ns-vellum-run-fade",children:[r.jsx("span",{className:"ns-vellum-badge","aria-hidden":"true",children:e.overwrittenBy}),r.jsx("span",{children:e.ghost})]}),!d&&(f===e.id?r.jsxs("span",{className:"ns-vellum-confirm",role:"group","aria-label":`Confirm restoring the text ${e.overwrittenBy} overwrote here`,children:[r.jsx("button",{type:"button","data-restore-confirm":"",onClick:()=>T(e.id),className:"ns-vellum-btn ns-vellum-btn-accent",children:"Restore"}),r.jsx("button",{type:"button",onClick:I,className:"ns-vellum-btn",children:"Cancel"})]}):r.jsx("button",{type:"button","data-restore-trigger":"","aria-expanded":f===e.id,"aria-label":`Restore the text ${e.overwrittenBy} overwrote here`,onClick:()=>B(e.id),className:"ns-vellum-btn",children:"Restore"}))]})]},e.id)})},s))})]})]})}const O=[{id:"v9",author:"Dan Okafor",initial:"D",savedAt:"Today 09:14"},{id:"v8",author:"Priya Nair",initial:"P",savedAt:"Yesterday 17:40"},{id:"v7",author:"Priya Nair",initial:"P",savedAt:"Yesterday 11:02"},{id:"v6",author:"Mo Farouk",initial:"M",savedAt:"Tue 16:20"},{id:"v5",author:"Dan Okafor",initial:"D",savedAt:"Tue 09:55"},{id:"v4",author:"Mo Farouk",initial:"M",savedAt:"Mon 14:02"},{id:"v3",author:"Dan Okafor",initial:"D",savedAt:"Mon 08:30"},{id:"v2",author:"Priya Nair",initial:"P",savedAt:"Fri 15:11"},{id:"v1",author:"Mo Farouk",initial:"M",savedAt:"Fri 09:00"}],U=[{id:"r1",paragraph:0,current:"The onboarding flow should "},{id:"r2",paragraph:0,current:"greet returning users by first name and ",ghost:"show a generic welcome banner and ",revealedAt:0,overwrittenBy:"D"},{id:"r3",paragraph:0,current:"skip the tutorial for anyone who has completed it before."},{id:"r4",paragraph:1,current:"Rate limiting: "},{id:"r5",paragraph:1,current:"120 requests per minute per API key, ",ghost:"60 requests per minute per API key, ",revealedAt:2,overwrittenBy:"P"},{id:"r6",paragraph:1,current:"with a "},{id:"r7",paragraph:1,current:"soft warning at 80%",ghost:"hard cutoff with no warning",revealedAt:5,overwrittenBy:"M"},{id:"r8",paragraph:1,current:" of the limit."},{id:"r9",paragraph:2,current:"Refunds process "},{id:"r10",paragraph:2,current:"automatically within 24 hours",ghost:"manually, reviewed by support",revealedAt:6,overwrittenBy:"D"},{id:"r11",paragraph:2,current:" of the cancellation request."}],V=`
.ns-vellum-rail{ height: 15rem; }
.ns-vellum-ticks{ z-index: 0; }
.ns-vellum-tick{
  width: 10px;
  height: 1px;
  background: var(--border);
  transition: background-color 200ms ease, height 200ms ease;
}
.ns-vellum-tick[data-crossed]{
  height: 2px;
  background: var(--foreground);
}

.ns-vellum-range{
  position: relative;
  z-index: 1;
  writing-mode: vertical-lr;
  width: 8px;
  height: 100%;
  margin: 0 auto;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;
  border-radius: 999px;
}
.ns-vellum-range:focus-visible{
  outline: 2px solid var(--ns-accent);
  outline-offset: 3px;
  border-radius: 6px;
}
.ns-vellum-range::-webkit-slider-runnable-track{
  width: 2px;
  background: transparent;
}
.ns-vellum-range::-moz-range-track{
  width: 2px;
  background: transparent;
}
.ns-vellum-range::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: var(--background);
  border: 2px solid var(--foreground);
  margin-left: -6px;
}
.ns-vellum-range::-moz-range-thumb{
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: var(--background);
  border: 2px solid var(--foreground);
}
.ns-vellum-range:hover::-webkit-slider-thumb,
.ns-vellum-range:focus-visible::-webkit-slider-thumb,
.ns-vellum-range:active::-webkit-slider-thumb{
  border-color: var(--ns-accent);
}
.ns-vellum-range:hover::-moz-range-thumb,
.ns-vellum-range:focus-visible::-moz-range-thumb,
.ns-vellum-range:active::-moz-range-thumb{
  border-color: var(--ns-accent);
}

.ns-vellum-run{
  --show: clamp(0, calc(var(--scrape-depth, 0) - var(--rd, 0) + 1), 1);
}

.ns-vellum-run-current{
  color: color-mix(in srgb, var(--foreground) calc(100% - var(--show) * 65%), var(--ns-muted) calc(var(--show) * 65%));
  opacity: calc(1 - var(--show) * 0.65);
  transition: opacity 420ms ease, color 420ms ease;
}
.ns-vellum-run[data-restored]  .ns-vellum-run-current{
  opacity: 0;
  transition-duration: 500ms;
  transition-timing-function: ${x};
}

.ns-vellum-run-fade{
  color: var(--foreground);
  opacity: calc(var(--show) * 0.6);
  filter: blur(calc(var(--show) * 0.5px));
  transition: opacity 420ms ease, filter 420ms ease;
}
@starting-style{
  .ns-vellum-run-fade{ opacity: 0; filter: blur(0px); }
}
.ns-vellum-run[data-restored] .ns-vellum-run-fade{
  opacity: 1;
  filter: blur(0px);
  transition-duration: 500ms;
  transition-timing-function: ${x};
}
.ns-vellum-run[data-restored] .ns-vellum-badge{ display: none; }

.ns-vellum-badge{
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.04em;
  padding: 0 3px;
  margin-right: 3px;
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--ns-muted);
  vertical-align: 1px;
}

.ns-vellum-btn{
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  padding: 1px 7px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.02em;
  color: var(--ns-muted);
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease;
}
.ns-vellum-btn:hover,
.ns-vellum-btn:focus-visible{
  color: var(--ns-accent);
  border-color: var(--ns-accent);
}
.ns-vellum-btn:focus-visible{
  outline: 2px solid var(--ns-accent);
  outline-offset: 2px;
}
.ns-vellum-btn-accent{
  color: var(--ns-accent);
  border-color: var(--ns-accent);
}

.ns-vellum-confirm{ display: inline-flex; align-items: center; }

@media (prefers-reduced-motion: reduce){
  .ns-vellum-run-current,
  .ns-vellum-run-fade,
  .ns-vellum-tick{
    transition: none !important;
  }
}
`;function _(){return r.jsx("div",{className:"ns-stage",children:r.jsx(E,{depth:42,onDepthChange:()=>{},onRestore:()=>{}})})}export{_ as default};
