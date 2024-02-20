import React from 'react'
import useForm from '../Hooks/UseForm'

import images from './Images/img1.png'


const FormSignup = () => {
   
    const {handleChange,value,handleSubmit1,errors}=useForm();
  return (
    <div className="main">

<div className="form-container">
        <div className="form-left-side-content">
            <img src={images} alt="rocket"  />

        </div>

     <div className='form-content-right'>
        <form  className="form" onSubmit={handleSubmit1}>
            <h2>Get Started with us today! Create your account</h2>
            <div className="form-inputs">
                <label htmlFor="username" className='form-label'>
                    Username
                </label>
                <input 
                type="text" 
                name='username' 
                id='username'
                className='form-input'
                placeholder='Enter your username' 
                onChange={handleChange}
                value={value.username}
                
                />
                 {errors.username && <p>{errors.username}</p>} 
            </div>

            <div className="form-inputs">
                <label htmlFor="email" className='form-label'>
                    Email
                </label>
                <input 
                type="email" 
                name='email' 
                id='email'
                className='form-input'
                placeholder='Enter your username ' 
                onChange={handleChange}
                value={value.email}
                
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor="password" className='form-label'>
                    Password
                </label>
                <input 
                type="password" 
                name='password' 
                id='password'
                className='form-input'
                placeholder='Enter your password' 
                onChange={handleChange}
                value={value.password}
                
                />
                {errors.password && <p>{errors.password}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor="cpassword" className='form-label'>
                    Confirm Password
                </label>
                <input 
                type="password" 
                name='cpassword' 
                id='cpassword'
                className='form-input'
                placeholder='confirm password' 
                onChange={handleChange}
                value={value.cpassword}
                
                />
                {errors.cpassword && <p>{errors.cpassword}</p>}
            </div>

            <button className='form-input-btn' type='submit' >Sign Up</button>
            <span className='form-input-login'> Already have an account? login <a href="#">here</a> </span>
        </form>
        
        <useForm />
       
        
          </div>
    
  
    </div>
    </div>
   
  )
}

export default FormSignup