import { put, delay } from "redux-saga/effects";

import EntityActions from '../Actions/Entity';

export default {
	*get({ key, data }) {
    if (key === "Home") {
      const response = { ok: true ,data:[{_id:'0',name:'nameTask0',description:'descriptionTask0'},{_id:'11111',name:'nameTask1',description:'descriptionTask1'},{_id:'22222',name:'nameTask2',description:'descriptionTask2'}]};
      yield delay(1000);

      if (response.ok) {
        yield put(EntityActions.didGet(key,response.data));
      } else {
        yield put(EntityActions.catchGet(key, { errors: "Bad request" }));
      }
    }
  },
	*post({ key, data }) {
    if (key === "Login") {
      const response = { ok: true };
      yield delay(1000);

      if (response.ok) {
        yield put(EntityActions.didPost(key, { token: "@234567#" }));
      } else {
        yield put(EntityActions.catchPost(key, { errors: "Email not found" }));
      }
    }
    if (key === "Home") {
      //response= api.postTask(data)
      const response = { ok: true };
      yield delay(1000);

      if (response.ok) {
        yield put(EntityActions.didPost(key,{...data}));
      } else {
        yield put(EntityActions.catchPost(key, { errors: "Email not found" }));
      }
    }
  },
	*put({ key, data }) {},
	*delete({ key, data }) {
    if (key === "Home") {
      //response= api.deleteTask(data)
      const response = { ok: true };
      yield delay(1000);

      if (response.ok) {
        yield put(EntityActions.didDelete(key,{...data}));
      } else {
        yield put(EntityActions.catchDelete(key, { errors: "Bad request" }));
      }
    }
  },
};
