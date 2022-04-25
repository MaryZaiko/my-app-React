import React from "react";
import "./ContentTitle.css";
import PostCard from "../../components/PostCard";
import HeaderPages from "../../components/HeaderPages";

const ContentTitle = (props: any) => {
  return (
    <div className="contentTitle">
      <HeaderPages />
      <h1 className="headerTitle">Conteent title</h1>
      <PostCard
        key={props.data[0].id}
        image={props.data[0].image}
        title={props.data[0].title}
        text={props.data[0].text}
        date={props.data[0].date}
      />
    </div>
  );
};
export default ContentTitle;
