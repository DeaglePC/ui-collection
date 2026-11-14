const r=[{path:"Aurora.tsx",language:"tsx",content:`import { Shader, Aurora } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Aurora />
    </Shader>
  )
}
`},{path:"Aurora.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Aurora' }],
})
`}],a="",e={files:r,prompt:a};export{e as default,r as files,a as prompt};
