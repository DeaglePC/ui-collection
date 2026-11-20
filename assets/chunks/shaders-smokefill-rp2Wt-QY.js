const e=[{path:"SmokeFill.tsx",language:"tsx",content:`import { Shader, SmokeFill } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <SmokeFill />
    </Shader>
  )
}
`},{path:"SmokeFill.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'SmokeFill' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
