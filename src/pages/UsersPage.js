// Importa el contexto creado
import { useUsers } from "../context/userContext"

// Importa módulo para insertar el icono de pantalla vacía
import { VscEmptyWindow } from 'react-icons/vsc'

// Importa el componente Link que permite crear enlaces en distintos componentes de nuestra aplicación
import { Link } from 'react-router-dom'

// Importa funciones y diseño de las cards (tarjetas o fichas de los posts)
import { UsersCard } from "../components/UsersCard"

// Importa ScrollToTop Componente que permite crear un acceso a la parte superior de las páginas 
import ScrollToTop from "react-scroll-to-top"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { faImage } from "@fortawesome/free-solid-svg-icons"



export function UsersPage () {

  const { users } = useUsers()
  
  const renderMain = () => {
    
    /* Si no hay posts... */
    if (users.length === 0) return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">No existe ningún usuario</h1>
      </div>
    )

    return(
      /* Función que recorre y muestra los posts creados y guardados a partir de la clave _id*/
      <div className="grid grid-cols-2 py-2 gap-4">
        {users.map(user => (          
           <UsersCard user = { user } key = { Math.random() } />
         ))}           
      </div>
    )      
  }

  return (
    <div className="py-4">    
    {/* Cabecera de la página: Muestra número de posts y enlace a crear nuevo post*/}
      <header className="flex justify-around w-full py-2">
        <h1 
          className="text-2xl text-gray-300 font-bold"
        >
          <FontAwesomeIcon icon={faImage} /> Usuarios 
          ({(users.length)}) 
        </h1>
        <Link 
          to = '/dash/newUser' 
          className=" text-gray-300 text-2xl font-bold rounded-md hover:shadow-lg hover:shadow-white/70"
        >
        <FontAwesomeIcon icon={faSquarePlus} /> Nuevo Usuario
        </Link>
      </header> 

      {renderMain()} 

        
      {/* Elemento para subir al top de la página */}
      <div>
        <ScrollToTop smooth color="#000" />
        <p style={{ marginTop: "200vh"}}></p>
      </div>              
    </div>    
  )   
}