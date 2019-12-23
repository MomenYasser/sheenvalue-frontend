import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import {EntityTypes as Types} from "../Actions/Entity"
import reduce from "lodash/reduce";


export const ENTITY_INITIAL_STATE = Immutable({
	loading: false,
	errors: null,
	didPost: false,
	didGet: false,
	didPut: false,
	didDelete: false,
	catchDelete: false,
	catchPut: false,
	catchPost: false,
	catchGet: false,
	getData: null,
	postData: null,
	putData: null,
	deleteData: null,
});

export const INITIAL_STATE = Immutable({
	byKey: {},
});

export const register = (state, {key}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: ENTITY_INITIAL_STATE,
		},
	});

export const get = (state, {key}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: true,
			},
		},
	});

export const post = (state, {key}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: true,
			},
		},
	});


export const put = (state, {key}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: true,
			},
		},
	});

export const deleteMethod = (state, {key}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: true,
			},
		},
	});

export const didPost = (state, {key, data}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: false,
				didPost: true,
				catchPost: false,
				postData: data,
			},
		},
	});

export const didGet = (state, {key, data}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: false,
				didGet: true,
				getData: data,
			},
		},
	});

export const didPut = (state, {key, data}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: false,
				didPut: true,
				putData: data,
			},
		},
	});

export const didDelete = (state, {key, data}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: false,
				didDelete: true,
				deleteData: data,
			},
		},
	});

export const catchGet = (state, {key, data}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: false,
				getData: data,
			},
		},
	});

export const catchPost = (state, {key, data}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				catchPost: true,
				loading: false,
				postData: data,
			},
		},
	});

export const catchPut = (state, {key, data}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: false,
				putData: data,
			},
		},
	});

export const catchDelete = (state, {key, data}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				loading: false,
				deleteData: data,
			},
		},
	});

export const resetProps = (state, {key, props}) =>
	state.merge({
		byKey: {
			...state.byKey,
			[key]: {
				...state.byKey[key],
				...reduce(props, (result, value) => {
					result[value] = ENTITY_INITIAL_STATE[value];

					return result;
				}, {}),
			},
		},
	});

export const removeEntity = (state, {key}) =>
	state.merge({
		byKey: {
			...reduce(state.byKey, (result, entity, name) => {
				if (name !== key) {
					result[name] = entity;
				}
				
				return result;
			}, {}),
		},
	});



export const reducer = createReducer(INITIAL_STATE, {
	[Types.REGISTER]: register,

	[Types.GET]: get,
	[Types.POST]: post,
	[Types.PUT]: put,
	[Types.DELETE]: deleteMethod,

	[Types.DID_POST]: didPost,
	[Types.DID_GET]: didGet,
	[Types.DID_PUT]: didPut,
	[Types.DID_DELETE]: didDelete,

	[Types.CATCH_POST]: catchPost,
	[Types.CATCH_GET]: catchGet,
	[Types.CATCH_PUT]: catchPut,
	[Types.CATCH_DELETE]: catchDelete,

	[Types.RESET_PROPS]: resetProps,
	[Types.REMOVE_ENTITY]: removeEntity,
});