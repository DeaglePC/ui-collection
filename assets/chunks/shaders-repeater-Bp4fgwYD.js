const e=[{path:"Repeater.tsx",language:"tsx",content:`import { Shader, Repeater } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Repeater />
    </Shader>
  )
}
`},{path:"Repeater.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Repeater' }],
})
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
