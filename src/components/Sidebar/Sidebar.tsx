import React, { FC } from "react";
import "./Sidebar.css";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { setLogStatus } from "../../redux/reducers/authReducer";

// type SidebarProps ={
//   pageWrapId:string;
//   outerContainerId:string;
// }

//ВОПРОС ПО ТИПИЗАЦИИ

export default (props: any) => {
  const onLogOutClick = () => {
    localStorage.setItem("jwtAccessToken", "");
    localStorage.setItem("jwtRefreshToken", "");
    setLogStatus(false);
    window.location.replace("/");
  };
  return (
    <Menu>
      <div>
        <NavLink className="menu-item" to="/cards-list">
          All posts
        </NavLink>
      </div>
      <div>
        <NavLink className="menu-item" to="/info">
          Information
        </NavLink>
        <a className="menu-item" href="/add-posts">
          Add posts
        </a>
      </div>
      <div>
        <NavLink className="menu-item" to="/" onClick={onLogOutClick}>
          Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </NavLink>
      </div>
    </Menu>
  );
};
