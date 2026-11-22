const e=[{path:"VHS.tsx",language:"tsx",content:`import { Shader, VHS } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <VHS />
    </Shader>
  )
}
`},{path:"VHS.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'VHS' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
