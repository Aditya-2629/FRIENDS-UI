import Editor from "@monaco-editor/react";

const EditorPanel = ({ code }) => {
  return (
    <Editor
      value={code}
      height="100%"
      theme="vs-dark"
      language="html"
    />
  );
};

export default EditorPanel;
