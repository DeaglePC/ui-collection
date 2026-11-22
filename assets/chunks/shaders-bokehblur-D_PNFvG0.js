const e=[{path:"BokehBlur.tsx",language:"tsx",content:`import { Shader, BokehBlur } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <BokehBlur />
    </Shader>
  )
}
`},{path:"BokehBlur.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'BokehBlur' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
