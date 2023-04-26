import { useNavigate, Link } from "react-router-dom"
import { useContext } from "react"
import authContext from "../context/AuthProvider" 

export function WellcomePage(){
  const date = new Date()
  const today = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long' }).format(date)
  const { setAuth } = useContext(authContext);
  const navigate = useNavigate();
  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});
    navigate('/');
}
  return(
    <section className="min-h-screen">
      <div className="text-white text-3xl font-bold">
      
      <h1>Welcome!</h1>
      <h1>{today}</h1>
        
      </div>
      <div className="text-white text-3xl font-bold">
        <p><Link to="/dash/posts">View Posts</Link></p>
      </div>
      <div className="text-white text-3xl font-bold">
        <p><Link to="/dash/account/">Profile</Link></p>
      </div>
      <div className="text-white text-3xl font-bold">
        <button onClick={logout}>Sign Out</button>
      </div>

    </section>
    
  )
}