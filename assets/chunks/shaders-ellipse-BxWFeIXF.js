const e=[{path:"Ellipse.tsx",language:"tsx",content:`import { Shader, Ellipse } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Ellipse />
    </Shader>
  )
}
`},{path:"Ellipse.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Ellipse' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
