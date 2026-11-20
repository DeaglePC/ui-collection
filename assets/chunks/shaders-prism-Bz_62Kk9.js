const e=[{path:"Prism.tsx",language:"tsx",content:`import { Shader, Prism } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Prism />
    </Shader>
  )
}
`},{path:"Prism.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Prism' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
