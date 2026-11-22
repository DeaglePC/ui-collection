const e=[{path:"Posterize.tsx",language:"tsx",content:`import { Shader, Posterize } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Posterize />
    </Shader>
  )
}
`},{path:"Posterize.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Posterize' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
