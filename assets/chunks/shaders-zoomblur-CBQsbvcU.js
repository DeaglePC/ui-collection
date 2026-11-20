const e=[{path:"ZoomBlur.tsx",language:"tsx",content:`import { Shader, ZoomBlur } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ZoomBlur />
    </Shader>
  )
}
`},{path:"ZoomBlur.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ZoomBlur' }],
})
`}],n="",o={files:e,prompt:n};export{o as default,e as files,n as prompt};
