const t=[{path:"FilmStock.tsx",language:"tsx",content:`import { Shader, FilmStock } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <FilmStock />
    </Shader>
  )
}
`},{path:"FilmStock.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'FilmStock' }],
})
`}],e="",n={files:t,prompt:e};export{n as default,t as files,e as prompt};
