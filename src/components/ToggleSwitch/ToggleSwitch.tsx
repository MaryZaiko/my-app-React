import React, { FC } from "react";
// import Input from "../Input";
import "./ToggleSwitch.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";

const ToggleSwitch = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();

  const onClickThemeDark = () => {
    onChangeTheme(Theme.Dark);
    console.log(theme);
    
  };
  const onClickThemeLight = () => {
    console.log(theme);
    onChangeTheme(Theme.Light);
  };

  return (
    <div className="form_toggle">
      <div className="form_toggle-item item-1">
        <input
        onClick={onClickThemeLight}
		// onClick={() => console.log('light')}
          id="fid-1"
          type="radio"
          name="radio"
          value="light"
          defaultChecked
        />
        <label htmlFor="fid-1">Light</label>
      </div>
      <div className="form_toggle-item item-2">
        <input 
		onClick={onClickThemeDark}
		// onClick={() => console.log('dark')}
		id="fid-2" 
		type="radio" 
		name="radio" 
		value="dark" />
        <label htmlFor="fid-2">Dark</label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
