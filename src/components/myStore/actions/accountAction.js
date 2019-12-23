import * as Types from '../types/types'
export const loggedIn = () => dispatch =>{

    dispatch({
        type : Types.LOGGEDIN,
        payload:{loggedIn:true}
    })
}
export const loggedOut = () => dispatch =>{
    dispatch({
        type : Types.LOGGOUT,
        payload:{loggedIn:false}
    })
}