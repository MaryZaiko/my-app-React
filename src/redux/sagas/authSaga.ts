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

  const { data, status, problem } = yield call(registerUserApi, {
    email,
    username: name,
    password,
  });
  
  console.log(problem)
  if (status === 201) {
    console.log(data);
    yield put(setTempMail(data.email || ''));
    callback();
  }else {
    //@ts-ignore
    const al = yield call(registerUserApi, {
      email,
      username: name,
      password,
    });
    console.log(al)
  }
 
}
export default function* authWatcher() {
  yield all([takeLatest(registerUser, registerUserSaga)]);
}
