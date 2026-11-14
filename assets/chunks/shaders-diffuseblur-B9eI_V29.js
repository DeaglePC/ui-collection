const e=[{path:"DiffuseBlur.tsx",language:"tsx",content:`import { Shader, DiffuseBlur } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <DiffuseBlur />
    </Shader>
  )
}
`},{path:"DiffuseBlur.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'DiffuseBlur' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
