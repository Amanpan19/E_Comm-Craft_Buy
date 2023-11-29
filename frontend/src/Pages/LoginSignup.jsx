import React from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {
  return (
    <div className='loginSignUp'>
    <div className="loginSignUpContainer">
        <h1>Sign Up</h1>
    <div className="fields">
        <input type="text" placeholder='Enter your Name' />
        <input type="text" placeholder='Enter your E-mail'/>
        <input type="password" placeholder='PassWord'/>
    </div>  
    <div className="btn">
         Countinue
    </div> 
    <p className='already'>Already Have an Account?<span> Login Here </span></p>
    </div>
    </div>
  )
}

export default LoginSignup
