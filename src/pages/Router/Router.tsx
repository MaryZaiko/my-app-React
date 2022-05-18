import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HeaderPages from "../../components/HeaderPages";
import PostsList from "../../components/PostsList";
import Authorization from "../Authorization";
import Confirmation from "../Confirmation";
import ContentTitle from "../ContentTitle";
import Information from "../Information";
import MyPosts from "../MyPosts";

const Router = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<HeaderPages />}>
            <Route path="cards-list" element={<MyPosts />}></Route>
            <Route path="cards-list/:id" element={<ContentTitle />} />

            <Route path="info" element={<Information />}></Route>
          </Route>
          <Route path='*' element={<Navigate to={'/'} replace/>}/>
        </Routes>
      ) : (
        <Routes>
          <Route path={"/"} element={<Authorization />}>
            {" "}
          </Route>
          <Route path={"/confirm"} element={<Confirmation />}>
            {" "}
          </Route>
          <Route path='*'/>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
