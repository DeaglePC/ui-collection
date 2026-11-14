const n=[{path:"LensDistortion.tsx",language:"tsx",content:`import { Shader, LensDistortion } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <LensDistortion />
    </Shader>
  )
}
`},{path:"LensDistortion.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'LensDistortion' }],
})
`}],t="",e={files:n,prompt:t};export{e as default,n as files,t as prompt};
