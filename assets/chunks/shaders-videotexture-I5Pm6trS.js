const e=[{path:"VideoTexture.tsx",language:"tsx",content:`import { Shader, VideoTexture } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <VideoTexture />
    </Shader>
  )
}
`},{path:"VideoTexture.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'VideoTexture' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
