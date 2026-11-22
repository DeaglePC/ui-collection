import{r as s,j as e}from"./client-CsvIHAk3.js";const R=260;function F(n){return typeof n=="number"?n:n.getTime()}function G(n){const o=n.trim().split(/\s+/).filter(Boolean);return o.length===0?"?":o.length===1?o[0].slice(0,2).toUpperCase():(o[0][0]+o[o.length-1][0]).toUpperCase()}function J(){const[n,o]=s.useState(!1);return s.useEffect(()=>{const l=window.matchMedia("(prefers-reduced-motion: reduce)");o(l.matches);const i=()=>o(l.matches);return l.addEventListener("change",i),()=>l.removeEventListener("change",i)},[]),n}function K({ts:n}){const o=new Date(n).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit",second:"2-digit"});return e.jsx("span",{suppressHydrationWarning:!0,children:o})}function V({approvers:n,initialSignatures:o,quorum:l,currentApproverId:i,docLabel:y="Routing slip",onSign:E,onPublish:O,className:z=""}){const N=s.useId().replace(/:/g,""),A=`rs-caption-${N}`,k=`rs-reason-${N}`,D=J(),[b,q]=s.useState(()=>(o??[]).map(t=>({approverId:t.approverId,at:F(t.at)}))),[d,H]=s.useState(!1),[X,S]=s.useState(null),[L,M]=s.useState(""),v=s.useRef(void 0),$=s.useRef(b.length),P=s.useRef(!1);s.useEffect(()=>()=>clearTimeout(v.current),[]);const j=s.useMemo(()=>{const t=n.length||1;return Math.min(t,Math.max(1,l??t))},[l,n.length]),u=s.useMemo(()=>{const t=new Map;for(const r of b)t.set(r.approverId,r.at);return t},[b]),Q=s.useMemo(()=>{const t=new Array(n.length).fill(!1);for(let r=0;r<n.length;r++){const m=u.get(n[r].id);if(m!==void 0)for(let a=0;a<r;a++){const h=u.get(n[a].id);if(h===void 0||h>m){t[r]=!0;break}}}return t},[n,u]),w=s.useMemo(()=>n.findIndex(t=>!u.has(t.id)),[n,u]),x=w>=0?n[w]:null,c=b.length,p=c>=j,f=n.length;s.useEffect(()=>{if(c>$.current){const t=x?`${c} of ${f} signed; waiting on ${x.role}.`:`${c} of ${f} signed; all signed.`;M(p?`${t} Publish unlocked.`:t)}$.current=c},[c,f,x,p]),s.useEffect(()=>{d&&!P.current&&M("Published."),P.current=d},[d]);function U(){if(!i||d||u.has(i))return;const t=Date.now();q(r=>[...r,{approverId:i,at:t}]),E?.(i,t),D||(S(i),clearTimeout(v.current),v.current=setTimeout(()=>S(null),R))}function W(){d||!p||(H(!0),O?.())}const T=Math.max(0,j-c);let g;d?g="Published.":p?g="Quorum met — ready to publish.":x?g=`Publish disabled — needs ${T} more signature${T===1?"":"s"}, waiting on ${x.role}.`:g="Publish disabled — awaiting signatures.";const I=!p||d;return e.jsxs("div",{className:`w-full max-w-xl rounded-md border border-border bg-background ${z}`,children:[e.jsx("style",{children:Y}),e.jsx("span",{role:"status","aria-live":"polite","aria-atomic":"true",className:"sr-only",children:L}),e.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-border px-4 py-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-medium text-foreground",children:y}),e.jsxs("p",{className:"font-mono text-[11px] text-ns-muted",children:["Quorum ",j," of ",f]})]}),e.jsxs("p",{className:"shrink-0 font-mono text-xs tabular-nums text-ns-muted",children:[c," of ",f," signed"]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse text-sm",children:[e.jsxs("caption",{id:A,className:"sr-only",children:["Approver routing slip for ",y,", in routed order"]}),e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{scope:"col",className:"px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wide text-ns-muted",children:"Approver"}),e.jsx("th",{scope:"col",className:"px-3 py-2 text-left font-mono text-[10px] uppercase tracking-wide text-ns-muted",children:"Role"}),e.jsx("th",{scope:"col",className:"px-3 py-2 text-left font-mono text-[10px] uppercase tracking-wide text-ns-muted",children:"Status"}),e.jsx("th",{scope:"col",className:"px-4 py-2 text-right font-mono text-[10px] uppercase tracking-wide text-ns-muted",children:"Time"})]})}),e.jsx("tbody",{children:n.map((t,r)=>{const m=u.get(t.id),a=m!==void 0,h=!a&&r===w,C=a&&Q[r],B=t.id===i&&!a&&!d,_=X===t.id;return e.jsxs("tr",{className:"border-b border-border last:border-b-0",children:[e.jsxs("td",{className:"px-4 py-3 align-top",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"text-foreground",children:t.name}),e.jsx("span",{"aria-hidden":"true",className:"ns-rs-box","data-signed":a||void 0,"data-out-of-turn":C||void 0,"data-arriving":_||void 0,children:a?G(t.name):null})]}),C&&e.jsx("p",{"data-slip-out-of-turn":!0,className:"mt-1 font-mono text-[10px] uppercase tracking-wide text-ns-muted",children:"out of turn"})]}),e.jsx("td",{className:"px-3 py-3 align-top text-ns-muted",children:t.role}),e.jsx("td",{className:"px-3 py-3 align-top",children:a?e.jsx("span",{className:"font-mono text-xs text-foreground",children:"Signed"}):B?e.jsxs("button",{type:"button","data-slip-sign":!0,onClick:U,className:"ns-rs-btn",children:["Sign as ",t.name]}):h?e.jsx("span",{className:"ns-rs-now",children:"Now"}):e.jsx("span",{className:"font-mono text-xs text-ns-muted",children:"Awaiting"})}),e.jsx("td",{className:"px-4 py-3 align-top text-right",children:a?e.jsx("time",{dateTime:new Date(m).toISOString(),suppressHydrationWarning:!0,className:"font-mono text-xs tabular-nums text-ns-muted",children:e.jsx(K,{ts:m})}):e.jsx("span",{"aria-hidden":"true",className:"font-mono text-xs text-ns-muted",children:"—"})})]},t.id)})})]})}),e.jsxs("div",{className:"border-t border-border px-4 py-3",children:[e.jsx("button",{type:"button","data-slip-publish":!0,"aria-disabled":I,"aria-describedby":k,"data-disabled":I||void 0,onClick:W,className:"ns-rs-btn w-full py-2 text-xs uppercase tracking-wide",children:d?"Published":"Publish"}),e.jsx("p",{id:k,className:"mt-2 font-mono text-[11px] text-ns-muted",children:g})]})]})}const Y=`
.ns-rs-box{
  position: relative;
  display: inline-flex;
  min-width: 42px;
  height: 26px;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  border: 1px dashed var(--border);
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--foreground);
  transform-origin: center;
}
.ns-rs-box[data-signed]{
  border-style: solid;
  border-color: var(--foreground);
  transform: rotate(3deg);
}
.ns-rs-box[data-out-of-turn]{
  transform: rotate(2deg) skewX(8deg);
}
.ns-rs-box[data-arriving]{
  animation: ns-rs-chop-in ${R}ms cubic-bezier(0.16,1,0.3,1) both;
}
.ns-rs-box[data-arriving][data-out-of-turn]{
  animation-name: ns-rs-chop-in-skew;
}
@keyframes ns-rs-chop-in{
  from{ transform: scale(1.15) rotate(0deg); opacity: 0.45; }
  to{ transform: scale(1) rotate(3deg); opacity: 1; }
}
@keyframes ns-rs-chop-in-skew{
  from{ transform: scale(1.15) rotate(0deg) skewX(0deg); opacity: 0.45; }
  to{ transform: scale(1) rotate(2deg) skewX(8deg); opacity: 1; }
}

.ns-rs-now{
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--foreground);
  padding-bottom: 3px;
  background-image: repeating-linear-gradient(90deg, var(--foreground) 0 5px, transparent 5px 10px);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 20px 1px;
  animation: ns-rs-crawl 900ms linear infinite;
}
@keyframes ns-rs-crawl{
  to{ background-position: -20px 100%; }
}

