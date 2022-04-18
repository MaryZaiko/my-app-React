import React from "react";
import "./PostCard.css";

const PostCard = (props: any) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";
  return (
    <div className="posts-card" key={props.id}>
      <div className="posts-content">
        <img
          src={props.image ? props.image : imgPost}
          alt={props.title}
          className="posts-img"
        />
        <h2 className="posts-title">{props.title}</h2>
        <p className="posts-text">{props.text}</p>
      </div>
      <span className="posts-date">{props.date}</span>
    </div>
  );
};

export default PostCard;
