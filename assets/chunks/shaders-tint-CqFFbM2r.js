const n=[{path:"Tint.tsx",language:"tsx",content:`import { Shader, Tint } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Tint />
    </Shader>
  )
}
`},{path:"Tint.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Tint' }],
})
`}],t="",e={files:n,prompt:t};export{e as default,n as files,t as prompt};
