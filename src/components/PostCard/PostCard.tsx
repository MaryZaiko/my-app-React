import React, { FC, useState } from "react";
import "./PostCard.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useSelector } from "react-redux";

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

  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

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
        <img src={image ? image : imgPost} alt={title} className="postsImg" />
        <h2 className="postsTitle">{title}</h2>
        <p className={classnames(isBig ? "postTextIsBig" : "postsText")}>
          {text}
        </p>
      </div>
      <span className="postsDate">{date}</span>
    </div>
  );
};

export default PostCard;
