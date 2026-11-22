const e=[{path:"Heart.tsx",language:"tsx",content:`import { Shader, Heart } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Heart />
    </Shader>
  )
}
`},{path:"Heart.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Heart' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
