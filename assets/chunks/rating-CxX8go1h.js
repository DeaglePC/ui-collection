import{j as r,r as N}from"./client-CsvIHAk3.js";function V(o){return r.jsxs(r.Fragment,{children:[r.jsx("style",{href:"ui-rating",precedence:"default",children:G}),o.variant==="thumbs"?r.jsx(F,{...o}):r.jsx(Z,{...o})]})}const $=new Intl.NumberFormat("en",{maximumFractionDigits:1}),U=(o,n)=>`${$.format(o)} out of ${n}`;function Z({variant:o,value:n,defaultValue:c=null,onValueChange:p,max:g=5,readOnly:_,disabled:h,size:u="md",allowClear:C=!0,getValueLabel:w=U,name:L,className:m,...l}){const[f,M]=R(n,c,p),[k,v]=N.useState(null),[x,j]=N.useState({upTo:0,n:0}),e=Math.min(50,Math.max(1,Math.floor(Number(g)||5))),y=Array.from({length:e},(t,s)=>s+1),a=["ui-rtg",m].filter(Boolean).join(" "),i=u==="sm"||u==="lg"?u:"md";if(_){const t=typeof f=="number"&&Number.isFinite(f)?Math.min(e,Math.max(0,f)):null,s=t==null?0:Math.round(t*2)/2;return r.jsx("div",{...l,role:"img","aria-label":l["aria-label"]??(t==null?"No rating":w(t,e)),className:a,"data-size":i,"data-readonly":"",children:y.map(b=>r.jsx("span",{className:"ui-rtg__star",children:r.jsx(z,{fill:Math.min(1,Math.max(0,s-(b-1)))})},b))})}const d=typeof f=="number"?Math.min(e,Math.max(1,Math.round(f))):null,E=k??d??0,T=t=>{M(t),t!=null&&j(s=>({upTo:t,n:s.n+1}))},S=t=>{if((t.key==="Delete"||t.key==="Backspace")&&C){t.preventDefault(),T(null);return}const s=getComputedStyle(t.currentTarget).direction==="rtl",b=d??0,A=t.key==="Home"?1:t.key==="End"?e:t.key==="ArrowUp"||t.key===(s?"ArrowLeft":"ArrowRight")?b+1:t.key==="ArrowDown"||t.key===(s?"ArrowRight":"ArrowLeft")?b-1:null;if(A==null)return;t.preventDefault();const D=Math.min(e,Math.max(1,A));v(null),T(D),t.currentTarget.parentElement?.children[D-1]?.focus()};return r.jsxs("div",{...l,role:"radiogroup","aria-label":l["aria-label"]??(l["aria-labelledby"]?void 0:"Rating"),"aria-disabled":h||void 0,className:a,"data-size":i,"data-disabled":h||void 0,onPointerLeave:t=>{v(null),l.onPointerLeave?.(t)},children:[y.map(t=>{const s=x.n>0&&t<=x.upTo&&t<=(d??0);return r.jsx("button",{type:"button",role:"radio",className:"ui-rtg__star","aria-checked":d===t,"aria-label":w(t,e),tabIndex:t===(d??1)?0:-1,disabled:h,"data-hover":k===t||void 0,onPointerEnter:b=>{b.pointerType==="mouse"&&v(t)},onClick:()=>T(d===t&&C?null:t),onKeyDown:S,children:r.jsx(z,{fill:t<=E?1:0,pop:s,delay:(t-1)*40,preview:k!=null},s?`pop-${x.n}`:"rest")},t)}),L&&r.jsx("input",{type:"hidden",name:L,value:d??""})]})}const B="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z";function z({fill:o,pop:n,delay:c=0,preview:p}){return r.jsxs("span",{className:"ui-rtg__glyph","data-pop":n||void 0,"data-preview":p||void 0,style:{"--ui-rtg-f":o,animationDelay:`${c}ms`},"aria-hidden":"true",children:[r.jsx("svg",{viewBox:"0 0 24 24",className:"ui-rtg__empty",focusable:"false",children:r.jsx("path",{d:B,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})}),o>0&&r.jsx("svg",{viewBox:"0 0 24 24",className:"ui-rtg__fill",focusable:"false",children:r.jsx("path",{d:B,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})})]})}function F({variant:o,value:n,defaultValue:c=null,onValueChange:p,labels:g,readOnly:_,disabled:h,size:u="md",allowClear:C=!0,name:w,className:L,...m}){const[l,f]=R(n,c,p),[M,k]=N.useState(0),v=["ui-rtg","ui-rtg--thumbs",L].filter(Boolean).join(" "),x=u==="sm"||u==="lg"?u:"md",j={up:g?.up??"Good response",down:g?.down??"Bad response"},e=l==="up"||l==="down"?l:null,y=a=>{f(a),a&&k(i=>i+1)};return _?r.jsx("div",{...m,role:"img","aria-label":m["aria-label"]??(e?`Rated: ${j[e]}`:"Not rated"),className:v,"data-size":x,"data-readonly":"",children:["up","down"].map(a=>r.jsx("span",{className:"ui-rtg__thumb","data-on":e===a||void 0,children:r.jsx(H,{down:a==="down",solid:e===a})},a))}):r.jsxs("div",{...m,role:"radiogroup","aria-label":m["aria-label"]??(m["aria-labelledby"]?void 0:"Rate this response"),"aria-disabled":h||void 0,className:v,"data-size":x,"data-disabled":h||void 0,children:[["up","down"].map(a=>r.jsx("button",{type:"button",role:"radio",className:"ui-rtg__thumb","aria-checked":e===a,"aria-label":j[a],title:j[a],tabIndex:a===(e??"up")?0:-1,disabled:h,"data-on":e===a||void 0,onClick:()=>y(e===a&&C?null:a),onKeyDown:i=>{if((i.key==="Delete"||i.key==="Backspace")&&C){i.preventDefault(),y(null);return}if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(i.key))return;i.preventDefault();const d=i.key==="Home"?"up":i.key==="End"||a==="up"?"down":"up";y(d),i.currentTarget.parentElement?.children[d==="up"?0:1]?.focus()},children:r.jsx(H,{down:a==="down",solid:e===a,pop:e===a&&M>0},e===a?`pop-${M}`:"rest")},a)),w&&r.jsx("input",{type:"hidden",name:w,value:e??""})]})}const P=["M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z","M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"],W=["M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z","M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z"];function H({down:o,solid:n,pop:c}){return r.jsx("svg",{viewBox:"0 0 24 24",className:"ui-rtg__icon","data-down":o||void 0,"data-pop":c||void 0,focusable:"false","aria-hidden":"true",children:(o?W:P).map((p,g)=>r.jsx("path",{d:p,fill:n?"currentColor":"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},g))})}function R(o,n,c){const[p,g]=N.useState(n),_=o!==void 0;return[_?o:p,u=>{_||g(u),c?.(u)}]}const G=`
/* Colors and motion as variables – override them on .ui-rtg (see Theming in the docs) */
.ui-rtg {
  --ui-rtg-star: #f5b000;
  --ui-rtg-empty: #e4e4e7;
  --ui-rtg-empty-hover: #d4d4d8;
  --ui-rtg-icon: var(--aui-muted, #8f8f8f);
  --ui-rtg-ink: var(--aui-ink, #171717);
  --ui-rtg-wash: #f4f4f5;
  --ui-rtg-wash-on: #ececee;
  --ui-rtg-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-rtg-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));

  /* A star's size, the space around it (its hit area) and a thumb button's size */
  --s: 20px;
  --pad: 3px;
  --b: 32px;
  --i: 18px;

  display: inline-flex;
  align-items: center;
  gap: 2px;
  min-width: 0;
  max-width: 100%;
  flex-wrap: wrap;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
}
.ui-rtg[data-size="sm"] { --s: 16px; --pad: 2px; --b: 28px; --i: 16px; gap: 1px; }
.ui-rtg[data-size="lg"] { --s: 26px; --pad: 3px; --b: 36px; --i: 20px; }
.ui-rtg[data-readonly] { gap: 2px; }
.ui-rtg[data-readonly][data-size="sm"] { gap: 1px; }
.ui-rtg[data-disabled] { opacity: 0.5; }

/* A star: its button is the glyph plus a little room, so the hit area is bigger than the star */
.ui-rtg__star {
  display: grid;
  flex: none;
  place-items: center;
  margin: 0;
  padding: var(--pad);
  border: 0;
  border-radius: 8px;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
}
.ui-rtg[data-readonly] .ui-rtg__star { padding: 0; cursor: default; }
.ui-rtg__star:disabled { cursor: not-allowed; }
.ui-rtg__star:focus-visible { outline: 2px solid var(--ui-rtg-focus); outline-offset: 2px; }

.ui-rtg__glyph { position: relative; display: block; width: var(--s); height: var(--s); transition: transform 160ms var(--ui-rtg-ease); }
.ui-rtg__glyph svg { position: absolute; inset: 0; display: block; width: 100%; height: 100%; overflow: visible; }
.ui-rtg__empty { color: var(--ui-rtg-empty); transition: color 140ms ease; }
/* The fill is a second star on top, clipped from the start side – whole, or half for a read-only 4.5 */
.ui-rtg__fill { color: var(--ui-rtg-star); clip-path: inset(0 calc((1 - var(--ui-rtg-f)) * 100%) 0 0); }
.ui-rtg:dir(rtl) .ui-rtg__fill { clip-path: inset(0 0 0 calc((1 - var(--ui-rtg-f)) * 100%)); }
.ui-rtg__star:not(:disabled):hover .ui-rtg__empty { color: var(--ui-rtg-empty-hover); }
.ui-rtg__star[data-hover] .ui-rtg__glyph { transform: scale(1.12); }
.ui-rtg__star:not(:disabled):active .ui-rtg__glyph { transform: scale(0.9); }
/* A choice: the stars up to it pop one after the other */
.ui-rtg__glyph[data-pop] { animation: ui-rtg-pop 420ms var(--ui-rtg-ease) both; }

/* Thumbs: two icon buttons; the chosen one fills in ink and sits on a gray wash */
.ui-rtg__thumb {
  display: grid;
  flex: none;
  place-items: center;
  width: var(--b);
  height: var(--b);
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 9px;
  background: none;
  color: var(--ui-rtg-icon);
  font: inherit;
  cursor: pointer;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-rtg[data-readonly] .ui-rtg__thumb { width: auto; height: auto; cursor: default; }
.ui-rtg[data-readonly] .ui-rtg__thumb:not([data-on]) { opacity: 0.45; }
.ui-rtg__thumb:not(:disabled):hover { background: var(--ui-rtg-wash); color: var(--ui-rtg-ink); }
.ui-rtg__thumb[data-on] { color: var(--ui-rtg-ink); }
.ui-rtg:not([data-readonly]) .ui-rtg__thumb[data-on] { background: var(--ui-rtg-wash-on); }
.ui-rtg__thumb:disabled { cursor: not-allowed; }
.ui-rtg__thumb:focus-visible { outline: 2px solid var(--ui-rtg-focus); outline-offset: 2px; }
.ui-rtg__icon { display: block; width: var(--i); height: var(--i); }
.ui-rtg__icon[data-pop] { animation: ui-rtg-thumb 460ms var(--ui-rtg-ease); transform-origin: 30% 70%; }
.ui-rtg__icon[data-pop][data-down] { animation-name: ui-rtg-thumb-down; transform-origin: 30% 30%; }

@keyframes ui-rtg-pop { 0% { transform: scale(0.6); } 55% { transform: scale(1.22); } 100% { transform: scale(1); } }
@keyframes ui-rtg-thumb { 0% { transform: scale(0.8) rotate(0); } 45% { transform: scale(1.18) rotate(-12deg); } 100% { transform: scale(1) rotate(0); } }
@keyframes ui-rtg-thumb-down { 0% { transform: scale(0.8) rotate(0); } 45% { transform: scale(1.18) rotate(12deg); } 100% { transform: scale(1) rotate(0); } }

/* Touch screens: a hit area of at least 32px per star and 36px per thumb */
@media (pointer: coarse) {
  .ui-rtg { --pad: 6px; --b: 40px; }
  .ui-rtg[data-size="sm"] { --pad: 8px; --b: 36px; }
  .ui-rtg[data-size="lg"] { --pad: 5px; --b: 44px; }
  .ui-rtg:not([data-readonly]) { gap: 0; }
  .ui-rtg__star[data-hover] .ui-rtg__glyph { transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-rtg__glyph, .ui-rtg__empty, .ui-rtg__thumb { transition: none; }
  .ui-rtg__glyph[data-pop], .ui-rtg__icon[data-pop] { animation: none; }
  .ui-rtg__star[data-hover] .ui-rtg__glyph, .ui-rtg__star:active .ui-rtg__glyph { transform: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-rtg {
  --ui-rtg-star: #f0bd1a;
  --ui-rtg-empty: #2e2e33;
  --ui-rtg-empty-hover: #3a3a40;
  --ui-rtg-icon: var(--aui-muted, #8b8b92);
  --ui-rtg-ink: var(--aui-ink, #ededed);
  --ui-rtg-wash: #232326;
  --ui-rtg-wash-on: #2a2a2e;
  --ui-rtg-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function O(){return r.jsx("div",{className:"stage",children:r.jsx(V,{})})}export{O as default};
