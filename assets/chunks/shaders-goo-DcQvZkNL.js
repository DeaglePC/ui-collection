const e=[{path:"Goo.tsx",language:"tsx",content:`import { Shader, Goo } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Goo />
    </Shader>
  )
}
`},{path:"Goo.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Goo' }],
})
`}],n="",o={files:e,prompt:n};export{o as default,e as files,n as prompt};
