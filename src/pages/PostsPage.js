// Importa el contexto creado
import { usePosts } from "../context/postContext"

// Importa módulo para insertar el icono de pantalla vacía
import { VscEmptyWindow } from 'react-icons/vsc'

// Importa el componente Link que permite crear enlaces en distintos componentes de nuestra aplicación
import { Link } from 'react-router-dom'

// Importa funciones y diseño de las cards (tarjetas o fichas de los posts)
import { PostCard } from "../components/PostsCard"

// Importa ScrollToTop Componente que permite crear un acceso a la parte superior de las páginas 
import ScrollToTop from "react-scroll-to-top"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { faImage } from "@fortawesome/free-solid-svg-icons"



export function PostsPage () {

  const { posts } = usePosts()
  
  const renderMain = () => {
    
    /* Si no hay posts... */
    if (posts.length === 0) return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">No existe ningún post</h1>
      </div>
    )

    return(
      /* Función que recorre y muestra los posts creados y guardados a partir de la clave _id*/
      <div className="grid grid-cols-2 p-2 gap-4">
        {posts.map(post => (          
           <PostCard post = { post } key = { post._id } />
        ))}          
      </div>
    )      
  }

  return (
    <div className="py-4">    
    {/* Cabecera de la página: Muestra número de posts y enlace a crear nuevo post*/}
      <header className="flex justify-around w-full py-2">
        <h1 
          className="text-xl text-gray-300 font-semibold"
        >
          <FontAwesomeIcon icon={faImage} /> Posts 
          ({(posts.length)}) 
        </h1>
        <Link 
          to = '/dash/newPost' 
          className=" text-gray-300 text-xl font-semibold rounded-md hover:shadow-lg hover:shadow-white/70"
        >
        <FontAwesomeIcon icon={faSquarePlus} /> Nuevo post
        </Link>
      </header> 

      {renderMain()} 

      <br /><br />

      {/* Pie de la página */}
      <h1 className="text-xl text-gray-400 text-center font-semibold px-2 py-3 rounded-full">© alikindoiPhoto 2023 </h1>
      {/* Elemento para subir al top de la página */}
      <div>
        <ScrollToTop smooth color="#000" />
        <p style={{ marginTop: "200vh"}}></p>
      </div>              
    </div>    
  )   
}

