import React, { useState } from "react";
import "./Login.css";
import Button from "../../components/Button";
import FormLogin from "../../components/FormLogin";
import FormRegistration from "../../components/FormRegistration";

const Login = () => {
  // const [loginActive, setLoginActive] = useState(true);

  // const [registrationActive, setRegistrationActive] = useState(false);

  return (
    <div className="login">
      <div className="iconMenu">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png"
          alt="iconMenu"
        />
      </div>
      <div className="loginContainer">
        <div className="titleContainer">
          <Button
            className={"btnTitle btnLogin btnTitleActive"}
            btnContent={"Login"}
          />
          <Button
            className={"btnTitle btnRegistration "}
            btnContent={"Registration"}
          />
        </div>

        <div className="formContainer">
          {/* {loginActive} ? <FormLogin /> : <FormRegistration />; */}
        </div>

        <div className="resetLogin">
          <span>Forgot your password?</span>
          <Button className={"btnReset"} btnContent={"Reset password"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
