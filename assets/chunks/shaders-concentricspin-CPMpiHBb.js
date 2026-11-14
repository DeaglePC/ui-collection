const n=[{path:"ConcentricSpin.tsx",language:"tsx",content:`import { Shader, ConcentricSpin } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ConcentricSpin />
    </Shader>
  )
}
`},{path:"ConcentricSpin.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ConcentricSpin' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
