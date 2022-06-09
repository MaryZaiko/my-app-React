// @ts-nocheck

import { call } from "redux-saga/effects";
import { verifyToken, getNexAccessToken } from "../api/index";

export function* callCheckingAuth(api: string, ...rest: string[]) {
    const accessToken = localStorage.getItem("jwtAccessToken");



  const response = yield call(api,accessToken, ...rest);
  const code = response.status;

  if (code === 401) {
    const refreshToken = localStorage.getItem("jwtRefreshToken");
    const { status: accessStatus } = yield call(verifyToken, accessToken);
    const { status: refreshStatus } = yield call(verifyToken, refreshToken);

    if (refreshStatus === 401) {
      //yield call(logout)
    } else if (accessStatus === 401) {
      const { status, data } = yield call(getNexAccessToken, refreshToken);
      if (status === 200 && data.access && data.access.length > 0) {
        localStorage.setItem("jwtAccessToken", data.access);
        const refreshedResponse = yield call(api,data.access, ...rest)
        return refreshedResponse
      }else{
      //yield call(logout)
      }
    } else {
      return response;
    }
  } else {
    return response;
  }
}
