import React from "react";
import "./HeaderPages.css";
import Sidebar from "../Sidebar";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/themeModeContext'
import ToggleSwitch from "../ToggleSwitch";
import {Outlet} from 'react-router-dom'


const HeaderPages = () => {

  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;


  return (
<div>
<div 
    className={classnames('App', {['header']: isLightTheme},{['darkHeader']: !isLightTheme})}
     
    id="outer-container">
      <ToggleSwitch />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <div className="headerPages">
          <span>
            <i className="fa-solid fa-user headerItem"></i>
          </span>
          <span className="headerItem">Username</span>
        </div>
      </div>
    </div>
    <Outlet />
</div>
    
  );
};

export default HeaderPages;
