const e=[{path:"Form3D.tsx",language:"tsx",content:`import { Shader, Form3D } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Form3D />
    </Shader>
  )
}
`},{path:"Form3D.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Form3D' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
