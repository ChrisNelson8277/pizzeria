import React from "react";
import "../../css/Checkout/CheckoutDetails.css";
const CheckoutDetails = () => {
  return (
    <div className="checkout-details-container">
      <h2>Pick Up Info</h2>
      <div className="first-last">
        <div>
          <label htmlFor="FirstName">First Name</label>
          <br />
          <input disabled name="FirstName" placeholder="John"></input>
        </div>
        <div>
          <label disabled htmlFor="LastName">
            Last Name
          </label>
          <br />
          <input disabled name="LastName" placeholder="Smith"></input>
        </div>
      </div>
      <div>
        <label htmlFor="LastName" placeholder="Last Name">
          Phone Number
        </label>
        <input disabled name="LastName" placeholder="614-000-0000"></input>
      </div>
      <div>
        <label htmlFor="LastName">Email Address</label>
        <input
          disabled
          name="LastName"
          placeholder="johnsmith1234@apple.com"
        ></input>
      </div>
    </div>
  );
};

export default CheckoutDetails;
