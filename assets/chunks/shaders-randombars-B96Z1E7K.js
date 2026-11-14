const a=[{path:"RandomBars.tsx",language:"tsx",content:`import { Shader, RandomBars } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <RandomBars />
    </Shader>
  )
}
`},{path:"RandomBars.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'RandomBars' }],
})
`}],n="",e={files:a,prompt:n};export{e as default,a as files,n as prompt};
