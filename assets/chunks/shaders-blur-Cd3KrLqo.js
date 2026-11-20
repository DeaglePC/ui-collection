const e=[{path:"Blur.tsx",language:"tsx",content:`import { Shader, Blur } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Blur />
    </Shader>
  )
}
`},{path:"Blur.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Blur' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
