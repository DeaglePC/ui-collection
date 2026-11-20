const e=[{path:"Vibrance.tsx",language:"tsx",content:`import { Shader, Vibrance } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Vibrance />
    </Shader>
  )
}
`},{path:"Vibrance.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Vibrance' }],
})
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
