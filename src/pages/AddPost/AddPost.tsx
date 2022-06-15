import React, { useState, useEffect } from "react";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import classnames from "classnames";
import "./AddPost.css";
import Input from "../../components/Input";

import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/reducers/postsReducer";
import Button from "../../components/Button";

const AddPost = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [errTitle, setErrTitle] = useState("This field must not be empty");
  const [titleDirty, setTitleDirty] = useState(false);

  const [text, setText] = useState("");
  const [errText, setErrText] = useState("This field must not be empty");
  const [textDirty, setTextDirty] = useState(false);

  const [lessonNum, setLessonNum] = useState(0);
  const [errLessonNum, setErrLessonNum] = useState(
    "This field must not be empty"
  );
  const [lessonNumDirty, setLessonNumDirty] = useState(false);

  const [image, setImage] = useState("");

  const [formValid, setFormValid] = useState(false);

  const fileTypes = ["JPG", "JPEG", "PNG", "SVG"];

  useEffect(() => {
    if (errTitle || errText || errLessonNum) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errTitle, errText, errLessonNum]);

  const onCancelForm = () => {
    setTitle("");
    setText("");
    setLessonNum(0);
    setImage("");
  };

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
    onCancelForm();
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


  const titleHandler = (e: any) => {
    if (e.target.value.length === 0) {
      setErrTitle("This field must not be empty");
    } else {
      setTitle(e.target.value);
      setErrTitle("");
    }
  };
  const textHandler= (e: any) => {
   
    if (e.target.value.length === 0) {
      setErrText("This field must not be empty");
    } else {
      setText(e.target.value);
      setErrText("");
    }
  };
  const lessonNumHandler = (e: any) => {
    const re = /^(0|-?[1-9]\d{0,5})$/;
    
    setLessonNum(e.target.value);

    if (e.target.value.length === 0) {
      setErrLessonNum("This field must not be empty");
    } else if (!re.test(e.target.value)) {
      setErrLessonNum("Value is not correct");
    } else {
      setErrLessonNum("");
    }
  };
  
  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "title":
        setTitleDirty(true);
        break;
      case "text":
        setTextDirty(true);
        break;
      case "lessonNum":
        setLessonNumDirty(true);
    }
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
          {titleDirty && errTitle && (
            <div style={{ color: "red" }}>{errTitle}</div>
          )}

          <div>Post title:</div>
          <Input
            className={"inputCreate"}
            type={"text"}
            placeholder={"Post title"}
            value={title}
            name={"title"}
            onChange={(e) => titleHandler(e)}
            onBlur={(e) => blurHandler(e)}
          />
        </label>

        <label>
          {textDirty && errText && (
            <div style={{ color: "red" }}>{errText}</div>
          )}
          <div>Post text:</div>
          <textarea
            value={text}
            className={"textareaCreate"}
            placeholder={"Post text"}
            name={"text"}
            onChange={(e) => textHandler(e)}
            onBlur={(e) => blurHandler(e)}
          />
        </label>

        <label>
          {lessonNumDirty && errLessonNum && (
            <div style={{ color: "red" }}>{errLessonNum}</div>
          )}
          <div>Lesson number:</div>
          <Input
            className={"inputCreate"}
            type={"text"}
            placeholder={"Post title"}
            value={lessonNum}
            name={"lessonNum"}
            onChange={(e) => lessonNumHandler(e)}
            onBlur={(e) => blurHandler(e)}
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
          <Button
            disabled={!formValid}
            className={classnames(
              "btnTabActive ",
              isLightTheme ? "btnTab" : "btnTabDark"
            )}
            btnContent="Add"
          />
          <Button
            className={classnames(
              "btnTabActive ",
              isLightTheme ? "btnTab" : "btnTabDark"
            )}
            btnContent="Cancel"
            onClick={onCancelForm}
          />
        </div>
      </form>
    </div>
  );
};

export default AddPost;
