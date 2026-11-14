const t=[{path:"TiltShift.tsx",language:"tsx",content:`import { Shader, TiltShift } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <TiltShift />
    </Shader>
  )
}
`},{path:"TiltShift.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'TiltShift' }],
})
`}],e="",n={files:t,prompt:e};export{n as default,t as files,e as prompt};
