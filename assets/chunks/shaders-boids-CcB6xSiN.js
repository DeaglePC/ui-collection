const e=[{path:"Boids.tsx",language:"tsx",content:`import { Shader, Boids } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Boids />
    </Shader>
  )
}
`},{path:"Boids.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Boids' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
