// Importa el contexto creado
import { usePosts } from "../context/postContext"
// Importa módulo para insertar el icono de pantalla vacía
import { VscEmptyWindow } from 'react-icons/vsc'
// Importa el componente Link que permite crear enlaces en distintos componentes de nuestra aplicación
import { Link } from 'react-router-dom'

export function HomePage () {
  const { posts } = usePosts()
  
  
    /* Si no hay posts... */
    if (posts.length === 0) return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">No existe ningún post</h1>
      </div>
    )

  return (
    <div className="text-white">
      <Link to="/new">Nuevo Post</Link>
      {posts.map(post => (
        <div key = { post._id }>
          {post.title}
        </div>
      ))}
    </div>
  )
}