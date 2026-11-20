const e=[{path:"Particles.tsx",language:"tsx",content:`import { Shader, Particles } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Particles />
    </Shader>
  )
}
`},{path:"Particles.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Particles' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
