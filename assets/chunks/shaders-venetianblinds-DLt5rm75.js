const n=[{path:"VenetianBlinds.tsx",language:"tsx",content:`import { Shader, VenetianBlinds } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <VenetianBlinds />
    </Shader>
  )
}
`},{path:"VenetianBlinds.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'VenetianBlinds' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
