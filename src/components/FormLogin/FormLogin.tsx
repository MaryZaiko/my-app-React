import React from "react";
import "./FormLogin.css";
import Input from "../Input";
import Button from "../Button";

const FormLogin = () => {
  return (
    <form>
    <div className="input">
      <span>Email</span>
      <Input type="email"/>
    </div>
    <div className="input">
      <span>Password</span>
      <Input type="password"/>
    </div>
    <Button className="button button-login " btnContent="Login" />
    </form>
  )
};

export default FormLogin
