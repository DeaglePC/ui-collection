const e=[{path:"Glow.tsx",language:"tsx",content:`import { Shader, Glow } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Glow />
    </Shader>
  )
}
`},{path:"Glow.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Glow' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
