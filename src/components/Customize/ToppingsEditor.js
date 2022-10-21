import React, { useEffect, useState } from "react";
import "../../css/Customize/Customize.css";

const ToppingsEditor = (props) => {
  const [toppings, setToppings] = useState([]);
  function addInstructions(newInstruction) {
    if (newInstruction.checked === true) {
      props.setInstructionsList([...toppings, newInstruction.value]);
      setToppings([...toppings, newInstruction.value]);
    } else if (newInstruction.checked === false) {
      let newArray = toppings.filter((topping) => {
        return topping !== newInstruction.value;
      });
      props.setInstructionsList(newArray);
      setToppings(newArray);
    }
  }
  useEffect(() => {
    if (props.foundItem) {
      props.setInstructionsList(props.foundItem.special);
      setToppings(props.foundItem.special);
    }
  }, []);
  return (
    <div className="toppings-container">
      <form className="form-container">
        <div className="instruction-header">
          <h3>Special Instructions</h3>
        </div>
        <div className="form-flex">
          <input
            type="checkbox"
            checked={toppings.includes("light sauce")}
            value="light sauce"
            onChange={(e) => {
              addInstructions(e.target);
            }}
          ></input>
          <label>Light Sauce</label>
        </div>
        <div className="form-flex">
          <input
            type="checkbox"
            checked={toppings.includes("no sauce")}
            value="no sauce"
            onChange={(e) => {
              addInstructions(e.target);
            }}
          ></input>
          <label>No Sauce</label>
        </div>
        <div className="form-flex">
          <input
            type="checkbox"
            checked={toppings.includes("extra sauce")}
            value="extra sauce"
            onChange={(e) => {
              addInstructions(e.target);
            }}
          ></input>
          <label>Extra Sauce</label>
        </div>
        <div className="form-flex">
          <input
            type="checkbox"
            checked={toppings.includes("light bake")}
            value="light bake"
            onChange={(e) => {
              addInstructions(e.target);
            }}
          ></input>
          <label>Light bake</label>
        </div>
        <div className="form-flex">
          <input
            type="checkbox"
            checked={toppings.includes("well done bake")}
            value="well done bake"
            onChange={(e) => {
              addInstructions(e.target);
            }}
          ></input>
          <label>Well done</label>
        </div>
      </form>
    </div>
  );
};

export default ToppingsEditor;
