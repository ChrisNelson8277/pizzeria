import React, { useEffect, useState } from "react";
import Sizes from "../components/Customize/Sizes";
import Card from "../components/MenuComponents/Card";
import MenuSelect from "../components/MenuSelect";
import { TailSpin } from "react-loader-spinner";

const MenuPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://nice-pink-sockeye-tutu.cyclic.app/db/menuItems")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];
        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };
          products.push(product);
          setMenu(products);
        }
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <TailSpin
          height="80"
          width="80"
          color="#490a13"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="menu-container">
      {/* <MenuSelect /> */}
      <div className="app-cards-container">
        <div className="cards">
          {menu.map((menuItems) => (
            <Card
              setCustomize={props.setCustomize}
              key={menuItems.id}
              id={menuItems.id}
              name={menuItems.Name}
              toppings={menuItems.toppings}
              smallPrice={menuItems.smallPrice}
              mediumPrice={menuItems.mediumPrice}
              largePrice={menuItems.largePrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
