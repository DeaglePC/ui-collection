const e=[{path:"Sparkle.tsx",language:"tsx",content:`import { Shader, Sparkle } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Sparkle />
    </Shader>
  )
}
`},{path:"Sparkle.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Sparkle' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
