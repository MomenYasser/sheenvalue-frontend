import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
  tasks:[],
  searchResult:[]
};



const addTask = (state, action) => {
 return (
  {
    ...state,
    tasks:[
    ...state.tasks,
    action.payload
   ],
  }
 )
}
const deleteTask = (state, action) => {
  const tasks = state.tasks.filter(task => task._id !== action.payload);
  return (
   {
     ...state,
     tasks
   }
  )
 }
 const searchTask = (state, action) => {
   console.log(action.payload)
  const searchResult = state.tasks.filter(task => task.name.includes(action.payload));
  return (
   {
     ...state,
     searchResult
   }
  )
 }

const reducer = (state = initialState, action) => {
 switch (action.type) {
  case actionTypes.ADD_TASK:
   return addTask(state, action);
  case actionTypes.DELETE_TASK:
   return deleteTask(state, action);
  case actionTypes.SEARCH_TASK:
    return searchTask(state, action);
  default:
   return state;
 }
};

export default reducer;