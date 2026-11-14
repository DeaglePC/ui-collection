const e=[{path:"PixelThrow.tsx",language:"tsx",content:`import { Shader, PixelThrow } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <PixelThrow />
    </Shader>
  )
}
`},{path:"PixelThrow.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'PixelThrow' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
