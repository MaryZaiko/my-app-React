import React, { FC, useEffect, useState } from "react";
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
import PopUp from "../../components/PopUp";
import {
  loadData,
 
  PostSelectors,
  setPostsTab,
  setAllPostsLoading
} from "../../redux/reducers/postsReducer";


import Lottie from 'react-lottie';
import animationData from '../../components/Lotties/Fireworks.json';

const MyPosts = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllPostsLoading(true));
  }, []);

  const selectedImage = useSelector(PostSelectors.getSelectedImage);

  const activeTab = useSelector(PostSelectors.getPostsTab)
  const cardsList = useSelector((state) =>
  PostSelectors.getCards(state, activeTab)
);
const allPostsLoading = useSelector(PostSelectors.getAllPostsLoading)

  const TABS = [
    { tabName: "All", id: "allPosts" },
    { tabName: <i className="fa-regular fa-thumbs-up"></i>, id: "likedPosts" },
    {
      tabName: <i className="fa-regular fa-thumbs-down"></i>,
      id: "dislikedPosts",
    },
    { tabName: <i className="fa-solid fa-bookmark"></i>, id: "savedPosts" },
  ];
  
  const onTabClick = (tab: string) => {
    dispatch(setPostsTab(tab));
  };

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
      <div className="postsTabs">
        {TABS.map((tab) => {
          return (
            <button
              key={tab.id}
              className={classnames(
                isLightTheme ? "buttonTab" : "buttonTabDark",
                "buttonPostTab",

                { ["buttonTabActive"]: tab.id === activeTab }
              )}
              onClick={() => onTabClick(`${tab.id}`)}
            >
              {tab.tabName}
            </button>
          );
        })}
      </div>
{
  allPostsLoading ? <Lottie 
  options={defaultOptions}
    height={400}
    width={400}
  /> : <PostsList data={cardsList} />
}
      

      {selectedImage && (
        <PopUp>
          <img src={selectedImage} />
        </PopUp>
      )}
    </div>
  );
};

export default MyPosts;
