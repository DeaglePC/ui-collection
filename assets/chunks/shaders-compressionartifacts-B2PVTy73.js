const t=[{path:"CompressionArtifacts.tsx",language:"tsx",content:`import { Shader, CompressionArtifacts } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <CompressionArtifacts />
    </Shader>
  )
}
`},{path:"CompressionArtifacts.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'CompressionArtifacts' }],
})
`}],e="",s={files:t,prompt:e};export{s as default,t as files,e as prompt};
