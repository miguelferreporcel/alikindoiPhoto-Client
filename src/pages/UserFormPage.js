/* Importa componentes para crear formularios, se acompaña de Yup. 
ErrorMessage permite visualizar errores personalizados a partir de validationSchema*/
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Importa el contexto
import { useUsers } from '../context/userContext'

/* Importa componentes para navegar entre las páginas del proyecto sin refrescar,
  */
import { useNavigate, useParams, Link } from 'react-router-dom'

// Importa módulos para crear y usar efectos y estados
import { useEffect, useState } from 'react'

// Importa el icono de loading al cargar una publicación
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export function UserFormPage () {
  const { createUser, getUser, updateUser } = useUsers()
  const navigate = useNavigate()
  const params = useParams()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    roles: ''
  })

/*   Si params contiene ID ejecutará getPost (obtener un único post) con el id indicado y lo guarda en el estado 'post' declarado en la límea 23 */
useEffect(() => {
  (async() => {
    if (params.id) {
      const user = await getUser(params.id)
/*       if(user.roles == "6425d92d0bef666a230851be") user.roles = "admin"
      if(user.roles == "6425d92d0bef666a230851bc") user.roles = "user" */
      setUser(user)
    }      
  })()
}, [params.id])

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-zinc-800 p-10 shadow-md shadow-black'>
        <header className='flex justify-between items-center py-4 text-white'>
          <h3 className='text-xl'>
            Usuario
          </h3>
          <Link to= '/dash/users' className='bg-red-700 text-white font-bold hover:bg-red-500 px-2 py-2'>
            Cancelar
          </Link>
        </header>

        {/* Creación del formulario */} 
        <Formik

          /* Los valores iniciales los contiene el estado 'post' declarado en la línea 23*/
          initialValues={user}        

          /* Validar los datos introducidos y asegurar su inserción en el formulario*/
          validationSchema = { Yup.object({
            username: Yup.string()
              .required('El username es requerido'),
            email: Yup.string()
              .required('El email es requerido')
              .email('Email no válido'),
            password: Yup.string()
              .min(5, `Mínimo 5 caracteres`) 
              .nullable(true)
              .required('La contraseña es requerida'),
            Roles: Yup.string()
              /* .required('El rol es requerido') */
          })}

          /* Al enviar recibe values (valores introducidos) y actions(updatePosts, createPosts) 
          * Si la petición contiene un Id es que se quiere actualizar un post, si no se requiere crear un nuevo post
          * Al finalizar redirige a la página inicial ('/')
          * enableReinitialize -> 
          */
          onSubmit= { async (values, actions) => {
            if (params.id) {
              await updateUser(params.id, values)
            } else {
              await createUser(values)
            }
            // Al acabar de enviar se pasa a false para que no muestre la animación de carga de post
            actions.setSubmitting(false) 
            navigate('/dash/users')
          }}

          /* Controla si se tiene que restablecer el formulario si cambia initialValues
           * Permitirá mostrar los valores de un post al pulsar en editar y así poder modificarlos */
          enableReinitialize
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={ handleSubmit }>
              <label  
                htmlFor='username'
                className='text-sm block font-bold text-gray-400'
              >
                Nombre
              </label>
                  <Field  name = 'username' 
                          placeholder = "nombre" 
                          className = 'px-3 focus:outline-none rounded bg-gray-300 text-black w-full mb-5'
                  />
                  <ErrorMessage component="p" className='text-red-400 text-sm' name = 'username' />
              <label  
                htmlFor='email'
                className='text-sm block font-bold text-gray-400'
              >
                Email
              </label>
                  <Field
                    name = 'email' 
                    placeholder = "example@example.com" 
                    className = 'px-3 focus:outline-none rounded bg-gray-300 text-black w-full mb-3'
                  />
                  <ErrorMessage 
                    component="p" 
                    className='text-red-400 text-sm' 
                    name = 'email' 
                  />
              <label  
                htmlFor='password'
                className='text-sm block font-bold text-gray-400'
              >
                Contraseña
              </label>
                  <Field  
                    name = 'password'
                    type = 'password'
                    placeholder = '**********'
                    className = 'px-3 focus:outline-none rounded bg-gray-300 text-black w-full mb-5'
                  />
                  <ErrorMessage component="p" className='text-red-400 text-sm' name = 'password' />
              <label  
                htmlFor='roles'
                className='text-sm block font-bold text-gray-400'
              >
                Rol
              </label>
                  <Field  name = 'roles' 
                          type = 'text'
                          placeholder = "user / admin" 
                          className = 'px-3 focus:outline-none rounded bg-gray-300 text-black w-full mb-5'
                  />
                  <ErrorMessage component="p" className='text-red-400 text-sm' name = 'rol' />
                  <h2 className='text-gray-400'>_id:"6425d92d0bef666a230851be", name:"admin"</h2>
                  <h2 className='text-gray-400'>_id:"6425d92d0bef666a230851bc", name:"user"</h2>
              
              {/* Botón que envía el formulario, si está enviando muestra la animación de carga */}
              <button type = "submit" 
                className='bg-green-600 hover:bg-green-500 px-4 py-2 rounded mt-2 text-white
                          font-bold focus:outline-none'
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className='animate-spin h-5 w-5' />
                ) : 'Guardar'}
              </button>                  
            </Form>
          )}          
        </Formik>
      </div>
    </div>
  )
}