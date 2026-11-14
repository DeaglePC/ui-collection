const n=[{path:"CornerPin.tsx",language:"tsx",content:`import { Shader, CornerPin } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <CornerPin />
    </Shader>
  )
}
`},{path:"CornerPin.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'CornerPin' }],
})
`}],e="",r={files:n,prompt:e};export{r as default,n as files,e as prompt};
