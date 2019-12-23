import {createActions ,createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable';
import reduce from 'lodash/reduce'

const {Types , Creators}  = createActions({

    register:['key'],
    get:['key','data'],
    post:['key','data'],
    put:['key','data'],
    delete:['key','data'],

    didGet:['key','data'],
    didPost:['key','data'],
    didPut:['key','data'],
    didDelete:['key','data'],

    catchGet:['key','data'],
    catchPost:['key','data'],
    catchPut:['key','data'],
    catchDelete:['key','data'],

    resetProps:['key','props'],
    removeEntity:['key']
},{
    prefix:'Entity/'
});
export const EntityTypes = Types;
export default Creators
let ENTITY_INITIAL_STATE = Immutable({
 loading: false,
  errors: null ,
  didPost:false,
  didGet:false,
  didPut:false,
  didDelete:false,
  catchPost:false,
  catchGet:false,
  catchPut:false,
  catchDelete:false,
    getData: null,
    postData: null,
    putData: null,
    deleteData: null,
});

let INITIAL_STATE = Immutable({
    byKey:{}
});

/// REDUCDERS

export const get = (state, {key , data}) => {
    return state.merge({
        byKey:{
            ...state.byKey,
            [key]:{
                ...state.byKey[key],
                loading:true,
                getData:data
            }
        }
    })
};


export const resetProps = (state,{key,props}) =>
    state.merge({
        byKey:{
            ...state.byKey,
            [key]: {
                ...state.byKey[key],
                ...reduce(props,(result , value) => {
                    result[value]=ENTITY_INITIAL_STATE[value];
                    return result
                },{})
            }
        }
    })

export const register = (state,{key , data}) => {
    return state.merge({
        byKey:{
            ...state.byKey,
            [key]: ENTITY_INITIAL_STATE
        }
    })
};
export const post = (state,{key , data}) =>{
    return state.merge({
        byKey:{
            ...state.byKey,
            [key]:{
                ...state.byKey[key],
                loading: true,
            }
        }
    })
};
export const didGet = (state,{key ,data}) =>
    state.merge({
        byKey:{
            ...state.byKey,
            [key]:{
                ...state.byKey[key],
                loading: false ,
                getData:data,
                didGet:true
            }
        }
    });

export const catchGet = (state , {key , data})=>
    state.merge({
        byKey:{
            ...state.byKey,
            [key]:{
                ...state.byKey[key],
                catchGet:true,
                getData:data,
            }
        }
    });

export const didPost = (state,{key , data}) =>
    state.merge({
        byKey: {
            ...state.byKey,
            [key]: {
                ...state.byKey[key],
                loading:false,
                didPost:true,
                postData:data
            }
        }
    });
export const catchPost = (state,{key , data}) =>
    state.merge({
        byKey: {
            ...state.byKey,
            [key]:{
                ...state.byKey[key],
                loading:false,
                catchPost:true,
                postData:data
            }

        }
    });
export const removeEntity = (state,{key}) => {
    return state.merge({
        byKey: {
            ...reduce(state.byKey, (result, entity, name) => {
                if (name !== key) {
                    result[name] = entity;
                }

                return result;
            }, {}),
        },
    });
};
/// Hookup Actions To Types
export const reducer = createReducer(INITIAL_STATE , {
    [Types.GET]:get,
    [Types.REGISTER]:register,
    [Types.POST]:post,
    [Types.REMOVE_ENTITY]:removeEntity,
    [Types.DID_POST]: didPost,
    [Types.CATCH_POST]:catchPost,
    [Types.RESET_PROPS]:resetProps,
    [Types.DID_GET] : didGet,
    [Types.CATCH_GET] : catchGet,
});

