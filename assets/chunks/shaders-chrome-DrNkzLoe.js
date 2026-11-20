const e=[{path:"Chrome.tsx",language:"tsx",content:`import { Shader, Chrome } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Chrome />
    </Shader>
  )
}
`},{path:"Chrome.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Chrome' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
