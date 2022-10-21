import React, { useEffect, useState } from "react";
import "../../css/Customize/Customize.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

let displayPrice = 0;
const CustomizeFooterEditor = (props) => {
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
  function updateCart() {
    props.foundItem.special = props.instructionsList;
    props.foundItem.qty = qty;
    props.foundItem.size = props.size;
    navigate("/cart");
  }
  useEffect(() => {
    setQty(props.foundItem.qty);
  }, []);

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
          <button
            onClick={() => {
              updateCart();
            }}
          >
            Add to Cart
          </button>
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

export default CustomizeFooterEditor;
