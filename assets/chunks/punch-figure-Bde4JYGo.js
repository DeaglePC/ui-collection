import{r as s,j as e}from"./client-CsvIHAk3.js";const B={0:[".###.","#...#","#..##","#.#.#","##..#","#...#",".###."],1:["..#..",".##..","..#..","..#..","..#..","..#..",".###."],2:[".###.","#...#","....#","...#.","..#..",".#...","#####"],3:[".###.","#...#","....#","..##.","....#","#...#",".###."],4:["...#.","..##.",".#.#.","#..#.","#####","...#.","...#."],5:["#####","#....","####.","....#","....#","#...#",".###."],6:["..##.",".#...","#....","####.","#...#","#...#",".###."],7:["#####","....#","...#.","..#..",".#...",".#...",".#..."],8:[".###.","#...#","#...#",".###.","#...#","#...#",".###."],9:[".###.","#...#","#...#",".####","....#","...#.",".##.."],$:["..#..",".####","#.#..",".###.","..#.#","####.","..#.."],",":[".....",".....",".....",".....","..##.","..#..",".#..."],".":[".....",".....",".....",".....",".....",".##..",".##.."],V:["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],O:[".###.","#...#","#...#","#...#","#...#","#...#",".###."],I:["#####","..#..","..#..","..#..","..#..","..#..","#####"],D:["####.","#...#","#...#","#...#","#...#","#...#","####."]},F=[".....",".....",".....",".....",".....",".....","....."],M=60,G=4e3,H=5,K=1.1,q=7,z=2;function S(a){const i=[[],[],[],[],[],[],[]],r=[...a];return r.forEach((d,c)=>{const l=B[d]??F;for(let o=0;o<7;o++)for(let u=0;u<5;u++)i[o].push(l[o][u]==="#");if(c<r.length-1)for(let o=0;o<7;o++)i[o].push(!1)}),{rows:i,cols:i[0]?.length??0}}function W(a,i){const r=Math.abs(a).toFixed(2),[d,c]=r.split("."),l=d.replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${a<0?"-":""}${i}${l}.${c}`}function L({layout:a,headCol:i,cell:r,gap:d}){const c=[],l=Math.min(i,a.cols-1);for(let o=0;o<7;o++){const u=a.rows[o];for(let f=0;f<=l;f++)u[f]&&c.push(e.jsx("span",{className:"ns-pf-hole",style:{gridColumn:f+1,gridRow:o+1}},`${o}-${f}`))}return e.jsx("div",{className:"ns-pf-grid",style:{gridTemplateColumns:`repeat(${a.cols}, ${r}px)`,gridTemplateRows:`repeat(7, ${r}px)`,gap:`${d}px`,width:a.cols*r+Math.max(0,a.cols-1)*d,height:7*r+6*d},children:c})}function J({amount:a=1180,currency:i="$",invoiceId:r="INV-2041",label:d="Invoice",onIssue:c,onVoid:l,className:o=""}){const u=s.useId().replace(/:/g,""),f=s.useRef(null),v=s.useRef(!1),y=s.useRef(void 0),$=s.useRef(c);$.current=c;const N=s.useRef(l);N.current=l;const[t,m]=s.useState("unissued"),[V,C]=s.useState(-1),[A,R]=s.useState(-1),[g,I]=s.useState(!1),[T,j]=s.useState(""),x=s.useMemo(()=>W(a,i),[a,i]),p=s.useMemo(()=>S(x),[x]),b=s.useMemo(()=>S("VOID"),[]);s.useLayoutEffect(()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)");v.current=n.matches,n.matches&&(C(p.cols-1),m("issued"));const h=()=>{v.current=n.matches};return n.addEventListener("change",h),()=>n.removeEventListener("change",h)},[]),s.useEffect(()=>()=>clearTimeout(y.current),[]);const w=s.useCallback(()=>{const n=f.current;!n||v.current||(n.classList.remove("ns-pf-flinch"),n.offsetWidth,n.classList.add("ns-pf-flinch"))},[]);s.useEffect(()=>{if(t!=="issuing")return;let n=-1;const h=setInterval(()=>{n+=1,C(n),w(),n>=p.cols-1&&(clearInterval(h),m("issued"),j(`Invoice ${r} issued for ${x}.`),$.current?.())},M);return()=>clearInterval(h)},[t,p.cols,w,r,x]),s.useEffect(()=>{if(t!=="voiding")return;let n=-1;const h=setInterval(()=>{n+=1,R(n),w(),n>=b.cols-1&&(clearInterval(h),m("voided"),j(`Invoice ${r} voided.`),N.current?.())},M);return()=>clearInterval(h)},[t,b.cols,w,r]);const D=s.useCallback(()=>{if(t==="unissued"){if(v.current){C(p.cols-1),m("issued"),j(`Invoice ${r} issued for ${x}.`),$.current?.();return}m("issuing")}},[t,p.cols,r,x]),k=s.useCallback(()=>{clearTimeout(y.current),I(!1)},[]),O=s.useCallback(()=>{if(t==="issued"){if(!g){I(!0),y.current=setTimeout(()=>I(!1),G);return}if(k(),v.current){R(b.cols-1),m("voided"),j(`Invoice ${r} voided.`),N.current?.();return}m("voiding")}},[t,g,k,b.cols,r]),P=s.useCallback(n=>{n.key==="Escape"&&g&&(n.preventDefault(),k())},[g,k]),E=p.cols>1?Math.max(0,Math.min(1,(V+1)/p.cols)):0,Y={unissued:"Not yet issued",issuing:"Issuing…",issued:"Issued",voiding:"Voiding…",voided:"Void"},_=t==="voided"?" — VOID, does not settle.":t==="unissued"||t==="issuing"?" (draft, not yet issued)":"";return e.jsxs("div",{className:`ns-pf-root w-full max-w-sm ${o}`,children:[e.jsx("style",{children:Q}),e.jsx("span",{role:"status","aria-live":"polite","aria-atomic":"true",className:"sr-only",children:T}),e.jsxs("div",{ref:f,className:`ns-pf-sheet relative overflow-hidden rounded-[16px] border border-border p-5 ${t!=="unissued"?"ns-pf-active":""}`,"aria-hidden":"true",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[e.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.22em] text-ns-muted",children:d}),e.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.15em] text-ns-muted",children:r})]}),e.jsxs("div",{className:"ns-pf-mech relative mt-4",children:[e.jsx(L,{layout:p,headCol:V,cell:H,gap:K}),(t==="voiding"||t==="voided")&&e.jsx("div",{className:"ns-pf-void-layer absolute left-1/2 top-1/2",style:{transform:"translate(-50%, -50%) rotate(-14deg)"},children:e.jsx(L,{layout:b,headCol:A,cell:q,gap:z})})]}),e.jsxs("div",{className:"ns-pf-track mt-4",children:[e.jsx("div",{className:"ns-pf-track-fill",style:{width:`${E*100}%`}}),e.jsx("div",{className:"ns-pf-track-head",style:{left:`${E*100}%`}})]})]}),e.jsxs("p",{id:`pf-amount-${u}`,className:"sr-only",children:[d," ",r,": ",x,_]}),e.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[e.jsx("span",{className:"ns-pf-status-badge font-mono text-[11px] uppercase tracking-[0.12em] text-ns-muted",children:Y[t]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button","data-pf-issue":!0,onClick:D,disabled:t!=="unissued","aria-describedby":`pf-amount-${u}`,className:"ns-pf-btn",children:t==="unissued"?"Issue":t==="issuing"?"Issuing…":"Issued"}),e.jsx("button",{type:"button","data-pf-void":!0,onClick:O,onKeyDown:P,onBlur:()=>g&&k(),disabled:t!=="issued",className:`ns-pf-btn ${g?"ns-pf-btn-armed":""}`,children:t==="voided"?"Voided":t==="voiding"?"Voiding…":g?"Confirm void":"Void"})]})]})]})}const Q=`
/* A hole is var(--background) showing through the sheet, so the sheet tint IS
   the contrast that makes the punched figure readable. At the original 4% the
   paper sat 4% off the hole colour and the whole figure rode on the 1px ring
   below — which, on a ~5px dot in --border, rendered the amount essentially
   invisible in the light theme (verified in light-open.png). 10% gives the
   paper a real edge against the void in both themes without turning the sheet
   into a filled block. */
.ns-pf-sheet{ background: color-mix(in oklab, var(--foreground) 10%, var(--background)); }
.ns-pf-grid{ position: relative; display: grid; }
.ns-pf-hole{
  background: var(--background);
  border-radius: 9999px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--foreground) 35%, transparent);
}
.ns-pf-void-layer{ opacity: 0.92; }
@keyframes ns-pf-flinch-kf{
  0%{ transform: translateY(0); }
  35%{ transform: translateY(1px); }
  70%{ transform: translateY(-0.3px); }
  100%{ transform: translateY(0); }
}
.ns-pf-flinch{ animation: ns-pf-flinch-kf 90ms ease-out; }

