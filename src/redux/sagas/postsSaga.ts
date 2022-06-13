import { all, takeLatest, takeEvery, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import {
  setPosts,
  setPost,
  loadPost,
  loadData,
  setAllPostsLoading,
  setSinglePostLoading,
  loadMyPosts,
  // setMyPostsLoading,
  setMyPosts,
} from "../reducers/postsReducer";

import { getPosts, getSinglePost, getMyPosts } from "../api";
import { callCheckingAuth } from "./callCheckingAuth";


function* postsSagaWorker() {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield call(getPosts);

  if (status === 200) {
    yield put(setPosts(data.results));
  }
  yield put(setAllPostsLoading(false));
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status } = yield call(getSinglePost, action.payload);
  if (status === 200) {
    yield put(setPost(data));
  }
  yield put(setSinglePostLoading(false));
}
function* getMyPostsWorker(action: PayloadAction<string>) {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield callCheckingAuth(getMyPosts);
  console.log(data  );
  
  if (status === 200) {
    yield put(setMyPosts(data));
  }
  yield put(setAllPostsLoading(false));
}

export default function* postWatcher() {
  yield all([
    takeLatest(loadData, postsSagaWorker),
    takeLatest(loadPost, getSinglePostWorker),
    takeLatest(loadMyPosts, getMyPostsWorker),
  ]);
}
