import{r as i,j as t}from"./client-CsvIHAk3.js";function Q({label:r,hint:k,error:f,prefix:p,suffix:y,size:j="md",optional:Z=!1,clearable:O=!1,copyable:C=!1,counter:P=!1,onClear:W,onKeyDown:$,className:F,inputClassName:H,id:U,type:N="text",value:n,defaultValue:z,onChange:X,disabled:d,readOnly:m,maxLength:l,ref:x,"aria-describedby":q,...a}){const v=i.useId(),I=U??`${v}-input`,E=`${v}-message`,L=`${v}-count`,o=i.useRef(null),[A,M]=i.useState(String(z??"")),s=n!=null?String(n):A,g=N==="password",[u,K]=i.useState(!1),[c,T]=i.useState(!1),_=i.useRef(0);i.useEffect(()=>()=>window.clearTimeout(_.current),[]);const S=!!f||a["aria-invalid"]===!0||a["aria-invalid"]==="true",b=h(f)?f:h(k)?k:null,w=P&&typeof l=="number",Y=r==null&&!a["aria-label"]&&!a["aria-labelledby"]&&typeof a.placeholder=="string"?a.placeholder:void 0;i.useEffect(()=>{const e=o.current?.form;if(!e||n!==void 0)return;const D=()=>window.setTimeout(()=>M(o.current?.value??""));return e.addEventListener("reset",D),()=>e.removeEventListener("reset",D)},[n]);const B=O&&!d&&!m&&s.length>0,G=V.includes(j)?j:"md",R=()=>{const e=o.current;e&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(e,""),e.dispatchEvent(new Event("input",{bubbles:!0})),e.focus(),W?.())},J=async()=>{try{await navigator.clipboard.writeText(s)}catch{o.current?.select();return}T(!0),window.clearTimeout(_.current),_.current=window.setTimeout(()=>T(!1),1600)};return t.jsxs("div",{className:["ui-tf",F].filter(Boolean).join(" "),"data-size":G,"data-invalid":S||void 0,"data-disabled":d||void 0,"data-readonly":m||void 0,children:[t.jsx("style",{href:"ui-text-field",precedence:"default",children:nt}),r!=null&&t.jsxs("div",{className:"ui-tf__head",children:[t.jsx("label",{className:"ui-tf__label",htmlFor:I,children:r}),Z&&t.jsx("span",{className:"ui-tf__optional",children:"Optional"})]}),t.jsxs("div",{className:"ui-tf__box",onPointerDown:e=>{e.target===o.current||e.target.closest("button")||(e.preventDefault(),o.current?.focus())},children:[p!=null&&t.jsx("span",{className:"ui-tf__affix","data-side":"start",children:typeof p=="string"?t.jsx("span",{className:"ui-tf__affix-text",children:p}):p}),t.jsx("input",{...a,ref:e=>{o.current=e,typeof x=="function"?x(e):x&&(x.current=e)},id:I,className:["ui-tf__input",H].filter(Boolean).join(" "),type:g&&u?"text":N,value:n,defaultValue:z,disabled:d,readOnly:m,maxLength:l,"aria-label":a["aria-label"]??Y,"aria-invalid":S||void 0,"aria-describedby":[q,b?E:null,w?L:null].filter(Boolean).join(" ")||void 0,dir:a.dir??"auto","data-revealed":g?u?"true":"false":void 0,onKeyDown:e=>{e.key==="Escape"&&B&&(e.preventDefault(),R()),$?.(e)},onChange:e=>{n===void 0&&M(e.target.value),X?.(e)}}),y!=null&&t.jsx("span",{className:"ui-tf__affix","data-side":"end",children:y}),B&&t.jsx("button",{type:"button",className:"ui-tf__action","aria-label":"Clear",tabIndex:-1,onClick:R,children:t.jsx(tt,{})}),g&&!d&&t.jsx("button",{type:"button",className:"ui-tf__action","aria-label":u?"Hide password":"Show password","aria-pressed":u,onClick:()=>K(e=>!e),children:t.jsx("span",{className:"ui-tf__swap",children:u?t.jsx(at,{}):t.jsx(et,{})},u?"hide":"show")}),C&&t.jsx("button",{type:"button",className:"ui-tf__action","data-copied":c||void 0,"aria-label":c?"Copied":"Copy",onClick:J,disabled:d||!s,children:t.jsx("span",{className:"ui-tf__swap",children:c?t.jsx(rt,{}):t.jsx(it,{})},c?"done":"copy")}),C&&t.jsx("span",{className:"ui-tf__sr",role:"status",children:c?"Copied":""})]}),(b||w)&&t.jsxs("div",{className:"ui-tf__foot",children:[t.jsx("p",{className:"ui-tf__message",id:E,dir:"auto","aria-live":h(f)?"polite":void 0,children:b},h(f)?"error":"hint"),w&&t.jsxs("span",{className:"ui-tf__count",id:L,"data-full":s.length===l||void 0,"data-over":s.length>l||void 0,children:[s.length,"/",l]})]})]})}const V=["sm","md","lg"],h=r=>r!=null&&typeof r!="boolean"&&r!=="";function tt(){return t.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3.53 12.22a.75.75 0 1 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 1.06-1.06L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47Z"})})}function et(){return t.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t.jsx("path",{d:"M21.544 11.045C21.848 11.471 22 11.685 22 12c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045Z"}),t.jsx("path",{d:"M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"})]})}function at(){return t.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t.jsx("path",{d:"M19.439 15.439c.996-.91 1.719-1.82 2.105-2.36.304-.426.456-.64.456-.955 0-.316-.152-.529-.456-.955C20.178 9.253 16.689 5.124 12 5.124c-.908 0-1.77.155-2.582.418M6.74 6.869c-2.09 1.267-3.6 3.083-4.284 4.04-.304.426-.456.64-.456.955 0 .316.152.529.456.955C3.822 14.735 7.311 18.864 12 18.864c2.008 0 3.786-.757 5.26-1.746"}),t.jsx("path",{d:"M9.858 10a2.98 2.98 0 0 0-.858 2.124 3 3 0 0 0 5.124 2.12M3 3l18 18"})]})}function it(){return t.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t.jsx("path",{d:"M9 15c0-2.828 0-4.243.879-5.121C10.757 9 12.172 9 15 9h1c2.828 0 4.243 0 5.121.879C22 10.757 22 12.172 22 15v1c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1c-2.828 0-4.243 0-5.121-.879C9 20.243 9 18.828 9 16v-1Z"}),t.jsx("path",{d:"M17 9c-.003-2.957-.047-4.489-.908-5.538a4 4 0 0 0-.554-.554C14.43 2 12.788 2 9.5 2c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c1.05.86 2.58.906 5.538.908"})]})}function rt(){return t.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("path",{className:"ui-tf__check",d:"M5 12.5 9.5 17 19 7",pathLength:1})})}const nt=`
/* Colors and motion as variables – override them on .ui-tf (see Theming in the docs) */
.ui-tf {
  --ui-tf-ink: var(--aui-ink, #171717);
  --ui-tf-text: #404040;
  --ui-tf-muted: var(--aui-muted, #8f8f8f);
  --ui-tf-faint: var(--aui-placeholder, #b5b5b5);
  --ui-tf-surface: var(--aui-surface, #ffffff);
  --ui-tf-line: var(--aui-border, #e6e6e8);
  --ui-tf-edge: var(--aui-border-strong, #d4d4d8);
  --ui-tf-edge-focus: var(--aui-border-strong, #b4b4bb);
  --ui-tf-wash: #f4f4f5;
  --ui-tf-readonly: #fafafa;
  --ui-tf-danger: var(--aui-danger, #c4320a);
  --ui-tf-danger-edge: #ff8a7a;
  --ui-tf-danger-edge-focus: #f04438;
  --ui-tf-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-tf-success: var(--aui-success, #1e8a4f);
  --ui-tf-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tf-ease: cubic-bezier(0.22, 1, 0.36, 1);

  --h: 36px;
  --px: 12px;
  --fs: 13.5px;
  --radius: var(--aui-radius, 10px);

  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  color: var(--ui-tf-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-tf[data-size="sm"] { --h: 32px; --px: 10px; --fs: 13px; --radius: calc(var(--aui-radius, 10px) - 1px); }
.ui-tf[data-size="lg"] { --h: 40px; --px: 14px; --fs: 14px; --radius: calc(var(--aui-radius, 10px) + 2px); }
/* Touch screens: a comfortable tap height, and 16px text so iOS doesn't zoom in on focus */
@media (pointer: coarse) {
  .ui-tf { --fs: 16px; }
  .ui-tf[data-size="sm"] { --h: 36px; }
  .ui-tf[data-size="md"] { --h: 40px; }
  .ui-tf[data-size="lg"] { --h: 44px; }
}

.ui-tf__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-tf__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-tf-ink); overflow-wrap: anywhere; cursor: default; }
.ui-tf__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-tf-muted); }

/* The box: white with a 1px gray edge; hover and focus only darken that edge */
.ui-tf__box {
  display: flex;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;
  height: var(--h);
  min-width: 0;
  padding-block: 0;
  padding-inline: var(--px) calc(var(--px) - 6px);
  border-radius: var(--radius);
  background: var(--ui-tf-surface);
  box-shadow: 0 0 0 1px var(--ui-tf-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: text;
  transition: box-shadow 160ms ease, background-color 160ms ease;
}
.ui-tf__box:not(:has(.ui-tf__action)) { padding-inline-end: var(--px); }
.ui-tf__box:hover { box-shadow: 0 0 0 1px var(--ui-tf-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tf__box:focus-within { box-shadow: 0 0 0 1px var(--ui-tf-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tf[data-invalid] .ui-tf__box { background: var(--ui-tf-danger-wash); box-shadow: 0 0 0 1px var(--ui-tf-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); animation: ui-tf-nudge 320ms var(--ui-tf-ease); }
.ui-tf[data-invalid] .ui-tf__box:focus-within { box-shadow: 0 0 0 1px var(--ui-tf-danger-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tf[data-readonly] .ui-tf__box { background: var(--ui-tf-readonly); box-shadow: 0 0 0 1px var(--ui-tf-line); cursor: default; }
.ui-tf[data-disabled] .ui-tf__box { background: var(--ui-tf-readonly); box-shadow: 0 0 0 1px var(--ui-tf-line); cursor: not-allowed; }
.ui-tf[data-disabled] { opacity: 0.55; }

.ui-tf__input {
  flex: 1;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: var(--fs);
  color: var(--ui-tf-ink);
  text-overflow: ellipsis;
  -webkit-appearance: none;
  appearance: none;
}
/* Next to a prefix or suffix the value keeps at least 6em – they shrink first */
.ui-tf__box:has(> .ui-tf__affix) .ui-tf__input { flex: 1 0 6em; min-width: 6em; }
.ui-tf__input::placeholder { color: var(--ui-tf-faint); opacity: 1; }
.ui-tf__input:disabled { cursor: not-allowed; }
.ui-tf__input[type="search"]::-webkit-search-cancel-button { display: none; }
.ui-tf__input[type="number"] { -moz-appearance: textfield; font-variant-numeric: tabular-nums; }
.ui-tf__input[type="number"]::-webkit-inner-spin-button,
.ui-tf__input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
/* Revealing a password: the characters come out of a short blur */
.ui-tf__input[data-revealed] { animation: ui-tf-reveal 260ms var(--ui-tf-ease); }
.ui-tf__input[data-revealed="false"] { animation-name: ui-tf-reveal-hide; }

/* Prefix and suffix: quiet text or an icon inside the box */
.ui-tf__affix {
  display: inline-flex;
  flex: 0 1 auto;
  align-items: center;
  min-width: 0;
  max-width: 70%;
  font-size: var(--fs);
  color: var(--ui-tf-muted);
  white-space: nowrap;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ui-tf__affix[data-side="start"] { margin-inline-end: -6px; }
.ui-tf__affix[data-side="end"] { max-width: 40%; margin-inline-start: -6px; }
/* A long prefix loses its start: "…/workspaces/" stays next to the value */
.ui-tf__affix-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ui-tf__affix[data-side="start"]:dir(ltr) .ui-tf__affix-text { direction: rtl; text-align: left; }
.ui-tf__affix[data-side="start"]:dir(ltr) .ui-tf__affix-text::after { content: "\\200E"; }
.ui-tf__affix[data-side]:has(> svg) { margin: 0; color: var(--ui-tf-muted); }
.ui-tf__affix > svg { display: block; width: 16px; height: 16px; flex: none; }

/* Clear, reveal and copy: small buttons at the end */
.ui-tf__action {
  display: grid;
  place-items: center;
  flex: none;
  width: calc(var(--h) - 10px);
  height: calc(var(--h) - 10px);
  position: relative;
  max-width: 28px;
  max-height: 28px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--ui-tf-muted);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-tf__action + .ui-tf__action { margin-left: -4px; }
/* Touch screens: bigger buttons and a hit area that reaches past them */
@media (pointer: coarse) {
  .ui-tf__action { width: 32px; height: 32px; max-width: none; max-height: none; }
  .ui-tf__action::before { content: ""; position: absolute; inset: -4px; }
}
.ui-tf__action:hover:not(:disabled) { background: var(--ui-tf-wash); color: var(--ui-tf-ink); }
.ui-tf__action:focus-visible { outline: 2px solid var(--ui-tf-focus); outline-offset: -2px; }
.ui-tf__action:disabled { opacity: 0.4; cursor: default; }
.ui-tf__action[data-copied] { color: var(--ui-tf-success); }
.ui-tf__action svg { display: block; }
.ui-tf__swap { display: grid; animation: ui-tf-swap 280ms var(--ui-tf-ease); }
.ui-tf__check { stroke-dasharray: 1; animation: ui-tf-draw 320ms 60ms var(--ui-tf-ease) both; }

/* Under the field: the hint, or the error in its place, and the count */
.ui-tf__foot { display: flex; align-items: flex-start; gap: 12px; min-width: 0; padding: 0 2px; }
.ui-tf__message {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 12.5px;
  line-height: 17px;
  color: var(--ui-tf-muted);
  overflow-wrap: anywhere;
  animation: ui-tf-message 260ms var(--ui-tf-ease);
}
.ui-tf[data-invalid] .ui-tf__message { color: var(--ui-tf-danger); }
.ui-tf__count { flex: none; margin-left: auto; font-size: 12px; line-height: 17px; font-variant-numeric: tabular-nums; color: var(--ui-tf-faint); transition: color 140ms ease; }
.ui-tf__count[data-over] { color: var(--ui-tf-danger); }
.ui-tf__sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
.ui-tf__count[data-full] { color: var(--ui-tf-text); }

@keyframes ui-tf-nudge {
  30% { transform: translateX(-3px); }
  65% { transform: translateX(2px); }
}
@keyframes ui-tf-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}
@keyframes ui-tf-reveal {
  from { filter: blur(4px); opacity: 0.4; }
}
@keyframes ui-tf-reveal-hide {
  from { filter: blur(3px); opacity: 0.5; }
}
@keyframes ui-tf-swap {
  from { opacity: 0; transform: scale(0.6); filter: blur(2px); }
}
@keyframes ui-tf-draw {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tf *, .ui-tf[data-invalid] .ui-tf__box { animation-duration: 1ms !important; }
  .ui-tf__box { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tf {
  --ui-tf-ink: var(--aui-ink, #ededed);
  --ui-tf-text: #c8c8cc;
  --ui-tf-muted: var(--aui-muted, #8b8b92);
  --ui-tf-faint: var(--aui-placeholder, #5c5c63);
  --ui-tf-surface: var(--aui-surface, #19191b);
  --ui-tf-line: var(--aui-border, #2a2a2e);
  --ui-tf-edge: var(--aui-border-strong, #3a3a40);
  --ui-tf-edge-focus: var(--aui-border-strong, #4e4e55);
  --ui-tf-wash: #26262a;
  --ui-tf-readonly: #151517;
  --ui-tf-danger: var(--aui-danger, #ff8a7a);
  --ui-tf-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-tf-danger-edge-focus: rgba(255, 99, 105, 0.75);
  --ui-tf-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-tf-success: var(--aui-success, #7dcf9f);
  --ui-tf-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function st(){return t.jsx("div",{className:"stage",children:t.jsx(Q,{})})}export{st as default};
