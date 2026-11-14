const e=[{path:"Weave.tsx",language:"tsx",content:`import { Shader, Weave } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Weave />
    </Shader>
  )
}
`},{path:"Weave.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Weave' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
