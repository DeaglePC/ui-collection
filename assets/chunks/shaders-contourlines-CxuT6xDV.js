const n=[{path:"ContourLines.tsx",language:"tsx",content:`import { Shader, ContourLines } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ContourLines />
    </Shader>
  )
}
`},{path:"ContourLines.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ContourLines' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
