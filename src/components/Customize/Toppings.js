import React, { useState } from "react";
import "../../css/Customize/Customize.css";

const Toppings = (props) => {
  const [toppings, setToppings] = useState([]);
  function addInstructions(newInstruction) {
    if (newInstruction.checked === true) {
      props.setInstructionsList([...toppings, newInstruction.value]);
      setToppings([...toppings, newInstruction.value]);
    } else if (newInstruction.checked === false) {
      let newArray = toppings.filter((topping) => {
        return topping != newInstruction.value;
      });
      props.setInstructionsList([...toppings, newInstruction.value]);
      setToppings(newArray);
    }
  }
  return (
    <div className="toppings-container">
      <form
        className="form-container"
        onChange={(e) => {
          addInstructions(e.target);
        }}
      >
        <div className="instruction-header">
          <h3>Special Instructions</h3>
        </div>
        <div className="form-flex">
          <input type="checkbox" value="light sauce"></input>
          <label>Light Sauce</label>
        </div>
        <div className="form-flex">
          <input type="checkbox" value="no sauce"></input>
          <label>No Sauce</label>
        </div>
        <div className="form-flex">
          <input type="checkbox" value="extra sauce"></input>
          <label>Extra Sauce</label>
        </div>
        <div className="form-flex">
          <input type="checkbox" value="light bake"></input>
          <label>Light bake</label>
        </div>
        <div className="form-flex">
          <input type="checkbox" value="well done bake"></input>
          <label>Well done</label>
        </div>
      </form>
    </div>
  );
};

export default Toppings;
