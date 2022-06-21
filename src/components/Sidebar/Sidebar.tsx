import React, { FC } from "react";
import "./Sidebar.css";

import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { logout, setLogStatus } from "../../redux/reducers/authReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



// type SidebarProps ={
//   pageWrapId:string;
//   outerContainerId:string;
// }

//ВОПРОС ПО ТИПИЗАЦИИ

export default (props: any) => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const onLogOutClick = () => {
    const callback = () => {
      navigate("/auth");
    };
    dispatch(logout({callback}))
  };
  return (
    <Menu>
      <div>
        <NavLink className="menu-item" to="/cards-list">
          All posts
        </NavLink>
        <NavLink  className="menu-item" to="/add-post">
        Add post
        </NavLink>
      </div>
      <div>
        <NavLink className="menu-item" to="/info">
          Information
        </NavLink>
        <NavLink  className="menu-item" to="/cards-list-my">
        My posts
        </NavLink>
      </div>
      <div>
        <NavLink className="menu-item" to="/" onClick={onLogOutClick}>
          Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </NavLink>
      </div>
    </Menu>
  );
};
