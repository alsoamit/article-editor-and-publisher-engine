import React, { useState } from "react";
import { Editor } from ".";
import { Menu, Controls } from "./helper-comps";

export default function NewPost() {
  const [file, setFile] = useState(null);
  const [autosave, setAutoSave] = useState(false);

  // create URL and update file changes
  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  // for autosave radio button
  const handleAutoSave = (e) => {
    setAutoSave((autosave) => !autosave);
    console.log(autosave);
  };

  return (
    <div>
      <div>
        <input type="text" />
        <div>
          <input type="file" onChange={handleFileChange} />
          <img src={file}></img>
        </div>
        <div>
          <Editor autosave={autosave} />
          <Menu autosave={autosave} handleAutoSave={handleAutoSave} />
        </div>
        <Controls
          onPublish={() => {}}
          onDraft={() => {}}
          onDiscard={() => {}}
        />
      </div>
    </div>
  );
}
