import{r as s,j as i}from"./client-CsvIHAk3.js";function sa({value:A,defaultValue:Y=[],onChange:G,label:B,hint:h,error:d,optional:H=!1,placeholder:J="Add…",validate:C,normalize:Q=g=>g.trim(),splitOnSpace:c=!1,max:u,avatar:W=!1,disabled:_=!1,name:T,id:X,className:Z,"aria-label":O,ref:x}){const g=s.useId(),$=X??`${g}-input`,aa=`${g}-label`,E=`${g}-message`,R=`${g}-live`,[ea,ta]=s.useState(Y),r=A??ea,[o,m]=s.useState(""),[w,k]=s.useState(""),[S,p]=s.useState(!1),[M,P]=s.useState(null),[ia,F]=s.useState(""),f=s.useRef(null),K=s.useRef(null),y=u!=null&&r.length>=u,j=d!=null&&typeof d!="boolean"&&d!==""?d:w||null,U=!!d||!!w,v=j??(h!=null&&typeof h!="boolean"&&h!==""?h:null),D=c?/[\s,;]+/:/[,;\n]+/,L=a=>{A===void 0&&ta(a),G?.(a)},b=(a,e="")=>{const t=a.split(D).map(Q).filter(Boolean);if(!t.length){m(e);return}const n=[],z=[];let I="";for(const l of t){const V=C?C(l):!0;V!==!0?(z.push(l),I||=V):r.includes(l)||n.includes(l)?P({tag:l,n:Date.now()}):u!=null&&r.length+n.length>=u?(z.push(l),I||=`Up to ${u} at a time.`):n.push(l)}n.length&&(L([...r,...n]),F(n.length===1?`${n[0]} added`:`${n.length} added`)),m([z.join(c?" ":", "),e].filter(Boolean).join(c?" ":", ")),k(I)},N=(a,e=!0)=>{L(r.filter(t=>t!==a)),F(`${a} removed`),e&&f.current?.focus()},q=()=>[...K.current?.querySelectorAll(".ui-tag__chip")??[]],ra=a=>{if(a.nativeEvent.isComposing)return;const e=a.key===","||a.key===";"||c&&a.key===" ";if((a.key==="Enter"||a.key==="Tab"||e)&&o.trim()){a.preventDefault(),b(o);return}if(e){a.preventDefault();return}if(a.key==="Backspace"&&!o&&r.length){a.preventDefault(),S?(N(r[r.length-1]),p(!1)):p(!0);return}if(a.key==="ArrowLeft"&&a.currentTarget.selectionStart===0&&r.length){a.preventDefault(),q().at(-1)?.focus();return}a.key==="Escape"&&o&&(a.preventDefault(),m(""),k("")),p(!1)},na=(a,e)=>{const t=q();if(a.key==="ArrowLeft")a.preventDefault(),t[Math.max(0,e-1)]?.focus();else if(a.key==="ArrowRight")a.preventDefault(),e+1<t.length?t[e+1].focus():f.current?.focus();else if(a.key==="Backspace"||a.key==="Delete"){a.preventDefault();const n=t[e+1]??null;N(r[e],!1),window.setTimeout(()=>n&&n.isConnected?n.focus():f.current?.focus())}},oa=a=>{const e=a.clipboardData.getData("text");D.test(e.trim())&&(a.preventDefault(),b(o+(o?c?" ":",":"")+e))};return i.jsxs("div",{className:["ui-tag",Z].filter(Boolean).join(" "),"data-invalid":U||void 0,"data-disabled":_||void 0,children:[i.jsx("style",{href:"ui-tag-input",precedence:"default",children:ua}),B!=null&&i.jsxs("div",{className:"ui-tag__head",children:[i.jsx("label",{className:"ui-tag__label",id:aa,htmlFor:$,children:B}),H&&i.jsx("span",{className:"ui-tag__optional",children:"Optional"})]}),i.jsxs("div",{ref:K,className:"ui-tag__box",onPointerDown:a=>{a.target===a.currentTarget&&(a.preventDefault(),f.current?.focus())},children:[r.map((a,e)=>i.jsxs("span",{className:"ui-tag__chip",tabIndex:-1,title:a,"data-armed":S&&e===r.length-1||void 0,"data-flash":M?.tag===a?M.n:void 0,onKeyDown:t=>na(t,e),onAnimationEnd:t=>t.animationName==="ui-tag-flash"&&P(null),children:[W&&i.jsx("span",{className:"ui-tag__avatar","aria-hidden":"true",children:(Array.from(a)[0]??"").toUpperCase()}),i.jsx("span",{className:"ui-tag__text",children:a}),!_&&i.jsx("button",{type:"button",className:"ui-tag__remove",tabIndex:-1,"aria-label":`Remove ${a}`,onPointerDown:t=>t.preventDefault(),onClick:()=>N(a),children:i.jsx("svg",{viewBox:"0 0 12 12",width:"10",height:"10","aria-hidden":"true",children:i.jsx("path",{d:"M3 3l6 6M9 3l-6 6"})})})]},a)),i.jsx("input",{ref:a=>{f.current=a,typeof x=="function"?x(a):x&&(x.current=a)},id:$,className:"ui-tag__input",value:o,placeholder:y?"":r.length?"Add more…":J,disabled:_||y,dir:"auto",autoComplete:"off",spellCheck:!1,"aria-label":O,"aria-invalid":U||void 0,"aria-describedby":[v?E:null,R].filter(Boolean).join(" "),onChange:a=>{const e=a.target.value;p(!1),w&&k("");const t=e.split(D);t.length>1?b(t.slice(0,-1).join(","),t[t.length-1]):m(e)},onKeyDown:ra,onPaste:oa,onBlur:()=>{p(!1),o.trim()&&b(o)}})]}),T&&r.map(a=>i.jsx("input",{type:"hidden",name:T,value:a},a)),(v||u!=null)&&i.jsxs("div",{className:"ui-tag__foot",children:[v&&i.jsx("p",{className:"ui-tag__message",id:E,"aria-live":j?"polite":void 0,children:v},j?"error":"hint"),u!=null&&i.jsxs("span",{className:"ui-tag__count","data-full":y||void 0,children:[r.length,"/",u]})]}),i.jsx("span",{className:"ui-tag__sr",id:R,role:"status",children:ia})]})}const ua=`
/* Colors and motion as variables – override them on .ui-tag (see Theming in the docs) */
.ui-tag {
  --ui-tag-title: var(--aui-ink, #171717);
  --ui-tag-ink: var(--aui-ink, #171717);
  --ui-tag-muted: var(--aui-muted, #404040);
  --ui-tag-subtle: var(--aui-muted, #8f8f8f);
  --ui-tag-faint: var(--aui-placeholder, #b5b5b5);
  --ui-tag-surface: var(--aui-surface, #ffffff);
  --ui-tag-line: var(--aui-border, #e6e6e8);
  --ui-tag-edge: var(--aui-border-strong, #d4d4d8);
  --ui-tag-edge-focus: var(--aui-border-strong, #b4b4bb);
  --ui-tag-chip: #f4f4f5;
  --ui-tag-chip-edge: #e6e6e8;
  --ui-tag-chip-armed: #e4e4e7;
  --ui-tag-avatar: #e9e9ec;
  --ui-tag-flash: rgba(0, 96, 226, 0.14);
  --ui-tag-danger: var(--aui-danger, #c4320a);
  --ui-tag-danger-edge: #ff8a7a;
  --ui-tag-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-tag-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tag-ease: cubic-bezier(0.22, 1, 0.36, 1);

  --fs: 13.5px;

  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-tag-ink);
  -webkit-font-smoothing: antialiased;
}
@media (pointer: coarse) {
  .ui-tag { --fs: 16px; }
}

.ui-tag__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-tag__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-tag-title); overflow-wrap: anywhere; cursor: default; }
.ui-tag__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-tag-subtle); }

/* The box: the Text Field's look; chips wrap onto new lines and it grows with them */
.ui-tag__box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  min-height: 36px;
  min-width: 0;
  max-height: 168px;
  padding: 5px 6px;
  border-radius: var(--aui-radius, 10px);
  background: var(--ui-tag-surface);
  box-shadow: 0 0 0 1px var(--ui-tag-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  cursor: text;
  transition: box-shadow 140ms ease;
}
.ui-tag__box:hover { box-shadow: 0 0 0 1px var(--ui-tag-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tag__box:focus-within { box-shadow: 0 0 0 1px var(--ui-tag-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tag[data-invalid] .ui-tag__box { background: var(--ui-tag-danger-wash); box-shadow: 0 0 0 1px var(--ui-tag-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tag[data-disabled] { opacity: 0.55; }
.ui-tag[data-disabled] .ui-tag__box { cursor: not-allowed; }

/* A chip: a soft gray pill with the text and a small × */
.ui-tag__chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  max-width: 100%;
  height: 24px;
  box-sizing: border-box;
  padding: 0 3px 0 8px;
  border-radius: 7px;
  background: var(--ui-tag-chip);
  box-shadow: inset 0 0 0 1px var(--ui-tag-chip-edge);
  font-size: 13px;
  color: var(--ui-tag-ink);
  outline: none;
  animation: ui-tag-in 220ms var(--ui-tag-ease) both;
  transition: background-color 140ms ease;
}
.ui-tag__chip:has(.ui-tag__avatar) { padding-left: 3px; }
.ui-tag__chip:focus-visible { outline: 2px solid var(--ui-tag-focus); outline-offset: 2px; }
.ui-tag__chip[data-armed] { background: var(--ui-tag-chip-armed); }
.ui-tag__chip[data-flash] { animation: ui-tag-flash 700ms ease; }
.ui-tag__avatar { display: grid; flex: none; place-items: center; width: 18px; height: 18px; border-radius: 50%; background: var(--ui-tag-avatar); font-size: 10px; font-weight: 500; color: var(--ui-tag-muted); }
.ui-tag__text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-tag__remove {
  position: relative;
  display: grid;
  flex: none;
  place-items: center;
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--ui-tag-subtle);
  cursor: pointer;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-tag__remove::before { content: ""; position: absolute; inset: -4px; }
.ui-tag__remove:hover { background: var(--ui-tag-chip-armed); color: var(--ui-tag-ink); }
.ui-tag__remove svg { display: block; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; }

.ui-tag__input {
  flex: 1 0 80px;
  min-width: 80px;
  height: 24px;
  margin: 0;
  padding: 0 6px;
  border: 0;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: var(--fs);
  color: var(--ui-tag-ink);
}
.ui-tag__input::placeholder { color: var(--ui-tag-faint); opacity: 1; }
.ui-tag__input:disabled { cursor: not-allowed; }

.ui-tag__foot { display: flex; align-items: flex-start; gap: 12px; min-width: 0; padding: 0 2px; }
.ui-tag__message { flex: 1; min-width: 0; margin: 0; font-size: 12.5px; line-height: 17px; color: var(--ui-tag-subtle); overflow-wrap: anywhere; animation: ui-tag-message 260ms var(--ui-tag-ease); }
.ui-tag[data-invalid] .ui-tag__message { color: var(--ui-tag-danger); }
.ui-tag__count { flex: none; margin-left: auto; font-size: 12px; line-height: 16px; font-variant-numeric: tabular-nums; color: var(--ui-tag-faint); }
.ui-tag__count[data-full] { color: var(--ui-tag-muted); }
.ui-tag__sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

/* Touch screens: taller chips and a bigger × */
@media (pointer: coarse) {
  .ui-tag__box { min-height: 40px; }
  .ui-tag__chip { height: 30px; font-size: 14px; }
  .ui-tag__remove { width: 24px; height: 24px; }
  .ui-tag__input { height: 30px; }
}

@keyframes ui-tag-in {
  from { opacity: 0; transform: scale(0.85); filter: blur(2px); }
}
@keyframes ui-tag-flash {
  20%, 60% { background: var(--ui-tag-flash); }
}
@keyframes ui-tag-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tag * { animation-duration: 1ms !important; transition-duration: 1ms !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tag {
  --ui-tag-title: var(--aui-ink, #ededed);
  --ui-tag-ink: var(--aui-ink, #ededed);
  --ui-tag-muted: var(--aui-muted, #c8c8cc);
  --ui-tag-subtle: var(--aui-muted, #8b8b92);
  --ui-tag-faint: var(--aui-placeholder, #5c5c63);
  --ui-tag-surface: var(--aui-surface, #19191b);
  --ui-tag-line: var(--aui-border, #2a2a2e);
  --ui-tag-edge: var(--aui-border-strong, #3a3a40);
  --ui-tag-edge-focus: var(--aui-border-strong, #4e4e55);
  --ui-tag-chip: #232326;
  --ui-tag-chip-edge: #2f2f34;
  --ui-tag-chip-armed: #303035;
  --ui-tag-avatar: #2c2c31;
  --ui-tag-flash: rgba(77, 141, 255, 0.28);
  --ui-tag-danger: var(--aui-danger, #ff8a7a);
  --ui-tag-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-tag-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-tag-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function ga(){return i.jsx("div",{className:"stage",children:i.jsx(sa,{})})}export{ga as default};
