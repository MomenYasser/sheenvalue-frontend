import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
});

export default (rootReducer, rootSaga) => {
	const middleware = [];
	const enhancers = [];
  
	// Saga   
	const sagaMiddleware = createSagaMiddleware();
	middleware.push(sagaMiddleware);
// Push logger
//   middleware.push(logger);

	// Push middlewares   
	enhancers.push(applyMiddleware(...middleware));

	// Create the store
	const store = createStore(rootReducer, compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__()));

	// kick off root saga
  sagaMiddleware.run(rootSaga);

	return store;
};