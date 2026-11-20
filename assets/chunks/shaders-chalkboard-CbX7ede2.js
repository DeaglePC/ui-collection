const a=[{path:"Chalkboard.tsx",language:"tsx",content:`import { Shader, Chalkboard } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Chalkboard />
    </Shader>
  )
}
`},{path:"Chalkboard.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Chalkboard' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
