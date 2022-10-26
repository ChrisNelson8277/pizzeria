import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomizeFooter from "../components/Customize/CustomizeFooter";
import Sizes from "../components/Customize/Sizes";
import Toppings from "../components/Customize/Toppings";
import "../css/Customize/Customize.css";
const Customize = ({ setLocalStorage, customize, setCart, cart }) => {
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState();
  const [instructionsList, setInstructionsList] = useState([]);
  console.log(customize);
  let navigate = useNavigate();
  useEffect(() => {
    if (customize === undefined) {
      navigate("/menu");
    }
  }, [navigate, customize]);
  try {
    return (
      <div className="customize-container">
        <div className="customize-grid">
          <picture className="customize-img">
            <img src={customize[0].image} alt=""></img>
          </picture>
          <div className="customize-grid-right">
            <h1>{customize[0].name}</h1>
            <Sizes
              customize={customize}
              setSize={setSize}
              setPrice={setPrice}
            />
            <Toppings setInstructionsList={setInstructionsList} />
            <CustomizeFooter
              instructionsList={instructionsList}
              setLocalStorage={setLocalStorage}
              setCart={setCart}
              cart={cart}
              price={price}
              size={size}
              customize={customize}
            />
          </div>
        </div>
      </div>
    );
  } catch (error) {}
};
export default Customize;
