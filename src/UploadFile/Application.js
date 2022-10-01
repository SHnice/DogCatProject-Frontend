import axios from 'axios';
import { useState } from 'react';
import './Application.css';
import Loader from '../Loader';
import DropFileInput from './components/drop-file-input/DropFileInput';
import Welcome from '../Welcome';
import { useNavigate } from "react-router-dom";



function Application(props) {

    const navigate = useNavigate();
   const [files ,setFiles] = useState([])
   const [loader, setLoader] = useState(false)
   const [disable,setDisable] = useState(true)
   const [error,setError] = useState(false)

   
   
    function onFileChange(files){
        setFiles(files);
        setDisable(false);
        

      }

    function uploadHandler(){
      if(files){
        setLoader(true)
      
        // for cloudinary
        // const formData = new FormData();
        // formData.append("file", files[0]);
        // formData.append("upload_preset","saddam")
      
        axios
        .post('http://localhost:5000', files[0])
        .then(res => {
            setLoader(false)
            navigate(`/result/${res.data}`)
            console.log(res)  
        })
      .catch(err => {
        console.log("error")
        setLoader(false)
        setError(true)

      })
      // axios
      //   .post('https://api.cloudinary.com/v1_1/ds7flqbfu/upload',formData,{
      //     headers:{
      //       "content-type":"multipart/form-data"
      //     }
      //   })
      //   .then(res => {
      //       props.urlHandler(res.data.url)
            
      //   })
      // .catch(err => {
      //   console.log("error")
      // })
      const objectUrl = URL.createObjectURL(files[0])
      props.urlHandler(objectUrl)
    }else{
      setDisable(true)
    }
    }

    

    return (
        <>
        
        {loader && 
        <>
            <div className='fixed w-full h-full z-40 left-0 top-0 bg-black opacity-50'/>
            <Loader />
        </>}
        {error && navigate('/error')}
        
        <Welcome/>
        <div className="flex flex-col text-center w-full mb-3 mt-5">
        <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-3">Lets Play With Artificial Intelligence</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Please Upload the image of Cat or Dog</h1>
      </div>
      <section className="text-gray-600 body-font">
    <div className="container px-5 mb-3 md:px-40 py-3 mx-auto">
      
    <div className='body-sadam '>
        <div className="box-sadam">
            <h2 className="header-sadam">
                Drop or Upload files here
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files) }
            />
        </div>
    </div>
      
      <button className= {`flex mx-auto mt-7 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ${disable ? "pointer-events-none" : ""}`} onClick={uploadHandler}> Upload </button>
      
        
    </div>
  </section>

  </>

     
    );
        }
export default Application;
