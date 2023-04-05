// Importa Axios que permite hacer peticiones get, post, put, delete...
import axios from 'axios'

const login = async credentials => {
  const { data } = await axios.post('/signin', credentials)
  
  return data
}

export default { login }