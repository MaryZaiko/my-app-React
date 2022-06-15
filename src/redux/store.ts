import {
  compose,
} from "redux";
import { activeInfoTabsReducer } from "./reducers/activeInfoTabsReducer";
import { configureStore, combineReducers, MiddlewareArray } from "@reduxjs/toolkit";

import postsReducer from "./reducers/postsReducer";
import authReducer from "./reducers/authReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import userReducer from "./reducers/userReducer";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  activeTabs: activeInfoTabsReducer,
  posts: postsReducer,
  auth: authReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga)