const e=[{path:"RoundedRect.tsx",language:"tsx",content:`import { Shader, RoundedRect } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <RoundedRect />
    </Shader>
  )
}
`},{path:"RoundedRect.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'RoundedRect' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
