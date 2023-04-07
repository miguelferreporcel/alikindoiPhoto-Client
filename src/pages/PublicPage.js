import { Link } from "react-router-dom"

export function PublicPage(){

  return(
    <section className="min-h-screen">
      <div className="text-white text-3xl font-bold">
      
      <h1>Welcome!</h1>
        
      </div>
      <div className="text-white text-3xl font-bold">
        <Link to='/login'>Go To Login</Link>
      </div>
    </section>
    
  )
}