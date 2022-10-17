import Hamburger from 'hamburger-react'
import React from 'react'
import '../css/NavBar.scss'
import { FaUser } from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { IconContext } from "react-icons";
import NavLogo from '../images/navbar/navlogo.png';
import { useNavigate } from 'react-router-dom';


const NavBar = (props) => {
    let navigate= useNavigate();
    function goToSignup() {
        navigate('/signup')
    }
    function goHome() {
        navigate('/')
    }
  return (
    <nav className='nav-bar-container'>
        <div className='nav-bar-flex'>
            <div className='nav-flex-start'><Hamburger onToggle={() => {props.setOpenSideBar(!props.openSideBar)}} size={20}/><div><img className='vinnys-logo' onClick={goHome} src={NavLogo} alt="Vinnys Apizza"></img></div></div>
            <IconContext.Provider value={{className:"nav-icons"}}>
            <div className='nav-flex-end'>
                <div><FaUser onClick={goToSignup}/></div>
                <div className='cart-icon' onClick={() => {navigate('/cart')}}>
                    <AiOutlineShoppingCart/>
                    {<div className='cart-badge'>{props.cart.length >= 1 ? <>{props.cart.length}</> : 0}</div>}
                </div>
            </div>

            </IconContext.Provider>
        </div>
    </nav>
  )
}

export default NavBar