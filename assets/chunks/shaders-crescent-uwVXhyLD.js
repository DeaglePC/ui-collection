const e=[{path:"Crescent.tsx",language:"tsx",content:`import { Shader, Crescent } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Crescent />
    </Shader>
  )
}
`},{path:"Crescent.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Crescent' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
