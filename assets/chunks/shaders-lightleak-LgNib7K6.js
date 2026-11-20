const e=[{path:"LightLeak.tsx",language:"tsx",content:`import { Shader, LightLeak } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <LightLeak />
    </Shader>
  )
}
`},{path:"LightLeak.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'LightLeak' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
