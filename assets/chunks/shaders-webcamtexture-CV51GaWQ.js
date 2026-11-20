const e=[{path:"WebcamTexture.tsx",language:"tsx",content:`import { Shader, WebcamTexture } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <WebcamTexture />
    </Shader>
  )
}
`},{path:"WebcamTexture.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'WebcamTexture' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
