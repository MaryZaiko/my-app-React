import React from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HeaderPages from "../../components/HeaderPages";
import Authorization from "../Authorization";
import Confirmation from "../Confirmation";
import ContentTitle from "../ContentTitle";
import Information from "../Information";
import MyPosts from "../MyPosts";
import { AuthSelector } from "../../redux/reducers/authReducer";

const Router = () => {
  const isLoggedIn = useSelector(AuthSelector.getLogStatus);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<HeaderPages />}>
            <Route path={"/cards-list"} element={<MyPosts />}></Route>
            <Route path={"/cards-list/:id"} element={<ContentTitle />} />
            <Route path={"/info"} element={<Information />}></Route>
          </Route>
          <Route path={"*"} element={<Navigate to={"/cards-list"} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/auth"} element={<Authorization />} />
          <Route path={"/confirm"} element={<Confirmation />} />

          <Route path={"*"} element={<Navigate to={"/auth"} replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
