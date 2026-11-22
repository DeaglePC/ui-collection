const e=[{path:"Beam.tsx",language:"tsx",content:`import { Shader, Beam } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Beam />
    </Shader>
  )
}
`},{path:"Beam.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Beam' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
