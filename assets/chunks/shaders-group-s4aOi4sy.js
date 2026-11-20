const e=[{path:"Group.tsx",language:"tsx",content:`import { Shader, Group } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Group />
    </Shader>
  )
}
`},{path:"Group.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Group' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
