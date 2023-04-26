/* Importa el componente PostProvider, cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto. */
import { PostProvider } from './context/postContext'
import { UserProvider } from './context/userContext'
import { AuthProvider } from './context/authContext'

// Importa el componente Toaster empleado para implementar notificaciones al realizar acciones
import { Toaster } from 'react-hot-toast'
import { AppRouter } from './router/AppRouter'

// Definición de rutas de todas las páginas
function App() {
  
  return (
    <div className='bg-neutral-900 h-auto w-auto'>
      <AuthProvider>
        <UserProvider>
          <PostProvider>          
            <AppRouter />
            <Toaster />                   
          </PostProvider>
        </UserProvider>   
      </AuthProvider>
         
    </div>    
  )
}

export default App
  