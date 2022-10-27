import React, { useEffect, useState } from "react";
import Card from "../components/MenuComponents/Card";
import "../components/MenuSelect";
import { TailSpin } from "react-loader-spinner";

const MenuPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/db/menuItems")
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

          const filtered = products.filter((data) => {
            return data.Category === "pizza";
          });
          setList(products);
          setMenu(filtered);
          setIsLoading(false);
        }
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

  const filterData = (item) => {
    const newList = list.filter((data) => {
      return data.Category === item;
    });
    setMenu(newList);
  };

  return (
    <div className="menu-container-1">
      <div className="menu-container">
        <div className="menu-links-container">
          <div className="menu-link-wrapper">
            <input
              type="radio"
              className="menu-tabs"
              name="tab"
              id="tab1"
              defaultChecked={true}
              onChange={() => {
                filterData("pizza");
              }}
            ></input>
            <label htmlFor="tab1" className="menu-label">
              Pizza
            </label>
            <input
              type="radio"
              className="menu-tabs"
              name="tab"
              id="tab2"
              onChange={() => {
                filterData("Subs");
              }}
            ></input>
            <label className="menu-label" htmlFor="tab2">
              Subs
            </label>
            <input
              type="radio"
              className="menu-tabs"
              name="tab"
              id="tab3"
              onChange={() => {
                filterData("salad");
              }}
            ></input>
            <label className="menu-label" htmlFor="tab3">
              Salads
            </label>
          </div>
        </div>
        <div className="app-cards-container">
          <div className="cards">
            {menu.map((menuItems) => (
              <Card
                image={menuItems.image}
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
    </div>
  );
};

export default MenuPage;
