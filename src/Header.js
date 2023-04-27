import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  function abouutMe(){
    navigate('/aboute')
  }
  function contactMe(){
    navigate('/contact')
  }

  return (
    <div>
        {/* <!-- Header section --> */}
    <header className="text-gray-600 body-font">
      <div
        className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span className="ml-3 text-xl">Saddam Hussain</span>
        </a>
//         <nav
//           className="md:ml-auto flex flex-wrap items-center text-base justify-center"
//         >
          
//           <button
//           className="inline-flex items-center ml-2 bg-gray-200 font-medium border-0 py-1 px-7 focus:outline-none hover:bg-gray-300 rounded text-base  md:mt-0" onClick={abouutMe}
//         >
//           About Me
        
//         </button>
//         <button
//           className="inline-flex items-center mx-4 font-medium bg-gray-200 border-0 py-1 px-7 focus:outline-none hover:bg-gray-300 rounded text-base  md:mt-0" onClick={contactMe}
//         >
//           Contact Me
        
//         </button>
          
//         </nav>
      
      </div>
    </header>
    {/* <!-- end header section --> */}
    </div>
  )
}
