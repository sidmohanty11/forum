import React from "react";
import MDEditor from "@uiw/react-md-editor";

const MarkdownEditor = ({ value, setValue }) => {
  return <MDEditor value={value} onChange={setValue} />;
};

export default MarkdownEditor;
