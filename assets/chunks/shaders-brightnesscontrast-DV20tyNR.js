const t=[{path:"BrightnessContrast.tsx",language:"tsx",content:`import { Shader, BrightnessContrast } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <BrightnessContrast />
    </Shader>
  )
}
`},{path:"BrightnessContrast.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'BrightnessContrast' }],
})
`}],n="",e={files:t,prompt:n};export{e as default,t as files,n as prompt};
