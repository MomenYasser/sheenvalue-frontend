import {createStore , applyMiddleware,compose} from "redux";
import createSagaMiddleware from 'redux-saga'
import {createLogger} from "redux-logger/src";
const logger = createLogger({
    collapsed:true
});
export default (rootReducer , rootSaga) => {
    const middleware = [];
    const enhancers = []
    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)
    middleware.push(logger)
    enhancers.push(applyMiddleware(...middleware))
    const store = createStore(rootReducer,compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__()))
    sagaMiddleware.run(rootSaga);
    return store
}