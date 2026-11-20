const e=[{path:"Grid.tsx",language:"tsx",content:`import { Shader, Grid } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Grid />
    </Shader>
  )
}
`},{path:"Grid.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Grid' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
