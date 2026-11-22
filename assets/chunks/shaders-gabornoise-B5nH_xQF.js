const e=[{path:"GaborNoise.tsx",language:"tsx",content:`import { Shader, GaborNoise } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <GaborNoise />
    </Shader>
  )
}
`},{path:"GaborNoise.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'GaborNoise' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
