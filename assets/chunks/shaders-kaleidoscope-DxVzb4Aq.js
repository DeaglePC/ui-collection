const e=[{path:"Kaleidoscope.tsx",language:"tsx",content:`import { Shader, Kaleidoscope } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Kaleidoscope />
    </Shader>
  )
}
`},{path:"Kaleidoscope.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Kaleidoscope' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
