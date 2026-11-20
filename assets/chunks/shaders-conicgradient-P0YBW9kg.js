const n=[{path:"ConicGradient.tsx",language:"tsx",content:`import { Shader, ConicGradient } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ConicGradient />
    </Shader>
  )
}
`},{path:"ConicGradient.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ConicGradient' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
