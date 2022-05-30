import React, { FC } from "react";
import "./HeaderAuth.css";
import Button from "../Button";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";

type HeaderAuthProps = {
  onClick: (name: string) => void;
  tabActive: string;
};

const HeaderAuth: FC<HeaderAuthProps> = ({ onClick, tabActive }) => {
  const isLoginActive = tabActive === "login";
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  return (
    <div className="titleContainer">
      <Button
        className={classnames(
          ` btnLogin`,
          isLightTheme ? "btnTitle" : "btnTitleDark",
          {
            ["btnTitleActive"]: isLoginActive,
          }
        )}
        btnContent={"Login"}
        onClick={() => onClick("login")}
      />
      <Button
        className={classnames(
          `btnRegistration `,
          isLightTheme ? "btnTitle" : "btnTitleDark",
          {
            ["btnTitleActive"]: !isLoginActive,
          }
        )}
        btnContent={"Registration"}
        onClick={() => {
          onClick("registration");
        }}
      />
    </div>
  );
};

export default HeaderAuth;
