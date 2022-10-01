import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";

import Application from "./UploadFile/Application";
import Preview from "./Preview";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import { useState } from "react";
import ErrorPage from "./ErrorPage";


function App(props) {
  //data transfer between siblings
  const [url,setUrl] = useState('')
  const [disable,setDisable] = useState(false)
  function urlHandler(url){
    setUrl(url)
  }
  function disableHandler(){
    setDisable(true)
  }
  return (
    <Router>
      
    <div>
        <Header />
        <Routes>
        <Route path='/' element={<Application urlHandler = {urlHandler} disableHandler = {disableHandler}  />}/>
        <Route path='/result/:id' element={<Preview url = {url} disable = {disable}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboute' element={<AboutMe />} />
        <Route path='/error' element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </div>
   

    </Router>

  );
}

export default App;
