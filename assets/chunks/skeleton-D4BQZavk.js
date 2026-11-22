import{j as e}from"./client-CsvIHAk3.js";function d({width:r="100%",height:t=12,radius:o,line:s,className:a,style:i,...l}){const n=e.jsx("span",{...s?{}:l,className:["ui-skl",s?null:a].filter(Boolean).join(" "),style:{width:r,height:t,borderRadius:o,...s?null:i},"aria-hidden":"true"});return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"ui-skeleton",precedence:"default",children:u}),s?e.jsx("span",{...l,className:["ui-skl__line",a].filter(Boolean).join(" "),style:{height:s===!0?"1lh":s,...i},"aria-hidden":"true",children:n}):n]})}const u=`
/* Colors and motion as variables – override them on .ui-skl (see Theming in the docs) */
.ui-skl {
  --ui-skl-fill: #efefef;
  --ui-skl-sheen: rgba(255, 255, 255, 0.8);
  --ui-skl-speed: 1.6s;
  --ui-skl-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));

  position: relative;
  display: block;
  flex: none;
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
  border-radius: var(--aui-radius-sm, 6px);
  background: var(--ui-skl-fill);
}
/* The sheen: every skeleton sweeps at the same time, so a whole list breathes as one */
.ui-skl::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, var(--ui-skl-sheen), transparent);
  translate: -100% 0;
  animation: ui-skl-sweep var(--ui-skl-speed) var(--ui-skl-ease) infinite;
}
@keyframes ui-skl-sweep { 60%, 100% { translate: 100% 0; } }

/* line: a box one text line tall, the shape centered in it */
.ui-skl__line { display: flex; align-items: center; min-width: 0; max-width: 100%; }

/* The wrapper fades in a beat late – a load under 150ms never shows the skeletons at all */
.ui-skl-loading { --ui-skl-delay: 150ms; animation: ui-skl-in 300ms ease var(--ui-skl-delay) both; }
@keyframes ui-skl-in { from { opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  .ui-skl::after { display: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-skl {
  --ui-skl-fill: #242428;
  --ui-skl-sheen: rgba(255, 255, 255, 0.05);
}
`;function h(){return e.jsx("div",{className:"stage",children:e.jsx(d,{})})}export{h as default};
