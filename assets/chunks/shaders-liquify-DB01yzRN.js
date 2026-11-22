const e=[{path:"Liquify.tsx",language:"tsx",content:`import { Shader, Liquify } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Liquify />
    </Shader>
  )
}
`},{path:"Liquify.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Liquify' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
