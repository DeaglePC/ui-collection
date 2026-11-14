const e=[{path:"IsometricCubes.tsx",language:"tsx",content:`import { Shader, IsometricCubes } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <IsometricCubes />
    </Shader>
  )
}
`},{path:"IsometricCubes.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'IsometricCubes' }],
})
`}],t="",s={files:e,prompt:t};export{s as default,e as files,t as prompt};
