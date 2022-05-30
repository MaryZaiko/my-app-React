import React, { FC, useEffect } from "react";
import "./ContentTitle.css";
import PostCard from "../../components/PostCard";
import HeaderPages from "../../components/HeaderPages";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useParams, Link } from "react-router-dom";
// import {SingleCardCard, setSingleCardCard} from '../../components/PostCard'
import {useDispatch, useSelector } from "react-redux";
import {
  loadData,
  PostSelectors,
  setPostsTab,
  loadPost
} from "../../redux/reducers/postsReducer";

const ContentTitle = () => {
  const { theme} = useThemeContext();
  const isLightTheme = theme === Theme.Light;

const  dispatch =  useDispatch();
  const { id: cardId } = useParams();

  useEffect(()=>{
    if(cardId){
      dispatch(loadPost(cardId))
    }
  },[cardId])
  

 

const cardData = useSelector(PostSelectors.getSelectedPost)



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
          id={cardData.id}
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
