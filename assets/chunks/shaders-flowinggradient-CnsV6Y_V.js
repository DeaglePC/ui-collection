const n=[{path:"FlowingGradient.tsx",language:"tsx",content:`import { Shader, FlowingGradient } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <FlowingGradient />
    </Shader>
  )
}
`},{path:"FlowingGradient.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'FlowingGradient' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
