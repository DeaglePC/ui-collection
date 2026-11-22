import{j as e,r as u}from"./client-CsvIHAk3.js";function p({title:t,text:i,action:r,icon:a=f,bare:s,tall:l,className:o,...d}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"ui-empty-state",precedence:"default",children:m}),e.jsxs("div",{className:["ui-est",o].filter(Boolean).join(" "),"data-bare":s||void 0,"data-tall":l||void 0,...d,children:[a!=null&&a!==!1&&e.jsx("span",{className:"ui-est__icon","aria-hidden":"true",children:e.jsx(x,{icon:a})}),e.jsx("p",{className:"ui-est__title",children:t}),i!=null&&i!==!1&&e.jsx("p",{className:"ui-est__text",children:i}),r!=null&&r!==!1&&e.jsx("div",{className:"ui-est__action",children:r})]})]})}const c=t=>Array.isArray(t)&&t.length>0&&t.every(i=>Array.isArray(i)&&typeof i[0]=="string");function x({icon:t}){return c(t)?e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",focusable:"false",children:t.map(([i,{key:r,...a}],s)=>u.createElement(i,{...a,key:String(r??s),..."strokeWidth"in a?{strokeWidth:h}:null}))}):e.jsx(e.Fragment,{children:t})}const h=1.75,n={stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"},f=[["path",{d:"M8 17H16",...n}],["path",{d:"M8 13H12",...n}],["path",{d:"M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5M20 10.6569V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V9.45584C4 6.21082 4 4.58831 4.88607 3.48933C5.06508 3.26731 5.26731 3.06508 5.48933 2.88607C6.58831 2 8.21082 2 11.4558 2C12.1614 2 12.5141 2 12.8372 2.11401C12.9044 2.13772 12.9702 2.165 13.0345 2.19575C13.3436 2.34355 13.593 2.593 14.0919 3.09188L18.8284 7.82843C19.4065 8.40649 19.6955 8.69552 19.8478 9.06306C20 9.4306 20 9.83935 20 10.6569Z",...n}]],m=`
/* Colors as variables – override them on .ui-est (see Theming in the docs) */
.ui-est {
  --ui-est-title: var(--aui-ink, #171717);
  --ui-est-text: var(--aui-muted, #737373);
  --ui-est-icon: var(--aui-muted, #737373);
  --ui-est-tile: var(--aui-surface, #ffffff);
  --ui-est-tile-line: var(--aui-border, #e5e5e5);
  --ui-est-tile-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-est-frame: #fafafa;
  --ui-est-line: var(--aui-border, #e5e5e5);

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  min-width: 0;
  padding: 48px 24px 52px;
  border: 1px dashed var(--ui-est-line);
  border-radius: calc(var(--aui-radius, 12px) + 4px);
  background: var(--ui-est-frame);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
}
/* bare: no frame – the panel or page around it is the frame */
.ui-est[data-bare] {
  padding: 0;
  border: 0;
  background: none;
}
/* tall: fills its parent's height, the content in the middle */
.ui-est[data-tall] {
  justify-content: center;
  min-height: 100%;
}

/* The icon on a small white card */
.ui-est__icon {
  display: grid;
  place-items: center;
  flex: none;
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  border: 1px solid var(--ui-est-tile-line);
  border-radius: 12px;
  background: var(--ui-est-tile);
  box-shadow: var(--ui-est-tile-shadow);
  color: var(--ui-est-icon);
}
.ui-est__icon > svg,
.ui-est__icon > img {
  display: block;
  width: 20px;
  height: 20px;
}
.ui-est__title {
  max-width: 100%;
  margin: 0;
  font-weight: 500;
  color: var(--ui-est-title);
  overflow-wrap: anywhere;
}
.ui-est__icon + .ui-est__title { margin-top: 16px; }
.ui-est__text {
  max-width: 430px;
  margin: 4px 0 0;
  font-size: 13.5px;
  line-height: 20px;
  color: var(--ui-est-text);
  text-wrap: balance;
  overflow-wrap: anywhere;
}
.ui-est__action {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}

/* Small screens: a tighter frame */
@media (max-width: 560px) {
  .ui-est:not([data-bare]) {
    padding: 36px 18px 40px;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-est {
  --ui-est-title: var(--aui-ink, #ededed);
  --ui-est-text: var(--aui-muted, #8f8f8f);
  --ui-est-icon: var(--aui-muted, #8f8f8f);
  --ui-est-tile: var(--aui-surface, #232326);
  --ui-est-tile-line: var(--aui-border, rgba(255, 255, 255, 0.1));
  --ui-est-tile-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-est-frame: rgba(255, 255, 255, 0.02);
  --ui-est-line: var(--aui-border, rgba(255, 255, 255, 0.12));
}
`;function v(){return e.jsx("div",{className:"stage",children:e.jsx(p,{})})}export{v as default};
