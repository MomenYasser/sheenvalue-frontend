import { combineReducers } from "redux";

import Reducers from "../Reducers";

import rootSaga from "../Sagas";

import configureStore from "./CreateStore";

/* ------------- Assemble The Reducers ------------- */
export default () => {
	let reducers = combineReducers(Reducers);

	return configureStore(reducers, rootSaga);
};