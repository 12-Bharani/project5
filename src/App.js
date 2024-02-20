import React from 'react'
import './App.css';
import Form from './Components/Form'
import FormLogin from './Components/FormLogin'
import FormSignup from './Components/FormSignup'
import Homepage from "./Components/Homepage"





import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";





const App = () => {


   
  return (
   <div>
     <>
       
        <Router>
            <Routes>
            
                <Route
                    exact
                    path="/"
                    element={<Form />}
                />

             
                <Route
                    path="/FormLogin"
                    element={<FormLogin />}
                />

           
                <Route
                    path="/FormSignup"
                    element={<FormSignup />}
                />
                <Route
                    path="/Homepage"
                    element={<Homepage />}
                />
               
                
               
                

             
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>
    </>
   
   </div>
    
);
}

export default App