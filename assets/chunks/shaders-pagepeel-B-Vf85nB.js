const e=[{path:"PagePeel.tsx",language:"tsx",content:`import { Shader, PagePeel } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <PagePeel />
    </Shader>
  )
}
`},{path:"PagePeel.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'PagePeel' }],
})
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
