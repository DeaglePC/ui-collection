import{r as t,j as s}from"./client-CsvIHAk3.js";const V="cubic-bezier(0.22, 1, 0.36, 1)",oe=65,ae=90,ie=160,ce=220,a=10,le=3,de=28;function pe(){const[N,i]=t.useState(!1);return t.useEffect(()=>{const d=window.matchMedia("(prefers-reduced-motion: reduce)");i(d.matches);const x=()=>i(d.matches);return d.addEventListener("change",x),()=>d.removeEventListener("change",x)},[]),N}function ue({label:N,options:i,value:d,defaultValue:x,onValueChange:I,name:B,className:X=""}){const Y=t.useId(),q=B??Y,R=d!==void 0,[D,J]=t.useState(()=>x??i[0]?.value??""),y=R?d:D,o=Math.max(0,i.findIndex(e=>e.value===y)),E=pe(),S=t.useRef(null),C=t.useRef([]),$=t.useRef(null),[l,K]=t.useState([]),g=t.useCallback(()=>{const e=S.current;if(!e)return;const n=e.getBoundingClientRect().top,c=C.current.map(p=>{if(!p)return 0;const u=p.getBoundingClientRect();return u.top-n+u.height/2});K(c)},[]);t.useLayoutEffect(()=>{g()},[g,i.length]),t.useEffect(()=>{const e=S.current;if(!e||typeof ResizeObserver>"u")return;const n=new ResizeObserver(()=>g());return n.observe(e),()=>n.disconnect()},[g]);const Z=t.useCallback(e=>{R||J(e),e!==y&&I?.(e)},[R,y,I]),[T,L]=t.useState(o),f=t.useRef(null),v=t.useRef([]),[G,j]=t.useState(()=>new Set);t.useLayoutEffect(()=>{const e=T;if(o===e)return;const n=$.current,c=l[e],p=l[o];let u=c!==void 0?c-a/2:void 0,A=a,O=a;if(n&&f.current){const r=getComputedStyle(n),M=parseFloat(r.top),h=parseFloat(r.height),w=parseFloat(r.width);!Number.isNaN(M)&&!Number.isNaN(h)&&!Number.isNaN(w)&&(u=M,A=h,O=w)}if(v.current.forEach(r=>window.clearTimeout(r)),v.current=[],f.current?.cancel(),f.current=null,j(new Set),E||!n||typeof n.animate!="function"||u===void 0||c===void 0||p===void 0){L(o);return}const ee=p-a/2,te=Math.min(c,p)-a/2,ne=Math.abs(p-c)+a,z=Math.abs(o-e),k=Math.max(ae,z*oe),W=k+ie,se=k/W,H=n.animate([{top:`${u}px`,height:`${A}px`,width:`${O}px`,offset:0,easing:V},{top:`${te}px`,height:`${ne}px`,width:`${le}px`,offset:se,easing:V},{top:`${ee}px`,height:`${a}px`,width:`${a}px`,offset:1}],{duration:W,fill:"forwards"});f.current=H,H.onfinish=()=>{L(o)};const F=o>e?1:-1;for(let r=e+F;r!==o;r+=F){const h=Math.abs(r-e)/z*k,w=window.setTimeout(()=>{j(m=>new Set(m).add(r))},h),re=window.setTimeout(()=>{j(m=>{if(!m.has(r))return m;const P=new Set(m);return P.delete(r),P})},h+ce);v.current.push(w,re)}},[o,E,l,T]),t.useEffect(()=>()=>{v.current.forEach(e=>window.clearTimeout(e)),f.current?.cancel()},[]);const b=l.length===i.length&&i.length>0,_=b?l[0]:0,Q=b?l[l.length-1]-_:0,U=(l[T]??0)-a/2;return s.jsxs("div",{className:`ns-pt-wrap ${X}`,children:[s.jsxs("div",{ref:S,role:"radiogroup","aria-label":N,"data-reduced":E||void 0,className:"ns-pt-group",style:{"--pt-rail-col":`${de}px`},children:[i.length>1&&s.jsx("div",{"aria-hidden":"true",className:"ns-pt-rail",style:{top:_,height:Math.max(0,Q),opacity:b?1:0}}),i.map((e,n)=>s.jsxs("label",{ref:c=>{C.current[n]=c},className:"ns-pt-row",children:[s.jsx("input",{type:"radio",className:"ns-pt-input",name:q,value:e.value,checked:n===o,onChange:()=>Z(e.value)}),s.jsxs("span",{className:"ns-pt-visual",children:[s.jsx("span",{className:"ns-pt-rail-col",children:s.jsx("span",{className:"ns-pt-notch","data-ticking":G.has(n)||void 0})}),s.jsxs("span",{className:"ns-pt-text",children:[s.jsx("span",{className:"ns-pt-label-text","data-checked":n===o||void 0,children:e.label}),e.description&&s.jsx("span",{className:"ns-pt-desc",children:e.description})]})]})]},e.value)),s.jsx("div",{ref:$,"aria-hidden":"true",className:"ns-pt-pin",style:{top:U,height:a,width:a,opacity:b?1:0}})]}),s.jsx("style",{children:`
        .ns-pt-wrap {
          display: block;
        }
        .ns-pt-group {
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .ns-pt-rail {
          position: absolute;
          left: calc(var(--pt-rail-col) / 2 - 0.5px);
          width: 1px;
          background: var(--border);
          pointer-events: none;
        }
        .ns-pt-row {
          position: relative;
          display: block;
          min-height: 44px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .ns-pt-input {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
          outline: none;
        }
        .ns-pt-visual {
          display: flex;
          align-items: center;
          gap: 4px;
          min-height: 44px;
          padding: 6px 12px 6px 0;
          border-radius: 8px;
          transition: background-color 140ms ease;
        }
        .ns-pt-row:hover .ns-pt-visual {
          background: color-mix(in oklab, var(--foreground) 4%, transparent);
        }
        .ns-pt-input:focus-visible + .ns-pt-visual {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
        }
        .ns-pt-rail-col {
          flex: 0 0 var(--pt-rail-col);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ns-pt-notch {
          width: 10px;
          height: 10px;
          border-radius: 3px;
          border: 1px solid var(--border);
          box-sizing: border-box;
          transform: scale(1);
          transition: transform 160ms ease, border-color 160ms ease;
        }
        .ns-pt-notch[data-ticking] {
          border-color: var(--foreground);
          transform: scale(1.35);
        }
        .ns-pt-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }
        .ns-pt-label-text {
          font-size: 0.875rem;
          color: var(--ns-muted);
          transition: color 160ms ease;
        }
        .ns-pt-label-text[data-checked] {
          color: var(--foreground);
          font-weight: 500;
        }
        .ns-pt-desc {
          font-size: 0.75rem;
          color: var(--ns-muted);
        }
        .ns-pt-pin {
          /* left sits at the rail column's center and stays there via a
             permanent translateX(-50%) — width is animated (dot <-> thin
             traveling pill) straight through JS/WAAPI inline styles, so
             centering can't be a fixed calc() against a constant width. */
          position: absolute;
          left: calc(var(--pt-rail-col) / 2);
          transform: translateX(-50%);
          border-radius: 9999px;
          background: var(--foreground);
          pointer-events: none;
        }

        .ns-pt-group[data-reduced] .ns-pt-notch,
        .ns-pt-group[data-reduced] .ns-pt-label-text {
          transition: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .ns-pt-notch,
          .ns-pt-label-text,
          .ns-pt-visual {
            transition: none;
          }
        }
      `})]})}function he(){return s.jsx("div",{className:"ns-stage",children:s.jsx(ue,{label:"示例",options:[{value:"a",label:"示例"},{value:"b",label:"第二项"}],value:"a",defaultValue:"示例",onValueChange:()=>{},name:"示例"})})}export{he as default};
