const a=[{path:"FractalNoise.tsx",language:"tsx",content:`import { Shader, FractalNoise } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <FractalNoise />
    </Shader>
  )
}
`},{path:"FractalNoise.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'FractalNoise' }],
})
`}],e="",t={files:a,prompt:e};export{t as default,a as files,e as prompt};
