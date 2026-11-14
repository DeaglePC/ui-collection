const n=[{path:"liquid-gooey-usage.tsx",language:"tsx",content:`// Libraries.dev · Liquid Gooey
// MIT License · Copyright (c) 2026 Jakub Antalik
// https://libraries.dev · https://github.com/Jakubantalik/Libraries.dev
// npm: liquid-gooey

import { Liquid } from 'liquid-gooey';

export function Example({ open }: { open: boolean }) {
  return (
    <Liquid blur={6} contrast={18} fill="#fff">
      <Liquid.Item x={open ? -54 : 0} y={open ? -34 : 0} transition="bouncy">
        <button>A</button>
      </Liquid.Item>
      <Liquid.Item x={0} y={open ? -64 : 0} transition="bouncy" delay={40}>
        <button>B</button>
      </Liquid.Item>
    </Liquid>
  );
}
`}],i=`用 Libraries.dev 的 liquid-gooey 做下面的效果。先安装：

npm install liquid-gooey

这是 MIT 许可的官方用法，请按文档接入，不要改包内部实现。商业项目可以使用。Pro 的 Studio 导出和 Pro 预设不在 MIT 范围内，不要去找。

用法：

import { Liquid } from 'liquid-gooey';

export function Example({ open }: { open: boolean }) {
  return (
    <Liquid blur={6} contrast={18} fill="#fff">
      <Liquid.Item x={open ? -54 : 0} y={open ? -34 : 0} transition="bouncy">
        <button>A</button>
      </Liquid.Item>
      <Liquid.Item x={0} y={open ? -64 : 0} transition="bouncy" delay={40}>
        <button>B</button>
      </Liquid.Item>
    </Liquid>
  );
}

`,o={files:n,prompt:i};export{o as default,n as files,i as prompt};
