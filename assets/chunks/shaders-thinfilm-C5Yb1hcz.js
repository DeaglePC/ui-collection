const n=[{path:"ThinFilm.tsx",language:"tsx",content:`import { Shader, ThinFilm } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <ThinFilm />
    </Shader>
  )
}
`},{path:"ThinFilm.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'ThinFilm' }],
})
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
