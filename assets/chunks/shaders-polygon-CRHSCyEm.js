const n=[{path:"Polygon.tsx",language:"tsx",content:`import { Shader, Polygon } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Polygon />
    </Shader>
  )
}
`},{path:"Polygon.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Polygon' }],
})
`}],e="",o={files:n,prompt:e};export{o as default,n as files,e as prompt};
