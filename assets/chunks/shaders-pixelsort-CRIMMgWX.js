const e=[{path:"PixelSort.tsx",language:"tsx",content:`import { Shader, PixelSort } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <PixelSort />
    </Shader>
  )
}
`},{path:"PixelSort.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'PixelSort' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
