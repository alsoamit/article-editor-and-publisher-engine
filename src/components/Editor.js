import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorTools";
import "react-quill/dist/quill.snow.css";

export default function Editor({ rtValue, handleQuilChange }) {
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={rtValue.content}
        onChange={handleQuilChange}
        placeholder={"Start writing the post.."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
