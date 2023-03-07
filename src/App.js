import { HomePage, PostFormPage, NotFoundPage } from './pages'
import { Routes, Route } from 'react-router-dom'
import { PostProvider } from './context/postContext'
function App() {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 container'>
        <PostProvider>
          <Routes>
            <Route path = '/' element = { <HomePage />} />
            <Route path = '/new' element = { <PostFormPage />} />
            <Route path = '/posts/:id' element = { <PostFormPage />} />
            <Route path = '*' element = { <NotFoundPage />} />
          </Routes>
        </PostProvider>
        
      </div>      
    </div>    
  )
}

export default App
  