const e=[{path:"FlowField.tsx",language:"tsx",content:`import { Shader, FlowField } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <FlowField />
    </Shader>
  )
}
`},{path:"FlowField.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'FlowField' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
