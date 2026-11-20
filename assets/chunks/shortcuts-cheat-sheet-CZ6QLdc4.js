import{r as o,j as n}from"./client-CsvIHAk3.js";const z=new Set(["Shift","Control","Alt","Meta","CapsLock","OS"]),A=1200,U=60,B={esc:"ESC",escape:"ESC",enter:"ENTER",return:"ENTER",tab:"TAB",space:"SPACE",spacebar:"SPACE",backspace:"BACKSPACE",delete:"DELETE",del:"DELETE",up:"↑",down:"↓",left:"←",right:"→",arrowup:"↑",arrowdown:"↓",arrowleft:"←",arrowright:"→"};function L(r){return r===" "?"SPACE":r.length===1?r.toUpperCase():B[r.toLowerCase()]??r.toUpperCase()}function F(r,s){const d=[[]];for(const u of r)/^(then|>)$/i.test(u)?d.push([]):d[d.length-1].push(u);return d.filter(u=>u.length>0).map(u=>{const l={tokens:u,base:"",ctrl:!1,meta:!1,shift:!1,alt:!1};for(const w of u)switch(w.toLowerCase()){case"mod":s?l.meta=!0:l.ctrl=!0;break;case"ctrl":case"control":case"⌃":l.ctrl=!0;break;case"meta":case"cmd":case"command":case"⌘":l.meta=!0;break;case"shift":case"⇧":l.shift=!0;break;case"alt":case"opt":case"option":case"⌥":l.alt=!0;break;default:l.base=L(w)}return l})}function Y(r,s){return L(s.key)===r.base?!0:!s.code||r.base.length!==1||!r.ctrl&&!r.meta&&!r.alt?!1:r.base>="A"&&r.base<="Z"?s.code===`Key${r.base}`:r.base>="0"&&r.base<="9"?s.code===`Digit${r.base}`:!1}function j(r,s,d=!1){if(!r.base||s.ctrlKey!==r.ctrl||s.metaKey!==r.meta||s.altKey!==r.alt)return!1;if(d){if(r.shift||!s.shiftKey||r.base.length!==1)return!1}else if(s.shiftKey!==r.shift)return!1;return Y(r,s)}function M(r,s){switch(r.toLowerCase()){case"mod":return s?"⌘":"Ctrl";case"meta":case"cmd":case"command":return s?"⌘":"Win";case"ctrl":case"control":return s?"⌃":"Ctrl";case"shift":return s?"⇧":"Shift";case"alt":case"opt":case"option":return s?"⌥":"Alt";case"space":return"Space";default:return r}}const Q={"⌘":"Command","⇧":"Shift","⌥":"Option","⌃":"Control","↑":"Up arrow","↓":"Down arrow","←":"Left arrow","→":"Right arrow","?":"Question mark","/":"Slash",",":"Comma",".":"Period"};function W(r,s){return r.map(d=>d.tokens.map(u=>{const l=M(u,s);return Q[l]??l}).join(" plus ")).join(", then ")}function G({sections:r,open:s,defaultOpen:d=!1,onOpenChange:u,title:l="Keyboard Shortcuts",columns:w=2,liveEcho:K=!0,echoDuration:y=180,className:R=""}){const C=o.useRef(null),S=o.useRef(0),m=o.useRef([]),p=o.useRef(null),b=o.useRef(0),v=o.useId(),[P,D]=o.useState(d),f=s??P,[I,k]=o.useState(null),[E,O]=o.useState(!1);o.useEffect(()=>{const t=navigator.userAgentData?.platform||navigator.platform||navigator.userAgent||"";O(/mac|iphone|ipad|ipod/i.test(t))},[]);const T=o.useMemo(()=>r.map((e,t)=>({...e,items:e.items.map((a,i)=>({...a,rowKey:`${t}-${i}`,chords:F(a.keys,E)}))})),[r,E]),q=o.useMemo(()=>T.flatMap(e=>e.items),[T]),h=o.useCallback(()=>{m.current.forEach(clearTimeout),m.current=[]},[]),x=o.useCallback(()=>{u?.(!1),s===void 0&&D(!1)},[u,s]),N=o.useCallback((e,t)=>{h(),k(`${e}:${t}`),m.current.push(window.setTimeout(()=>k(null),Math.max(40,y)))},[h,y]),_=o.useCallback((e,t)=>{h();const a=Math.max(40,y)+U;k(`${e}:0`);for(let i=1;i<t;i+=1)m.current.push(window.setTimeout(()=>k(`${e}:${i}`),i*a));m.current.push(window.setTimeout(()=>k(null),t*a))},[h,y]);return o.useEffect(()=>{const e=C.current;if(!e)return;if(f){clearTimeout(S.current),e.removeAttribute("data-closing"),e.open||e.showModal();return}if(!e.open||e.hasAttribute("data-closing"))return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.close();return}e.setAttribute("data-closing",""),S.current=window.setTimeout(()=>{e.removeAttribute("data-closing"),e.close()},150)},[f]),o.useEffect(()=>{const e=C.current;if(!e)return;const t=c=>{c.preventDefault(),x()},a=()=>{f&&x()},i=c=>{c.target===e&&x()};return e.addEventListener("cancel",t),e.addEventListener("close",a),e.addEventListener("click",i),()=>{e.removeEventListener("cancel",t),e.removeEventListener("close",a),e.removeEventListener("click",i)}},[f,x]),o.useEffect(()=>{if(!f||!K)return;const e=t=>{if(z.has(t.key))return;if(t.key==="Escape"||t.key==="Tab"){p.current=null;return}if((t.key==="Enter"||t.key===" ")&&t.target?.closest?.("button"))return;const a=p.current;if(a){const c=q.find($=>$.rowKey===a.row),g=c?.chords[a.step];if(c&&g&&(j(g,t)||j(g,t,!0))){t.preventDefault(),t.stopPropagation(),N(c.rowKey,a.step),clearTimeout(b.current),p.current=a.step+1<c.chords.length?{row:c.rowKey,step:a.step+1}:null,p.current&&(b.current=window.setTimeout(()=>{p.current=null},A));return}p.current=null,clearTimeout(b.current)}const i=q.find(c=>c.chords[0]&&j(c.chords[0],t))??q.find(c=>c.chords[0]&&j(c.chords[0],t,!0));i&&(t.preventDefault(),t.stopPropagation(),N(i.rowKey,0),i.chords.length>1&&(p.current={row:i.rowKey,step:1},clearTimeout(b.current),b.current=window.setTimeout(()=>{p.current=null},A)))};return window.addEventListener("keydown",e,{capture:!0}),()=>window.removeEventListener("keydown",e,{capture:!0})},[f,K,q,N]),o.useEffect(()=>{f||(h(),clearTimeout(b.current),p.current=null,k(null))},[f,h]),o.useEffect(()=>()=>{m.current.forEach(clearTimeout),m.current=[],clearTimeout(b.current),clearTimeout(S.current)},[]),n.jsxs("dialog",{ref:C,"aria-labelledby":v,className:`ns-qk m-auto w-[min(40rem,calc(100vw-2rem))] overflow-visible p-0 ${R}`,children:[n.jsxs("div",{autoFocus:!0,tabIndex:-1,className:"ns-qk-panel",children:[n.jsxs("header",{className:"flex items-baseline justify-between gap-4 px-6 pb-4 pt-5",children:[n.jsx("h2",{id:v,className:"text-base font-semibold tracking-tight text-foreground",children:l}),n.jsx("p",{className:"shrink-0 text-xs text-ns-muted",children:"Press a shortcut to try it"})]}),n.jsx("div",{className:`grid gap-x-8 gap-y-6 px-6 pb-2 ${w===2?"sm:grid-cols-2":"grid-cols-1"}`,children:T.map((e,t)=>n.jsxs("section",{"aria-labelledby":`${v}-s${t}`,children:[n.jsx("h3",{id:`${v}-s${t}`,className:"mb-2 px-2 text-[11px] font-medium uppercase tracking-[0.06em] text-ns-muted",children:e.title}),n.jsx("ul",{className:"flex flex-col gap-0.5",children:e.items.map(a=>n.jsx("li",{children:n.jsxs("button",{type:"button","data-rehearse":!0,onClick:()=>_(a.rowKey,a.chords.length),"aria-label":`${a.label}: ${W(a.chords,E)}`,className:"ns-qk-row",children:[n.jsx("span",{"aria-hidden":!0,className:"min-w-0 truncate text-[13px] text-foreground",children:a.label}),n.jsx("span",{"aria-hidden":!0,className:"flex shrink-0 items-center gap-1",children:a.chords.map((i,c)=>n.jsxs("span",{className:"flex items-center gap-1",children:[c>0&&n.jsx("span",{className:"ns-qk-then",children:"then"}),i.tokens.map((g,$)=>n.jsx("kbd",{className:"ns-qk-cap","data-pressed":I===`${a.rowKey}:${c}`?"":void 0,children:M(g,E)},$))]},c))})]})},a.rowKey))})]},`${e.title}-${t}`))}),n.jsxs("footer",{className:"mt-2 flex items-center justify-between gap-4 border-t border-border px-6 py-3",children:[n.jsxs("p",{className:"flex items-center gap-2 text-xs text-ns-muted",children:[n.jsx("kbd",{className:"ns-qk-cap","aria-hidden":!0,children:"Esc"}),"to close"]}),n.jsx("button",{type:"button",onClick:x,className:"ns-qk-close",children:"Close"})]})]}),n.jsx("style",{children:`
        .ns-qk {
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--surface);
          color: var(--foreground);
          box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.45);
          animation: ns-qk-panel-in 220ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .ns-qk[data-closing] { animation: ns-qk-panel-out 150ms ease-in both; }
        .ns-qk::backdrop {
          background: color-mix(in oklab, var(--background) 72%, transparent);
          backdrop-filter: blur(2px);
          animation: ns-qk-scrim-in 120ms linear both;
        }
        .ns-qk[data-closing]::backdrop { animation: ns-qk-scrim-out 150ms linear both; }
        .ns-qk-panel { outline: none; }

        @keyframes ns-qk-panel-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
        @keyframes ns-qk-panel-out {
          from { opacity: 1; transform: none; }
          to { opacity: 0; transform: translateY(4px) scale(0.99); }
        }
        @keyframes ns-qk-scrim-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes ns-qk-scrim-out { from { opacity: 1 } to { opacity: 0 } }

        .ns-qk-row {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 5px 8px;
          border: 1px solid transparent;
          border-radius: 6px;
          background: transparent;
          text-align: left;
          transition: background-color 140ms ease-out, border-color 140ms ease-out;
        }
        .ns-qk-row:hover {
          background: color-mix(in oklab, var(--foreground) 6%, transparent);
          border-color: var(--border);
        }
        .ns-qk-row:active {
          background: color-mix(in oklab, var(--ns-accent) 12%, transparent);
          border-color: color-mix(in oklab, var(--ns-accent) 45%, var(--border));
        }
        .ns-qk-row:focus-visible {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
        }

        .ns-qk-then {
          font-size: 11px;
          color: var(--ns-muted);
          padding: 0 2px;
        }

        .ns-qk-cap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 26px;
          height: 26px;
          padding: 0 7px;
          border: 1px solid var(--border);
          border-radius: 6px;
          /* the panel is --surface, so caps sit on --background to read as a
             separate physical object in both themes */
          background: var(--background);
          box-shadow: 0 2px 0 var(--border);
          color: var(--foreground);
          font: 500 12px/1 var(--font-mono, ui-monospace, monospace);
          white-space: nowrap;
          /* release: slow settle back up */
          transition: transform 140ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 140ms cubic-bezier(0.22, 1, 0.36, 1),
            background-color 200ms ease-out, border-color 200ms ease-out, color 200ms ease-out;
        }
        .ns-qk-cap[data-pressed] {
          transform: translateY(2px);
          box-shadow: 0 0 0 var(--border);
          border-color: var(--ns-accent);
          background: color-mix(in oklab, var(--ns-accent) 14%, var(--surface));
          color: var(--ns-accent);
          /* press-in: immediate */
          transition: transform 60ms linear, box-shadow 60ms linear,
            background-color 60ms linear, border-color 60ms linear, color 60ms linear;
        }

        .ns-qk-close {
          border: 1px solid var(--border);
          border-radius: 6px;
          background: var(--background);
          color: var(--foreground);
          font-size: 12px;
          padding: 4px 12px;
          transition: background-color 140ms ease-out, border-color 140ms ease-out;
        }
        .ns-qk-close:hover {
          border-color: var(--ns-accent);
          background: color-mix(in oklab, var(--ns-accent) 10%, var(--background));
        }
        .ns-qk-close:focus-visible { outline: 2px solid var(--ns-accent); outline-offset: 2px; }

        @media (prefers-reduced-motion: reduce) {
          /* opacity only, one frame; the flash drops travel and becomes a pure
             colour change — still a real pixel change, so headless
             hover/keydown verification keeps working */
          .ns-qk, .ns-qk[data-closing] {
            animation-duration: 1ms;
            animation-timing-function: linear;
          }
          @keyframes ns-qk-panel-in { from { opacity: 0 } to { opacity: 1 } }
          @keyframes ns-qk-panel-out { from { opacity: 1 } to { opacity: 0 } }
          .ns-qk-cap, .ns-qk-cap[data-pressed] {
            transform: none;
            box-shadow: 0 2px 0 var(--border);
            transition: background-color 200ms ease-out, border-color 200ms ease-out,
              color 200ms ease-out;
          }
        }
      `})]})}function H(){return n.jsx("div",{className:"ns-stage",children:n.jsx(G,{sections:[{title:"示例",items:[{keys:["示例","第二项"],label:"示例"},{keys:["示例","第二项"],label:"第二项"}]},{title:"第二项",items:[{keys:["示例","第二项"],label:"示例"},{keys:["示例","第二项"],label:"第二项"}]}],open:!0,onOpenChange:()=>{}})})}export{H as default};
