import{r as a,j as t}from"./client-CsvIHAk3.js";function E(){return t.jsx("svg",{"aria-hidden":!0,width:10,height:10,viewBox:"0 0 10 10",className:"shrink-0",children:t.jsx("circle",{cx:5,cy:5,r:3.2,fill:"none",stroke:"var(--ns-muted)",strokeWidth:1.5,pathLength:1,className:"cinch-knot"})})}function v({className:o=""}){return t.jsx("span",{"aria-hidden":!0,className:["h-px shrink-0 bg-border",o].join(" ")})}function L({defaultTags:o=[],placeholder:y="Add a tag…",label:j="Tags",maxTags:w=1/0,onChange:h,className:N=""}){const[s,f]=a.useState(o),[c,p]=a.useState([]),[X,m]=a.useState(null),[d,u]=a.useState(""),x=a.useRef(null),l=a.useRef(new Set),g=a.useRef(typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches).current;a.useEffect(()=>{const e=l.current;return()=>e.forEach(clearTimeout)},[]);const k=(e,r)=>{if(g)return e();const n=setTimeout(()=>{l.current.delete(n),e()},r);l.current.add(n)},R=e=>{const r=e.trim();if(!r)return;if(s.includes(r)){m(r),k(()=>m(null),300),u("");return}if(s.length>=w)return;const n=[...s,r];f(n),u(""),h?.(n)},b=e=>{if(c.includes(e))return;p(n=>[...n,e]);const r=()=>{p(n=>n.filter(i=>i!==e)),f(n=>{const i=n.filter(S=>S!==e);return h?.(i),i})};g?r():k(r,240)},C=e=>{if(e.key==="Enter"||e.key===",")e.preventDefault(),R(d);else if(e.key==="Backspace"&&d===""&&s.length>0){const r=[...s].reverse().find(n=>!c.includes(n));r&&b(r)}};return t.jsxs("div",{onClick:()=>x.current?.focus(),className:["flex w-full cursor-text flex-wrap items-center rounded-md border border-border bg-surface px-3 py-2.5","transition-colors duration-150 focus-within:border-ns-muted",N].join(" "),children:[t.jsx("style",{children:`
        @keyframes cinch-in {
          0% { opacity: 0; transform: translateX(18px) scaleX(1.1); }
          62% { opacity: 1; transform: translateX(-2px) scaleX(0.97); }
          100% { opacity: 1; transform: translateX(0) scaleX(1); }
        }
        @keyframes cinch-knot-draw {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes cinch-unravel {
          to { opacity: 0; transform: translateY(12px) rotate(8deg); }
        }
        @keyframes cinch-shudder {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          55% { transform: translateX(2.5px); }
          80% { transform: translateX(-1.5px); }
        }
        .tag-input-cord-chip { animation: cinch-in 280ms cubic-bezier(0.22, 1, 0.36, 1) backwards; }
        .tag-input-cord-chip .cinch-knot {
          stroke-dasharray: 1;
          animation: cinch-knot-draw 320ms 120ms ease-out backwards;
        }
        .tag-input-cord-chip[data-leaving="true"] {
          animation: cinch-unravel 240ms cubic-bezier(0.55, 0, 0.55, 0.2) forwards;
        }
        .tag-input-cord-chip[data-shaking="true"] { animation: cinch-shudder 280ms ease-in-out; }
        @media (prefers-reduced-motion: reduce) {
          .tag-input-cord-chip, .tag-input-cord-chip .cinch-knot,
          .tag-input-cord-chip[data-leaving="true"],
          .tag-input-cord-chip[data-shaking="true"] { animation: none; }
        }
      `}),t.jsx(v,{className:"w-2"}),s.map(e=>t.jsxs("span",{className:"flex items-center",children:[t.jsxs("span",{"data-leaving":c.includes(e)||void 0,"data-shaking":X===e||void 0,className:"tag-input-cord-chip flex items-center gap-1.5 rounded-full border border-border bg-background py-1 pl-2 pr-1",children:[t.jsx(E,{}),t.jsx("span",{className:"max-w-[16ch] truncate text-xs text-foreground",children:e}),t.jsx("button",{type:"button","aria-label":`Remove ${e}`,onClick:r=>{r.stopPropagation(),b(e)},className:"grid size-4 cursor-pointer place-items-center rounded-full text-ns-muted transition-colors duration-150 hover:bg-border hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ns-accent",children:t.jsx("svg",{"aria-hidden":!0,width:8,height:8,viewBox:"0 0 8 8",children:t.jsx("path",{d:"M 1.5 1.5 L 6.5 6.5 M 6.5 1.5 L 1.5 6.5",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round"})})})]}),t.jsx(v,{className:"w-3"})]},e)),t.jsx("input",{ref:x,type:"text","aria-label":j,value:d,placeholder:s.length===0?y:"",onChange:e=>u(e.target.value),onKeyDown:C,className:"ml-1.5 min-w-[8ch] flex-1 bg-transparent py-0.5 text-sm text-foreground outline-none placeholder:text-ns-muted"}),t.jsxs("span",{"aria-live":"polite",className:"sr-only",children:[s.length," tags"]})]})}function B(){return t.jsx("div",{className:"ns-stage",children:t.jsx(L,{defaultTags:["示例","第二项"],onChange:()=>{}})})}export{B as default};
