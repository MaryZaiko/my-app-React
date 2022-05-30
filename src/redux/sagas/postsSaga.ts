import { all, takeLatest, takeEvery, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterUser, setLodStatus } from "../reducers/authReducer";
import {
  setPosts,
  setPost,
  loadPost,
  setAllPostsLoading,
  setSinglePostLoading
} from "../reducers/postsReducer";
import { Card } from "../../common/types";

import React, { useEffect, useState } from "react";
import { getPosts, getSinglePost } from "../api";

function* postsSagaWorker() {
  const { data, status } = yield call(getPosts);

  if (status === 200) {
    yield put(setPosts(data.results));
  yield put(setAllPostsLoading(false))
    
  }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put (setSinglePostLoading(true)) //не работате лодинг
  const { data, status } = yield call(getSinglePost, action.payload);
  if (status === 200) {
    yield put(setPost(data));
    yield put(setSinglePostLoading(false))
  }
}

export default function* postWatcher() {
  yield all([
    takeLatest(setAllPostsLoading, postsSagaWorker),
    takeLatest(loadPost, getSinglePostWorker),
  ]);
}
