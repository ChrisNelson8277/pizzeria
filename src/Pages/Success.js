import React, { useEffect } from 'react'

const Success = ({setCart}) => {
        window.localStorage.clear()
        setCart([]);
    
  return (
    <div><h1>You have successfully checked out!</h1></div>
  )
}

export default Success