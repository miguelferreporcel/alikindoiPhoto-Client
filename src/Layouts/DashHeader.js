import { Link } from "react-router-dom"
import Logo  from '../assets/logo.gif'
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export function DashHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-30">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
              <Link className="flex-shrink-0 text-white flex items-center m-10">
                <img
                  className="h-8 w-8"
                  src={Logo} width = "70px" alt="logo"
                />
                <span 
                  className="hover:shadow-lg hover:shadow-white/50 font-bold  text-2xl tracking-tight"
                >
                  alikindoiPhoto
                </span>
                
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <Link
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md font-semibold  text-xl"
                    to='/login'
                  >
                    Login
                  </Link> */}

                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md 
                              font-semibold  text-xl"
                    to='/logout'
                  >
                    Logout
                  </Link>

                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md 
                              font-semibold  text-xl"
                    to='/dash/links'
                  >
                    Links
                  </Link>

                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md 
                              font-semibold  text-xl"
                    to='/dash/admin'
                  >
                    Admin
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base 
                            font-medium"
                  to='/login'
                >
                  Login
                </Link>

                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 
                            rounded-md text-base font-medium"
                  to='/logout'
                >
                  Logout
                </Link>

                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 
                            rounded-md text-base font-medium"
                  to='/links'
                >
                  Links
                </Link>

                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 
                            rounded-md text-base font-medium"
                  to='/dash/admin'
                >
                  Admin
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );

}