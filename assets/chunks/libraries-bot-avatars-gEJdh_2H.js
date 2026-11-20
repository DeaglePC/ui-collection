const t=[{path:"bot-avatars-usage.tsx",language:"tsx",content:`// Libraries.dev · Bot Avatars
// MIT License · Copyright (c) 2026 Jakub Antalik
// https://libraries.dev · https://github.com/Jakubantalik/Libraries.dev
// npm: bot-avatars

import { BotAvatar } from 'bot-avatars';

export function Example({ busy }: { busy: boolean }) {
  return <BotAvatar type="clover" state={busy ? 'working' : 'default'} />;
}
`}],a=`用 Libraries.dev 的 bot-avatars 做下面的效果。先安装：

npm install bot-avatars

这是 MIT 许可的官方用法，请按文档接入，不要改包内部实现。商业项目可以使用。Pro 的 Studio 导出和 Pro 预设不在 MIT 范围内，不要去找。

用法：

import { BotAvatar } from 'bot-avatars';

export function Example({ busy }: { busy: boolean }) {
  return <BotAvatar type="clover" state={busy ? 'working' : 'default'} />;
}

`,n={files:t,prompt:a};export{n as default,t as files,a as prompt};
