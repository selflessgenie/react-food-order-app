import React, { useState } from "react";
import Login from "./Components/Login/Login";
import Menu from "./Components/Main/Menu";
import Header from "./Components/Header/Header";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showOrdersPage, setShowOrdersPage] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const loginHandler = (flag) => {
    setIsLoggedIn(flag);
  };

  const setUserNameHandler = (userName) => {
    setUserName(userName);
  };

  const toggleShowOrdersPage = () => {
    setShowOrdersPage(!showOrdersPage)
  }

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} userName={userName} toggleShowOrdersPage = {toggleShowOrdersPage} cartCount = {cartCount}/>
      {isLoggedIn ? (
        <Menu showOrdersPage = {showOrdersPage} toggleShowOrdersPage = {toggleShowOrdersPage} setCartCount = {setCartCount}/>
      ) : (
        <Login
          loginHandler={loginHandler}
          setUserNameHandler={setUserNameHandler}
        />
      )}
    </div>
  );
};

export default App;
