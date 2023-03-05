// Importa Axios que permite hacer peticiones get, post, put, delete...
import axios from 'axios'

/* Al usar un proxy (definido en package.json) evitamos escribir http://localhost:4000 (quedando en '/posts/')
 facilitando el proceso de deploy y cambio de url, nuevo dominio */

/* Función que ejecuta axios para realizar peticiones get al servidor (obtener todos los posts) */
export const getPostsRequests = async () => 
              await axios.get('/posts')

/* Función que ejecuta axios para realizar peticiones post al servidor (crear nuevo post)  */
export const createPostsRequests = async (post) => {

 /*  Formulario para introducción de datos */
  const form = new FormData()
  
  for (let key in post) {
    form.append(key, post[key]) 
  }

  return await axios.post('/posts', form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })    
}

/* Función que ejecuta axios para realizar peticiones delete al servidor (borrar post por ID) */
export const deletePostRequests = async id => 
              await axios.delete('/posts/' + id)

/* Función que ejecuta axios para realizar peticiones get al servidor (un solo post, editar post por ID) */
export const getPostRequests = async id => 
              await axios.get('/posts/' + id)

/* Función que ejecuta axios para realizar peticiones put al servidor (actualizar post por ID) 
 * `/posts/${id}` concatena el id a posts/ */
export const updatePostRequests = async (id, newFields) =>
              await axios.put(`/posts/${id}`, newFields)