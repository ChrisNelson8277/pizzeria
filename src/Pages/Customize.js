import React, { useState } from "react";
import CustomizeFooter from "../components/Customize/CustomizeFooter";
import Sizes from "../components/Customize/Sizes";
import Toppings from "../components/Customize/Toppings";
import "../css/Customize/Customize.css";
import cheese from "../images/menu/cheese.jpg";

const Customize = ({ setLocalStorage, customize, setCart, cart }) => {
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState();
  const [newCartItem, setNewCartItem] = useState([]);
  const [instructionsList, setInstructionsList] = useState([]);
  console.log(customize);
  return (
    <div className="customize-container">
      <div className="customize-grid">
        <picture className="customize-img">
          <img src={cheese}></img>
        </picture>
        <div className="customize-grid-right">
          <h1>{customize[0].name}</h1>
          <Sizes setSize={setSize} setPrice={setPrice} />
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
};

export default Customize;
