const e=[{path:"Perspective.tsx",language:"tsx",content:`import { Shader, Perspective } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Perspective />
    </Shader>
  )
}
`},{path:"Perspective.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Perspective' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
