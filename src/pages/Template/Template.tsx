import React from "react";
import Button from "../../components/Button";
import "./Template.css";

const Template = (props: any) => {
  return (
    <div className="template">
      <div className="icon-menu">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png" />
      </div>
      <div className="templateContainer">
        <h1 className="title">Template title</h1>
        <p className="templateBody">Template body</p>
        <Button className={"button button"} btnContent={"button"} onClick={() =>{}}/>
      </div>
    </div>
  );
};

export default Template;
