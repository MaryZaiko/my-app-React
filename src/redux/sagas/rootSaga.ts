
import {all} from 'redux-saga/effects'
import authWatcher from './authSaga'
import postWatcher from './postsSaga'
import userWatcher from './userSaga'

export default function* rootSaga() {
    yield all([authWatcher(), postWatcher(),userWatcher()])
}