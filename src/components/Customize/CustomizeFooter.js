import React, { useState } from "react";
import "../../css/Customize/Customize.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
let displayPrice = 0;
const CustomizeFooter = (props) => {
  let navigate = useNavigate();
  const [qty, setQty] = useState(1);
  function addQty(num) {
    if (num === 10) {
      alert("10 is the maximum Online order quantity");
      return;
    }
    let val = num + 1;
    props.customize[0].qty = val;
    setQty(val);
  }
  function subQty(num) {
    if (num === 1) {
      return;
    }
    let val = num - 1;
    props.customize[0].qty = val;
    setQty(val);
  }
  function getPrice() {
    if (props.price === undefined) return 0;
    else if (props.price !== undefined) {
      displayPrice = props.price * qty;
      return displayPrice.toFixed(2);
    }
  }
  let newItem = {
    name: props.customize[0].name,
    qty: props.customize[0].qty,
    id: props.customize[0].id,
    size: props.size,
    price: props.price,
    special: props.instructionsList,
  };

  function addToCart() {
    if (props.size === undefined) {
      alert("You must select a size");
    } else {
      navigate("/menu");
      props.setCart([newItem, ...props.cart]);
      localStorage.setItem("items", JSON.stringify([newItem, ...props.cart]));
    }
  }
  return (
    <div className="footer-container">
      <div className="footer-flex">
        <div className="footer-qty">
          <IconContext.Provider value={{ className: "qty-icons" }}>
            <AiFillMinusCircle
              onClick={() => {
                subQty(qty);
              }}
            />
            Qty:{qty}
            <AiFillPlusCircle
              onClick={() => {
                addQty(qty);
              }}
            />
          </IconContext.Provider>
        </div>
        <div className="price-calories">{getPrice()}</div>
        <div className="footer-button">
          <button onClick={addToCart}>Add to Cart</button>
          <BsXLg
            onClick={() => {
              navigate("/menu");
            }}
            style={{ paddingTop: "3%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomizeFooter;
