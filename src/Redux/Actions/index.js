import * as types from '../Actions/Types';

export const modify = ( tasks ) => {
 return {
     type:types.MODIFY,
     tasks
 }
}
