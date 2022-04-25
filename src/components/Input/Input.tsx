import React from "react";
import "./Input.css";


const Input = ({value, name, onChange, type, className, onBlur}: any) => {

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
