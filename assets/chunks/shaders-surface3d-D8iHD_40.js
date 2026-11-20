const e=[{path:"Surface3D.tsx",language:"tsx",content:`import { Shader, Surface3D } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Surface3D />
    </Shader>
  )
}
`},{path:"Surface3D.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Surface3D' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
