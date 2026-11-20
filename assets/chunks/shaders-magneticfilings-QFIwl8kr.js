const n=[{path:"MagneticFilings.tsx",language:"tsx",content:`import { Shader, MagneticFilings } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <MagneticFilings />
    </Shader>
  )
}
`},{path:"MagneticFilings.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'MagneticFilings' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
