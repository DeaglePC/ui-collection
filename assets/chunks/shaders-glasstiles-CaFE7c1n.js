const e=[{path:"GlassTiles.tsx",language:"tsx",content:`import { Shader, GlassTiles } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <GlassTiles />
    </Shader>
  )
}
`},{path:"GlassTiles.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'GlassTiles' }],
})
`}],s="",a={files:e,prompt:s};export{a as default,e as files,s as prompt};
