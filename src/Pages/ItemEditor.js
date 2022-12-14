import React, { useEffect, useState } from "react";
import CustomizeFooterEditor from "../components/Customize/CustomizeFooterEditor";
import Sizes from "../components/Customize/Sizes";
import ToppingsEditor from "../components/Customize/ToppingsEditor";
import "../css/Customize/Customize.css";

const ItemEditor = ({ customize, setCart, cart, uid }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [foundItem, setFoundItem] = useState();
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState();
  const [instructionsList, setInstructionsList] = useState([]);
  const editedItem = {};
  useEffect(() => {
    const items = cart.filter((item) => {
      return item.uid === uid;
    });
    setFoundItem(items[0]);
    setIsLoading(false);
  }, []);
  if (isLoading === true) {
    return <p>Loading...</p>;
  }
  return (
    <div className="customize-container">
      <div className="customize-grid">
        <picture className="customize-img">
          <img src={customize[0].image} alt=""></img>
        </picture>
        <div className="customize-grid-right">
          {foundItem ? (
            <h1 style={{ color: "black" }}>{foundItem.name}</h1>
          ) : null}
          <Sizes foundItem={foundItem} setSize={setSize} setPrice={setPrice} />
          <ToppingsEditor
            foundItem={foundItem}
            instructionsList={instructionsList}
            setInstructionsList={setInstructionsList}
          />
          <CustomizeFooterEditor
            foundItem={foundItem}
            instructionsList={instructionsList}
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

export default ItemEditor;
