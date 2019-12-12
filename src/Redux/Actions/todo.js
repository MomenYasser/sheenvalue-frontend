export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

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