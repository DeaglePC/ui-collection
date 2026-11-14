const e=[{path:"Wool.tsx",language:"tsx",content:`import { Shader, Wool } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Wool />
    </Shader>
  )
}
`},{path:"Wool.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Wool' }],
})
`}],n="",o={files:e,prompt:n};export{o as default,e as files,n as prompt};
