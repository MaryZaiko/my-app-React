import React from "react";
import "./HeaderPages.css";
import Sidebar from "../Sidebar";

const HeaderPages = () => {
  return (
    // <div className="headerPages">
    //  <div>
    //  <span>
    //       <i className="fa-solid fa-bars headerItem"></i>
    //     </span>
    //     <span>
    //       <i className="fa-solid fa-user headerItem"></i>
    //     </span>
    //     <span className="headerItem">Username</span>
    //  </div>
   
     
    // </div>

    
        <div className="App" id="outer-container">
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <div id="page-wrap">
          <div className="headerPages">
     {/* <span>
          <i className="fa-solid fa-bars headerItem"></i>
        </span> */}
        <span>
          <i className="fa-solid fa-user headerItem"></i>
        </span>
        <span className="headerItem">Username</span>
     </div>
   
          </div>
        </div>
    

  );
};

export default HeaderPages;
