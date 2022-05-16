import React from "react";
import "./HeaderPages.css";
import Sidebar from "../Sidebar";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import ToggleSwitch from "../ToggleSwitch";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HeaderPages = () => {
  const theme = useSelector((state: any) => state.theme.theme);

  const isLightTheme = theme === Theme.Light;

  return (
    <div>
      <header
        className={classnames(
          "App",
          "headerPosition",
          { ["headerLight"]: isLightTheme },
          { ["darkHeader"]: !isLightTheme }
        )}
        id="outer-container"
      >
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <div className="headerPages">
            <span>
              <i className="fa-solid fa-user headerItem"></i>
            </span>
            <span className="headerItem">Username</span>
          </div>

          <ToggleSwitch />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default HeaderPages;
