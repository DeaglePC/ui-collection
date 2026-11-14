const e=[{path:"Truchet.tsx",language:"tsx",content:`import { Shader, Truchet } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Truchet />
    </Shader>
  )
}
`},{path:"Truchet.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Truchet' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
