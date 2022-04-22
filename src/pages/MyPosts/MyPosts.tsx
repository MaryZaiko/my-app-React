import React from "react";
import "./MyPosts.css";
import PostsList from "../../components/PostsList";
import HeaderPages from "../../components/HeaderPages";
import Button from "../../components/Button";

const MyPosts = (props: any) => {
  return (
    <div className="MyPosts">
      <HeaderPages />
      <div className="titleContainer">
      <h1 className="headerTitle">My posts</h1> <Button className={'btnAny'} btnContent={'+Add'}/>

      </div>
      <PostsList data={props.data} />
    </div>

  );
};

export default MyPosts;
