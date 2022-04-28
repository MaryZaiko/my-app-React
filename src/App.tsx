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

function App() {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  // const MOCK_DATA = [
  //   {
  //     id: 1,
  //     image: "https://tinypng.com/images/social/website.jpg",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     date: "2022-04-18",
  //     lesson_num: 0,
  //     title: "What is Lorem ipsum?",
  //     author: 0,
  //   },
  //   {
  //     id: 2,
  //     image: "https://tinypng.com/images/social/website.jpg",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     date: "2022-02-10",
  //     lesson_num: 0,
  //     title: "What is Lorem ipsum?",
  //     author: 0,
  //   },
  //   {
  //     id: 3,
  //     image: "",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     date: "2022-01-01",
  //     lesson_num: 0,
  //     title: "What is Lorem ipsum?",
  //     author: 0,
  //   },
  //   {
  //     id: 4,
  //     image: "https://tinypng.com/images/social/website.jpg",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     date: "2021-12-18",
  //     lesson_num: 0,
  //     title: "What is Lorem ipsum?",
  //     author: 0,
  //   },
  // ];

  return (
    <ThemeModeProvider theme={Theme.Light} onChangeTheme={onChangeTheme}>
      <div className="App">
        {/* <MyPosts data={MOCK_DATA} /> */}
    <Authorization />

        </div>
    
    </ThemeModeProvider>
  );
}

export default App;
