import React, {FC} from "react";
import "./MyPosts.css";
import PostsList from "../../components/PostsList";
import HeaderPages from "../../components/HeaderPages";
import Button from "../../components/Button";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/themeModeContext'

// type MyPostsProps ={
//   data:object;
// }

const MyPosts = ({data}:any) => {

  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;

  

  return (
    <div 
    className={classnames('myPosts',{['container']: isLightTheme}, {['darkContainer']: !isLightTheme})}>
    
      <div className="titlePostsContainer">
      <h1 className="headerTitle">My posts</h1> <Button className={'btnAny'} btnContent={'+Add'} onClick={() =>{}}/>

      </div>
      <PostsList data={data} />
    </div>

  );
};

export default MyPosts;
