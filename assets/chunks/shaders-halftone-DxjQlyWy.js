const e=[{path:"Halftone.tsx",language:"tsx",content:`import { Shader, Halftone } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Halftone />
    </Shader>
  )
}
`},{path:"Halftone.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Halftone' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
