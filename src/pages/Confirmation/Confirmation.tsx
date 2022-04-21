import React from "react";
import Button from "../../components/Button";
import "./Confirmation.css";

const Confirmation = () => {
  return (
    <div className="confirmation">
      <div className="icon-menu">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png" />
      </div>
      <div className="confirmation-container">
        <h1 className="title">Registration Confirmation</h1>
        
        <p className="confirmation-message">
          Please activate you account with <br />
          the activation link in the email
          <a href="mailto:test@gmail.com">test@gmail.com</a> <br />
          Please, check your email.
        </p>
        <Button btnContent={"Home"} />
      </div>
    </div>
  );
};

export default Confirmation;
