import * as Types from "../types/types";
import store from "../index";
export const getTodos = () => dispatch => {
  //get request
  dispatch({
    type: Types.GET_TODOS
    //payload
  });
};
export const filterTodos = ( text) => dispatch => {
    //can I make it here ? 

  return dispatch({
    type: Types.FILTER_TODOS,
    payload: text
  });
};
export const addTodo = (todo) => dispatch => {
    dispatch({
        type: Types.ADD_TODO,
        payload:todo
    })
}
export const deleteTask = (name) => dispatch => {
    dispatch({
        type:Types.DELETE_TODO,
        payload:name
    })
}
export const search = (keyword) => dispatch => {
    dispatch({
        type:Types.SEARCH_TODO,
        payload : keyword
    })
}