import Hamburger from "hamburger-react";
import React from "react";
import "../css/NavBar.scss";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import NavLogo from "../images/navbar/navlogo.png";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  let navigate = useNavigate();
  function goToSignup() {
    if (props.user) {
      props.setOpenLogin(!props.openLogin);
      return;
    } else {
      navigate("/signup");
    }
  }
  function goHome() {
    navigate("/");
  }
  return (
    <nav className="nav-bar-container">
      <div className="nav-bar-flex">
        <div className="nav-flex-start">
          <div className="hamburger-menu">
            <Hamburger
              className="hamburger-menu"
              onToggle={() => {
                props.setOpenSideBar(!props.openSideBar);
              }}
              size={20}
            />
          </div>
          <div>
            <img
              className="vinnys-logo"
              onClick={goHome}
              src={NavLogo}
              alt="Vinnys Apizza"
            ></img>
          </div>
        </div>
        <div className="nav-flex-end">
          <span id="hide-links">
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
          </span>
          <IconContext.Provider value={{ className: "nav-icons" }}>
            <div className="user-icon">
              <FaUser onClick={goToSignup} />
            </div>
          </IconContext.Provider>
          <div
            className="cart-icon"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <IconContext.Provider value={{ className: "nav-icons" }}>
              <AiOutlineShoppingCart />
            </IconContext.Provider>
            {
              <div className="cart-badge">
                {props.cart.length >= 1 ? <>{props.cart.length}</> : 0}
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
