const e=[{path:"Arc.tsx",language:"tsx",content:`import { Shader, Arc } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Arc />
    </Shader>
  )
}
`},{path:"Arc.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Arc' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
