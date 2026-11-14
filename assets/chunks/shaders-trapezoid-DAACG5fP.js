const e=[{path:"Trapezoid.tsx",language:"tsx",content:`import { Shader, Trapezoid } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Trapezoid />
    </Shader>
  )
}
`},{path:"Trapezoid.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Trapezoid' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
