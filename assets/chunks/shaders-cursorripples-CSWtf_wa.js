const e=[{path:"CursorRipples.tsx",language:"tsx",content:`import { Shader, CursorRipples } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <CursorRipples />
    </Shader>
  )
}
`},{path:"CursorRipples.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'CursorRipples' }],
})
`}],r="",s={files:e,prompt:r};export{s as default,e as files,r as prompt};
