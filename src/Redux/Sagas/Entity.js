import { put, delay } from "redux-saga/effects";

import EntityActions from '../Actions/Entity';

export default {
	*get({ key, data }) {},
	*post({ key, data }) {
    if (key === "Login") {
      const response = { ok: true };
      yield delay(5000);

      if (response.ok) {
        yield put(EntityActions.didPost(key, { token: "@234567#" }));
      } else {
        yield put(EntityActions.catchPost(key, { errors: "Email not found" }));
      }
    }
  },
	*put({ key, data }) {},
	*delete({ key, data }) {},
};
