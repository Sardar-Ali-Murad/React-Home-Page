import React from 'react'
import "./Login.css"
import Img from "../assets/Login.png"

const Login = () => {
  return (
    <div className='loginBigMain' id="contact">
       <div className='loginMain'>
        {/*  */}
          <div>
            <img src={Img} className="loginImg"/>
          </div>
          {/*  */}
          <div className='loginInfoMain'>
              <div className='loginStart'>
                  <a>Log In to FAD</a>
                  <p>Don't have an account yet? <span>Sign Up</span></p>                 
              </div>

              <div className='loginParts'>
                  <a>Email / Username</a>
                  <input placeholder='Please provide email or username' className='loginInputs'/>              
              </div>

              <div className='loginParts'>
                  <a>Password</a>
                  <input placeholder='Password' className='loginInputs'/>              
              </div>

              <div className='loginCheck'>
                  <input type="checkbox"/>
                  <a>I agree to the <span>Terms of Service </span> and <span>Privacy Policy.</span></a>             
              </div>

              <div className='loginEnd'>
                  <button>Sign In</button>
                  <a>Forget Password</a>           
              </div>

          </div>
       </div>
    </div>
  )
}

export default Login
