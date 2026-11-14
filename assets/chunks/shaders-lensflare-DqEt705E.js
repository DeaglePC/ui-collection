const e=[{path:"LensFlare.tsx",language:"tsx",content:`import { Shader, LensFlare } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <LensFlare />
    </Shader>
  )
}
`},{path:"LensFlare.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'LensFlare' }],
})
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