.ns-pf-track{ position: relative; height: 2px; border-radius: 9999px; background: color-mix(in oklab, var(--ns-muted) 30%, transparent); }
.ns-pf-track-fill{ position: absolute; inset: 0 auto 0 0; height: 100%; border-radius: 9999px; background: var(--border); transition: width 60ms linear; }
.ns-pf-track-head{ position: absolute; top: 50%; width: 3px; height: 8px; margin-left: -1.5px; border-radius: 1px; background: var(--foreground); transform: translateY(-50%); transition: left 60ms linear; }

.ns-pf-btn{
  border-radius: 9999px;
  border: 1px solid var(--border);
  background: var(--background);
  color: var(--foreground);
  padding: 0.4rem 0.9rem;
  font-size: 0.75rem;
  font-weight: 500;
  transition: border-color 150ms ease-out, color 150ms ease-out;
}
.ns-pf-btn:hover:not(:disabled){ border-color: var(--foreground); }
.ns-pf-btn:disabled{ color: var(--ns-muted); cursor: not-allowed; }
.ns-pf-btn:focus-visible{ outline: 2px solid var(--ns-accent); outline-offset: 2px; }
.ns-pf-btn-armed{ border-color: var(--ns-accent); color: var(--ns-accent); }

@media (prefers-reduced-motion: reduce){
  .ns-pf-flinch{ animation: none !important; }
  .ns-pf-track-fill, .ns-pf-track-head{ transition: none !important; }
  .ns-pf-btn{ transition: none !important; }
}
`;function X(){return e.jsx("div",{className:"ns-stage",children:e.jsx(J,{onIssue:()=>{},onVoid:()=>{}})})}export{X as default};
