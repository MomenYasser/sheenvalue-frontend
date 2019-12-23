import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
  userData:null, // token,refreshtoken,username,expiretoken
};

const login= (state, action) => {
  return (
   {
     ...state,
     userData:action.payload
   }
  )
}

const logout= (state, action) => {
  return (
   {
     ...state,
     userData:null
   }
  )
}

const reducer = (state = initialState, action) => {
 switch (action.type) {
  case actionTypes.ON_LOGIN:
    return login(state, action);
  case actionTypes.ON_LOGOUT:
    return logout(state, action);
  default:
   return state;

 }
};

export default reducer;