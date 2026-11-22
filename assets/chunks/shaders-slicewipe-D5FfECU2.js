const e=[{path:"SliceWipe.tsx",language:"tsx",content:`import { Shader, SliceWipe } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <SliceWipe />
    </Shader>
  )
}
`},{path:"SliceWipe.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'SliceWipe' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
