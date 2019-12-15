export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SEARCH_TODO = 'SEARCH_TODO';
export const VALUE_CHANGE = 'VALUE_CHANGE'

             

export function addTodo(name, description) {
  return { 
     type: ADD_TODO, 
     name: name,
     description: description,
     };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id: id };
}
export function SearchTodo(key) {
  return { type: REMOVE_TODO, key:key };
}
export const valueChange = (index,value) => {
  return{type:VALUE_CHANGE, index:index, value:value}
  
}
