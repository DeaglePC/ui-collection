const t=[{path:"GridDistortion.tsx",language:"tsx",content:`import { Shader, GridDistortion } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <GridDistortion />
    </Shader>
  )
}
`},{path:"GridDistortion.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'GridDistortion' }],
})
`}],n="",r={files:t,prompt:n};export{r as default,t as files,n as prompt};
