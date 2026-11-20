const n=[{path:"dot-usage.tsx",language:"tsx",content:`// Dots · Dot
// MIT License · Copyright (c) 2026 hamza-al
// https://dotsui.dev/docs
// npm: dots-swarm@0.1.0-alpha.4（入口 dots-swarm/dot，也从包根导出）

import { Dot, type DotKeyframe } from "dots-swarm/dot";

const entrance: DotKeyframe[] = [
  { y: 0, duration: 0.8, easing: "ease-in" },
  { size: 120, duration: 0.9 },
  { color: "#c3adff", duration: 0.6 },
];

export function Example() {
  return (
    <Dot initial={{ size: 18, y: -160, color: "#d5f999" }} sequence={entrance}>
      <span>Ada</span>
    </Dot>
  );
}
`}],t="",o={files:n,prompt:t};export{o as default,n as files,t as prompt};
