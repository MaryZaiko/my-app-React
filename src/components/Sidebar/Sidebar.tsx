import React, {FC} from "react";
import "./Sidebar.css";
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

// type SidebarProps ={
//   pageWrapId:string;
//   outerContainerId:string;
// }

export default (props:any) => {
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
      <a className="menu-item" href="/pizzas">
        Add posts
      </a>
      </div>
     <div>
     <a className="menu-item" href="/desserts">
        Log out  <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </a>
     </div>
      
    </Menu>
  );
};
