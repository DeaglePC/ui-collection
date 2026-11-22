import{r as p,j as r}from"./client-CsvIHAk3.js";const Q=[1,-.84,1.12],Z=[0,.42,.18],ee=(s,c)=>c>0?(s%c+c)%c:0,A=(s,c,f)=>Math.min(f,Math.max(c,s)),te=s=>(typeof Intl.Segmenter=="function"?new Intl.Segmenter().segment(s)[Symbol.iterator]().next().value?.segment:Array.from(s)[0])??"",ae=/^(jr|sr|i{1,3}|iv|v|vi|phd|md|esq)\.?,?$/i,ie=s=>{const c=s.split(/\s+/).filter(Boolean),f=c.filter(g=>new RegExp("^\\p{L}","u").test(g)),_=f.length?f:c,b=_.length>1?_.filter((g,k)=>k===0||!ae.test(g)):_;return(b.length>1?[b[0],b[b.length-1]]:b).map(g=>te(g).toUpperCase()).join("")||"?"},P=s=>{const c=s.currentTarget,f=c.scrollWidth>c.clientWidth+1||c.scrollHeight>c.clientHeight+1;c.title=f?c.textContent??"":""};function re({src:s,name:c}){const[f,_]=p.useState(null);return s&&f!==s?r.jsx("img",{className:"ui-tw__avatar",src:s,alt:"",width:36,height:36,loading:"lazy",decoding:"async",draggable:!1,onError:()=>_(s)}):r.jsx("span",{className:"ui-tw__avatar ui-tw__avatar--initials","aria-hidden":"true",children:ie(c)})}const ne=(s,c)=>Math.min(c,s>=740?3:s>=480?2:1);function se({items:s,columns:c=3,speed:f=28,pauseOnHover:_=!0,label:b="What customers say",className:S}){const g=p.useRef(null),k=p.useRef([]),z=p.useRef([]),N=p.useRef([]),v=p.useRef([]),R=p.useRef([]),T=p.useRef([]),M=p.useRef([]),[Y,W]=p.useState(c),x=Math.max(1,Math.min(Y,s.length)),[$,O]=p.useState([]),[y,U]=p.useState(!1),q=Array.from({length:x},(a,t)=>s.filter((e,i)=>i%x===t)),C=p.useRef({speed:f,pauseOnHover:_,count:x});C.current={speed:f,pauseOnHover:_,count:x},p.useEffect(()=>{const a=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>U(a.matches);return t(),a.addEventListener("change",t),()=>a.removeEventListener("change",t)},[]),p.useLayoutEffect(()=>{const a=g.current;if(!a)return;const t=()=>W(ne(a.clientWidth,c));t();const e=new ResizeObserver(t);return e.observe(a),()=>e.disconnect()},[c]),p.useEffect(()=>{if(y)return;const a=()=>{const e=q.map((i,n)=>{const o=N.current[n],l=k.current[n];if(!o||!l)return 2;const d=l.getBoundingClientRect().height/(l.offsetHeight||1)||1,h=o.getBoundingClientRect().height/d,w=v.current[n]??={y:h*(Z[n]??0),v:0,h,drag:null,seek:0};return w.h>0&&h>0&&w.h!==h&&(w.y=w.y/w.h*h),w.h=h,h>0?Math.min(12,Math.ceil(l.clientHeight/h)+1):2});v.current.length=q.length,O(i=>i.length===e.length&&i.every((n,o)=>n===e[o])?i:e)};a();const t=new ResizeObserver(a);for(const e of[...N.current.slice(0,x),...k.current.slice(0,x)])e&&t.observe(e);return()=>t.disconnect()},[y,x,s]),p.useEffect(()=>{const a=g.current;if(y||!a)return;let t=0,e=0,i=!1;const n=l=>{const d=e?Math.min(.05,(l-e)/1e3):0;e=l;const{speed:h,pauseOnHover:w,count:j}=C.current;for(let m=0;m<j;m++){const u=v.current[m],F=z.current[m];if(!u||!F||u.h<=0)continue;const G=j===1?1:Q[m%3],B=T.current[m]||M.current[m]||w&&R.current[m];if(!u.drag){const H=B?0:h*G,J=Math.abs(u.v-H)>Math.max(120,h*2)?.55:B?.32:.7;if(u.v+=(H-u.v)*(1-Math.exp(-d/J)),u.y+=u.v*d,u.seek){const E=u.seek*(1-Math.exp(-d/.12));u.y+=E,u.seek=Math.abs(u.seek-E)<.5?0:u.seek-E}}u.y=M.current[m]?A(u.y,-u.h,u.h*2):ee(u.y,u.h),F.style.transform=`translate3d(0, ${-(u.h+u.y)}px, 0)`}t=i?requestAnimationFrame(n):0},o=new IntersectionObserver(([l])=>{i=l.isIntersecting,i&&!t&&(e=0,t=requestAnimationFrame(n))});return o.observe(a),()=>{o.disconnect(),cancelAnimationFrame(t)}},[y]);const D=a=>t=>{const e=v.current[a];if(e){if(t.pointerType==="touch"){T.current[a]=!0;return}t.button===0&&(e.drag={id:t.pointerId,lastY:t.clientY,lastT:t.timeStamp,moved:0,captured:!1},e.v=0)}},K=a=>t=>{const e=v.current[a],i=e?.drag;if(!e||!i||i.id!==t.pointerId)return;const n=t.currentTarget,o=n.getBoundingClientRect().height/(n.offsetHeight||1)||1,l=(t.clientY-i.lastY)/o,d=Math.max(1,t.timeStamp-i.lastT)/1e3;i.moved+=Math.abs(l),!i.captured&&i.moved>4&&(i.captured=!0,n.setPointerCapture(t.pointerId),n.setAttribute("data-dragging","")),e.y-=l,e.v=e.v*.6+-l/d*.4,i.lastY=t.clientY,i.lastT=t.timeStamp},L=a=>t=>{T.current[a]=!1;const e=v.current[a],i=e?.drag;if(!(!e||!i||i.id!==t.pointerId)&&(t.timeStamp-i.lastT>80&&(e.v=0),e.v=A(e.v,-2400,2400),e.drag=null,t.currentTarget.removeAttribute("data-dragging"),i.captured)){const n=t.currentTarget,o=l=>{l.preventDefault(),l.stopPropagation()};n.addEventListener("click",o,{capture:!0,once:!0}),setTimeout(()=>n.removeEventListener("click",o,{capture:!0}),0)}},V=a=>t=>{const e=v.current[a],i=k.current[a];if(y||!e||!i||e.h<=0||!t.currentTarget.matches(":focus-visible"))return;const o=t.currentTarget.parentElement.offsetTop,l=t.currentTarget.offsetHeight,d=i.clientHeight,h=Math.min(56,d*.12);e.y=[e.y-e.h,e.y,e.y+e.h].reduce((j,m)=>Math.abs(o-m-d/2)<Math.abs(o-j-d/2)?m:j);const w=o-e.y;l>d-h*2||w<h?e.seek=w-h:w+l>d-h?e.seek=w+l-(d-h):e.seek=0},I=(a,t,e,i)=>{const n=[a.role?.trim(),a.company?.trim()].filter(Boolean).join(" · "),o=a.rating?A(Math.round(a.rating),1,5):0;return r.jsx("li",{className:"ui-tw__item",children:r.jsxs("figure",{className:"ui-tw__card",tabIndex:e?0:void 0,onFocus:e?V(t):void 0,children:[o&&Number.isFinite(o)?r.jsx("div",{className:"ui-tw__stars",role:"img","aria-label":`Rated ${o} out of 5`,children:Array.from({length:5},(l,d)=>r.jsx("svg",{viewBox:"0 0 16 16","aria-hidden":"true","data-on":d<o||void 0,children:r.jsx("path",{d:"M8 1.6l1.9 3.95 4.35.6-3.17 3.03.78 4.32L8 11.43 4.14 13.5l.78-4.32L1.75 6.15l4.35-.6L8 1.6z"})},d))}):null,a.quote.trim()&&r.jsx("blockquote",{className:"ui-tw__quote",children:r.jsx("p",{dir:"auto",onPointerEnter:P,children:a.quote.trim()})}),r.jsxs("figcaption",{className:"ui-tw__who",children:[r.jsx(re,{src:a.avatar,name:a.name}),r.jsxs("span",{className:"ui-tw__id",children:[r.jsxs("span",{className:"ui-tw__name",children:[r.jsx("span",{className:"ui-tw__name-text",dir:"auto",onPointerEnter:P,children:a.name.trim()}),a.verified?r.jsxs("svg",{className:"ui-tw__verified",viewBox:"0 0 16 16",role:"img","aria-label":"Verified customer",children:[r.jsx("circle",{cx:"8",cy:"8",r:"7"}),r.jsx("path",{d:"M5.2 8.1l1.9 1.9 3.7-3.8",fill:"none",stroke:"var(--ui-tw-card)",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]}):null]}),n?r.jsx("span",{className:"ui-tw__meta",dir:"auto",onPointerEnter:P,children:n}):null]})]})]})},i)},X=["ui-tw",S].filter(Boolean).join(" ");return r.jsxs(r.Fragment,{children:[r.jsx("style",{href:"ui-testimonial-wall",precedence:"default",children:oe}),r.jsxs("div",{ref:g,className:X,role:"region","aria-label":b,"data-cols":x,"data-static":y||void 0,style:{"--ui-tw-cols":x},"data-empty":s.length===0||void 0,children:[s.length===0&&r.jsx("p",{className:"ui-tw__empty",children:"No quotes yet"}),s.length>0&&q.map((a,t)=>y?r.jsx("div",{className:"ui-tw__col",children:r.jsx("ul",{className:"ui-tw__set",children:a.map((e,i)=>I(e,t,!0,String(i)))})},t):r.jsx("div",{ref:e=>{k.current[t]=e},className:"ui-tw__col",onPointerEnter:e=>{e.pointerType!=="touch"&&(R.current[t]=!0)},onPointerLeave:()=>R.current[t]=!1,onPointerDown:D(t),onPointerMove:K(t),onPointerUp:L(t),onPointerCancel:L(t),onFocus:e=>M.current[t]=e.target.matches(":focus-visible"),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(M.current[t]=!1)},children:r.jsx("div",{ref:e=>{z.current[t]=e},className:"ui-tw__track",style:{transform:`translate3d(0, ${-((v.current[t]?.h??0)+(v.current[t]?.y??0))}px, 0)`},children:Array.from({length:1+Math.max(2,$[t]??2)},(e,i)=>{const n=i===1;return r.jsx("ul",{ref:n?o=>{N.current[t]=o}:void 0,className:"ui-tw__set","aria-hidden":!n||void 0,inert:!n||void 0,children:a.map((o,l)=>I(o,t,n,`${i}-${l}`))},n?"real":i)})})},t))]})]})}const oe=`
.ui-tw {
  --ui-tw-card: var(--aui-surface, #ffffff);
  --ui-tw-line: var(--aui-border, #ececec);
  --ui-tw-ink: var(--aui-ink, #171717);
  --ui-tw-text: var(--aui-ink, #404040);
  --ui-tw-muted: var(--aui-muted, #8f8f8f);
  --ui-tw-faint: var(--aui-placeholder, #b5b5b5);
  --ui-tw-star: #a3a3a8;
  --ui-tw-star-off: #e2e2e5;
  --ui-tw-initials: #f0f0f1;
  --ui-tw-shadow: var(--aui-shadow-card, 0 0 0 1px var(--ui-tw-line), 0 1px 2px rgba(0, 0, 0, 0.04));
  --ui-tw-lift: 0 0 0 1px var(--ui-tw-line), 0 2px 4px rgba(0, 0, 0, 0.03), 0 12px 28px -10px rgba(0, 0, 0, 0.14);
  --ui-tw-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tw-gap: 16px;
  --ui-tw-fade: 96px;
  --ui-tw-dim: 0.62;
  --ui-tw-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  container-type: inline-size;
  display: grid;
  grid-template-columns: repeat(var(--ui-tw-cols, 3), minmax(0, 1fr));
  /* One row exactly as tall as the wall, so a column's height never follows its (repeated) content */
  grid-template-rows: minmax(0, 1fr);
  gap: var(--ui-tw-gap);
  width: 100%;
  min-width: 0;
  height: var(--ui-tw-height, 600px);
  /* Room at the sides for the lifted card's shadow; the wall clips everything else */
  padding-inline: 12px;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, transparent, #000 var(--ui-tw-fade), #000 calc(100% - var(--ui-tw-fade)), transparent);
  mask-image: linear-gradient(180deg, transparent, #000 var(--ui-tw-fade), #000 calc(100% - var(--ui-tw-fade)), transparent);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.ui-tw[data-empty] { display: grid; place-items: center; height: auto; min-height: 160px; -webkit-mask-image: none; mask-image: none; }
.ui-tw__empty { margin: 0; font-size: 14px; color: var(--ui-tw-muted); }

.ui-tw__col {
  position: relative;
  min-width: 0;
  min-height: 0;
  height: 100%;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.ui-tw__col[data-dragging] { cursor: grabbing; }
.ui-tw__track { will-change: transform; }
.ui-tw__set {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* Every card carries its gap below, so one set's height is exactly the wrap distance */
.ui-tw__item { margin-bottom: var(--ui-tw-gap); }

.ui-tw__card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 18px 20px 18px;
  border-radius: var(--aui-radius-lg, 16px);
  background: var(--ui-tw-card);
  box-shadow: var(--ui-tw-shadow);
  color: var(--ui-tw-text);
  transition: transform 320ms var(--ui-tw-ease), box-shadow 320ms var(--ui-tw-ease), opacity 320ms var(--ui-tw-ease);
}
.ui-tw__card:focus { outline: none; }
.ui-tw__card:focus-visible { outline: 2px solid var(--ui-tw-focus); outline-offset: 2px; }

.ui-tw__stars { display: flex; gap: 2px; margin-bottom: -4px; }
.ui-tw__stars svg { width: 13px; height: 13px; fill: var(--ui-tw-star-off); }
.ui-tw__stars svg[data-on] { fill: var(--ui-tw-star); }

.ui-tw__quote { margin: 0; }
.ui-tw__quote p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: -0.006em;
  text-wrap: pretty;
  overflow-wrap: break-word;
  /* Line breaks in a quote are kept; very long quotes stop at ten lines so a card never outgrows the wall */
  white-space: pre-line;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  line-clamp: 10;
  overflow: hidden;
}

.ui-tw__who { display: flex; align-items: center; gap: 10px; min-width: 0; }
.ui-tw__avatar {
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--ui-tw-initials);
  /* A hairline ring keeps light photos from melting into the card */
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  pointer-events: none;
}
.ui-tw__avatar--initials {
  display: grid;
  place-items: center;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--ui-tw-muted);
}
.ui-tw__id { display: grid; gap: 1px; min-width: 0; }
.ui-tw__name {
  display: flex;
  /* Top-aligned, so the check stays on the first line when a long name wraps */
  align-items: flex-start;
  gap: 5px;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 18px;
  color: var(--ui-tw-ink);
}
/* The name identifies the person: it wraps to a second line (an email-like name breaks anywhere) and only then is cut */
.ui-tw__name-text {
  display: -webkit-box;
  min-width: 0;
  overflow: hidden;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
.ui-tw__verified { flex: none; margin-top: 2px; width: 14px; height: 14px; fill: var(--ui-tw-faint); }
/* Role and company wrap once at most, then end in an ellipsis */
.ui-tw__meta {
  min-width: 0;
  overflow: hidden;
  overflow-wrap: anywhere;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  font-size: 12.5px;
  line-height: 17px;
  color: var(--ui-tw-muted);
}

/* Hover: the card under the pointer lifts a little, the rest of the wall steps back */
@media (hover: hover) {
  .ui-tw__col:not([data-dragging]) .ui-tw__card:hover { transform: translateY(-3px); box-shadow: var(--ui-tw-lift); }
  .ui-tw:has(.ui-tw__col:not([data-dragging]) .ui-tw__card:hover) .ui-tw__card:not(:hover) { opacity: var(--ui-tw-dim); }
}
/* Keyboard focus gets the same lift */
.ui-tw__card:focus-visible { transform: translateY(-3px); box-shadow: var(--ui-tw-lift); }

/* Narrow walls (one column on phones): roomier, more readable quotes */
@container (max-width: 479px) {
  .ui-tw__card { padding: 18px 18px 18px; }
  .ui-tw__quote p { font-size: 15px; line-height: 1.58; }
}
@container (max-width: 739px) {
  .ui-tw__col { --ui-tw-gap: 14px; }
}

/* Reduced motion: a static masonry that shows every quote – no fixed height, no fade */
.ui-tw[data-static] {
  height: auto;
  grid-template-rows: auto;
  overflow: visible;
  -webkit-mask-image: none;
  mask-image: none;
}
.ui-tw[data-static] .ui-tw__col { height: auto; cursor: auto; user-select: auto; -webkit-user-select: auto; }

@media (prefers-reduced-motion: reduce) {
  .ui-tw__card { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tw {
  --ui-tw-card: var(--aui-surface, #19191b);
  --ui-tw-line: var(--aui-border, #2a2a2e);
  --ui-tw-ink: var(--aui-ink, #ededed);
  --ui-tw-text: var(--aui-ink, #c8c8cc);
  --ui-tw-muted: var(--aui-muted, #8b8b92);
  --ui-tw-faint: var(--aui-placeholder, #6b6b72);
  --ui-tw-star: #7a7a82;
  --ui-tw-star-off: #2f2f34;
  --ui-tw-initials: #232327;
  --ui-tw-shadow: var(--aui-shadow-card, 0 0 0 1px var(--ui-tw-line));
  --ui-tw-lift: 0 0 0 1px #34343a, 0 12px 28px -10px rgba(0, 0, 0, 0.6);
  --ui-tw-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
:where(.dark, [data-theme="dark"]) .ui-tw__avatar { box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06); }
`;function ue(){return r.jsx("div",{className:"stage",children:r.jsx(se,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{ue as default};
