import { ADD_TODO, REMOVE_TODO,SEARCH_TODO,VALUE_CHANGE } from '../Actions/todo';


const initialState = {
  todos: [],
  ResultTodos:[]
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
      case SEARCH_TODO:
      return {
        ...state,
        ResultTodos: state.todos.filter((todo) => todo.task_name.includes(action.key))
      };
      case VALUE_CHANGE:
          const todos = state.todos;
          todos[action.index].task_name = action.value
        return{
          ...state,
          todos:[...todos]
        }

    default:
      return state;
  };
}

export default rootReducer;