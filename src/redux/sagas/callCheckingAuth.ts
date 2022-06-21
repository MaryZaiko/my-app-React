// @ts-nocheck

import { call, put } from "redux-saga/effects";
import { verifyToken, getNewAccessToken } from "../api/index";
import {logout} from '../reducers/authReducer'

type ApiType = (params: any) => response;

export function* callCheckingAuth(api: ApiType, ...rest:any) {
  const accessToken = localStorage.getItem("jwtAccessToken");
  const response = yield call(api, accessToken, ...rest);
  const code = response.status;
  console.log(response);
  

  if (code === 401) {
    const refreshToken = localStorage.getItem("jwtRefreshToken");
    const { status: accessStatus } = yield call(verifyToken, accessToken);
    const { status: refreshStatus } = yield call(verifyToken, refreshToken);

    if (refreshStatus === 401) {
      yield put(logout({}));
    } else if (accessStatus === 401) {
      const { status, data } = yield call(getNewAccessToken, refreshToken);
      if (status === 200 && data.access && data.access.length > 0) {
        localStorage.setItem("jwtAccessToken", data.access);
        const refreshedResponse = yield call(api, data.access, ...rest);
        return refreshedResponse;
      } else {
        yield put(logout({}));
      }
    } else {
      return response;
    }
  } else {
    return response;
  }
}
