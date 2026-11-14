const e=[{path:"Teardrop.tsx",language:"tsx",content:`import { Shader, Teardrop } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Teardrop />
    </Shader>
  )
}
`},{path:"Teardrop.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Teardrop' }],
})
`}],r="",a={files:e,prompt:r};export{a as default,e as files,r as prompt};
