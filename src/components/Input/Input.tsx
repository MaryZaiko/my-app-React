import React, { FC, ChangeEventHandler, FocusEventHandler } from "react";
import "./Input.css";

type InputProps = {
  value: string;
  name: string;
  onChange?: (value: any) => void;
  type: string;
  className?: string;
  onBlur?: (e: FocusEventHandler<HTMLInputElement> | undefined) => void;
};

const Input: FC<InputProps> = ({ value, name, onChange, type, className, onBlur }: any) => {
  // const onInputChange = (event: any) => {
  //   if (event.target) {
  //     onChange(event.target.value);
  //   }
  // }; СЛЕТАЕТ ИЗ-ЗА ТИПОВ

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
