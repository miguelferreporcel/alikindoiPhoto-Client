import { Link } from "react-router-dom"
import Logo  from '../assets/logo.gif'

export function DashHeader() {
  return(
    <nav className="flex items-center justify-center flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Logo} width = "70px" alt="logo" />
        <span className="font-bold text-gray-900 text-2xl tracking-tight">alikindoiPhoto</span>
      </div>
      <div className="w-full block justify-flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl font-semibold lg:flex-grow">
          <Link to='/login'>Login </Link>
          <Link to='/logout'>Logout </Link>
          <Link to='/links'>Links </Link>
          <Link to='/admin'>Admin </Link>
        </div>
      </div>
    </nav>
  )
}