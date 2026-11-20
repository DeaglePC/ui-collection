const e=[{path:"Scratches.tsx",language:"tsx",content:`import { Shader, Scratches } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Scratches />
    </Shader>
  )
}
`},{path:"Scratches.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Scratches' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
