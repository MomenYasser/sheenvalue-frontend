import React, { useState } from "react";
import "./App.css";
import Login from "./Screens/Login/Login";
import Header from "./components/Header/Header";
import SingUp from "./Screens/SingUp/SingUp";
import Router from "./components/Router";
import Home from "./Screens/Home";

function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <div className="App">
      <Header
        isAuth={isAuth}
        setAuth={setAuth}
        childrens={[
          { name: "sing in", rout: "/login" },
          { name: "sing up", rout: "/signup" }
        ]}
      ></Header>
      <Router
        routes={[
          {
            path: "/login",
            component: <Login />,
            default: true
          },
          {
            path: "/signup",
            component: <SingUp  />
          },
          {
            path: "/home",
            component: <Home/>,
            validation: true
          }
        ]}
      />
      <div id="component"></div>
    </div>
  );
}

export default App;
