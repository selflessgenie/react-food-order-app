import React from "react";
import "./Header.css";

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
        <div class="profile-name">
          <span>{props.userName}</span>
          <div class="dropdown-content">
            <button>Logout</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
