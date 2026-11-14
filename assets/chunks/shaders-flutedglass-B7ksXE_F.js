const e=[{path:"FlutedGlass.tsx",language:"tsx",content:`import { Shader, FlutedGlass } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <FlutedGlass />
    </Shader>
  )
}
`},{path:"FlutedGlass.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'FlutedGlass' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
