import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import reduce from 'lodash/reduce';

/////////////// Actions and Types /////////////////
const { Types , Creators } = createActions({
 register:['key'],
 unregister:['key'],

 post: ['key','postData'],
 didPost: ['key','postData'],

 catchErrors: ['key','errors'],
 resetProps: ['key','props'],
},{
    prefix: "Entity"
});

export const EntityTypes = Types;
export default Creators;

////////// INIT State ///////////

export const INITIAL_STATE_ENTITY = Immutable({
   loading : false,
   postData: null,
   errors: null,
   didPost: false,
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

  export const unregister = (state , {key}) => {
     
      
    let byKey = reduce (state.byKey, (result, value, name ) => {
        if ( name !== key ) {
            result[name] = value
        }
        return result;
    }, {} );
    return state.merge({
        byKey:{
            ...byKey
        }
    });
  }
 
  export const post = ( state , {key ,postData}) => 
  state.merge({
      byKey: {
          ...state.byKey,
          [key]:{
              ...state.byKey[key],
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
              ...state.byKey[key],
              loading: false ,
              didPost: true ,
              postData
          }
      }
  });

  export const catchErrors = ( state , {key , errors}) => 
  state.merge({
      byKey: {
          ...state.byKey,
          [key]:{
              ...state.byKey[key],
              loading: false ,
              errors
          }
      }
  });


  export const resetProps = ( state , {key, props}) => 
      state.merge({
          byKey:{
              ...state.byKey,
              [key]:{
                  ...state.byKey[key],
                  ...reduce(props,(result,value) => {
                      result[value] = INITIAL_STATE_ENTITY[value]; 
                      return result;
                  },{})
                } 
          }
      });
  

///////////  mapping /////////////
export const reducer = createReducer(INIT_STATE,{
 [Types.REGISTER]: register,
 [Types.UNREGISTER]: unregister,

 [Types.POST]: post ,
 [Types.DID_POST]: didPost ,
 [Types.CATCH_ERRORS]: catchErrors,

 [Types.RESET_PROPS]: resetProps,

});