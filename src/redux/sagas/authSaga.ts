import { all, takeLatest, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import {
  RegisterUser,
  registerUser,
  setLogStatus,
  setTempMail,
} from "../reducers/authReducer";
import { registerUser as registerUserApi } from "../api/index";

function* registerUserSaga(action: PayloadAction<RegisterUser>) {
  const { callback, email, name, password } = action.payload;

  const { data, status } = yield call(registerUserApi, {
    email,
    username: name,
    password,
  });
  if (status === 201) {
    console.log(data);
    yield put(setTempMail(data.email));
    callback();
  }
}
export default function* authWatcher() {
  yield all([takeLatest(registerUser, registerUserSaga)]);
}
