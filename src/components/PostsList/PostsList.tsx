import React, { FC } from "react";
import "./PostsList.css";
import PostCard from "../PostCard";
import { Card } from "../../common/types";

type PostsProps = {
  data: Card[];
};

const Posts: FC<PostsProps> = ({ data }) => {
  const onClickCard = (id: string) => {
    window.location.href = `/cards-list/${id}`;
  };

  const cardList = data.map((card) => {
    return (
      <div key={card.id} onClick={() => onClickCard(card.id)}>
      <PostCard
        id={card.id || ""}
        image={card.image}
        title={card.title}
        text={card.text}
        date={card.date}
        likeStatus={card.likeStatus}
        saved={card.saved}
      />
       </div>
    );
  });

  return <div className="postsList">{cardList}</div>;
};
export default Posts;
