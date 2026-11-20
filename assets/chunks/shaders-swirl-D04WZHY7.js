const e=[{path:"Swirl.tsx",language:"tsx",content:`import { Shader, Swirl } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Swirl />
    </Shader>
  )
}
`},{path:"Swirl.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Swirl' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
