
import React from "react";
import { Route ,Routes} from 'react-router-dom'  
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./Home/Home";

function App() {
  
  return (

<>
  <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/Login" element={<Login />} /> 
           
          <Route exact path="/home" element={<Home />} />     
  </Routes> 
   </>  
    

  );
}

export default App;
