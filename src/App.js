import React, { useState } from "react";
import Login from "./Components/Login/Login";
import Menu from "./Components/Main/Menu";
import Header from "./Components/Header/Header";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState("");

  const loginHandler = (flag) => {
    setIsLoggedIn(flag);
  };

  const setUserNameHandler = (userName) => {
    setUserName(userName);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} userName={userName} />
      {isLoggedIn ? (
        <Menu />
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
