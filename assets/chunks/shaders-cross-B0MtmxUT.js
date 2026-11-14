const e=[{path:"Cross.tsx",language:"tsx",content:`import { Shader, Cross } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Cross />
    </Shader>
  )
}
`},{path:"Cross.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Cross' }],
})
`}],s="",n={files:e,prompt:s};export{n as default,e as files,s as prompt};
