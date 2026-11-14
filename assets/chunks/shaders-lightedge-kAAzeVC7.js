const e=[{path:"LightEdge.tsx",language:"tsx",content:`import { Shader, LightEdge } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <LightEdge />
    </Shader>
  )
}
`},{path:"LightEdge.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'LightEdge' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
