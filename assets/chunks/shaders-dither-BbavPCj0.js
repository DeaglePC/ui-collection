const e=[{path:"Dither.tsx",language:"tsx",content:`import { Shader, Dither } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Dither />
    </Shader>
  )
}
`},{path:"Dither.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Dither' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
