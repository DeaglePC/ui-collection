const a=[{path:"RectangularCoordinates.tsx",language:"tsx",content:`import { Shader, RectangularCoordinates } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <RectangularCoordinates />
    </Shader>
  )
}
`},{path:"RectangularCoordinates.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'RectangularCoordinates' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
