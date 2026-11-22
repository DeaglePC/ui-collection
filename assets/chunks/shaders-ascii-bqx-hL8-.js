const e=[{path:"Ascii.tsx",language:"tsx",content:`import { Shader, Ascii } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Ascii />
    </Shader>
  )
}
`},{path:"Ascii.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Ascii' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
