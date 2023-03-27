// Importa las funciones que definen las páginas
import { HomePage, PostFormPage, NotFoundPage, LoginPage } from '../pages'

// Importa Componentes Routes y Route para definir y crear rutas
import { Routes, Route } from 'react-router-dom'

// Importa el componente para dar acceso a las rutas privadas
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <Routes>
      {/* react pide que las rutas estén dentro de un <BrowserRouter /> esto se hace en index.js 
       * <BrowserRouter> <App /> </BrowserRouter>
       */}
            
      <Route path='/' element = { <LoginPage />} />
          
          <Route path = '/home' element = { <HomePage />} />
          <Route path = '/new' element = { <PostFormPage />} />
          <Route path = '/posts/:id' element = { <PostFormPage />} />      
     
      <Route path = '*' element = { <NotFoundPage />} />

            
            
    </Routes>
  )
}
