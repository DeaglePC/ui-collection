import{r as i,j as e}from"./client-CsvIHAk3.js";function ia({label:o,hint:z,error:u,optional:$=!1,counter:D=!1,minRows:d=3,maxRows:b=10,expandable:m=!1,expandedRows:_=16,expanded:T,onExpandedChange:K,onSubmitShortcut:w,className:U,inputClassName:X,id:Y,value:s,defaultValue:C,onChange:q,onKeyDown:A,disabled:y,readOnly:I,maxLength:l,ref:h,"aria-describedby":G,...t}){const k=i.useId(),j=Y??`${k}-input`,L=`${k}-message`,B=`${k}-count`,c=i.useRef(null),[J,H]=i.useState(String(C??"")),x=s!=null?String(s):J,[Q,V]=i.useState(!1),n=m&&(T??Q),[Z,S]=i.useState(!1),M=i.useRef(0);i.useEffect(()=>()=>window.clearTimeout(M.current),[]);const O=!!u||t["aria-invalid"]===!0||t["aria-invalid"]==="true",E=v(u)?u:v(z)?z:null,N=D&&typeof l=="number",P=o==null&&!t["aria-label"]&&!t["aria-labelledby"]&&typeof t.placeholder=="string"?t.placeholder:void 0,g=()=>{const a=c.current;if(!a)return;const r=getComputedStyle(a),p=parseFloat(r.lineHeight)||20,f=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),aa=(n?Math.max(_,d):d)*p+f,W=(n?Math.max(_,b):Math.max(b,d))*p+f,ea=a.style.height;a.style.height="auto";const F=a.scrollHeight,ta=Math.min(Math.max(F,aa),W);a.style.height=ea,a.offsetHeight,a.style.height=`${ta}px`,a.style.overflowY=F>W+1?"auto":"hidden"};i.useLayoutEffect(g,[x,n,d,b,_]),i.useEffect(()=>{const a=c.current;if(!a||typeof ResizeObserver>"u")return;let r=a.clientWidth;const p=new ResizeObserver(()=>{a.clientWidth!==r&&(r=a.clientWidth,g())}),f=window.matchMedia("(pointer: coarse)");return f.addEventListener("change",g),p.observe(a),()=>{p.disconnect(),f.removeEventListener("change",g)}}),i.useEffect(()=>{const a=c.current?.form;if(!a||s!==void 0)return;const r=()=>window.setTimeout(()=>H(c.current?.value??""));return a.addEventListener("reset",r),()=>a.removeEventListener("reset",r)},[s]);const R=()=>{const a=!n;S(!0),window.clearTimeout(M.current),M.current=window.setTimeout(()=>S(!1),320),T===void 0&&V(a),K?.(a)};return e.jsxs("div",{className:["ui-ta",U].filter(Boolean).join(" "),"data-invalid":O||void 0,"data-disabled":y||void 0,"data-readonly":I||void 0,"data-expandable":m||void 0,children:[e.jsx("style",{href:"ui-text-area",precedence:"default",children:oa}),o!=null&&e.jsxs("div",{className:"ui-ta__head",children:[e.jsx("label",{className:"ui-ta__label",htmlFor:j,children:o}),$&&e.jsx("span",{className:"ui-ta__optional",children:"Optional"})]}),e.jsxs("div",{className:"ui-ta__box",children:[e.jsx("textarea",{...t,ref:a=>{c.current=a,typeof h=="function"?h(a):h&&(h.current=a)},id:j,className:["ui-ta__input",X].filter(Boolean).join(" "),rows:d,value:s,defaultValue:C,disabled:y,readOnly:I,maxLength:l,dir:t.dir??"auto","aria-label":t["aria-label"]??P,"aria-invalid":O||void 0,"aria-describedby":[G,E?L:null,N?B:null].filter(Boolean).join(" ")||void 0,"aria-keyshortcuts":w?"Meta+Enter Control+Enter":t["aria-keyshortcuts"],"data-gliding":Z||void 0,onChange:a=>{s===void 0&&H(a.target.value),q?.(a)},onKeyDown:a=>{w&&a.key==="Enter"&&(a.metaKey||a.ctrlKey)&&!a.nativeEvent.isComposing&&(a.preventDefault(),w(a.currentTarget.value)),A?.(a)}}),m&&!y&&e.jsx("button",{type:"button",className:"ui-ta__expand","aria-label":n?"Less room":"More room","aria-pressed":n,"aria-controls":j,onClick:R,children:e.jsx("span",{className:"ui-ta__swap",children:n?e.jsx(na,{}):e.jsx(ra,{})},n?"less":"more")})]}),(E||N)&&e.jsxs("div",{className:"ui-ta__foot",children:[e.jsx("p",{className:"ui-ta__message",id:L,dir:"auto","aria-live":v(u)?"polite":void 0,children:E},v(u)?"error":"hint"),N&&e.jsxs("span",{className:"ui-ta__count",id:B,"data-full":x.length===l||void 0,"data-over":x.length>l||void 0,children:[x.length.toLocaleString(),"/",l.toLocaleString()]})]})]})}const v=o=>o!=null&&typeof o!="boolean"&&o!=="";function ra(){return e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M16.5 3h4.5v4.5M21 3l-6 6M7.5 21H3v-4.5M3 21l6-6"})})}function na(){return e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M14.5 5v4.5H19M14.5 9.5 20 4M9.5 19v-4.5H5M9.5 14.5 4 20"})})}const oa=`
/* Colors and motion as variables – override them on .ui-ta (see Theming in the docs) */
.ui-ta {
  --ui-ta-title: var(--aui-ink, #171717);
  --ui-ta-ink: var(--aui-ink, #171717);
  --ui-ta-muted: var(--aui-muted, #8f8f8f);
  --ui-ta-subtle: var(--aui-muted, #8f8f8f);
  --ui-ta-faint: var(--aui-placeholder, #b5b5b5);
  --ui-ta-icon: var(--aui-muted, #8f8f8f);
  --ui-ta-text: #404040;
  --ui-ta-surface: var(--aui-surface, #ffffff);
  --ui-ta-line: var(--aui-border, #e6e6e8);
  --ui-ta-edge: var(--aui-border-strong, #d4d4d8);
  --ui-ta-edge-focus: var(--aui-border-strong, #b4b4bb);
  --ui-ta-wash: #f4f4f5;
  --ui-ta-readonly: #fafafa;
  --ui-ta-danger: var(--aui-danger, #c4320a);
  --ui-ta-danger-edge: #ff8a7a;
  --ui-ta-danger-edge-focus: #f04438;
  --ui-ta-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-ta-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-ta-ease: cubic-bezier(0.22, 1, 0.36, 1);

  --fs: 13.5px;
  --lh: 21px;

  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  color: var(--ui-ta-ink);
  -webkit-font-smoothing: antialiased;
}
/* Touch screens: 16px text, so iOS doesn't zoom in on focus */
@media (pointer: coarse) {
  .ui-ta { --fs: 16px; --lh: 24px; }
}

.ui-ta__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-ta__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-ta-title); overflow-wrap: anywhere; cursor: default; }
.ui-ta__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-ta-subtle); }

/* The box: white with a 1px gray edge; hover and focus only darken that edge */
.ui-ta__box {
  position: relative;
  display: flex;
  min-width: 0;
  border-radius: var(--aui-radius, 10px);
  background: var(--ui-ta-surface);
  box-shadow: 0 0 0 1px var(--ui-ta-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: text;
  transition: box-shadow 140ms ease, background-color 140ms ease;
}
.ui-ta__box:hover { box-shadow: 0 0 0 1px var(--ui-ta-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-ta__box:focus-within { box-shadow: 0 0 0 1px var(--ui-ta-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-ta[data-invalid] .ui-ta__box { background: var(--ui-ta-danger-wash); box-shadow: 0 0 0 1px var(--ui-ta-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); animation: ui-ta-nudge 320ms var(--ui-ta-ease); }
.ui-ta[data-invalid] .ui-ta__box:focus-within { box-shadow: 0 0 0 1px var(--ui-ta-danger-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-ta[data-readonly] .ui-ta__box { background: var(--ui-ta-readonly); box-shadow: 0 0 0 1px var(--ui-ta-line); cursor: default; }
.ui-ta[data-disabled] .ui-ta__box { background: var(--ui-ta-readonly); box-shadow: 0 0 0 1px var(--ui-ta-line); cursor: not-allowed; }
.ui-ta[data-disabled] { opacity: 0.55; }

.ui-ta__input {
  display: block;
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 8px 12px;
  border: 0;
  border-radius: inherit;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: var(--fs);
  line-height: var(--lh);
  color: var(--ui-ta-ink);
  overflow-wrap: anywhere;
  resize: none;
  overflow-y: hidden;
  scrollbar-width: thin;
  -webkit-appearance: none;
  appearance: none;
}
/* The corner button keeps clear of the text */
.ui-ta[data-expandable] .ui-ta__input { padding-inline-end: 36px; }
.ui-ta__input::placeholder { color: var(--ui-ta-faint); opacity: 1; }
.ui-ta__input:disabled { cursor: not-allowed; }
.ui-ta__input[data-gliding] { transition: height 300ms var(--ui-ta-ease); }

/* More room: a small ghost button in the top corner */
.ui-ta__expand {
  position: absolute;
  top: 4px;
  inset-inline-end: 4px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--ui-ta-icon);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-ta__expand:hover { background: var(--ui-ta-wash); color: var(--ui-ta-ink); }
.ui-ta__expand:focus-visible { outline: 2px solid var(--ui-ta-focus); outline-offset: -2px; }
.ui-ta__expand svg { display: block; }
.ui-ta__swap { display: grid; animation: ui-ta-swap 280ms var(--ui-ta-ease); }
@media (pointer: coarse) {
  .ui-ta__expand { width: 32px; height: 32px; }
  .ui-ta__expand::before { content: ""; position: absolute; inset: -4px; }
  .ui-ta[data-expandable] .ui-ta__input { padding-inline-end: 42px; }
}

/* Under the field: the hint, or the error in its place, and the count */
.ui-ta__foot { display: flex; align-items: flex-start; gap: 12px; min-width: 0; padding: 0 2px; }
.ui-ta__message {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 12.5px;
  line-height: 17px;
  color: var(--ui-ta-subtle);
  overflow-wrap: anywhere;
  animation: ui-ta-message 260ms var(--ui-ta-ease);
}
.ui-ta[data-invalid] .ui-ta__message { color: var(--ui-ta-danger); }
.ui-ta__count { flex: none; margin-left: auto; font-size: 12px; line-height: 16px; font-variant-numeric: tabular-nums; color: var(--ui-ta-faint); transition: color 140ms ease; }
.ui-ta__count[data-full] { color: var(--ui-ta-text); }
.ui-ta__count[data-over] { color: var(--ui-ta-danger); }

@keyframes ui-ta-nudge {
  30% { transform: translateX(-3px); }
  65% { transform: translateX(2px); }
}
@keyframes ui-ta-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}
@keyframes ui-ta-swap {
  from { opacity: 0; transform: scale(0.6); filter: blur(2px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-ta *, .ui-ta[data-invalid] .ui-ta__box { animation-duration: 1ms !important; }
  .ui-ta__box, .ui-ta__input[data-gliding] { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ta {
  --ui-ta-title: var(--aui-ink, #ededed);
  --ui-ta-ink: var(--aui-ink, #ededed);
  --ui-ta-text: #c8c8cc;
  --ui-ta-muted: var(--aui-muted, #8b8b92);
  --ui-ta-subtle: var(--aui-muted, #8b8b92);
  --ui-ta-faint: var(--aui-placeholder, #5c5c63);
  --ui-ta-icon: var(--aui-muted, #8b8b92);
  --ui-ta-surface: var(--aui-surface, #19191b);
  --ui-ta-line: var(--aui-border, #2a2a2e);
  --ui-ta-edge: var(--aui-border-strong, #3a3a40);
  --ui-ta-edge-focus: var(--aui-border-strong, #4e4e55);
  --ui-ta-wash: #26262a;
  --ui-ta-readonly: #151517;
  --ui-ta-danger: var(--aui-danger, #ff8a7a);
  --ui-ta-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-ta-danger-edge-focus: rgba(255, 99, 105, 0.75);
  --ui-ta-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-ta-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function ua(){return e.jsx("div",{className:"stage",children:e.jsx(ia,{})})}export{ua as default};
