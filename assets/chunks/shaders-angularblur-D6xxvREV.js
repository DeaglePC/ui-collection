const n=[{path:"AngularBlur.tsx",language:"tsx",content:`import { Shader, AngularBlur } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <AngularBlur />
    </Shader>
  )
}
`},{path:"AngularBlur.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'AngularBlur' }],
})
`}],r="",a={files:n,prompt:r};export{a as default,n as files,r as prompt};
