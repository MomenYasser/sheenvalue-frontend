import {combineReducers} from "redux";
import configureStore from './CreateStore';
import Reducers from './Actions'
import rootSaga from './Sagas';


export default () =>{
    let reducers = combineReducers(Reducers);
    return configureStore(reducers, rootSaga);
}