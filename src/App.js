/* Importa el componente PostProvider, cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto. */
import { PostProvider } from './context/postContext'
import { UserProvider } from './context/userContext'

// Importa el componente Toaster empleado para implementar notificaciones al realizar acciones
import { Toaster } from 'react-hot-toast'
import { AppRouter } from './router/AppRouter'

// Definición de rutas de todas las páginas
function App() {
  
  return (
    <div className='bg-neutral-900 min-h-fit min-w-fit'>
      <UserProvider>
        <PostProvider>          
            <AppRouter />
            {/* Notificación en principio oculta */}
            <Toaster />                   
        </PostProvider>
      </UserProvider>      
    </div>    
  )
}

export default App
  