import{r as m,j as n}from"./client-CsvIHAk3.js";function Z(l){const u=l.trim();return u?((typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(u)[Symbol.iterator]().next().value?.segment:Array.from(u)[0])??"?").toLocaleUpperCase():"?"}function ee({logo:l,named:u}){const[p,k]=m.useState(!1),v=l.svg??(l.src&&!p?n.jsx("img",{src:l.src,alt:"",draggable:!1,onError:()=>k(!0)}):null);return!v&&u?null:n.jsx("span",{className:"ui-lm__mark","aria-hidden":"true",children:v??n.jsx("span",{className:"ui-lm__tile",children:Z(l.name)})})}const te=(l,u)=>u>0?(l%u+u)%u:0,re=(l,u,p)=>Math.min(p,Math.max(u,l));function ie({logos:l,speed:u=40,direction:p="left",rows:k=1,gap:v=56,pauseOnHover:R=!0,grayscale:C=!0,labels:x="none",label:z="Logos of companies using the product",className:D}){const T=m.useRef(null),N=m.useRef([]),b=m.useRef([]),w=m.useRef([]),h=m.useRef([]),y=m.useRef(!1),j=m.useRef(!1),[q,B]=m.useState([]),[f,X]=m.useState(!1),_=k===2&&l.length>1?[{logos:l.filter((t,e)=>e%2===0),dir:p==="left"?1:-1},{logos:l.filter((t,e)=>e%2===1),dir:p==="left"?-1:1}]:[{logos:l,dir:p==="left"?1:-1}],A=m.useRef({speed:u,pauseOnHover:R,split:_});A.current={speed:u,pauseOnHover:R,split:_},m.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=()=>X(t.matches);return e(),t.addEventListener("change",e),()=>t.removeEventListener("change",e)},[]),m.useEffect(()=>{if(f)return;const t=()=>{const r=_.map((i,a)=>{const s=b.current[a],c=w.current[a];if(!s||!c)return 2;const d=s.getBoundingClientRect().width,g=h.current[a]??={x:a*d*.5,v:0,w:d,drag:null,seek:0};return g.w>0&&d>0&&g.w!==d&&(g.x=g.x/g.w*d),g.w=d,d>0?Math.ceil(c.clientWidth/d)+1:2});B(i=>i.length===r.length&&i.every((a,s)=>a===r[s])?i:r)};t();const e=new ResizeObserver(t);for(const r of[...b.current,...w.current])r&&e.observe(r);return()=>e.disconnect()},[f,_.length,l,v,x]),m.useEffect(()=>{const t=T.current;if(f||!t)return;let e=0,r=0,i=!1;const a=c=>{const d=r?Math.min(.05,(c-r)/1e3):0;r=c;const{speed:g,pauseOnHover:W,split:J}=A.current,L=W&&(y.current||j.current);J.forEach((Q,S)=>{const o=h.current[S],P=N.current[S];if(!(!o||!P||o.w<=0)){if(!o.drag){const F=L?0:g*Q.dir,Y=Math.abs(o.v-F)>Math.max(120,g*2)?.55:L?.32:.7;if(o.v+=(F-o.v)*(1-Math.exp(-d/Y)),o.x+=o.v*d,o.seek){const M=o.seek*(1-Math.exp(-d/.12));o.x+=M,o.seek=Math.abs(o.seek-M)<.5?0:o.seek-M}}o.x=te(o.x,o.w),P.style.transform=`translate3d(${-o.x}px, 0, 0)`}}),e=i?requestAnimationFrame(a):0},s=new IntersectionObserver(([c])=>{i=c.isIntersecting,i&&!e&&(r=0,e=requestAnimationFrame(a))});return s.observe(t),()=>{s.disconnect(),cancelAnimationFrame(e)}},[f]);const O=t=>e=>{const r=h.current[t];!r||e.pointerType==="mouse"&&e.button!==0||(r.drag={id:e.pointerId,lastX:e.clientX,lastT:e.timeStamp,moved:0,captured:!1},r.v=0)},U=t=>e=>{const r=h.current[t],i=r?.drag;if(!r||!i||i.id!==e.pointerId)return;const a=e.clientX-i.lastX,s=Math.max(1,e.timeStamp-i.lastT)/1e3;i.moved+=Math.abs(a),!i.captured&&i.moved>4&&(i.captured=!0,e.currentTarget.setPointerCapture(e.pointerId),e.currentTarget.setAttribute("data-dragging","")),r.x-=a,r.v=r.v*.6+-a/s*.4,i.lastX=e.clientX,i.lastT=e.timeStamp},E=t=>e=>{const r=h.current[t],i=r?.drag;if(!(!r||!i||i.id!==e.pointerId)&&(e.timeStamp-i.lastT>80&&(r.v=0),r.v=re(r.v,-2400,2400),r.drag=null,e.currentTarget.removeAttribute("data-dragging"),i.captured)){const a=e.currentTarget,s=c=>{c.preventDefault(),c.stopPropagation()};a.addEventListener("click",s,{capture:!0,once:!0}),setTimeout(()=>a.removeEventListener("click",s,{capture:!0}),0)}},$=t=>e=>{const r=h.current[t],i=w.current[t];if(f||!r||!i)return;const a=i.getBoundingClientRect(),s=e.currentTarget.getBoundingClientRect(),c=Math.min(96,a.width*.15);s.left<a.left+c?r.seek=s.left-(a.left+c):s.right>a.right-c&&(r.seek=s.right-(a.right-c))},I=(t,e,r,i)=>{const a=n.jsxs(n.Fragment,{children:[n.jsx(ee,{logo:t,named:x!=="none"}),x!=="none"?n.jsx("span",{className:"ui-lm__name",title:t.name,children:t.name}):n.jsx("span",{className:"ui-lm__sr",children:t.name})]});return n.jsx("li",{className:"ui-lm__item",style:{"--ui-lm-brand":t.color,"--ui-lm-scale":t.scale},children:t.href?n.jsx("a",{className:"ui-lm__link",href:t.href,draggable:!1,tabIndex:r?void 0:-1,onFocus:r?$(e):void 0,children:a}):n.jsx("span",{className:"ui-lm__link",children:a})},`${i}-${t.name}`)},H=l.some(t=>t.href),G=t=>{if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.key==="ArrowLeft";if(t.target instanceof HTMLAnchorElement){const r=Array.from(t.target.closest("ul")?.querySelectorAll("a[href]")??[]),i=r[r.indexOf(t.target)+(e?-1:1)];i&&(t.preventDefault(),i.focus());return}if(!(f||t.target!==t.currentTarget)){t.preventDefault();for(const r of h.current)r&&(r.seek+=e?-160:160)}};if(l.length===0)return null;const K={"--ui-lm-gap":`${v}px`},V=["ui-lm",D].filter(Boolean).join(" ");return n.jsxs(n.Fragment,{children:[n.jsx("style",{href:"ui-logo-marquee",precedence:"default",children:ae}),n.jsx("div",{ref:T,className:V,style:K,role:"region","aria-label":z,tabIndex:!H&&!f?0:void 0,onKeyDown:G,"data-labels":x,"data-grayscale":C||void 0,"data-static":f||void 0,onPointerEnter:t=>{t.pointerType!=="touch"&&(y.current=!0)},onPointerLeave:()=>y.current=!1,onFocus:t=>j.current=t.target.matches(":focus-visible"),onBlur:t=>{t.currentTarget.contains(t.relatedTarget)||(j.current=!1)},children:f?n.jsx("ul",{className:"ui-lm__wrap",children:l.map((t,e)=>I(t,0,!0,e))}):_.map((t,e)=>n.jsx("div",{ref:r=>{w.current[e]=r},className:"ui-lm__row",onPointerDown:O(e),onPointerMove:U(e),onPointerUp:E(e),onPointerCancel:E(e),children:n.jsx("div",{ref:r=>{N.current[e]=r},className:"ui-lm__track",children:Array.from({length:Math.max(2,q[e]??2)},(r,i)=>n.jsx("ul",{ref:i===0?a=>{b.current[e]=a}:void 0,className:"ui-lm__set","aria-hidden":i>0||void 0,inert:i>0||void 0,children:t.logos.map((a,s)=>I(a,e,i===0,s))},i))})},e))})]})}const ae=`
.ui-lm {
  --ui-lm-h: 28px;
  --ui-lm-g: var(--ui-lm-gap, 56px);
  --ui-lm-row-gap: 20px;
  --ui-lm-fade: min(14%, 120px);
  --ui-lm-muted: #9a9a9a;
  --ui-lm-ink: #171717;
  --ui-lm-label: var(--aui-muted, #8f8f8f);
  --ui-lm-dim: 0.75;
  --ui-lm-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-lm-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  container-type: inline-size;
  display: grid;
  gap: var(--ui-lm-row-gap);
  width: 100%;
  min-width: 0;
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  -webkit-font-smoothing: antialiased;
}
/* Narrow containers (phones): smaller logos, tighter gaps */
@container (max-width: 520px) {
  .ui-lm__row, .ui-lm__wrap { --ui-lm-h: 22px; --ui-lm-g: calc(var(--ui-lm-gap, 56px) * 0.62); }
}

.ui-lm__row {
  overflow: hidden;
  /* Vertical page scroll stays native; horizontal swipes scrub the strip */
  touch-action: pan-y;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 var(--ui-lm-fade), #000 calc(100% - var(--ui-lm-fade)), transparent);
  mask-image: linear-gradient(90deg, transparent, #000 var(--ui-lm-fade), #000 calc(100% - var(--ui-lm-fade)), transparent);
  /* Room for focus rings so they aren't clipped */
  padding-block: 6px;
}
.ui-lm__row[data-dragging] { cursor: grabbing; }
.ui-lm__track {
  display: flex;
  width: max-content;
  will-change: transform;
}
.ui-lm__set,
.ui-lm__wrap {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
.ui-lm__set { flex: none; }
/* Every logo carries its gap on the right, so one set's width is exactly the wrap distance */
.ui-lm__item { flex: none; margin-inline-end: var(--ui-lm-g); }

.ui-lm__link {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-lm-h) * 0.32);
  border-radius: 8px;
  color: var(--ui-lm-muted);
  text-decoration: none;
  transition: color 260ms var(--ui-lm-ease), opacity 260ms var(--ui-lm-ease), filter 260ms var(--ui-lm-ease);
  -webkit-user-drag: none;
}
.ui-lm[data-labels="below"] .ui-lm__link { flex-direction: column; gap: 8px; }
.ui-lm:focus-visible { outline: 2px solid var(--ui-lm-focus); outline-offset: -2px; }
.ui-lm__link:focus-visible { outline: 2px solid var(--ui-lm-focus); outline-offset: 2px; }

/* Consistent optical height: every mark fills the same box, nudged by its own scale */
.ui-lm__mark {
  display: grid;
  place-items: center;
  height: var(--ui-lm-h);
  transition: color 260ms var(--ui-lm-ease);
}
.ui-lm__mark > svg,
.ui-lm__mark > img {
  display: block;
  height: calc(var(--ui-lm-h) * var(--ui-lm-scale, 1));
  width: auto;
  max-width: calc(var(--ui-lm-h) * 5);
  pointer-events: none;
}
.ui-lm__name {
  /* A long company name ends in an ellipsis; the full name is in the title */
  max-width: calc(var(--ui-lm-h) * 9);
  overflow: hidden;
  font-size: calc(var(--ui-lm-h) * 0.68);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.15;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-lm__tile {
  display: grid;
  place-items: center;
  width: var(--ui-lm-h);
  height: var(--ui-lm-h);
  border-radius: calc(var(--ui-lm-h) * 0.26);
  background: color-mix(in srgb, currentColor 14%, transparent);
  font-size: calc(var(--ui-lm-h) * 0.5);
  font-weight: 600;
  line-height: 1;
}
.ui-lm[data-labels="below"] .ui-lm__name {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--ui-lm-label);
}
.ui-lm__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* Grayscale: muted marks, images without colour – the hovered logo lifts to its brand colour */
.ui-lm[data-grayscale] .ui-lm__mark > img { filter: grayscale(1); opacity: 0.6; transition: filter 260ms var(--ui-lm-ease), opacity 260ms var(--ui-lm-ease); }
.ui-lm:not([data-grayscale]) .ui-lm__mark { color: var(--ui-lm-brand, var(--ui-lm-ink)); }
.ui-lm:not([data-grayscale]) .ui-lm__link { color: var(--ui-lm-ink); }
@media (hover: hover) {
  .ui-lm__link:hover,
  .ui-lm__link:focus-visible { color: var(--ui-lm-ink); }
  .ui-lm[data-grayscale] .ui-lm__link:hover .ui-lm__mark,
  .ui-lm[data-grayscale] .ui-lm__link:focus-visible .ui-lm__mark { color: var(--ui-lm-brand, var(--ui-lm-ink)); }
  .ui-lm[data-grayscale] .ui-lm__link:hover img { filter: none; opacity: 1; }
  /* Full colour: the others step back a little while one is hovered */
  .ui-lm:not([data-grayscale]) .ui-lm__set:has(.ui-lm__link:hover) .ui-lm__link:not(:hover) { opacity: var(--ui-lm-dim); }
  /* No colour flicker under the pointer while scrubbing */
  .ui-lm[data-grayscale] .ui-lm__row[data-dragging] .ui-lm__link { color: var(--ui-lm-muted); }
  .ui-lm[data-grayscale] .ui-lm__row[data-dragging] .ui-lm__mark { color: inherit; }
}

/* Reduced motion: a static, centred, wrapping row */
.ui-lm__wrap {
  flex-wrap: wrap;
  justify-content: center;
  row-gap: calc(var(--ui-lm-g) * 0.5);
  padding-inline: 8px;
}
.ui-lm__wrap .ui-lm__item { margin-inline: calc(var(--ui-lm-g) * 0.5); }

@media (hover: none) and (pointer: coarse) {
  /* Bigger touch targets for linked logos */
  a.ui-lm__link { min-height: 40px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-lm__link, .ui-lm__mark, .ui-lm__mark > img { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-lm {
  --ui-lm-muted: #7a7a82;
  --ui-lm-ink: #ededed;
  --ui-lm-label: var(--aui-muted, #8b8b92);
  --ui-lm-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function se(){return n.jsx("div",{className:"stage",style:{width:"100%"},children:n.jsx(ie,{logos:[{name:"北窗"},{name:"山南"},{name:"澄海"},{name:"青田"},{name:"白露"}]})})}export{se as default};
