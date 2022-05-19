import React, { FC, useState } from "react";
import "./PostCard.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useSelector, useDispatch } from "react-redux";
import {
  PostsSelectors,
  setSelectedPost,
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
  onClick
}) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";

  const { theme} = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const dispatch = useDispatch();
  const selectedCard = useSelector(PostsSelectors.getSelectedPost)

  const log = (e:any) => {
    console.log("hi!");
    e.stopPropagation();
  };

  return (
    <div onClick={onClick}
   
      className={classnames(
        isBig ? "singleCard" : "postCard",

        { ["cardLight"]: isLightTheme, ["darkCard"]: !isLightTheme }
      )}
      key={id}
    >
      {/* <div>
        {selectedCard && (
          <div style={{ background: "red", padding: "10px" }}>
            <PostCard {...selectedCard} />
          </div>
        )}
      </div> */}
      <div className="postsContent">
        <img src={image ? image : imgPost} alt={title} className="postsImg" />
        <h2 className="postsTitle">{title}</h2>
        <p className={classnames(isBig ? "postTextIsBig" : "postsText")}>
          {text}
        </p>
      </div>
      <div>
        <span className="postsDate">{date}</span>
        <i onClick={log} className="fa-solid fa-eye"></i>
      </div>
    </div>
  );
};

export default PostCard;
