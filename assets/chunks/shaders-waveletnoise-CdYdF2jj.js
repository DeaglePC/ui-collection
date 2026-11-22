const e=[{path:"WaveletNoise.tsx",language:"tsx",content:`import { Shader, WaveletNoise } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <WaveletNoise />
    </Shader>
  )
}
`},{path:"WaveletNoise.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'WaveletNoise' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
