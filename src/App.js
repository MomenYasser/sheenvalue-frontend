import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form'
import SignIn from './components/Form/SignIn/SignIn'
import Header from './components/Header/Header';
import SignUp from './components/Form/SignUp/SignUp';
import Router from './components/Router/Router';
function App() {
  console.log(this)
  return (
    <div>
      <Header/>
      <Router
              routes={[
                    {
                      path:'/login',
                      component:<SignIn/>,
                      default:true
                    },
                    {
                      path:'/signup',
                      component:<SignUp/>
                    }
              ]}/>
    </div>
    
  );
}

export default App;
