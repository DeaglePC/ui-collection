const t=[{path:"DotGrid.tsx",language:"tsx",content:`import { Shader, DotGrid } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <DotGrid />
    </Shader>
  )
}
`},{path:"DotGrid.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'DotGrid' }],
})
`}],e="",n={files:t,prompt:e};export{n as default,t as files,e as prompt};
