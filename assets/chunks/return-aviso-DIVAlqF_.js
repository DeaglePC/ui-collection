import{r as n,j as r}from"./client-CsvIHAk3.js";const t="cubic-bezier(0.22, 1, 0.36, 1)",e=220;function g({name:o,href:m,deliveryState:p,seenAt:a,authoredByViewer:c=!1,className:f=""}){const s=p>=2,b=s?`mentioned, seen ${a??""}`.trim():"mentioned, not yet seen",[x,l]=n.useState(""),i=n.useRef(s),u=n.useRef(!0),d=n.useRef(void 0);return n.useEffect(()=>{if(u.current){u.current=!1,i.current=s;return}const v=!i.current&&s;i.current=s,!(!v||!c)&&(l(`@${o} saw your mention${a?` at ${a}`:""}`),window.clearTimeout(d.current),d.current=window.setTimeout(()=>l(""),4e3))},[s,c,o,a]),n.useEffect(()=>()=>window.clearTimeout(d.current),[]),r.jsxs(r.Fragment,{children:[r.jsxs("a",{href:m,"aria-description":b,"data-ns-aviso-seen":s?"":void 0,className:`ns-aviso relative inline-flex items-stretch rounded-sm border border-border bg-transparent py-1 pl-2.5 pr-4 font-sans text-sm leading-none text-foreground no-underline transition-colors duration-150 hover:border-foreground/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent ${f}`,children:[r.jsxs("span",{className:"self-center",children:["@",o]}),r.jsx("span",{className:"ns-aviso-time self-center overflow-hidden font-mono text-[10px] tracking-tight text-ns-muted","data-seen":s?"":void 0,"aria-hidden":"true",children:r.jsx("span",{className:"ns-aviso-time-inner block whitespace-nowrap",children:a??""})}),r.jsx("span",{"aria-hidden":"true",className:"ns-aviso-perf pointer-events-none absolute inset-y-[3px] right-3 w-px"}),r.jsx("span",{"aria-hidden":"true","data-seen":s?"":void 0,className:"ns-aviso-stub pointer-events-none absolute inset-y-0 right-0"}),r.jsx("style",{children:`
        .ns-aviso-perf {
          background: var(--border);
          -webkit-mask-image: repeating-linear-gradient(to bottom, black 0 2px, transparent 2px 4px);
          mask-image: repeating-linear-gradient(to bottom, black 0 2px, transparent 2px 4px);
        }
        .ns-aviso-stub {
          width: 3px;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 0;
          opacity: 0.4;
          transform: translateX(12px);
          transition:
            transform ${e}ms ${t},
            width ${e}ms ${t},
            opacity ${e}ms ${t},
            background-color ${e}ms ${t},
            border-color ${e}ms ${t},
            border-radius ${e}ms ${t};
        }
        .ns-aviso-stub[data-seen] {
          width: 7px;
          background: var(--foreground);
          border-color: var(--foreground);
          border-radius: 0 6px 6px 0;
          opacity: 1;
          transform: translateX(0);
        }
        .ns-aviso-time {
          display: grid;
          grid-template-columns: 0fr;
          opacity: 0;
          transition:
            grid-template-columns ${e}ms ${t},
            opacity ${e}ms ${t};
        }
        .ns-aviso-time[data-seen] {
          grid-template-columns: 1fr;
          opacity: 1;
          margin-left: 6px;
        }
        .ns-aviso-time-inner {
          min-width: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          /* No travel: the stub sits docked at all times and the three
             states crossfade through fill/opacity only, never position or
             width — a pure state indicator instead of a physical journey. */
          .ns-aviso-stub,
          .ns-aviso-stub[data-seen] {
            width: 5px;
            transform: none;
            border-radius: 0 6px 6px 0;
            transition:
              opacity ${e}ms linear,
              background-color ${e}ms linear,
              border-color ${e}ms linear;
          }
          .ns-aviso-time,
          .ns-aviso-time[data-seen] {
            grid-template-columns: 1fr;
            transition: opacity ${e}ms linear;
          }
        }
      `})]}),r.jsx("span",{"aria-live":"polite",className:"sr-only",children:x})]})}function $(){return r.jsx("div",{className:"ns-stage",children:r.jsx(g,{name:"示例",href:"#",seenAt:"2026-11-15T09:00:00.000Z"})})}export{$ as default};
