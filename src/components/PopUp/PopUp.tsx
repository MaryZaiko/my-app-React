import React, { FC } from "react";
import "./PopUp.css";
import PostCard from "../PostCard";

import { useSelector, useDispatch } from "react-redux";
import { PostsSelectors } from "../../redux/reducers/postsReducer";
import { setSelectedPost } from "../../redux/reducers/postsReducer";

const PopUp = (el: any) => {
  const dispatch = useDispatch();

  const onCardClick = () => {
    dispatch(setSelectedPost(null));
  };
 

  return (
    <div>
      {el && (
        <div className="popUp">
          <div className="popUpContainer">
            <i
              onClick={onCardClick}
              className="fa-solid fa-xmark popUpClose"
            ></i>
            (typeof el === "string") ? <img src={el} alt="" /> :
            <PostCard {...el} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
