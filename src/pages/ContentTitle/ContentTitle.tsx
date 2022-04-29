import React, {FC} from "react";
import "./ContentTitle.css";
import PostCard from "../../components/PostCard";
import HeaderPages from "../../components/HeaderPages";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/themeModeContext'

// type ContentTitleProps ={
//   data: object
// }



const ContentTitle = ({data}:any) => {

  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;

// console.log(typeof data);

  return (
    <div 
    className={classnames('contentTitle',{['container']: isLightTheme}, {['darkContainer']: !isLightTheme})}>
      <HeaderPages />
      <h1 className="headerTitle">Content title</h1>
      <div className="postCardContainer">
      <PostCard
        key={data[0].id}
        image={data[0].image}
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
      </div>
     
    </div>
  );
};
export default ContentTitle;
