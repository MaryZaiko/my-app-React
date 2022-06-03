import React from "react";
import Button from "../../components/Button";
import "./Confirmation.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const location: any = useLocation();

  const onHomeClick = () => {
    localStorage.setItem("isLoggedIn", "true");
    window.location.replace("/cards-list");
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
      <div className="confirmationContainer">
        <h1 className="title">Registration Confirmation</h1>

        <p className="confirmationMessage">
          Please activate you account with the activation link in the email
          <Button
            className={"btnReset"}
            btnContent={location.state.email || ""}
          />
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
