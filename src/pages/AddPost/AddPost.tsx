import React, { useState } from "react";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import classnames from "classnames";
import "./AddPost.css";
import Input from "../../components/Input";

import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/reducers/postsReducer";

const AddPost = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lessonNum, setLessonNum] = useState(0);
  const [image, setImage] = useState("");

  const fileTypes = ["JPG", "JPEG", "PNG", "SVG"];

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    const postData = {
      title,
      text,
      lesson_num: lessonNum,
      image,
    };
    dispatch(createPost(postData));
    console.log(postData);
    
  };

  const onChangeImage = (info: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(info);
    reader.onload = function () {
      const dataUrl = reader.result;
      if (dataUrl && typeof dataUrl === "string") {
        const base64 = dataUrl.split(",")[1];
        setImage(base64);
      }
    };
  };
  const onCancelForm = () => {
    setTitle("");
    setText("");
    setLessonNum(0);
    setImage("");
  };
  return (
    <div
      className={classnames(
        "addPostContainer",
        isLightTheme ? "container" : "darkContainer"
      )}
    >
      <form
        onSubmit={onSubmitForm}
        className={classnames("addPostForm", {
          ["addPostFormDark"]: !isLightTheme,
        })}
      >
        <h1>Create post</h1>
        <label>
          <div>Post title:</div>
          <Input
            className={"inputCreate"}
            type={"text"}
            placeholder={"Post title"}
            value={title}
            name={""}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <div>Post text:</div>
          <textarea
            value={text}
            className={"textareaCreate"}
            placeholder={"Post text"}
            onChange={(e: any) => setText(e.target.value)}
          />
        </label>

        <label>
          <div>Lesson number:</div>
          <Input
            className={"inputCreate"}
            type={"text"}
            placeholder={"Post title"}
            value={lessonNum}
            name={""}
            onChange={(e: any) => setLessonNum(e.target.value)}
          />
        </label>
        <label>
          <div>Add image:</div>
          <FileUploader
            handleChange={onChangeImage}
            name="file"
            types={fileTypes}
          >
            {image ? (
              <img
                src={`data:image/jpeg;base64, ${image}`}
                alt={"product"}
                className={"image"}
              />
            ) : (
              <div className={"dragAndDrop"}>
                {"Drag & drop or browse file"}
              </div>
            )}
          </FileUploader>
        </label>
        <div className="formActions">
          <button
            className={classnames(
              "btnTabActive",
              isLightTheme ? "btnTab" : "btnTabDark"
            )}
          >
            Add
          </button>
          <button
            className={classnames(
              "btnTabActive ",
              isLightTheme ? "btnTab" : "btnTabDark"
            )}
            onClick={onCancelForm}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
