import React from "react";
import "./Sidebar.css";
import { slide as Menu } from 'react-burger-menu'



export default (props: any) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        All posts
      </a>
      <a className="menu-item" href="/salads">
        My posts
      </a>
      <a className="menu-item" href="/pizzas">
        Add posts
      </a>
      <a className="menu-item" href="/desserts">
        Log out  <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </a>
    </Menu>
  );
};
