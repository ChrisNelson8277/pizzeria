import React from "react";
import "../Pages/css/Landing.css";
import landingBg from "../images/landing/landingbg.jpg";
import landingBg2 from "../images/landing/landingbg2.jpg";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();
  return (
    <div className="landing-container">
      <div className="first-grid">
        <div>
          <img src={landingBg} alt="" />
        </div>
        <div className="heading">
          <h1>What is APIZZA?</h1>
          <div>
            <div className="">
              <h2>Pronounced "abeets"</h2>
              <p>
                First things first, though. What's the deal with that letter "a"
                at the beginning? Is that some sort of typo? Actually, no, the
                "a" belongs there. New Haven apizza is pronounced "abeets,"
                which is a throwback to the way it was pronounced by the
                original Neapolitan immigrants who moved to the area around the
                turn of the 20th century. Basically, apizza is a thin-crust
                pizza that is traditionally baked in a coal-fired brick oven.
                The coal gives the crust a sooty, smoky, flavor, and the high
                heat of the oven gives the bottom of the crust its
                characteristically charred quality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="start-order">
        <button
          onClick={() => {
            navigate("/menu");
          }}
        >
          Start Order
        </button>
      </div>
      <div className="image2-grid">
        <div className="grid2-left">
          <h2>Try our award winning Pepperoni pizza! </h2>
          <p>Starting at $12.99</p>
          <p>Loaded Edge to Edge with pieces of crispy, heritage pepperoni.</p>
          <Link to={"/menu"}>Order now</Link>
        </div>
        <div className="grid2-image">
          <img src={landingBg2} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
