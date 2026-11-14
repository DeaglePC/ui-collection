const e=[{path:"Smoke.tsx",language:"tsx",content:`import { Shader, Smoke } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Smoke />
    </Shader>
  )
}
`},{path:"Smoke.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Smoke' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
