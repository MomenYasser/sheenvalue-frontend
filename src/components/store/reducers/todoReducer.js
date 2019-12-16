import * as Types from "../types/types";
const initialState = {

        todos: [
          {
            task_name: "todo",
            task_description: "task desc",
            start_timer_button: "",
            pause_timer_button: "",
            drag_drop_indicator: "",
            menu_icon: "",
            star_icon: "",
            mark_as_done_indicator: ""
          },
          {
            task_name: "todo1",
            task_description: "task desc1",
            start_timer_button: "",
            pause_timer_button: "",
            drag_drop_indicator: "",
            menu_icon: "",
            star_icon: "",
            mark_as_done_indicator: ""
          }
        ],
    
        filtered: [],
        searchKeyword: ""

    
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_TODOS:
      return {
        ...state,
        isSearch: false
        //todos:action.payload
      };
    case Types.FILTER_TODOS:
      return {
        ...search(state, action.payload)
      };
    case Types.SET_TODOS:
      return {
        ...state,
        filtered: action.payload
      };
    case Types.ADD_TODO:
      const newTodo = {
        task_name: action.payload.title,
        task_description: action.payload.desc,
        start_timer_button: "",
        pause_timer_button: "",
        drag_drop_indicator: "",
        menu_icon: "",
        star_icon: "",
        mark_as_done_indicator: ""
      };
      return {
        ...state,
        todos: state.todos.concat(newTodo)
      };
    case Types.DELETE_TODO:
      console.log("delete");
      return {
        ...deleteTodo(state, action.payload)
      };
    case Types.SEARCH_TODO:
      const updatedList = state.todos.filter(todo =>
        todo.task_name.includes(action.payload)
      );
      if (!action.payload) {
        return {
          ...state,
          searchKeyword: action.payload,
          filtered: []
        };
      }
      return {
        ...state,
        filtered: updatedList,
        searchKeyword: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

const search = (state, text) => {
  return {
    ...state,
    isSearch: true,
    filtered: state.todos.filter(todo => todo.task_name.includes(text))
  };
};

const deleteTodo = (state, text) => {
  const newTodo = state.todos.filter(todo => todo.task_name !== text);
  // console.log(index, newTodo);
  return {
    ...state,
    isSearch: false,
    todos: newTodo
  };
};
export default taskReducer;
