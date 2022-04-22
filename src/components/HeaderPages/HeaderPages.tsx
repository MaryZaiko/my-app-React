import React from "react";
import "./HeaderPages.css";

const HeaderPages = () => {
  return (
    <div className="headerPages">
     <div>
     <span>
          <i className="fa-solid fa-bars headerItem"></i>
        </span>
        <span>
          <i className="fa-solid fa-user headerItem"></i>
        </span>
        <span className="headerItem">Username</span>
     </div>
   
     
    </div>
  );
};

export default HeaderPages;
