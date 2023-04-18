import { Link, useNavigate } from "react-router-dom"
// Módulo para mostrar notificaciones emergentes
import toast from 'react-hot-toast'
import avatarChico1 from '../assets/avatarChico1.png'
// Importa el contexto
import { useUsers } from '../context/userContext'
// Importa módulos para crear y usar efectos y estados
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function AccountPage(/* { user } */){

  // Función importada del contexto
  const { deleteUser } = useUsers()
  // Permite la navegación entre páginas
  const navigate = useNavigate()

  const handleDelete = (id) => {
    toast((t) => (
        <div>
            <p className='text-white'>Estás seguro de Eliminar el usuario? </p>
            <br />
            <div className='flex col justify-center py-3'>   
                {/* Al pulsar el botnón elimina el usuario y desaparece  */}                  
                <button 
                    className='bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2'
                    onClick={() => {
                       deleteUser(id)
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

  return(
    <section className="m-auto max-w-screen-sm min-h-screen rounded overflow-hidden shadow-lg py-12">
      <div className="m-auto w-3/4 h-auto border-2">
        <div className="flex justify-center p-4 ">
          <img
            className="rounded-full object-cover" 
            src={avatarChico1} 
            alt="avatar1" 
            width = "120px" />
        </div>
        <div className="px-3 py-4 ">
          <div className="text-l mb-2 text-gray-200 border-y-2 p-2">
            <p>
              <b>Nombre: </b>
            </p>
            <p className="text-center">{/* {user.name} */}name</p>
          </div><br />
          <div className="text-l mb-2 text-gray-200 border-y-2 p-2">
            <p><b>Email: </b>
            </p>
            <p className="text-center">{/* {user.email} */}email</p>
          </div><br />
          <div className="text-l mb-2 text-gray-200 border-y-2 p-2">
            <p><b>Rol: </b></p>
            <p className="text-center">{/* {user.roles} */}rol</p>
          </div>
          <br />
          <div className="flex justify-around">
            <button 
              className="bg-yellow-600 text-white text-sm px-2 py-1 rounded-sm hover:shadow-lg
                         hover:shadow-white/70"
              /* onClick={() => navigate(`/dash/users/${user._id}`)} */
            >
              <FontAwesomeIcon icon={faPenToSquare} /> Editar
            </button>

            {/* Al pulsar Delete llama a la función handledelete que lanza el toast y completa la acción */}
            <button 
              className="bg-red-600 text-white text-sm px-2 py-1 rounded-sm hover:shadow-lg
                         hover:shadow-white/70"
              onClick={(e) => {
                e.stopPropagation()
               /*  handleDelete(user._id) */
              }}
            >
              <FontAwesomeIcon icon={faTrash} /> Eliminar
            </button>
          </div>
        </div>
      </div>
    </section>
    
  )
}