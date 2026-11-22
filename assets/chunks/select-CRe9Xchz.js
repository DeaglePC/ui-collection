import{r as n,j as a}from"./client-CsvIHAk3.js";function de({options:t,value:N,defaultValue:Q=null,onChange:X,placeholder:H="Choose…",label:g,hint:K,error:v,optional:ee=!1,size:P="md",disabled:_=!1,name:T,required:ie,id:ae,className:te,"aria-label":I,ref:y}){const m=n.useId(),D=ae??`${m}-trigger`,R=`${m}-list`,E=`${m}-label`,q=`${m}-message`,B=e=>`${m}-option-${e}`,[se,re]=n.useState(Q),c=N!==void 0?N:se,p=t.find(e=>e.value===c)??null,[r,O]=n.useState(!1),[o,u]=n.useState(-1),[l,U]=n.useState(null),[L,W]=n.useState(null),k=n.useRef(null),b=n.useRef(null),h=n.useRef({text:"",at:0}),Y=!!v,C=z(v)?v:z(K)?K:null,ne=ce.includes(P)?P:"md",S=e=>e>=0&&e<t.length&&!t[e].disabled,F=()=>t.findIndex(e=>!e.disabled),le=()=>{for(let e=t.length-1;e>=0;e--)if(!t[e].disabled)return e;return-1},V=(e,i)=>{for(let s=e+i;s>=0&&s<t.length;s+=i)if(!t[s].disabled)return s;return e},G=e=>{if(_||!t.length)return;const i=t.findIndex(s=>s.value===c);u(S(i)?i:F()),O(!0)},w=(e=!0)=>{O(!1),W(null),U(null),e&&k.current?.focus({preventScroll:!0})},M=e=>{if(!S(e))return;const i=t[e];N===void 0&&re(i.value),i.value!==c&&X?.(i.value,i),w()},Z=()=>{const e=k.current;if(!e)return;const i=e.getBoundingClientRect(),s=4,f=8,j=window.innerHeight-i.bottom-s-f,x=i.top-s-f,d=Math.min(b.current?.scrollHeight??280,288),A=j<Math.min(d,160)&&x>j,J=Math.max(i.width,180),ue=Math.min(Math.max(f,i.left),window.innerWidth-J-f);U({top:A?i.top-s:i.bottom+s,left:ue,width:J,maxHeight:Math.max(120,Math.min(288,A?x:j)),up:A})};n.useLayoutEffect(()=>{if(!r)return;const e=b.current;e&&"showPopover"in e&&!e.matches(":popover-open")&&e.showPopover(),Z();const i=()=>Z();return window.addEventListener("resize",i),window.addEventListener("scroll",i,!0),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i,!0),e&&"hidePopover"in e&&e.matches(":popover-open")&&e.hidePopover()}},[r]),n.useEffect(()=>{if(!r)return;const e=i=>{const s=i.target;k.current?.contains(s)||b.current?.contains(s)||w(!1)};return document.addEventListener("pointerdown",e,!0),()=>document.removeEventListener("pointerdown",e,!0)},[r]),n.useLayoutEffect(()=>{if(!r||o<0)return;const e=b.current?.querySelector(`[data-index="${o}"]`);e&&(W({top:e.offsetTop,height:e.offsetHeight}),e.scrollIntoView({block:"nearest"}))},[o,r,l]);const $=e=>{const i=Date.now();h.current.text=i-h.current.at>700?e:h.current.text+e,h.current.at=i;const s=h.current.text.toLowerCase(),f=r?o:t.findIndex(d=>d.value===c),x=[...t.keys()].map(d=>(d+f+(s.length===1?1:0)+t.length)%t.length).find(d=>S(d)&&t[d].label.toLowerCase().startsWith(s));x!==void 0&&(r?u(x):M(x))},oe=e=>{if(!_){if(!r){e.key==="ArrowDown"||e.key==="ArrowUp"||e.key==="Enter"||e.key===" "?(e.preventDefault(),G()):e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&$(e.key);return}switch(e.key){case"ArrowDown":e.preventDefault(),u(i=>V(i,1));break;case"ArrowUp":e.preventDefault(),u(i=>V(i,-1));break;case"Home":case"PageUp":e.preventDefault(),u(F());break;case"End":case"PageDown":e.preventDefault(),u(le());break;case"Enter":case" ":e.preventDefault(),e.key===" "&&Date.now()-h.current.at<700?$(" "):M(o);break;case"Escape":e.preventDefault(),w();break;case"Tab":w(!1);break;default:e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&$(e.key)}}};return a.jsxs("div",{className:["ui-sel",te].filter(Boolean).join(" "),"data-size":ne,"data-open":r||void 0,"data-invalid":Y||void 0,"data-disabled":_||void 0,children:[a.jsx("style",{href:"ui-select",precedence:"default",children:fe}),g!=null&&a.jsxs("div",{className:"ui-sel__head",children:[a.jsx("label",{className:"ui-sel__label",id:E,htmlFor:D,children:g}),ee&&a.jsx("span",{className:"ui-sel__optional",children:"Optional"})]}),a.jsxs("button",{ref:e=>{k.current=e,typeof y=="function"?y(e):y&&(y.current=e)},id:D,type:"button",className:"ui-sel__trigger",role:"combobox","aria-haspopup":"listbox","aria-expanded":r,"aria-controls":R,"aria-activedescendant":r&&o>=0?B(o):void 0,"aria-label":I,"aria-labelledby":I?void 0:g!=null?`${E} ${D}`:void 0,"aria-describedby":C?q:void 0,"aria-invalid":Y||void 0,"aria-required":ie||void 0,disabled:_,onClick:()=>r?w():G(),onKeyDown:oe,children:[p?.icon&&a.jsx("span",{className:"ui-sel__icon","aria-hidden":"true",children:p.icon}),a.jsx("span",{className:"ui-sel__value","data-empty":p?void 0:"",title:p?.label,children:p?p.label:H}),a.jsx("span",{className:"ui-sel__chevron","aria-hidden":"true",children:a.jsx(pe,{})})]}),T&&a.jsx("input",{type:"hidden",name:T,value:c??""}),r&&a.jsxs("div",{ref:b,id:R,className:"ui-sel__list",role:"listbox","aria-labelledby":g!=null?E:void 0,"aria-label":g==null?I??H:void 0,popover:"manual","data-up":l?.up||void 0,style:l?{top:l.up?void 0:l.top,bottom:l.up?window.innerHeight-l.top:void 0,left:l.left,width:l.width,maxHeight:l.maxHeight}:void 0,onPointerLeave:()=>u(-1),children:[L&&a.jsx("span",{className:"ui-sel__glow","aria-hidden":"true",style:{transform:`translateY(${L.top}px)`,height:L.height}}),t.map((e,i)=>a.jsxs("div",{id:B(i),className:"ui-sel__option",role:"option","data-index":i,"aria-selected":e.value===c,"aria-disabled":e.disabled||void 0,"data-active":i===o||void 0,onPointerMove:()=>e.disabled||i===o||u(i),onPointerDown:s=>s.preventDefault(),onClick:()=>M(i),children:[e.icon&&a.jsx("span",{className:"ui-sel__icon","aria-hidden":"true",children:e.icon}),a.jsxs("span",{className:"ui-sel__text",children:[a.jsx("span",{className:"ui-sel__option-label",children:e.label}),e.description&&a.jsx("span",{className:"ui-sel__option-hint",children:e.description})]}),a.jsx("span",{className:"ui-sel__check","aria-hidden":"true",children:e.value===c&&a.jsx(he,{})})]},e.value))]}),C&&a.jsx("p",{className:"ui-sel__message",id:q,"aria-live":z(v)?"polite":void 0,children:C},z(v)?"error":"hint")]})}const ce=["sm","md","lg"],z=t=>t!=null&&typeof t!="boolean"&&t!=="";function pe(){return a.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:a.jsx("path",{d:"m7 10 5 5 5-5"})})}function he(){return a.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:a.jsx("path",{className:"ui-sel__tick",d:"M5 12.5 9.5 17 19 7",pathLength:1})})}const fe=`
/* Colors and motion as variables – override them on .ui-sel (see Theming in the docs) */
.ui-sel {
  --ui-sel-title: var(--aui-ink, #171717);
  --ui-sel-ink: var(--aui-ink, #171717);
  --ui-sel-subtle: var(--aui-muted, #8f8f8f);
  --ui-sel-faint: var(--aui-placeholder, #b5b5b5);
  --ui-sel-icon: var(--aui-muted, #8f8f8f);
  --ui-sel-surface: var(--aui-surface, #ffffff);
  --ui-sel-menu: var(--aui-surface, #ffffff);
  --ui-sel-line: var(--aui-border, #e6e6e8);
  --ui-sel-edge: var(--aui-border-strong, #d4d4d8);
  --ui-sel-edge-open: var(--aui-border-strong, #b4b4bb);
  --ui-sel-glow: #f4f4f5;
  --ui-sel-readonly: #fafafa;
  --ui-sel-shadow-menu: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06);
  --ui-sel-danger: var(--aui-danger, #c4320a);
  --ui-sel-danger-edge: #ff8a7a;
  --ui-sel-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-sel-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-sel-ease: cubic-bezier(0.22, 1, 0.36, 1);

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
  color: var(--ui-sel-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-sel[data-size="sm"] { --h: 32px; --px: 10px; --fs: 13px; --radius: calc(var(--aui-radius, 10px) - 1px); }
.ui-sel[data-size="lg"] { --h: 40px; --px: 14px; --fs: 14px; --radius: calc(var(--aui-radius, 10px) + 2px); }
/* Touch screens: a comfortable tap height and 16px text */
@media (pointer: coarse) {
  .ui-sel { --fs: 16px; }
  .ui-sel[data-size="sm"] { --h: 36px; }
  .ui-sel[data-size="md"] { --h: 40px; }
  .ui-sel[data-size="lg"] { --h: 44px; }
}

.ui-sel__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-sel__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-sel-title); overflow-wrap: anywhere; cursor: default; }
.ui-sel__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-sel-subtle); }

/* The field: the Text Field's look – white with a 1px gray edge that darkens on hover and while open */
.ui-sel__trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  height: var(--h);
  min-width: 0;
  margin: 0;
  padding: 0 calc(var(--px) - 2px) 0 var(--px);
  border: 0;
  border-radius: var(--radius);
  background: var(--ui-sel-surface);
  box-shadow: 0 0 0 1px var(--ui-sel-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  font: inherit;
  font-size: var(--fs);
  color: var(--ui-sel-ink);
  text-align: start;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: box-shadow 140ms ease, background-color 140ms ease;
}
.ui-sel__trigger:hover { box-shadow: 0 0 0 1px var(--ui-sel-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-sel[data-open] .ui-sel__trigger { box-shadow: 0 0 0 1px var(--ui-sel-edge-open), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-sel__trigger:focus-visible { outline: 2px solid var(--ui-sel-focus); outline-offset: 2px; }
.ui-sel[data-invalid] .ui-sel__trigger { background: var(--ui-sel-danger-wash); box-shadow: 0 0 0 1px var(--ui-sel-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-sel__trigger:disabled { background: var(--ui-sel-readonly); box-shadow: 0 0 0 1px var(--ui-sel-line); cursor: not-allowed; }
.ui-sel[data-disabled] { opacity: 0.55; }

.ui-sel__value { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-sel__value[data-empty] { color: var(--ui-sel-faint); }
.ui-sel__icon { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-sel-icon); }
.ui-sel__icon > svg, .ui-sel__icon > img { display: block; width: 16px; height: 16px; }
.ui-sel__chevron { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-sel-icon); transition: transform 240ms var(--ui-sel-ease); }
.ui-sel[data-open] .ui-sel__chevron { transform: rotate(180deg); }

/* The list: a white card in the top layer, at the field's edge */
.ui-sel__list {
  position: fixed;
  inset: auto;
  z-index: 1000;
  box-sizing: border-box;
  margin: 0;
  padding: 5px;
  border: 0;
  border-radius: 14px;
  background: var(--ui-sel-menu);
  box-shadow: var(--ui-sel-shadow-menu);
  color: var(--ui-sel-ink);
  font: inherit;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  transform-origin: top center;
  animation: ui-sel-in 200ms var(--ui-sel-ease) both;
}
.ui-sel__list[data-up] { transform-origin: bottom center; }
.ui-sel__list::backdrop { display: none; }

/* One soft highlight that glides between the rows */
.ui-sel__glow {
  position: absolute;
  top: 0;
  left: 5px;
  right: 5px;
  border-radius: 9px;
  background: var(--ui-sel-glow);
  pointer-events: none;
  transition: transform 180ms var(--ui-sel-ease), height 180ms var(--ui-sel-ease);
}

.ui-sel__option {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 7px 10px;
  box-sizing: border-box;
  border-radius: 9px;
  font-size: 13.5px;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
}
.ui-sel__option[aria-disabled] { color: var(--ui-sel-faint); cursor: default; }
.ui-sel__option[aria-disabled] .ui-sel__icon { opacity: 0.5; }
.ui-sel__text { display: grid; flex: 1; min-width: 0; }
.ui-sel__option-label { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-sel__option[aria-selected="true"] .ui-sel__option-label { font-weight: 500; }
.ui-sel__option-hint { overflow: hidden; font-size: 12px; line-height: 16px; white-space: nowrap; text-overflow: ellipsis; color: var(--ui-sel-subtle); }
.ui-sel__check { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-sel-ink); }
.ui-sel__tick { stroke-dasharray: 1; animation: ui-sel-draw 280ms 40ms var(--ui-sel-ease) both; }
@media (pointer: coarse) {
  .ui-sel__option { min-height: 40px; font-size: 15px; }
}

.ui-sel__message { margin: 0; padding: 0 2px; font-size: 12.5px; line-height: 17px; color: var(--ui-sel-subtle); overflow-wrap: anywhere; animation: ui-sel-message 260ms var(--ui-sel-ease); }
.ui-sel[data-invalid] .ui-sel__message { color: var(--ui-sel-danger); }

@keyframes ui-sel-in {
  from { opacity: 0; transform: translateY(-4px) scale(0.98); }
}
.ui-sel__list[data-up] { animation-name: ui-sel-in-up; }
@keyframes ui-sel-in-up {
  from { opacity: 0; transform: translateY(4px) scale(0.98); }
}
@keyframes ui-sel-draw {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}
@keyframes ui-sel-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-sel *, .ui-sel__list { animation-duration: 1ms !important; }
  .ui-sel__glow, .ui-sel__chevron, .ui-sel__trigger { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-sel {
  --ui-sel-title: var(--aui-ink, #ededed);
  --ui-sel-ink: var(--aui-ink, #ededed);
  --ui-sel-subtle: var(--aui-muted, #8b8b92);
  --ui-sel-faint: var(--aui-placeholder, #5c5c63);
  --ui-sel-icon: var(--aui-muted, #8b8b92);
  --ui-sel-surface: var(--aui-surface, #19191b);
  --ui-sel-menu: var(--aui-surface, #19191b);
  --ui-sel-line: var(--aui-border, #2a2a2e);
  --ui-sel-edge: var(--aui-border-strong, #3a3a40);
  --ui-sel-edge-open: var(--aui-border-strong, #4e4e55);
  --ui-sel-glow: #26262a;
  --ui-sel-readonly: #151517;
  --ui-sel-shadow-menu: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6);
  --ui-sel-danger: var(--aui-danger, #ff8a7a);
  --ui-sel-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-sel-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-sel-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function ge(){return a.jsx("div",{className:"stage",children:a.jsx(de,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{ge as default};
