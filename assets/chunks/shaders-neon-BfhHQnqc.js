const e=[{path:"Neon.tsx",language:"tsx",content:`import { Shader, Neon } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Neon />
    </Shader>
  )
}
`},{path:"Neon.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Neon' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
