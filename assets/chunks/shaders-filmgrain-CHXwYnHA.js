const n=[{path:"FilmGrain.tsx",language:"tsx",content:`import { Shader, FilmGrain } from 'shaders/react'

export function Preview() {
  return (
    <Shader className="h-64 w-full">
      <FilmGrain />
    </Shader>
  )
}
`},{path:"FilmGrain.js",language:"javascript",content:`import { createShader } from 'shaders/js'

await createShader(document.getElementById('root'), {
  components: [{ type: 'FilmGrain' }],
})
`}],a="",e={files:n,prompt:a};export{e as default,n as files,a as prompt};
