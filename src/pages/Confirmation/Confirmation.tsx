import React from "react";
import Button from "../../components/Button";
import "./Confirmation.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import ToggleSwitch from "../../components/ToggleSwitch";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const Confirmation = () => {
  const theme = useSelector((state: any) => state.theme.theme);

  const isLightTheme = theme === 'light';

  const location: any  = useLocation();
  console.log(location.state.email);
  

  const onHomeClick = () => {
    localStorage.setItem("isLoggedIn", "true");
    window.location.replace("/cards-list");
  };

  return (
    <div
      className={classnames('confirmation',
        {['container']:isLightTheme}, 
        {
        ["darkContainer"]: !isLightTheme,
      })}
    >
      <ToggleSwitch />
      <div className="confirmationContainer">
        <h1 className="title">Registration Confirmation</h1>

        <p className="confirmationMessage">
          Please activate you account with the activation link in the email
          <Button className={"btnReset"} btnContent={ location.state.email || ''} />
          Please, check your email.
        </p>
        <Button
          className={classnames(!isLightTheme ? "buttonDark" : "button")}
          btnContent={"Home"}
          onClick={onHomeClick}
        />
      </div>
    </div>
  );
};

export default Confirmation;
