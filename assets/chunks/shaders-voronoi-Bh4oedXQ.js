const n=[{path:"Voronoi.tsx",language:"tsx",content:`import { Shader, Voronoi } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Voronoi />
    </Shader>
  )
}
`},{path:"Voronoi.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Voronoi' }],
})
`}],o="",e={files:n,prompt:o};export{e as default,n as files,o as prompt};
