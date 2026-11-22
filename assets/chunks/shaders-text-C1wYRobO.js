const e=[{path:"Text.tsx",language:"tsx",content:`import { Shader, Text } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <Text />
    </Shader>
  )
}
`},{path:"Text.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'Text' }],
})
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
