import React, { FC, useState } from "react";
import "./PostCard.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useSelector, useDispatch } from "react-redux";
import {
  ImageSelectors,
  PostsSelectors,
  setSelectedImage,
} from "../../redux/reducers/postsReducer";

type PostCardProps = {
  id?: string;
  image: string;
  title: string;
  text: string;
  date: string;
  isBig?: boolean;
  onClick?: () => void;
};

const PostCard: FC<PostCardProps> = ({
  isBig = false,
  id,
  image,
  title,
  text,
  date,
  onClick,
}) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";

  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const dispatch = useDispatch();


  const onClickImage = (image: string, e?: { stopPropagation: () => void; } | undefined) => {
    dispatch(setSelectedImage(image));
  
  };

  

  const log = (e: any) => {
    console.log("hi!");
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClick}
      className={classnames(
        isBig ? "singleCard" : "postCard",

        { ["cardLight"]: isLightTheme, ["darkCard"]: !isLightTheme }
      )}
      key={id}
    >
   
      <div className="postsContent">
        <img
          src={image ? image : imgPost}
          alt={title}
          onClick={() => onClickImage(image || imgPost)}
          className="postsImg"
        />
        <h2 className="postsTitle">{title}</h2>
        <p className={classnames(isBig ? "postTextIsBig" : "postsText")}>
          {text}
        </p>
      </div>
      <div>
        <span className="postsDate">{date}</span>
        <i className="fa-solid fa-eye"></i>
      </div>
    </div>
  );
};

export default PostCard;
