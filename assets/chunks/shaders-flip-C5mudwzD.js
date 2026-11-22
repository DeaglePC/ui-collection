const e=[{path:"Flip.tsx",language:"tsx",content:`import { Shader, Flip } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Flip />
    </Shader>
  )
}
`},{path:"Flip.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Flip' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
