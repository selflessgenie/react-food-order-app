import React from "react";
import "./Header.css";
import cartIcon from "../../Assets/Header/cart.png";

const Header = (props) => {  
  return (
    <div className="header-container">
      <div className="logo-restaurant-name-container">
        <img
          src="http://www.wdsoft.in/wp-content/uploads/2020/08/LOGO-61.jpg"
          className="restaurant-logo"
        />
        <p>Hunger's Hub</p>
      </div>
      {props.isLoggedIn ? (
        <div className="cart-profile-name-container">
          <div className="cart-icon" onClick={props.toggleShowOrdersPage}>
            <img className="cart-icon-content"
              src={cartIcon}
            />
            <span className="cart-item-count">{props.cartCount}</span>
          </div>
          <div className="profile-name">
            <span>{props.userName}</span>
            <div className="dropdown-content">
              <button onClick={() => window.location.reload(false)}>Logout</button>
            </div>
          </div>
        <div/>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
