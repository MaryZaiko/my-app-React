import React, { useState } from "react";
import "./App.css";
import HeaderPages from "./components/HeaderPages";
import Confirmation from "./pages/Confirmation";
import Authorization from "./pages/Authorization";
import Template from "./pages/Template";
import PostsList from "./components/PostsList";
import MyPosts from "./pages/MyPosts";
import ContentTitle from "./pages/ContentTitle";
import { ThemeModeProvider } from "./context/themeModeProvider";
import { Theme } from "./context/themeModeContext";
import Information from "./pages/Information";
import Router from "./pages/Router";

import {Provider} from 'react-redux'
import { store } from "./redux/store";



function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };


  return (
    <Provider store={store}> 

   
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className="App">
        <Router />
        
      </div>
    </ThemeModeProvider>

    </Provider>
  );
}

export default App;
