const e=[{path:"Flower.tsx",language:"tsx",content:`import { Shader, Flower } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Flower />
    </Shader>
  )
}
`},{path:"Flower.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Flower' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
