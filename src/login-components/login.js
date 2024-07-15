import React from 'react';
import Banner from '../login-components/LoginBanner.png';
import GoogleIcon from '../login-components/google.png';
import FacebookIcon from '../login-components/Facebook.png';
import MicrosoftIcon from '../login-components/microsoft.png';
import './login.css';

const Login = ({ signin }) => {
  return (
    <div className='loginPage'>
      
      <img src={Banner} className='imgBanner' alt="Banner" />
      <div className='loginDetails'>
        <div className='loginHeader'>
          <h1 className='text-xl'>Sign in or create an account</h1>
          <p className='text-lg'>Then start chatting with app!</p>
        </div>
        <div className='google' onClick={signin}>
          <img src={GoogleIcon} width={40} alt="Google Icon" />
          <p>Sign in with Google</p>
        </div>
        <div className='facebook'>
          <img src={FacebookIcon} width={40} alt="Facebook Icon" />
          <p>Continue with Facebook</p>
        </div>
        <div className='microsoft'>
          <img src={MicrosoftIcon} width={40} alt="Microsoft Icon" />
          <p>Continue with Microsoft</p>
        </div>
      </div>
    </div>
  )
}

export default Login;