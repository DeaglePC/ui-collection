import{r as o,j as e}from"./client-CsvIHAk3.js";const b=12;function S({notices:n,onDismiss:r,className:v}){const[x,p]=o.useState(n),[_,f]=o.useState(new Set),g=o.useRef(new Set),[w,k]=o.useState(n);n!==w&&(k(n),p(n.filter(a=>!g.current.has(a.id))));const[m,j]=o.useState({}),h=o.useRef(new Map),l=x.filter(a=>!_.has(a.id)),y=Math.min(l.length-1,2);o.useLayoutEffect(()=>{const a=()=>{const i={};h.current.forEach((t,c)=>i[c]=t.scrollHeight+t.offsetHeight-t.clientHeight),j(i)};a();const s=new ResizeObserver(a);return h.current.forEach(i=>s.observe(i)),()=>s.disconnect()},[x]);const M=a=>{f(s=>new Set(s).add(a.id)),r?.(a),window.setTimeout(()=>{g.current.add(a.id),p(s=>s.filter(i=>i.id!==a.id)),f(s=>{const i=new Set(s);return i.delete(a.id),i})},320)},d=l[0]?m[l[0].id]??0:0;return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"ui-notification-stack",precedence:"default",children:E}),e.jsx("section",{className:["ui-ns",v].filter(Boolean).join(" "),"aria-label":"Notifications",style:{height:l.length?d+y*b:0},children:x.map(a=>{const s=l.findIndex(u=>u.id===a.id),i=s===-1,t=Math.max(0,s);if(!i&&t>3)return null;const c=!i&&t>0,N=i||t===0?0:d-Math.min(m[a.id]??d,d)+Math.min(t,2)*b,$=i?1:1-Math.min(t,2)*.05;return e.jsxs("article",{ref:u=>{u?h.current.set(a.id,u):h.current.delete(a.id)},className:"ui-ns__card","data-depth":i?void 0:t,"data-leaving":i||void 0,"aria-labelledby":`${a.id}-title`,"aria-hidden":c||void 0,inert:c||i,style:{zIndex:i?10:10-t,transform:i?void 0:`translateY(${N}px) scale(${$})`,opacity:t>2?0:void 0,maxHeight:c&&d?d:void 0},children:[e.jsx(z,{kind:a.pattern??"orbit"}),e.jsxs("div",{className:"ui-ns__body",children:[e.jsxs("div",{className:"ui-ns__top",children:[a.badge?e.jsx("span",{className:"ui-ns__badge",dir:"auto",title:a.badge,children:a.badge}):e.jsx("span",{}),e.jsx("button",{type:"button",className:"ui-ns__close","aria-label":`Dismiss ${a.title}`,onClick:u=>{u.stopPropagation(),M(a)},children:e.jsx(C,{})})]}),e.jsx("h3",{id:`${a.id}-title`,className:"ui-ns__title",dir:"auto",children:a.title}),e.jsx("p",{className:"ui-ns__text",dir:"auto",children:a.text}),a.action&&(a.action.href?e.jsxs("a",{className:"ui-ns__btn",dir:"auto",href:a.action.href,onClick:a.action.onClick,...a.action.external?{target:"_blank",rel:"noreferrer"}:{},children:[a.action.label,a.action.external&&e.jsx(I,{})]}):e.jsx("button",{type:"button",className:"ui-ns__btn",dir:"auto",onClick:a.action.onClick,children:a.action.label}))]})]},a.id)})})]})}function z({kind:n}){return e.jsxs("svg",{className:"ui-ns__pattern",viewBox:"0 0 220 160",fill:"none","aria-hidden":"true",children:[n==="orbit"&&e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"190",cy:"10",r:"46"}),e.jsx("circle",{cx:"190",cy:"10",r:"86"}),e.jsx("circle",{cx:"190",cy:"10",r:"128"}),e.jsx("path",{d:"M60 160 220 0M0 58h220M150 0v160"}),e.jsx("circle",{cx:"150",cy:"58",r:"3.5",className:"ui-ns__dot"})]}),n==="grid"&&e.jsxs(e.Fragment,{children:[[30,60,90,120,150,180,210].map(r=>e.jsx("path",{d:`M${r} 0v160`},`x${r}`)),[20,50,80,110,140].map(r=>e.jsx("path",{d:`M0 ${r}h220`},`y${r}`)),e.jsx("rect",{x:"150",y:"50",width:"30",height:"30",className:"ui-ns__fill"}),e.jsx("circle",{cx:"180",cy:"50",r:"3.5",className:"ui-ns__dot"})]}),n==="rays"&&e.jsxs(e.Fragment,{children:[[0,1,2,3,4,5,6,7].map(r=>e.jsx("path",{d:`M210 6 L${210-Math.cos(r*Math.PI/16)*230} ${6+Math.sin(r*Math.PI/16)*230}`},r)),e.jsx("path",{d:"M120 6a90 90 0 0 0 90 90"}),e.jsx("circle",{cx:"146",cy:"70",r:"3.5",className:"ui-ns__dot"})]})]})}const C=()=>e.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round","aria-hidden":"true",children:e.jsx("path",{d:"m4 4 8 8M12 4l-8 8"})}),I=()=>e.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M5 11 11 5M6 5h5v5"})}),E=`
.ui-ns {
  --ui-ns-card: var(--aui-surface, #ffffff);
  --ui-ns-line: var(--aui-border, #e5e5e5);
  --ui-ns-ink: var(--aui-ink, #171717);
  --ui-ns-muted: var(--aui-muted, #737373);
  --ui-ns-art: #e3e3e3;
  --ui-ns-accent: var(--aui-blue, #4fb0fe);
  --ui-ns-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-ns-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 380px;
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  color: var(--ui-ns-ink);
  -webkit-font-smoothing: antialiased;
  transition: height 460ms var(--ui-ns-ease);
}
.ui-ns *, .ui-ns *::before, .ui-ns *::after { box-sizing: border-box; }

.ui-ns__card {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: var(--ui-ns-card);
  border: 1px solid var(--ui-ns-line);
  border-radius: calc(var(--aui-radius-lg, 16px) + 4px);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    0 8px 24px rgba(0, 0, 0, 0.035);
  transform-origin: 50% 100%;
  transition:
    transform 460ms var(--ui-ns-ease),
    opacity 300ms ease,
    box-shadow 300ms ease;
}
/* Cards behind show only their edge */
.ui-ns__card > * { transition: opacity 260ms ease; }
.ui-ns__card:not([data-depth="0"]) > * { opacity: 0; }
.ui-ns__card[data-leaving] {
  opacity: 0;
  transform: translateX(40px) scale(0.98) !important;
  transition: transform 320ms var(--ui-ns-ease), opacity 240ms ease;
}

.ui-ns__pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  height: 160px;
  stroke: var(--ui-ns-art);
  stroke-width: 1;
  pointer-events: none;
  /* Only the top-right corner, fading out towards the text */
  -webkit-mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
  mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
}
.ui-ns__dot { fill: #d4d4d4; stroke: none; }
.ui-ns__fill { fill: #f5f5f5; }

.ui-ns__body {
  position: relative;
  padding: 18px 20px 20px;
}
.ui-ns__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 26px;
  margin-bottom: 14px;
}
.ui-ns__badge {
  padding: 2px 9px;
  border-radius: 999px;
  background: #fff;
  box-shadow: inset 0 0 0 1px var(--ui-ns-line);
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--aui-muted, #525252);
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-ns__close {
  display: grid;
  flex: none;
  place-items: center;
  width: 28px;
  height: 28px;
  margin: -2px -6px 0 0;
  padding: 0;
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 7px) + 1px);
  background: transparent;
  color: var(--ui-ns-muted);
  cursor: pointer;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-ns__close:hover { background: var(--aui-subtle, rgba(0, 0, 0, 0.05)); color: var(--ui-ns-ink); }
.ui-ns__title {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: start;
  overflow-wrap: anywhere;
}
.ui-ns__text {
  margin: 6px 0 0;
  max-width: 34ch;
  font-size: 14px;
  line-height: 21px;
  color: var(--ui-ns-muted);
  text-align: start;
  overflow-wrap: anywhere;
  white-space: pre-line;
}
.ui-ns__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  /* Grows with a long label instead of leaving the card */
  min-height: 32px;
  max-width: 100%;
  margin-top: 16px;
  padding: 6px 12px;
  border: 0;
  border-radius: calc(var(--aui-radius, 10px) - 1px);
  background: var(--aui-surface, #fff);
  box-shadow: 0 0 0 1px var(--ui-ns-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-ns-ink);
  text-align: start;
  overflow-wrap: anywhere;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-ns__btn:hover { background: #f7f7f7; }
.ui-ns__btn:active { transform: scale(0.98); }
.ui-ns__btn svg { flex: none; color: var(--ui-ns-muted); }
.ui-ns button:focus-visible,
.ui-ns a:focus-visible { outline: 2px solid var(--ui-ns-focus); outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  .ui-ns, .ui-ns__card, .ui-ns__card > * { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ns {
  --ui-ns-card: var(--aui-surface, #232326);
  --ui-ns-line: var(--aui-border, rgba(255, 255, 255, 0.1));
  --ui-ns-ink: var(--aui-ink, #ededed);
  --ui-ns-muted: var(--aui-muted, #8f8f8f);
  --ui-ns-art: rgba(255, 255, 255, 0.08);
  --ui-ns-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
:where(.dark, [data-theme="dark"]) .ui-ns__card {
  box-shadow:
    var(--aui-shadow-card, 0 1px 2px rgba(0, 0, 0, 0.4),
    0 8px 24px rgba(0, 0, 0, 0.35));
}
:where(.dark, [data-theme="dark"]) .ui-ns__dot { fill: rgba(255, 255, 255, 0.22); }
:where(.dark, [data-theme="dark"]) .ui-ns__fill { fill: rgba(255, 255, 255, 0.04); }
:where(.dark, [data-theme="dark"]) .ui-ns__badge { background: #2a2a2d; color: var(--aui-muted, #c4c4c4); }
:where(.dark, [data-theme="dark"]) .ui-ns__close:hover { background: var(--aui-subtle, rgba(255, 255, 255, 0.06)); }
:where(.dark, [data-theme="dark"]) .ui-ns__btn {
  background: var(--aui-surface, #2a2a2d);
  box-shadow: 0 0 0 1px var(--ui-ns-line), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-ns__btn:hover { background: #313135; }
`;function B(){return e.jsx("div",{className:"stage",children:e.jsx(S,{notices:[{id:"1",badge:"通知",title:"构建完成",text:"预览已经可以打开。",pattern:"orbit"},{id:"2",badge:"提醒",title:"还有一项待核对",text:"许可声明写在来源页。",pattern:"grid"}]})})}export{B as default};
