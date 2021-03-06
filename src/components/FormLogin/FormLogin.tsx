import React, { useEffect, useState } from "react";
import "./FormLogin.css";
import Input from "../Input";
import Button from "../Button";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailErr, setEmailErr] = useState("This field must not be empty");
  const [passwordErr, setPasswordErr] = useState(
    "This field must not be empty"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailErr || passwordErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailErr, passwordErr]);

  const emailHandler = (value: string) => {
    setEmail(value);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(value).toLowerCase())) {
      setEmailErr("Email is not correct");
    } else {
      setEmailErr("");
    }
  };

  const passwordHandler = (value: string) => {
    setPassword(value);
    if (value.length < 8 || value.length > 15) {
      setPasswordErr(
        "Password must contain at least 8 symbols and no more than 15 symbols"
      );
      if (!value) {
        setPasswordErr("This field must not be empty");
      }
    } else {
      setPasswordErr("");
    }
  };
  //!!??? не типизируется этот ивент
  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div>
      <form className="loginForm">
        <div className="input">
          {emailDirty && emailErr && (
            <div style={{ color: "red" }}>{emailErr}</div>
          )}
          <span>Email</span>
          <Input
            value={email}
            onBlur={blurHandler}
            onChange={emailHandler}
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
            onBlur={blurHandler}
            onChange={passwordHandler}
            type="password"
            name="password"
          />
        </div>

        <Button
          disabled={!formValid}
          className={("button")}
          btnContent="Login"
        />

        <div className="resetLogin">
          <span>Forgot your password?</span>
          <Button className={"btnReset"} btnContent={"Reset password"} />
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
