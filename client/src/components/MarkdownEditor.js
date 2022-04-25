import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const MarkdownEditor = () => {
  const [value, setValue] = useState();
  return <MDEditor value={value} onChange={setValue} preview={"edit"} />;
};

export default MarkdownEditor;
