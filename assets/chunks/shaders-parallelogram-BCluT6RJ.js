const a=[{path:"Parallelogram.tsx",language:"tsx",content:`import { Shader, Parallelogram } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Parallelogram />
    </Shader>
  )
}
`},{path:"Parallelogram.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Parallelogram' }],
})
`}],e="",r={files:a,prompt:e};export{r as default,a as files,e as prompt};
