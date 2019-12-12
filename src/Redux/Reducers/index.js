import { ADD_TODO, REMOVE_TODO } from '../Actions/todo';

const initialState = {
  todos: [{ 
            task_name:"task1",
            task_description:"",
            id:0,
            done:false,
          }]
};
function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
        let id =state.todos.length
      return {
         todos: [
          ...state.todos,
          {
            task_name: action.name,
            task_description:action.description,
            id:id,
            done: false,

          }
        ]
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id)
      };

    default:
      return state;
  };
}

export default rootReducer;