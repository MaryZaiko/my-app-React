import React, { FC, useState } from "react";
import "./MyPosts.css";
import PostsList from "../../components/PostsList";
import HeaderPages from "../../components/HeaderPages";
import Button from "../../components/Button";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useParams, Link } from "react-router-dom";
import PostCard from "../../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../common/types";
import { PostsSelectors} from "../../redux/reducers/postsReducer";

const MyPosts = () => {
  const { theme} = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const MOCK_DATA = [
    {
      id: '1',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4nghXV-ZZygDiTQeH5Z7-Zj5YcVWQHEBzw&usqp=CAU",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-04-18",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: '2',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpTuvplHSR3uAXV8OoLZ-1vyAen56RzzTkZrZnsysRyAOrE_LV0kNhZyTovl3uYxZxAc&usqp=CAU",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-02-10",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: '3',
      image: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-01-01",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: '4',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpJzk2Q0eYPP2YVmJbW9txuGW7y1YZKq-K4UGIpXw4Dmx250FNsOgUjuii7K6o54PdKc&usqp=CAU",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2021-12-18",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
  ];
  const selectedCard = useSelector(PostsSelectors.getSelectedPost);

 
  return (
    <div
      className={classnames(
        "myPosts",
        { ["container"]: isLightTheme },
        { ["darkContainer"]: !isLightTheme }
      )}
    >
      <div className="titlePostsContainer">
        <h1 className="headerTitle">My posts</h1>
        <Button className={"btnAny"} btnContent={"+Add"} onClick={() => {}} />
      </div>

      {/* <div>
       
        {selectedCard && (
          <div style={{ background: "red", padding: "10px" }}>
            <PostCard {...selectedCard} />
          </div>
        )}
      </div> */}


   
      <PostsList data={MOCK_DATA}/>

    </div>
  );
};

export default MyPosts;
