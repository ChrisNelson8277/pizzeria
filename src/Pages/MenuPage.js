import React, { useEffect, useState } from "react";
import Sizes from "../components/Customize/Sizes";
import Card from "../components/MenuComponents/Card";
import MenuSelect from "../components/MenuSelect";

const MenuPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://pizzeria-site-default-rtdb.firebaseio.com/pizzas.json")
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
        }

        setIsLoading(false);
        setMenu(products);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
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
