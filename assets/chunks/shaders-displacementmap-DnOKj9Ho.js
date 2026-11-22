const e=[{path:"DisplacementMap.tsx",language:"tsx",content:`import { Shader, DisplacementMap } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <DisplacementMap />
    </Shader>
  )
}
`},{path:"DisplacementMap.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'DisplacementMap' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
