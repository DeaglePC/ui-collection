const n=[{path:"img-fx-usage.tsx",language:"tsx",content:`// Libraries.dev · Image FX
// MIT License · Copyright (c) 2026 Jakub Antalik
// https://libraries.dev · https://github.com/Jakubantalik/Libraries.dev
// npm: img-fx

import { ImageGeneration } from 'img-fx';

export function Example() {
  return (
    <ImageGeneration preset="pixels-organic" images={['/a.jpg', '/b.jpg']}>
      <div className="card" style={{ width: 320, height: 320, borderRadius: 20 }} />
    </ImageGeneration>
  );
}
`}],e=`用 Libraries.dev 的 img-fx 做下面的效果。先安装：

npm install img-fx

这是 MIT 许可的官方用法，请按文档接入，不要改包内部实现。商业项目可以使用。Pro 的 Studio 导出和 Pro 预设不在 MIT 范围内，不要去找。

用法：

import { ImageGeneration } from 'img-fx';

export function Example() {
  return (
    <ImageGeneration preset="pixels-organic" images={['/a.jpg', '/b.jpg']}>
      <div className="card" style={{ width: 320, height: 320, borderRadius: 20 }} />
    </ImageGeneration>
  );
}

`,i={files:n,prompt:e};export{i as default,n as files,e as prompt};
