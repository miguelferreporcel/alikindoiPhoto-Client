// Importa Axios que permite hacer peticiones get, post, put, delete...
import axios from 'axios'

/* Al usar un proxy (definido en package.json) evitamos escribir http://localhost:4000 (quedando en '/posts/')
 facilitando el proceso de deploy y cambio de url, nuevo dominio */

/* Función que ejecuta axios para realizar peticiones get al servidor (obtener todos los posts) */
export const getUsersRequest = async () => 
              await axios.get('/users')

/* Función que ejecuta axios para realizar peticiones post al servidor (crear nuevo post)  */
export const createUserRequest = async (user) => {

  /*  Formulario para introducción de datos */
   const form = new FormData()
  
  // Recorre las claves del objeto post y añade su valor
  for (let key in user) {
    form.append(key, user[key]) 
  }
 
  // Retorna la respuesta
  return await axios.post('/users', form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })    
 }  

/* Función que ejecuta axios para realizar peticiones delete al servidor (borrar post por ID) */
export const deleteUserRequest = async id => 
              await axios.delete('/users/' + id)

/* Función que ejecuta axios para realizar peticiones get al servidor (un solo post, editar post por ID) */
export const getUserRequest = async id => 
              await axios.get('/users/' + id)

/* Función que ejecuta axios para realizar peticiones put al servidor (actualizar post por ID) 
 * `/posts/${id}` concatena el id a posts/ */
 export const updateUserRequest = async (id, newFields) =>
              await axios.put(`/users/${id}`, newFields)