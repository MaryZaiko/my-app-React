import React, { FC } from "react";
import "./PostsList.css";
import PostCard from "../PostCard";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/themeModeContext'
import { NavLink } from 'react-router-dom'

import {useSelector } from "react-redux";



type PostsProps = {
  data: Card[]
}

type Card = {
id: string
image: string
title: string
text: string
date: string
}

const Posts: FC<PostsProps> = () => {
  const theme = useSelector((state: any) => state.theme.theme);

  const isLightTheme = theme === Theme.Light;

  const MOCK_DATA = [
    {
      id: 1,
      image: "https://tinypng.com/images/social/website.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-04-18",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: 2,
      image: "https://tinypng.com/images/social/website.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-02-10",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: 3,
      image: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-01-01",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: 4,
      image: "https://tinypng.com/images/social/website.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2021-12-18",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
  ];

  const cards = MOCK_DATA.map(({id, image, title, text, date}) => {
    return (
      <div 
      key={id}
      >
        <NavLink to="/cards-list/${id}">
        <PostCard
        image={image}
        title={title}
        text={text}
        date={date}
      />
        </NavLink>
      </div>
      
    );
  });

  return <div 
  className={classnames('postsContainer', {['darkContainer']: !isLightTheme})}>
    {cards}</div>;
};
export default Posts;
