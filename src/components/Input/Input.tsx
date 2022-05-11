import React, { FC, ChangeEventHandler, FocusEventHandler } from "react";
import "./Input.css";

type InputProps = {
  value: string;
  name: string;
  onChange?: (e: ChangeEventHandler<HTMLInputElement> | undefined) => void;
  type: string;
  className?: string;
  onBlur?: (e: FocusEventHandler<HTMLInputElement> | undefined) => void;
};

const Input: FC<InputProps> = ({ value, name, onChange, type, className, onBlur }: any) => {
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
