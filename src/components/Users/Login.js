import React from 'react'
import '../../css/Users/Login.scss'


const Login = ({setUser}) => {
  function loginHandler(event){
    event.preventDefault();
    let email = event.target.email.value
    let password = event.target.password.value
  fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({
          "user":email , "pass":password
        })
      }).then((res)=>res.json()).then((data)=>{
        if(data.success){
          console.log('setting data')
          setUser(data);
        }
      })
      .catch(e => {
        console.error(e.error)
      })
    }
    
  return (
    <div className='login-container'>
        <div className='signup-header'>
            <div className='sign-ups'>
            <h3>Log in</h3>
            </div>
        </div>
        <form onSubmit={(e) => {loginHandler(e)}}>

        <div className='inputs'>
            <label htmlFor='email'>Email Address</label>
            <input name='email' id='email' ></input>
            <label htmlFor='password'>Password</label>
            <input name='password' id="password"></input>
        </div>
        <div className='login-button'>
        <button type='submit'>Log in</button>
        </div>
        </form>
    </div>
  )
}

export default Login