import React, { FC } from "react";
import "./PostsList.css";
import PostCard from "../PostCard";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/themeModeContext'



type PostsProps = {
  data: Card[]
}

type Card = {
id: string
image: string
title: string
text: string
date: string
}

const Posts: FC<PostsProps> = ({data}) => {
  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;

  const cards = data.map(({id, image, title, text, date}) => {
    return (
      <PostCard
        key={id}
        image={image}
        title={title}
        text={text}
        date={date}
      />
    );
  });

  return <div 
  className={classnames('postsContainer', {['darkContainer']: !isLightTheme})}>
    {cards}</div>;
};
export default Posts;
