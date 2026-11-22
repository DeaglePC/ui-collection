const e=[{path:"ParticleField.tsx",language:"tsx",content:`import { Shader, ParticleField } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ParticleField />
    </Shader>
  )
}
`},{path:"ParticleField.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ParticleField' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
