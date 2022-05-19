import React, { FC } from "react";
import "./PostsList.css";
import PostCard from "../PostCard";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {setSelectedPost} from '../../redux/reducers/postsReducer'
import {Card} from '../../common/types'
import { PostsSelectors, ImageSelectors} from "../../redux/reducers/postsReducer";
import PopUp from "../PopUp";


type PostsProps = {
  data: Card[];
};



const Posts: FC<PostsProps> = ({data}) => {

  const dispatch = useDispatch();

  const onCardClick = (item: Card) => {
    dispatch(setSelectedPost(item));
    
  };

  const selectedCard = useSelector(PostsSelectors.getSelectedPost);
  const selectedImage = useSelector(ImageSelectors.getSelectedImage);

  const cardList = data.map((card) => {


    return ( 
    // <Link key={card.id} to={`/cards-list/${card.id}`}>
    <PostCard
      image={card.image}
      title={card.title}
      text={card.text}
      date={card.date}
      onClick={() => onCardClick(card)}
    />
  // </Link>
  );
    })

    return <div className="postsList">
       <PopUp el={selectedCard || selectedImage}/>
      {cardList}
      </div>;
  };
export default Posts
