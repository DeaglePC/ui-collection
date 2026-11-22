const r=[{path:"TriangularGrid.tsx",language:"tsx",content:`import { Shader, TriangularGrid } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <TriangularGrid />
    </Shader>
  )
}
`},{path:"TriangularGrid.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'TriangularGrid' }],
})
`}],a="",n={files:r,prompt:a};export{n as default,r as files,a as prompt};
