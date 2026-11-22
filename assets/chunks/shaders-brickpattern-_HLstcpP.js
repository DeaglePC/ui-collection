const t=[{path:"BrickPattern.tsx",language:"tsx",content:`import { Shader, BrickPattern } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <BrickPattern />
    </Shader>
  )
}
`},{path:"BrickPattern.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'BrickPattern' }],
})
`}],e="",n={files:t,prompt:e};export{n as default,t as files,e as prompt};
