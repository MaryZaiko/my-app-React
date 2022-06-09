import { all, takeLatest, put, call } from "redux-saga/effects";

import { getUserInfo, setAuthUserName } from "../reducers/userReducer";
import { setLogStatus } from "../reducers/authReducer";
import { getUserInfoApi } from "../api/index";

function* getUserInfoWorker(action: any) {
  const accessToken = localStorage.getItem("jwtAccessToken");
  const { status, data, problem } = yield call(getUserInfoApi, accessToken);
  console.log(status);
  if (status === 200) {
    yield put(setLogStatus(true));
    yield put(setAuthUserName(data.username));
  }
  console.log(data.username);
}

export default function* userWatcher() {
  yield all([takeLatest(getUserInfo, getUserInfoWorker)]);
}
