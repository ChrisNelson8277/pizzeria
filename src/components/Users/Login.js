import React from 'react'
import '../../css/Users/Login.scss'


const Login = () => {
  return (
    <div className='login-container'>
        <div className='signup-header'>
            <div className='sign-ups'>
            <h3>Log in</h3>
            </div>
        </div>
        <div className='inputs'>
            <label htmlFor='email'>Email Address</label>
            <input id='email' ></input>
            <label htmlFor='password'>Password</label>
            <input id="password"></input>
        </div>
        <div className='login-button'>
        <button>Log in</button>
        </div>
    </div>
  )
}

export default Login