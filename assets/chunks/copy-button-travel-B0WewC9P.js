import{r as o,j as n}from"./client-CsvIHAk3.js";const x=720,M=260,V=Math.max(0,x-M-40),X=2e3,J=12,K=.82,Q=8,u=24;function Z(){const[e,t]=o.useState(!1);return o.useEffect(()=>{const c=window.matchMedia("(prefers-reduced-motion: reduce)");t(c.matches);const l=()=>t(c.matches);return c.addEventListener("change",l),()=>c.removeEventListener("change",l)},[]),e}async function ee(e){try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(e);return}throw new Error("clipboard api unavailable")}catch{try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="-1000px",t.style.left="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}catch{}}}function te({value:e,description:t,copyLabel:c="Copy",copiedLabel:l="Copied",className:_=""}){const d=Z(),[a,y]=o.useState(!1),[s,b]=o.useState(null),[w,z]=o.useState(0),[B,F]=o.useState(""),v=o.useRef(null),C=o.useRef(null),k=o.useRef(null),R=o.useRef(0),h=o.useRef(void 0),f=o.useRef(void 0);o.useEffect(()=>()=>{window.clearTimeout(h.current),window.clearTimeout(f.current)},[]);const S=o.useCallback(()=>{const r=v.current,m=C.current,j=k.current;if(!r||!m||!j)return;const i=m.getBoundingClientRect(),W=window.innerWidth||document.documentElement.clientWidth,A=window.innerHeight||document.documentElement.clientHeight;if(!(i.width>0&&i.height>0&&i.bottom>0&&i.top<A&&i.right>0&&i.left<W))return;const E=r.getBoundingClientRect(),p=j.getBoundingClientRect(),G=i.left+i.width/2,P=i.top+i.height/2,Y=p.left+p.width/2,q=p.top+p.height/2,T=Y-G,$=q-P,g=Math.hypot(T,$)||1,N=Math.max(g*K,J),D=T/g*N,I=$/g*N-Q,L=window.getComputedStyle(m),U=e.length>u?`${e.slice(0,u)}…`:e;R.current+=1,b({id:R.current,left:i.left-E.left,top:i.top-E.top,width:i.width,height:i.height,fontSize:L.fontSize,fontFamily:L.fontFamily,tx:D,ty:I,text:U}),window.clearTimeout(f.current),f.current=setTimeout(()=>b(null),x+60)},[e]),O=o.useCallback(async()=>{await ee(e),y(!0),z(r=>r+1),F(r=>r==="Copied to clipboard"?"Copied to clipboard​":"Copied to clipboard"),d||S(),window.clearTimeout(h.current),h.current=setTimeout(()=>y(!1),X)},[e,d,S]),H=t?`Copy ${t}`:`Copy ${e.length>u?`${e.slice(0,u)}…`:e}`;return n.jsxs("div",{ref:v,className:`ns-cl-row ${_}`,children:[n.jsx("code",{ref:C,className:"ns-cl-source",children:e}),n.jsxs("button",{type:"button",onClick:O,"aria-label":H,"data-state":a?"copied":"idle",className:"ns-cl-button",children:[n.jsxs("span",{ref:k,className:"ns-cl-icon","data-bounce":!d&&w>0?!0:void 0,"aria-hidden":"true",children:[n.jsxs("svg",{viewBox:"0 0 16 16",width:"14",height:"14",className:"ns-cl-icon-glyph","data-visible":!a||void 0,children:[n.jsx("rect",{x:"4.5",y:"1.5",width:"7",height:"2.5",rx:"0.6",fill:"none",stroke:"currentColor",strokeWidth:"1.1"}),n.jsx("rect",{x:"2.5",y:"2.75",width:"11",height:"12",rx:"1.4",fill:"none",stroke:"currentColor",strokeWidth:"1.1"})]}),n.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14",className:"ns-cl-icon-glyph ns-cl-icon-check","data-visible":a||void 0,children:n.jsx("path",{d:"M3.5 8.5 L6.5 11.5 L12.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})})]},d?"static":`icon-${w}`),n.jsx("span",{className:"ns-cl-label",children:a?l:c},a?"copied":"copy")]}),n.jsx("span",{role:"status","aria-live":"polite",className:"sr-only",children:B}),s&&n.jsx("span",{"aria-hidden":"true",className:"ns-cl-ghost",style:{left:`${s.left}px`,top:`${s.top}px`,width:`${s.width}px`,height:`${s.height}px`,fontSize:s.fontSize,fontFamily:s.fontFamily,"--cl-tx":`${s.tx}px`,"--cl-ty":`${s.ty}px`},children:s.text},s.id),n.jsx("style",{children:`
        .ns-cl-row {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          max-width: 100%;
        }
        .ns-cl-source {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 260px;
          font-family: var(--font-geist-mono, ui-monospace, monospace);
          font-size: 13px;
          color: var(--foreground);
          opacity: 0.85;
        }
        .ns-cl-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
          height: 30px;
          padding: 0 10px;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: transparent;
          color: var(--foreground);
          font-family: var(--font-geist-mono, ui-monospace, monospace);
          font-size: 12px;
          cursor: pointer;
          outline: none;
          transition: border-color 150ms ease, background 150ms ease;
        }
        .ns-cl-button:hover {
          border-color: color-mix(in oklab, var(--foreground) 30%, var(--border));
          background: color-mix(in oklab, var(--foreground) 4%, transparent);
        }
        .ns-cl-button:focus-visible {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
        }
        .ns-cl-button[data-state="copied"] {
          border-color: color-mix(in oklab, var(--foreground) 35%, var(--border));
        }

        .ns-cl-icon {
          position: relative;
          display: inline-grid;
          place-items: center;
          width: 14px;
          height: 14px;
        }
        .ns-cl-icon-glyph {
          grid-area: 1 / 1;
          opacity: 0;
          transition: opacity 150ms ease;
        }
        .ns-cl-icon-glyph[data-visible] {
          opacity: 1;
        }
        .ns-cl-icon-check {
          color: var(--foreground);
        }
        .ns-cl-icon[data-bounce] {
          animation: ns-cl-bounce ${M}ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
          animation-delay: ${V}ms;
        }

        .ns-cl-label {
          display: inline-block;
          min-width: 3.6em;
          text-align: left;
          animation: ns-cl-tick 150ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .ns-cl-ghost {
          position: absolute;
          display: flex;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
          pointer-events: none;
          color: var(--foreground);
          opacity: 0.85;
          letter-spacing: 0;
          transform: translate(0, 0);
          animation: ns-cl-lift ${x}ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Holds near-full opacity through the first half of the flight —
           the duplicate needs to visibly separate from the source before it
           starts fading, or the two overlapping copies read as one string
           that never moved. Fade and letter-spacing crimp happen entirely
           in the second half, timed to finish as it reaches the glyph. */
        @keyframes ns-cl-lift {
          0% {
            transform: translate(0, 0);
            opacity: 0.85;
            letter-spacing: 0em;
          }
          45% {
            opacity: 0.85;
          }
          100% {
            transform: translate(var(--cl-tx), var(--cl-ty));
            opacity: 0;
            letter-spacing: -0.03em;
          }
        }
        @keyframes ns-cl-bounce {
          0% { transform: scale(1); }
          55% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        @keyframes ns-cl-tick {
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ns-cl-ghost { display: none; animation: none; }
          .ns-cl-icon[data-bounce] { animation: none; }
          .ns-cl-label { animation: none; }
          .ns-cl-button { transition: none; }
        }
      `})]})}function ie(){return n.jsx("div",{className:"ns-stage",children:n.jsx(te,{value:"a",description:"这是一段用来预览排版的示例文字。"})})}export{ie as default};
