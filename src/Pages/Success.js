import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import "./css/success.css";

const Success = ({ setCart, user }) => {
  const [orderInfo, setOrderInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    const createOrder = () => {
      window.localStorage.removeItem("items");
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get("session_id");
      // https://nice-pink-sockeye-tutu.cyclic.app
      fetch("http://localhost:5000/order/success", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setOrderInfo(data);
          setIsLoading(false);
          setCart([]);
        });
    };
    createOrder();
  }, []);
  if (isLoading) {
    return (
      <div className="success-container">
        <div className="success-wrapper">
          <h1>Creating Order...</h1>
        </div>
      </div>
    );
  }
  // if (sessionId === undefined) {
  //   return (
  //     <div className="success-container">
  //       <div className="success-wrapper">
  //         <h1>There was an error please try again</h1>
  //       </div>
  //     </div>
  //   );
  // }
  if (orderInfo.error === "error creating order") {
    return navigate("/");
  }
  const returnHome = () => {
    return navigate("/");
  };

  try {
    return (
      <div className="success-container">
        <div className="success-wrapper">
          <div className="success-card">
            <div className="success-card-wrapper">
              <i className="checkmark">✓</i>
            </div>
            <h1>Order #{orderInfo.orderInformation.orderid} Created</h1>
            <p style={{ fontSize: "1.2rem" }}>
              Thank you {orderInfo.orderInformation.name}
              <br /> your order will be ready for pickup in 25 minutes
            </p>
            <button
              style={{
                minWidth: "5vh",
                padding: "1rem",
                borderRadius: "10px",
                fontSize: "1.2rem",
              }}
              onClick={() => {
                returnHome();
              }}
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  } catch {
    navigate("/");
  }
};

export default Success;
