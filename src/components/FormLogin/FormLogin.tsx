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
    <Button className="button" btnContent="Login" onClick={() =>{}}/>
    <div className="resetLogin">
          <span>Forgot your password?</span>
          <Button className={"btnReset"} btnContent={"Reset password"} onClick={() =>{}}/>
        </div>
    </form>
  )
};

export default FormLogin
