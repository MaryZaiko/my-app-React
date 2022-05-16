import { legacy_createStore as createStore } from "redux";

export function activeInfoTabsReducer(
  state = { activeTab: "tab1" },
  action: any
) {
  switch (action.type) {
    case "activeTab1":
      return { activeTab: "tab1" };
    case "activeTab2":
      return { activeTab: "tab2" };
    case "activeTab3":
      return { activeTab: "tab3" };
    default:
      return state;
  }
}
