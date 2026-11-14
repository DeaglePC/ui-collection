const e=[{path:"ObjectTracker.tsx",language:"tsx",content:`import { Shader, ObjectTracker } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ObjectTracker />
    </Shader>
  )
}
`},{path:"ObjectTracker.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ObjectTracker' }],
})
`}],t="",r={files:e,prompt:t};export{r as default,e as files,t as prompt};
