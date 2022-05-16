import React, { Dispatch, FC, SetStateAction } from "react";
import MDEditor from "@uiw/react-md-editor";

type MarkdownEditorProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const MarkdownEditor: FC<MarkdownEditorProps> = ({ value, setValue }) => {
  return <MDEditor value={value} onChange={(v) => setValue(v ?? "")} />;
};

export default MarkdownEditor;
