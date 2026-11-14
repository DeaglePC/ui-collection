const e=[{path:"Duotone.tsx",language:"tsx",content:`import { Shader, Duotone } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Duotone />
    </Shader>
  )
}
`},{path:"Duotone.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Duotone' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
