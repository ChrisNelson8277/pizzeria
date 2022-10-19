import React from "react";
import "../css/Sidebar.scss";
import { motion } from "framer-motion";
import NavLogo from "../images/navbar/navlogo.png";

const SideBar = () => {
  return (
    <div
      data-aos="slide-right"
      data-aos-duration="1500"
      className="sidebar-container"
    >
      <h3 style={{ color: "black", borderBottom: "2px solid black" }}>Menu</h3>
      <div className="sidebar-wrapper">
        <ul>
          <li>
            <a href="/">SPECIAL OFFERS</a>
          </li>
          <li>
            <a href="/">MENU & ORDER</a>
          </li>
          <li>
            <a href="/">CATERING</a>
          </li>
          {/* <li><a href='/'>Pizza</a></li>
            <li><a href='/'>Pizza</a></li> */}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
