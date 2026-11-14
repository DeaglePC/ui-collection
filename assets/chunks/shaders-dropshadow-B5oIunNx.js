const a=[{path:"DropShadow.tsx",language:"tsx",content:`import { Shader, DropShadow } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <DropShadow />
    </Shader>
  )
}
`},{path:"DropShadow.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'DropShadow' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
