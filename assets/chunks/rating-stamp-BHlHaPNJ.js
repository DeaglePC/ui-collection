import{r as t,j as o}from"./client-CsvIHAk3.js";const q=140,K=380,U=90,V=170,L=30,X={sm:26,md:34,lg:42};function x(l,i){return Number.isFinite(l)?Math.min(i,Math.max(0,Math.round(l))):0}function Z(l){const i=Math.sin(l*12.9898+4.1414)*43758.5453,r=i-Math.floor(i);return{rotate:(r-.5)*5,rx:3.2+r*1.8}}function J(){const[l,i]=t.useState(!1);return t.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)");i(r.matches);const u=()=>i(r.matches);return r.addEventListener("change",u),()=>r.removeEventListener("change",u)},[]),l}function O({label:l,max:i=5,value:r,defaultValue:u=0,onValueChange:y,levelNames:R,size:j="md",className:E=""}){const c=Math.max(1,Math.floor(i)),h=r!==void 0,[N,I]=t.useState(()=>x(u,c)),s=x(h?r:N,c),g=J(),b=t.useRef(s),[F,_]=t.useState(0),[A,k]=t.useState(new Map),[v,m]=t.useState(null),M=t.useRef([]),C=t.useId();t.useLayoutEffect(()=>{const e=b.current;if(s!==e){if(g)k(new Map);else{const n=new Map;if(s>e)for(let a=e;a<s;a++)n.set(a,{kind:"press",delay:(a-e)*L});else for(let a=s;a<e;a++)n.set(a,{kind:"drain",delay:(e-1-a)*L});k(n),_(a=>a+1)}b.current=s}},[s,g]);const w=t.useCallback(e=>{const n=x(e,c);h||I(n),n!==s&&y?.(n)},[c,h,s,y]),z=e=>{let n=null;if(e.key==="ArrowRight"||e.key==="ArrowUp")n=Math.min(c,Math.max(1,s+1));else if(e.key==="ArrowLeft"||e.key==="ArrowDown")n=Math.max(1,s-1);else if(e.key==="Home")n=1;else if(e.key==="End")n=c;else return;e.preventDefault(),w(n),M.current[n-1]?.focus()},D=t.useMemo(()=>Array.from({length:c},(e,n)=>n),[c]);return o.jsxs("div",{role:"radiogroup","aria-label":l,onKeyDown:z,"data-reduced":g||void 0,className:`ns-cp-group ${E}`,style:{"--cp-size":`${X[j]}px`},children:[D.map(e=>{const n=e<s,a=v!==null?e<=v:n,P=v!==null&&a!==n,B=e===s-1,f=A.get(e),p=Z(e),$=e+1,S=R?.[e],G=`${$} of ${c}${S?` - ${S}`:""}`,T=s===0?e===0:e===s-1,H=f?.kind==="drain"?V:U;return o.jsxs("button",{ref:d=>{M.current[e]=d},type:"button",role:"radio","aria-checked":B,"aria-label":G,id:`${C}-${e}`,tabIndex:T?0:-1,"data-transition":f?.kind,className:"ns-cp-seal",style:{"--cp-delay":`${f?.delay??0}ms`,"--cp-fill-ms":`${H}ms`},onClick:()=>w($),onMouseEnter:()=>m(e),onMouseLeave:()=>m(d=>d===e?null:d),onFocus:()=>m(e),onBlur:()=>m(d=>d===e?null:d),children:[o.jsxs("svg",{viewBox:"0 0 32 32","aria-hidden":"true",focusable:"false",className:"ns-cp-glyph",style:{transform:`rotate(${p.rotate.toFixed(2)}deg)`},children:[o.jsx("rect",{x:3,y:3,width:26,height:26,rx:p.rx,className:"ns-cp-base","data-filled":n||void 0,"data-preview":P||void 0}),o.jsx("path",{d:`M 6 ${(6+p.rx).toFixed(1)} L 6 6 L ${(6+p.rx).toFixed(1)} 6`,className:"ns-cp-edge-hi","data-filled":n||void 0}),o.jsx("path",{d:`M ${(26-p.rx).toFixed(1)} 26 L 26 26 L 26 ${(26-p.rx).toFixed(1)}`,className:"ns-cp-edge-lo","data-filled":n||void 0})]}),f?.kind==="press"&&o.jsx("span",{className:"ns-cp-ring","aria-hidden":"true"},`ring-${F}-${e}`)]},e)}),o.jsx("style",{children:`
        .ns-cp-group {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .ns-cp-seal {
          position: relative;
          width: var(--cp-size, 34px);
          height: var(--cp-size, 34px);
          padding: 0;
          border: none;
          border-radius: 6px;
          background: transparent;
          color: inherit;
          cursor: pointer;
          display: grid;
          place-items: center;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }
        .ns-cp-seal:hover {
          background: color-mix(in oklab, var(--foreground) 4%, transparent);
        }
        .ns-cp-seal:focus-visible {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
        }
        .ns-cp-glyph {
          width: 68%;
          height: 68%;
          overflow: visible;
        }
        .ns-cp-base {
          /* fill is always --foreground; only fill-opacity animates. a
             color <-> "none" transition is a discrete 50% flip in every
             engine, not an interpolation — fill-opacity is a plain number
             and always interpolates smoothly. */
          fill: var(--foreground);
          fill-opacity: 0;
          stroke: var(--ns-muted);
          stroke-width: 1.5px;
          transition:
            fill-opacity var(--cp-fill-ms, 140ms) ease var(--cp-delay, 0ms),
            stroke 140ms ease var(--cp-delay, 0ms),
            stroke-dasharray 120ms ease;
        }
        .ns-cp-base[data-filled] {
          fill-opacity: 1;
          stroke-opacity: 0.4;
        }
        .ns-cp-base[data-preview] {
          stroke-dasharray: 3 2.5;
          stroke: color-mix(in oklab, var(--foreground) 55%, var(--ns-muted));
        }
        .ns-cp-edge-hi,
        .ns-cp-edge-lo {
          fill: none;
          stroke-width: 1px;
          opacity: 0;
          transition: opacity var(--cp-fill-ms, 140ms) ease var(--cp-delay, 0ms);
        }
        .ns-cp-edge-hi[data-filled],
        .ns-cp-edge-lo[data-filled] {
          opacity: 1;
        }
        .ns-cp-edge-hi {
          stroke: color-mix(in oklab, var(--background) 45%, transparent);
        }
        .ns-cp-edge-lo {
          stroke: var(--border);
        }

        .ns-cp-seal[data-transition="press"] {
          animation: ns-cp-press ${q}ms cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: var(--cp-delay, 0ms);
        }

        .ns-cp-ring {
          position: absolute;
          inset: 2px;
          border-radius: 6px;
          border: 1px solid var(--border);
          pointer-events: none;
          opacity: 0.9;
          transform: scale(0.85);
          animation: ns-cp-ring ${K}ms ease-out both;
          animation-delay: var(--cp-delay, 0ms);
        }

        @keyframes ns-cp-press {
          from { transform: scale(1.15); }
          to { transform: scale(1); }
        }
        @keyframes ns-cp-ring {
          from { opacity: 0.9; transform: scale(0.9); }
          to { opacity: 0; transform: scale(1.6); }
        }

        .ns-cp-group[data-reduced] .ns-cp-base,
        .ns-cp-group[data-reduced] .ns-cp-edge-hi,
        .ns-cp-group[data-reduced] .ns-cp-edge-lo {
          transition: none;
        }
        .ns-cp-group[data-reduced] .ns-cp-seal[data-transition],
        .ns-cp-group[data-reduced] .ns-cp-ring {
          animation: none;
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .ns-cp-base,
          .ns-cp-edge-hi,
          .ns-cp-edge-lo {
            transition: none;
          }
          .ns-cp-seal[data-transition],
          .ns-cp-ring {
            animation: none;
          }
        }
      `})]})}function W(){return o.jsx("div",{className:"ns-stage",children:o.jsx(O,{label:"示例",value:42,onValueChange:()=>{},levelNames:["示例","第二项"]})})}export{W as default};
