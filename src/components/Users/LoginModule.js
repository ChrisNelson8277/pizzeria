import React from 'react'
import '../../css/Users/module.css'
import {motion} from 'framer-motion'
import { FaUserCircle } from "react-icons/fa";
const LoginModule = ({user, setUser, openLogin, setOpenLogin}) => {
    let userInfo = JSON.parse(user)
    function logOut(){
        setUser();
        setOpenLogin(!openLogin);
    }
  return (
    <div className='modal-container' data-aos='flip-up' data-aos-anchor-placement="top-center">
        <div className='modal-wrapper'>
        <div className='modal-flex'>
            <span id='user-circle'><FaUserCircle style={{marginRight: '0.5rem', fontSize: "3rem"}}/></span><h5>{userInfo.first} {userInfo.last}</h5>
            </div>
        <div className='modal-log-button'><button onClick={() => {logOut()}}>Log out</button></div>
        </div>
    </div>
  )
}

export default LoginModule