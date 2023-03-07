import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { usePosts } from '../context/postContext'
import { useNavigate } from 'react-router-dom';
export function PostFormPage () {
  const { createPost } = usePosts()
  const navigate = useNavigate()
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          description: ''
        }}

        /* Validar los datos introducidos y asegurar su inserción en el formulario*/
        validationSchema = { Yup.object({
          title: Yup.string().required('Título es requerido'),
          description: Yup.string().required('Descripción es requerida')
        })}

        onSubmit= { async (values, actions) => {
          await createPost(values) 
          navigate('/')
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={ handleSubmit }>
            
                <Field  name = 'title' 
                        placeholder = "título" 
                        className = 'px-3 focus:outline-none rounded bg-gray-600 text-white w-full mb-4'
                />
                <ErrorMessage component="p" className='text-red-400 text-sm' name = 'title' />

                <Field
                        component = "textarea"
                        name = 'description' 
                        placeholder = "descripción" 
                        className = 'px-3 focus:outline-none rounded bg-gray-600 text-white w-full'
                        rows = {3}
                />
                <ErrorMessage component="p" className='text-red-400 text-sm' name = 'description' />

              {/* Botón que envía el formulario */}
              <button type = "submit" className='text-white'>Guardar</button>
                
          </Form>
        )}
        
      </Formik>
    </div>
  )
}