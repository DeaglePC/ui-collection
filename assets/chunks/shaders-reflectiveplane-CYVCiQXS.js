const e=[{path:"ReflectivePlane.tsx",language:"tsx",content:`import { Shader, ReflectivePlane } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ReflectivePlane />
    </Shader>
  )
}
`},{path:"ReflectivePlane.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ReflectivePlane' }],
})
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
