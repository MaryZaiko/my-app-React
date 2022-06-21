import React, { useState } from "react";
import classnames from "classnames";
import "./Authorization.css";
import FormLogin from "../../components/FormLogin";
import FormRegistration from "../../components/FormRegistration";
import HeaderAuth from "../../components/HeaderAuth";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import ToggleSwitch from "../../components/ToggleSwitch";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/Fireworks.json";

import { useSelector } from "react-redux";
import { UserSelector } from "../../redux/reducers/userReducer";

const Authorization = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const [activeTab, setActiveTab] = useState("login");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const loginUserLoading = useSelector(UserSelector.getIsLoginUserLoading);

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
      {loginUserLoading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
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
      )}
    </div>
  );
};

export default Authorization;
