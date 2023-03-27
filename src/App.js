// Importa las funciones que definen las páginas
import { HomePage, PostFormPage, NotFoundPage, LoginPage } from './pages'

//

// Importa Componentes Routes y Route para definir y crear rutas
import { Routes, Route } from 'react-router-dom'

/* Importa el componente PostProvider, cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto. */
import { PostProvider } from './context/postContext'

// Importa el componente Toaster empleado para implementar notificaciones al realizar acciones
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { AppRouter } from './router/AppRouter'

// Definición de rutas de todas las páginas
function App() {
  
  return (
    <div className='bg-neutral-900 min-h-screen  flex items-center'>
      <div className='pxcontainer m-auto px-6'>
        <PostProvider>
           {/**Definición de las rutas */}
           <AppRouter />
            {/* Notificación en principio oculta */}
            <Toaster />
        </PostProvider>        
      </div>      
    </div>    
  )
}

export default App
  