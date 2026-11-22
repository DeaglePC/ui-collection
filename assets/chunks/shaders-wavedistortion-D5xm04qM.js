const t=[{path:"WaveDistortion.tsx",language:"tsx",content:`import { Shader, WaveDistortion } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <WaveDistortion />
    </Shader>
  )
}
`},{path:"WaveDistortion.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'WaveDistortion' }],
})
`}],e="",n={files:t,prompt:e};export{n as default,t as files,e as prompt};
