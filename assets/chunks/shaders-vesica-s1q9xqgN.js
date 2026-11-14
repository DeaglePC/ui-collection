const e=[{path:"Vesica.tsx",language:"tsx",content:`import { Shader, Vesica } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Vesica />
    </Shader>
  )
}
`},{path:"Vesica.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Vesica' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
