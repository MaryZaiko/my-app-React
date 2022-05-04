import React, { FC, useState } from "react";
import "./PostCard.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";

type PostCardProps = {
  id?: string; //???????
  image: string;
  title: string;
  text: string;
  date: string;
};

const PostCard: FC<PostCardProps> = ({ id, image, title, text, date }) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";

  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const [ SingleCardCard, setSingleCard ] = useState('not');

  return (
    <div
      className={classnames(
        
        { ["postCard"]: SingleCardCard === 'not' },
        { ["cardLight"]: isLightTheme },
        { ["darkCard"]: !isLightTheme }
      )}
      key={id}
    >
      <div className="postsContent">
        <img src={image ? image : imgPost} alt={title} className="postsImg" />
        <h2 className="postsTitle">{title}</h2>
        <p className="postsText">{text}</p>
      </div>
      <span className="postsDate">{date}</span>
    </div>
  );
};

export default PostCard;
