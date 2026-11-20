const n=[{path:"voice-glow-usage.tsx",language:"tsx",content:`// Libraries.dev · Voice Glow
// MIT License · Copyright (c) 2026 Jakub Antalik
// https://libraries.dev · https://github.com/Jakubantalik/Libraries.dev
// npm: voice-glow

import { VoiceBeam, useMicrophone } from 'voice-glow';

export function Example() {
  const mic = useMicrophone();
  return (
    <>
      <VoiceBeam stream={mic.stream}>
        <div style={{ padding: 32, borderRadius: 20, background: '#1d1d1d' }}>
          Speak
        </div>
      </VoiceBeam>
      <button onClick={mic.state === 'live' ? mic.stop : mic.start}>
        {mic.state === 'live' ? 'Stop' : 'Start'}
      </button>
    </>
  );
}
`}],e=`用 Libraries.dev 的 voice-glow 做下面的效果。先安装：

npm install voice-glow

这是 MIT 许可的官方用法，请按文档接入，不要改包内部实现。商业项目可以使用。Pro 的 Studio 导出和 Pro 预设不在 MIT 范围内，不要去找。

用法：

import { VoiceBeam, useMicrophone } from 'voice-glow';

export function Example() {
  const mic = useMicrophone();
  return (
    <>
      <VoiceBeam stream={mic.stream}>
        <div style={{ padding: 32, borderRadius: 20, background: '#1d1d1d' }}>
          Speak
        </div>
      </VoiceBeam>
      <button onClick={mic.state === 'live' ? mic.stop : mic.start}>
        {mic.state === 'live' ? 'Stop' : 'Start'}
      </button>
    </>
  );
}

`,i={files:n,prompt:e};export{i as default,n as files,e as prompt};
