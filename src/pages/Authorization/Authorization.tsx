import React, { useState } from "react";
import classnames from "classnames";

import "./Authorization.css";
import Button from "../../components/Button";
import FormLogin from "../../components/FormLogin";
import FormRegistration from "../../components/FormRegistration";
import HeaderAuth from "../../components/HeaderAuth";
import Confirmation from "../Confirmation";
import {Theme, useThemeContext} from './../../context/themeModeContext'
import ToggleSwitch from "../../components/ToggleSwitch";


const Authorization = () => {

  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;



  const [activeTab, setActiveTab] = useState("login");
  const [isConfirmed, setConfirmed] = useState(false);

  const onClickLogin = (name: string) => {
    setActiveTab(name);
  };

  const onClickRegister = () =>{
    setConfirmed(true);
  }



  return !isConfirmed ? (
    <div className={classnames('login', {['darkContainer']: !isLightTheme})}>
    
<ToggleSwitch/>

      <div className={"loginContainer"}>

        <HeaderAuth onClick={onClickLogin} tabActive={activeTab} />

        <div className="formContainer">
          {activeTab === "login" ? (
            <FormLogin onClickConfirm={onClickRegister}/>
          ) : (
            <FormRegistration onClick={onClickLogin}  onClickConfirm={onClickRegister}/>
          )}
        </div>
      </div>
     </div>
  ) :(
    <Confirmation />
  )
};

export default Authorization;
