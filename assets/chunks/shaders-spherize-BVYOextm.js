const e=[{path:"Spherize.tsx",language:"tsx",content:`import { Shader, Spherize } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Spherize />
    </Shader>
  )
}
`},{path:"Spherize.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Spherize' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
