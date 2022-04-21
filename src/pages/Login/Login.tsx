import React from "react";
import "./Login.css";
import Button from "../../components/Button";
import FormLogin from "../../components/FormLogin";
// import FormRegistration from "../../components/FormRegistration";

const Login = () => {
  return (
    <div className="login">
      <div className="icon-menu">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png" />
      </div>
      <div className="login-container">
        <div className="title-container">
          <Button className={'btnTitleActive'} btnContent={'Login'}/>
          <Button className={'btnTitleInActive'} btnContent={'Registration'}/>
        </div>
       <FormLogin />
        
        <div className="reset-login">
          <span>Forgot your password?</span>
          <Button className={"btn-reset"} btnContent={"Reset password"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
