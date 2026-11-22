import{r as u,j as e}from"./client-CsvIHAk3.js";const v=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter(void 0,{granularity:"grapheme"}):null,_=i=>v?Array.from(v.segment(i),a=>a.segment):Array.from(i);function x({text:i,by:a="word",stagger:m=40,delay:p=0,duration:f=700,as:h="p",once:n=!0,className:b}){const d=u.useRef(null),[w,s]=u.useState(!1);u.useEffect(()=>{const t=d.current;if(!t||typeof IntersectionObserver>"u")return s(!0);const r=new IntersectionObserver(o=>{for(const l of o)l.isIntersecting?(s(!0),n&&r.disconnect()):n||s(!1)},{threshold:0});return r.observe(t),()=>r.disconnect()},[n]);let c=0;const y=i.split(/(\s+)/).map((t,r)=>t===""?null:/^\s+$/.test(t)?t:a==="word"?e.jsx("span",{className:"ui-trv__p",style:{"--ui-trv-i":c++},children:t},r):e.jsx("span",{className:"ui-trv__w",children:_(t).map((o,l)=>e.jsx("span",{className:"ui-trv__p",style:{"--ui-trv-i":c++},children:o},l))},r));return e.jsxs(h,{ref:d,className:["ui-trv",b].filter(Boolean).join(" "),"data-shown":w?"":void 0,style:{"--ui-trv-stagger":`${m}ms`,"--ui-trv-delay":`${p}ms`,"--ui-trv-duration":`${f}ms`},children:[e.jsx("style",{href:"ui-text-reveal",precedence:"default",children:g}),e.jsx("span",{className:"ui-trv__sr",children:i}),e.jsx("span",{"aria-hidden":"true",children:y})]})}const g=`
.ui-trv {
  --ui-trv-blur: 8px;
  --ui-trv-rise: 0.35em;
  --ui-trv-ease: cubic-bezier(0.2, 0.7, 0.2, 1);
}
.ui-trv__sr {
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
.ui-trv__w {
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
}
/* A word longer than the line breaks inside instead of running past it */
.ui-trv__p, .ui-trv__w { overflow-wrap: anywhere; }
.ui-trv__w:has(> .ui-trv__p) { white-space: normal; }
.ui-trv__p {
  display: inline-block;
  opacity: 0;
  filter: blur(var(--ui-trv-blur));
  transform: translateY(var(--ui-trv-rise));
  will-change: opacity, filter, transform;
}
.ui-trv[data-shown] .ui-trv__p {
  animation: ui-trv-in var(--ui-trv-duration) var(--ui-trv-ease) both;
  animation-delay: calc(var(--ui-trv-delay) + var(--ui-trv-i) * var(--ui-trv-stagger));
}
@keyframes ui-trv-in {
  from {
    opacity: 0;
    filter: blur(var(--ui-trv-blur));
    transform: translateY(var(--ui-trv-rise));
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: none;
  }
}

/* Reduced motion: the text is simply there */
@media (prefers-reduced-motion: reduce) {
  .ui-trv .ui-trv__p,
  .ui-trv[data-shown] .ui-trv__p {
    opacity: 1;
    filter: none;
    transform: none;
    animation: none;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html>.
   The text takes its color from the parent, so only the blur softens a touch on dark backgrounds */
:where(.dark, [data-theme="dark"]) .ui-trv {
  --ui-trv-blur: 6px;
}
`;function k(){return e.jsx("div",{className:"stage",children:e.jsx(x,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{k as default};
