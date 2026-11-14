const e=[{path:"Vignette.tsx",language:"tsx",content:`import { Shader, Vignette } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Vignette />
    </Shader>
  )
}
`},{path:"Vignette.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Vignette' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
