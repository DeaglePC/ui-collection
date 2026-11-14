const e=[{path:"Nebula.tsx",language:"tsx",content:`import { Shader, Nebula } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Nebula />
    </Shader>
  )
}
`},{path:"Nebula.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Nebula' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
