import{r as t,j as i}from"./client-CsvIHAk3.js";const P="cubic-bezier(0.16, 1, 0.3, 1)",T=16;function G(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function A(n,a,o,b){const c=getComputedStyle(n);a.style.font=c.font,a.style.letterSpacing=c.letterSpacing;const l=Math.max(0,Math.min(b,o.length));a.textContent=o.slice(0,l);const f=a.offsetWidth;a.textContent=o.slice(0,l)+(o[l]??" ");const h=a.offsetWidth,y=Math.max(1,h-f),w=parseFloat(c.paddingLeft)||0,j=n.clientWidth||1,C=w+f+y/2;return Math.max(0,Math.min(100,C/j*100))}function J({label:n,name:a,id:o,placeholder:b,defaultValue:c="",value:l,onValueChange:f,validate:h,debounceMs:y=260,required:w,disabled:j,autoComplete:C,className:F=""}){const $=t.useId(),W=o??`litmus-${$}`,E=`litmus-msg-${$}`,S=t.useRef(null),M=t.useRef(null),N=t.useRef(0),d=t.useRef(null),L=l!==void 0,[q,z]=t.useState(c),H=L?l:q,[r,m]=t.useState("idle"),[O,v]=t.useState(""),[g,I]=t.useState(50);t.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]);function R(e,u,s,k){if(e!==N.current)return;if(s.valid){m("valid"),v(k?"Looks good.":"");return}const p=S.current,x=M.current;p&&x&&I(A(p,x,u,s.index)),m("invalid"),v(`Character ${s.index+1}: ${s.reason}`)}function V(e){const u=++N.current;if(!h)return;const s=h(e);if(G(s)){const k=S.current,p=M.current;k&&p&&I(A(k,p,e,e.length)),m("checking"),v("Checking…"),s.then(x=>R(u,e,x,!0),()=>R(u,e,{valid:!1,index:Math.max(0,e.length-1),reason:"check failed"},!0))}else R(u,e,s,!1)}function _(e){if(L||z(e),f?.(e),d.current&&clearTimeout(d.current),e===""){N.current++,m("idle"),v("");return}d.current=setTimeout(()=>V(e),y)}const K=r==="invalid"?0:r==="checking"?Math.max(0,g-T):g,Z=r==="invalid"?100:r==="checking"?Math.min(100,g+T):g,B={"--validation-inline-wick-left":`${K}%`,"--validation-inline-wick-right":`${Z}%`,backgroundColor:"var(--error, #ea001d)"},D=r==="invalid"?{color:"var(--error, #ea001d)"}:void 0;return i.jsxs("div",{className:F,children:[i.jsx("style",{children:`
        @property --validation-inline-wick-left {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 50%;
        }
        @property --validation-inline-wick-right {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 50%;
        }
        .ns-validation-inline-wick {
          transition:
            --validation-inline-wick-left 480ms ${P},
            --validation-inline-wick-right 480ms ${P},
            opacity 480ms ease;
          opacity: 1;
          mask-image: linear-gradient(
            to right,
            transparent 0%, transparent var(--validation-inline-wick-left),
            black var(--validation-inline-wick-left), black var(--validation-inline-wick-right),
            transparent var(--validation-inline-wick-right), transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%, transparent var(--validation-inline-wick-left),
            black var(--validation-inline-wick-left), black var(--validation-inline-wick-right),
            transparent var(--validation-inline-wick-right), transparent 100%
          );
        }
        .ns-validation-inline-wick[data-phase="checking"] {
          transition-duration: 1100ms;
          opacity: .6;
          animation: ns-litmus-pulse 900ms ease-in-out infinite;
        }
        .ns-validation-inline-wick[data-phase="invalid"] {
          transition-duration: 420ms;
          opacity: 1;
        }
        @keyframes ns-litmus-pulse {
          0%, 100% { opacity: .4; }
          50% { opacity: .72; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ns-validation-inline-wick {
            transition: none;
          }
          .ns-validation-inline-wick[data-phase="checking"] {
            animation: none;
            opacity: .6;
          }
        }
      `}),i.jsx("label",{htmlFor:W,className:"block font-mono text-[11px] uppercase tracking-wide text-ns-muted",children:n}),i.jsxs("div",{className:"group relative mt-1.5",children:[i.jsx("input",{ref:S,id:W,name:a,type:"text",placeholder:b,required:w,disabled:j,autoComplete:C,value:H,onChange:e=>_(e.target.value),"aria-invalid":r==="invalid","aria-describedby":E,className:"w-full bg-transparent px-0 py-2 text-sm text-foreground outline-none placeholder:text-ns-muted disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ns-accent"}),i.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-border transition-colors group-hover:bg-foreground/25"}),i.jsx("div",{"aria-hidden":!0,"data-phase":r,className:"ns-validation-inline-wick pointer-events-none absolute inset-x-0 bottom-0 h-[2px]",style:B}),i.jsx("span",{ref:M,"aria-hidden":!0,className:"pointer-events-none absolute left-0 top-0 -z-10 whitespace-pre",style:{visibility:"hidden"}})]}),i.jsx("p",{id:E,"aria-live":"polite",className:"mt-1.5 min-h-[1em] font-mono text-xs text-ns-muted",style:D,children:O})]})}function U(){return i.jsx("div",{className:"ns-stage",children:i.jsx(J,{label:"示例",name:"示例",id:"a",placeholder:"示例",value:"a",onValueChange:()=>{},validate:()=>{},required:!0,disabled:!0,autoComplete:"2026-11-15T09:00:00.000Z"})})}export{U as default};
