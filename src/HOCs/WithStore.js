import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../Redux/CreateStore'

export default (Component) => (props) => {
    
        return (
        <Provider store={store}>
            <Component {...props}/>
        </Provider>
        );
    
}