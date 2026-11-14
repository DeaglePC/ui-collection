const e=[{path:"MeshGradient.tsx",language:"tsx",content:`import { Shader, MeshGradient } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <MeshGradient />
    </Shader>
  )
}
`},{path:"MeshGradient.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'MeshGradient' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
