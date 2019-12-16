import * as Types from "../types/types";
const initialState = {
  token:localStorage.getItem("token"),
  isLoggedIn: false
};
const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGGEDIN:
      let logged = action.payload
      console.log(logged)
      return {
        ...state,
        isLoggedIn: action.payload.loggedIn,
        token:localStorage.setItem("token","token here")
      };
    case Types.LOGGOUT:
      return {
        ...state,
        isLoggedIn:action.payload.loggedIn,
        token : localStorage.removeItem('token')
      }
    default: {
      return { ...state };
    }
  }
};
export default accountReducer;
