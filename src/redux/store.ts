import {
  // legacy_createStore as createStore,
  // combineReducers,
  compose,
} from "redux";
import {activeInfoTabsReducer} from './reducers/activeInfoTabsReducer'
import {changeThemeReducer} from './reducers/changeThemeReducer'
import {configureStore, combineReducers} from '@reduxjs/toolkit'

import postsReducer from './reducers/postsReducer'
import authReducer from './reducers/authReducer'


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function counterReducer(state = { value: 0 }, action: any) {
  switch (action.type) {
    case "counter/incremented":
      console.log("PLUS");
      return { value: state.value + 1 };
    case "counter/decremented":
      console.log("MINUS");
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  theme: changeThemeReducer,
  activeTabs: activeInfoTabsReducer,
  posts: postsReducer,
 auth:authReducer
})



export const store = configureStore({
  reducer: rootReducer,
});
