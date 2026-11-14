const t=[{path:"BarShift.tsx",language:"tsx",content:`import { Shader, BarShift } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <BarShift />
    </Shader>
  )
}
`},{path:"BarShift.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'BarShift' }],
})
`}],a="",e={files:t,prompt:a};export{e as default,t as files,a as prompt};
