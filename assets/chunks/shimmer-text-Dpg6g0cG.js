import{j as i,r as o}from"./client-CsvIHAk3.js";import{T as p}from"./text-swap-CUYWfEVv.js";import{u as f}from"./use-in-view-7Ebuc0dr.js";const h=`
@property --eased-shimmer-hl { syntax: "<color>"; inherits: true; initial-value: transparent; }
@keyframes eased-shimmer-sweep {
  from { background-position: calc(0% - var(--eased-shimmer-band)) 0, 0 0; }
  70%, to { background-position: calc(100% + var(--eased-shimmer-band)) 0, 0 0; }
}
.eased-shimmer {
  --eased-shimmer-band: 5em;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, transparent, var(--eased-shimmer-hl) 50%, transparent), linear-gradient(currentColor, currentColor);
  background-size: var(--eased-shimmer-band) 100%, 100% 100%;
  background-position: calc(0% - var(--eased-shimmer-band)) 0, 0 0;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  transition: --eased-shimmer-hl 300ms var(--eased-ease-standard), color 150ms var(--eased-ease-standard);
}
.eased-shimmer[data-on] { --eased-shimmer-hl: var(--shimmer-highlight, var(--eased-text)); }
.eased-shimmer[data-sweep] { animation: eased-shimmer-sweep var(--eased-shimmer-dur, 2.4s) cubic-bezier(0.45, 0, 0.3, 1) infinite; }
@media (prefers-reduced-motion: reduce) { .eased-shimmer[data-sweep] { animation: none; } }
@media (forced-colors: active) { .eased-shimmer { -webkit-text-fill-color: currentColor; background: none; } }
`;function k({children:e,active:a=!0,duration:m=2.4,swap:d,className:t="",style:r}){const c=/(^|\s)text-(text|brand|success|warning|danger|info|on-|current|inherit)/.test(t)?"":"text-text-muted",n=d??(typeof e=="string"||typeof e=="number"),s=i.jsx(b,{active:a,duration:m,className:`${c} ${t}`,style:r,children:e});return n?i.jsx(p,{swapKey:typeof e=="string"||typeof e=="number"?e:void 0,className:"overflow-x-clip",children:s}):s}function b({active:e,duration:a,className:m,style:d,children:t}){const r=o.useRef(null),c=f(r),[n,s]=o.useState(e);e&&!n&&s(!0),o.useEffect(()=>{if(e)return;const l=window.setTimeout(()=>s(!1),320);return()=>clearTimeout(l)},[e]);const u=n&&c;return o.useLayoutEffect(()=>{if(u)for(const l of r.current?.getAnimations()??[])l.startTime=0},[u,a]),i.jsxs("span",{ref:r,"data-on":e?"":void 0,"data-sweep":u?"":void 0,className:`eased-shimmer ${m}`,style:{...d,"--eased-shimmer-dur":`${a}s`},children:[t,i.jsx("style",{href:"eased-shimmer-text",precedence:"default",children:h})]})}export{k as S};
