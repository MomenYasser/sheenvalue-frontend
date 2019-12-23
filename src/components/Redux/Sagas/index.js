import {takeLatest, all} from 'redux-saga/effects';
import {EntityTypes} from "../Actions/Entity";
import entitySagas from './Entity'


export default function* root() {
yield all([
    takeLatest(EntityTypes.POST , entitySagas.post),
    takeLatest(EntityTypes.GET , entitySagas.get),
    takeLatest(EntityTypes.DELETE_METHOD,entitySagas.delete)  
])
}