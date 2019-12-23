import * as actionTypes from './ActionTypes';


export const addTask = (newNote)=>  {
  newNote={
    _id: new Date().getTime().toString(),
    ...newNote
  }
 return  {
  type: actionTypes.ADD_TASK,
  payload:newNote,
 };
}

export const deleteTask =(taskId)=>  {
 return  {
  type: actionTypes.DELETE_TASK,
  payload:taskId
 };
}


export const login =(data)=>  {
    // fetch(data) => response (userData)
    const userData={
        token:'dgf4vc4d45',
        refreshToken:'4dgc4fgf4',
    }
    
    return  {
     type: actionTypes.ON_LOGIN,
     payload:userData
    };
}

export const logout =()=>  {    
    return  {
     type: actionTypes.ON_LOGOUT,
    };
}


export const searchTask =(data)=>  {    
  return  {
   type: actionTypes.SEARCH_TASK,
   payload:data.search
  };
}


