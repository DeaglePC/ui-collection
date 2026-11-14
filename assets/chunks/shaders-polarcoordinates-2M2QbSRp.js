const a=[{path:"PolarCoordinates.tsx",language:"tsx",content:`import { Shader, PolarCoordinates } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <PolarCoordinates />
    </Shader>
  )
}
`},{path:"PolarCoordinates.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'PolarCoordinates' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
