const e=[{path:"LinearBlur.tsx",language:"tsx",content:`import { Shader, LinearBlur } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <LinearBlur />
    </Shader>
  )
}
`},{path:"LinearBlur.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'LinearBlur' }],
})
`}],n="",r={files:e,prompt:n};export{r as default,e as files,n as prompt};
