import React from "react";
import Button from "../../components/Button";
import "./Confirmation.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import ToggleSwitch from "../../components/ToggleSwitch";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const navigate = useNavigate();

  const email = useSelector(AuthSelector.getTempMail);

  const onHomeClick = () => {
    navigate("/auth");
  };

  return (
    <div
      className={classnames(
        "confirmation",
        { ["container"]: isLightTheme },
        {
          ["darkContainer"]: !isLightTheme,
        }
      )}
    >
      <ToggleSwitch />
      <div className="confirmationContainer">
        <h1 className="title">Registration Confirmation</h1>

        <p className="confirmationMessage">
          Please activate you account with the activation link in the email
          <Button className={"btnReset"} btnContent={email || ""} />
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
