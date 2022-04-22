import React from "react";
import "./FormRegistration.css";
import Input from "../Input";
import Button from "../Button";

const FormRegistration = () => {
  return (
    <form>
      <div className="input">
      <span>User name</span>
      <Input type="text"/>
    </div>
    <div className="input">
      <span>Email</span>
      <Input type="email"/>
    </div>
    <div className="input">
      <span>Password</span>
      <Input type="password"/>
    </div>
    <div className="input">
      <span>Confirm password</span>
      <Input type="password"/>
    </div>
    <Button className="button" btnContent="Login" />
    </form>
  )
};

export default FormRegistration
