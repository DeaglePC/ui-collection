const a=[{path:"Holographic.tsx",language:"tsx",content:`import { Shader, Holographic } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Holographic />
    </Shader>
  )
}
`},{path:"Holographic.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Holographic' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
