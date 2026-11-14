const e=[{path:"CheckerWipe.tsx",language:"tsx",content:`import { Shader, CheckerWipe } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <CheckerWipe />
    </Shader>
  )
}
`},{path:"CheckerWipe.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'CheckerWipe' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
