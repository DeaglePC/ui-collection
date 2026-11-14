const n=[{path:"InkFlow.tsx",language:"tsx",content:`import { Shader, InkFlow } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <InkFlow />
    </Shader>
  )
}
`},{path:"InkFlow.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'InkFlow' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
