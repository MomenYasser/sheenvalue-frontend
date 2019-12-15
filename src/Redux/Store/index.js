import { createStore, combineReducers ,applyMiddleware,compose} from 'redux';
import TodoReducer from '../Reducers/Todo';
import RegisterReducer from "../Reducers/Register"
import logger from 'redux-logger'

const rootReducer = combineReducers({
    todo: TodoReducer,
    Register: RegisterReducer
})
export default createStore(
    rootReducer,
    compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);