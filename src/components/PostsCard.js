// Módulo para mostrar notificaciones emergentes
import toast from 'react-hot-toast'

// Función del contexto
import { usePosts } from '../context/postContext'

// Módulo para la navegación entre páginas de la aplicación
import { useNavigate } from 'react-router-dom' 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

// Función que recibe un objeto post para poder mostrarlo (post.title, post.description...)
export function PostCard ({ post }) {

  const [showImage, setShowImage] = useState(false);

  const handleClickImage = () => {
    setShowImage(true);
  };

  const handleClose = () => {
    setShowImage(false);
  };

    // Función importada del contexto
    const { deletePost } = usePosts() 

    // Permite la navegación entre páginas
    const navigate = useNavigate()

    /* Lanza la función toast que muestra notificación para confirmar o cancelar la acción de eliminar 
     * Recibe el id del post para poder eliminarlo */
    const handleDelete = (id) => {
        toast((t) => (
            <div>
                <p className='text-white'>Estás seguro de Eliminar el post? </p>
                <br />
                <div className='flex col justify-center py-3'>   
                    {/* Al pulsar el botnón elimina el post y desaparece  */}                  
                    <button 
                        className='bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2'
                        onClick={() => {
                           deletePost(id)
                           toast.dismiss(t.id)
                        }}
                        > 
                        Eliminar
                    </button>

                    {/* Al pulsar el botón desaparece la notificación  */}
                    <button 
                        className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2'
                        onClick={() => toast.dismiss(t.id)}>
                        Cancelar
                    </button>
                </div>
            </div>
        ), {
            style: {
                background: "#202020"
            }
        })
    }

    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div className="bg-gray-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700">
            <div className="px-4 py-7">
                <div className="flex justify-end gap-3">

                    {/* Al pulsar edit reditige a posts y muestra (reutiliza) el formulario de crear post  para modificar datos del post con el id especificado */}
                    <button 
                        className="bg-yellow-600 text-sm px-2 py-1 rounded-sm hover:shadow-lg hover:shadow-white/70"
                        onClick={() => navigate(`/dash/posts/${post._id}`)}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} /> Editar
                    </button>

                    {/* Al pulsar Delete llama a la función handledelete que lanza el toast y completa la acción */}
                    <button 
                        className="bg-red-600 text-sm px-2 py-1 rounded-sm hover:shadow-lg hover:shadow-white/70"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleDelete(post._id)
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                </div> 
                 <div className="flex justify-start">
                    <h3>
                       { post.title } 
                    </h3>
                </div>                            
                <p>{ post.description }</p>                   
            </div> 
            
            <div className='hover:cursor-pointer '>
               {post.image && <img src={post.image.url}  alt= "img" className="w-3/4 h-3/4 m-auto py-6" 
                    onClick={handleClickImage}/>}                             
            </div>
            
            {showImage && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-100 flex justify-center items-center"
                    onClick={handleClose}
                >
                    <img src={post.image.url} alt="img" className="max-w-full max-h-full" />
                </div>
            )}
                               
        </div>
    )
}