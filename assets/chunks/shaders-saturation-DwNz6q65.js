const t=[{path:"Saturation.tsx",language:"tsx",content:`import { Shader, Saturation } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Saturation />
    </Shader>
  )
}
`},{path:"Saturation.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Saturation' }],
})
`}],a="",n={files:t,prompt:a};export{n as default,t as files,a as prompt};
