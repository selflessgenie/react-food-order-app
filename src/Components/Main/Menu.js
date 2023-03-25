import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import "./Menu.css";
import StaticMenuData from "../../Assets/Menu/MenuData/StaticMenuData";
import CartTab from './CartTab';
import OrdersModal from "./OrdersModal";

const Menu = (props) => {
  const [cart, setCart] = useState(null);
  const [orders, setOrders] = useState(null);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [price, setPrice] = useState(0);

  const getCountById = (id) => {
    if (cart == null) return 0;
    var count = cart.filter((item) => {
      if (item.id === id) return item.count;
    })[0]
    return count != null ? count.count != undefined ? count.count : 0 : 0;
  };

  const ordersDetailsHandler = () => {
    if(orders == null) {
      setOrders(cart);
    } else {
     let newOrders = [...orders]; 
     cart.forEach((c) => {
      let flag = false;
      let newOrder = null;
      orders.forEach((order) => {
        if(c.id == order.id) {
          order.count = order.count + c.count;
          flag = true;
          newOrder = order;
        }
      })
      if(flag == false) {
        newOrders.push(c);
      }
     })
     setOrders(newOrders); 
    }
    setCart(null);
  }

  useEffect(() => {
    console.log("orders - ", orders)
    let count = 0;
    if(orders != null && orders != undefined) {
      orders.forEach((order)=>{
        count = count + order.count;
      })
    }
    props.setCartCount(count)
  }, [orders])

  const cartDetailsHandler = (count, id, price, name) => {
    
    if(cart != null){
      let nextCart = [...cart];
      let orderIndex = nextCart.findIndex(order => order.id == id);
      let order = null;
      if(orderIndex > -1){
        order = nextCart[orderIndex];
        order.count = count;
        nextCart.splice(orderIndex, 1);
      }
      else{
        order = {id: id, count: count, price: price, name: name};
      }
      if(count > 0)
        nextCart.push(order);
      setCart(nextCart);
    } else {
      if(count == 0)
        return;
      const temp = [{id: id, count: count, price: price, name: name}];
      setCart(temp);
    }
  }

  useEffect(() => {
    if(cart != null) {
      setCart(cart.sort((item1, item2)=>{
        if(item1.id < item2.id)
          return -1
      }))
    }

    let numberOfItems = 0;
    let price = 0;
    if(cart != null) {
      cart.forEach(element => {
        numberOfItems += element.count;
        price += element.count * (element.price);
      });
      setNumberOfItems(numberOfItems);
      setPrice(price);
    } 
    console.log(cart)
  }, [cart])
  

  return (
    <div className="menu-container">
      {props.showOrdersPage ? 
        <OrdersModal 
          modalVisible={props.showOrdersPage}
          toggleShowOrdersPage = {props.toggleShowOrdersPage}
          orders = {orders}
        /> : <></>
      }

      {StaticMenuData &&
        StaticMenuData.map((menu) => (
          <MenuCard
            key={menu.id}
            id={menu.id}
            name={menu.name}
            price={menu.price}
            imageURL={menu.img}
            cartDetailsHandler = {cartDetailsHandler}
            cart = {cart}
            count = {getCountById(menu.id)}
          />
        ))}
        {cart && cart.length > 0 ?
          <CartTab 
            numberOfItems = {numberOfItems} 
            price = {price} 
            cartDetails = {cart}
            cartDetailsHandler = {cartDetailsHandler}
            ordersDetailsHandler = {ordersDetailsHandler}
          /> : <></>
        }
    </div>
  );
};

export default Menu;
