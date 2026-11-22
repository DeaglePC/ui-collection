const e=[{path:"ImageTexture.tsx",language:"tsx",content:`import { Shader, ImageTexture } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ImageTexture />
    </Shader>
  )
}
`},{path:"ImageTexture.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ImageTexture' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
