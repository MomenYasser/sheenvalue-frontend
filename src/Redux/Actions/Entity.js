import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";


/////////////// Actions and Types /////////////////
const { Types , Creators } = createActions({
 register:['key'],

 post: ['key','postData'],
 didPost: ['key','postData'],

 catchErrors: ['key','errors'],
},{
    prefix: "Entity"
});

export const EntityTypes = Types;
export default Creators;

////////// INIT State ///////////

export const INITIAL_STATE_ENTITY = Immutable({
   loading : false,
   postData: null,
   errors: null
});

export const INIT_STATE = Immutable({
   byKey:{},
});

//////////// Reducers ///////////
export const register = ( state , {key}) => 
  state.merge({
      byKey: {
          ...state.byKey,
          [key]:{
              ...INITIAL_STATE_ENTITY
          }
      }
  });
 
  export const post = ( state , {key ,postData}) => 
  state.merge({
      byKey: {
          ...state.byKey,
          [key]:{
              ...state.byKey.key,
              loading: true ,
              postData
          }
      }
  });

  export const didPost = ( state , {key , postData}) => 
  state.merge({
      byKey: {
          ...state.byKey,
          [key]:{
              ...state.byKey.key,
              loading: false ,
              postData
          }
      }
  });

  export const catchErrors = ( state , {key , errors}) => 
  state.merge({
      byKey: {
          ...state.byKey,
          [key]:{
              ...state.byKey.key,
              loading: false ,
              errors
          }
      }
  });
 

///////////  mapping /////////////
export const reducer = createReducer(INIT_STATE,{
 [Types.REGISTER]: register,

 [Types.POST]: post ,
 [Types.DID_POST]: didPost ,
 [Types.CATCH_ERRORS]: catchErrors,

});