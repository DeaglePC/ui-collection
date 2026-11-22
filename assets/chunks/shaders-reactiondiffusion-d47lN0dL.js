const n=[{path:"ReactionDiffusion.tsx",language:"tsx",content:`import { Shader, ReactionDiffusion } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ReactionDiffusion />
    </Shader>
  )
}
`},{path:"ReactionDiffusion.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ReactionDiffusion' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
