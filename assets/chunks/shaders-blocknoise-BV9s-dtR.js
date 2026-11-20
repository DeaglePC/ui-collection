const e=[{path:"BlockNoise.tsx",language:"tsx",content:`import { Shader, BlockNoise } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <BlockNoise />
    </Shader>
  )
}
`},{path:"BlockNoise.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'BlockNoise' }],
})
`}],n="",o={files:e,prompt:n};export{o as default,e as files,n as prompt};
