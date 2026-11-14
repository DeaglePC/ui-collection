const e=[{path:"Ripples.tsx",language:"tsx",content:`import { Shader, Ripples } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Ripples />
    </Shader>
  )
}
`},{path:"Ripples.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Ripples' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
