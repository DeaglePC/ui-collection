const e=[{path:"Blob.tsx",language:"tsx",content:`import { Shader, Blob } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Blob />
    </Shader>
  )
}
`},{path:"Blob.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Blob' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
