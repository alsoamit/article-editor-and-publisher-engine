import React, { useState } from "react";
import "./styles/NewPost.css";
import { Editor } from ".";
import { Menu, Controls } from "./helper-comps";
import uuid from "react-uuid";

// import the store
import { store } from "../stateMangement";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("./banner.png");
  const [autosave, setAutoSave] = useState(false);
  const [rtValue, setRtValue] = React.useState({ content: "" });

  // Observe and update data to Editor's State on every change
  const handleQuilChange = (content, delta, source, editor) => {
    setRtValue({ content });
    // console.log(delta, content);
  };

  // create URL and update file changes
  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  // for autosave radio button
  const toggleAutoSave = (e) => {
    setAutoSave((autosave) => !autosave);
    // console.log(autosave);
  };

  // The action dispatcher
  const dispatcher = (type) => {
    store.dispatch({
      type: type,
      payload: {
        id: uuid(),
        title,
        banner:
          file === "./banner.png"
            ? "https://images.unsplash.com/photo-1629640570016-b81b0ab67548?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            : file,
        data: rtValue,
      },
    });
  };

  const reset = () => {
    setRtValue({ content: "" });
    setTitle("");
    setFile("./banner.png");
  };

  const onPublish = () => {
    dispatcher("publish");
    reset();
    // console.log("published");
  };

  const onDraft = () => {
    dispatcher("draft");
    reset();
    // console.log("dispatched");
  };

  const onDiscard = () => {
    reset();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <main>
      <input
        type="text"
        className="title"
        value={title}
        placeholder="Title of the Post"
        required
        onChange={handleTitleChange}
      />
      <div
        className={
          file === "./banner.png" ? "banner placeholder" : "banner file"
        }
      >
        <img src={file} alt="Upload The Banner" />
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className="editor__wrap">
        <Editor
          autosave={autosave}
          rtValue={rtValue}
          handleQuilChange={handleQuilChange}
        />
        <Menu autosave={autosave} toggleAutoSave={toggleAutoSave} />
      </div>
      <Controls onPublish={onPublish} onDraft={onDraft} onDiscard={onDiscard} />
    </main>
  );
}
