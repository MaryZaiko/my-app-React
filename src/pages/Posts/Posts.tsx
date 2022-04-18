import React from "react";
import "./Posts.css";
import PostCard from "../../components/PostCard";

const Posts = (props: any) => {
  const cards = props.data.map((item: any) => {
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

  return <div className="posts-container">{cards}</div>;
};
export default Posts;
