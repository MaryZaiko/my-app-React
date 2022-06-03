import React, { useEffect } from "react";
import "./ContentTitle.css";
import PostCard from "../../components/PostCard";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  PostSelectors,
  loadPost,
  setSinglePostLoading,
} from "../../redux/reducers/postsReducer";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/Fireworks.json";

const ContentTitle = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const dispatch = useDispatch();
  const { id: cardId } = useParams();
  const singlePostLoading = useSelector(PostSelectors.getSinglePostLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (cardId) {
   
      dispatch(loadPost(cardId));
    }
  }, [cardId]);

  const cardData = useSelector(PostSelectors.getSelectedPost);

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
        {singlePostLoading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          cardData && (
            <PostCard
              id={cardData.id}
              isBig
              image={cardData.image}
              title={cardData.title}
              text={cardData.text}
              date={cardData.date}
            />
          )
        )}
      </div>
    </div>
  );
};
export default ContentTitle;
