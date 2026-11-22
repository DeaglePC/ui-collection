import{r as t,j as c}from"./client-CsvIHAk3.js";const H=18,C=420,$=1200,B="•";function P(n){return n<0?0:n>1?1:n}async function W(n){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(n),!0}catch{}try{const e=document.createElement("textarea");e.value=n,e.setAttribute("readonly",""),e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.pointerEvents="none",document.body.appendChild(e),e.focus(),e.select();const d=document.execCommand("copy");return document.body.removeChild(e),d}catch{return!1}}function O({value:n,label:e,masked:d=!1,ariaLabel:j,onCopy:h,className:R=""}){const f=t.useRef(null),u=t.useRef([]),M=t.useId(),[x,p]=t.useState("idle"),[b,A]=t.useState(0),[N,E]=t.useState(()=>n.split("").map(()=>0)),[L,y]=t.useState(""),r=n.split(""),i=t.useCallback(()=>{u.current.forEach(clearTimeout),u.current=[]},[]),m=t.useCallback(s=>{y(""),window.requestAnimationFrame(()=>y(s))},[]),g=t.useCallback(s=>{const o=f.current;if(!o||r.length<=1)return 0;const a=o.getBoundingClientRect();if(a.width===0)return 0;const l=P((s-a.left)/a.width);return Math.round(l*(r.length-1))},[r.length]),v=t.useCallback(async s=>{const o=await W(n);if(i(),!o){m("Copy failed");return}h?.(n),m("Copied");const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,l=r.map((k,I)=>a?0:Math.abs(I-s)*H);E(l),A(k=>k+1),p("idle");const T=a?0:Math.max(0,...l),w=a?0:T+C,z=window.setTimeout(()=>p("success"),w),D=window.setTimeout(()=>p("idle"),w+$);u.current.push(z,D)},[m,r,i,h,n]),S=t.useCallback(s=>{const o=s.detail===0?0:g(s.clientX);v(o).catch(()=>{})},[v,g]);t.useEffect(()=>i,[i]);const _=j??(e?`Copy ${e}`:"Copy value");return c.jsxs("div",{className:`ns-cc-wrap ${R}`,children:[e&&c.jsx("span",{className:"ns-cc-label",children:e}),c.jsxs("button",{type:"button",className:"ns-cc","aria-label":_,onClick:S,children:[c.jsx("span",{className:"ns-cc-chars",ref:f,"aria-hidden":"true",children:r.map((s,o)=>c.jsx("span",{className:"ns-cc-char","data-crimp":b>0?"":void 0,style:{"--cc-delay":`${N[o]??0}ms`},children:d?B:s===" "?" ":s},o))},b),c.jsxs("span",{className:"ns-cc-icon","aria-hidden":"true",children:[c.jsxs("svg",{className:"ns-cc-icon-copy","data-hidden":x==="success"?"":void 0,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[c.jsx("rect",{x:"4.5",y:"4.5",width:"8",height:"8",rx:"1.5",stroke:"currentColor",strokeWidth:"1.3"}),c.jsx("path",{d:"M2.5 9.5V2.5a1 1 0 0 1 1-1H9.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]}),c.jsx("svg",{className:"ns-cc-icon-check","data-visible":x==="success"?"":void 0,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:c.jsx("path",{d:"M2.5 7.3L5.4 10.5L11.5 3.8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),c.jsx("span",{id:M,className:"ns-cc-sr",role:"status","aria-live":"polite",children:L}),c.jsx("style",{children:`
        .ns-cc-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-width: 26rem;
        }
        .ns-cc-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--ns-muted);
        }
        .ns-cc-sr {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .ns-cc {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          padding: 9px 12px;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: var(--surface);
          cursor: pointer;
          text-align: left;
          transition: border-color 140ms ease-out, background-color 140ms ease-out;
        }
        .ns-cc:hover {
          border-color: color-mix(in oklab, var(--foreground) 24%, var(--border));
          background: color-mix(in oklab, var(--foreground) 3%, var(--surface));
        }
        .ns-cc:active {
          background: color-mix(in oklab, var(--foreground) 6%, var(--surface));
        }
        .ns-cc:focus-visible {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
        }

        .ns-cc-chars {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: var(--font-mono, ui-monospace, monospace);
          font-size: 13px;
          color: var(--foreground);
        }
        .ns-cc-char {
          display: inline-block;
          letter-spacing: 0em;
          white-space: pre;
        }
        .ns-cc-char[data-crimp] {
          animation: ns-cc-crimp ${C}ms cubic-bezier(0.22, 0.9, 0.34, 1) both;
          animation-delay: var(--cc-delay, 0ms);
        }
        @keyframes ns-cc-crimp {
          0% { letter-spacing: 0em; }
          32% { letter-spacing: -0.06em; }
          60% { letter-spacing: -0.06em; }
          82% { letter-spacing: 0.01em; }
          100% { letter-spacing: 0em; }
        }

        .ns-cc-icon {
          position: relative;
          flex-shrink: 0;
          width: 14px;
          height: 14px;
        }
        .ns-cc-icon-copy,
        .ns-cc-icon-check {
          position: absolute;
          inset: 0;
        }
        .ns-cc-icon-copy {
          color: var(--ns-muted);
          opacity: 1;
          transform: scale(1);
          transition: opacity 200ms ease-out, transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ns-cc-icon-copy[data-hidden] {
          opacity: 0;
          transform: scale(0.55);
        }
        .ns-cc-icon-check {
          color: var(--foreground);
          opacity: 0;
          transform: scale(0.4);
          transition: opacity 260ms cubic-bezier(0.16, 1, 0.3, 1), transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ns-cc-icon-check[data-visible] {
          opacity: 1;
          transform: scale(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .ns-cc-char[data-crimp] {
            animation: none;
          }
          .ns-cc-icon-copy,
          .ns-cc-icon-check {
            transition-duration: 1ms;
          }
        }
      `})]})}function F(){return c.jsx("div",{className:"ns-stage",children:c.jsx(O,{value:"a",label:"示例",ariaLabel:"示例",onCopy:()=>{}})})}export{F as default};
