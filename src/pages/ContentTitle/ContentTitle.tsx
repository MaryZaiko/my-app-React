import React from "react";
import "./ContentTitle.css";
import PostCard from "../../components/PostCard";
import HeaderPages from "../../components/HeaderPages";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/themeModeContext'


const ContentTitle = (props: any) => {

  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;


  return (
    <div 
    className={classnames('contentTitle',{['container']: isLightTheme}, {['darkContainer']: !isLightTheme})}>
      <HeaderPages />
      <h1 className="headerTitle">Content title</h1>
      <div className="postCardContainer">
      <PostCard
        key={props.data[0].id}
        image={props.data[0].image}
        title={props.data[0].title}
        text={props.data[0].text}
        date={props.data[0].date}
      />
      </div>
     
    </div>
  );
};
export default ContentTitle;
