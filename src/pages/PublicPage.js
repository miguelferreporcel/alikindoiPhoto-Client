import { Link } from "react-router-dom"

export function PublicPage(){
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-white text-6xl font-bold">
        <p>Public Page!</p><br />
        <Link to="/login" className="bg-slate-800">
          Go To Login
        </Link>
      </div>
    </div>
  );
}