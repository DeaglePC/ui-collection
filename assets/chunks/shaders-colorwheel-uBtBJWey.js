const e=[{path:"ColorWheel.tsx",language:"tsx",content:`import { Shader, ColorWheel } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ColorWheel />
    </Shader>
  )
}
`},{path:"ColorWheel.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ColorWheel' }],
})
`}],n="",o={files:e,prompt:n};export{o as default,e as files,n as prompt};
