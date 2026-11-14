const o=[{path:"SolidColor.tsx",language:"tsx",content:`import { Shader, SolidColor } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <SolidColor />
    </Shader>
  )
}
`},{path:"SolidColor.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'SolidColor' }],
})
`}],e="",n={files:o,prompt:e};export{n as default,o as files,e as prompt};
