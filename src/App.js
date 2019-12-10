import React from 'react';

import Router from './Components/Router';
import Header from './Components/Header';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

function App() {
  return (
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
  );
}

export default App;
