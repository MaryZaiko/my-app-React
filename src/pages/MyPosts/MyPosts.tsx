import React, { FC, useEffect, useState } from "react";
import "./MyPosts.css";
import PostsList from "../../components/PostsList";
import Button from "../../components/Button";
import Input from "../../components/Input";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import PopUp from "../../components/PopUp";
import {
  PostSelectors,
  setPostsTab,
  loadData,
  loadMyPosts,
} from "../../redux/reducers/postsReducer";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/Fireworks.json";
import EmptyState from "../../components/EmptyState";

const MyPosts = ({ isPersonal }: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const selectedImage = useSelector(PostSelectors.getSelectedImage);
  const activeTab = useSelector(PostSelectors.getPostsTab);
  const cardsList = useSelector((state) =>
    PostSelectors.getCards(state, activeTab, isPersonal)
  );
  const allPostsLoading = useSelector(PostSelectors.getAllPostsLoading);
  const totalCount = useSelector(PostSelectors.getTotalAllPostsCount);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);

  const [ordering, setOrdering] = useState("date");

  const pageCount = Math.floor(totalCount / limit);

  useEffect(() => {
    const offset = page * limit;
    dispatch(
      isPersonal
        ? loadMyPosts({ search, limit, offset })
        : loadData({ search, limit, offset, ordering })
    );
  }, [isPersonal, search, page, limit, ordering]);

  const TABS = [
    { tabName: "All", id: "allPosts" },
    { tabName: <i className="fa-regular fa-thumbs-up"></i>, id: "likedPosts" },
    {
      tabName: <i className="fa-regular fa-thumbs-down"></i>,
      id: "dislikedPosts",
    },
    { tabName: <i className="fa-solid fa-bookmark"></i>, id: "savedPosts" },
  ];

  const onTabClick = (tab: string) => {
    dispatch(setPostsTab(tab));
  };
  const onSearch = (event: any) => {
    setSearch(event.target.value);
    setPage(1);
    // setOrder('date')
  };

  const onLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPage(1);
    // setOrder('date')
  };
  const onClickPrevious = () => {
    setPage(page - 1);
  };
  const onClickNext = () => {
    setPage(page + 1);
  };
  const onChangeSelect = (e: any) => {
    setOrdering(e.target.value); //ругается при выборе даты 403
    setPage(1);

  };

  return (
    <div
      className={classnames(
        "myPosts",
        { ["container"]: isLightTheme },
        { ["darkContainer"]: !isLightTheme }
      )}
    >
      <div className="titlePostsContainer">
        <h1 className="headerTitle">{isPersonal ? "My Posts" : "All posts"}</h1>
        <Button className={"btnAny"} btnContent={"+Add"} onClick={() => {}} />
      </div>

      <Input
        value={search}
        name={""}
        type={"text"}
        onChange={onSearch}
        placeholder="Search"
        className="inputSearch"
      />

      <div className="sortContainer">
        <div>
          {TABS.map((tab) => {
            return (
              <button
                key={tab.id}
                className={classnames(
                  isLightTheme ? "btnTab" : "btnTabDark",
                  "btnPostTab",

                  { ["btnTabActive"]: tab.id === activeTab }
                )}
                onClick={() => onTabClick(`${tab.id}`)}
              >
                {tab.tabName}
              </button>
            );
          })}
        </div>
        <div>
          <select onChange={onChangeSelect} name="sort" id="sort">
            <option value="date">Date</option>
            <option value="title">Title</option>
            <option value="text">Text</option>
            <option value="lesson_num">Lesson</option>
          </select>
        </div>
      </div>
      {allPostsLoading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : cardsList.length > 0 ? (
        <>
          <PostsList data={cardsList} isPersonal />
          <div className="paginationContainer">
            {page !== 1 && (
              <div onClick={onClickPrevious}>
                <i className="fa-solid fa-chevron-left"></i>
              </div>
            )}
            <Input
              type={"number"}
              value={limit}
              onChange={onLimitChange}
              name={""}
              className="inputLimit"
            />
            {pageCount !== page && (
              <div onClick={onClickNext}>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            )}
          </div>
          <span className="pageNum">{page}</span>
        </>
      ) :(
        <EmptyState />
      )}

      {selectedImage && (
        <PopUp>
          <img src={selectedImage} />
        </PopUp>
      )}
    </div>
  );
};

export default MyPosts;
