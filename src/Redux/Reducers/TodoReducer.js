import * as types from '../Actions/Types'

const INIT = {
  tasks:[ {
    id : 1,
    task_name: "First",
    task_description: "Some descrition",
    timer : 0 ,
    running: false ,
    isDone : false ,
    state : 1 
},{
    id : 2,
    task_name: "Second",
    task_description: "Some descrition",
    timer : 213 ,
    running: false ,
    isDone : false ,
    state : 1
}]
};

export default (state = INIT , action ) => {
  switch (action.type ){
      case  types.MODIFY :
      return {
        ...state ,
        tasks:action.tasks
      }
      default :
      return state;
  }
}