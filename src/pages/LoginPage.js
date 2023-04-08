import Logo  from '../assets/logo.gif'
import showPwdImg from '../assets/showPassword.svg'
import hidePwdImg from '../assets/hidePassword.svg'
import { useState } from 'react'
import loginService from '../api/apiLogin'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"

export function LoginPage() {

  // Permite la navegación entre páginas

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

 
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const navigate = useNavigate

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({
      email,
      password
    })
    setUser(user)
    console.log(user)
    setEmail('')
    setPassword('')
    } catch (error) { 
      console.log(error)
    }
      
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" bg-white rounded-lg shadow dark:border dark:bg-zinc-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-3 sm:p-10">
          <form 
            id="formLogin"
            className="space-y-4 md:space-y-6" 
            onSubmit={handleLogin}
          >
            <div className="flex items-center justify-center">
              <img src={Logo} width = "100px" alt="logo" />
            </div>
          
            <div>
              <h1 className="text-5xl text-blue-500 font-bold">alikindoiPhoto</h1>
            </div>
            <div>
              <label 
                htmlFor="user" 
                className="block mb-2 text-xl text-gray-900 dark:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope}  /> Email
              </label>
              <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl 
                rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white hover:bg-gray-500" 
                type="email" 
                id="email"
                value={email}                
                placeholder="example@example.com" 
                onChange={ (e) => setEmail(e.target.value) }
                /* required  */
              />
            </div>
            <div>
              <label 
                htmlFor="password" 
                className="block mb-2 text-xl text-gray-900 dark:text-white"
              >
                <FontAwesomeIcon icon={faLock}  /> Password
              </label>
              <div className="flex items-stretch">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                            p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white hover:bg-gray-500"
                  placeholder="password"
                  type={isRevealPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={ (e) => setPassword(e.target.value) }
                />
                <img
                  width = "60px"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                            p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            hover:bg-gray-500"
                  title={isRevealPassword ? "Hide password" : "Show password"}
                  src={isRevealPassword ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPassword(prevState => !prevState)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="remember" 
                    aria-describedby="remember" 
                    type="checkbox" 
                    className="w-7 h-7 border rounded border-gray-600" 
                    required="" 
                  />
                </div>
                <div className="ml-3 text-xl">
                  <label 
                    htmlFor="remember" 
                    className="text-gray-300"
                  >
                    <FontAwesomeIcon icon={faBell}  /> Recuérdame
                  </label>
                </div>
              </div>                          
            </div>
            <div className="flex flex-col items-center">
              <a 
                href="#" 
                type="button"
                className="w-full text-white bg-red-600 rounded-lg text-xl px-5 py-2.5 
                          text-center dark:hover:bg-red-500"
              >
                Olvidé la contraseña
              </a>
            </div>
            <button 
              type="submit" 
              className="w-full text-white bg-green-600 rounded-lg text-2xl px-5 py-2.5 
                        text-center hover:bg-green-500"
            >
              <FontAwesomeIcon icon={faRightToBracket}  /> Acceder
            </button>
          </form>
          
        </div>
        <div 
          className="text-gray-300 text-xl font-bold text-center py-2 bg-zinc-700 hover:bg-zinc-600 ">
          <Link to='/'>
            <FontAwesomeIcon icon={faRectangleXmark}  /> Cancelar
          </Link>
        </div>
      </div>
    </div>
  )
}