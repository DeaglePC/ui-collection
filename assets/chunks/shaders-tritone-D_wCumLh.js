const e=[{path:"Tritone.tsx",language:"tsx",content:`import { Shader, Tritone } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Tritone />
    </Shader>
  )
}
`},{path:"Tritone.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Tritone' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
