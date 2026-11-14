const e=[{path:"Bulge.tsx",language:"tsx",content:`import { Shader, Bulge } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Bulge />
    </Shader>
  )
}
`},{path:"Bulge.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Bulge' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
