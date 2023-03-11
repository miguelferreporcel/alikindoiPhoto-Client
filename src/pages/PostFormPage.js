import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { usePosts } from '../context/postContext'
import { useNavigate, useParams, Link } from 'react-router-dom'

// Importa módulos para crear y usar efectos y estados
import { useEffect, useState } from 'react'

export function PostFormPage () {
  const { createPost, getPost } = usePosts()
  const navigate = useNavigate()
  const params = useParams()
  const [post, setPost] = useState({
    title: '',
    description: '',
    image: null
  })

/*   Si params contiene ID ejecutará getPost (obtener un único post) con el id indicado y lo guarda en el estado 'post' declarado en la límea 23 */
  useEffect(() => {
    (async() =>{
      if (params.id) {
        const post = await getPost(params.id)
        setPost(post)
      }      
    })()
  }, [params.id])

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-zinc-800 p-10 shadow-md shadow-black'>
        <header className='flex justify-between items-center py-4 text-white'>
          <h3 className='text-xl'>
            Nuevo Post
          </h3>
          <Link to= '/' className='bg-red-700 text-white font-bold hover:bg-red-500 px-2 py-2'>
            Cancelar
          </Link>
         </header>
        <Formik
          initialValues={post}        

          /* Validar los datos introducidos y asegurar su inserción en el formulario*/
          validationSchema = { Yup.object({
            title: Yup.string().required('Título es requerido'),
            description: Yup.string().required('Descripción es requerida')
          })}

          onSubmit= { async (values, actions) => {
            await createPost(values) 
            navigate('/')
          }}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <Form onSubmit={ handleSubmit }>
              <label  
                htmlFor='title'
                className='text-sm block font-bold text-gray-400'
              >
                Título
              </label>
                  <Field  name = 'title' 
                          placeholder = "título" 
                          className = 'px-3 focus:outline-none rounded bg-gray-600 text-white w-full mb-4'
                  />
                  <ErrorMessage component="p" className='text-red-400 text-sm' name = 'title' />
              <label  
                htmlFor='description'
                className='text-sm block font-bold text-gray-400'
              >
                Descripciónn
              </label>
                  <Field
                    component = "textarea"
                    name = 'description' 
                    placeholder = "descripción" 
                    className = 'px-3 focus:outline-none rounded bg-gray-600 text-white w-full'
                    rows = {3}
                  />
                  <ErrorMessage component="p" className='text-red-400 text-sm' name = 'description' />

                {/* Botón que envía el formulario */}
                <button type = "submit" 
                  className='bg-green-600 hover:bg-green-500 px-4 py-2 rounded mt-2 text-white
                            font-bold focus:outline-none'
                >
                  Guardar
                </button>
                  
            </Form>
          )}
          
        </Formik>
      </div>
    </div>
  )
}