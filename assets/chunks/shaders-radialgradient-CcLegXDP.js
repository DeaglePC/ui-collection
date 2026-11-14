const a=[{path:"RadialGradient.tsx",language:"tsx",content:`import { Shader, RadialGradient } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <RadialGradient />
    </Shader>
  )
}
`},{path:"RadialGradient.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'RadialGradient' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
