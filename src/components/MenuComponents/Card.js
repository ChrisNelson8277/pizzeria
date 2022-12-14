import React from "react";
import "../../css/Menu/Card.scss";
import pepImg from "../../images/menu/cheese.jpg";
import { useNavigate } from "react-router-dom";
const Card = ({
  name,
  toppings,
  smallPrice,
  mediumPrice,
  largePrice,
  setCustomize,
  id,
  image,
}) => {
  let navigate = useNavigate();
  let item = [
    {
      name: name,
      id: id,
      smallPrice: smallPrice,
      mediumPrice: mediumPrice,
      largePrice: largePrice,
      image: image,
      qty: 1,
    },
  ];
  function goToCustomize() {
    navigate("/customize");
    setCustomize(item);
  }
  return (
    <div className="card-container">
      <div className="card-img">
        <picture>
          <img
            className="product-picture"
            src={image ? image : pepImg}
            alt="Pepperoni Pizza"
          ></img>
        </picture>
      </div>
      <div className="card-desc-header">
        <h2>{name}</h2>
        <div className="starting-price">
          <p>Starting at {smallPrice}</p>
        </div>
      </div>
      <div className="card-desc">
        <p>
          {toppings.map((topping, index) =>
            index == toppings.length - 1 ? topping : topping + ", "
          )}
        </p>
      </div>
      <div>
        <button className="card-button" onClick={goToCustomize}>
          Add To Order
        </button>
      </div>
    </div>
  );
};

export default Card;
