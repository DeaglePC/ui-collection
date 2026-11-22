import{r as n,j as t}from"./client-CsvIHAk3.js";function R({name:i,summary:r,icon:o,status:e,args:a,result:s,error:l,startedAt:d,duration:u,defaultOpen:m=!1,open:c,onOpenChange:p,openOnError:f=!0,onRetry:h,maxCodeHeight:x=220,className:$}){const b=n.useId(),[w,g]=n.useState(m),_=c??w,z=N=>{c===void 0&&g(N),p?.(N)},[y,E]=n.useState(e),[B,v]=n.useState(!1);e!==y&&(E(e),c===void 0&&f&&(e==="error"&&!w?(g(!0),v(!0)):y==="error"&&B&&(g(!1),v(!1))));const k=F(e==="running",d,!1),j=e==="running"?k??0:u??k,O=e==="running"?`${i} running`:e==="success"?`${i} finished`:`${i} failed${l?`: ${l}`:""}`;return t.jsxs("div",{className:["ui-tcl",$].filter(Boolean).join(" "),"data-status":e,"data-open":_||void 0,children:[t.jsx("style",{href:"ui-tool-call",precedence:"default",children:q}),t.jsx("span",{className:"ui-tcl-sr",role:"status","aria-live":"polite",children:O}),t.jsxs("button",{type:"button",className:"ui-tcl__head","aria-expanded":_,"aria-controls":`${b}-body`,onClick:()=>{v(!1),z(!_)},children:[t.jsx("span",{className:"ui-tcl__icon","aria-hidden":"true",children:o??t.jsx(D,{})}),t.jsxs("span",{className:"ui-tcl__main",children:[t.jsx("code",{className:"ui-tcl__name",title:i,children:i}),r!=null&&t.jsx("span",{className:"ui-tcl__summary",dir:"auto",title:typeof r=="string"?r:void 0,children:r})]}),t.jsxs("span",{className:"ui-tcl__status",children:[e==="running"&&t.jsx(I,{}),e==="success"&&t.jsx("svg",{className:"ui-tcl__ok",viewBox:"0 0 16 16","aria-hidden":"true",children:t.jsx("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9",pathLength:1})}),e==="error"&&t.jsx(C,{}),t.jsx("span",{className:"ui-tcl__time",children:e==="error"?"Failed":j!=null?W(j,e==="running"):null})]},e),t.jsx(L,{})]}),t.jsx("div",{className:"ui-tcl__body",id:`${b}-body`,inert:!_,children:t.jsx("div",{className:"ui-tcl__clip",children:t.jsxs("div",{className:"ui-tcl__sections",children:[e==="error"&&t.jsxs("div",{className:"ui-tcl__error",children:[t.jsx(C,{}),t.jsx("p",{className:"ui-tcl__error-text",dir:"auto",children:l??"The tool call failed."}),h&&t.jsxs("button",{type:"button",className:"ui-tcl__retry",onClick:h,children:[t.jsxs("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{d:"M2.75 8a5.25 5.25 0 1 0 1.6-3.77"}),t.jsx("path",{d:"M2.5 2.5v2.75h2.75"})]}),"Retry"]})]}),a!==void 0&&t.jsx(M,{label:"Arguments",value:a,cap:x}),s!==void 0?t.jsx(M,{label:"Result",value:s,cap:x}):e==="running"?t.jsxs("div",{className:"ui-tcl__section",children:[t.jsx("div",{className:"ui-tcl__section-head",children:t.jsx("span",{className:"ui-tcl__label",children:"Result"})}),t.jsx("p",{className:"ui-tcl__pending",children:"Waiting for result…"})]}):null,a===void 0&&s===void 0&&e==="success"&&t.jsx("p",{className:"ui-tcl__pending",children:"No arguments or result."})]})})})]})}const S=640;function M({label:i,value:r,cap:o}){const{text:e,json:a}=A(r),s=n.useRef(null),[l,d]=n.useState(!1),[u,m]=n.useState(0);n.useLayoutEffect(()=>{const p=s.current,f=p?.firstElementChild;if(!p||!f)return;const h=()=>m(p.scrollHeight);h();const x=new ResizeObserver(h);return x.observe(f),()=>x.disconnect()},[e]);const c=u>o+24;return t.jsxs("div",{className:"ui-tcl__section",children:[t.jsxs("div",{className:"ui-tcl__section-head",children:[t.jsx("span",{className:"ui-tcl__label",children:i}),t.jsx(T,{text:e,label:i.toLowerCase()})]}),t.jsx("pre",{ref:s,className:"ui-tcl__code","data-capped":c&&!l||void 0,"data-scroll":c&&l&&u>S||void 0,style:c?{maxHeight:l?Math.min(u,S):o}:void 0,children:t.jsx("code",{children:a?J(e):e})}),c&&t.jsx("button",{type:"button",className:"ui-tcl__more","aria-expanded":l,onClick:()=>d(!l),children:l?"Show less":"Show all"})]})}function T({text:i,label:r}){const[o,e]=n.useState(!1);return n.useEffect(()=>{if(!o)return;const a=window.setTimeout(()=>e(!1),1400);return()=>window.clearTimeout(a)},[o]),t.jsxs("button",{type:"button",className:"ui-tcl__copy","data-copied":o||void 0,"aria-label":o?"Copied":`Copy ${r}`,title:o?"Copied":`Copy ${r}`,onClick:()=>U(i).then(a=>a&&e(!0)),children:[t.jsxs("svg",{className:"ui-tcl__copy-icon",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("rect",{x:"5.25",y:"5.25",width:"8",height:"8",rx:"2"}),t.jsx("path",{d:"M10.75 5.25v-1a1.5 1.5 0 0 0-1.5-1.5h-4.5a2 2 0 0 0-2 2v4.5a1.5 1.5 0 0 0 1.5 1.5h1"})]}),t.jsx("svg",{className:"ui-tcl__copy-done",viewBox:"0 0 16 16","aria-hidden":"true",children:t.jsx("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9",pathLength:1})})]})}function I(){return t.jsxs("svg",{className:"ui-tcl__spinner",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("circle",{cx:"8",cy:"8",r:"5.75"}),t.jsx("path",{d:"M8 2.25a5.75 5.75 0 0 1 5.75 5.75"})]})}function C(){return t.jsxs("svg",{className:"ui-tcl__err",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("circle",{cx:"8",cy:"8",r:"6"}),t.jsx("path",{d:"M8 5v3.4M8 10.9v.1"})]})}function L(){return t.jsx("svg",{className:"ui-tcl__chevron",viewBox:"0 0 16 16","aria-hidden":"true",children:t.jsx("path",{d:"M4.5 6.25 8 9.75l3.5-3.5"})})}function D(){return t.jsx("svg",{viewBox:"0 0 16 16",children:t.jsx("path",{d:"M10.2 2.4a3.5 3.5 0 0 0-4.3 4.6L2.6 10.3a1.4 1.4 0 0 0 2 2L7.9 9a3.5 3.5 0 0 0 4.6-4.3l-2 2-1.6-.4-.4-1.6 1.7-2.3Z"})})}function F(i,r,o){const e=n.useRef(null),a=n.useRef(0),[s,l]=n.useState(null);return n.useEffect(()=>{if(!i){e.current!==null&&(a.current+=Date.now()-e.current,e.current=null,l(a.current));return}a.current=0,e.current=r??Date.now();const d=()=>l(a.current+Date.now()-(e.current??Date.now()));d();const u=window.setInterval(d,100);return()=>window.clearInterval(u)},[i,r,o]),s}function W(i,r){if(!r&&i<1e3)return`${Math.max(1,Math.round(i))}ms`;if(i<6e4)return`${(Math.floor(i/100)/10).toFixed(1)}s`;const o=Math.floor(i/1e3);if(o<3600)return`${Math.floor(o/60)}m ${String(o%60).padStart(2,"0")}s`;const e=Math.floor(o/3600);return e<24?`${e}h ${String(Math.floor(o/60)%60).padStart(2,"0")}m`:`${Math.floor(e/24)}d ${e%24}h`}function A(i){if(typeof i=="string"){const r=i.trim();if(r.startsWith("{")||r.startsWith("["))try{return{text:JSON.stringify(JSON.parse(r),null,2),json:!0}}catch{}return{text:i,json:!1}}try{const r=JSON.stringify(i,null,2);return r===void 0?{text:String(i),json:!1}:{text:r,json:!0}}catch{return{text:String(i),json:!1}}}const H=/("(?:[^"\\]|\\.)*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;function J(i){const r=[],o=new RegExp(H.source,"g");let e=0,a;for(;a=o.exec(i);){if(a.index>e&&r.push(i.slice(e,a.index)),a[1]&&a[2])r.push(t.jsx("span",{className:"ui-tcl__t-key",children:a[1]},a.index),a[2]);else{const s=a[1]?"str":/^[tfn]/.test(a[0])?"lit":"num";r.push(t.jsx("span",{className:`ui-tcl__t-${s}`,children:a[0]},a.index))}e=a.index+a[0].length}return e<i.length&&r.push(i.slice(e)),r}async function U(i){try{return await navigator.clipboard.writeText(i),!0}catch{const r=document.createElement("textarea");r.value=i,r.style.cssText="position:fixed;opacity:0",document.body.appendChild(r),r.select();const o=document.execCommand("copy");return r.remove(),o}}const q=`
.ui-tcl,
.ui-tcl-group {
  --ui-tcl-ink: var(--aui-ink, #171717);
  --ui-tcl-text: var(--aui-muted, #6b6b6b);
  --ui-tcl-muted: var(--aui-muted, #8a8a8a);
  --ui-tcl-bg: var(--aui-surface, #ffffff);
  --ui-tcl-line: var(--aui-border, #e7e7e7);
  --ui-tcl-hover: var(--aui-subtle, #fafafa);
  --ui-tcl-tile: #f5f5f5;
  --ui-tcl-code: #fafafa;
  --ui-tcl-ring: #ffffff;
  --ui-tcl-red: var(--aui-danger, #c4320a);
  --ui-tcl-red-bg: color-mix(in srgb, var(--aui-red, #f04438) 6%, transparent);
  --ui-tcl-red-line: color-mix(in srgb, var(--aui-red, #f04438) 16%, transparent);
  --ui-tcl-key: #171717;
  --ui-tcl-str: #0b8576;
  --ui-tcl-num: var(--aui-warning, #b25e00);
  --ui-tcl-lit: #8a35d6;
  --ui-tcl-shine: rgba(255, 255, 255, 0.82);
  --ui-tcl-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tcl-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-tcl-mono: var(--aui-font-mono, ui-monospace, "SF Mono", Menlo, monospace);
  box-sizing: border-box;
  min-width: 0;
  color: var(--ui-tcl-text);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 1.4;
  letter-spacing: -0.006em;
  -webkit-font-smoothing: antialiased;
}
.ui-tcl *,
.ui-tcl-group * { box-sizing: border-box; }

.ui-tcl {
  position: relative;
  border-radius: calc(var(--aui-radius-lg, 16px) - 4px);
  background: var(--ui-tcl-bg);
  box-shadow: var(--aui-shadow-card, inset 0 0 0 1px var(--ui-tcl-line), 0 1px 2px rgba(0, 0, 0, 0.04));
}
.ui-tcl-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Header: icon, name + summary, status, chevron – everything truncates before it overflows */
.ui-tcl__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 8px 10px 8px 9px;
  border-radius: calc(var(--aui-radius-lg, 16px) - 4px);
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tcl[data-open] .ui-tcl__head { border-radius: calc(var(--aui-radius-lg, 16px) - 4px) calc(var(--aui-radius-lg, 16px) - 4px) 0 0; }
.ui-tcl__head:focus-visible,
.ui-tcl-group__head:focus-visible,
.ui-tcl__copy:focus-visible,
.ui-tcl__more:focus-visible,
.ui-tcl__retry:focus-visible {
  outline: 2px solid var(--ui-tcl-focus);
  outline-offset: 2px;
}
@media (hover: hover) {
  .ui-tcl__head:hover { background: var(--ui-tcl-hover); }
  .ui-tcl-group__head:hover { background: var(--ui-tcl-hover); color: var(--ui-tcl-ink); }
  .ui-tcl__copy:hover { background: var(--ui-tcl-hover); color: var(--ui-tcl-ink); }
  .ui-tcl__more:hover { color: var(--ui-tcl-ink); }
  .ui-tcl__retry:hover { background: var(--ui-tcl-hover); }
}

.ui-tcl__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: var(--ui-tcl-tile);
  box-shadow: inset 0 0 0 1px var(--ui-tcl-line);
  color: var(--ui-tcl-ink);
}
.ui-tcl__icon > svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }

.ui-tcl__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.ui-tcl__name {
  flex: 0 1 auto;
  max-width: 55%;
  overflow: hidden;
  color: var(--ui-tcl-ink);
  font-family: var(--ui-tcl-mono);
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ui-tcl__summary {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: var(--ui-tcl-text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-tcl__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  color: var(--ui-tcl-muted);
  font-size: 12.5px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation: ui-tcl-in 360ms var(--ui-tcl-ease) both;
}
.ui-tcl[data-status="error"] .ui-tcl__status { color: var(--ui-tcl-red); }
.ui-tcl__status > svg { width: 14px; height: 14px; flex: none; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcl__spinner circle { stroke: currentColor; stroke-width: 1.6; opacity: 0.22; }
.ui-tcl__spinner path { stroke: var(--ui-tcl-ink); stroke-width: 1.6; }
.ui-tcl__spinner { animation: ui-tcl-spin 800ms linear infinite; }
.ui-tcl__ok { stroke: var(--ui-tcl-ink); stroke-width: 1.8; }
.ui-tcl__ok path { stroke-dasharray: 1; stroke-dashoffset: 1; animation: ui-tcl-draw 360ms var(--ui-tcl-ease) 80ms forwards; }
.ui-tcl__err { stroke: var(--ui-tcl-red); stroke-width: 1.5; }

.ui-tcl__chevron {
  flex: none;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--ui-tcl-muted);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 360ms var(--ui-tcl-ease);
}
.ui-tcl[data-open] > .ui-tcl__head .ui-tcl__chevron,
.ui-tcl-group[data-open] > .ui-tcl-group__head .ui-tcl__chevron { transform: rotate(180deg); }

/* Body: grows from 0fr to 1fr, so the height animates without measuring */
.ui-tcl__body {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 380ms var(--ui-tcl-ease), opacity 240ms ease;
}
.ui-tcl[data-open] > .ui-tcl__body,
.ui-tcl-group[data-open] > .ui-tcl__body {
  grid-template-rows: 1fr;
  opacity: 1;
}
.ui-tcl__clip { min-height: 0; overflow: hidden; }
.ui-tcl__sections {
  display: grid;
  gap: 12px;
  padding: 12px;
  border-top: 1px solid var(--ui-tcl-line);
}

.ui-tcl__section { display: grid; gap: 6px; min-width: 0; }
.ui-tcl__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 24px;
}
.ui-tcl__label { color: var(--ui-tcl-muted); font-size: 12px; font-weight: 500; }
.ui-tcl__pending { margin: 0; color: var(--ui-tcl-muted); font-size: 12.5px; }

.ui-tcl__copy {
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: calc(var(--aui-radius-sm, 7px) - 1px);
  color: var(--ui-tcl-muted);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcl__copy svg {
  position: absolute;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 200ms ease, transform 320ms var(--ui-tcl-ease), filter 200ms ease;
}
.ui-tcl__copy-done { opacity: 0; transform: scale(0.6); filter: blur(2px); stroke-width: 1.7; }
.ui-tcl__copy[data-copied] { color: var(--ui-tcl-ink); }
.ui-tcl__copy[data-copied] .ui-tcl__copy-icon { opacity: 0; transform: scale(0.6); filter: blur(2px); }
.ui-tcl__copy[data-copied] .ui-tcl__copy-done { opacity: 1; transform: none; filter: none; }

/* Code: wraps instead of scrolling sideways; capped blocks fade out at the bottom */
.ui-tcl__code {
  position: relative;
  margin: 0;
  padding: 10px 12px;
  overflow: hidden;
  border-radius: calc(var(--aui-radius-sm, 7px) + 1px);
  background: var(--ui-tcl-code);
  box-shadow: inset 0 0 0 1px var(--ui-tcl-line);
  color: var(--ui-tcl-muted);
  font-family: var(--ui-tcl-mono);
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  tab-size: 2;
  transition: max-height 420ms var(--ui-tcl-ease);
}
.ui-tcl__code code { display: block; font: inherit; }
.ui-tcl__code::after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  bottom: 1px;
  height: 56px;
  border-radius: 0 0 var(--aui-radius-sm, 7px) var(--aui-radius-sm, 7px);
  background: linear-gradient(to bottom, transparent, var(--ui-tcl-code));
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}
.ui-tcl__code[data-capped]::after { opacity: 1; }
.ui-tcl__code[data-scroll] { overflow-y: auto; overscroll-behavior: contain; }
.ui-tcl__t-key { color: var(--ui-tcl-key); }
.ui-tcl__t-str { color: var(--ui-tcl-str); }
.ui-tcl__t-num { color: var(--ui-tcl-num); }
.ui-tcl__t-lit { color: var(--ui-tcl-lit); }

.ui-tcl__more {
  all: unset;
  justify-self: start;
  padding: 2px 4px;
  margin-left: -4px;
  border-radius: 5px;
  color: var(--ui-tcl-text);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: color 160ms ease;
}

/* Error: the message and an optional retry */
.ui-tcl__error {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 9px 10px 9px 11px;
  border-radius: calc(var(--aui-radius-sm, 7px) + 1px);
  background: var(--ui-tcl-red-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tcl-red-line);
}
.ui-tcl__error > .ui-tcl__err { flex: none; width: 14px; height: 14px; margin-top: 2px; fill: none; stroke-linecap: round; }
.ui-tcl__error-text {
  flex: 1;
  min-width: 0;
  max-height: 200px;
  margin: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  white-space: pre-line;
  color: var(--ui-tcl-red);
  font-size: 13px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}
.ui-tcl__retry {
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex: none;
  height: 26px;
  margin: -3px 0;
  padding: 0 10px 0 8px;
  border-radius: var(--aui-radius-sm, 7px);
  background: var(--ui-tcl-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tcl-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  color: var(--ui-tcl-ink);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tcl__retry svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcl__retry:active svg { transform: rotate(-60deg); transition: transform 200ms var(--ui-tcl-ease); }

/* Group: one quiet line with the tool icons stacked, the cards below */
.ui-tcl-group { display: grid; }
.ui-tcl-group__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 9px;
  justify-self: start;
  max-width: 100%;
  min-height: 36px;
  padding: 4px 10px 4px 5px;
  border-radius: var(--aui-radius, 10px);
  color: var(--ui-tcl-text);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcl-group__stack { display: flex; flex: none; }
.ui-tcl-group__stack .ui-tcl__icon {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  box-shadow: inset 0 0 0 1px var(--ui-tcl-line), 0 0 0 2px var(--ui-tcl-ring);
  animation: ui-tcl-pop 420ms var(--ui-tcl-ease) both;
}
.ui-tcl-group__stack .ui-tcl__icon + .ui-tcl__icon { margin-left: -5px; }
.ui-tcl-group__stack .ui-tcl__icon > svg { width: 13px; height: 13px; }
.ui-tcl-group__title {
  display: flex;
  align-items: baseline;
  gap: 5px;
  min-width: 0;
  white-space: nowrap;
  animation: ui-tcl-in 360ms var(--ui-tcl-ease) both;
}
.ui-tcl-group__label {
  position: relative;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
  font-weight: 500;
}
.ui-tcl-group__failed { flex: none; color: var(--ui-tcl-red); }
.ui-tcl-group__time { flex: none; color: var(--ui-tcl-muted); font-variant-numeric: tabular-nums; }
.ui-tcl-group__list { display: grid; gap: 8px; padding-top: 8px; }

/* A soft light sweeping over "Using tools…" */
.ui-tcl__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tcl-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tcl-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tcl-in {
  from { opacity: 0; transform: translateY(3px); filter: blur(2px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tcl-pop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-tcl-spin { to { transform: rotate(360deg); } }
@keyframes ui-tcl-draw { to { stroke-dashoffset: 0; } }
@keyframes ui-tcl-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tcl *,
  .ui-tcl-group *,
  .ui-tcl *::after,
  .ui-tcl-group *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tcl__shine::after { display: none; }
  .ui-tcl__ok path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tcl,
:where(.dark, [data-theme="dark"]) .ui-tcl-group {
  --ui-tcl-ink: var(--aui-ink, #ededed);
  --ui-tcl-text: var(--aui-muted, #a1a1a1);
  --ui-tcl-muted: var(--aui-muted, #7c7c7c);
  --ui-tcl-bg: var(--aui-surface, #161618);
  --ui-tcl-line: var(--aui-border, rgba(255, 255, 255, 0.1));
  --ui-tcl-hover: var(--aui-subtle, rgba(255, 255, 255, 0.035));
  --ui-tcl-tile: #1d1d20;
  --ui-tcl-code: #1d1d20;
  --ui-tcl-ring: #161618;
  --ui-tcl-red: var(--aui-danger, #ff8a7a);
  --ui-tcl-red-bg: color-mix(in srgb, var(--aui-red, #ff6b5f) 8%, transparent);
  --ui-tcl-red-line: color-mix(in srgb, var(--aui-red, #ff6b5f) 20%, transparent);
  --ui-tcl-key: #ededed;
  --ui-tcl-str: var(--aui-teal, #4fc3b4);
  --ui-tcl-num: var(--aui-orange, #f2a15c);
  --ui-tcl-lit: #cfaef5;
  --ui-tcl-shine: rgba(255, 255, 255, 0.95);
  --ui-tcl-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
:where(.dark, [data-theme="dark"]) .ui-tcl { box-shadow: var(--aui-shadow-card, inset 0 0 0 1px var(--ui-tcl-line)); }
`;function K(){return t.jsx("div",{className:"stage",children:t.jsx(R,{name:"search_web",status:"success",summary:"查了一下公开文档"})})}export{K as default};
