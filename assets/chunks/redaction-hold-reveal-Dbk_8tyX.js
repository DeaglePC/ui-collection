import{r as n,j as t}from"./client-CsvIHAk3.js";const w=280;function v({children:k,label:o,resealMs:m=900,className:x=""}){const[d,l]=n.useState(!1),[f,s]=n.useState(!1),p=n.useRef(0),i=n.useRef(void 0),a=n.useRef(!1),e=d||f;n.useEffect(()=>()=>window.clearTimeout(i.current),[]),n.useEffect(()=>{if(!e)return;const r=u=>{u.key==="Escape"&&(window.clearTimeout(i.current),l(!1),s(!1))};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e]);const b=r=>{r.button!==0||d||(window.clearTimeout(i.current),a.current=!1,p.current=performance.now(),s(!0))},c=()=>{if(!f)return;performance.now()-p.current>=w?(a.current=!0,i.current=setTimeout(()=>s(!1),m)):s(!1)},h=r=>{if(a.current){a.current=!1;return}window.clearTimeout(i.current),s(!1),l(u=>!u)};return t.jsxs("button",{type:"button","aria-pressed":e,"aria-label":e?`Hide redacted ${o??"content"}`:`Reveal redacted ${o??"content"} — hold to peek, click to keep open`,onPointerDown:b,onPointerUp:c,onPointerCancel:c,onPointerLeave:c,onClick:h,className:`ns-underink group relative inline-block cursor-pointer whitespace-nowrap rounded-[3px] px-[3px] align-baseline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent ${x}`,children:[t.jsx("style",{children:`
        .ns-underink .ns-underink-bar {
          transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-out;
          transform-origin: top;
        }
        .ns-underink[aria-pressed="true"] .ns-underink-bar {
          transform: scaleY(0.14) translateY(-2px);
          opacity: 0.85;
        }
        .ns-underink .ns-underink-text {
          transition: opacity 180ms ease-out 60ms;
        }
        .ns-underink:hover .ns-underink-bar { opacity: 0.82; }
        @media (prefers-reduced-motion: reduce) {
          .ns-underink .ns-underink-bar, .ns-underink .ns-underink-text { transition: none; }
        }
      `}),t.jsx("span",{"data-underink-text":!0,"aria-hidden":!e,className:`ns-underink-text relative z-0 ${e?"opacity-100":"opacity-0"}`,children:k}),t.jsx("span",{"aria-hidden":!0,className:"ns-underink-bar absolute inset-0 z-10 rounded-[3px] bg-foreground",children:o&&t.jsx("span",{className:`flex h-full items-center justify-center overflow-hidden px-1 font-mono text-[9px] uppercase tracking-[0.18em] text-background/80 ${e?"opacity-0":"opacity-100"}`,children:o})})]})}function g(){return t.jsx("div",{className:"ns-stage",children:t.jsx(v,{children:"示例",label:"示例"})})}export{g as default};
