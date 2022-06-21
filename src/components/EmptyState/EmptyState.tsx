import React from "react";
import "./EmptyState.css";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classnames from "classnames";
import { type } from "@testing-library/user-event/dist/type";
import EmptyImg from "../EmptyImg";

const EmptyState = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  return (
    <div
      className={classnames(
        "emptyStateContainer"
        // { ["container"]: isLightTheme },
        // { ["darkContainer"]: !isLightTheme }
      )}
    >
      <EmptyImg fill={isLightTheme ? "#8080806b" : "#2e1a1e"} />
      <p
        className={classnames(
          isLightTheme ? "emptyStateTitle" : "emptyStateTitleDark"
        )}
      >
        No posts
      </p>
    </div>
  );
};

export default EmptyState;
