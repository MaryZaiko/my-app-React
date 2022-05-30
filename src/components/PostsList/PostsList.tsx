import React, { FC } from "react";
import "./PostsList.css";
import PostCard from "../PostCard";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../common/types";
import {
  PostSelectors,
} from "../../redux/reducers/postsReducer";
import PopUp from "../PopUp";

type PostsProps = {
  data: Card[];
};

const Posts: FC<PostsProps> = ({ data }) => {
 const onClickCard = (id:string) =>{
   window.location.href =`/cards-list/${id}`
 }

  const cardList = data.map((card) => {
    return (
      // <Link key={card.id} to={`/cards-list/${card.id}`}>
    <div key={card.id} onClick={() => onClickCard(card.id)}>
      <PostCard
        id={card.id || ''}
        image={card.image}
        title={card.title}
        text={card.text}
        date={card.date}
        likeStatus={card.likeStatus }
        saved={card.saved}
        
      />
    </div>
      
      //  </Link>
    );
  });

  return (
    <div className="postsList">
 
      {cardList}
      
    </div>
  );
};
export default Posts;
