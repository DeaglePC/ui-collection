const r=[{path:"Mirror.tsx",language:"tsx",content:`import { Shader, Mirror } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Mirror />
    </Shader>
  )
}
`},{path:"Mirror.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Mirror' }],
})
`}],e="",n={files:r,prompt:e};export{n as default,r as files,e as prompt};
