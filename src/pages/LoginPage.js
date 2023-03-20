import Logo  from '../assets/logo.gif'
import showPwdImg from '../assets/showPassword.svg'
import hidePwdImg from '../assets/hidePassword.svg'
import { HomePage } from './HomePage'
import { useState } from 'react'

export function LoginPage() {

  const [MyLogin, setMyLogin] = useState("false")
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    let txtUser = document.getElementById("user").value
    let txtPass = document.getElementById("pass").value
    if(txtUser.length === 0 || txtPass.lenght === 0) {
      alert("Usuario y Contraseña son requeridos")
      console.log('User: ' + txtUser + ' Pass: ' + txtPass)
    }else{
      if(txtUser === "admin" && txtPass === "alikindoi"){
        setMyLogin("true")
        /* document.getElementById("formLogin").style.display = "none" */
        console.log('User: ' + txtUser + ' Pass: ' + txtPass)
      }else{
        console.log('User: ' + txtUser + ' Pass: ' + txtPass)
        setMyLogin("false")
        alert("El usuario y/o la contraseña no son válidos")
        document.getElementById("user").value = ""
        document.getElementById("pass").value = ""
        document.getElementById("user").focus()
      }
    }
  }
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className=" bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p- 
                     dark:bg-zinc-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-3 sm:p-10">
          <form 
            id="formLogin"
            className="space-y-4 md:space-y-6" 
            action="#"
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
                type="text" 
                id="user"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl 
                          rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                          w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                          dark:text-white hover:bg-gray-500" 
                placeholder="Usuario" 
                onChange={ (e) => setUser(e.target.value) }
                required 
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
                  id='pass'
                  name="pwd"
                  placeholder="*********"
                  type={isRevealPwd ? "text" : "password"}
                  value={pwd}
                  onChange={e => setPwd(e.target.value)}
                />
                <img
                  width = "60px"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                            p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            hover:bg-gray-500"
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd(prevState => !prevState)}
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
              onClick={
                handleSubmit
              }
            >
              Acceder
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

