import { put, delay } from "redux-saga/effects";

import EntityActions from '../Actions/Entity';

export default {
  *get({ key, data }) {
    if (key === "todos") {
      const response = {
        ok: true, data: {
          todos: [
            {
              task_name: "name",
              task_description: "description",
              id: 0,
              done: false
            }
          ]
        }
      };
      yield delay(500);
      if (response.ok) {
        yield put(EntityActions.didGet(key, {...response.data}));
      } else {
        yield put(EntityActions.catchGet(key, { errors: null }));
      }
    }
   },
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
    if (key === "todos") {
      const response = { ok: true }
      yield delay(500);
      if (response.ok) {
        yield put(EntityActions.didPost(key,data));
      } else {
        yield put(EntityActions.catchPost(key, { errors: null }));
      }
    }
  },
  *put({ key, data }) { 
    if (key === "todos") {
      const response = { ok: true }
      yield delay(200);
      if (response.ok) {
        yield put(EntityActions.didPut(key,data));
      } else {
        yield put(EntityActions.catchPut(key, { errors: null }));
      }
    }
  },

  *delete({ key, data }) { 
    if (key === "todos") {
      const response = { ok: true }
      yield delay(500);
      if (response.ok) {
        yield put(EntityActions.didDelete(key,{id:data}));
      } else {
        yield put(EntityActions.catchDelete(key, { errors: null }));
      }
    }
  },
};
