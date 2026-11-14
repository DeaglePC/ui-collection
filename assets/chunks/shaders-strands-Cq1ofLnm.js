const n=[{path:"Strands.tsx",language:"tsx",content:`import { Shader, Strands } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Strands />
    </Shader>
  )
}
`},{path:"Strands.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Strands' }],
})
`}],t="",a={files:n,prompt:t};export{a as default,n as files,t as prompt};
