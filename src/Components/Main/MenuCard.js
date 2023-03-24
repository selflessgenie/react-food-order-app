import React from "react";
import ItemCounter from "./ItemCounter";
import "./MenuCard.css";

const MenuCard = (props) => {
  return (
    <div className="card-container">
      <div className="food-description-price-container">
        <p>{props.name}</p>
        <p className="price">{props.price}</p>
      </div>
      <div className="food-img-counter-container">
        <img src={props.imageURL} className="food-img" />
        <ItemCounter
          defaultCount={props.count}
          cartDetailsHandler={props.cartDetailsHandler}
          id={props.id}
          price={props.price}
          name={props.name}
          cart = {props.cart}
        />
      </div>
    </div>
  );
};

export default MenuCard;
