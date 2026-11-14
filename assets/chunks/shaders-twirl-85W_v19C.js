const e=[{path:"Twirl.tsx",language:"tsx",content:`import { Shader, Twirl } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Twirl />
    </Shader>
  )
}
`},{path:"Twirl.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Twirl' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
