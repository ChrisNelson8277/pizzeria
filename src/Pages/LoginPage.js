import React from 'react'
import Login from '../components/Users/Login'
import Signup from '../components/Users/Signup'
import './css/LoginPage.css'

const LoginPage = () => {
  return (
    <div className='login-page-container'>
        <div>
        <Login/>
        </div>
        <div>
            <Signup/>
        </div>
    </div>
  )
}

export default LoginPage