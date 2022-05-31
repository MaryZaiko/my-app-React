import React, { FC } from "react";
import "./PostCard.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useDispatch } from "react-redux";
import {
  setLikePost,
  setSavedPost,
  setSelectedImage,
} from "../../redux/reducers/postsReducer";
import { LikeStatus } from "../../common/types";
import Button from "../Button";

type PostCardProps = {
  id: string;
  image: string;
  title: string;
  text: string;
  date: string;
  isBig?: boolean;
  onClick?: (e:any) => void;
  likeStatus?: LikeStatus | null;
  saved?: boolean;
};

const PostCard: FC<PostCardProps> = ({
  isBig = false,
  id,
  image,
  title,
  text,
  date,
  onClick,
  likeStatus,
  saved,
}) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";

  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const dispatch = useDispatch();

  const onClickEye = (image: string) => {
    dispatch(setSelectedImage(image));
  };

  const handleButtonClick = (action: string, e:any) => {
     e.stopPropagation()// срабатывает всплытие на онклик по самой карточке для перехода на другую страницу

    // сломались лайки

    if (action === LikeStatus.Like || action === LikeStatus.Dislike) {
      dispatch(setLikePost({ id, action }));
    } else if (action === LikeStatus.Save || action === "unset") {
      dispatch(setSavedPost({ id, action }));
    }
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
        <img src={image ? image : imgPost} alt={title} className="postsImg" />
        <h2 className="postsTitle">{title}</h2>
        <p className={classnames(isBig ? "postTextIsBig" : "postsText")}>
          {text}
        </p>
      </div>
      <div className="footerCard">
        <div>
          <span className="postsDate">{date}</span>
          <i
            onClick={() => onClickEye(image || imgPost)}
            className="fa-solid fa-eye"
          ></i>
        </div>
        <div>
          <Button
            onClick={(e:any) => handleButtonClick(LikeStatus.Like, e)}
            className={classnames("btnIcon", "fa-regular", "fa-thumbs-up", {
              ["activeLike"]: likeStatus === LikeStatus.Like,
            })}
            btnContent=""
          />

          <Button
            onClick={(e:any) => handleButtonClick(LikeStatus.Dislike, e)}
            className={classnames("btnIcon", "fa-regular", "fa-thumbs-down", {
              ["activeDislike"]: likeStatus === LikeStatus.Dislike,
            })}
            btnContent=""
          />

          <Button
            onClick={(e:any) => handleButtonClick(saved ? "unset" : "save", e)}
            className={classnames("btnIcon", "fa-solid", "fa-bookmark", {
              ["activeSave"]: saved,
            })}
            btnContent=""
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
