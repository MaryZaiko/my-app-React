import React, {FC} from "react";
import "./HeaderAuth.css";
import Button from "../Button";
import classnames from "classnames";

type HeaderAuthProps = {
  onClick: (name:string) => void;
  tabActive:string;
}

const HeaderAuth: FC<HeaderAuthProps> = ({onClick, tabActive}) => {

  const isLoginActive = tabActive === "login"  


  return (
    <div className="titleContainer">
          <Button
            className={classnames(`btnTitle btnLogin`, {
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
            onClick={() => {onClick("registration")}}
          />
        </div>
  );
};

export default HeaderAuth;
