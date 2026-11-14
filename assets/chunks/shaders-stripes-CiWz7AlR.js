const e=[{path:"Stripes.tsx",language:"tsx",content:`import { Shader, Stripes } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Stripes />
    </Shader>
  )
}
`},{path:"Stripes.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Stripes' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
