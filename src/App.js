import React from 'react';
import Router from './Components/Router';
import Header from './Components/Header';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import AppScreen from './Screens/App';
import withStore from './HOCs/WithStore'

const storeWrapper = ( Component , props ) => withStore(Component , props ) // HOC

function App() {
 //const WithStoreAppScreen = storeWrapper(AppScreen);
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
          {
            path: '/app',
            component: <AppScreen/>,
            
          }
        ]}
      />
    </div>
  );
}

export default storeWrapper( App);
