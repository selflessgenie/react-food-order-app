import React, { useEffect } from "react";
import { useState } from "react";
import ItemCounter from "./ItemCounter";
import "./MenuCard.css";

const MenuCard = (props) => {
  const [localCart, setLocalCart] = useState(props.cart)
  const [count, setCount] = useState(0)

  const getCountById = (id) => {
    console.log("id", id)
    if (props.cart == null) return 0;
    var count = props.cart.map((item) => {
      if (item.id == id) return item.count;
    })[0]
  };

  useEffect(() => {
    var count = getCountById(props.id)
    console.log(count)
    setCount(count)
    console.log("item count",count)
  },[props.cart])

  return (
    <div className="card-container">
      <div className="food-description-price-container">
        <p>{props.name}</p>
        <p className="price">{props.price}</p>
      </div>
      <div className="food-img-counter-container">
        <img src={props.imageURL} className="food-img" />
        <ItemCounter
          defaultCount={count}
          cartDetailsHandler={props.cartDetailsHandler}
          id={props.id}
          price={props.price}
          name={props.name}
        />
      </div>
    </div>
  );
};

export default MenuCard;
