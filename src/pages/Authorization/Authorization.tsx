import React, { useState } from "react";
import classnames from "classnames";
import "./Authorization.css";
import FormLogin from "../../components/FormLogin";
import FormRegistration from "../../components/FormRegistration";
import HeaderAuth from "../../components/HeaderAuth";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import ToggleSwitch from "../../components/ToggleSwitch";

const Authorization = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const [activeTab, setActiveTab] = useState("login");

  const onClickLogin = (name: string) => {
    setActiveTab(name);
  };

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
