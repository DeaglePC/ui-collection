const t=[{path:"Stretch.tsx",language:"tsx",content:`import { Shader, Stretch } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Stretch />
    </Shader>
  )
}
`},{path:"Stretch.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Stretch' }],
})
`}],e="",n={files:t,prompt:e};export{n as default,t as files,e as prompt};
