import { put, delay } from "redux-saga/effects";

import EntityActions from '../Actions/Entity';

export default {
    *post({ key , postData}){
        let response = true ;
          yield delay(2000);
          if (response) {
            yield put(EntityActions.didPost( key, { token :"asdakkdkd"}));
        } else {
            yield put(EntityActions.catchErrors( key, ["no server "," no api "]));
        }
    }
}