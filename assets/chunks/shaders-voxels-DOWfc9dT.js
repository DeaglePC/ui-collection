const e=[{path:"Voxels.tsx",language:"tsx",content:`import { Shader, Voxels } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Voxels />
    </Shader>
  )
}
`},{path:"Voxels.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Voxels' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
