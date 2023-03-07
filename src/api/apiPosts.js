// Importa Axios que permite hacer peticiones get, post, put, delete...
import axios from 'axios'

/* Al usar un proxy (definido en package.json) evitamos escribir http://localhost:4000 (quedando en '/posts/')
 facilitando el proceso de deploy y cambio de url, nuevo dominio */

/* Función que ejecuta axios para realizar peticiones get al servidor (obtener todos los posts) */
export const getPostsRequests = async () => 
              await axios.get('/posts')

