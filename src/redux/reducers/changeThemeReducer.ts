import {
    legacy_createStore as createStore
  } from "redux";


export  function changeThemeReducer(state ={theme: 'light'}, action:any){
  switch (action.type) {
    case "dark":
        console.log('dark');
      return { theme: 'dark' };
    case "light":
      console.log('light');
      return { theme: 'light' };
    default:
      return state;
  }

}