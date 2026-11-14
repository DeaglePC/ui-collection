const a=[{path:"ChromaFlow.tsx",language:"tsx",content:`import { Shader, ChromaFlow } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ChromaFlow />
    </Shader>
  )
}
`},{path:"ChromaFlow.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ChromaFlow' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
