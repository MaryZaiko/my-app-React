import React, { Children, FC } from "react";
import "./PopUp.css";
import PostCard from "../PostCard";

import { useSelector, useDispatch } from "react-redux";
import { PostsSelectors } from "../../redux/reducers/postsReducer";
import { setSelectedPost,setSelectedImage } from "../../redux/reducers/postsReducer";
import { AnyAction } from "redux";

const PopUp = ({children}:any) => {
  const dispatch = useDispatch();

  const onCardClick = () => {
    dispatch(setSelectedImage(null));
  };
 

  return (
    <div>
        <div className="popUp">
          <div className="popUpContainer">
            <i
              onClick={onCardClick}
              className="fa-solid fa-xmark popUpClose"
            ></i>
            {children}
          </div>
        </div>
    </div>
  );
};

export default PopUp;
