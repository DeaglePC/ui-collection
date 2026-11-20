const r=[{path:"CursorTrail.tsx",language:"tsx",content:`import { Shader, CursorTrail } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <CursorTrail />
    </Shader>
  )
}
`},{path:"CursorTrail.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'CursorTrail' }],
})
`}],a="",e={files:r,prompt:a};export{e as default,r as files,a as prompt};
