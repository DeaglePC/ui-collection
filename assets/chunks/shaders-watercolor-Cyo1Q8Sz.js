const e=[{path:"Watercolor.tsx",language:"tsx",content:`import { Shader, Watercolor } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Watercolor />
    </Shader>
  )
}
`},{path:"Watercolor.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Watercolor' }],
})
`}],t="",r={files:e,prompt:t};export{r as default,e as files,t as prompt};
