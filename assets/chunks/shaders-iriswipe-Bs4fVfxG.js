const e=[{path:"IrisWipe.tsx",language:"tsx",content:`import { Shader, IrisWipe } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <IrisWipe />
    </Shader>
  )
}
`},{path:"IrisWipe.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'IrisWipe' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
