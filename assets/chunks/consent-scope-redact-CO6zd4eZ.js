import{r as u,j as r}from"./client-CsvIHAk3.js";const h=260,v=40;function y(s){return typeof s!="string"}function w(s,i){return((s.length+i)%2===0?1:-1)*.3}function N({scopes:s,record:i,className:c=""}){const[l,x]=u.useState(()=>Object.fromEntries(s.map(e=>[e.id,e.defaultShared??!0]))),p=u.useId(),g=e=>{x(a=>({...a,[e]:!a[e]}))},b={},o=s.filter(e=>l[e.id]).map(e=>e.label),d=s.filter(e=>!l[e.id]).map(e=>e.label),f=d.length===0?`Sharing everything below: ${o.join(", ")}.`:o.length===0?`Withholding everything below: ${d.join(", ")}.`:`Sharing ${o.join(", ")}. Withholding ${d.join(", ")}.`;return r.jsxs("div",{className:`ns-lampblack w-full max-w-lg rounded-xl border border-border bg-surface ${c}`,children:[r.jsx("style",{children:`
        .ns-lampblack-bar {
          transition: transform ${h}ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ns-lampblack-glyph {
          transition: color ${h}ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ns-lampblack-thumb {
          transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ns-lampblack-track {
          transition: background-color 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out;
        }
        .ns-lampblack-track:hover {
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--foreground) 12%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .ns-lampblack-bar, .ns-lampblack-glyph, .ns-lampblack-thumb, .ns-lampblack-track {
            transition: none;
          }
        }
      `}),r.jsx("header",{className:"border-b border-border px-5 py-3",children:r.jsx("span",{className:"font-mono text-xs tracking-widest text-ns-muted",children:"DATA SHARING PREVIEW"})}),r.jsx("div",{className:"px-5 py-5 text-sm leading-[1.9] text-foreground",children:r.jsx("p",{children:i.map((e,a)=>{if(!y(e))return r.jsx("span",{children:e},a);const n=b[e.scope]??0;b[e.scope]=n+1;const t=!l[e.scope],k=e.kind??e.scope,m=n*v,j=w(e.text,n);return r.jsxs("span",{className:"relative inline-block whitespace-nowrap rounded-[3px] px-[2px] align-baseline",children:[r.jsx("span",{"aria-hidden":t,className:"ns-lampblack-glyph relative z-0",style:{color:t?"transparent":"var(--foreground)",transitionDelay:`${m}ms`},children:e.text}),t&&r.jsx("span",{className:"sr-only",children:`[withheld: ${k}]`}),r.jsx("span",{"aria-hidden":!0,"data-lampblack-bar":e.scope,"data-withheld":t?"true":"false",className:"ns-lampblack-bar absolute inset-0 z-10 rounded-[2px] bg-foreground",style:{transform:`rotate(${j}deg) scaleX(${t?1:0})`,transformOrigin:"left center",transitionDelay:`${m}ms`}})]},a)})})}),r.jsx("div",{className:"border-t border-border px-5 py-2",children:s.map(e=>{const a=`${p}-${e.id}-label`,n=l[e.id];return r.jsxs("div",{className:"flex items-start justify-between gap-4 py-2.5 first:pt-3 last:pb-3",children:[r.jsxs("div",{className:"min-w-0",children:[r.jsx("div",{id:a,className:"text-sm text-foreground",children:e.label}),e.hint&&r.jsx("div",{className:"mt-0.5 text-xs text-ns-muted",children:e.hint})]}),r.jsx("button",{type:"button",role:"switch","aria-checked":n,"aria-labelledby":a,"data-lampblack-switch":e.id,onClick:()=>g(e.id),className:"ns-lampblack-track relative h-5 w-9 shrink-0 rounded-full border border-border p-0.5 outline-none focus-visible:ring-2 focus-visible:ring-ns-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",style:{backgroundColor:n?"var(--ns-accent)":"var(--border)",borderColor:n?"var(--ns-accent)":"var(--border)"},children:r.jsx("span",{"aria-hidden":!0,className:"ns-lampblack-thumb block h-4 w-4 rounded-full bg-background",style:{transform:n?"translateX(16px)":"translateX(0)"}})})]},e.id)})}),r.jsx("p",{"aria-live":"polite",className:"border-t border-border px-5 py-3 text-xs text-ns-muted",children:f})]})}function S(){return r.jsx("div",{className:"ns-stage",children:r.jsx(N,{scopes:[{id:"a",label:"示例"},{id:"b",label:"第二项"}],record:["示例",{text:"第二段用来占位的说明。",scope:"第二项"}]})})}export{S as default};
