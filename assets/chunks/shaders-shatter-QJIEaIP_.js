const t=[{path:"Shatter.tsx",language:"tsx",content:`import { Shader, Shatter } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Shatter />
    </Shader>
  )
}
`},{path:"Shatter.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Shatter' }],
})
`}],e="",a={files:t,prompt:e};export{a as default,t as files,e as prompt};
