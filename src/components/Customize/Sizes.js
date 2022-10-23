import React, { useEffect, useState } from "react";
import "../../css/Customize/Customize.css";

const Sizes = (props) => {
  const [sizes, setSizes] = useState();
  function updatePrice(size) {
    setSizes(size);
    if (size === "small") {
      props.setPrice(12.99);
      props.setSize(size);
    } else if (size === "medium") {
      props.setPrice(14.99);
      props.setSize(size);
    } else if (size === "large") {
      props.setPrice(16.99);
      props.setSize(size);
    }
  }
  useEffect(() => {
    if (props.foundItem) {
      props.setSize(sizes);
      if (props.foundItem.size === "small") {
        setSizes("small");
        props.setPrice(12.99);
        return;
      } else if (props.foundItem.size === "medium") {
        setSizes("medium");
        props.setPrice(14.99);
        return;
      } else if (props.foundItem.size === "large") {
        setSizes("large");
        props.setPrice(16.99);
        return;
      } else return;
    }
  }, []);
  return (
    <div className="size-container">
      <form className="form-container">
        <div className="sizes-header">
          <h3>Sizes</h3>
        </div>
        <div className="flex">
          <div className="first-flex">
            <input
              type="radio"
              name="size"
              onChange={(e) => {
                updatePrice(e.target.value);
              }}
              checked={sizes === "small"}
              value={"small"}
            ></input>
            <label>
              <h4>Small $12.99</h4>
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="first-flex">
            <input
              type="radio"
              name="size"
              onChange={(e) => {
                updatePrice(e.target.value);
              }}
              checked={sizes === "medium"}
              value={"medium"}
            ></input>
            <label>Medium $14.99</label>
          </div>
        </div>
        <div className="flex">
          <div className="first-flex">
            <input
              type="radio"
              name="size"
              onChange={(e) => {
                updatePrice(e.target.value);
              }}
              checked={sizes === "large"}
              value={"large"}
            ></input>
            <label>
              <h4>Large $16.99</h4>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sizes;
