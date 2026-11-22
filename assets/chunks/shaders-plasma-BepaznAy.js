const a=[{path:"Plasma.tsx",language:"tsx",content:`import { Shader, Plasma } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Plasma />
    </Shader>
  )
}
`},{path:"Plasma.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Plasma' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
