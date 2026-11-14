const n=[{path:"Obsidian.tsx",language:"tsx",content:`import { Shader, Obsidian } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Obsidian />
    </Shader>
  )
}
`},{path:"Obsidian.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Obsidian' }],
})
`}],a="",e={files:n,prompt:a};export{e as default,n as files,a as prompt};
