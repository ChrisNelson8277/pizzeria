import React from 'react'
import '../../css/Users/Signup.scss'

const Signup = () => {

  const register = (event) => {
    event.preventDefault()
    let email = event.target.email.value
    let email2 = event.target.email2.value
    let pass = event.target.password.value
    let first = event.target.first.value
    let last = event.target.last.value
    if (email === email2) {
      fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({
          "user":email , "pass":pass, "first":first, "last":last
        })
      })
      .catch(e => {
        console.error(e.error)
      })
    }
    else{
      alert('Email addresses must match')
    }
  }
  

  return (
    <div className='signup-container'>
        <div className='signup-header'>
            <div className='sign-ups'>
            <h3>Sign Up</h3>
            </div>
        </div>
        <form onSubmit={(e) => {register(e)}}>
        <div className='inputs'>
            <label htmlFor='firstName'>First Name<span className='req'>*</span></label>
            <input id='firstName' name='first'></input>
            <label htmlFor='lastName'>Last Name<span className='req'>*</span></label>
            <input id="LastName" name='last'></input>
            <label htmlFor='email' name ='email'>Email Address<span className='req'>*</span></label>
            <input id='email' ></input>
            <label htmlFor='confirm-email'>Confirm Email<span className='req'>*</span></label>
            <input id='confirm-email' name="email2"></input>
            <label htmlFor='password' name='password'>Password!<span className='req'>*</span></label>
            <input id="password"></input>
        </div>
        <div className='signup-button'>
        <button type={"submit"}>Signup</button>
        </div>
        </form>
    </div>
  )
 }

export default Signup