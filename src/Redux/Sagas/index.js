import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { EntityTypes } from "../Actions/Entity";

/* ------------- Sagas ------------- */
import entitySagas from "./Entity";

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
	yield all([
		takeLatest(EntityTypes.GET, entitySagas.get),
		takeLatest(EntityTypes.POST, entitySagas.post),
		takeLatest(EntityTypes.PUT, entitySagas.put),
		takeLatest(EntityTypes.DELETE, entitySagas.delete),
	]);
}