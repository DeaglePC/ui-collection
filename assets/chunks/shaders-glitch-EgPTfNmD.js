const t=[{path:"Glitch.tsx",language:"tsx",content:`import { Shader, Glitch } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Glitch />
    </Shader>
  )
}
`},{path:"Glitch.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Glitch' }],
})
`}],e="",n={files:t,prompt:e};export{n as default,t as files,e as prompt};
