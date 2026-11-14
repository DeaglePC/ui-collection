const e=[{path:"CarbonFiber.tsx",language:"tsx",content:`import { Shader, CarbonFiber } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <CarbonFiber />
    </Shader>
  )
}
`},{path:"CarbonFiber.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'CarbonFiber' }],
})
`}],n="",r={files:e,prompt:n};export{r as default,e as files,n as prompt};
