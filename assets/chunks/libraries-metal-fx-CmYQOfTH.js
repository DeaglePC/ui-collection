const t=[{path:"metal-fx-usage.tsx",language:"tsx",content:`// Libraries.dev · Metal FX
// MIT License · Copyright (c) 2026 Jakub Antalik
// https://libraries.dev · https://github.com/Jakubantalik/Libraries.dev
// npm: metal-fx

import { MetalFx } from 'metal-fx';

export function Example() {
  return (
    <MetalFx variant="button" preset="chromatic" theme="dark">
      <button>Upgrade</button>
    </MetalFx>
  );
}
`}],n=`用 Libraries.dev 的 metal-fx 做下面的效果。先安装：

npm install metal-fx

这是 MIT 许可的官方用法，请按文档接入，不要改包内部实现。商业项目可以使用。Pro 的 Studio 导出和 Pro 预设不在 MIT 范围内，不要去找。

用法：

import { MetalFx } from 'metal-fx';

export function Example() {
  return (
    <MetalFx variant="button" preset="chromatic" theme="dark">
      <button>Upgrade</button>
    </MetalFx>
  );
}

`,e={files:t,prompt:n};export{e as default,t as files,n as prompt};
