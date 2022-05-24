import React, { FC } from "react";
import "./ContentTitle.css";
import PostCard from "../../components/PostCard";
import HeaderPages from "../../components/HeaderPages";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useParams, Link } from "react-router-dom";
// import {SingleCardCard, setSingleCardCard} from '../../components/PostCard'
import {useSelector } from "react-redux";
import {
  loadData,
  PostSelectors,
  setPostsTab,
} from "../../redux/reducers/postsReducer";

const ContentTitle = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;


  const { id: cardId } = useParams();

  
  const activeTab = useSelector(PostSelectors.getPostsTab)
  const cardsList = useSelector((state) =>
  PostSelectors.getCards(state, activeTab)
);

const cardData =cardsList.find((card: any) => cardId === card.id);

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
