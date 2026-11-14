const e=[{path:"Checkerboard.tsx",language:"tsx",content:`import { Shader, Checkerboard } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Checkerboard />
    </Shader>
  )
}
`},{path:"Checkerboard.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Checkerboard' }],
})
`}],r="",a={files:e,prompt:r};export{a as default,e as files,r as prompt};
