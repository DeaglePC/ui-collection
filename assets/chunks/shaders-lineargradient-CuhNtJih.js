const e=[{path:"LinearGradient.tsx",language:"tsx",content:`import { Shader, LinearGradient } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <LinearGradient />
    </Shader>
  )
}
`},{path:"LinearGradient.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'LinearGradient' }],
})
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
