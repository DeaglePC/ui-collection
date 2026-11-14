const t=[{path:"Plastic.tsx",language:"tsx",content:`import { Shader, Plastic } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Plastic />
    </Shader>
  )
}
`},{path:"Plastic.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Plastic' }],
})
`}],a="",e={files:t,prompt:a};export{e as default,t as files,a as prompt};
