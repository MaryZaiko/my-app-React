import React from "react";
import Button from "../../components/Button";
import "./Confirmation.css";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/themeModeContext'


const Confirmation = () => {

  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;

  return (
    <div 
    className={classnames('confirmation', {['darkContainer']: !isLightTheme})}>
    
      <div className="confirmationContainer">
        <h1 className="title">Registration Confirmation</h1>
        
        <p className="confirmationMessage">
          Please activate you account with 
          the activation link in the email
          <a href="mailto:test@gmail.com">test@gmail.com</a> 
          Please, check your email.
        </p>
        <Button 
        className={classnames(!isLightTheme ? 'buttonDark': 'button')} 
        btnContent={"Home"} onClick={() =>{}}/>
      </div>
    </div>
  );
};

export default Confirmation;
