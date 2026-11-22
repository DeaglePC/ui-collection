const a=[{path:"Irradiance.tsx",language:"tsx",content:`import { Shader, Irradiance } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Irradiance />
    </Shader>
  )
}
`},{path:"Irradiance.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Irradiance' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
