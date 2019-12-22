import { takeEvery, takeLatest, all } from "redux-saga/effects";

import {EntityTypes} from '../Actions/Entity';

import EntitySagas from './Entity';


export default function* root(){
   yield all([
       takeLatest(EntityTypes.POST,EntitySagas.post),
   ]);
}