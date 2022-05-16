import React, { FC } from "react";
import "./ToggleSwitch.css";
import classnames from "classnames";
// import { Theme, useThemeContext } from "./../../context/themeModeContext";

import { useDispatch, useSelector } from "react-redux";

const ToggleSwitch = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  const dispatch = useDispatch();

  const onClickTheme = (themeOfPage: string) => {
    console.log(themeOfPage);

    const lightTheme = { type: "light" };
    const darkTheme = { type: "dark" };
    dispatch(themeOfPage === "light" ? darkTheme : lightTheme);
  };

  return (
    <div className="form_toggle">
      <div className="form_toggle-item item-1">
        <input
          onClick={() => onClickTheme(theme)}
          id="fid-1"
          type="radio"
          name="radio"
          value="light"
          defaultChecked
        />
        <label htmlFor="fid-1">{theme === "dark" ? "Light" : "Dark"}</label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
