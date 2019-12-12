import React,{useState} from "react";
import "./App.css";
import Login from "./Screens/Login/Login";
import Header from "./components/Header/Header";
import SingUp from "./Screens/SingUp/SingUp";
import Router from "./components/Router"
import Home from "./Screens/Home";

function App() {
  const [Loged, setLoged] = useState(localStorage.getItem("Token")?true:false);
  
  return (
    <div className="App">
      <Header
        Loged={Loged}
        setLoged={setLoged}
        childrens={[
          { name: "sing in",rout:'/login'},
          { name: "sing up",rout:'/signup'}
        ]}
      ></Header>
      <Router
        routes={[
          {
            path: '/login',
            component: <Login setLoged={setLoged} />,
            default: true,
          },
          {
            path: '/signup',
            component: <SingUp />,
          },
          {
            path:'/home',
            component:<Home/>,
            validation:true
          }
        ]}
      />
      <div id="component"></div>
    </div>
  );
}

export default App;
