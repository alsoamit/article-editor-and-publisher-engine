import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorTools";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
  const [rtValue, setRtValue] = React.useState({ content: "" });

  // Observe and update data to Editor's State on every change
  const handleChange = (content, delta, source, editor) => {
    setRtValue({ content });
    // console.log(content, delta, source, editor);
  };

  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={rtValue.content}
        onChange={handleChange}
        placeholder={"Start writing the post.."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
