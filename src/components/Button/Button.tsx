import React,{FC} from "react";
import "./Button.css";


type ButtonProps = {
  onClick: () => void;
  className:string;
  btnContent:string;
}

const Button: FC<ButtonProps> = ({className, onClick, btnContent}) => {
  return <button className={className} onClick={onClick} >{btnContent}</button>;
};

export default Button
