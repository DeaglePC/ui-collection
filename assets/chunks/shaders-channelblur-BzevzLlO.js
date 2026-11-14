const n=[{path:"ChannelBlur.tsx",language:"tsx",content:`import { Shader, ChannelBlur } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ChannelBlur />
    </Shader>
  )
}
`},{path:"ChannelBlur.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ChannelBlur' }],
})
`}],e="",a={files:n,prompt:e};export{a as default,n as files,e as prompt};
