const e=[{path:"KeyFrames.tsx",language:"tsx",content:`import { Shader, KeyFrames } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <KeyFrames />
    </Shader>
  )
}
`},{path:"KeyFrames.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'KeyFrames' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
