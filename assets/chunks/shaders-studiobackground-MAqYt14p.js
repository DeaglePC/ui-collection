const n=[{path:"StudioBackground.tsx",language:"tsx",content:`import { Shader, StudioBackground } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <StudioBackground />
    </Shader>
  )
}
`},{path:"StudioBackground.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'StudioBackground' }],
})
`}],t="",a={files:n,prompt:t};export{a as default,n as files,t as prompt};
