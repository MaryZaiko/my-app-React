import React,{FC} from "react";
import "./Button.css";


type ButtonProps = {
  onClick: () => void;
  className?:string;
  btnContent:string;
  disabled?:boolean;
}

const Button: FC<ButtonProps> = ({className, onClick, btnContent, disabled}) => {
  return <button disabled={disabled} className={className} onClick={onClick} >{btnContent}</button>;
};

export default Button
