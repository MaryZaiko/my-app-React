// @ts-nocheck

import { call } from "redux-saga/effects"
import {verifyToken} from '../api/index'

export function* callCheckingAuth(api:string, ...rest:string[]){
    const response = yield call(api, ...rest)
    const code = response.status

    if (code === 401) {
        const {status} = yield call(verifyToken)
        //401: When the resource is unauthorized
    }else{
        return response

    }

}

