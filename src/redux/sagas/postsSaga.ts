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
  setMyPosts,
  setTotalAllPostsCount,
  setTotalMyPostsCount,
  createPost
} from "../reducers/postsReducer";

import { getAllPostsApi, getSinglePost, getMyPosts,createPostApi } from "../api";
import { callCheckingAuth } from "./callCheckingAuth";

function* getAllPostsWorker(action: any) {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield call(getAllPostsApi, action.payload);

  if (status === 200) {
    yield put(setPosts(data.results));
    yield put(setTotalAllPostsCount(data.count));
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
function* getMyPostsWorker() {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield callCheckingAuth(getMyPosts);
  console.log(data);

  if (status === 200) {
    yield put(setMyPosts(data));
    yield put(setTotalMyPostsCount(data.count));

  }
  yield put(setAllPostsLoading(false));
}
function* createPostWorker(action:any) {
  const { data, status } = yield callCheckingAuth(getMyPosts,action.payload);
  console.log(status);
  console.log(data);


  if (status === 200) {
    

  }
 
}

export default function* postWatcher() {
  yield all([
    takeLatest(loadData, getAllPostsWorker),
    takeLatest(loadPost, getSinglePostWorker),
    takeLatest(loadMyPosts, getMyPostsWorker),
    takeLatest(createPost, createPostWorker),

  ]);
}
