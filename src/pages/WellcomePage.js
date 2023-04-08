import { Link } from "react-router-dom"

export function WellcomePage(){
  const date = new Date()
    const today = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long' }).format(date)
  return(
    <section className="min-h-screen">
      <div className="text-white text-3xl font-bold">
      
      <h1>Welcome! {today}</h1>
        
      </div>
      <div className="text-white text-3xl font-bold">
        <p><Link to="/dash/posts">View Posts</Link></p>
        <p><Link to="/dash/users">View User Settings</Link></p>
      </div>
    </section>
    
  )
}