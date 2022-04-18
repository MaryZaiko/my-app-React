import React from "react";
import "./Button.css";

const Button = (props: any) => {
  return <button className={props.className}>{props.btnContent}</button>;
};

export default Button;
