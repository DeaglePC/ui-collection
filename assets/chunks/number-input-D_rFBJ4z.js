import{r as s,j as e}from"./client-CsvIHAk3.js";function ji({value:t,defaultValue:u=null,onValueChange:d,min:li,max:di,step:$=1,largeStep:B,unit:M,prefix:I,locale:K,formatOptions:z,label:S,hint:Z,error:y,optional:mi=!1,size:G="md",className:ci,inputClassName:pi,id:fi,name:J,form:Q,disabled:x,readOnly:N,placeholder:F,onKeyDown:hi,onBlur:xi,ref:D,"aria-describedby":bi,...m}){const V=s.useId(),R=fi??`${V}-input`,X=`${V}-message`,b=s.useRef(null),[gi,vi]=s.useState(u),O=t!==void 0,L=O?t:gi,r=L!=null&&Number.isFinite(L)?L:null,[c,g]=s.useState(null),l=$>0&&Number.isFinite($)?$:1,ii=B&&B>0?B:l*10,o=li??-1/0,v=di??1/0,E=s.useMemo(()=>{try{return new Intl.NumberFormat(K,z)}catch{return new Intl.NumberFormat(void 0,z)}},[K,z]),ni=z?.style==="percent",j=s.useMemo(()=>zi(E),[E]),ei=c??(r===null?"":E.format(r)),ai=!!y||m["aria-invalid"]===!0||m["aria-invalid"]==="true",U=T(y)?y:T(Z)?Z:null,wi=Mi.includes(G)?G:"md",_i=S==null&&!m["aria-label"]&&!m["aria-labelledby"]&&typeof F=="string"?F:void 0,C=i=>Math.min(v,Math.max(o,i)),w=i=>{O||vi(i),i!==r&&d?.(i)},ti=i=>{let n=i.replace(/[\s  ]/g,"");if(n==="")return null;j.group&&(n=n.split(j.group).join("")),j.decimal!=="."&&(n=n.split(j.decimal).join("."));const a=/^[-−]|[-−]$|^\(.*\)$/.test(n);if(n=n.replace(/[^\d.]/g,""),n===""||n==="."||(n.match(/\./g)?.length??0)>1)return NaN;const h=Number(n)*(a?-1:1);return ni?h/100:h},ri=()=>{if(c===null)return;const i=ti(c);if(g(null),i===null)return w(null);Number.isFinite(i)&&w(C(Y(i,l)))},p=(i,n=l)=>{if(x||N)return;const a=c!==null?ti(c):r,h=a!==null&&Number.isFinite(a)?a:null,P=Number.isFinite(o)?o:0;let k;if(h===null)k=C(Number.isFinite(o)?o:0);else if(n!==l)k=C(Y(P+Math.round((h+i*n-P)/l)*l,l));else{const ui=(h-P)/n,Ni=i>0?Math.floor(ui+1e-9)+1:Math.ceil(ui-1e-9)-1;k=C(Y(P+Ni*n,n))}if(g(null),k===h){c!==null&&w(k);return}w(k),q(b.current,i)},A=r!==null&&r<=o,H=r!==null&&r>=v,f=s.useRef(null),_=()=>{f.current&&window.clearTimeout(f.current.timer),f.current=null},W=s.useRef(p);W.current=p;const ki=i=>{_(),W.current(i);const n=a=>{f.current={dir:i,timer:window.setTimeout(()=>{W.current(i),n(a>=400?120:Math.max(40,a*.9))},a)}};n(400)};s.useEffect(()=>_,[]),s.useEffect(()=>{f.current&&(f.current.dir>0&&H||f.current.dir<0&&A)&&_()},[H,A]);const oi=typeof M=="string"?M:"",yi=r===null?void 0:`${typeof I=="string"?I:""}${E.format(r)}${oi?` ${oi}`:""}`,si=i=>{const n=x||N||(i>0?H:A);return e.jsx("button",{type:"button",className:"ui-nmi__step",tabIndex:-1,"aria-label":i>0?"Increase":"Decrease","aria-controls":R,"aria-disabled":n||void 0,disabled:x,onPointerDown:a=>{a.button===0&&(a.preventDefault(),n||ki(i))},onPointerUp:_,onPointerLeave:_,onPointerCancel:_,onContextMenu:a=>a.preventDefault(),onClick:a=>{a.detail===0&&!n&&p(i)},children:i>0?e.jsx(Di,{}):e.jsx(Fi,{})})};return e.jsxs("div",{className:["ui-nmi",ci].filter(Boolean).join(" "),"data-size":wi,"data-invalid":ai||void 0,"data-disabled":x||void 0,"data-readonly":N||void 0,children:[e.jsx("style",{href:"ui-number-input",precedence:"default",children:Ei}),S!=null&&e.jsxs("div",{className:"ui-nmi__head",children:[e.jsx("label",{className:"ui-nmi__label",htmlFor:R,children:S}),mi&&e.jsx("span",{className:"ui-nmi__optional",children:"Optional"})]}),e.jsxs("div",{className:"ui-nmi__box",onPointerDown:i=>{i.target===b.current||i.target.closest("button")||(i.preventDefault(),b.current?.focus())},children:[I!=null&&e.jsx("span",{className:"ui-nmi__affix","data-side":"start",children:I}),e.jsx("input",{...m,ref:i=>{b.current=i,typeof D=="function"?D(i):D&&(D.current=i)},id:R,className:["ui-nmi__input",pi].filter(Boolean).join(" "),type:"text",inputMode:o<0?"text":!Number.isInteger(l)||j.decimals||ni?"decimal":"numeric",role:"spinbutton",autoComplete:"off",autoCorrect:"off",spellCheck:!1,value:ei,placeholder:F,disabled:x,readOnly:N,form:Q,"aria-label":m["aria-label"]??_i,"aria-valuenow":r??void 0,"aria-valuemin":Number.isFinite(o)?o:void 0,"aria-valuemax":Number.isFinite(v)?v:void 0,"aria-valuetext":yi,"aria-invalid":ai||void 0,"aria-describedby":[bi,U?X:null].filter(Boolean).join(" ")||void 0,style:{width:`calc(${Math.max(2,(ei||F||"").length)}ch + 2px)`,...m.style},onChange:i=>g(i.target.value.replace(Ii,"")),onBlur:i=>{ri(),xi?.(i)},onKeyDown:i=>{if(hi?.(i),i.defaultPrevented||i.nativeEvent.isComposing)return;const n={ArrowUp:()=>p(1),ArrowDown:()=>p(-1),PageUp:()=>p(1,ii),PageDown:()=>p(-1,ii),Enter:()=>ri(),Escape:()=>g(null)};Number.isFinite(o)&&(n.Home=()=>(g(null),w(o),q(b.current,-1))),Number.isFinite(v)&&(n.End=()=>(g(null),w(v),q(b.current,1)));const a=n[i.key];!a||N||i.key==="Escape"&&c===null||(i.key!=="Enter"&&i.preventDefault(),a())}}),M!=null&&e.jsx("span",{className:"ui-nmi__affix","data-side":"end",children:M}),e.jsxs("span",{className:"ui-nmi__steps",children:[si(-1),si(1)]})]}),J&&e.jsx("input",{type:"hidden",name:J,form:Q,value:r??"",disabled:x}),U&&e.jsx("p",{className:"ui-nmi__message",id:X,dir:"auto","aria-live":T(y)?"polite":void 0,children:U},T(y)?"error":"hint")]})}const Mi=["sm","md","lg"],Ii=/[^\d.,'’\s  \-−%]/g,T=t=>t!=null&&typeof t!="boolean"&&t!=="";function zi(t){const u=t.formatToParts(-12345.6789);return{group:u.find(d=>d.type==="group")?.value??"",decimal:u.find(d=>d.type==="decimal")?.value??".",decimals:(t.resolvedOptions().minimumFractionDigits??0)>0}}function Y(t,u){const d=Math.max(10,(String(u).split(".")[1]??"").length);return Number(t.toFixed(Math.min(d,15)))}function q(t,u){!t||typeof t.animate!="function"||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||t.animate([{transform:`translateY(${u*5}px)`,opacity:.35,filter:"blur(1.5px)"},{transform:"none",opacity:1,filter:"none"}],{duration:220,easing:"cubic-bezier(0.22, 1, 0.36, 1)"})}function Fi(){return e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round","aria-hidden":"true",children:e.jsx("path",{d:"M20 12H4"})})}function Di(){return e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round","aria-hidden":"true",children:e.jsx("path",{d:"M12 4v16M20 12H4"})})}const Ei=`
/* Colors and motion as variables – override them on .ui-nmi (see Theming in the docs) */
.ui-nmi {
  --ui-nmi-title: var(--aui-ink, #171717);
  --ui-nmi-ink: var(--aui-ink, #171717);
  --ui-nmi-subtle: var(--aui-muted, #8f8f8f);
  --ui-nmi-faint: var(--aui-placeholder, #b5b5b5);
  --ui-nmi-icon: var(--aui-muted, #8f8f8f);
  --ui-nmi-surface: var(--aui-surface, #ffffff);
  --ui-nmi-wash: #f4f4f5;
  --ui-nmi-press: #ebebed;
  --ui-nmi-readonly: #fafafa;
  --ui-nmi-line: var(--aui-border, #e6e6e8);
  --ui-nmi-shadow: 0 0 0 1px var(--ui-nmi-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  --ui-nmi-shadow-hover: 0 0 0 1px var(--aui-border-strong, #d4d4d8), 0 1px 2px rgba(0, 0, 0, 0.04);
  --ui-nmi-shadow-focus: 0 0 0 1px var(--aui-border-strong, #b4b4bb), 0 1px 2px rgba(0, 0, 0, 0.04);
  --ui-nmi-danger: var(--aui-danger, #c4320a);
  --ui-nmi-danger-edge: #ff8a7a;
  --ui-nmi-danger-edge-focus: #f04438;
  --ui-nmi-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-nmi-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-nmi-ease: cubic-bezier(0.22, 1, 0.36, 1);

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
  color: var(--ui-nmi-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-nmi[data-size="sm"] { --h: 32px; --px: 10px; --fs: 13px; --radius: calc(var(--aui-radius, 10px) - 1px); }
.ui-nmi[data-size="lg"] { --h: 40px; --px: 14px; --fs: 14px; --radius: calc(var(--aui-radius, 10px) + 2px); }
/* Touch screens: a comfortable tap height, and 16px text so iOS doesn't zoom in on focus */
@media (pointer: coarse) {
  .ui-nmi { --fs: 16px; }
  .ui-nmi[data-size="sm"] { --h: 36px; }
  .ui-nmi[data-size="md"] { --h: 40px; }
  .ui-nmi[data-size="lg"] { --h: 44px; }
}

.ui-nmi__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-nmi__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-nmi-title); overflow-wrap: anywhere; cursor: default; }
.ui-nmi__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-nmi-subtle); }

/* The box: white with a 1px gray edge; hover and focus only darken that edge – no ring */
.ui-nmi__box {
  display: flex;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  height: var(--h);
  min-width: 0;
  padding-inline: var(--px) 5px;
  border-radius: var(--radius);
  background: var(--ui-nmi-surface);
  box-shadow: var(--ui-nmi-shadow);
  cursor: text;
  transition: box-shadow 160ms ease, background-color 160ms ease;
}
.ui-nmi__box:hover { box-shadow: var(--ui-nmi-shadow-hover); }
.ui-nmi__box:has(.ui-nmi__input:focus) { box-shadow: var(--ui-nmi-shadow-focus); }
.ui-nmi[data-invalid] .ui-nmi__box { background: var(--ui-nmi-danger-wash); box-shadow: 0 0 0 1px var(--ui-nmi-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-nmi[data-invalid] .ui-nmi__box:has(.ui-nmi__input:focus) { box-shadow: 0 0 0 1px var(--ui-nmi-danger-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-nmi[data-readonly] .ui-nmi__box { background: var(--ui-nmi-readonly); box-shadow: 0 0 0 1px var(--ui-nmi-line); cursor: default; }
.ui-nmi[data-disabled] .ui-nmi__box { background: var(--ui-nmi-readonly); box-shadow: 0 0 0 1px var(--ui-nmi-line); cursor: not-allowed; }
.ui-nmi[data-disabled] { opacity: 0.55; }

/* The value: as wide as its text (set inline), so the unit follows it; it shrinks before the buttons do */
.ui-nmi__input {
  flex: 0 1 auto;
  min-width: 2ch;
  max-width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: var(--fs);
  font-variant-numeric: tabular-nums;
  color: var(--ui-nmi-ink);
  text-overflow: ellipsis;
  -webkit-appearance: none;
  appearance: none;
}
.ui-nmi__input::placeholder { color: var(--ui-nmi-faint); opacity: 1; }
.ui-nmi__input:disabled { cursor: not-allowed; }

/* Prefix and unit: quiet text right against the value */
.ui-nmi__affix {
  display: inline-flex;
  flex: 0 1 auto;
  align-items: center;
  min-width: 0;
  max-width: 40%;
  font-size: var(--fs);
  color: var(--ui-nmi-subtle);
  white-space: nowrap;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ui-nmi__affix[data-side="start"] { margin-inline-end: -2px; }
.ui-nmi__affix > svg { display: block; width: 16px; height: 16px; flex: none; color: var(--ui-nmi-icon); }

/* − and +: two small buttons at the end */
.ui-nmi__steps { display: flex; flex: none; gap: 2px; margin-inline-start: auto; padding-inline-start: 4px; }
.ui-nmi__step {
  display: grid;
  place-items: center;
  position: relative;
  width: calc(var(--h) - 10px);
  height: calc(var(--h) - 10px);
  max-width: 28px;
  max-height: 28px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: calc(var(--radius) - 4px);
  background: transparent;
  color: var(--ui-nmi-icon);
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-nmi__step:hover:not([aria-disabled]):not(:disabled) { background: var(--ui-nmi-wash); color: var(--ui-nmi-ink); }
.ui-nmi__step:active:not([aria-disabled]):not(:disabled) { background: var(--ui-nmi-press); }
.ui-nmi__step:focus-visible { outline: 2px solid var(--ui-nmi-focus); outline-offset: -2px; }
.ui-nmi__step[aria-disabled], .ui-nmi__step:disabled { opacity: 0.35; cursor: default; }
.ui-nmi__step svg { display: block; transition: transform 120ms var(--ui-nmi-ease); }
.ui-nmi__step:active:not([aria-disabled]):not(:disabled) svg { transform: scale(0.86); }
.ui-nmi[data-readonly] .ui-nmi__steps { display: none; }
/* Touch screens: bigger buttons and a hit area that reaches past them */
@media (pointer: coarse) {
  .ui-nmi__step { width: 32px; height: 32px; max-width: none; max-height: none; }
  .ui-nmi__step::before { content: ""; position: absolute; inset: -4px 0; }
}

/* Under the field: the hint, or the error in its place */
.ui-nmi__message {
  margin: 0;
  padding: 0 2px;
  font-size: 12.5px;
  line-height: 17px;
  color: var(--ui-nmi-subtle);
  overflow-wrap: anywhere;
  animation: ui-nmi-message 260ms var(--ui-nmi-ease);
}
.ui-nmi[data-invalid] .ui-nmi__message { color: var(--ui-nmi-danger); }

@keyframes ui-nmi-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-nmi * { animation-duration: 1ms !important; transition-duration: 1ms !important; }
  .ui-nmi__box { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-nmi {
  --ui-nmi-title: var(--aui-ink, #ededed);
  --ui-nmi-ink: var(--aui-ink, #ededed);
  --ui-nmi-subtle: var(--aui-muted, #8b8b92);
  --ui-nmi-faint: var(--aui-placeholder, #5c5c63);
  --ui-nmi-icon: var(--aui-muted, #8b8b92);
  --ui-nmi-surface: var(--aui-surface, #19191b);
  --ui-nmi-wash: #26262a;
  --ui-nmi-press: #2e2e33;
  --ui-nmi-readonly: #151517;
  --ui-nmi-line: var(--aui-border, #2a2a2e);
  --ui-nmi-shadow: 0 0 0 1px var(--ui-nmi-line);
  --ui-nmi-shadow-hover: 0 0 0 1px var(--aui-border-strong, #3a3a40);
  --ui-nmi-shadow-focus: 0 0 0 1px var(--aui-border-strong, #4e4e55);
  --ui-nmi-danger: var(--aui-danger, #ff8a7a);
  --ui-nmi-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-nmi-danger-edge-focus: rgba(255, 99, 105, 0.75);
  --ui-nmi-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-nmi-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function Pi(){return e.jsx("div",{className:"stage",children:e.jsx(ji,{})})}export{Pi as default};
