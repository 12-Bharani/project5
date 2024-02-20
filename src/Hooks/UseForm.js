
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const useForm = () => {
  const navigate=useNavigate()
  const [value, setValue] = useState(
    {
        username:"",
         email:"",
         password:"",
         cpassword:""
    }
  )

  const [errors, setErrors] = useState({})
  const handleChange=(e)=>{
   const{name,value}=e.target;
   setValue((prevValues)=>{
    return{
        ...prevValues,[name]:value
    }
   })
    
  }
  const handleSubmit1 =(event)=>{
    event.preventDefault();
    setErrors(validateSignup(value))
    
  }

  const validateSignup=(value)=>{
    let errors={};
    if(!value.username.trim()){
        errors.username="Username required"
    }
    if(!value.email.trim()){
        errors.email="Email required"
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value.email)){
        errors.email="Email address is invalid"
    }

    if(!value.password.trim()){
        errors.password="password required"
    }
    else if(value.password.length < 6){
        errors.password="Password need to be 6 character or more"

        

    }
    if(!value.cpassword.trim()){
        errors.cpassword="cpassword required"
    }

    else if((value.cpassword!==value.password)){
        errors.cpassword="password does not match"
        
    }
    else{
      navigate('/Homepage')
    }
  
    return errors

  }

  const handleSubmit2 =(event)=>{
    event.preventDefault();
    setErrors(validateLogin(value))
    
  }

  const validateLogin=(value)=>{
    let errors={};
    
    if(!value.email.trim()){
        errors.email="Email required"
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value.email)){
        errors.email="Email address is invalid"
    }

    if(!value.password.trim()){
        errors.password="password required"
    }
    else if(value.password.length < 6){
        errors.password="Password need to be 6 character or more"


    }
   
    else{
      navigate('/Homepage')
    }
  
    return errors

  }



  return {handleChange,value,handleSubmit1,handleSubmit2,errors}
}

export default useForm