.ns-rs-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 10px;
  cursor: pointer;
  transition: background-color 150ms ease-out, border-color 150ms ease-out;
}
.ns-rs-btn:hover{
  border-color: var(--ns-accent);
  background: color-mix(in srgb, var(--ns-accent) 10%, var(--background));
}
.ns-rs-btn:active{
  background: color-mix(in srgb, var(--ns-accent) 18%, var(--background));
}
.ns-rs-btn:focus-visible{
  outline: 2px solid var(--ns-accent);
  outline-offset: 2px;
}
.ns-rs-btn[data-disabled="true"]{
  color: var(--ns-muted);
  cursor: not-allowed;
}
.ns-rs-btn[data-disabled="true"]:hover,
.ns-rs-btn[data-disabled="true"]:active{
  border-color: var(--border);
  background: var(--background);
}
.ns-rs-btn[data-disabled="true"]:focus-visible{
  outline: 2px solid var(--foreground);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce){
  .ns-rs-box[data-arriving]{ animation: none; }
  .ns-rs-now{ animation: none; }
  .ns-rs-btn{ transition: none; }
}
`;function ee(){return e.jsx("div",{className:"ns-stage",children:e.jsx(V,{approvers:[{id:"a",name:"示例",role:"示例"},{id:"b",name:"第二项",role:"第二项"}],initialSignatures:[{approverId:"示例",at:42},{approverId:"第二项",at:18}],quorum:42,currentApproverId:"示例",onSign:()=>{},onPublish:()=>{}})})}export{ee as default};
