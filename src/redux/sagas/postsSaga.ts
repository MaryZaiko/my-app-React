import { all, takeLatest, takeEvery, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterUser, setLodStatus } from "../reducers/authReducer";
import { loadData, addPosts } from "../reducers/postsReducer";
import { Card } from "../../common/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

// }
// const getPosts = () =>
//     fetch("https://studapi.teachmeskills.by/blog/posts/")
//     .then((response) => ({
//     response: response,
//     }))
//     .catch((err) => ({
//     err,
//     }));

// function* postsSagaWorker() {
//   const { response, err } = yield call(getPosts);
//   if (!err) {
//     const data = response.json();
//     console.log(data);
//     // yield put(loadPosts(data));
//   }
// }



// // let postsApi:Array<Card> = [];
// const getPosts = () => {
//   // let result;
//   const apiUrl = "https://studapi.teachmeskills.by/blog/posts/";
//   axios.get(apiUrl).then((resp) => {
//     console.log(resp);
//     const postsApi = resp.data.results;
//     setAppState({ posts: postsApi });
//     // postsApi = resp.data.results
//     // console.log(result);
//   });
//   //  return result
// };

const getPosts = () => axios.get('https://studapi.teachmeskills.by/blog/posts/')

function* postsSagaWorker() {
  //@ts-ignore
  const response = yield call(getPosts)
  console.log(response)
  // const { response, err } = yield call(getPosts);
  // let data:any = [];
  // yield  data = getPosts();
  // console.log(data);
  if (response.status === 200) {
    yield put(loadData(response.data.results));
  }
}

export default function* postWatcher() {
  yield all([takeLatest(addPosts, postsSagaWorker)]);
}
