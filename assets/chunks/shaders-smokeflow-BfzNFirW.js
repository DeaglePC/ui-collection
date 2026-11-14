const e=[{path:"SmokeFlow.tsx",language:"tsx",content:`import { Shader, SmokeFlow } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <SmokeFlow />
    </Shader>
  )
}
`},{path:"SmokeFlow.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'SmokeFlow' }],
})
`}],n="",o={files:e,prompt:n};export{o as default,e as files,n as prompt};
