const e=[{path:"ProgressiveBlur.tsx",language:"tsx",content:`import { Shader, ProgressiveBlur } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ProgressiveBlur />
    </Shader>
  )
}
`},{path:"ProgressiveBlur.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ProgressiveBlur' }],
})
`}],r="",s={files:e,prompt:r};export{s as default,e as files,r as prompt};
