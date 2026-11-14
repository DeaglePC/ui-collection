const n=[{path:"BarnDoors.tsx",language:"tsx",content:`import { Shader, BarnDoors } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <BarnDoors />
    </Shader>
  )
}
`},{path:"BarnDoors.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'BarnDoors' }],
})
`}],r="",a={files:n,prompt:r};export{a as default,n as files,r as prompt};
