import { useNavigate } from "react-router-dom"

export function LogoutPage(){

  const navigate = useNavigate();
  const goLogin = () => navigate('/login');

  return (
    <div className="text-white text-2xl flex-grow">
      <h1>Logout</h1>
      <br />
      <p>Succesfully Logout.</p>
      <div className="text-white text-2xl flex-grow">
        <button onClick={goLogin}>Go To Login</button>
      </div>
    </div>
  )
}