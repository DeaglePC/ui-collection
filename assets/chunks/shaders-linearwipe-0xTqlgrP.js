const e=[{path:"LinearWipe.tsx",language:"tsx",content:`import { Shader, LinearWipe } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <LinearWipe />
    </Shader>
  )
}
`},{path:"LinearWipe.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'LinearWipe' }],
})
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
