const a=[{path:"RadialWipe.tsx",language:"tsx",content:`import { Shader, RadialWipe } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <RadialWipe />
    </Shader>
  )
}
`},{path:"RadialWipe.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'RadialWipe' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
