import { Link } from "react-router-dom"
import Logo  from '../assets/logo.gif'

export function DashHeader() {
  return(
    <nav className="flex items-center justify-center flex-wrap bg-gray-800 p-3 border-b sticky top-0">
      <Link 
        className="flex items-center flex-shrink-0 text-white mr-20" 
        to = '/'
      >
        <img src={Logo} width = "70px" alt="logo" />
        <span className="hover:shadow-lg hover:shadow-white/50 font-bold  text-2xl tracking-tight">alikindoiPhoto</span>
      </Link>
      <div className="w-full block justify-flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl text-white font-semibold lg:flex-grow">
          <Link className="mr-7 ml-4 hover:shadow-lg hover:shadow-white/70" to='/login'>Login </Link>
          <Link className="mr-7 ml-0 hover:shadow-lg hover:shadow-white/70" to='/logout'>Logout </Link>
          <Link className="mr-7 hover:shadow-lg hover:shadow-white/70" to='/links'>Links </Link>
          <Link className="hover:shadow-lg hover:shadow-white/70"to='/dash/admin'>Admin </Link>
        </div>
      </div>
    </nav>
  )
}