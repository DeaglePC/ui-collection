import{r as t,j as a}from"./client-CsvIHAk3.js";const fa=()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;function A({id:i,children:u,className:f}){const g=t.useRef({id:i,node:u}),[q,z]=t.useState(i),[h,N]=t.useState(null);return q!==i&&(z(i),N(g.current)),g.current={id:i,node:u},t.useEffect(()=>{if(!h)return;const v=window.setTimeout(()=>N(null),300);return()=>window.clearTimeout(v)},[h]),a.jsxs("span",{className:["ui-ma__swap",f].filter(Boolean).join(" "),children:[h&&a.jsx("span",{className:"ui-ma__swap-item","data-out":"","aria-hidden":"true",children:h.node},`out-${h.id}`),a.jsx("span",{className:"ui-ma__swap-item",children:u},i)]})}const r=({d:i})=>a.jsx("svg",{viewBox:"0 0 24 24",className:"ui-ma__glyph","aria-hidden":"true",children:a.jsx("path",{d:i})}),o={copy:"M9 9.5A1.5 1.5 0 0 1 10.5 8h8A1.5 1.5 0 0 1 20 9.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 9 18.5zM15 8V5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H9",check:"M5.5 12.5l4.2 4.2L18.5 7.8",redo:"M19.5 12a7.5 7.5 0 1 1-2.2-5.3L19.5 9M19.5 4.5V9H15",thumb:"M7.5 10.5v9M7.5 10.5l3.3-6a1.8 1.8 0 0 1 3.3 1.2l-.6 3.8H18a2 2 0 0 1 2 2.3l-1.2 6.4a2 2 0 0 1-2 1.8H5a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1z",speaker:"M11 5.5 6.8 9H4v6h2.8l4.2 3.5zM15.2 9.2a4 4 0 0 1 0 5.6M17.9 6.6a7.8 7.8 0 0 1 0 10.8",prev:"m14.5 7-5 5 5 5",next:"m9.5 7 5 5-5 5",close:"m7.5 7.5 9 9m0-9-9 9"},O=["copy","regenerate","feedback","speak"],xa=i=>Array.isArray(i)?[...new Set(i)].filter(u=>O.includes(u)):O,$=(i,u)=>typeof i=="number"&&Number.isFinite(i)?Math.floor(i):u,b=i=>i.toLocaleString("en-US"),ba=["Not accurate","Too long","Didn't follow instructions","Other"];function ga({text:i,actions:u=O,versions:f,version:g,defaultVersion:q,onVersionChange:z,onCopy:h,onRegenerate:N,regenerating:v=!1,onFeedback:w,reasons:S=ba,onSpeak:I,speaking:T,speakDuration:R,quiet:Z=!0,label:aa="Message actions",className:ea}){const C=t.useId(),B=xa(u),s=Math.max(1,$(typeof f=="number"?f:Array.isArray(f)?f.length:1,1)),[ia,V]=t.useState(()=>Math.min(s-1,Math.max(0,$(q,s-1)))),[D,ta]=t.useState(s),[y,k]=t.useState(null),[M,x]=t.useState(!1),[l,H]=t.useState(null),[L,P]=t.useState(""),[n,U]=t.useState(!1);D!==s&&(s>D&&(V(s-1),k(null),x(!1)),ta(s));const d=Math.min(s-1,Math.max(0,$(g,ia))),Y=e=>{const p=Math.min(s-1,Math.max(0,e));p!==d&&(g===void 0&&V(p),z?.(p),c(`Version ${b(p+1)} of ${b(s)}`))},[sa,na]=t.useState(""),c=e=>na(p=>p===e?`${e} `:e),[m,W]=t.useState(0);t.useEffect(()=>{if(!m)return;const e=window.setTimeout(()=>W(0),1600);return()=>window.clearTimeout(e)},[m]);const ra=()=>{try{i!==void 0&&navigator.clipboard?.writeText(i).catch(()=>{})}catch{}h?.(i),W(Date.now()),c("Copied")},[F,oa]=t.useState(0),ua=()=>{oa(e=>e+1),N?.(),c("Regenerating")},ma=()=>{if(y==="up"){k(null),w?.(null);return}k("up"),x(!1),w?.("up"),c("Marked as good response")},la=()=>{if(y==="down"){k(null),x(!1),w?.(null);return}k("down"),x(!0),U(!1),H(null),P(""),w?.("down"),c("Marked as bad response. Tell us what went wrong below")},G=()=>{!l||n||(w?.("down",l==="Other"?L.trim()||"Other":l),U(!0),c("Thanks for the feedback"))};t.useEffect(()=>{if(!n)return;const e=window.setTimeout(()=>x(!1),fa()?1200:1500);return()=>window.clearTimeout(e)},[n]);const K=t.useRef(null),J=()=>{x(!1),K.current?.focus()},[E,Q]=t.useState(!1),_=T??E,da=i?i.trim().split(/\s+/).length:0,X=typeof R=="number"&&R>0?R:Math.max(2600,da*380);t.useEffect(()=>{if(T!==void 0||!E)return;const e=window.setTimeout(()=>{Q(!1),I?.(!1),c("Finished reading")},X);return()=>window.clearTimeout(e)},[E,T,X]);const ca=()=>{const e=!_;T===void 0&&Q(e),I?.(e),c(e?"Reading aloud":"Stopped reading")},pa=!!m||M||_||v,j=e=>a.jsxs("span",{className:"ui-ma__item","data-flash":e.flash?"":void 0,children:[a.jsx("button",{ref:e.refEl,type:"button",className:`ui-ma__btn ui-ma__btn--${e.key}`,"aria-label":e.labelText,"aria-pressed":e.pressed,"aria-expanded":e.expanded,"aria-controls":e.controls,onClick:e.onClick,...e.extra,children:e.children}),a.jsx("span",{className:"ui-ma__tip","aria-hidden":"true",children:a.jsx(A,{id:e.tip,children:e.tip})})]},e.key),ha=B.map(e=>e==="copy"?j({key:"copy",tip:m?"Copied":"Copy",labelText:m?"Copied":"Copy message",onClick:ra,flash:!!m,extra:{"data-done":m?"":void 0},children:a.jsxs("span",{className:"ui-ma__icon ui-ma__morph",children:[a.jsx("span",{className:"ui-ma__layer","data-on":m?void 0:"",children:a.jsx(r,{d:o.copy})}),a.jsx("span",{className:"ui-ma__layer ui-ma__layer--check","data-on":m?"":void 0,children:a.jsx(r,{d:o.check})})]})}):e==="regenerate"?a.jsxs("span",{className:"ui-ma__regen",children:[j({key:"regenerate",tip:v?"Writing…":"Regenerate",labelText:"Regenerate response",onClick:ua,extra:{"data-busy":v?"":void 0},children:a.jsx("span",{className:"ui-ma__icon",children:a.jsx("span",{className:"ui-ma__spin","data-spin":F?"":void 0,children:a.jsx(r,{d:o.redo})},F)})}),a.jsx("span",{className:"ui-ma__versions","data-open":s>1?"":void 0,inert:s<2,children:a.jsxs("span",{className:"ui-ma__versions-clip",role:"group","aria-label":"Versions",children:[a.jsx("button",{type:"button",className:"ui-ma__step","data-dir":"prev","aria-label":"Previous version",disabled:d===0,onClick:()=>Y(d-1),children:a.jsx(r,{d:o.prev})}),a.jsxs("span",{className:"ui-ma__count","aria-label":`Version ${b(d+1)} of ${b(s)}`,children:[a.jsx(A,{id:String(d),className:"ui-ma__count-now",children:b(d+1)}),a.jsx("span",{"aria-hidden":"true",children:"/"}),a.jsx(A,{id:String(s),children:b(s)})]}),a.jsx("button",{type:"button",className:"ui-ma__step","data-dir":"next","aria-label":"Next version",disabled:d>=s-1,onClick:()=>Y(d+1),children:a.jsx(r,{d:o.next})})]})})]},"regenerate"):e==="feedback"?a.jsxs(t.Fragment,{children:[j({key:"up",tip:y==="up"?"Thanks!":"Good response",labelText:"Good response",pressed:y==="up",onClick:ma,children:a.jsx("span",{className:"ui-ma__icon ui-ma__thumb",children:a.jsx(r,{d:o.thumb})})}),j({key:"down",tip:"Bad response",labelText:"Bad response",pressed:y==="down",expanded:M,controls:`${C}-feedback`,onClick:la,refEl:K,children:a.jsx("span",{className:"ui-ma__icon ui-ma__thumb",children:a.jsx(r,{d:o.thumb})})})]},"feedback"):j({key:"speak",tip:_?"Stop":"Read aloud",labelText:_?"Stop reading":"Read aloud",pressed:_,onClick:ca,children:a.jsxs("span",{className:"ui-ma__icon ui-ma__morph",children:[a.jsx("span",{className:"ui-ma__layer","data-on":_?void 0:"",children:a.jsx(r,{d:o.speaker})}),a.jsxs("span",{className:"ui-ma__layer ui-ma__eq","data-on":_?"":void 0,children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]})]})})),_a=e=>{e.key==="Escape"&&(e.stopPropagation(),J())};return a.jsxs("div",{className:["ui-ma",ea].filter(Boolean).join(" "),"data-quiet":Z?"":void 0,"data-active":pa?"":void 0,children:[a.jsx("style",{href:"ui-message-actions",precedence:"default",children:va}),a.jsx("div",{className:"ui-ma__bar",role:"group","aria-label":aa,children:ha}),B.includes("feedback")&&a.jsx("div",{id:`${C}-feedback`,className:"ui-ma__fold","data-open":M?"":void 0,inert:!M,children:a.jsx("div",{className:"ui-ma__clip",children:a.jsxs("div",{className:"ui-ma__panel",role:"group","aria-labelledby":`${C}-ask`,onKeyDown:_a,children:[a.jsxs("div",{className:"ui-ma__panel-head",children:[a.jsx("span",{id:`${C}-ask`,className:"ui-ma__ask",children:"What went wrong?"}),a.jsx("button",{type:"button",className:"ui-ma__close","aria-label":"Close feedback",onClick:J,children:a.jsx(r,{d:o.close})})]}),a.jsxs("div",{className:"ui-ma__chips",children:[(Array.isArray(S)?S:[]).map((e,p)=>a.jsx("button",{type:"button",className:"ui-ma__chip","aria-pressed":l===e,disabled:n,onClick:()=>H(l===e?null:e),title:e,dir:"auto",children:e},`${e}-${p}`)),a.jsx("button",{type:"button",className:"ui-ma__send","data-sent":n?"":void 0,disabled:!l,"aria-disabled":n||void 0,onClick:G,children:a.jsx(A,{id:n?"sent":"send",children:n?a.jsxs(a.Fragment,{children:[a.jsx(r,{d:o.check}),"Thanks!"]}):"Send"})})]}),Array.isArray(S)&&S.includes("Other")&&a.jsx("div",{className:"ui-ma__fold","data-open":l==="Other"&&!n?"":void 0,inert:l!=="Other"||n,children:a.jsx("div",{className:"ui-ma__clip",children:a.jsx("input",{className:"ui-ma__input",value:L,placeholder:"Tell us more (optional)",dir:"auto","aria-label":"What went wrong, in your words",onChange:e=>P(e.target.value),onKeyDown:e=>{e.key==="Enter"&&G()}})})})]})})}),a.jsx("span",{className:"ui-ma__sr","aria-live":"polite",children:sa})]})}const va=`
.ui-ma {
  --ui-ma-card: var(--aui-surface, #ffffff);
  --ui-ma-line: #ececec;
  --ui-ma-ink: var(--aui-ink, #171717);
  --ui-ma-text: var(--aui-ink, #404040);
  --ui-ma-muted: var(--aui-muted, #8f8f8f);
  --ui-ma-well: var(--aui-subtle, #f4f4f5);
  --ui-ma-hover: var(--aui-subtle, rgba(23, 23, 23, 0.06));
  --ui-ma-accent: var(--aui-blue, #4fb0fe);
  --ui-ma-accent-bg: color-mix(in srgb, var(--aui-blue, #0190fe) 10%, transparent);
  --ui-ma-ok: var(--aui-success, #1e8a4f);
  --ui-ma-ok-bg: color-mix(in srgb, var(--aui-green, #5fc88a) 11%, transparent);
  --ui-ma-tip-bg: #171717;
  --ui-ma-tip-text: #ffffff;
  --ui-ma-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-ma-ease: cubic-bezier(0.32, 0.72, 0.24, 1);
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-width: 0;
  container-type: inline-size;
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-ma-text);
  text-align: left;
  -webkit-font-smoothing: antialiased;
}
.ui-ma *, .ui-ma *::before, .ui-ma *::after { box-sizing: border-box; }
:where(.ui-ma) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; text-align: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.ui-ma button:focus-visible { outline: 2px solid var(--ui-ma-focus); outline-offset: 2px; }
/* Typing in a field: no ring – the caret shows where you are, the edge only firms up a little */
.ui-ma .ui-ma__input:is(:focus, :focus-visible) { outline: none; box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ui-ma-ink) 14%, transparent); }
.ui-ma svg { display: block; flex: none; }
.ui-ma__sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

/* ----- The bar: quiet until the message is hovered, something inside is focused or busy ----- */
/* Wraps to a second row in a very narrow message instead of running out of it */
.ui-ma__bar { display: flex; flex-wrap: wrap; align-items: center; gap: 2px; min-height: 30px; transition: opacity 240ms ease; }
.ui-ma[data-quiet] .ui-ma__bar { opacity: 0.6; }
.ui-ma[data-quiet]:hover .ui-ma__bar,
.ui-ma[data-quiet]:focus-within .ui-ma__bar,
.ui-ma[data-quiet][data-active] .ui-ma__bar,
:where([data-ui-message]:hover, [data-ui-message]:focus-within) .ui-ma[data-quiet] .ui-ma__bar { opacity: 1; }

.ui-ma__item { position: relative; display: inline-flex; flex: none; }
.ui-ma__btn { display: grid; place-items: center; width: 30px; height: 30px; border-radius: calc(var(--aui-radius-sm, 7px) + 1px); color: var(--ui-ma-muted); transition: background-color 160ms ease, color 160ms ease; }
.ui-ma__btn:hover { background: var(--ui-ma-hover); color: var(--ui-ma-ink); }
.ui-ma__btn:active .ui-ma__icon { transform: scale(0.9); }
.ui-ma__btn[aria-pressed="true"] { color: var(--ui-ma-ink); }
.ui-ma__btn--speak[aria-pressed="true"] { color: var(--ui-ma-accent); background: var(--ui-ma-accent-bg); }
.ui-ma__btn--copy[data-done] { color: var(--ui-ma-ok); }

.ui-ma__icon { position: relative; display: grid; place-items: center; width: 16px; height: 16px; transition: transform 160ms var(--ui-ma-ease); }
.ui-ma__glyph { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }

/* Two icons on top of each other – one blurs away while the other comes in */
.ui-ma__morph { display: grid; }
.ui-ma__layer { grid-area: 1 / 1; display: grid; place-items: center; opacity: 0; transform: scale(0.6); filter: blur(2px); transition: opacity 200ms ease, transform 300ms var(--ui-ma-ease), filter 200ms ease; }
.ui-ma__layer[data-on] { opacity: 1; transform: none; filter: none; }
.ui-ma__layer--check .ui-ma__glyph { stroke-width: 2; stroke-dasharray: 22; stroke-dashoffset: 22; }
.ui-ma__layer--check[data-on] .ui-ma__glyph { stroke-dashoffset: 0; transition: stroke-dashoffset 340ms var(--ui-ma-ease) 60ms; }

/* Regenerate spins once per press, and keeps going while busy */
.ui-ma__spin { display: grid; place-items: center; }
.ui-ma__spin[data-spin] { animation: ui-ma-spin 640ms var(--ui-ma-ease); }
.ui-ma__btn[data-busy] { color: var(--ui-ma-ink); }
.ui-ma__btn[data-busy] .ui-ma__spin { animation: ui-ma-spin 900ms linear infinite; }

/* Thumbs: down is the same glyph turned around; a vote fills it with a little pop */
.ui-ma__btn--down .ui-ma__glyph { transform: rotate(180deg); }
.ui-ma__thumb .ui-ma__glyph { transition: fill 200ms ease; }
.ui-ma__btn[aria-pressed="true"] .ui-ma__thumb { animation: ui-ma-pop 420ms var(--ui-ma-ease); }
.ui-ma__btn[aria-pressed="true"] .ui-ma__thumb .ui-ma__glyph { fill: currentColor; }

/* Read aloud: four bars that bounce while it plays */
.ui-ma__eq { display: flex; align-items: center; justify-content: center; gap: 2px; width: 16px; height: 16px; }
.ui-ma__eq i { display: block; width: 2px; height: 12px; border-radius: 1px; background: currentColor; transform: scaleY(0.3); }
.ui-ma__eq[data-on] i { animation: ui-ma-eq 900ms ease-in-out infinite; }
.ui-ma__eq[data-on] i:nth-child(2) { animation-delay: -300ms; animation-duration: 760ms; }
.ui-ma__eq[data-on] i:nth-child(3) { animation-delay: -520ms; animation-duration: 1000ms; }
.ui-ma__eq[data-on] i:nth-child(4) { animation-delay: -140ms; animation-duration: 820ms; }

/* ----- Tooltips: above the button, on hover after a beat, on keyboard focus, and briefly after Copy ----- */
.ui-ma__tip { position: absolute; bottom: calc(100% + 6px); left: 50%; z-index: 3; display: block; width: max-content; padding: 3px 7px; border-radius: 6px; background: var(--ui-ma-tip-bg); font-size: 11.5px; font-weight: 500; line-height: 16px; color: var(--ui-ma-tip-text); white-space: nowrap; pointer-events: none; opacity: 0; transform: translate(-50%, 3px); transition: opacity 140ms ease, transform 200ms var(--ui-ma-ease); }
.ui-ma__btn:focus-visible + .ui-ma__tip,
.ui-ma__item[data-flash] .ui-ma__tip { opacity: 1; transform: translate(-50%, 0); transition-delay: 0ms; }
@media (hover: hover) {
  .ui-ma__item:hover .ui-ma__tip { opacity: 1; transform: translate(-50%, 0); transition-delay: 380ms; }
}

/* ----- Version switcher: unfolds next to Regenerate once there are two versions ----- */
.ui-ma__regen { display: inline-flex; align-items: center; flex: none; }
.ui-ma__versions { display: grid; grid-template-columns: 0fr; opacity: 0; transition: grid-template-columns 420ms var(--ui-ma-ease), opacity 220ms ease; }
.ui-ma__versions[data-open] { grid-template-columns: 1fr; opacity: 1; transition: grid-template-columns 420ms var(--ui-ma-ease), opacity 320ms ease 100ms; }
.ui-ma__versions-clip { display: flex; align-items: center; min-width: 0; overflow: hidden; padding-right: 2px; }
.ui-ma__step { display: grid; flex: none; place-items: center; width: 20px; height: 30px; border-radius: var(--aui-radius-sm, 7px); color: var(--ui-ma-muted); transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease; }
.ui-ma__step .ui-ma__glyph { width: 14px; height: 14px; }
.ui-ma__step:hover:not(:disabled) { background: var(--ui-ma-hover); color: var(--ui-ma-ink); }
.ui-ma__step:disabled { cursor: default; opacity: 0.4; }
.ui-ma__count { display: inline-flex; align-items: center; gap: 2px; padding: 0 1px; font-size: 12px; color: var(--ui-ma-muted); white-space: nowrap; font-variant-numeric: tabular-nums; }
.ui-ma__count-now { color: var(--ui-ma-ink); font-weight: 500; }

/* ----- Swapping text ----- */
.ui-ma__swap { display: inline-grid; min-width: 0; }
.ui-ma__swap-item { grid-area: 1 / 1; display: inline-flex; align-items: center; justify-content: center; gap: 4px; min-width: 0; animation: ui-ma-in 300ms ease both; }
.ui-ma__swap-item[data-out] { animation: ui-ma-out 220ms ease both; }

/* ----- Feedback row: unfolds below the bar ----- */
.ui-ma__fold { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows 420ms var(--ui-ma-ease), opacity 220ms ease; }
.ui-ma__fold[data-open] { grid-template-rows: 1fr; opacity: 1; transition: grid-template-rows 420ms var(--ui-ma-ease), opacity 320ms ease 80ms; }
.ui-ma__clip { min-height: 0; overflow: hidden; margin: -1px; padding: 1px; }  /* the 1px keeps the card's hairline from being clipped */
.ui-ma__panel { max-width: 440px; margin: 6px 0 0; padding: 12px 14px 14px; border-radius: var(--aui-radius-lg, 16px); background: var(--ui-ma-card); box-shadow: var(--aui-shadow-card, 0 0 0 1px var(--aui-border, var(--ui-ma-line)), 0 1px 2px rgba(0, 0, 0, 0.04)); }
.ui-ma__panel-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 24px; }
.ui-ma__ask { font-size: 12.5px; font-weight: 500; color: var(--ui-ma-ink); }
.ui-ma__close { display: grid; flex: none; place-items: center; width: 24px; height: 24px; margin-right: -4px; border-radius: var(--aui-radius-sm, 7px); color: var(--ui-ma-muted); transition: background-color 160ms ease, color 160ms ease; }
.ui-ma__close .ui-ma__glyph { width: 14px; height: 14px; }
.ui-ma__close:hover { background: var(--ui-ma-hover); color: var(--ui-ma-ink); }
.ui-ma__chips { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 6px; }
.ui-ma__chip { max-width: 100%; overflow: hidden; text-overflow: ellipsis; height: 26px; padding: 0 9px; border-radius: calc(var(--aui-radius-sm, 7px) + 1px); background: var(--ui-ma-well); font-size: 12px; color: var(--ui-ma-text); white-space: nowrap; transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease, opacity 200ms ease; }
.ui-ma__chip:hover:not(:disabled) { background: var(--ui-ma-line); color: var(--ui-ma-ink); }
.ui-ma__chip[aria-pressed="true"], .ui-ma__chip[aria-pressed="true"]:hover:not(:disabled) { background: var(--ui-ma-accent-bg); color: var(--ui-ma-accent); }
.ui-ma__chip:disabled { cursor: default; }
.ui-ma__chip:disabled:not([aria-pressed="true"]) { opacity: 0.45; }
.ui-ma__send { display: inline-flex; align-items: center; justify-content: center; min-width: 58px; height: 26px; margin-left: auto; padding: 0 11px; border-radius: calc(var(--aui-radius-sm, 7px) + 1px); background: var(--aui-primary, var(--ui-ma-ink)); font-size: 12px; font-weight: 500; color: var(--aui-on-primary, var(--ui-ma-card)); white-space: nowrap; transition: background-color 220ms ease, color 220ms ease, opacity 200ms ease; }
.ui-ma__send:disabled { cursor: default; opacity: 0.32; }
.ui-ma__send[data-sent] { cursor: default; background: var(--ui-ma-ok-bg); color: var(--ui-ma-ok); }
.ui-ma__send .ui-ma__glyph { width: 13px; height: 13px; stroke-width: 2.2; }
.ui-ma__input { display: block; width: 100%; height: 30px; margin-top: 8px; padding: 0 10px; border: 0; border-radius: calc(var(--aui-radius, 10px) - 2px); background: var(--ui-ma-well); font: inherit; font-size: 12.5px; color: var(--ui-ma-ink); outline: none; }
.ui-ma__input::placeholder { color: var(--aui-placeholder, var(--ui-ma-muted)); }

/* ----- Message text that crossfades between versions (MessageText) ----- */
.ui-ma-text { overflow: hidden; transition: height 360ms var(--ui-ma-ease, cubic-bezier(0.32, 0.72, 0.24, 1)); }
.ui-ma-text__swap { display: grid; }
.ui-ma-text__inner { min-width: 0; overflow-wrap: anywhere; }
.ui-ma-text__swap > .ui-ma__swap-item { display: block; animation: ui-ma-text-in 420ms ease both; }
.ui-ma-text__swap > .ui-ma__swap-item[data-out] { animation: ui-ma-out 260ms ease both; }

@keyframes ui-ma-in { from { opacity: 0; filter: blur(2px); } }
@keyframes ui-ma-text-in { from { opacity: 0; filter: blur(3px); } }
@keyframes ui-ma-out { from { opacity: 1; } to { opacity: 0; filter: blur(2px); } }
@keyframes ui-ma-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes ui-ma-pop { 0% { transform: scale(1); } 40% { transform: scale(1.28) rotate(-8deg); } 100% { transform: scale(1); } }
@keyframes ui-ma-eq { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }

/* Narrow: the feedback row stacks its send button under the chips */
@container (max-width: 320px) {
  .ui-ma__send { flex-basis: 100%; }
}

@media (pointer: coarse) {
  .ui-ma[data-quiet] .ui-ma__bar { opacity: 1; }
  .ui-ma__btn { width: 38px; height: 38px; border-radius: calc(var(--aui-radius-sm, 7px) + 3px); }
  .ui-ma__step { width: 28px; height: 38px; }
  .ui-ma__chip, .ui-ma__send { height: 34px; }
  .ui-ma__close { width: 32px; height: 32px; }
  .ui-ma__input { height: 38px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-ma *, .ui-ma *::before, .ui-ma *::after, .ui-ma-text, .ui-ma-text * { animation: none !important; transition: none !important; }
  .ui-ma__eq[data-on] i:nth-child(odd) { transform: scaleY(0.8); }
  .ui-ma__eq[data-on] i:nth-child(even) { transform: scaleY(0.5); }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ma {
  --ui-ma-card: var(--aui-surface, #19191b);
  --ui-ma-line: #2a2a2e;
  --ui-ma-ink: var(--aui-ink, #ededed);
  --ui-ma-text: var(--aui-ink, #c8c8cc);
  --ui-ma-muted: var(--aui-muted, #8b8b92);
  --ui-ma-well: var(--aui-subtle, #222225);
  --ui-ma-hover: var(--aui-subtle, rgba(255, 255, 255, 0.07));
  --ui-ma-accent: #90cdfe;
  --ui-ma-accent-bg: color-mix(in srgb, var(--aui-blue, #4fb0fe) 16%, transparent);
  --ui-ma-ok: var(--aui-success, #7dcf9f);
  --ui-ma-ok-bg: color-mix(in srgb, var(--aui-green, #7dcf9f) 12%, transparent);
  --ui-ma-tip-bg: #ededed;
  --ui-ma-tip-text: #171717;
  --ui-ma-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function ya(){return a.jsx("div",{className:"stage",children:a.jsx(ga,{})})}export{ya as default};
