// Importa las funciones que definen las páginas
import { HomePage, PostFormPage, NotFoundPage } from './pages'

// Importa Componentes Routes y Route para definir y crear rutas
import { Routes, Route } from 'react-router-dom'

/* Importa el componente PostProvider, cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto. */
import { PostProvider } from './context/postContext'

// Importa el componente Toaster empleado para implementar notificaciones al realizar acciones
import { Toaster } from 'react-hot-toast'

// Definición de rutas de todas las páginas
function App() {
  return (
    <div className='bg-neutral-900 min-h-screen  flex items-center'>
      <div className='pxcontainer m-auto px-6'>
        <PostProvider>
          <Routes>

            {/* react pide que las rutas estén dentro de un <BrowserRouter /> esto se hace en index.js 
            * <BrowserRouter> <App /> </BrowserRouter>
          */}
            <Route path = '/' element = { <HomePage />} />
            <Route path = '/new' element = { <PostFormPage />} />
            <Route path = '/posts/:id' element = { <PostFormPage />} />
            <Route path = '*' element = { <NotFoundPage />} />
          </Routes>
          {/* Notificación en principio oculta */}
          <Toaster />
        </PostProvider>        
      </div>      
    </div>    
  )
}

export default App
  