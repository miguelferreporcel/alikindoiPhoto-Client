import { Link } from "react-router-dom"
// Función del contexto
import { useUsers } from '../context/userContext'

// Módulo para la navegación entre páginas de la aplicación
import { useNavigate } from 'react-router-dom' 

export function WellcomePage({ user }){
  const date = new Date()
  const today = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long' }).format(date)
  const { users } = useUsers()
  
  return(
    <section className="min-h-screen">
      <div className="text-white text-3xl font-bold">
      
      <h1>Welcome! {today}</h1>
        
      </div>
      <div className="text-white text-3xl font-bold">
        <p><Link to="/dash/posts">View Posts</Link></p>
      </div>
      <div className="text-white text-3xl font-bold">
        <p><Link to="/dash/account/">Profile</Link></p>
      </div>
    </section>
    
  )
}