const t=[{path:"Star.tsx",language:"tsx",content:`import { Shader, Star } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Star />
    </Shader>
  )
}
`},{path:"Star.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Star' }],
})
`}],a="",e={files:t,prompt:a};export{e as default,t as files,a as prompt};
