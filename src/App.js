import React from 'react'
import Login from './Screens/Login/Login'
import Signup from './Screens/Signup/Signup'
import Home from './Screens/Home/Home'
import Router from './Router/Router'
import Header from './Components/Header/Header'
import createStore from './Redux'
import { Provider } from 'react-redux';


const store=createStore();

function App() {
    return (
        <Provider store={store}>
            <div style={{ position: 'absolute',width: '100%',height: '100%',margin: 0 }}>
                <Header />
                <Router
                    routes={[
                        { path: '/login',component: <Login />,exac: true },
                        { path: '/signup',component: <Signup /> },
                        { path: '/home',component: <Home />,auth: true },
                    ]}
                />
            </div>
        </Provider>
    )
}

export default App;