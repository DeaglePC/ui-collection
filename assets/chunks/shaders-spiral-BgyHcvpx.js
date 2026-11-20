const a=[{path:"Spiral.tsx",language:"tsx",content:`import { Shader, Spiral } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Spiral />
    </Shader>
  )
}
`},{path:"Spiral.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Spiral' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
