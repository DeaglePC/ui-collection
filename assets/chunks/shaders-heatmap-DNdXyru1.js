const a=[{path:"Heatmap.tsx",language:"tsx",content:`import { Shader, Heatmap } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Heatmap />
    </Shader>
  )
}
`},{path:"Heatmap.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Heatmap' }],
})
`}],e="",t={files:a,prompt:e};export{t as default,a as files,e as prompt};
