import React from 'react'
import images from './Images/img1.png'
import {  NavLink } from 'react-router-dom'
import "./Form.css"


const Form = () => {
  return (
    <div className="main">
         <div className='container'>
            <div className="left-side-content">
            <img src={images} alt="rocket"  />

             </div>

             <div className='right-side-content'>
            {/* <img src="https://freepngimg.com/save/76861-web-instagram-script-typeface-typography-font/1785x612" alt="" width={150} height={50} /> */}

            <h2>Sign up to see <span>Photos</span> and <span>videos</span> from your friends.</h2>

            <button >Get the instagram app</button>
            <div className='right-bottom'>
            <NavLink to="/FormSignup" className="link">
                Sign up

            </NavLink>
             <p>OR</p>
            <NavLink to="/FormLogin" className="link">
                Login

            </NavLink>

            </div>

           

          </div>
        
         </div>
    </div>

  
    
  )
}

export default Form