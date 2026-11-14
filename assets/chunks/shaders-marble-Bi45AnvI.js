const e=[{path:"Marble.tsx",language:"tsx",content:`import { Shader, Marble } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Marble />
    </Shader>
  )
}
`},{path:"Marble.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Marble' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
