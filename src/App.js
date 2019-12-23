import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form'
import SignIn from './components/Form/SignIn/SignIn'
import Header from './components/Header/Header';
import SignUp from './components/Form/SignUp/SignUp';
import Router from './components/Router/Router';
import TodoList from './components/TodoList/TodoList';
import Counter from './components/Counter/Counter';
import CreateStore from "./components/Redux";
import {Provider} from "react-redux";
const store = CreateStore();

function App() {
  return (
      <Provider store={store}>
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
                    },
                    {
                      path:'/todo-list',
                      component:<TodoList/>
                    },
                    {
                      path:'/counter',
                      component:<Counter/>
                    },
              ]}/>
    </div>
      </Provider>
  );
}

export default App;
