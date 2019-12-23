import React from 'react';
import { Provider } from 'react-redux'
import  store  from '../Redux'

export default (Component) => (props) => {
    
        return (
        <Provider store={store()}>
            <Component {...props}/>
        </Provider>
        );
    
}