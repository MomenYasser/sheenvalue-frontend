import { applyMiddleware, createStore, compose,combineReducers } from 'redux';
import logger from 'redux-logger'
import Note from '../Reducers/Note';
import Auth from '../Reducers/Auth';



const rootReducer = combineReducers({
    Note:Note,
    Auth:Auth
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
 rootReducer,
 compose(
     applyMiddleware(logger),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
);


export {store};



