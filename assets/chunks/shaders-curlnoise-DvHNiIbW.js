const e=[{path:"CurlNoise.tsx",language:"tsx",content:`import { Shader, CurlNoise } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <CurlNoise />
    </Shader>
  )
}
`},{path:"CurlNoise.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'CurlNoise' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
