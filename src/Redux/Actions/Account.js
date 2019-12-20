import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	login: ['data'],
	loginSuccess: ['token'],
	loginError: ['errors'],

	signup: ['data'],
	signupSuccess: ['token'],
	signupError: ['errors'],
}, {
	prefix: "Account/",
});

export const AccountTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
	token: null,
	loading: false,
	errors: null,
	profile: {},
});

/* ------------- Reducers ------------- */
export const login = state =>
	state.merge({ loading: true });

export const loginSuccess = (state, { token }) =>
	state.merge({ loading: false, token, });

export const loginError = (state, { errors }) =>
	state.merge({ loading: false, errors, });

export const signup = state =>
	state.merge({ loading: true });

export const signupSuccess = (state, { token }) =>
	state.merge({ loading: false, token, });

export const signupError = (state, { errors }) =>
	state.merge({ loading: false, errors, });


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.LOGIN]: login,
	[Types.LOGIN_SUCCESS]: loginSuccess,
	[Types.LOGIN_ERROR]: loginError,

	[Types.SIGNUP]: signup,
	[Types.SIGNUP_SUCCESS]: signupSuccess,
	[Types.SIGNUP_ERROR]: signupError,
});