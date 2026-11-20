const t=[{path:"dotswarm-usage.tsx",language:"tsx",content:`// Dots · DotSwarm
// MIT License · Copyright (c) 2026 hamza-al
// https://dotsui.dev/docs
// npm: dots-swarm@0.1.0-alpha.4
// 公开仓库 https://github.com/hamza-al/dots-next 当前不可访问。下面是该 MIT 包 README 中的免费核心用法。

import { useState } from "react";
import { DotSwarm, type Shape } from "dots-swarm";

export function Example() {
  const [shape, setShape] = useState<Shape>("cloud");
  return (
    <div style={{ width: 400, height: 400 }}>
      <DotSwarm shape={shape} count={1000} color="#d9f99d" />
      <button type="button" onClick={() => setShape("heart")}>A little love</button>
    </div>
  );
}
`}],n="",o={files:t,prompt:n};export{o as default,t as files,n as prompt};
