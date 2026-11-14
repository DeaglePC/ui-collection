const e=[{path:"DiamondWipe.tsx",language:"tsx",content:`import { Shader, DiamondWipe } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <DiamondWipe />
    </Shader>
  )
}
`},{path:"DiamondWipe.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'DiamondWipe' }],
})
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
