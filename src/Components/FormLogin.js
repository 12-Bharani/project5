import React from 'react'

import useForm from '../Hooks/UseForm';
import images from './Images/img1.png'



const FormLogin = () => {
  const {handleChange,value,handleSubmit2,errors}=useForm();
  return (
    <div className="main">
        <div className="container">

<div className="left-side-content">
    <img src={images} alt="rocket"  />

</div>
<div className='form-content-right'>
    <form  className="form" onSubmit={handleSubmit2}>
        <h2>Get Started with us today! Create your account</h2>
        

        <div className="form-inputs">
            <label htmlFor="email" className='form-label'>
                Email
            </label>
            <input 
            type="email" 
            name='email' 
            id='email'
            className='form-input'
            placeholder='Enter your email ' 
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

        

        <button className='form-input-btn' type='submit' >Log in</button>
        <span className='form-input-login'> Don't have an account? Sign up <a href="#">here</a> </span>
    </form>
    
    <useForm />
   
    
</div>

</div>
    </div>
  )
}

export default FormLogin