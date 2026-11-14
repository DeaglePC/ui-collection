const e=[{path:"ParticleFlow.tsx",language:"tsx",content:`import { Shader, ParticleFlow } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ParticleFlow />
    </Shader>
  )
}
`},{path:"ParticleFlow.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ParticleFlow' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
