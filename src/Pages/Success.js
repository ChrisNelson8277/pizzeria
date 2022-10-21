import React, { useEffect, useState } from "react";
import "./css/success.css";

const Success = ({ setCart, user }) => {
  const [test, setTest] = useState(Math.random());
  useEffect(() => {
    window.localStorage.removeItem("items");
    setCart([]);
  }, [test]);
  let userInfo;
  if (user) {
    userInfo = JSON.parse(user);
  }

  return (
    <div className="success-container">
      <div className="success-wrapper">
        <h3>Thank you for your order </h3>
        <div className="first-last">
          <h3>
            {userInfo ? <>{userInfo.first} </> : null}
            {userInfo ? userInfo.last : null}
          </h3>
        </div>
        <h4>You have successfully checked out!</h4>
        <p>Your order will be ready for pickup in 15-25 minutes</p>
      </div>
    </div>
  );
};

export default Success;
