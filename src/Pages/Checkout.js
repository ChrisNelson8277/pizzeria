import React from "react";
import CheckoutDetails from "../components/Checkout/CheckoutDetails";
import CheckoutInfo from "../components/Checkout/CheckoutInfo";

const Checkout = ({ subtotal }) => {
  return (
    <div>
      <CheckoutDetails></CheckoutDetails>
      <CheckoutInfo subtotal={subtotal} />
    </div>
  );
};

export default Checkout;
