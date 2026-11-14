const n=[{path:"FallingLines.tsx",language:"tsx",content:`import { Shader, FallingLines } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <FallingLines />
    </Shader>
  )
}
`},{path:"FallingLines.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'FallingLines' }],
})
`}],e="",a={files:n,prompt:e};export{a as default,n as files,e as prompt};
