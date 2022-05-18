import React, { useState } from "react";
import classnames from "classnames";

import "./Authorization.css";
import Button from "../../components/Button";
import FormLogin from "../../components/FormLogin";
import FormRegistration from "../../components/FormRegistration";
import HeaderAuth from "../../components/HeaderAuth";
// import Confirmation from "../Confirmation";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import ToggleSwitch from "../../components/ToggleSwitch";
import { useSelector } from "react-redux";

const Authorization = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const [activeTab, setActiveTab] = useState("login");
  const [isConfirmed, setConfirmed] = useState(false);

  const onClickLogin = (name: string) => {
    setActiveTab(name);
  };

  // const onClickRegister = () => {
  //   setConfirmed(true);
  // };

  return (
    <div
      className={classnames(
        "login",
        { ["darkContainer"]: !isLightTheme },
        { ["container"]: isLightTheme }
      )}
    >
      <ToggleSwitch />

      <div className={"loginContainer"}>
        <HeaderAuth onClick={onClickLogin} tabActive={activeTab} />

        <div className="formContainer">
          {activeTab === "login" ? (
            <FormLogin />
          ) : (
            <FormRegistration onClick={onClickLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Authorization;
