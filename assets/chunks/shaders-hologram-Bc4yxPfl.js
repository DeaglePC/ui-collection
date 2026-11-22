const a=[{path:"Hologram.tsx",language:"tsx",content:`import { Shader, Hologram } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Hologram />
    </Shader>
  )
}
`},{path:"Hologram.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Hologram' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
