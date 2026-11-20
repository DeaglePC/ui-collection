const t=[{path:"ChromaticAberration.tsx",language:"tsx",content:`import { Shader, ChromaticAberration } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ChromaticAberration />
    </Shader>
  )
}
`},{path:"ChromaticAberration.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ChromaticAberration' }],
})
`}],r="",a={files:t,prompt:r};export{a as default,t as files,r as prompt};
