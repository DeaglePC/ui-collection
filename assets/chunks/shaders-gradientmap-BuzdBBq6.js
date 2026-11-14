const a=[{path:"GradientMap.tsx",language:"tsx",content:`import { Shader, GradientMap } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <GradientMap />
    </Shader>
  )
}
`},{path:"GradientMap.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'GradientMap' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
