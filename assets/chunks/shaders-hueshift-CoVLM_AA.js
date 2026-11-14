const e=[{path:"HueShift.tsx",language:"tsx",content:`import { Shader, HueShift } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <HueShift />
    </Shader>
  )
}
`},{path:"HueShift.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'HueShift' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
