import React, { useState } from "react";
import "./Login.css";
import Button from "../../components/Button";
import FormLogin from "../../components/FormLogin";
import FormRegistration from "../../components/FormRegistration";
import classnames from "classnames";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  const isLoginActive = activeTab === "login";
  const isRegistrationActive = activeTab !== "login";

  return (
    <div className="login">
      <div className="iconMenu">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png"
          alt="iconMenu"
        />
      </div>
      <div className={"loginContainer"}>
        <div className="titleContainer">
          <Button
            className={classnames(`btnTitle btnLogin`, {
              ["btnTitleActive"]: isLoginActive,
            })}
            btnContent={"Login"}
            onClick={() => setActiveTab("login")}
          />
          <Button
            className={classnames(`btnTitle btnRegistration `, {
              ["btnTitleActive"]: isRegistrationActive,
            })}
            btnContent={"Registration"}
            onClick={() => {
              setActiveTab("registration");
            }}
          />
        </div>

        <div className="formContainer">
          {activeTab === "login" ? <FormLogin /> : <FormRegistration />}
        </div>
      </div>
    </div>
  );
};

export default Login;
