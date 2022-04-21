import React, { FC } from "react";
import "./PostsList.css";
import PostCard from "../PostCard";

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

const Posts: FC<PostsProps> = (props) => {
  const cards = props.data.map((item) => {
    return (
      <PostCard
        key={item.id}
        image={item.image}
        title={item.title}
        text={item.text}
        date={item.date}
      />
    );
  });

  return <div className="postsContainer">{cards}</div>;
};
export default Posts;
