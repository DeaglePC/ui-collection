const n=[{path:"SunBurst.tsx",language:"tsx",content:`import { Shader, SunBurst } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <SunBurst />
    </Shader>
  )
}
`},{path:"SunBurst.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'SunBurst' }],
})
`}],t="",e={files:n,prompt:t};export{e as default,n as files,t as prompt};
