const e=[{path:"Paper.tsx",language:"tsx",content:`import { Shader, Paper } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Paper />
    </Shader>
  )
}
`},{path:"Paper.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Paper' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
