const e=[{path:"Invert.tsx",language:"tsx",content:`import { Shader, Invert } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Invert />
    </Shader>
  )
}
`},{path:"Invert.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Invert' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
