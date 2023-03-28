import Logo  from '../assets/logo.gif'
import showPwdImg from '../assets/showPassword.svg'
import hidePwdImg from '../assets/hidePassword.svg'
import { useState } from 'react'
export function LoginPage() {

  // Permite la navegación entre páginas

  const [loggedIn, setLoggedIn] = useState("false")
  const [userName, setUserName] = useState("")
  const [pass, setPass] = useState("")
  
  const [isPassVisible, setIsPassVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPassVisible((prevState) => !prevState);
  }

 
  const [isRevealPass, setIsRevealPass] = useState(false);

  const handleSubmit =  (e) => {
    e.preventDefault()
    if(userName === "" || pass === "") {
      alert("Usuario y Contraseña son requeridos")
    }else if(userName === "admin" && pass === "alikindoi"){
      setLoggedIn(true)
      console.log('User: '+ userName + ' Pass: '+ pass)  
    }else {
      setLoggedIn(false)
      
      console.log('User: ' + userName  + ' Pass: ' + pass) 
      alert("El usuario y/o la contraseña no son válidos") 
    }
      
  }

  return (
    <div className="flex items-center justify-center min-w-full">
      <div className=" bg-white rounded-lg shadow dark:border dark:bg-zinc-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-3 sm:p-10">
          <form 
            id="formLogin"
            className="space-y-4 md:space-y-6" 
            onSubmit={handleSubmit}
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
                Usuario
              </label>
              <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl 
                rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white hover:bg-gray-500" 
                type="text" 
                id="userName"
                value={userName}                
                placeholder="Usuario" 
                onChange={ (e) => setUserName(e.target.value) }
                /* required  */
              />
            </div>
            <div>
              <label 
                htmlFor="password" 
                className="block mb-2 text-xl text-gray-900 dark:text-white"
              >
                Contraseña
              </label>
              <div className="flex items-stretch">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                            p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white hover:bg-gray-500"
                  placeholder="Contraseña"
                  type={isRevealPass ? "text" : "password"}
                  id="pass"
                  value={pass}
                  onChange={ (e) => setPass(e.target.value) }
                />
                <img
                  width = "60px"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                            p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            hover:bg-gray-500"
                  title={isRevealPass ? "Hide password" : "Show password"}
                  src={isRevealPass ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPass(prevState => !prevState)}
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
                    Recuérdame
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
              Acceder
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}