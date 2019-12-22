import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

export default (rootReducer ,rootSaga) => {
 const middleware = [];
 const enhancers = [];

 const sagaMiddleware = createSagaMiddleware();

 middleware.push(sagaMiddleware);

 enhancers.push(applyMiddleware(...middleware));
 
 enhancers.push( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
 const store = createStore(rootReducer , compose(...enhancers));

 sagaMiddleware.run(rootSaga);


 return store;
}