const e=[{path:"Chevron.tsx",language:"tsx",content:`import { Shader, Chevron } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Chevron />
    </Shader>
  )
}
`},{path:"Chevron.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Chevron' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
