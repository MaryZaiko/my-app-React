import React, { useState } from "react";
import "./FormRegistration.css";
import Input from "../Input";
import Button from "../Button";

const FormRegistration = () => {
  const [activeTab, setActiveTab] = useState('login')

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
    <Button className="button" btnContent="Login" onClick={() =>{}}/>
    <div className="resetLogin">
          <span>If you have account you can</span>
          <Button className={"btnReset"} btnContent={"login"} onClick={() => setActiveTab("login")} />
        </div>
    </form>
  )
};

export default FormRegistration
