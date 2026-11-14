const n=[{path:"Satin.tsx",language:"tsx",content:`import { Shader, Satin } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Satin />
    </Shader>
  )
}
`},{path:"Satin.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Satin' }],
})
`}],t="",a={files:n,prompt:t};export{a as default,n as files,t as prompt};
