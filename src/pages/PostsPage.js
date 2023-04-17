// Importa el contexto creado
import { usePosts } from "../context/postContext"

// Importa módulo para insertar el icono de pantalla vacía
import { VscEmptyWindow } from 'react-icons/vsc'

// Importa módulo para insertar el icono de blogger
import { ImBlogger } from 'react-icons/im'

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
      <div className="grid grid-cols-1 p-2 gap-4">
        {posts.map(post => (          
           <PostCard post = { post } key = { post._id } />
         ))}           
      </div>
    )      
  }

  return (
    <div className="py-4">    
    {/* Cabecera de la página: Muestra número de posts y enlace a crear nuevo post*/}
      <header className="flex justify-around sticky top-0 z-30 w-full py-2">
        <h1 
          className="text-2xl text-gray-300 font-bold"
        >
          <FontAwesomeIcon icon={faImage} /> Posts 
          ({(posts.length)}) 
        </h1>
        <Link 
          to = '/dash/newPost' 
          className=" text-gray-300 text-2xl font-bold rounded-md"
        >
        <FontAwesomeIcon icon={faSquarePlus} /> Nuevo post
        </Link>
      </header> 

      {renderMain()} 

      <br /><br />

      {/* Pie de la página que contiene enlaces a redes sociales blogger e instagram */}
      <footer className="flex bg-gray-800 justify-center">
        <div className="px-10 py-1">
          <h1 className="text-2xl text-white font-bold px-2 py-3 rounded-full">© alikindoiPhoto 2023 </h1>
        </div>            
        <div className="flex-none hover:bg-yellow-600 text-white py-3 px-5">
          <a href="https://alikindoi07.blogspot.com/" type="button" target="_blank" rel="noreferrer" 
            className="bg-green-500 text-2xl font-bold px-2 py-2">
            < ImBlogger />    
          </a>
        </div>
        <div className="flex-none px-5 py-3 hover:bg-yellow-600 text-white rounded-md">
          <a href="https://www.instagram.com/alikindoiphoto/" type="button" target="_blank" rel="noreferrer">        
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{backgroundColor: '#c13584'}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            </button>       
          </a>
        </div> 
                    
      </footer>  
      {/* Elemento para subir al top de la página */}
      <div>
        <ScrollToTop smooth color="#000" />
        <p style={{ marginTop: "200vh"}}></p>
      </div>              
    </div>    
  )   
}

