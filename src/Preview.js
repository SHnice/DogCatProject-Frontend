import React from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
export default function Preview(props) {
  let {id} = useParams();
  let result = id.indexOf("T");
  const title = id.substring(result)
  let surity = parseInt(id.substring(0,6)*100)
  if(title === 'This is a Dog'){
    surity =  100 - surity
  }
  
  const navigate = useNavigate()
  function BackToHome(){
    navigate('/')
  }
  return (
    <>
      <div className='flex justify-center'>
      <div className="container bg-green-200 shadow border mt-3 p-2 mb-4 md:p-4 md:m-8 md:mt-2 md:rounded-xl ">
      <p className="text-2xl text-gray-700 font-bold mb-2">
        Successfull - Here Is The Result
      </p>
    </div>
    </div>
    <div className='flex justify-center mb-10 p-4'>

    <div className="max-w-sm bg-white rounded-lg mt-0 border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
    <a href="/" className=''>
        <img className="rounded-t-lg object-fill h-48 w-96 " src={props.url} alt=""/>
    </a>
    <div className="p-3">
        <h1 className='text-2xl bg-purple-300 rounded p-3 text-blue-800 font-medium text-gray-900 text-center mb-2 '>Results</h1>
        <p className="mb-3 mt-4 text-2xl text-green-600 font-bold ml-4 text-center">{title}</p>
        <p className="mb-6 text-xl text-yellow-700 font-semibold ml-4"> Model Is {surity}% Sure About It </p>
        <a href="/" className="inline-flex items-center py-3 px-3 mt-1 mb-5 text-l font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={BackToHome}>
            Check More
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
    </div>
</div>
</div>


    </>
  )
}
