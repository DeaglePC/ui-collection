const a=[{path:"Godrays.tsx",language:"tsx",content:`import { Shader, Godrays } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Godrays />
    </Shader>
  )
}
`},{path:"Godrays.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Godrays' }],
})
`}],e="",n={files:a,prompt:e};export{n as default,a as files,e as prompt};
