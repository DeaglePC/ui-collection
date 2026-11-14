const t=[{path:"MultiPointGradient.tsx",language:"tsx",content:`import { Shader, MultiPointGradient } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <MultiPointGradient />
    </Shader>
  )
}
`},{path:"MultiPointGradient.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'MultiPointGradient' }],
})
`}],n="",e={files:t,prompt:n};export{e as default,t as files,n as prompt};
