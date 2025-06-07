import React,{useEffect, useState} from "react"
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Route,Routes} from "react-router-dom"
import Register from './component/Register';
import Login from './component/Login';
import Welcome from './component/Welcome';
const App = () => {
  return (
   <>
   <Navbar/>
     <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Welcome/>}/>
     </Routes>
   </>
  );
}

export default App;
