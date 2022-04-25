import React from "react";
import "./Input.css";


const Input = (props: any) => {
  // const onInputChange = (event: any) => {
  //   onChange(event.target.value);
  // };

  return (
    <input
      type={props.type}
      // onChange={onInputChange}
      className={props.className}
    />
  );
};

export default Input;
