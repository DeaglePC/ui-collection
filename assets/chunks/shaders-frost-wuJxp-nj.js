const t=[{path:"Frost.tsx",language:"tsx",content:`import { Shader, Frost } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Frost />
    </Shader>
  )
}
`},{path:"Frost.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Frost' }],
})
`}],e="",n={files:t,prompt:e};export{n as default,t as files,e as prompt};
