import React from 'react'
import '../css/Sidebar.scss'
import {motion} from 'framer-motion'
import NavLogo from '../images/navbar/navlogo.png'

const SideBar = () => {
  return (
    <motion.div animate={{ x: 250 }} transition={{ duration: 1, type: "tween" }} className='sidebar-container'>
        <div>
           
        </div>
        <div>
        <ul>
            <li><a href='/'>SPECIAL OFFERS</a></li>
            <li><a href='/'>MENU & ORDER</a></li>
            <li><a href='/'>CATERING</a></li>
            {/* <li><a href='/'>Pizza</a></li>
            <li><a href='/'>Pizza</a></li> */}
        </ul>
        </div>
    </motion.div>
  )
}

export default SideBar