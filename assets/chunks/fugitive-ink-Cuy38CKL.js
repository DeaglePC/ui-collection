import{r as n,j as t}from"./client-CsvIHAk3.js";const ee=6e4,O=100,H=.4,ne=1/(1-H),re=1/.35,te=.3,oe=1/.35,se=.55,ae=1/.45,ie=88;function ce(r){return(Math.imul(r+1,2654435761)>>>0)%1e3/1e3*H}function le(r){const s=r.getHours().toString().padStart(2,"0"),u=r.getMinutes().toString().padStart(2,"0");return`${s}:${u}`}function de(r){return Math.max(0,Math.ceil(r/1e3))}async function z(r){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(r),!0}catch{}try{const s=document.createElement("textarea");s.value=r,s.setAttribute("readonly",""),s.style.position="fixed",s.style.top="0",s.style.left="0",s.style.opacity="0",s.style.pointerEvents="none",document.body.appendChild(s),s.focus(),s.select();const u=document.execCommand("copy");return document.body.removeChild(s),u}catch{return!1}}function fe({value:r,label:s="New API key",prefixLen:u=8,suffixLen:R=4,decayMs:p=ee,copiedAtOverride:S,onCopy:g,className:K=""}){const v=n.useRef(null),x=n.useRef(null),m=n.useRef(void 0),w=n.useRef(!1),k=n.useRef(!1),[a,M]=n.useState("idle"),[q,A]=n.useState(()=>Math.round(p/1e3)),[L,B]=n.useState("copied"),[D,V]=n.useState(null),[W,T]=n.useState(""),[X,E]=n.useState(""),c=Math.round(p/1e3),y=Math.min(u,Math.max(0,r.length-R)),C=Math.min(R,Math.max(0,r.length-y)),N=r.slice(0,y),F=C>0?r.slice(r.length-C):"",$=r.slice(y,r.length-C),l=`${N}…${F}`,G=n.useMemo(()=>$.split("").map((e,o)=>ce(o)),[$]),i=n.useCallback(e=>{T(""),window.requestAnimationFrame(()=>T(e))},[]),P=n.useCallback(e=>{E(""),window.requestAnimationFrame(()=>E(e))},[]),d=n.useCallback(()=>{m.current!==void 0&&(window.clearTimeout(m.current),m.current=void 0)},[]),h=n.useCallback(e=>{const o=e<0?0:e>1?1:e,f=w.current?o>=1?1:o>=.5?.5:0:o;v.current?.style.setProperty("--fi-t",f.toFixed(4))},[]),j=n.useCallback(()=>{const e=x.current;if(e==null)return;const o=performance.now()-e,f=Math.min(1,o/p);if(h(f),A(_=>{const I=de(p-o);return _===I?_:I}),!k.current&&f>=.5&&(k.current=!0,i(`Half faded — ${Math.round(c/2)} seconds left.`)),f>=1){M("expired"),i("Key no longer readable."),d();return}m.current=window.setTimeout(j,O)},[p,h,i,d,c]),b=n.useCallback(e=>{x.current==null&&(x.current=performance.now(),k.current=!1,M("armed"),A(c),B(e?"copied":"shown"),V(S??le(new Date)),P(e?`Copied. Key becomes unreadable in ${c} seconds.`:`Key becomes unreadable in ${c} seconds.`),h(0),d(),m.current=window.setTimeout(j,O))},[P,S,d,j,c,h]);n.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");w.current=e.matches;const o=()=>{w.current=e.matches};return e.addEventListener?.("change",o),()=>e.removeEventListener?.("change",o)},[]),n.useEffect(()=>d,[d]);const U=n.useCallback(()=>{(async()=>{if(a==="expired"){await z(l)?(g?.(l,"stub"),i("Copied identifier.")):i("Copy failed.");return}const e=x.current!=null;if(!await z(r)){i("Copy failed.");return}g?.(r,"full"),e?i("Copied."):b(!0)})()},[i,b,g,a,l,r]),Y=n.useCallback(e=>{const o=e.relatedTarget;o&&v.current?.contains(o)||b(!1)},[b]),Z=a==="expired"?`Copy key identifier ${l}, secret no longer available`:"Copy secret key, shown only once",J=a==="idle"?`Copy, or click away, to start the ${c}s clock`:a==="expired"?"Faded — no longer shown":`${q}s remaining`,Q=a==="idle"?`${l} — not yet ${L==="copied"?"copied":"shown"}`:`${l}, ${L} ${D}, will not be shown again`;return t.jsxs("div",{ref:v,className:`ns-fi ${K}`,"data-phase":a,onBlur:Y,style:{"--fi-t":0},children:[t.jsx("p",{className:"ns-fi-label",children:s}),t.jsxs("div",{className:"ns-fi-secret",role:"textbox","aria-readonly":"true","aria-label":`${s} value`,tabIndex:0,children:[t.jsx("span",{className:"ns-fi-exempt",children:N}),t.jsx("span",{className:"ns-fi-chars",children:$.split("").map((e,o)=>t.jsx("span",{className:"ns-fi-char",style:{"--fi-o":G[o]?.toFixed(4)??"0"},children:e===" "?" ":e},o))}),t.jsx("span",{className:"ns-fi-exempt",children:F})]}),t.jsxs("div",{className:"ns-fi-rulewrap",children:[t.jsx("div",{className:"ns-fi-rule","aria-hidden":"true"}),t.jsx("span",{className:"ns-fi-countdown","data-ns-fi-countdown":a!=="idle"?"":void 0,children:J})]}),t.jsxs("button",{type:"button",className:"ns-fi-copy-btn","aria-label":Z,onClick:U,children:[t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:[t.jsx("rect",{x:"4.5",y:"4.5",width:"8",height:"8",rx:"1.5",stroke:"currentColor",strokeWidth:"1.3"}),t.jsx("path",{d:"M2.5 9.5V2.5a1 1 0 0 1 1-1H9.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]}),a==="expired"?"Copy identifier":"Copy secret key"]}),t.jsx("p",{className:"ns-fi-record",children:Q}),t.jsx("span",{className:"ns-fi-sr",role:"status","aria-live":"polite",children:W}),t.jsx("span",{className:"ns-fi-sr",role:"alert","aria-live":"assertive",children:X}),t.jsx("style",{children:`
        .ns-fi {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 26rem;
          padding: 16px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--background);
        }
        .ns-fi-label {
          margin: 0;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--ns-muted);
        }
        .ns-fi-sr {
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

        .ns-fi-secret {
          display: block;
          padding: 10px 12px;
          border: 1px solid var(--border);
          border-radius: 6px;
          font-family: var(--font-mono, ui-monospace, monospace);
          font-size: 13px;
          line-height: 1.5;
          color: var(--foreground);
          word-break: break-all;
          user-select: text;
          cursor: text;
        }
        .ns-fi-secret:focus-visible {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
        }
        .ns-fi-exempt {
          font-weight: 600;
          color: var(--foreground);
          white-space: pre;
        }
        .ns-fi-chars {
          white-space: pre-wrap;
        }
        .ns-fi-char {
          display: inline-block;
          white-space: pre;
          --fi-local: max(0, min(1, calc((var(--fi-t, 0) - var(--fi-o, 0)) * ${ne.toFixed(4)})));
          --fi-w01: min(1, calc(var(--fi-local, 0) * ${re.toFixed(4)}));
          --fi-mix: calc(100 * max(0, min(1, calc((var(--fi-local, 0) - ${te}) * ${oe.toFixed(4)}))));
          --fi-eat: calc(${ie} * max(0, min(1, calc((var(--fi-local, 0) - ${se}) * ${ae.toFixed(4)}))));
          font-weight: calc(600 - 300 * var(--fi-w01, 0));
          color: color-mix(in oklab, var(--foreground), var(--ns-muted) calc(var(--fi-mix, 0) * 1%));
          clip-path: inset(0 0 calc(var(--fi-eat, 0) * 1%) 0);
        }
        @media (prefers-reduced-motion: no-preference) {
          .ns-fi-char {
            transition: color 160ms linear, clip-path 160ms linear;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ns-fi-char {
            transition: none;
          }
        }

        .ns-fi-rulewrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ns-fi-rule {
          position: relative;
          flex: 1;
          height: 2px;
          border-radius: 999px;
          background: var(--border);
          overflow: hidden;
        }
        .ns-fi-rule::after {
          content: "";
          position: absolute;
          inset: 0;
          transform-origin: left center;
          transform: scaleX(calc(1 - var(--fi-t, 0)));
          background: var(--foreground);
        }
        @media (prefers-reduced-motion: no-preference) {
          .ns-fi-rule::after {
            transition: transform 160ms linear;
          }
        }
        .ns-fi-countdown {
          flex-shrink: 0;
          font-family: var(--font-mono, ui-monospace, monospace);
          font-size: 11px;
          color: var(--ns-muted);
          white-space: nowrap;
        }

        .ns-fi-copy-btn {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: var(--background);
          color: var(--foreground);
          font-size: 13px;
          cursor: pointer;
          transition: border-color 140ms ease-out, background-color 140ms ease-out;
        }
        .ns-fi-copy-btn:hover {
          border-color: color-mix(in oklab, var(--foreground) 24%, var(--border));
          background: color-mix(in oklab, var(--foreground) 3%, var(--background));
        }
        .ns-fi-copy-btn:active {
          background: color-mix(in oklab, var(--foreground) 6%, var(--background));
        }
        .ns-fi-copy-btn:focus-visible {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
        }

        .ns-fi-record {
          margin: 0;
          font-family: var(--font-mono, ui-monospace, monospace);
          font-size: 11px;
          color: var(--ns-muted);
          word-break: break-all;
        }
      `})]})}function pe(){return t.jsx("div",{className:"ns-stage",children:t.jsx(fe,{value:"a",copiedAtOverride:"2026-11-15T09:00:00.000Z",onCopy:()=>{}})})}export{pe as default};
