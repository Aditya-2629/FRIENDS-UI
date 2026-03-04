import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";

const EditorPanel = ({ code, setCode }) => {
  const [editorCode, setEditorCode] = useState(code);

    useEffect(() => {
        setEditorCode(code);
          }, [code]);

            const handleChange = (value) => {
                setEditorCode(value);
                    setCode(value);
                      };

                        return (
                            <Editor
                                  value={editorCode}
                                        onChange={handleChange}
                                              height="100%"
                                                    theme="vs-dark"
                                                          language="html"
                                                                options={{
                                                                        fontSize: 14,
                                                                                minimap: { enabled: false },
                                                                                        wordWrap: "on",
                                                                                                automaticLayout: true,
                                                                                                      }}
                                                                                                          />
                                                                                                            );
                                                                                                            };

                                                                                                            export default EditorPanel;