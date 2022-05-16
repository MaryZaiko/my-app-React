import React, { FC, useState } from "react";
import "./Information.css";
import HeaderPages from "../../components/HeaderPages";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import Button from "../../components/Button";

import { useDispatch, useSelector } from "react-redux";

const Information = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: any) => state.theme.theme);
  const isLightTheme = theme === 'light';

  const activeTab = useSelector((state: any) => state.activeTabs.activeTab);

  const onClickActiveTab = (name: string) => {
    switch (true) {
      case name === "tab1":
        dispatch({ type: "activeTab1" });
        break;
      case name === "tab2":
        dispatch({ type: "activeTab2" });
        break;
      case name === "tab3":
        dispatch({ type: "activeTab3" });
        break;
    }
  };

  const MOCK_DATA = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  ];

  const TABS = [
    { tabName: "Tab 1", id: "tab1" },
    { tabName: "Tab 2", id: "tab2" },
    { tabName: "Tab 3", id: "tab3" },
  ];

  return (
    <div
      className={classnames(
        "Information",
        { ["container"]: isLightTheme },
        { ["darkContainer"]: !isLightTheme }
      )}
    >
      <h1 className="informationTitle">Information</h1>
      <div className="tabsContainer">
        {TABS.map((tab) => {
          return (
            <Button
              key={tab.id}
              className={classnames(
                isLightTheme ? "buttonTab" : "buttonTabDark",
                { ["buttonTabActive"]: tab.id === activeTab }
              )}
              btnContent={tab.tabName}
              onClick={() => onClickActiveTab(tab.id)}
            />
          );
        })}
      </div>

      <div
        className={classnames("textContainer", {
          ["textContainerDark"]: !isLightTheme,
        })}
      >
        <p>
          {activeTab === "tab1"
            ? MOCK_DATA[0]
            : activeTab === "tab2"
            ? MOCK_DATA[1]
            : MOCK_DATA[2]}
        </p>
      </div>
    </div>
  );
};

export default Information;
