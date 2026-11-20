const e=[{path:"SineWave.tsx",language:"tsx",content:`import { Shader, SineWave } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <SineWave />
    </Shader>
  )
}
`},{path:"SineWave.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'SineWave' }],
})
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
