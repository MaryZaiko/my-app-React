import React from "react";
import "./PostCard.css";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/themeModeContext'

const PostCard = (props: any) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";
  
  
    const { theme, onChangeTheme = () =>{}} = useThemeContext()
    const isLightTheme = theme === Theme.Light;
  
  
  
  
  
    return (
    <div 
    className={classnames('postCard',{['cardLight']: isLightTheme}, {['darkCard']: !isLightTheme})}
    key={props.id}>
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
