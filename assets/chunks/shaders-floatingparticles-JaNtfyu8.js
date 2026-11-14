const t=[{path:"FloatingParticles.tsx",language:"tsx",content:`import { Shader, FloatingParticles } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <FloatingParticles />
    </Shader>
  )
}
`},{path:"FloatingParticles.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'FloatingParticles' }],
})
`}],a="",e={files:t,prompt:a};export{e as default,t as files,a as prompt};
