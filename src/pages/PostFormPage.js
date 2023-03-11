/* Importa componentes para crear formularios, se acompaña de Yup. 
ErrorMessage permite visualizar errores personalizados a partir de validationSchema*/
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Importa el contexto
import { usePosts } from '../context/postContext'

/* Importa componentes para navegar entre las páginas del proyecto sin refrescar,
  */
import { useNavigate, useParams, Link } from 'react-router-dom'

// Importa módulos para crear y usar efectos y estados
import { useEffect, useState } from 'react'

// Importa el icono de loading al cargar una publicación
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export function PostFormPage () {
  const { createPost, getPost, updatePost } = usePosts()
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
            Post
          </h3>
          <Link to= '/' className='bg-red-700 text-white font-bold hover:bg-red-500 px-2 py-2'>
            Cancelar
          </Link>
        </header>

        {/* Creación del formulario */} 
        <Formik

          /* Los valores iniciales los contiene el estado 'post' declarado en la línea 23*/
          initialValues={post}        

          /* Validar los datos introducidos y asegurar su inserción en el formulario*/
          validationSchema = { Yup.object({
            title: Yup.string().required('Título es requerido'),
            description: Yup.string().required('Descripción es requerida'),
            image: Yup.mixed().nullable(true).required("La imagen es requerida") 
            //mixed() indica que se aceptaran todos los tipos y el nullable indica que como la imagen fue marcada como null desde un principio entonces tratara de manejar si es anuable o no mediante los booleanos true y false
          })}

          /* Al enviar recibe values (valores introducidos) y actions(updatePosts, createPosts) 
          * Si la petición contiene un Id es que se quiere actualizar un post, si no se requiere crear un nuevo post
          * Al finalizar redirige a la página inicial ('/')
          * enableReinitialize -> 
          */
          onSubmit= { async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values)
            } else {
              await createPost(values)
            }
            // Al acabar de enviar se pasa a false para que no muestre la animación de carga de post
            actions.setSubmitting(false) 
            navigate('/')
          }}

          /* Controla si se tiene que restablecer el formulario si cambia initialValues
           * Permitirá mostrar los valores de un post al pulsar en editar y así poder modificarlos */
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
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
              <label 
                htmlFor='image'
                className='text-sm block font-bold text-gray-400'
              >
                Imágen
              </label>
              <input type='file' 
                name='image' 
                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
                onChange={(e) => setFieldValue('image', e.target.files[0])}
              />
              <ErrorMessage component="p" className='text-red-400 text-sm' name = 'description' />
              
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