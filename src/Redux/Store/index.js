import { createStore, combineReducers } from 'redux';
import TodoReducer from '../Reducers/Todo';
import RegisterReducer from "../Reducers/Register"

const rootReducer = combineReducers({
    todo: TodoReducer,
    Register: RegisterReducer
})
export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);