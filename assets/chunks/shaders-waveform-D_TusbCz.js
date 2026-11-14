const e=[{path:"Waveform.tsx",language:"tsx",content:`import { Shader, Waveform } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Waveform />
    </Shader>
  )
}
`},{path:"Waveform.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Waveform' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
