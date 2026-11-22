import{r as p,j as t}from"./client-CsvIHAk3.js";const L=a=>a instanceof Date&&!Number.isNaN(a.getTime()),w=a=>new Date(a.getFullYear(),a.getMonth(),a.getDate()),x=(a,r)=>new Date(a.getFullYear(),a.getMonth(),a.getDate()+r),C=a=>new Date(a.getFullYear(),a.getMonth(),1),Se=(a,r)=>new Date(a,r+1,0).getDate(),Q=(a,r)=>new Date(a.getFullYear(),a.getMonth()+r,Math.min(a.getDate(),Se(a.getFullYear(),a.getMonth()+r))),M=(a,r)=>!!a&&!!r&&a.getTime()===r.getTime(),ee=(a,r)=>a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth(),ae=(a,r,n)=>r&&a<r?r:n&&a>n?n:a,he=a=>String(a).padStart(2,"0"),ze=a=>`${String(a.getFullYear()).padStart(4,"0")}-${he(a.getMonth()+1)}-${he(a.getDate())}`;function Le(a,r){const n=C(a),c=x(n,-((n.getDay()-r+7)%7));return Array.from({length:6},(f,N)=>Array.from({length:7},(E,h)=>x(c,N*7+h)))}function Ee(a){if(a)try{return Intl.getCanonicalLocales(a)[0]}catch{return}}const Fe=new Set(["US","CA","MX","BR","JP","KR","TW","HK","IL","PH","IN","ZA","SA","PE","CO","VE","GT","PR"]);function $e(a){try{const r=new Intl.Locale(a??new Intl.DateTimeFormat().resolvedOptions().locale),n=r.getWeekInfo?.()??r.weekInfo;if(n&&n.firstDay>=1&&n.firstDay<=7)return n.firstDay%7;const c=r.maximize().region;return c&&Fe.has(c)?0:1}catch{return 1}}function Ae({value:a,defaultValue:r=null,onChange:n,min:c,max:f,isDateDisabled:N,locale:E,weekStartsOn:h,placeholder:T="Pick a date",label:y,hint:F,error:m,optional:P=!1,size:$="md",disabled:_=!1,name:te,required:me,today:ie,defaultOpen:ve=!1,id:xe,className:be,"aria-label":R,ref:A}){const I=p.useId(),W=xe??`${I}-trigger`,re=`${I}-panel`,oe=`${I}-label`,B=`${I}-title`,ne=`${I}-message`,K=Ee(E),v=p.useMemo(()=>{const e=i=>new Intl.DateTimeFormat(K,{...i,calendar:"gregory"});return{value:e({weekday:"short",month:"short",day:"numeric",year:"numeric"}),month:e({month:"long",year:"numeric"}),long:e({weekday:"long",month:"long",day:"numeric",year:"numeric"}),day:i=>e({day:"numeric"}).formatToParts(i).find(o=>o.type==="day")?.value??String(i.getDate()),wdShort:e({weekday:"short"}),wdNarrow:e({weekday:"narrow"}),wdLong:e({weekday:"long"})}},[K]),U=h!=null&&h>=0&&h<=6?Math.floor(h):$e(K),V=L(ie)?w(ie).getTime():void 0,de=p.useMemo(()=>V!=null?new Date(V):w(new Date),[V]),g=L(c)?w(c):void 0,b=L(f)&&(!g||w(f)>=g)?w(f):void 0,X=e=>!!g&&e<g||!!b&&e>b||!!N?.(e),[we,ye]=p.useState(()=>L(r)?w(r):null),k=a!==void 0?L(a)?w(a):null:we,q=()=>ae(k??de,g,b),[l,se]=p.useState(ve&&!_),[d,Y]=p.useState(q),[u,O]=p.useState(()=>C(q())),[ue,pe]=p.useState(1),S=p.useRef(null),z=p.useRef(null),j=p.useRef(!1),le=!!m,Z=H(m)?m:H(F)?F:null,_e=Ye.includes($)?$:"md",ce=()=>{if(_)return;const e=q();Y(e),O(C(e)),j.current=!0,se(!0)},D=(e=!0)=>{se(!1),j.current=!1,e&&S.current?.focus({preventScroll:!0})},ke=e=>{X(e)||(a===void 0&&ye(e),M(e,k)||n?.(e),D())},je=e=>{const i=C(e);i.getTime()!==u.getTime()&&(pe(i>u?1:-1),O(i))},fe=e=>{j.current=!1;const i=new Date(u.getFullYear(),u.getMonth()+e,1);Y(ae(Q(d,e),g,b)),pe(e>0?1:-1),O(i)},De=!g||C(g)<u,Me=!b||C(b)>u;p.useLayoutEffect(()=>{const e=z.current;if(!l||!e)return;"showPopover"in e&&!e.matches(":popover-open")&&e.showPopover();const i=()=>{const o=S.current;o&&He(e,o)};return i(),window.addEventListener("resize",i),window.addEventListener("scroll",i,!0),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i,!0),"hidePopover"in e&&e.isConnected&&e.matches(":popover-open")&&e.hidePopover()}},[l]),p.useLayoutEffect(()=>{!l||!j.current||z.current?.querySelector(`[data-day="${d.getTime()}"]`)?.focus({preventScroll:!0})},[l,d,u]),p.useEffect(()=>{if(!l)return;const e=i=>{const o=i.target;S.current?.contains(o)||z.current?.contains(o)||D(!1)};return document.addEventListener("pointerdown",e,!0),()=>document.removeEventListener("pointerdown",e,!0)},[l]);const Ce=e=>{const o=getComputedStyle(e.currentTarget).direction==="rtl"?-1:1;let s=null;switch(e.key){case"ArrowLeft":s=x(d,-o);break;case"ArrowRight":s=x(d,o);break;case"ArrowUp":s=x(d,-7);break;case"ArrowDown":s=x(d,7);break;case"PageUp":s=Q(d,e.shiftKey?-12:-1);break;case"PageDown":s=Q(d,e.shiftKey?12:1);break;case"Home":s=x(d,-((d.getDay()-U+7)%7));break;case"End":s=x(d,6-(d.getDay()-U+7)%7);break;case"Enter":case" ":e.preventDefault(),ke(d);return;default:return}e.preventDefault(),s=ae(s,g,b),j.current=!0,Y(s),je(s)},G=Le(u,U),J=G.flat(),Ne=J.some(e=>M(e,d))?d:J.find(e=>ee(e,u)&&!X(e))??J.find(e=>ee(e,u)),Te=G[0].map(e=>{const i=v.wdShort.format(e).replace(/\.$/,""),o=new RegExp("^\\p{Script=Latin}","u").test(i)?i.slice(0,2):i.length>3?v.wdNarrow.format(e):i;return{key:e.getDay(),text:o,long:v.wdLong.format(e)}});return t.jsxs("div",{className:["ui-dpk",be].filter(Boolean).join(" "),"data-size":_e,"data-open":l||void 0,"data-invalid":le||void 0,"data-disabled":_||void 0,children:[t.jsx("style",{href:"ui-date-picker",precedence:"default",children:We}),y!=null&&t.jsxs("div",{className:"ui-dpk__head",children:[t.jsx("label",{className:"ui-dpk__label",id:oe,htmlFor:W,children:y}),P&&t.jsx("span",{className:"ui-dpk__optional",children:"Optional"})]}),t.jsxs("button",{ref:e=>{S.current=e,typeof A=="function"?A(e):A&&(A.current=e)},id:W,type:"button",className:"ui-dpk__trigger","aria-haspopup":"dialog","aria-expanded":l,"aria-controls":l?re:void 0,"aria-label":R?`${R}, ${k?v.long.format(k):T}`:void 0,"aria-labelledby":R?void 0:y!=null?`${oe} ${W}`:void 0,"aria-describedby":Z?ne:void 0,"aria-invalid":le||void 0,"aria-required":me||void 0,disabled:_,onClick:()=>l?D():ce(),onKeyDown:e=>{!l&&(e.key==="ArrowDown"||e.key==="ArrowUp")?(e.preventDefault(),ce()):l&&e.key==="Escape"&&(e.preventDefault(),D())},children:[t.jsx("span",{className:"ui-dpk__icon","aria-hidden":"true",children:t.jsx(Pe,{})}),t.jsx("span",{className:"ui-dpk__value","data-empty":k?void 0:"",children:k?v.value.format(k):T},k?k.getTime():"empty"),t.jsx("span",{className:"ui-dpk__chevron","aria-hidden":"true",children:t.jsx(Re,{})})]}),te&&t.jsx("input",{type:"hidden",name:te,value:k?ze(k):""}),l&&t.jsxs("div",{ref:z,id:re,className:"ui-dpk__panel",role:"dialog","aria-modal":"false","aria-labelledby":B,popover:"manual",onKeyDown:e=>{e.key==="Escape"&&(e.preventDefault(),e.stopPropagation(),D())},onBlur:e=>{const i=e.relatedTarget;i&&!z.current?.contains(i)&&!S.current?.contains(i)&&D(!1)},children:[t.jsxs("div",{className:"ui-dpk__nav",children:[t.jsx("button",{type:"button",className:"ui-dpk__arrow","aria-label":"Previous month",disabled:!De,onClick:()=>fe(-1),children:t.jsx(ge,{d:"M15 6C15 6 9 10.42 9 12C9 13.58 15 18 15 18"})}),t.jsx("div",{className:"ui-dpk__title",id:B,"aria-live":"polite",children:t.jsx("span",{"data-dir":ue,children:v.month.format(u)},u.getTime())}),t.jsx("button",{type:"button",className:"ui-dpk__arrow","aria-label":"Next month",disabled:!Me,onClick:()=>fe(1),children:t.jsx(ge,{d:"M9 6C9 6 15 10.42 15 12C15 13.58 9 18 9 18"})})]}),t.jsxs("div",{role:"grid","aria-labelledby":B,className:"ui-dpk__grid",onKeyDown:Ce,onPointerDown:()=>j.current=!1,children:[t.jsx("div",{role:"row",className:"ui-dpk__weekdays",children:Te.map(e=>t.jsx("span",{role:"columnheader","aria-label":e.long,className:"ui-dpk__weekday",children:t.jsx("abbr",{title:e.long,children:e.text})},e.key))}),t.jsx("div",{className:"ui-dpk__weeks","data-dir":ue,children:G.map((e,i)=>t.jsx("div",{role:"row",className:"ui-dpk__week",children:e.map(o=>{const s=M(o,k),Ie=X(o);return t.jsx("span",{role:"gridcell","aria-selected":s,className:"ui-dpk__cell",children:t.jsx("button",{type:"button",className:"ui-dpk__day","data-day":o.getTime(),"data-outside":!ee(o,u)||void 0,"data-chosen":s||void 0,tabIndex:M(o,Ne)?0:-1,"aria-label":v.long.format(o),"aria-current":M(o,de)?"date":void 0,"aria-disabled":Ie||void 0,onClick:()=>ke(o),onFocus:()=>M(o,d)||Y(o),children:v.day(o)})},o.getTime())})},i))},u.getTime())]})]}),Z&&t.jsx("p",{className:"ui-dpk__message",id:ne,"aria-live":H(m)?"polite":void 0,children:Z},H(m)?"error":"hint")]})}const Ye=["sm","md","lg"],H=a=>a!=null&&typeof a!="boolean"&&a!=="";function He(a,r){const n=r.getBoundingClientRect(),c=6,f=8,N=document.documentElement.clientWidth||window.innerWidth,E=window.innerHeight,h=a.offsetWidth,T=a.offsetHeight,y=E-n.bottom-c-f,F=n.top-c-f,m=y<T&&F>y,P=getComputedStyle(r).direction==="rtl",$=Math.min(Math.max(f,P?n.right-h:n.left),Math.max(f,N-f-h)),_=m?Math.max(f,n.top-c-T):n.bottom+c;a.style.left=`${Math.round($)}px`,a.style.top=`${Math.round(_)}px`,a.toggleAttribute("data-up",m)}function Pe(){return t.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t.jsx("path",{d:"M16 2V6M8 2V6"}),t.jsx("path",{d:"M13 4H11C7.23 4 5.34 4 4.17 5.17C3 6.34 3 8.23 3 12V14C3 17.77 3 19.66 4.17 20.83C5.34 22 7.23 22 11 22H13C16.77 22 18.66 22 19.83 20.83C21 19.66 21 17.77 21 14V12C21 8.23 21 6.34 19.83 5.17C18.66 4 16.77 4 13 4Z"}),t.jsx("path",{d:"M3 10H21"}),t.jsx("path",{d:"M12 14H12.01M12 18H12.01M7.5 14H7.51M7.5 18H7.51M16.5 14H16.51",strokeWidth:"2"})]})}function ge({d:a}){return t.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("path",{d:a})})}function Re(){return t.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("path",{d:"M18 9C18 9 13.58 15 12 15C10.42 15 6 9 6 9"})})}const We=`
/* Colors and motion as variables – override them on .ui-dpk (see Theming in the docs) */
.ui-dpk {
  --ui-dpk-title: var(--aui-ink, #171717);
  --ui-dpk-strong: var(--aui-ink, #171717);
  --ui-dpk-ink: var(--aui-ink, #171717);
  --ui-dpk-subtle: var(--aui-muted, #8f8f8f);
  --ui-dpk-faint: var(--aui-placeholder, #c4c4c7);
  --ui-dpk-icon: var(--aui-muted, #8f8f8f);
  --ui-dpk-surface: var(--aui-surface, #ffffff);
  --ui-dpk-card: var(--aui-overlay, var(--aui-surface, #ffffff));
  --ui-dpk-line: var(--aui-border, #e6e6e8);
  --ui-dpk-edge: var(--aui-border-strong, #d4d4d8);
  --ui-dpk-edge-open: var(--aui-border-strong, #b4b4bb);
  --ui-dpk-hover: var(--aui-subtle, #f2f2f3);
  --ui-dpk-readonly: #fafafa;
  /* The chosen day: a blue chip */
  --ui-dpk-accent: var(--aui-blue, #4fb0fe);
  --ui-dpk-on-accent: #ffffff;
  --ui-dpk-shadow-pop: var(--aui-shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06));
  --ui-dpk-danger: var(--aui-danger, #c4320a);
  --ui-dpk-danger-edge: #ff8a7a;
  --ui-dpk-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-dpk-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-dpk-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-dpk-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  --h: 36px;
  --px: 12px;
  --fs: 13.5px;
  --radius: var(--aui-radius, 10px);
  --cell: 34px;

  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  color: var(--ui-dpk-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-dpk[data-size="sm"] { --h: 32px; --px: 10px; --fs: 13px; --radius: calc(var(--aui-radius, 10px) - 1px); }
.ui-dpk[data-size="lg"] { --h: 40px; --px: 14px; --fs: 14px; --radius: calc(var(--aui-radius, 10px) + 2px); }
/* Touch screens: a comfortable tap height, 16px text and bigger days */
@media (pointer: coarse) {
  .ui-dpk { --fs: 16px; --cell: 40px; }
  .ui-dpk[data-size="sm"] { --h: 36px; }
  .ui-dpk[data-size="md"] { --h: 40px; }
  .ui-dpk[data-size="lg"] { --h: 44px; }
}
.ui-dpk *, .ui-dpk *::before, .ui-dpk *::after { box-sizing: border-box; }
:where(.ui-dpk) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
:where(.ui-dpk) svg { display: block; flex: none; }
.ui-dpk button:focus-visible { outline: 2px solid var(--ui-dpk-focus); outline-offset: 2px; }

.ui-dpk__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-dpk__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-dpk-title); overflow-wrap: anywhere; cursor: default; }
.ui-dpk__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-dpk-subtle); }

/* The field: the Text Field's look – white with a 1px gray edge that darkens on hover and while open */
.ui-dpk__trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: var(--h);
  min-width: 0;
  padding: 0 calc(var(--px) - 2px) 0 var(--px);
  border-radius: var(--radius);
  background: var(--ui-dpk-surface);
  box-shadow: 0 0 0 1px var(--ui-dpk-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: var(--fs);
  color: var(--ui-dpk-ink);
  text-align: start;
  transition: box-shadow 140ms ease, background-color 140ms ease;
}
.ui-dpk__trigger:hover { box-shadow: 0 0 0 1px var(--ui-dpk-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-dpk[data-open] .ui-dpk__trigger { box-shadow: 0 0 0 1px var(--ui-dpk-edge-open), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-dpk[data-invalid] .ui-dpk__trigger { background: var(--ui-dpk-danger-wash); box-shadow: 0 0 0 1px var(--ui-dpk-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-dpk__trigger:disabled { background: var(--ui-dpk-readonly); box-shadow: 0 0 0 1px var(--ui-dpk-line); cursor: not-allowed; }
.ui-dpk[data-disabled] { opacity: 0.55; }
.ui-dpk__icon, .ui-dpk__chevron { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-dpk-icon); }
.ui-dpk__chevron { transition: transform 240ms var(--ui-dpk-ease); }
.ui-dpk[data-open] .ui-dpk__chevron { transform: rotate(180deg); }
.ui-dpk__value { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-variant-numeric: tabular-nums; animation: ui-dpk-value 260ms var(--ui-dpk-ease) both; }
.ui-dpk__value[data-empty] { color: var(--ui-dpk-faint); animation: none; }

/* The card: white in the top layer, a 1px edge and a deeper drop */
.ui-dpk__panel {
  position: fixed;
  inset: auto;
  z-index: 1000;
  width: calc(var(--cell) * 7 + 20px);
  max-width: calc(100vw - 16px);
  margin: 0;
  padding: 10px;
  border: 0;
  border-radius: 16px;
  background: var(--ui-dpk-card);
  box-shadow: var(--ui-dpk-shadow-pop);
  color: var(--ui-dpk-ink);
  font: inherit;
  font-size: 13px;
  overflow: hidden;
  transform-origin: top left;
  animation: ui-dpk-open 220ms var(--ui-dpk-ease) both;
}
.ui-dpk__panel:dir(rtl) { transform-origin: top right; }
.ui-dpk__panel[data-up] { transform-origin: bottom left; animation-name: ui-dpk-open-up; }
.ui-dpk__panel::backdrop { display: none; }

/* Month name between the two arrows */
.ui-dpk__nav { display: flex; align-items: center; gap: 4px; height: 30px; margin-bottom: 4px; }
.ui-dpk__title { flex: 1; min-width: 0; overflow: hidden; text-align: center; font-size: 13.5px; font-weight: 600; white-space: nowrap; color: var(--ui-dpk-strong); }
.ui-dpk__title > span { display: block; overflow: hidden; text-overflow: ellipsis; animation: ui-dpk-fade 240ms var(--ui-dpk-ease) both; }
.ui-dpk__arrow { display: grid; flex: none; place-items: center; width: 30px; height: 30px; border-radius: 9px; color: var(--ui-dpk-icon); transition: background-color 140ms ease, color 140ms ease; }
.ui-dpk__arrow:hover:not(:disabled) { background: var(--ui-dpk-hover); color: var(--ui-dpk-ink); }
.ui-dpk__arrow:disabled { opacity: 0.35; cursor: default; }
.ui-dpk__arrow:dir(rtl) svg { transform: scaleX(-1); }

/* The month: weekday heads and six weeks of days that touch */
.ui-dpk__grid { display: grid; }
.ui-dpk__weekdays, .ui-dpk__week { display: grid; grid-template-columns: repeat(7, minmax(0, var(--cell))); justify-content: center; }
.ui-dpk__weekday { height: 26px; overflow: hidden; font-size: 11px; font-weight: 500; line-height: 26px; text-align: center; white-space: nowrap; color: var(--ui-dpk-subtle); }
.ui-dpk__weekday abbr { text-decoration: none; cursor: default; }
.ui-dpk__weeks { animation: ui-dpk-slide 300ms var(--ui-dpk-ease) both; }
.ui-dpk__weeks[data-dir="-1"] { animation-name: ui-dpk-slide-back; }
.ui-dpk__cell { display: grid; height: var(--cell); }
.ui-dpk__day {
  position: relative;
  margin: 2px;
  border-radius: 9px;
  font-size: 12.5px;
  line-height: 20px;
  font-variant-numeric: tabular-nums;
  color: var(--ui-dpk-ink);
  transition: background-color 200ms ease, color 200ms ease, transform 160ms var(--ui-dpk-ease);
}
.ui-dpk__day:hover:not([aria-disabled]):not([data-chosen]) { background: var(--ui-dpk-hover); }
.ui-dpk__day:active:not([aria-disabled]) { transform: scale(0.94); }
/* Days of the months around: quieter, still a press away */
.ui-dpk__day[data-outside] { color: var(--ui-dpk-subtle); }
.ui-dpk__day[aria-disabled] { color: var(--ui-dpk-faint); cursor: default; }
/* The days touch each other: their ring sits inside */
.ui-dpk .ui-dpk__day:focus-visible { outline-offset: -2px; }
/* Today: a small dot under the number */
.ui-dpk__day[aria-current="date"] { font-weight: 600; }
.ui-dpk__day[aria-current="date"]::after { content: ""; position: absolute; left: 50%; bottom: 4px; width: 3px; height: 3px; margin-left: -1.5px; border-radius: 50%; background: currentColor; opacity: 0.55; }
/* The chosen day: a blue chip that pops in */
.ui-dpk__day[data-chosen] { background: var(--ui-dpk-accent); color: var(--ui-dpk-on-accent); font-weight: 600; animation: ui-dpk-pick 380ms var(--ui-dpk-spring); }
.ui-dpk__day[data-chosen][aria-current="date"]::after { opacity: 0.85; }

.ui-dpk__message { margin: 0; padding: 0 2px; font-size: 12.5px; line-height: 17px; color: var(--ui-dpk-subtle); overflow-wrap: anywhere; animation: ui-dpk-message 260ms var(--ui-dpk-ease); }
.ui-dpk[data-invalid] .ui-dpk__message { color: var(--ui-dpk-danger); }

@keyframes ui-dpk-open { from { opacity: 0; transform: translateY(-4px) scale(0.98); } }
@keyframes ui-dpk-open-up { from { opacity: 0; transform: translateY(4px) scale(0.98); } }
@keyframes ui-dpk-slide { from { opacity: 0; transform: translateX(14px); } }
@keyframes ui-dpk-slide-back { from { opacity: 0; transform: translateX(-14px); } }
@keyframes ui-dpk-fade { from { opacity: 0; } }
@keyframes ui-dpk-value { from { opacity: 0; transform: translateY(4px); filter: blur(2px); } }
@keyframes ui-dpk-pick { 0% { transform: scale(0.82); } 60% { transform: scale(1.06); } 100% { transform: scale(1); } }
@keyframes ui-dpk-message { from { opacity: 0; transform: translateY(-3px); filter: blur(2px); } }

@media (prefers-reduced-motion: reduce) {
  .ui-dpk *, .ui-dpk *::before, .ui-dpk *::after { animation-duration: 1ms !important; transition-duration: 1ms !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-dpk {
  --ui-dpk-title: var(--aui-ink, #ededed);
  --ui-dpk-strong: var(--aui-ink, #ededed);
  --ui-dpk-ink: var(--aui-ink, #ededed);
  --ui-dpk-subtle: var(--aui-muted, #8b8b92);
  --ui-dpk-faint: var(--aui-placeholder, #4a4a50);
  --ui-dpk-icon: var(--aui-muted, #8b8b92);
  --ui-dpk-surface: var(--aui-surface, #19191b);
  --ui-dpk-card: var(--aui-overlay, var(--aui-surface, #19191b));
  --ui-dpk-line: var(--aui-border, #2a2a2e);
  --ui-dpk-edge: var(--aui-border-strong, #3a3a40);
  --ui-dpk-edge-open: var(--aui-border-strong, #4e4e55);
  --ui-dpk-hover: var(--aui-subtle, #232326);
  --ui-dpk-readonly: #151517;
  --ui-dpk-accent: var(--aui-blue, #4fb0fe);
  --ui-dpk-on-accent: #0d0d10;
  --ui-dpk-shadow-pop: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6));
  --ui-dpk-danger: var(--aui-danger, #ff8a7a);
  --ui-dpk-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-dpk-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-dpk-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  color-scheme: dark;
}
`;function Ke(){return t.jsx("div",{className:"stage",children:t.jsx(Ae,{})})}export{Ke as default};
