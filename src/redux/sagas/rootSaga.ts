
import {all} from 'redux-saga/effects'
import authWatcher from './authSaga'
import postWatcher from './postsSaga'

export default function* rootSaga() {
    yield all([authWatcher(), postWatcher()])
}