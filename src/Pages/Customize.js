import React, { useState } from "react";
import CustomizeFooter from "../components/Customize/CustomizeFooter";
import Sizes from "../components/Customize/Sizes";
import Toppings from "../components/Customize/Toppings";
import "../css/Customize/Customize.css";

const Customize = ({ setLocalStorage, customize, setCart, cart }) => {
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState();
  const [newCartItem, setNewCartItem] = useState([]);
  const [instructionsList, setInstructionsList] = useState([]);
  return (
    <div className="customize-container">
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
  );
};

export default Customize;
