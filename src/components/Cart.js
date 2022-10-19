import React, { useState } from "react";
import "../css/Cart.scss";
import { motion } from "framer-motion";
import SubTotal from "./Cart/SubTotal";

const Cart = (props) => {
  let counter = 0;
  const [page, updatePage] = useState();
  const [total, setTotal] = useState(0);
  function updatePrice(qty, price) {
    let val = qty * price;
    counter = counter + price * qty;
    console.log(counter.toFixed(2));
    props.setSubtotal(counter.toFixed(2));
    return val.toFixed(2);
  }
  if (props.cart.length < 1) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <div className="empty-flex">
            <h2> Your cart is empty</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <motion.div
        animate={{ x: 0 }}
        transition={{ duration: 4, type: "tween" }}
        className="cart-container"
      >
        <div className="cart-card-container">
          {props.cart.map((cartItems, index) => {
            return (
              <div key={index} className="cart-item-card">
                <div className="cart-item">
                  <label htmlFor="qty">Qty</label>
                  <br></br>
                  <select
                    name="qty"
                    defaultValue={cartItems.qty}
                    onChange={(e) => {
                      cartItems.qty = e.target.value;
                      updatePage(Math.random());
                    }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>
                <div className="cart-info">
                  <div className="cart-item-name">
                    <div>
                      <h5>{cartItems.name}</h5>
                    </div>
                    <div className="size">
                      <h6>Size: {cartItems.size}</h6>
                    </div>
                  </div>
                  <div className="special-instructions">
                    <h5>Special Instructions:</h5>
                    <div className="special-text">
                      {cartItems.special.map((instructions, index) => {
                        return <div key={index}>{instructions}</div>;
                      })}
                      <br />
                    </div>
                  </div>
                </div>
                <div className="cart-price">
                  ${updatePrice(cartItems.qty, cartItems.price)}
                </div>
                <br />
              </div>
            );
          })}
          <SubTotal cartItems={props.cart} totalPrice={counter} />
        </div>
      </motion.div>
    );
  }
};

export default Cart;
