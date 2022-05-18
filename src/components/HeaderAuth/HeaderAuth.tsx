import React, { FC } from "react";
import "./HeaderAuth.css";
import Button from "../Button";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useSelector } from "react-redux";

type HeaderAuthProps = {
  onClick: (name: string) => void;
  tabActive: string;
};

const HeaderAuth: FC<HeaderAuthProps> = ({ onClick, tabActive }) => {
  const isLoginActive = tabActive === "login";
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  return (
    <div className="titleContainer">
      <Button
        className={classnames(`btnTitle btnLogin`, {
          // ["btnTitleActiveDark"]: !isLightTheme && isLoginActive,
          ["btnTitleActive"]: isLoginActive,
        })}
        btnContent={"Login"}
        onClick={() => onClick("login")}
      />
      <Button
        className={classnames(`btnTitle btnRegistration `, {
          ["btnTitleActive"]: !isLoginActive,
        })}
        btnContent={"Registration"}
        onClick={() => {
          onClick("registration");
        }}
      />
    </div>
  );
};

export default HeaderAuth;
