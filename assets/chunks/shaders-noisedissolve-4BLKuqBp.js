const e=[{path:"NoiseDissolve.tsx",language:"tsx",content:`import { Shader, NoiseDissolve } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <NoiseDissolve />
    </Shader>
  )
}
`},{path:"NoiseDissolve.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'NoiseDissolve' }],
})
`}],s="",n={files:e,prompt:s};export{n as default,e as files,s as prompt};
