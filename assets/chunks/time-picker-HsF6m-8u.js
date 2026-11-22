import{r as u,j as a}from"./client-CsvIHAk3.js";const ke=1440,me=i=>String(i).padStart(2,"0"),F=i=>{const c=typeof i=="string"?i.trim().match(/^(\d{1,2}):(\d{2})(?::\d{2}(?:\.\d+)?)?$/):null;if(!c)return null;const r=Number(c[1]),o=Number(c[2]);return r<24&&o<60?r*60+o:null},ge=i=>`${me(Math.floor(i/60))}:${me(i%60)}`,I=i=>i.toLowerCase().replace(/[.\s\u00a0\u202f]/g,""),ze=[1632,1776,2406,2534,2662,2790,2918,3046,3174,3302,3430,3664,3792,3872,4160,6112,6160,65296],X=i=>i.replace(new RegExp("\\p{Nd}","gu"),c=>{const r=c.codePointAt(0),o=ze.find(l=>r>=l&&r<=l+9);return o==null?c:String(r-o)});function Se(i){if(i)try{return Intl.getCanonicalLocales(i)[0]}catch{return}}function xe(i,c,r){const o=X(i).trim().toLowerCase();if(!o)return null;let l="",v="",s,k=0;const h=o.match(/^(\D*?)\s*(\d{1,2})(?:\s*[:.h]\s*(\d{2}))?\s*(\D*)$/),d=h?null:o.match(/^(\D*?)\s*(\d{3,4})\s*(\D*)$/);if(h)[,l,,,v]=h,s=Number(h[2]),k=h[3]?Number(h[3]):0;else if(d)[,l,,v]=d,s=Number(d[2].slice(0,-2)),k=Number(d[2].slice(-2));else return null;const b=I(l),f=I(v);if(b&&f)return null;const w=b||f,_=w?c.has(w)?"am":r.has(w)?"pm":void 0:null;if(_===void 0||k>59)return null;if(_){if(s<1||s>12)return null;s=s%12+(_==="pm"?12:0)}else if(s===24&&k===0)s=0;else if(s>23)return null;return s*60+k}function Ee({value:i,defaultValue:c=null,onChange:r,step:o=15,min:l,max:v,hourCycle:s,locale:k,placeholder:h,label:d,hint:b,error:f,optional:w=!1,size:_="md",disabled:D=!1,name:ee,required:ve,id:be,className:we,"aria-label":te,ref:C}){const M=u.useId(),ie=be??`${M}-input`,ae=`${M}-list`,ne=`${M}-label`,re=`${M}-message`,oe=e=>`${M}-option-${e}`,L=Se(k),{format:T,am:se,pm:ue}=u.useMemo(()=>{const e=s===12||s===24?s===12:/h1[12]/.test(new Intl.DateTimeFormat(L,{hour:"numeric"}).resolvedOptions().hourCycle??""),t=new Intl.DateTimeFormat(L,{hour:e?"numeric":"2-digit",minute:"2-digit",hourCycle:e?"h12":"h23"}),p=j=>{const W=new Intl.DateTimeFormat(L,{hour:"numeric",hourCycle:"h12"}).formatToParts(new Date(2e3,0,1,j)).find(Te=>Te.type==="dayPeriod");return W?I(W.value):""};return{format:j=>t.format(new Date(2e3,0,1,Math.floor(j/60),j%60)),am:new Set(["a","am",p(1)].filter(Boolean)),pm:new Set(["p","pm",p(13)].filter(Boolean))}},[L,s]),Y=Number.isFinite(o)?Math.min(ke,Math.max(1,Math.round(o))):15,z=F(l)??0,q=F(v),U=q!=null&&q>=z?q:ke-1,m=u.useMemo(()=>{const e=[];for(let t=z;t<=U;t+=Y)e.push(t);return e},[z,U,Y]),[_e,ye]=u.useState(()=>F(c)),g=i!==void 0?F(i):_e,pe=g!=null?T(g):"",[S,je]=u.useState(pe),[E,$]=u.useState(!1),[n,K]=u.useState(!1),[x,P]=u.useState(-1),[Z,le]=u.useState(null),N=u.useRef(!1),R=u.useRef(!1),G=u.useRef(null),B=u.useRef(null),H=u.useRef(null),De=E?S:pe,de=!!f,J=V(f)?f:V(b)?b:null,Me=$e.includes(_)?_:"md",ce=e=>{const t=m.findIndex(p=>p>=e);return t<0?m.length-1:t},Ne=()=>{const e=new Date;return e.getHours()*60+e.getMinutes()},O=e=>{if(D||!m.length)return;const t=g!=null?m.indexOf(g):-1;P(t>=0?t:ce(g??Ne())),N.current=!1,R.current=!0,K(!0)},y=()=>{K(!1),le(null)},Q=e=>{i===void 0&&ye(e),e!==g&&r?.(e==null?null:ge(e)),$(!1)},fe=e=>{e<0||e>=m.length||(Q(m[e]),y())},he=()=>{if(!E)return;const e=S.trim()?xe(S,se,ue):null;S.trim()?e!=null&&e>=z&&e<=U?Q(e):$(!1):Q(null)},Ie=e=>{if(je(e),$(!0),N.current=!1,!m.length)return;const t=e.trim()?xe(e,se,ue):null,p=I(X(e)),j=t!=null?ce(t):p?m.findIndex(W=>I(X(T(W))).startsWith(p)):-1;n||(R.current=!0,K(!0)),j>=0&&P(j)};u.useLayoutEffect(()=>{const e=H.current;if(!n||!e)return;"showPopover"in e&&!e.matches(":popover-open")&&e.showPopover();const t=p=>{p?.type==="scroll"&&p.target instanceof Node&&e.contains(p.target)||B.current&&Pe(e,B.current)};return t(),window.addEventListener("resize",t),window.addEventListener("scroll",t,!0),()=>{window.removeEventListener("resize",t),window.removeEventListener("scroll",t,!0),"hidePopover"in e&&e.isConnected&&e.matches(":popover-open")&&e.hidePopover()}},[n]),u.useLayoutEffect(()=>{if(!n||x<0)return;const e=H.current,t=e?.querySelector(`[data-index="${x}"]`);!e||!t||(le({top:t.offsetTop,height:t.offsetHeight}),R.current?(e.scrollTop=t.offsetTop-(e.clientHeight-t.offsetHeight)/2,R.current=!1):t.scrollIntoView({block:"nearest"}))},[x,n]),u.useEffect(()=>{if(!n)return;const e=t=>{const p=t.target;B.current?.contains(p)||H.current?.contains(p)||y()};return document.addEventListener("pointerdown",e,!0),()=>document.removeEventListener("pointerdown",e,!0)},[n]);const A=e=>{if(!n)return O();N.current=!0,P(t=>Math.min(m.length-1,Math.max(0,(t<0?0:t)+e)))},Ce=e=>{if(D)return;const t=Math.max(1,Math.round(60/Y));switch(e.key){case"ArrowDown":e.preventDefault(),e.altKey&&!n?O():A(1);break;case"ArrowUp":e.preventDefault(),A(-1);break;case"PageDown":if(!n)return;e.preventDefault(),A(t);break;case"PageUp":if(!n)return;e.preventDefault(),A(-t);break;case"Enter":n&&N.current&&x>=0?(e.preventDefault(),fe(x)):(E||n)&&(e.preventDefault(),he(),y());break;case"Escape":n?(e.preventDefault(),e.stopPropagation(),y()):E&&(e.preventDefault(),$(!1));break;case"Tab":y();break}},Le=h??T(540);return a.jsxs("div",{className:["ui-tpk",we].filter(Boolean).join(" "),"data-size":Me,"data-open":n||void 0,"data-invalid":de||void 0,"data-disabled":D||void 0,children:[a.jsx("style",{href:"ui-time-picker",precedence:"default",children:Oe}),d!=null&&a.jsxs("div",{className:"ui-tpk__head",children:[a.jsx("label",{className:"ui-tpk__label",id:ne,htmlFor:ie,children:d}),w&&a.jsx("span",{className:"ui-tpk__optional",children:"Optional"})]}),a.jsxs("div",{ref:B,className:"ui-tpk__box",onClick:()=>G.current?.focus(),children:[a.jsx("span",{className:"ui-tpk__icon","aria-hidden":"true",children:a.jsx(Re,{})}),a.jsx("input",{ref:e=>{G.current=e,typeof C=="function"?C(e):C&&(C.current=e)},id:ie,className:"ui-tpk__input",type:"text",role:"combobox",inputMode:"text",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list","aria-expanded":n,"aria-controls":ae,"aria-activedescendant":n&&x>=0?oe(x):void 0,"aria-label":te,"aria-describedby":J?re:void 0,"aria-invalid":de||void 0,"aria-required":ve||void 0,placeholder:Le,disabled:D,value:De,onChange:e=>Ie(e.target.value),onKeyDown:Ce,onPointerDown:()=>!n&&O(),onBlur:()=>{he(),y()}}),a.jsx("button",{type:"button",className:"ui-tpk__toggle",tabIndex:-1,"aria-label":n?"Hide times":"Show times",disabled:D,onPointerDown:e=>e.preventDefault(),onClick:e=>{e.stopPropagation(),G.current?.focus(),n?y():O()},children:a.jsx(Be,{})})]}),ee&&a.jsx("input",{type:"hidden",name:ee,value:g!=null?ge(g):""}),n&&a.jsxs("div",{ref:H,id:ae,className:"ui-tpk__list",role:"listbox","aria-labelledby":d!=null?ne:void 0,"aria-label":d==null?te??"Times":void 0,popover:"manual",children:[Z&&a.jsx("span",{className:"ui-tpk__glow","aria-hidden":"true",style:{transform:`translateY(${Z.top}px)`,height:Z.height}}),m.map((e,t)=>a.jsxs("div",{id:oe(t),className:"ui-tpk__option",role:"option","data-index":t,"aria-selected":e===g,"data-active":t===x||void 0,onPointerMove:()=>{N.current=!0,t!==x&&P(t)},onPointerDown:p=>p.preventDefault(),onClick:()=>fe(t),children:[a.jsx("span",{className:"ui-tpk__time",children:T(e)}),a.jsx("span",{className:"ui-tpk__check","aria-hidden":"true",children:e===g&&a.jsx(He,{})})]},e))]}),J&&a.jsx("p",{className:"ui-tpk__message",id:re,"aria-live":V(f)?"polite":void 0,children:J},V(f)?"error":"hint")]})}const $e=["sm","md","lg"],V=i=>i!=null&&typeof i!="boolean"&&i!=="";function Pe(i,c){const r=c.getBoundingClientRect(),o=4,l=8,v=document.documentElement.clientWidth||window.innerWidth,s=window.innerHeight,k=Math.min(Math.max(r.width,120),v-2*l);i.style.width=`${k}px`;const h=Math.min(i.scrollHeight,264),d=s-r.bottom-o-l,b=r.top-o-l,f=d<Math.min(h,160)&&b>d,w=Math.max(120,Math.min(264,f?b:d));i.style.maxHeight=`${w}px`;const _=Math.min(h,w);i.style.left=`${Math.round(Math.min(Math.max(l,r.left),v-l-k))}px`,i.style.top=`${Math.round(f?r.top-o-_:r.bottom+o)}px`,i.toggleAttribute("data-up",f)}function Re(){return a.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("path",{d:"M12 8V12L14 14"})]})}function Be(){return a.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:a.jsx("path",{d:"M18 9C18 9 13.58 15 12 15C10.42 15 6 9 6 9"})})}function He(){return a.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:a.jsx("path",{className:"ui-tpk__tick",d:"M5 14L8.5 17.5L19 6.5",pathLength:1})})}const Oe=`
/* Colors and motion as variables – override them on .ui-tpk (see Theming in the docs) */
.ui-tpk {
  --ui-tpk-title: var(--aui-ink, #171717);
  --ui-tpk-ink: var(--aui-ink, #171717);
  --ui-tpk-subtle: var(--aui-muted, #8f8f8f);
  --ui-tpk-faint: var(--aui-placeholder, #b5b5b5);
  --ui-tpk-icon: var(--aui-muted, #8f8f8f);
  --ui-tpk-surface: var(--aui-surface, #ffffff);
  --ui-tpk-menu: var(--aui-overlay, var(--aui-surface, #ffffff));
  --ui-tpk-line: var(--aui-border, #e6e6e8);
  --ui-tpk-edge: var(--aui-border-strong, #d4d4d8);
  --ui-tpk-edge-focus: var(--aui-border-strong, #b4b4bb);
  --ui-tpk-glow: #f4f4f5;
  --ui-tpk-readonly: #fafafa;
  --ui-tpk-shadow-menu: var(--aui-shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06));
  --ui-tpk-danger: var(--aui-danger, #c4320a);
  --ui-tpk-danger-edge: #ff8a7a;
  --ui-tpk-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-tpk-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tpk-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));

  --h: 36px;
  --px: 12px;
  --fs: 13.5px;
  --radius: var(--aui-radius, 10px);

  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  color: var(--ui-tpk-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-tpk[data-size="sm"] { --h: 32px; --px: 10px; --fs: 13px; --radius: calc(var(--aui-radius, 10px) - 1px); }
.ui-tpk[data-size="lg"] { --h: 40px; --px: 14px; --fs: 14px; --radius: calc(var(--aui-radius, 10px) + 2px); }
/* Touch screens: a comfortable tap height, and 16px text so iOS doesn't zoom in on focus */
@media (pointer: coarse) {
  .ui-tpk { --fs: 16px; }
  .ui-tpk[data-size="sm"] { --h: 36px; }
  .ui-tpk[data-size="md"] { --h: 40px; }
  .ui-tpk[data-size="lg"] { --h: 44px; }
}
.ui-tpk *, .ui-tpk *::before, .ui-tpk *::after { box-sizing: border-box; }

.ui-tpk__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-tpk__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-tpk-title); overflow-wrap: anywhere; cursor: default; }
.ui-tpk__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-tpk-subtle); }

/* The field: white with a 1px gray edge; hover and typing only darken that edge – no ring on a text field */
.ui-tpk__box {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: var(--h);
  min-width: 0;
  padding: 0 calc(var(--px) - 6px) 0 var(--px);
  border-radius: var(--radius);
  background: var(--ui-tpk-surface);
  box-shadow: 0 0 0 1px var(--ui-tpk-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: text;
  transition: box-shadow 160ms ease, background-color 160ms ease;
}
.ui-tpk__box:hover { box-shadow: 0 0 0 1px var(--ui-tpk-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tpk__box:focus-within, .ui-tpk[data-open] .ui-tpk__box { box-shadow: 0 0 0 1px var(--ui-tpk-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tpk[data-invalid] .ui-tpk__box { background: var(--ui-tpk-danger-wash); box-shadow: 0 0 0 1px var(--ui-tpk-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tpk[data-disabled] .ui-tpk__box { background: var(--ui-tpk-readonly); box-shadow: 0 0 0 1px var(--ui-tpk-line); cursor: not-allowed; }
.ui-tpk[data-disabled] { opacity: 0.55; }
.ui-tpk__icon { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-tpk-icon); }
.ui-tpk__icon svg { display: block; }
.ui-tpk__input {
  flex: 1;
  width: 100%;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: none;
  font: inherit;
  font-size: var(--fs);
  font-variant-numeric: tabular-nums;
  color: var(--ui-tpk-ink);
  text-overflow: ellipsis;
}
.ui-tpk__input::placeholder { color: var(--ui-tpk-faint); opacity: 1; }
.ui-tpk__input:disabled { cursor: not-allowed; }
.ui-tpk__toggle {
  display: grid;
  flex: none;
  place-items: center;
  width: 26px;
  height: 26px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: none;
  color: var(--ui-tpk-icon);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-tpk__toggle svg { display: block; transition: transform 240ms var(--ui-tpk-ease); }
.ui-tpk__toggle:hover:not(:disabled) { background: var(--ui-tpk-glow); color: var(--ui-tpk-ink); }
.ui-tpk__toggle:focus-visible { outline: 2px solid var(--ui-tpk-focus); outline-offset: -2px; }
.ui-tpk__toggle:disabled { cursor: not-allowed; }
.ui-tpk[data-open] .ui-tpk__toggle svg { transform: rotate(180deg); }

/* The list: a white card in the top layer, at the field's edge */
.ui-tpk__list {
  position: fixed;
  inset: auto;
  z-index: 1000;
  margin: 0;
  padding: 5px;
  border: 0;
  border-radius: 14px;
  background: var(--ui-tpk-menu);
  box-shadow: var(--ui-tpk-shadow-menu);
  color: var(--ui-tpk-ink);
  font: inherit;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  transform-origin: top center;
  animation: ui-tpk-in 200ms var(--ui-tpk-ease) both;
}
.ui-tpk__list[data-up] { transform-origin: bottom center; animation-name: ui-tpk-in-up; }
.ui-tpk__list::backdrop { display: none; }

/* One soft highlight that glides between the rows */
.ui-tpk__glow {
  position: absolute;
  top: 0;
  left: 5px;
  right: 5px;
  border-radius: 9px;
  background: var(--ui-tpk-glow);
  pointer-events: none;
  transition: transform 180ms var(--ui-tpk-ease), height 180ms var(--ui-tpk-ease);
}

.ui-tpk__option {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 0 10px;
  border-radius: 9px;
  font-size: 13.5px;
  line-height: 20px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
}
.ui-tpk__time { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.ui-tpk__option[aria-selected="true"] .ui-tpk__time { font-weight: 500; }
.ui-tpk__check { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-tpk-ink); }
.ui-tpk__check svg { display: block; }
.ui-tpk__tick { stroke-dasharray: 1; animation: ui-tpk-draw 280ms 40ms var(--ui-tpk-ease) both; }
@media (pointer: coarse) {
  .ui-tpk__option { height: 40px; font-size: 15px; }
  .ui-tpk__toggle { width: 34px; height: 34px; }
}

.ui-tpk__message { margin: 0; padding: 0 2px; font-size: 12.5px; line-height: 17px; color: var(--ui-tpk-subtle); overflow-wrap: anywhere; animation: ui-tpk-message 260ms var(--ui-tpk-ease); }
.ui-tpk[data-invalid] .ui-tpk__message { color: var(--ui-tpk-danger); }

@keyframes ui-tpk-in { from { opacity: 0; transform: translateY(-4px) scale(0.98); } }
@keyframes ui-tpk-in-up { from { opacity: 0; transform: translateY(4px) scale(0.98); } }
@keyframes ui-tpk-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes ui-tpk-message { from { opacity: 0; transform: translateY(-3px); filter: blur(2px); } }

@media (prefers-reduced-motion: reduce) {
  .ui-tpk *, .ui-tpk *::before, .ui-tpk *::after { animation-duration: 1ms !important; transition-duration: 1ms !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tpk {
  --ui-tpk-title: var(--aui-ink, #ededed);
  --ui-tpk-ink: var(--aui-ink, #ededed);
  --ui-tpk-subtle: var(--aui-muted, #8b8b92);
  --ui-tpk-faint: var(--aui-placeholder, #5c5c63);
  --ui-tpk-icon: var(--aui-muted, #8b8b92);
  --ui-tpk-surface: var(--aui-surface, #19191b);
  --ui-tpk-menu: var(--aui-overlay, var(--aui-surface, #19191b));
  --ui-tpk-line: var(--aui-border, #2a2a2e);
  --ui-tpk-edge: var(--aui-border-strong, #3a3a40);
  --ui-tpk-edge-focus: var(--aui-border-strong, #4e4e55);
  --ui-tpk-glow: #26262a;
  --ui-tpk-readonly: #151517;
  --ui-tpk-shadow-menu: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6));
  --ui-tpk-danger: var(--aui-danger, #ff8a7a);
  --ui-tpk-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-tpk-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-tpk-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  color-scheme: dark;
}
`;function We(){return a.jsx("div",{className:"stage",children:a.jsx(Ee,{})})}export{We as default};
