const e=[{path:"ErosionNoise.tsx",language:"tsx",content:`import { Shader, ErosionNoise } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ErosionNoise />
    </Shader>
  )
}
`},{path:"ErosionNoise.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ErosionNoise' }],
})
`}],n="",o={files:e,prompt:n};export{o as default,e as files,n as prompt};
