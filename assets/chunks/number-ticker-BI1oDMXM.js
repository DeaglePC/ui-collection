import{r as s,j as a}from"./client-CsvIHAk3.js";function O(t){const c=Array.from(t),l=[];let p=0,w=0;for(let m=c.length-1;m>=0;m--){const f=c[m];f>="0"&&f<="9"?l.unshift({key:`d${p++}`,digit:f.charCodeAt(0)-48}):l.unshift({key:`s${w++}`,char:f})}return l}const N=t=>(t%10+10)%10,$=t=>1-Math.pow(1-t,4),I=(t,c)=>{t.style.transform=`translateY(${-N(c)/11*100}%)`};function q({value:t,format:c,locale:l,duration:p=900,delay:w=0,className:m}){const f=JSON.stringify(c??{}),x=s.useMemo(()=>Number.isFinite(t)?new Intl.NumberFormat(l,c).format(t):"–",[t,l,f]),k=s.useMemo(()=>O(x),[x]),v=s.useRef(null),u=s.useRef(new Map),g=s.useRef(new Map),b=s.useRef(0),R=s.useRef(!0),M=s.useRef(!1),y=s.useRef(new Set),S=s.useRef(new Set),[F,A]=s.useState(!1),j=new Set(k.filter(e=>"digit"in e).map(e=>e.key));for(const e of j)M.current&&!S.current.has(e)&&y.current.add(e);for(const e of y.current)j.has(e)||y.current.delete(e);return S.current=j,s.useEffect(()=>{M.current=!0;const e=v.current;if(!e||typeof IntersectionObserver>"u"){A(!0);return}let i=0;const o=new IntersectionObserver(([h])=>{h.isIntersecting&&(o.disconnect(),i=window.setTimeout(()=>A(!0),w))},{threshold:.3});return o.observe(e),()=>{o.disconnect(),clearTimeout(i)}},[]),s.useEffect(()=>{if(!F)return;t!==b.current&&(R.current=t>b.current),b.current=t;const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new Set;for(const r of k){if(!("digit"in r))continue;i.add(r.key);const n=u.current.get(r.key)??{pos:0,from:0,to:0},d=R.current?N(r.digit-n.pos):-N(n.pos-r.digit);n.from=n.pos,n.to=n.pos+d,e&&(n.pos=n.from=n.to),u.current.set(r.key,n)}for(const r of u.current.keys())i.has(r)||u.current.delete(r);const o=()=>{for(const[r,n]of u.current){const d=g.current.get(r);d&&I(d,n.pos)}};if(e)return o();let h=0;const T=performance.now(),E=r=>{const n=Math.min(1,(r-T)/p),d=$(n);for(const _ of u.current.values())_.pos=_.from+(_.to-_.from)*d;o(),n<1&&(h=requestAnimationFrame(E))};return h=requestAnimationFrame(E),()=>cancelAnimationFrame(h)},[k,F,t,p]),a.jsxs(a.Fragment,{children:[a.jsx("style",{href:"ui-number-ticker",precedence:"default",children:Y}),a.jsxs("span",{ref:v,className:["ui-nt",m].filter(Boolean).join(" "),"aria-live":"polite",children:[a.jsx("span",{className:"ui-nt__sr",children:x}),a.jsx("span",{className:"ui-nt__track","aria-hidden":"true",children:k.map(e=>"digit"in e?a.jsx("span",{className:"ui-nt__col","data-enter":y.current.has(e.key)||void 0,children:a.jsx("span",{className:"ui-nt__stack",ref:i=>{if(i)return g.current.set(e.key,i),I(i,u.current.get(e.key)?.pos??0),()=>{g.current.get(e.key)===i&&g.current.delete(e.key)}},children:[0,1,2,3,4,5,6,7,8,9,0].map((i,o)=>a.jsx("span",{className:"ui-nt__cell",children:i},o))})},e.key):a.jsx("span",{className:"ui-nt__static",children:e.char},e.key))})]})]})}const Y=`
.ui-nt {
  --ui-nt-lh: 1.15em;
  --ui-nt-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: inline-flex;
  line-height: var(--ui-nt-lh);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ui-nt__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
.ui-nt__track {
  display: inline-flex;
  align-items: flex-start;
  height: var(--ui-nt-lh);
  line-height: var(--ui-nt-lh);
}
.ui-nt__col {
  display: inline-block;
  height: var(--ui-nt-lh);
  overflow: hidden;
  /* Soft top and bottom edges while digits pass through */
  -webkit-mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
  mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
}
.ui-nt__col[data-enter] { animation: ui-nt-in 450ms var(--ui-nt-ease) both; }
.ui-nt__stack {
  display: flex;
  flex-direction: column;
  will-change: transform;
}
.ui-nt__cell,
.ui-nt__static {
  display: block;
  height: var(--ui-nt-lh);
  text-align: center;
}
.ui-nt__static { white-space: pre; }

@keyframes ui-nt-in {
  from { opacity: 0; transform: translateY(-35%); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-nt__col[data-enter] { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html>.
   The ticker inherits its color, so nothing needs to change here. */
:where(.dark, [data-theme="dark"]) .ui-nt {
  --ui-nt-lh: 1.15em;
}
`;function B(){return a.jsx("div",{className:"stage",children:a.jsx(q,{})})}export{B as default};
