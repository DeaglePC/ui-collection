const e=[{path:"TimeTrail.tsx",language:"tsx",content:`import { Shader, TimeTrail } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <TimeTrail />
    </Shader>
  )
}
`},{path:"TimeTrail.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'TimeTrail' }],
})
`}],a="",t={files:e,prompt:a};export{t as default,e as files,a as prompt};
