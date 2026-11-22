import{r as x,j as i}from"./client-CsvIHAk3.js";function B({label:a,hint:g,error:l,required:n=!1,optional:k=!1,counter:b,disabled:r=!1,htmlFor:N,className:I,children:d,...z}){const o=x.useId(),t=typeof d=="function"?null:x.isValidElement(d)?d:null,e=t?.props??{},u=typeof e.id=="string"&&e.id||N||`${o}-control`,f=`${o}-label`,_=`${o}-message`,y=`${o}-count`,c=!!l,m=s(l)?l:s(g)?g:null,p=s(b),w=[typeof e["aria-describedby"]=="string"?e["aria-describedby"]:null,m?_:null,p?y:null].filter(Boolean).join(" ")||void 0,E={id:u,"aria-describedby":w,"aria-invalid":c||void 0,"aria-required":n||void 0,labelId:f,disabled:r||void 0};let h=null;if(typeof d=="function")h=d(E);else if(t){const v=typeof t.type=="string"?t.type:null,j=v!==null&&$.includes(v),q=e["aria-label"]!=null||e["aria-labelledby"]!=null;h=x.cloneElement(t,{id:u,"aria-describedby":w,"aria-invalid":c||e["aria-invalid"]||void 0,"aria-required":n||e["aria-required"]||void 0,...j&&n?{required:!0}:null,...v!==null&&!j&&!q&&a!=null?{"aria-labelledby":f}:null,...r?{disabled:!0}:null})}return i.jsxs("div",{...z,className:["ui-fld",I].filter(Boolean).join(" "),"data-invalid":c||void 0,"data-disabled":r||void 0,children:[i.jsx("style",{href:"ui-form-field",precedence:"default",children:F}),a!=null&&i.jsxs("div",{className:"ui-fld__head",children:[i.jsxs("label",{className:"ui-fld__label",id:f,htmlFor:u,children:[a,n&&i.jsx("span",{className:"ui-fld__required","aria-hidden":"true",children:"*"})]}),k&&!n&&i.jsx("span",{className:"ui-fld__optional",children:"Optional"})]}),h,(m||p)&&i.jsxs("div",{className:"ui-fld__foot",children:[i.jsx("p",{className:"ui-fld__message",id:_,dir:"auto","aria-live":s(l)?"polite":void 0,children:m},s(l)?"error":"hint"),p&&i.jsx("span",{className:"ui-fld__count",id:y,children:b})]})]})}const $=["input","select","textarea"],s=a=>a!=null&&typeof a!="boolean"&&a!=="",F=`
/* Colors and motion as variables – override them on .ui-fld (see Theming in the docs) */
.ui-fld {
  --ui-fld-ink: var(--aui-ink, #171717);
  --ui-fld-muted: var(--aui-muted, #8f8f8f);
  --ui-fld-faint: var(--aui-placeholder, #b5b5b5);
  --ui-fld-danger: var(--aui-danger, #c4320a);
  --ui-fld-ease: cubic-bezier(0.22, 1, 0.36, 1);

  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  color: var(--ui-fld-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-fld[data-disabled] { opacity: 0.55; }

.ui-fld__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-fld__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-fld-ink); overflow-wrap: anywhere; cursor: default; }
/* The required mark: quiet, right after the last word */
.ui-fld__required { margin-inline-start: 2px; color: var(--ui-fld-muted); font-weight: 400; white-space: nowrap; }
.ui-fld__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-fld-muted); }

/* Under the control: the hint, or the error in its place, and the count */
.ui-fld__foot { display: flex; align-items: flex-start; gap: 12px; min-width: 0; padding: 0 2px; }
.ui-fld__message {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 12.5px;
  line-height: 17px;
  color: var(--ui-fld-muted);
  overflow-wrap: anywhere;
  animation: ui-fld-message 260ms var(--ui-fld-ease);
}
.ui-fld[data-invalid] .ui-fld__message { color: var(--ui-fld-danger); }
.ui-fld__count { flex: none; margin-inline-start: auto; font-size: 12px; line-height: 17px; font-variant-numeric: tabular-nums; color: var(--ui-fld-faint); white-space: nowrap; }

@keyframes ui-fld-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-fld__message { animation-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-fld {
  --ui-fld-ink: var(--aui-ink, #ededed);
  --ui-fld-muted: var(--aui-muted, #8b8b92);
  --ui-fld-faint: var(--aui-placeholder, #5c5c63);
  --ui-fld-danger: var(--aui-danger, #ff8a7a);
}
`;function C(){return i.jsx("div",{className:"stage",children:i.jsx(B,{})})}export{C as default};
