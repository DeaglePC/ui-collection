import{j as e}from"./client-CsvIHAk3.js";import{D as C}from"./demo-frame-C3w3-SSO.js";import{l as N,u as D,C as L,d as E,e as S,L as k,a as u,b as T,c as F}from"./code-lines-B6rsofZl.js";import"./react-CLAl0IOL.js";import"./single-value-BSiVqTjy.js";import"./frame-B8r6sQRK.js";import"./is-object-BXFza5Ij.js";import"./use-isomorphic-effect-IfCMdU38.js";import"./use-presence-By35vGyC.js";import"./text-swap-CUYWfEVv.js";import"./motion-D7BdpXrB.js";import"./use-motion-value-rQUFHAUE.js";import"./index-82DpVIA4.js";import"./index-DdfTS2IF.js";import"./press-CJng92R_.js";import"./auto-height-DR2gZbkV.js";import"./progressive-blur-BlgELdal.js";import"./scroll-fade-Al6oFs5k.js";function R({code:s,lang:l,title:t,icon:c,showLang:d=!0,lineNumbers:m=!1,startLine:p,collapseAfter:f=20,defaultExpanded:h,copy:r=!0,onCopy:o,wrap:x,tokens:y,highlight:g,focus:j,added:v,removed:b,className:w=""}){const a=l??N(t)??void 0,{lines:n}=D(s,a,y),i=t?`Copy ${t}`:"Copy code";return e.jsxs("figure",{className:`m-0 ${L} ${w}`,children:[t!==void 0&&e.jsxs("figcaption",{className:E,children:[c??e.jsx(S,{lang:a}),e.jsx("span",{className:"min-w-0 flex-1 truncate font-mono text-ui-sm text-text-secondary",children:t}),d&&e.jsx(k,{lang:a}),r&&e.jsx(u,{text:s,label:i,onCopy:o})]}),e.jsx(T,{lines:n.length,collapseAfter:f,defaultExpanded:h,children:e.jsx(F,{lines:n,lineNumbers:m,startLine:p,wrap:x,label:t,highlight:g,focus:j,added:v,removed:b,className:t===void 0&&r?"[&_[data-line]:first-child]:pr-12":""})}),t===void 0&&r&&e.jsx("div",{className:"absolute top-1.5 right-1.5 z-10 rounded-control-sm bg-surface-sunken transition-opacity duration-150 ease-standard pointer-fine:opacity-0 pointer-fine:group-hover:opacity-100 pointer-fine:focus-within:opacity-100",children:e.jsx(u,{text:s,label:i,showLabel:!1,onCopy:o})})]})}const U=`import { useEffect, useRef, useState } from "react";

/**
 * The value, but only once it has stopped changing for \`delay\` ms.
 * Use it to search as someone types without a request per keystroke.
 */
export function useDebouncedValue<T>(value: T, delay = 250): T {
  const [settled, setSettled] = useState(value);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const id = window.setTimeout(() => setSettled(value), delay);
    return () => window.clearTimeout(id);
  }, [value, delay]);

  return settled;
}

// Usage
export function SearchUsers() {
  const [query, setQuery] = useState("");
  const debounced = useDebouncedValue(query, 300);
  const { data, isLoading } = useUsers({ search: debounced });

  return (
    <SearchField value={query} onValueChange={setQuery} busy={isLoading}>
      {data?.map((user) => <UserRow key={user.id} user={user} />)}
    </SearchField>
  );
}
`;function q(){return e.jsx(C,{children:e.jsxs("div",{className:"min-h-0 flex-1 overflow-y-auto p-4 [scrollbar-width:thin]",children:[e.jsx("h3",{className:"text-ui font-medium text-text",children:"Debounce a value"}),e.jsx("p",{className:"mt-1 text-ui-sm text-pretty text-text-secondary",children:"The search waits for a pause in typing. Lines 7–8 keep the settled value; the timer is further down."}),e.jsx(R,{className:"mt-3 rounded-control",title:"use-debounced-value.ts",code:U,lineNumbers:!0,highlight:"7-8, 16-17",collapseAfter:12})]})})}function Z(){return e.jsx("div",{className:"stage",children:e.jsx(q,{children:"预览"})})}export{Z as default};
