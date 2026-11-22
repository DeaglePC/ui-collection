import{r as x,j as i}from"./client-CsvIHAk3.js";function L({name:e,src:a,size:t=32,shape:r,status:n,kind:o="person",seed:s,color:u,working:w,className:j,style:f,...p}){const[q,I]=x.useState(null),[S,m]=x.useState(null),d=o==="agent",z=N.includes(t)?t:32,A=r==="circle"||r==="square"?r:d?"square":"circle",v=(s??e??"").trim(),b=!!a&&q!==a,E=b&&S===a,c=e?.trim(),h=p["aria-label"]??(c?n&&g[n]?`${c}, ${g[n]}`:c:void 0);return i.jsxs(i.Fragment,{children:[i.jsx("style",{href:"ui-avatar",precedence:"default",children:$}),i.jsxs("span",{className:["ui-avt",j].filter(Boolean).join(" "),"data-size":z,"data-shape":A,"data-kind":d?"agent":"person","data-hue":d||!v?void 0:T(v),"data-ready":E?"":void 0,"data-working":d&&w?"":void 0,role:h?"img":void 0,"aria-label":h,"aria-hidden":h?void 0:!0,style:d&&u?{"--ui-avt-mark":u,...f}:f,...p,children:[i.jsxs("span",{className:"ui-avt__face",children:[d?i.jsx(W,{cells:F(v||"agent")}):i.jsx(M,{name:e??""}),b&&i.jsx("img",{className:"ui-avt__img",src:a,alt:"",loading:"lazy",decoding:"async",draggable:!1,onLoad:()=>m(a),onError:()=>I(a),ref:_=>{_?.complete&&_.naturalWidth>0&&m(a)}})]}),n&&g[n]&&i.jsx("span",{className:"ui-avt__status","data-status":n,"aria-hidden":"true"})]})]})}const N=[20,24,32,40],g={online:"online",away:"away",busy:"busy"},T=e=>{let a=7;for(const t of e)a=a*31+t.codePointAt(0)>>>0;return String(a%8)};let l;const y=e=>{if(l===void 0){const a=Intl.Segmenter;l=a?new a(void 0,{granularity:"grapheme"}):null}return l?Array.from(l.segment(e),a=>a.segment):Array.from(e)},k=/[\p{L}\p{N}]/u,C=new RegExp("\\p{Extended_Pictographic}|\\p{Regional_Indicator}","u"),R=/^(jr|sr|ii|iii|iv|vi|phd|md|esq)\.?$/i;function B(e){const a=e.trim().split(/\s+/).filter(Boolean);if(!a.length)return"";const t=y(a[0])[0];if(t&&C.test(t)&&!k.test(t))return t;const r=a.filter((o,s,u)=>!(s>0&&s===u.length-1&&R.test(o))).map(o=>y(o).find(s=>k.test(s))).filter(o=>!!o);return r.length?(r.length>1?r[0]+r[r.length-1]:r[0]).toLocaleUpperCase():t??""}function M({name:e}){const a=B(e);return i.jsx("span",{className:"ui-avt__initials",dir:"auto","aria-hidden":"true",children:a||i.jsxs("svg",{className:"ui-avt__anon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M20 21C19.713 17.269 16.729 14.315 12.995 14.066L12 14C11.645 14.01 11.313 14.023 11.001 14.038C7.3 14.219 4.284 17.306 4 21"}),i.jsx("circle",{cx:"12",cy:"7",r:"4"})]})})}const U=[0,120,240,120,240,360,240,360,480],F=e=>{let a=0;for(const t of e)a=a*31+t.charCodeAt(0)>>>0;for(let t=0;t<64;t++){const r=a>>t%26&63,n=[0,1,2].flatMap(o=>{const s=r>>o*2&1,u=r>>o*2+1&1;return[s,u,s]});if(n.filter(Boolean).length>=5)return n;a=a*1103515245+12345>>>0}return[1,0,1,0,1,0,1,0,1]};function W({cells:e}){return i.jsx("span",{className:"ui-avt__mark","aria-hidden":"true",children:e.map((a,t)=>i.jsx("i",{"data-on":a?"":void 0,style:{animationDelay:`${U[t]}ms`}},t))})}const $=`
/* Colors as variables – override them on .ui-avt or .ui-avt__group (see Theming in the docs) */
.ui-avt,
.ui-avt__group {
  --ui-avt-ink: var(--aui-ink, #171717);
  --ui-avt-text: #616161;
  --ui-avt-fill: var(--aui-subtle, #f0f0f0);
  --ui-avt-tile: var(--aui-surface, #ffffff);
  --ui-avt-edge: rgba(0, 0, 0, 0.1);
  --ui-avt-tile-low: #f7f7f8;
  /* The ring that cuts each avatar out of the one before – set it to the background the group sits on */
  --ui-avt-ring: var(--aui-surface, #ffffff);
  --ui-avt-mark: rgba(0, 96, 226, 0.78);
  --ui-avt-online: var(--aui-green, #5fc88a);
  --ui-avt-away: var(--aui-amber, #e8b000);
  --ui-avt-busy: var(--aui-red, #f04438);
  /* The soft colors behind initials: lightness and saturation of the tint and of the letters */
  --ui-avt-bg-l: 92%;
  --ui-avt-bg-s: 70%;
  --ui-avt-fg-l: 36%;
  --ui-avt-fg-s: 48%;

  --s: 32px;
  --fs: 12px;
  --dot: 9px;
  --sq: 4px;
  --gap: 2px;
}
.ui-avt[data-size="20"], .ui-avt__group[data-size="20"] { --s: 20px; --fs: 8.5px; --dot: 6px; --sq: 3px; --gap: 1px; }
.ui-avt[data-size="24"], .ui-avt__group[data-size="24"] { --s: 24px; --fs: 10px; --dot: 7px; --sq: 3px; --gap: 1.5px; }
.ui-avt[data-size="40"], .ui-avt__group[data-size="40"] { --s: 40px; --fs: 14px; --dot: 10px; --sq: 5px; --gap: 2.5px; }

.ui-avt {
  position: relative;
  display: inline-grid;
  flex: none;
  box-sizing: border-box;
  width: var(--s);
  height: var(--s);
  vertical-align: middle;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  -webkit-font-smoothing: antialiased;
  user-select: none;
}
.ui-avt__face {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--ui-avt-fill);
  color: var(--ui-avt-text);
}
/* Rounded squares keep the same curve at every size: 30% of the side */
.ui-avt[data-shape="square"] .ui-avt__face { border-radius: calc(var(--s) * 0.3); }

/* Initials sit on a soft color of their own, picked from the name */
.ui-avt[data-hue] .ui-avt__face {
  background: hsl(var(--h) var(--ui-avt-bg-s) var(--ui-avt-bg-l));
  color: hsl(var(--h) var(--ui-avt-fg-s) var(--ui-avt-fg-l));
}
.ui-avt[data-hue="0"] { --h: 214; }
.ui-avt[data-hue="1"] { --h: 152; }
.ui-avt[data-hue="2"] { --h: 40; }
.ui-avt[data-hue="3"] { --h: 22; }
.ui-avt[data-hue="4"] { --h: 330; }
.ui-avt[data-hue="5"] { --h: 268; }
.ui-avt[data-hue="6"] { --h: 174; }
.ui-avt[data-hue="7"] { --h: 196; }

.ui-avt__initials {
  grid-area: 1 / 1;
  font-size: var(--fs);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0;
  white-space: nowrap;
}
.ui-avt__anon {
  display: block;
  width: calc(var(--s) * 0.55);
  height: calc(var(--s) * 0.55);
}

/* The picture covers the initials once it has loaded – they show while it loads and when it fails */
.ui-avt__img {
  grid-area: 1 / 1;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 180ms ease;
}
.ui-avt[data-ready] .ui-avt__img { opacity: 1; }
.ui-avt[data-ready] .ui-avt__initials { visibility: hidden; }

/* A hairline on top of pictures and agent tiles, so white edges don't melt into a white page */
.ui-avt[data-ready] .ui-avt__face::after,
.ui-avt[data-kind="agent"] .ui-avt__face::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px var(--ui-avt-edge);
  pointer-events: none;
}

/* Agent: its own pixel mark on a white tile with a soft lift */
.ui-avt[data-kind="agent"] .ui-avt__face { background: linear-gradient(var(--ui-avt-tile), var(--ui-avt-tile-low)); }
.ui-avt__mark {
  grid-area: 1 / 1;
  display: grid;
  grid-template-columns: repeat(3, var(--sq));
  grid-auto-rows: var(--sq);
  gap: var(--gap);
}
.ui-avt__mark i {
  border-radius: calc(var(--sq) / 4);
  background: var(--ui-avt-mark);
  opacity: 0;
  transition: opacity 240ms ease;
}
.ui-avt__mark i[data-on] { opacity: 1; }
/* Working: every square twinkles, in a diagonal wave */
.ui-avt[data-working] .ui-avt__mark i { animation: ui-avt-pixel 1.2s ease-in-out infinite both; }
.ui-avt[data-working] .ui-avt__mark i:not([data-on]) { opacity: 0.16; }
@keyframes ui-avt-pixel {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}

/* Status: a dot on the corner, cut out of the avatar by a ring in the background color */
.ui-avt__status {
  position: absolute;
  inset-inline-end: 0;
  bottom: 0;
  width: var(--dot);
  height: var(--dot);
  border-radius: 50%;
  background: var(--ui-avt-online);
  box-shadow: 0 0 0 1.5px var(--ui-avt-ring);
}
.ui-avt[data-shape="square"] .ui-avt__status { inset-inline-end: -2px; bottom: -2px; }
.ui-avt__status[data-status="away"] { background: var(--ui-avt-away); }
.ui-avt__status[data-status="busy"] { background: var(--ui-avt-busy); }

/* Group: each one overlaps the one before by a quarter, a ring in the background color between them */
.ui-avt__group {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  isolation: isolate;
}
.ui-avt__group > .ui-avt .ui-avt__face { box-shadow: 0 0 0 2px var(--ui-avt-ring); }
.ui-avt__group > :is(.ui-avt, .ui-avt__more) + :is(.ui-avt, .ui-avt__more) { margin-inline-start: calc(var(--s) / -4); }
.ui-avt__more {
  display: inline-grid;
  place-items: center;
  box-sizing: border-box;
  min-width: var(--s);
  height: var(--s);
  padding: 0 4px;
  border-radius: 999px;
  /* The gray tint laid over the ring color, so the face behind it doesn't show through */
  background: linear-gradient(var(--ui-avt-fill), var(--ui-avt-fill)), var(--ui-avt-ring);
  box-shadow: 0 0 0 2px var(--ui-avt-ring);
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: var(--fs);
  font-weight: 600;
  line-height: 1;
  color: var(--ui-avt-text);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  -webkit-font-smoothing: antialiased;
}
.ui-avt__more[data-shape="square"] { border-radius: calc(var(--s) * 0.3); }

@media (prefers-reduced-motion: reduce) {
  .ui-avt__img { transition: none; }
  .ui-avt__mark i { transition: none; }
  .ui-avt[data-working] .ui-avt__mark i { animation: none; }
  .ui-avt[data-working] .ui-avt__mark i:not([data-on]) { opacity: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) :is(.ui-avt, .ui-avt__group) {
  --ui-avt-ink: var(--aui-ink, #ededed);
  --ui-avt-text: #a1a1a6;
  --ui-avt-fill: var(--aui-subtle, #26262a);
  --ui-avt-tile: var(--aui-surface, #222226);
  --ui-avt-tile-low: #1b1b1e;
  --ui-avt-edge: rgba(255, 255, 255, 0.1);
  --ui-avt-ring: var(--aui-surface, #19191b);
  --ui-avt-mark: rgba(77, 141, 255, 0.85);
  --ui-avt-online: var(--aui-green, #7dcf9f);
  --ui-avt-away: var(--aui-amber, #e6c24d);
  --ui-avt-busy: var(--aui-red, #ff6b5f);
  --ui-avt-bg-l: 24%;
  --ui-avt-bg-s: 28%;
  --ui-avt-fg-l: 80%;
  --ui-avt-fg-s: 60%;
}
`;function V(){return i.jsx("div",{className:"stage",children:i.jsx(L,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{V as default};
