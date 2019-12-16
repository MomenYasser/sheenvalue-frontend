import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import todoReducer from './todoReducer'
export default combineReducers({
  account:accountReducer,
  todo:todoReducer
})