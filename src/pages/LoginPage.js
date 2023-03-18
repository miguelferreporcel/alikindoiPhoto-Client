export function LoginPage() {
  return (
    
      <div className="flex flex-col items-center justify-center ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div>
                  <h1 className="text-6xl text-blue-500">alikindoiPhoto</h1>
                </div>
                  <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl         dark:text-white">
                      Accede a tu cuenta
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label 
                            htmlFor="email" 
                            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                          >
                            Email
                          </label>
                          <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="ejemplo@ejemplo.com" 
                            required="" 
                          />
                      </div>
                      <div>
                          <label 
                            htmlFor="password" 
                            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                          >
                            Contraseña
                          </label>
                          <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" 
                          />
                      </div>
                      <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input 
                                  id="remember" 
                                  aria-describedby="remember" 
                                  type="checkbox" 
                                  className="w-7 h-7 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" 
                                />
                              </div>
                              <div className="ml-3 text-xl">
                                <label 
                                  htmlFor="remember" 
                                  className="text-gray-500 dark:text-gray-300"
                                >
                                  Recuerdame
                                </label>
                              </div>
                          </div>                          
                        </div>
                        <div>
                            <a href="#" 
                            className="text-xl font-medium text-white text-primary-600 dark:hover:bg-indigo-700 dark:text-primary-500"
                          >
                            Forgot password?
                          </a>
                          </div>
                          
                      <button 
                        type="submit" 
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-red-700 dark:focus:ring-primary-800"
                      >
                        Sign in
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}

