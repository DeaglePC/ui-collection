const e=[{path:"BlueNoise.tsx",language:"tsx",content:`import { Shader, BlueNoise } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <BlueNoise />
    </Shader>
  )
}
`},{path:"BlueNoise.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'BlueNoise' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
