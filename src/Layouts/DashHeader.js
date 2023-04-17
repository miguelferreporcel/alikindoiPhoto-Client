import { Link } from "react-router-dom"
import Logo  from '../assets/logo.gif'

export function DashHeader() {
  return(
    <nav className="flex items-center justify-center flex-wrap bg-gray-800 p-3 border-b sticky top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-20">
        <img src={Logo} width = "70px" alt="logo" />
        <span className="font-bold  text-2xl tracking-tight">alikindoiPhoto</span>
      </div>
      <div className="w-full block justify-flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl text-white font-semibold lg:flex-grow ">
          <Link className="mr-7 ml-4" to='/login'>Login </Link>
          <Link className="mr-7 ml-0" to='/logout'>Logout </Link>
          <Link className="mr-7" to='/links'>Links </Link>
          <Link to='/dash/admin'>Admin </Link>
        </div>
      </div>
    </nav>
  )
}