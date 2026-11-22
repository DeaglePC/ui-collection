const e=[{path:"Emboss.tsx",language:"tsx",content:`import { Shader, Emboss } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Emboss />
    </Shader>
  )
}
`},{path:"Emboss.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Emboss' }],
})
`}],s="",n={files:e,prompt:s};export{n as default,e as files,s as prompt};
