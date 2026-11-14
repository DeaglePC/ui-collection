const n=[{path:"Ring.tsx",language:"tsx",content:`import { Shader, Ring } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Ring />
    </Shader>
  )
}
`},{path:"Ring.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Ring' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
