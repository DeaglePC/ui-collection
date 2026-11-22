import{r as a,j as o}from"./client-CsvIHAk3.js";const O=p=>String(p).padStart(2,"0"),zt=p=>p>=86400?`${Math.floor(p/86400)}d ${Math.floor(p%86400/3600)}h`:p>=3600?`${Math.floor(p/3600)}:${O(Math.floor(p%3600/60))}:${O(p%60)}`:`${Math.floor(p/60)}:${O(p%60)}`,Nt=24,Mt=p=>p.normalize("NFKC").replace(/[\u0660-\u0669]/g,f=>String(f.charCodeAt(0)-1632)).replace(/[\u06f0-\u06f9]/g,f=>String(f.charCodeAt(0)-1776)),St=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,rt={check:"M5.5 12.5l4 4L18.5 8",alert:"M12 8v4.5M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"};function Rt({length:p=6,separator:f=!1,numeric:h=!0,value:W,defaultValue:st="",onChange:pt,onComplete:ut,status:u="idle",errorMessage:M="That code didn't work. Try again.",clearOnError:ct=!0,successLabel:S="Verified",onResend:R,resendIn:$=30,align:lt="start",disabled:m=!1,autoFocus:F=!1,label:dt="Verification code",className:ft}){const n=Number.isFinite(p)?Math.min(Nt,Math.max(1,Math.floor(p))):6,E=Number.isFinite($)&&$>0?Math.floor($):0,g=t=>{let e="";for(const i of Mt(String(t??""))){const s=h?/[0-9]/.test(i)?i:"":/[a-z0-9]/i.test(i)?i.toUpperCase():"";s&&e.length<n&&(e+=s)}return e},[ht,mt]=a.useState(()=>g(st)),r=g(W??ht),[H,T]=a.useState(Math.min(r.length,n-1)),[K,V]=a.useState(!1),[Y,C]=a.useState(!1),[gt,U]=a.useState(!1),[G,J]=a.useState(!1),[b,Q]=a.useState(E),[xt,x]=a.useState(""),A=a.useRef(null),w=a.useRef(null),D=a.useRef(null),y=a.useRef(null),X=a.useRef(null),k=a.useRef([]),Z=a.useRef([]),P=a.useId(),I=a.useRef(r),tt=a.useRef([]),et=a.useRef([]),vt=a.useRef(0);if(I.current!==r){const t=I.current,e=[...r].map((l,d)=>l!==t[d]),i=e.indexOf(!0),s=e.filter(Boolean).length>1;e.forEach((l,d)=>{l&&(tt.current[d]=++vt.current,et.current[d]=s?(d-i)*45:0)}),I.current=r}const c=Math.min(H,r.length,n-1),v=f===!0?Math.floor(n/2):typeof f=="number"?f:0,j=u==="verifying"||u==="success",L=j||G||m,z=u==="error"&&Y,_t=!j&&!m&&(K||r.length>0&&r.length<n),N=(t,e,i=!0)=>{W===void 0&&mt(t),t!==r&&pt?.(t),T(Math.max(0,Math.min(e,t.length,n-1))),i&&(Y&&t.length&&C(!1),t.length===n&&t!==r&&ut?.(t))},bt=t=>{if(L)return;const e=t.value,i=t.selectionStart??e.length,s=g(e),l=g(e.slice(0,i)).length;if(s===r){t.value=r,_();return}N(s,l)},wt=t=>{if(t.preventDefault(),L)return;const e=g(t.clipboardData.getData("text"));if(!e)return;if(e.length>=n)return N(e.slice(0,n),n-1);const i=(r.slice(0,c)+e+r.slice(c+e.length)).slice(0,n);N(i,c+e.length)},yt=t=>{const e=Math.min(r.length,n-1),i={ArrowLeft:c-1,ArrowRight:c+1,Home:0,End:e,ArrowUp:0,ArrowDown:e};t.key in i&&!t.shiftKey&&!t.metaKey&&(t.preventDefault(),T(Math.max(0,Math.min(i[t.key],e))))},kt=t=>{let e=k.current.findIndex(i=>i&&t<i.getBoundingClientRect().right+4);e<0&&(e=n-1),T(Math.min(e,r.length,n-1)),requestAnimationFrame(_)},_=()=>{const t=A.current;if(!t||document.activeElement!==t)return;const e=Math.min(H,r.length,n-1);e<r.length?t.setSelectionRange(e,e+1):t.setSelectionRange(e,e)};a.useLayoutEffect(_),a.useEffect(()=>{F&&A.current?.focus({preventScroll:!0})},[F]),a.useLayoutEffect(()=>{const t=D.current,e=k.current[c];if(t&&e){const l=!t.dataset.ready;l&&(t.style.transition="none"),t.style.width=`${e.offsetWidth}px`,t.style.height=`${e.offsetHeight}px`,t.style.transform=`translate(${e.offsetLeft}px, ${e.offsetTop}px)`,l&&(t.dataset.ready="1",t.offsetWidth,t.style.transition="")}const i=y.current,s=w.current;if(i&&s&&X.current){const l=u==="success"?X.current.offsetWidth:s.offsetWidth;i.style.width=`${l}px`;const d=s.parentElement?.parentElement;let q=0;if(d&&l>s.offsetWidth){const ot=d.getBoundingClientRect(),at=s.getBoundingClientRect(),nt=at.left+at.width/2-l/2;q=Math.min(Math.max(nt,ot.left),ot.right-l)-nt}i.style.marginLeft=q?`${q}px`:""}}),a.useEffect(()=>{const t=w.current;if(!t)return;const e=new ResizeObserver(()=>{const i=D.current,s=k.current[c];i&&s&&(i.style.width=`${s.offsetWidth}px`,i.style.height=`${s.offsetHeight}px`,i.style.transform=`translate(${s.offsetLeft}px, ${s.offsetTop}px)`),y.current&&u!=="success"&&(y.current.style.width=`${t.offsetWidth}px`)});return e.observe(t),()=>e.disconnect()},[c,u]);const it=a.useRef(u);a.useEffect(()=>{const t=it.current;if(it.current=u,u!==t){if(u==="verifying"&&x("Verifying code"),u==="success"&&x(S),u!=="error"){C(!1);return}C(!0),x(typeof M=="string"?M:"That code didn't work"),St()||w.current?.animate([{transform:"none"},{transform:"translateX(-6px)"},{transform:"translateX(5px)"},{transform:"translateX(-3px)"},{transform:"translateX(2px)"},{transform:"none"}],{duration:420,easing:"ease-out"}),ct&&(J(!0),Z.current.push(window.setTimeout(()=>U(!0),700),window.setTimeout(()=>{U(!1),J(!1),N("",0,!1)},980)))}},[u]),a.useEffect(()=>()=>Z.current.forEach(clearTimeout),[]),a.useEffect(()=>{if(b<=0){R&&E>0&&x("You can resend the code now");return}const t=window.setTimeout(()=>Q(e=>e-1),1e3);return()=>clearTimeout(t)},[b]);const jt=()=>{R?.(),Q(E),x("A new code is on its way")},B=[];for(let t=0;t<n;t++){v>0&&v<n&&t===v&&B.push(o.jsx("span",{className:"ui-otp__sep"},"sep"));const e=r[t];B.push(o.jsx("span",{ref:i=>{k.current[t]=i},className:"ui-otp__box","data-filled":e?"":void 0,style:{"--i":t},children:e&&o.jsx("span",{className:"ui-otp__char",style:{animationDelay:`${et.current[t]??0}ms`},children:e},tt.current[t])},t))}return o.jsxs("div",{className:["ui-otp",ft].filter(Boolean).join(" "),"data-status":u,"data-error":z||void 0,"data-align":lt,"data-disabled":m||void 0,children:[o.jsx("style",{href:"ui-otp-input",precedence:"default",children:$t}),o.jsx("div",{className:"ui-otp__field",children:o.jsxs("div",{ref:w,className:"ui-otp__slots",dir:"ltr","data-clearing":gt||void 0,style:{"--n":n,"--sep-w":v>0&&v<n?"calc(var(--ui-otp-gap) + 10px)":"0px"},children:[B,o.jsx("span",{ref:D,className:"ui-otp__ring","data-show":_t||void 0,"aria-hidden":"true",children:o.jsx("span",{className:"ui-otp__caret","data-show":K&&!r[c]&&!L||void 0})}),o.jsx("span",{ref:y,className:"ui-otp__pill","aria-hidden":"true",children:o.jsxs("span",{ref:X,className:"ui-otp__pill-inner",children:[o.jsx("svg",{viewBox:"0 0 24 24",className:"ui-otp__check","aria-hidden":"true",children:o.jsx("path",{d:rt.check,pathLength:1})}),o.jsx("span",{className:"ui-otp__pill-text",title:S,children:S})]})}),o.jsx("input",{ref:A,className:"ui-otp__input",type:"text",value:r,inputMode:h?"numeric":"text",pattern:h?"[0-9]*":void 0,autoComplete:"one-time-code",autoCapitalize:h?"off":"characters",autoCorrect:"off",spellCheck:!1,enterKeyHint:"done","aria-label":`${dt}, ${n} ${h?n===1?"digit":"digits":n===1?"character":"characters"}`,"aria-invalid":z||void 0,"aria-describedby":z?`${P}-msg`:void 0,disabled:m,readOnly:j||G,onChange:t=>bt(t.currentTarget),onPaste:wt,onKeyDown:yt,onFocus:()=>{V(!0),requestAnimationFrame(_)},onBlur:()=>V(!1),onPointerUp:t=>kt(t.clientX),onSelect:t=>{const e=t.currentTarget,i=c<r.length?[c,c+1]:[c,c];(e.selectionStart!==i[0]||e.selectionEnd!==i[1])&&_()}})]})}),o.jsx("div",{className:"ui-otp__msg","data-show":z||void 0,children:o.jsx("div",{className:"ui-otp__msg-inner",children:o.jsxs("p",{id:`${P}-msg`,className:"ui-otp__msg-text",children:[o.jsx("svg",{viewBox:"0 0 24 24",className:"ui-otp__alert","aria-hidden":"true",children:o.jsx("path",{d:rt.alert})}),o.jsx("span",{children:M})]})})}),R&&o.jsxs("div",{className:"ui-otp__resend","data-hidden":u==="success"||void 0,children:[o.jsx("span",{className:"ui-otp__resend-q",children:"Didn't get a code?"})," ",b>0?o.jsxs("span",{className:"ui-otp__swap ui-otp__wait",children:["Resend in"," ",o.jsx("span",{className:"ui-otp__time",children:zt(b)})]},"wait"):o.jsx("button",{type:"button",className:"ui-otp__swap ui-otp__resend-btn",onClick:jt,disabled:m||j,children:"Resend code"},"go")]}),o.jsx("span",{className:"ui-otp__live","aria-live":"polite",children:xt})]})}const $t=`
/* Colors, size and motion as variables – override them on .ui-otp */
.ui-otp {
  --ui-otp-box: 48px;
  --ui-otp-gap: 8px;
  --ui-otp-bg: var(--aui-subtle, #fafafa);
  --ui-otp-card: var(--aui-surface, #ffffff);
  --ui-otp-line: var(--aui-border, #e4e4e7);
  --ui-otp-line-strong: var(--aui-border-strong, #cfcfd4);
  --ui-otp-ink: var(--aui-ink, #171717);
  --ui-otp-text: var(--aui-ink, #404040);
  --ui-otp-muted: var(--aui-muted, #8f8f8f);
  --ui-otp-faint: #c4c4c8;
  --ui-otp-halo: rgba(23, 23, 23, 0.07);
  --ui-otp-wait: #f2f2f3;
  --ui-otp-shine: rgba(255, 255, 255, 0.95);
  --ui-otp-danger: var(--aui-red, #f04438);
  --ui-otp-danger-line: color-mix(in srgb, var(--aui-red, #f04438) 60%, transparent);
  --ui-otp-danger-halo: color-mix(in srgb, var(--aui-red, #f04438) 12%, transparent);
  --ui-otp-success: var(--aui-success, #1e8a4f);
  --ui-otp-accent: var(--aui-blue, #4fb0fe);
  --ui-otp-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-otp-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  box-sizing: border-box;
  container-type: inline-size;
  display: grid;
  justify-self: stretch; /* it sizes the boxes from its own width, so it must never shrink to fit them */
  width: 100%;
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 1.45;
  color: var(--ui-otp-text);
  -webkit-font-smoothing: antialiased;
}
.ui-otp *, .ui-otp *::before, .ui-otp *::after { box-sizing: border-box; }
.ui-otp[data-align="center"] { justify-items: center; text-align: center; }
.ui-otp[data-disabled] { opacity: 0.55; }

.ui-otp__field { display: flex; min-width: 0; }
.ui-otp[data-align="center"] .ui-otp__field { justify-content: center; }

/* The boxes scale down to fit their container (phones at 320px), up to --ui-otp-box */
.ui-otp__slots {
  --size: min(var(--ui-otp-box), calc((100cqi - (var(--n) - 1) * var(--ui-otp-gap) - var(--sep-w)) / var(--n)));
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--ui-otp-gap);
}
.ui-otp__box {
  position: relative;
  display: grid;
  place-items: center;
  flex: none;
  width: var(--size);
  height: calc(var(--size) * 1.18);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.24);
  background: var(--ui-otp-bg);
  box-shadow: inset 0 0 0 1px var(--ui-otp-line);
  font-size: calc(var(--size) * 0.46);
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--ui-otp-ink);
  transition: box-shadow 220ms ease, background-color 220ms ease, transform 380ms var(--ui-otp-ease), opacity 260ms ease;
}
.ui-otp__box[data-filled] { background: var(--ui-otp-card); box-shadow: inset 0 0 0 1px var(--ui-otp-line-strong); }
.ui-otp__sep { flex: none; width: 10px; height: 2px; border-radius: 1px; background: var(--ui-otp-faint); transition: opacity 200ms ease; }

/* Digits pop in – a small lift out of a blur, no bounce */
.ui-otp__char { display: block; animation: ui-otp-pop 280ms var(--ui-otp-ease) both; }
.ui-otp__slots[data-clearing] .ui-otp__char { animation: ui-otp-out 240ms ease both; animation-delay: calc((var(--n) - var(--i)) * 22ms) !important; }

/* One ring glides from box to box; its caret blinks softly in an empty box */
.ui-otp__ring {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  border-radius: calc(var(--size) * 0.24);
  box-shadow: inset 0 0 0 1.5px var(--ui-otp-ink), 0 0 0 4px var(--ui-otp-halo);
  opacity: 0;
  pointer-events: none;
  transition: transform 260ms var(--ui-otp-ease), width 260ms var(--ui-otp-ease), opacity 180ms ease, box-shadow 220ms ease;
}
.ui-otp__ring[data-show] { opacity: 1; }
.ui-otp__caret { width: 1.5px; height: 40%; border-radius: 1px; background: var(--ui-otp-ink); opacity: 0; }
.ui-otp__caret[data-show] { animation: ui-otp-blink 1.1s ease-in-out infinite; }

/* The real input lies over the boxes, invisible – it takes taps, keys, paste and SMS autofill */
.ui-otp__input {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  color: transparent;
  -webkit-text-fill-color: transparent;
  caret-color: transparent;
  font-size: 16px; /* iOS doesn't zoom into inputs of 16px and up */
  letter-spacing: -1em;
  cursor: text;
  appearance: none;
}
.ui-otp__input::selection { background: transparent; }
.ui-otp__input:-webkit-autofill { -webkit-box-shadow: 0 0 0 100px transparent inset; transition: background-color 9999s; }
.ui-otp__input[readonly], .ui-otp__input:disabled { cursor: default; }

/* Verifying: a soft light passes over the boxes, one after another */
.ui-otp__box::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 20%, var(--ui-otp-shine) 50%, transparent 80%);
  transform: translateX(-120%);
  opacity: 0;
  pointer-events: none;
}
.ui-otp[data-status="verifying"] .ui-otp__box::after { opacity: 1; animation: ui-otp-shimmer 1.3s ease-in-out infinite; animation-delay: calc(var(--i) * 70ms); }
.ui-otp[data-status="verifying"] .ui-otp__box { background: var(--ui-otp-wait); box-shadow: inset 0 0 0 1px var(--ui-otp-line); color: var(--ui-otp-text); }

/* Error: only the borders turn red */
.ui-otp[data-error] .ui-otp__box { box-shadow: inset 0 0 0 1px var(--ui-otp-danger-line); }
.ui-otp[data-error] .ui-otp__ring { box-shadow: inset 0 0 0 1.5px var(--ui-otp-danger), 0 0 0 4px var(--ui-otp-danger-halo); }
.ui-otp[data-error] .ui-otp__caret { background: var(--ui-otp-danger); }

/* Success: the boxes slide together and fade while one frame morphs into the "Verified" pill */
.ui-otp__pill {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  place-items: center;
  height: calc(var(--size) * 1.18);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.24);
  background: var(--ui-otp-card);
  box-shadow: inset 0 0 0 1px var(--ui-otp-line-strong);
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 300ms var(--ui-otp-ease), height 300ms var(--ui-otp-ease), border-radius 300ms var(--ui-otp-ease), opacity 160ms ease 140ms;
}
.ui-otp__pill-inner {
  display: inline-flex;
  max-width: 100cqi; /* a long label shortens instead of leaving the field */
  align-items: center;
  gap: 6px;
  padding: 0 15px 0 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  color: var(--ui-otp-ink);
  opacity: 0;
  transition: opacity 160ms ease;
}
.ui-otp__pill-text { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.ui-otp__check { flex: none; width: 17px; height: 17px; fill: none; stroke: var(--ui-otp-success); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
.ui-otp__check path { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 120ms ease; }
.ui-otp[data-status="success"] .ui-otp__box {
  transform: translateX(calc(((var(--n) - 1) / 2 - var(--i)) * (var(--size) + var(--ui-otp-gap)))) scale(0.7);
  opacity: 0;
  transition: transform 340ms var(--ui-otp-ease), opacity 220ms ease 120ms;
}
.ui-otp[data-status="success"] .ui-otp__sep { opacity: 0; }
/* The pill settles at a compact height, not the height of the boxes */
.ui-otp[data-status="success"] .ui-otp__pill {
  height: 36px;
  border-radius: 999px;
  opacity: 1;
  transition: width 460ms var(--ui-otp-ease) 220ms, height 460ms var(--ui-otp-ease) 220ms, border-radius 460ms var(--ui-otp-ease) 220ms, opacity 160ms ease 120ms;
}
.ui-otp[data-status="success"] .ui-otp__pill-inner { opacity: 1; transition: opacity 240ms ease 460ms; }
.ui-otp[data-status="success"] .ui-otp__check path { stroke-dashoffset: 0; transition: stroke-dashoffset 380ms var(--ui-otp-ease) 560ms; }

/* The error message grows in below, then folds away */
.ui-otp__msg { display: grid; grid-template-rows: 0fr; width: 100%; transition: grid-template-rows 300ms var(--ui-otp-ease); }
.ui-otp__msg[data-show] { grid-template-rows: 1fr; }
.ui-otp__msg-inner { min-height: 0; overflow: hidden; }
.ui-otp__msg-text {
  margin: 0;
  overflow-wrap: anywhere;
  padding-top: 10px;
  font-size: 13px;
  text-wrap: balance;
  color: var(--ui-otp-text);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 200ms ease, transform 300ms var(--ui-otp-ease);
}
.ui-otp__msg[data-show] .ui-otp__msg-text { opacity: 1; transform: none; transition-delay: 60ms; }
/* The icon sits inline, so a wrapped message stays centered with it */
.ui-otp__alert { display: inline-block; width: 15px; height: 15px; margin-right: 6px; vertical-align: -3px; fill: none; stroke: var(--ui-otp-danger); stroke-width: 2; stroke-linecap: round; }

/* Resend: a countdown that turns into a button */
.ui-otp__resend { margin-top: 14px; font-size: 13px; font-variant-numeric: tabular-nums; color: var(--ui-otp-muted); transition: opacity 220ms ease; }
.ui-otp__resend[data-hidden] { opacity: 0; visibility: hidden; transition: opacity 220ms ease, visibility 0s 220ms; }
.ui-otp__swap { display: inline-block; animation: ui-otp-in 260ms var(--ui-otp-ease) both; }
.ui-otp__wait { color: var(--ui-otp-text); }
.ui-otp__time { display: inline-block; min-width: 3.4ch; text-align: left; }
.ui-otp__resend-btn {
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-weight: 500;
  border-radius: 4px;
  color: var(--ui-otp-accent);
  cursor: pointer;
}
.ui-otp__resend-btn::before { content: ""; position: absolute; inset: -6px -8px; border-radius: 8px; }
.ui-otp__resend-btn:hover { text-decoration: underline; text-underline-offset: 3px; }
.ui-otp__resend-btn:focus-visible { outline: 2px solid var(--ui-otp-focus); outline-offset: 2px; }
.ui-otp__resend-btn:disabled { color: var(--ui-otp-muted); cursor: default; text-decoration: none; }
.ui-otp__live { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@keyframes ui-otp-pop { from { opacity: 0; transform: translateY(4px) scale(0.7); filter: blur(3px); } to { opacity: 1; transform: none; filter: none; } }
@keyframes ui-otp-out { to { opacity: 0; transform: translateY(-4px) scale(0.8); filter: blur(2px); } }
@keyframes ui-otp-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes ui-otp-shimmer { 0% { transform: translateX(-120%); } 55%, 100% { transform: translateX(120%); } }
@keyframes ui-otp-in { from { opacity: 0; transform: translateY(3px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Narrow containers (phones): tighter gaps, the question before "Resend" drops first */
@container (max-width: 360px) {
  .ui-otp__slots { --ui-otp-gap: 6px; }
  .ui-otp__sep { width: 8px; }
}
@container (max-width: 250px) {
  .ui-otp__resend-q { display: none; }
}
/* Touch screens: a bigger target for Resend */
@media (hover: none) and (pointer: coarse) {
  .ui-otp__resend-btn::before { inset: -11px -12px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-otp *, .ui-otp *::before, .ui-otp *::after { animation: none !important; transition: none !important; }
  .ui-otp__caret[data-show] { opacity: 1; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-otp {
  --ui-otp-bg: var(--aui-subtle, #1d1d20);
  --ui-otp-card: var(--aui-surface, #19191b);
  --ui-otp-line: var(--aui-border, #2a2a2e);
  --ui-otp-line-strong: var(--aui-border-strong, #3a3a40);
  --ui-otp-ink: var(--aui-ink, #ededed);
  --ui-otp-text: var(--aui-ink, #c8c8cc);
  --ui-otp-muted: var(--aui-muted, #8b8b92);
  --ui-otp-faint: #4a4a50;
  --ui-otp-halo: rgba(255, 255, 255, 0.08);
  --ui-otp-wait: #1d1d20;
  --ui-otp-shine: rgba(255, 255, 255, 0.07);
  --ui-otp-danger: var(--aui-red, #ff6b5f);
  --ui-otp-danger-line: color-mix(in srgb, var(--aui-red, #ff6b5f) 55%, transparent);
  --ui-otp-danger-halo: color-mix(in srgb, var(--aui-red, #ff6b5f) 14%, transparent);
  --ui-otp-success: var(--aui-green, #5fc88a);
  --ui-otp-accent: var(--aui-blue, #4fb0fe);
  --ui-otp-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function Tt(){return o.jsx("div",{className:"stage",children:o.jsx(Rt,{})})}export{Tt as default};
