const e=[{path:"Exposure.tsx",language:"tsx",content:`import { Shader, Exposure } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Exposure />
    </Shader>
  )
}
`},{path:"Exposure.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Exposure' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
