import React from "react";
import "../css/MenuSelect.scss";

const MenuSelect = () => {
  return (
    <div className="menu-items-select">
      <select name="menu-items">
        <option selected disabled hidden>
          Menu Items
        </option>
        <option value="pizza">Pizza</option>
        <option value="pizza">Subs</option>
        <option value="pizza">Salads</option>
        <option value="pizza">Wings</option>
        <option value="pizza">Deserts</option>
      </select>
    </div>
  );
};

export default MenuSelect;
