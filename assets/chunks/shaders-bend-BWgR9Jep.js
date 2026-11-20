const e=[{path:"Bend.tsx",language:"tsx",content:`import { Shader, Bend } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Bend />
    </Shader>
  )
}
`},{path:"Bend.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Bend' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
