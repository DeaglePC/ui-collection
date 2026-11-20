const a=[{path:"Glass.tsx",language:"tsx",content:`import { Shader, Glass } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Glass />
    </Shader>
  )
}
`},{path:"Glass.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Glass' }],
})
`}],e="",s={files:a,prompt:e};export{s as default,a as files,e as prompt};
