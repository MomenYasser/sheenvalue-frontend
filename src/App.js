import React from 'react';
import { Provider } from 'react-redux';

import Router from './Components/Router';
import Header from './Components/Header';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

import createStore from './Redux'

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Header />
          
          <Router
            routes={[
              {
                path: '/login',
                component: <Login />,
                default: true,
              },
              {
                path: '/signup',
                component: <Signup />,
              },
            ]}
          />
        </div>
    </Provider>
  );
}

export default App;
