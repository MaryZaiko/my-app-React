import React, { useState, FC, useEffect } from "react";
import "./FormRegistration.css";
import Input from "../Input";
import Button from "../Button";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/reducers/authReducer";

type FormRegistrationProps = {
  onClick: (name: string) => void;
};

const FormRegistration: FC<FormRegistrationProps> = ({ onClick }) => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const [userName, setUserName] = useState("");
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userNameErr, setUserNameErr] = useState(
    "This field must not be empty"
  );

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailErr, setEmailErr] = useState("This field must not be empty");

  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordErr, setPasswordErr] = useState(
    "This field must not be empty"
  );

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(
    "This field must not be empty"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (userNameErr || emailErr || passwordErr || confirmPasswordErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameErr, emailErr, passwordErr, confirmPasswordErr]);

  const dispatch = useDispatch();

  //ВОПРОС ПО ТИПИЗАЦИИ

  const userNameHandler = (e: any) => {
    setUserName(e.target.value);
    if (e.target.value.length < 2) {
      setUserNameErr("Name must contain at least 2 symbols");
      if (!e.target.value) {
        setUserNameErr("This field must not be empty");
      }
    } else {
      setUserNameErr("");
    }
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErr("Email is not correct");
    } else {
      setEmailErr("");
    }
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8 || e.target.value.length > 15) {
      setPasswordErr("Password must contain at least 8 and no more than 15");
      if (!e.target.value) {
        setPasswordErr("This field must not be empty");
      }
    } else {
      setPasswordErr("");
    }
  };

  const confirmPasswordHandler = (e: any) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordErr("Password not confirmed");
      if (!e.target.value) {
        setConfirmPasswordErr("This field must not be empty");
      }
    } else {
      setConfirmPasswordErr("");
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "userName":
        setUserNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;

      case "confirmPassword":
        setConfirmPasswordDirty(true);
        break;
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const callback = () => {
      navigate("/activate");
    };
    dispatch(
      registerUser({
        name: userName,
        password: password,
        email: email,
        callback,
      })
    );
  };

  return (
    <div
      className={classnames(
        { ["container"]: isLightTheme },
        { ["darkContainer"]: !isLightTheme }
      )}
    >
      <form>
        <div className="input">
          {userNameDirty && userNameErr && (
            <div style={{ color: "red" }}>{userNameErr}</div>
          )}
          <span>User name</span>
          <Input
            value={userName}
            onBlur={(e) => blurHandler(e)}
            onChange={userNameHandler}
            type="text"
            name="userName"
          />
        </div>
        <div className="input">
          {emailDirty && emailErr && (
            <div style={{ color: "red" }}>{emailErr}</div>
          )}
          <span>Email</span>
          <Input
            value={email}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
            type="email"
            name="email"
          />
        </div>
        <div className="input">
          {passwordDirty && passwordErr && (
            <div style={{ color: "red" }}>{passwordErr}</div>
          )}
          <span>Password</span>
          <Input
            value={password}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordHandler(e)}
            type="password"
            name="password"
          />
        </div>
        <div className="input">
          {confirmPasswordDirty && confirmPasswordErr && (
            <div style={{ color: "red" }}>{confirmPasswordErr}</div>
          )}
          <span>Confirm password</span>
          <Input
            value={confirmPassword}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => confirmPasswordHandler(e)}
            type="password"
            name="confirmPassword"
          />
        </div>

        <Button
          disabled={!formValid}
          className={classnames("button")}
          btnContent={"Login"}
          onClick={onSubmit}
        />

        <div className="resetLogin">
          <span>If you have account you can</span>
          <Button
            className={"btnReset"}
            btnContent={"login"}
            onClick={() => onClick("login")}
          />
        </div>
      </form>
    </div>
  );
};

export default FormRegistration;
