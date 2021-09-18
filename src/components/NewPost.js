import React, { useState } from "react";
import "./styles/NewPost.css";
import { Editor } from ".";
import { Menu, Controls } from "./helper-comps";
import uuid from "react-uuid";

// import the store
import { store } from "../stateMangement";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
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
        banner: file,
        data: rtValue,
      },
    });
  };

  const onPublish = () => {
    dispatcher("publish");
    // console.log("published");
  };

  const onDraft = () => {
    dispatcher("draft");
    // console.log("dispatched");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <main>
      <input type="text" required onChange={handleTitleChange} />
      <div>
        <input type="file" onChange={handleFileChange} />
        <img src={file} alt="banner" />
      </div>
      <div>
        <Editor
          autosave={autosave}
          rtValue={rtValue}
          handleQuilChange={handleQuilChange}
        />
        <Menu autosave={autosave} toggleAutoSave={toggleAutoSave} />
      </div>
      <Controls onPublish={onPublish} onDraft={onDraft} onDiscard={() => {}} />
    </main>
  );
}
