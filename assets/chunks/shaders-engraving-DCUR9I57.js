const n=[{path:"Engraving.tsx",language:"tsx",content:`import { Shader, Engraving } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Engraving />
    </Shader>
  )
}
`},{path:"Engraving.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Engraving' }],
})
`}],a="",e={files:n,prompt:a};export{e as default,n as files,a as prompt};
