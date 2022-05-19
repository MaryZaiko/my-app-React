import React, { FC } from "react";
import "./ContentTitle.css";
import PostCard from "../../components/PostCard";
import HeaderPages from "../../components/HeaderPages";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useParams, Link } from "react-router-dom";
// import {SingleCardCard, setSingleCardCard} from '../../components/PostCard'
import {useSelector } from "react-redux";

const ContentTitle = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const MOCK_DATA = [
    {
      id: "1",
      image: "https://tinypng.com/images/social/website.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-04-18",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: "2",
      image: "https://tinypng.com/images/social/website.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-02-10",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: "3",
      image: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-01-01",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: "4",
      image: "https://tinypng.com/images/social/website.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2021-12-18",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
  ];

  const { id: cardId } = useParams();

  const cardData = MOCK_DATA.find((card: any) => cardId === card.id);

  return (
    <div
      className={classnames(
        "contentTitle",
        { ["container"]: isLightTheme },
        { ["darkContainer"]: !isLightTheme }
      )}
    >
      <div>
        <h1 className="headerTitle">Content title</h1>
        {cardData && (
          <PostCard
          isBig
            image={cardData.image}
            title={cardData.title}
            text={cardData.text}
            date={cardData.date}
          />
        )}
      </div>
    </div>
  );
};
export default ContentTitle;
