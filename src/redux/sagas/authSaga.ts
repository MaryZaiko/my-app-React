import { all, takeLatest,put } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterUser, registerUser,setLodStatus } from "../reducers/authReducer";

function* registerUserSaga(action: PayloadAction<RegisterUser>) {
  const { payload } = action;
  console.log(payload);
  yield put (setLodStatus(true))
}
export default function* authWatcher() {
  yield all([takeLatest(registerUser, registerUserSaga)]);
}
