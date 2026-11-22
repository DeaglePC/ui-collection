const e=[{path:"Sharpness.tsx",language:"tsx",content:`import { Shader, Sharpness } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Sharpness />
    </Shader>
  )
}
`},{path:"Sharpness.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Sharpness' }],
})
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
