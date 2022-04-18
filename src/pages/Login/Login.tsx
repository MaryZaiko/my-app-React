import React from "react";
import "./Login.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title/Title";

const Login = () => {
  return (
    <div className="login">
      <div className="icon-menu">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png" />
      </div>
      <div className="login-container">
        <div className="title-container">
          <Title className={"title-active"} titleContent="Login" />
          <span className="title dash"> | </span>
          <Title className={"title"} titleContent={"Registration"} />
        </div>
        <div className="input-email">
          <span>Email</span>
          <Input type={"email"} className={"input-email"} />
        </div>
        <div className="input-password">
          <span>Password</span>
          <Input type={"password"} className={"input-password"} />
        </div>
        <Button className={"button-login"} btnContent={"Login"} />
        <div className="reset-login">
          <span>Forgot your password?</span>
          <Button className={"btn-reset"} btnContent={"Reset password"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
