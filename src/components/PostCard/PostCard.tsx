import React from "react";
import "./PostCard.css";

const PostCard = (props: any) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";
  return (
    <div className="postsCard" key={props.id}>
      <div className="postsContent">
        <img
          src={props.image ? props.image : imgPost}
          alt={props.title}
          className="postsImg"
        />
        <h2 className="postsTitle">{props.title}</h2>
        <p className="postsText">{props.text}</p>
      </div>
      <span className="postsDate">{props.date}</span>
    </div>
  );
};

export default PostCard;
