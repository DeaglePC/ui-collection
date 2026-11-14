const e=[{path:"BlockDissolve.tsx",language:"tsx",content:`import { Shader, BlockDissolve } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <BlockDissolve />
    </Shader>
  )
}
`},{path:"BlockDissolve.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'BlockDissolve' }],
})
`}],s="",n={files:e,prompt:s};export{n as default,e as files,s as prompt};
