import React, { FC } from "react";
import "./PopUp.css";
import PostCard from "../PostCard";

import { useSelector, useDispatch } from "react-redux";
import { PostsSelectors } from "../../redux/reducers/postsReducer";
import { setSelectedPost } from "../../redux/reducers/postsReducer";

const PopUp = () => {
  const selectedCard = useSelector(PostsSelectors.getSelectedPost);

  const dispatch = useDispatch();

  const onCardClick = () => {
    dispatch(setSelectedPost(null));
  };
  return (
    <div>
      {selectedCard && (
        <div className="popUp">
          <div className="popUpContainer">
            <i
              onClick={onCardClick}
              className="fa-solid fa-xmark popUpClose"
            ></i>
            <PostCard {...selectedCard} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
