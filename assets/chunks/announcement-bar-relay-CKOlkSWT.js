import{r as s,j as e}from"./client-CsvIHAk3.js";const h=240,F=60,D=300,Y=200,o="cubic-bezier(0.4, 0, 0.2, 1)",K=400;function R({item:t,linkTabIndex:c}){return e.jsxs("span",{className:"block text-sm leading-6 text-foreground",children:[t.message,t.action&&e.jsxs(e.Fragment,{children:[" ",e.jsx("a",{href:t.action.href,tabIndex:c,className:"rounded-sm text-ns-accent underline decoration-ns-accent/40 underline-offset-[3px] outline-none transition-colors hover:decoration-ns-accent focus-visible:ring-2 focus-visible:ring-ns-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",children:t.action.label})]})]})}function ee({items:t,storageKeyPrefix:c="ns-announcement-bar-relay:",resetOnMount:W=!1,onExhausted:S,className:X=""}){const[z,p]=s.useState([]),[i,k]=s.useState(null),[G,E]=s.useState(!1),[A,M]=s.useState(!1),[I,g]=s.useState(null),[q,T]=s.useState(!1),[O,H]=s.useState(!1),x=s.useRef(null),L=s.useRef(null),B=s.useRef(null),d=s.useRef(!1),b=s.useRef(null),f=s.useRef(null),v=s.useRef(void 0),j=s.useRef(0),w=s.useRef(S);w.current=S;const _=s.useId();s.useEffect(()=>{if(typeof window>"u")return;let n=null;try{n=window.localStorage}catch{return}if(!n)return;if(W){for(const l of t)try{n.removeItem(`${c}${l.id}`)}catch{}return}const a=[];for(const l of t)try{n.getItem(`${c}${l.id}`)==="1"&&a.push(l.id)}catch{}a.length&&p(a)},[]),s.useEffect(()=>()=>{window.clearTimeout(v.current),cancelAnimationFrame(j.current)},[]);const u=t.filter(n=>!z.includes(n.id)),r=u[0]??null,m=u[1]??null,N=Math.min(t.length,t.length-u.length+1),P=s.useCallback(()=>{if(d.current||!r)return;const n=x.current,a=L.current;if(!n||!a)return;d.current=!0;try{window.localStorage.setItem(`${c}${r.id}`,"1")}catch{}const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=m==null;if(l){p($=>[...$,r.id]),y&&(H(!0),w.current?.()),d.current=!1;return}const U=n.getBoundingClientRect().height,V=n.offsetHeight-a.offsetHeight,Z=y?0:(B.current?.offsetHeight??a.offsetHeight)+V;b.current={h1:Z,last:y},g(U),T(!0),k(r),E(!0),p($=>[...$,r.id])},[r,m,c]);s.useLayoutEffect(()=>{const n=b.current;if(!n||!i)return;b.current=null,j.current=requestAnimationFrame(()=>{g(n.h1),E(!1),M(!0)});const a=()=>{f.current&&(f.current=null,window.clearTimeout(v.current),T(!1),g(null),k(null),M(!1),d.current=!1,n.last&&(H(!0),w.current?.()))};return f.current=a,v.current=window.setTimeout(a,D+K),()=>cancelAnimationFrame(j.current)},[i]);const J=n=>{n.propertyName!=="height"||n.target!==x.current||f.current?.()};if(O||!r&&!i)return null;const C=r??i;if(!C)return null;const Q=(r??i)?.tone==="accent";return e.jsxs("div",{ref:x,role:"region","aria-labelledby":_,"data-announcement-bar":"",onTransitionEnd:J,style:{height:I==null?void 0:`${I}px`,transition:q?`height ${D}ms ${o}`:void 0},className:`ns-abr relative w-full overflow-hidden border-b border-border bg-surface ${X}`,children:[e.jsx("span",{id:_,className:"sr-only",children:"Announcements"}),e.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-y-0 left-0 w-[2px]",style:{background:Q?"var(--ns-accent)":"var(--border)"}}),e.jsxs("div",{ref:L,className:"flex items-center gap-4 px-4 py-2.5 pl-5 sm:px-6 sm:pl-7",children:[e.jsxs("div",{className:"relative min-w-0 flex-1","aria-live":"polite",children:[i&&e.jsx("div",{"aria-hidden":"true",className:"ns-abr-msg absolute inset-x-0 top-0","data-leave":A?"":void 0,children:e.jsx(R,{item:i,linkTabIndex:-1})}),r&&e.jsx("div",{className:"ns-abr-msg","data-enter":G?"":void 0,children:e.jsx(R,{item:r})},r.id),e.jsxs("span",{className:"sr-only",children:["Announcement ",N," of ",t.length]})]}),e.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[e.jsxs("div",{className:"flex items-center","aria-hidden":"true",children:[e.jsxs("span",{className:"flex items-center",children:[i&&e.jsx("span",{className:"ns-abr-pip ns-abr-pip-on","data-collapse":A?"":void 0}),u.map((n,a)=>e.jsx("span",{className:`ns-abr-pip ${a===0?"ns-abr-pip-on":""}`},n.id))]}),e.jsxs("span",{className:"ml-1 font-mono text-[11px] tabular-nums text-ns-muted",children:[N,"/",t.length]})]}),e.jsx("button",{type:"button","data-announcement-dismiss":"",onClick:P,"aria-label":`Dismiss: ${C.message}`,className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-sm text-ns-muted outline-none transition-colors hover:bg-foreground/[0.07] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ns-accent focus-visible:ring-inset",children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.4",className:"h-3.5 w-3.5","aria-hidden":"true",children:e.jsx("path",{d:"M4 4l8 8M12 4l-8 8",strokeLinecap:"round"})})})]})]}),e.jsxs("div",{ref:B,"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 top-0 flex items-center gap-4 px-4 py-2.5 pl-5 sm:px-6 sm:pl-7",style:{visibility:"hidden"},children:[e.jsx("div",{className:"min-w-0 flex-1",children:m&&e.jsx(R,{item:m,linkTabIndex:-1})}),e.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"flex items-center",children:u.slice(1).map(n=>e.jsx("span",{className:"ns-abr-pip"},n.id))}),e.jsxs("span",{className:"ml-1 font-mono text-[11px] tabular-nums text-ns-muted",children:[Math.min(t.length,N+1),"/",t.length]})]}),e.jsx("span",{className:"h-7 w-7"})]})]}),e.jsx("style",{children:`
        .ns-abr-msg {
          transform: translateY(0) skewX(0deg);
          opacity: 1;
          transition: transform ${h}ms ${o} ${F}ms, opacity ${h}ms ${o} ${F}ms;
          will-change: transform;
        }
        .ns-abr-msg[data-enter] {
          transform: translateY(100%) skewX(3deg);
          opacity: 0;
          transition: none;
        }
        .ns-abr-msg[data-leave] {
          transform: translateY(-100%) skewX(-3deg);
          opacity: 0;
          transition: transform ${h}ms ${o}, opacity ${h}ms ${o};
        }
        .ns-abr-pip {
          box-sizing: border-box;
          display: inline-block;
          width: 6px;
          height: 6px;
          margin-right: 6px;
          border-radius: 9999px;
          border: 1px solid var(--border);
          transition: width ${Y}ms ${o}, margin-right ${Y}ms ${o};
        }
        .ns-abr-pip-on {
          background: var(--foreground);
          border-color: var(--foreground);
        }
        .ns-abr-pip[data-collapse] {
          width: 0;
          margin-right: 0;
          border-width: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .ns-abr-msg,
          .ns-abr-msg[data-leave],
          .ns-abr-pip {
            transition: none;
          }
        }
      `})]})}function se(){return e.jsx("div",{className:"ns-stage",children:e.jsx(ee,{items:[{id:"a",message:"示例"},{id:"b",message:"第二项"}],onExhausted:()=>{}})})}export{se as default};
