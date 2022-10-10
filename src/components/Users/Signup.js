import React from 'react'
import '../../css/Users/Signup.scss'

const Signup = () => {
  return (
    <div className='signup-container'>
        <div className='signup-header'>
            <div className='sign-ups'>
            <h3>Sign Up</h3>
            </div>
        </div>
        <div className='inputs'>
            <label htmlFor='firstName'>First Name<span className='req'>*</span></label>
            <input id='firstName'></input>
            <label htmlFor='lastName'>Last Name<span className='req'>*</span></label>
            <input id="LastName"></input>
            <label htmlFor='email'>Email Address<span className='req'>*</span></label>
            <input id='email' ></input>
            <label htmlFor='confirm-email'>Confirm Email<span className='req'>*</span></label>
            <input id='confirm-email'></input>
            <label htmlFor='password'>Password!<span className='req'>*</span></label>
            <input id="password"></input>
        </div>
        <div className='signup-button'>
        <button>Signup</button>
        </div>
    </div>
  )
}

export default Signup