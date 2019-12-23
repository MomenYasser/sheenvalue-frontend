
import {createStore,applyMiddleware,compose} from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers/'
import thunk from 'redux-thunk'
const middleware = [thunk]
const store = createStore(
    rootReducer,
   compose( 
       applyMiddleware(...middleware,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);
export default store