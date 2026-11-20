const e=[{path:"border-beam-usage.tsx",language:"tsx",content:`// Libraries.dev · Border Beam
// MIT License · Copyright (c) 2026 Jakub Antalik
// https://libraries.dev · https://github.com/Jakubantalik/Libraries.dev
// npm: border-beam

import { BorderBeam } from 'border-beam';

export function Example() {
  return (
    <BorderBeam size="md">
      <div style={{ padding: 32, borderRadius: 16, background: '#1d1d1d' }}>
        Your content here
      </div>
    </BorderBeam>
  );
}
`}],r=`用 Libraries.dev 的 border-beam 做下面的效果。先安装：

npm install border-beam

这是 MIT 许可的官方用法，请按文档接入，不要改包内部实现。商业项目可以使用。Pro 的 Studio 导出和 Pro 预设不在 MIT 范围内，不要去找。

用法：

import { BorderBeam } from 'border-beam';

export function Example() {
  return (
    <BorderBeam size="md">
      <div style={{ padding: 32, borderRadius: 16, background: '#1d1d1d' }}>
        Your content here
      </div>
    </BorderBeam>
  );
}

`,n={files:e,prompt:r};export{n as default,e as files,r as prompt};
