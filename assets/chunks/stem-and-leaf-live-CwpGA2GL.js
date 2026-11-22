import{r as l,j as r}from"./client-CsvIHAk3.js";const H=440,Y=320,K="cubic-bezier(0.34, 1.56, 0.64, 1)",P=360,W=900;function J(){const[i,s]=l.useState(!1);return l.useEffect(()=>{const u=window.matchMedia("(prefers-reduced-motion: reduce)");s(u.matches);const f=()=>s(u.matches);return u.addEventListener("change",f),()=>u.removeEventListener("change",f)},[]),i}function x(i){return Number.isInteger(i)?String(i):i.toFixed(1)}function Q(i){if(i.length===0)return[];const s=i.map(d=>{const v=Math.round(d.value);return{sid:String(d.id),id:d.id,value:v,raw:d.value,digit:(v%10+10)%10,meta:d.meta}}),u=s.map(d=>Math.floor(d.value/10)),f=Math.min(...u),c=Math.max(...u),b=[];for(let d=f;d<=c;d++){const v=s.filter(w=>Math.floor(w.value/10)===d).sort((w,M)=>w.digit-M.digit);b.push({stem:d,lo:d*10,hi:d*10+9,leaves:v})}return b}function O(i,s,u){let f=s+u;for(;f>=0&&f<i.length&&i[f].leaves.length===0;)f+=u;return f<0||f>=i.length||i[f].leaves.length===0?s:f}function X(i){const s=i.length;if(s===0)return 0;const u=Math.floor(s/2);return s%2?i[u]:(i[u-1]+i[u])/2}function Z({records:i,unit:s="",label:u="Distribution",className:f=""}){const c=l.useMemo(()=>Q(i),[i]),b=J(),d=l.useRef(new Map),v=l.useRef(new Map),w=l.useRef(new Map),M=l.useRef(new Set),C=l.useRef(null),E=l.useRef(!1),[N,k]=l.useState(null),[I,y]=l.useState(null),[_,z]=l.useState(null),A=l.useRef(void 0),[G,U]=l.useState(""),T=l.useRef(0),D=l.useRef(void 0),h=l.useMemo(()=>{const n=i.map(t=>Math.round(t.value)).sort((t,g)=>t-g),e=n.length;return{n:e,median:X(n),min:e?n[0]:0,max:e?n[e-1]:0}},[i]),B=l.useRef(h);B.current=h;const L=l.useMemo(()=>{if(N&&c.some(e=>e.leaves.some(t=>t.sid===N)))return N;const n=c.find(e=>e.leaves.length>0)?.leaves[0];return n?n.sid:null},[N,c]);l.useLayoutEffect(()=>{const n=new Set;c.forEach(a=>a.leaves.forEach(m=>n.add(m.sid)));const e=M.current,t=[];n.forEach(a=>{e.has(a)||t.push(a)});const g=new Map,o=[],R=C.current?.getBoundingClientRect();if(n.forEach(a=>{const m=d.current.get(a);if(!m)return;const p=m.getBoundingClientRect();if(g.set(a,p),b)return;if(t.includes(a)){if(R){const j=R.left-p.left,S=R.top-p.top;o.push({el:m,dx:j,dy:S,enter:!0})}}else{const j=w.current.get(a);if(!j)return;const S=j.left-p.left,F=j.top-p.top;(Math.abs(S)>.5||Math.abs(F)>.5)&&o.push({el:m,dx:S,dy:F,enter:!1})}}),o.length&&(o.forEach(({el:a,dx:m,dy:p})=>{a.style.transition="none",a.style.opacity="",a.style.transform=`translate(${m}px, ${p}px)`}),requestAnimationFrame(()=>{o.forEach(({el:a,enter:m})=>{a.style.transition=`transform ${m?H:Y}ms ${K}`,a.style.transform="translate(0px, 0px)"})})),w.current=g,M.current=n,!b&&t.length&&E.current){const a=t[t.length-1],m=c.flatMap(p=>p.leaves).find(p=>p.sid===a);m&&(window.clearTimeout(A.current),z(m.digit),A.current=window.setTimeout(()=>z(null),P))}E.current&&t.length&&(T.current+=t.length,window.clearTimeout(D.current),D.current=window.setTimeout(()=>{const a=T.current;T.current=0;const{median:m,n:p}=B.current;a>0&&p>0&&U(`${a} new value${a===1?"":"s"}, median now ${x(m)}${s}.`)},W)),E.current=!0},[c,b]),l.useEffect(()=>()=>{window.clearTimeout(A.current),window.clearTimeout(D.current)},[]);const q=n=>{if(!L)return;let e=-1,t=-1;for(let o=0;o<c.length;o++){const R=c[o].leaves.findIndex(a=>a.sid===L);if(R!==-1){e=o,t=R;break}}if(e===-1)return;switch(n.key){case"ArrowRight":t=Math.min(c[e].leaves.length-1,t+1);break;case"ArrowLeft":t=Math.max(0,t-1);break;case"ArrowDown":e=O(c,e,1),t=Math.min(t,c[e].leaves.length-1);break;case"ArrowUp":e=O(c,e,-1),t=Math.min(t,c[e].leaves.length-1);break;case"Home":t=0;break;case"End":t=c[e].leaves.length-1;break;default:return}n.preventDefault();const g=c[e]?.leaves[t];g&&(k(g.sid),y(g.sid),v.current.get(g.sid)?.focus())},$=I?c.flatMap(n=>n.leaves).find(n=>n.sid===I):null;return r.jsxs("div",{className:`w-full ${f}`,children:[r.jsxs("div",{className:"mb-2 flex items-baseline justify-between gap-4",children:[r.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.18em] text-ns-muted",children:u}),r.jsx("span",{ref:C,"aria-hidden":"true",className:"ns-sift-staging","data-active":_!==null||void 0,children:_??"·"})]}),r.jsx("div",{className:"ns-sift-frame overflow-x-auto rounded-sm border border-border bg-background",children:r.jsxs("table",{className:"ns-sift-table w-full border-collapse",children:[r.jsxs("caption",{className:"sr-only",children:[u," stem-and-leaf plot. ",h.n," value",h.n===1?"":"s",", median"," ",x(h.median),s,", range ",x(h.min),s," to ",x(h.max),s,". Each row is a stem of ten",s?` ${s}`:"","; each leaf digit is one value's ones digit."]}),r.jsxs("tbody",{onKeyDown:q,children:[c.map(n=>r.jsxs("tr",{className:"ns-sift-row",children:[r.jsxs("th",{scope:"row",className:"ns-sift-stem",children:[n.lo,"–",n.hi,s?` ${s}`:"",r.jsxs("span",{className:"sr-only",children:[" ","· ",n.leaves.length," value",n.leaves.length===1?"":"s"]})]}),r.jsx("td",{className:"ns-sift-cell",children:r.jsxs("div",{className:"ns-sift-leaves",children:[n.leaves.length===0&&r.jsx("span",{"aria-hidden":"true",className:"ns-sift-empty",children:"—"}),n.leaves.map(e=>{const t=e.sid===L,g=`${x(e.raw)}${s?` ${s}`:""}${e.meta?`, ${e.meta}`:""}`;return r.jsx("span",{ref:o=>{o?d.current.set(e.sid,o):d.current.delete(e.sid)},className:"ns-sift-leaf-wrap",children:r.jsx("button",{ref:o=>{o?v.current.set(e.sid,o):v.current.delete(e.sid)},type:"button",className:"ns-sift-leaf",tabIndex:t?0:-1,"aria-label":g,"data-detail":e.sid===I||void 0,onClick:()=>{k(e.sid),y(e.sid)},onFocus:()=>{k(e.sid),y(e.sid)},onBlur:()=>y(o=>o===e.sid?null:o),onMouseEnter:()=>y(e.sid),onMouseLeave:()=>y(o=>o===e.sid?null:o),children:e.digit})},e.sid)})]})})]},n.stem)),c.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:2,className:"ns-sift-none",children:"no data yet"})})]})]})}),r.jsxs("div",{className:"mt-1.5 flex items-baseline justify-between font-mono text-[10px] tabular-nums text-ns-muted",children:[r.jsxs("span",{children:["n ",h.n]}),r.jsx("span",{className:"text-foreground/80","aria-live":"off",children:$?`${x($.raw)}${s}${$.meta?` · ${$.meta}`:""}`:`median ${x(h.median)}${s} · range ${x(h.min)}–${x(h.max)}${s}`}),r.jsx("span",{children:"stem = tens"})]}),r.jsx("span",{role:"status","aria-live":"polite",className:"sr-only",children:G}),r.jsx("style",{children:`
        .ns-sift-staging {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.7em;
          height: 1.5em;
          border: 1px dashed var(--border);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ns-muted);
          transition: color 200ms ease, border-color 200ms ease;
        }
        .ns-sift-staging[data-active] {
          color: var(--foreground);
          border-style: solid;
          border-color: var(--foreground);
        }

        .ns-sift-table {
          font-family: var(--font-mono);
        }
        .ns-sift-row + .ns-sift-row .ns-sift-stem,
        .ns-sift-row + .ns-sift-row .ns-sift-cell {
          border-top: 1px solid var(--border);
        }
        .ns-sift-stem {
          text-align: right;
          vertical-align: baseline;
          white-space: nowrap;
          padding: 5px 10px 5px 8px;
          font-size: 11px;
          font-weight: 400;
          color: var(--ns-muted);
          border-right: 1px solid var(--border);
        }
        .ns-sift-cell {
          padding: 5px 8px;
          vertical-align: baseline;
          width: 100%;
        }
        .ns-sift-none {
          padding: 20px 8px;
          text-align: center;
          font-size: 12px;
          color: var(--ns-muted);
        }
        .ns-sift-leaves {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 1px;
          min-height: 1.5em;
        }
        .ns-sift-empty {
          font-size: 11px;
          color: var(--border);
          padding-left: 2px;
        }
        .ns-sift-leaf-wrap {
          display: inline-block;
        }
        .ns-sift-leaf {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.6em;
          height: 1.5em;
          padding: 0;
          border: none;
          border-radius: 4px;
          background: transparent;
          color: var(--foreground);
          font-family: var(--font-mono);
          font-size: 13px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: transform 120ms ease-out, background-color 120ms ease-out;
        }
        .ns-sift-leaf:hover,
        .ns-sift-leaf[data-detail] {
          transform: translateY(-2px);
          background: color-mix(in oklab, var(--foreground) 6%, transparent);
        }
        .ns-sift-leaf:focus-visible {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .ns-sift-staging {
            transition: none;
          }
          .ns-sift-leaf {
            transition: background-color 120ms ease-out;
          }
        }
      `})]})}function te(){return r.jsx("div",{className:"ns-stage",children:r.jsx(Z,{records:[{id:"a",value:42},{id:"b",value:18}]})})}export{te as default};
