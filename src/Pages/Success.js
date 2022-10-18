import React, { useEffect, useState } from 'react'
import './css/success.css'

const Success = ({setCart, user}) => {
  const [test,setTest] = useState(Math.random());
  useEffect(() => {
    window.localStorage.clear()
    setCart([]);
  }, [test])
    
  return (
    <div className='success-container'>
      <div className='success-wrapper'>
        <h3>Thank you for your order {user.first} {user.last}</h3>
      <h4>You have successfully checked out!</h4>
      <p>Your order will be ready for pickup in 15-25 minutes</p>
      </div>
      </div>
  )
}

export default Success