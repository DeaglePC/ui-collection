const a=[{path:"DataMosh.tsx",language:"tsx",content:`import { Shader, DataMosh } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <DataMosh />
    </Shader>
  )
}
`},{path:"DataMosh.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'DataMosh' }],
})
`}],t="",e={files:a,prompt:t};export{e as default,a as files,t as prompt};
