import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='image-container' >
      <div className="background-image" >
        <h3>Welcome Back</h3>

      </div>
      <div className="SignIn-container">

        <form action="">
          <h1>Welcome back</h1>
          <h3>Welcome back! Please enter your details.</h3>
          <label htmlFor="">User Name</label>
          <input type="text" placeholder='Enter your email' />
          <label htmlFor="">password</label>
          <input type="password" placeholder='' />
          <h6>Forgot Password</h6>  
          <Link className='link' to="/dashboard"><button  type='button'>Sign in</button></Link>
           <h2>Unable to login?<span class="contact-admin">Contact Admin</span></h2>
        </form>
      </div>

    </div>


  )
}

export default Login























