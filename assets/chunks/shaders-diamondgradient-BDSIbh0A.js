const n=[{path:"DiamondGradient.tsx",language:"tsx",content:`import { Shader, DiamondGradient } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <DiamondGradient />
    </Shader>
  )
}
`},{path:"DiamondGradient.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'DiamondGradient' }],
})
`}],a="",e={files:n,prompt:a};export{e as default,n as files,a as prompt};
