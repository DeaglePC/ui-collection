const n=[{path:"HTMLInCanvas.tsx",language:"tsx",content:`import { Shader, HTMLInCanvas } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <HTMLInCanvas />
    </Shader>
  )
}
`},{path:"HTMLInCanvas.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'HTMLInCanvas' }],
})
`}],a="",e={files:n,prompt:a};export{e as default,n as files,a as prompt};
