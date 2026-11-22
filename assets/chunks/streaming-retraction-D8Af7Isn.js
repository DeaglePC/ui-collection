import{r as u,j as n}from"./client-CsvIHAk3.js";function x(s){const e=[];let i=0;return s.forEach((a,o)=>{if(a.type==="append"){const t=e[e.length-1];t&&t.kind==="text"?t.content+=a.text:e.push({kind:"text",content:a.text,start:i}),i+=a.text.length;return}let l=a.chars,r="";for(;l>0;){const t=e[e.length-1];if(!t||t.kind!=="text")break;const d=Math.min(l,t.content.length);r=t.content.slice(t.content.length-d)+r,t.content=t.content.slice(0,t.content.length-d),l-=d,t.content.length===0&&e.pop()}r.length>0&&e.push({kind:"scar",content:r,opIndex:o})}),e}const p=1050;function h({content:s,live:e}){const[i,a]=u.useState(!e),[o,l]=u.useState(!1);if(u.useEffect(()=>{if(i)return;const t=window.setTimeout(()=>a(!0),p);return()=>window.clearTimeout(t)},[i]),!i)return n.jsx("span",{"aria-hidden":!0,className:"ns-retract-strike text-ns-muted",children:s});const r=s.trim().split(/\s+/).filter(Boolean).length;return n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button","data-scar":!0,"aria-expanded":o,"aria-label":o?"Hide retracted text":`Show retracted text (${r} ${r===1?"word":"words"} removed)`,onClick:()=>l(t=>!t),className:"ns-retract-tick relative mx-[1px] inline-block h-[0.95em] w-[7px] translate-y-[0.12em] cursor-pointer rounded-[2px] align-text-bottom transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent",children:n.jsx("span",{"aria-hidden":!0,className:"absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-background"})}),o&&n.jsx("span",{"data-retract-ghost":!0,className:"mx-0.5 rounded-sm bg-surface px-1 text-ns-muted line-through decoration-ns-muted/70",children:s})]})}function f({ops:s,streaming:e=!0,className:i=""}){const a=u.useMemo(()=>x(s),[s]),o=u.useRef(null);o.current===null&&(o.current=s.length);const l=o.current,r=a.reduce((c,m)=>m.kind==="scar"?c+1:c,0),[t,d]=u.useState("");return u.useEffect(()=>{e?d(r>0?`Generating — ${r} self-corrections so far`:"Generating response…"):s.length>0&&d(r>0?`Response complete with ${r} self-corrections.`:"Response complete.")},[e,r,s.length]),n.jsxs("span",{className:`relative whitespace-pre-wrap ${i}`,children:[n.jsx("style",{children:`
        .ns-retract-strike {
          position: relative;
          background-image: linear-gradient(currentColor, currentColor);
          background-repeat: no-repeat;
          background-position: 0 52%;
          background-size: 100% 1px;
          animation: ns-retract-sweep ${p}ms linear both;
        }
        @keyframes ns-retract-sweep {
          0%   { background-size: 0% 1px; opacity: 1; }
          45%  { background-size: 100% 1px; opacity: 1; }
          72%  { opacity: 0.35; }
          100% { background-size: 100% 1px; opacity: 0; }
        }
        .ns-retract-tick { background-color: var(--ns-muted); opacity: .5; }
        .ns-retract-tick:hover, .ns-retract-tick[aria-expanded="true"] { opacity: 1; background-color: var(--foreground); }
        @keyframes ns-retract-blink { 0%, 50% { opacity: 1 } 50.01%, 100% { opacity: .25 } }
        .ns-retract-caret { animation: ns-retract-blink 1s steps(1, end) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ns-retract-strike { animation: none; opacity: .45; }
          .ns-retract-caret { animation: none; opacity: .55; }
        }
      `}),a.map(c=>c.kind==="text"?n.jsx("span",{children:c.content},`t-${c.start}`):n.jsx(h,{content:c.content,live:c.opIndex>=l},`s-${c.opIndex}`)),e&&n.jsx("span",{"aria-hidden":!0,className:"ns-retract-caret ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] rounded-[2px] bg-ns-muted align-text-bottom"}),n.jsx("span",{role:"status","aria-live":"polite",className:"sr-only",children:t})]})}function k(){return n.jsx("div",{className:"ns-stage",children:n.jsx(f,{ops:[{type:"append",text:"这是一段用来预览排版的示例文字。"},{type:"retract",chars:18}]})})}export{k as default};
