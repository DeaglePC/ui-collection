const t=[{path:"Crystal.tsx",language:"tsx",content:`import { Shader, Crystal } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Crystal />
    </Shader>
  )
}
`},{path:"Crystal.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Crystal' }],
})
`}],a="",e={files:t,prompt:a};export{e as default,t as files,a as prompt};
