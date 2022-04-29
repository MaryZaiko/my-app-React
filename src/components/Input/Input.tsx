import React, {FC} from "react";
import "./Input.css";

type InputProps ={
  value:string;
  name: string;
  onChange?:(e:any) => void;
  type:string
  className?:string;
  onBlur?:(e:any)=> void;
}


const Input = ({value, name, onChange, type, className, onBlur}:any) => {

  // const onInputChange = (event: any) => {
  //   onChange(event.target.value);
  // };

  return (
    <input
    value={value}
    name={name}
      type={type}
      onChange={onChange}
      className={className}
      onBlur={onBlur}
    />
  );
};

export default Input;
