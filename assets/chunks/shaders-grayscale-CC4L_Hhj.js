const a=[{path:"Grayscale.tsx",language:"tsx",content:`import { Shader, Grayscale } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Grayscale />
    </Shader>
  )
}
`},{path:"Grayscale.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Grayscale' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
