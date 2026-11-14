const e=[{path:"WorleyNoise.tsx",language:"tsx",content:`import { Shader, WorleyNoise } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <WorleyNoise />
    </Shader>
  )
}
`},{path:"WorleyNoise.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'WorleyNoise' }],
})
`}],n="",o={files:e,prompt:n};export{o as default,e as files,n as prompt};
